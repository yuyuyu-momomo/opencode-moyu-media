/** Runs only on the user's machine. No cookie values in scripts, args or logs.
 * The bridge exposes two operations against its own temporary browser: cookies
 * and close. It never attaches to the user's normal browser profile.
 */
export const windowsLoginScript = String.raw`
$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding($false)
$profileDir = $null; $browser = $null; $socket = $null; $ready = $false
function Emit($value) { [Console]::WriteLine(($value | ConvertTo-Json -Depth 12 -Compress)); [Console]::Out.Flush() }
function Cdp($id, $method) {
  $cts = New-Object System.Threading.CancellationTokenSource
  $cts.CancelAfter(8000)
  try {
    $message = @{id=$id; method=$method} | ConvertTo-Json -Compress
    $bytes = [Text.Encoding]::UTF8.GetBytes($message)
    $segment = New-Object 'System.ArraySegment[byte]' -ArgumentList @(,$bytes)
    $socket.SendAsync($segment,[Net.WebSockets.WebSocketMessageType]::Text,$true,$cts.Token).GetAwaiter().GetResult() | Out-Null
    for ($event=0; $event -lt 200; $event++) {
      $stream = New-Object IO.MemoryStream
      try {
        do {
          $buffer = New-Object byte[] 16384
          $part = New-Object 'System.ArraySegment[byte]' -ArgumentList @(,$buffer)
          $result = $socket.ReceiveAsync($part,$cts.Token).GetAwaiter().GetResult()
          if ($result.MessageType -eq [Net.WebSockets.WebSocketMessageType]::Close) { throw 'closed' }
          $stream.Write($buffer,0,$result.Count)
          if ($stream.Length -gt 2097152) { throw 'size' }
        } while (!$result.EndOfMessage)
        $reply = [Text.Encoding]::UTF8.GetString($stream.ToArray()) | ConvertFrom-Json
        if ($reply.id -eq $id) {
          if ($reply.error) { throw 'protocol' }
          return $reply.result
        }
      } finally { $stream.Dispose() }
    }
    throw 'events'
  } finally { $cts.Dispose() }
}
try {
  $cfg = [Console]::ReadLine() | ConvertFrom-Json
  $url = [Uri]$cfg.url
  if ($url.Scheme -ne 'https' -or $url.UserInfo -or $url.Port -ne 443 -or $url.Host -notin @('passport.jd.com','login.taobao.com','mobile.yangkeduo.com')) { throw 'origin' }
  if (!(Test-Path -LiteralPath $cfg.browser -PathType Leaf) -or [IO.Path]::GetFileName($cfg.browser) -notin @('chrome.exe','msedge.exe','chromium.exe')) { throw 'browser' }
  $profileDir = Join-Path ([IO.Path]::GetTempPath()) ('moyu-shopping-private-' + [Guid]::NewGuid().ToString('N'))
  [IO.Directory]::CreateDirectory($profileDir) | Out-Null
  $psi = New-Object Diagnostics.ProcessStartInfo
  $psi.FileName = $cfg.browser
  $psi.Arguments = '--no-first-run --no-default-browser-check --disable-sync --disable-extensions --remote-debugging-address=127.0.0.1 --remote-debugging-port=0 --user-data-dir="' + $profileDir + '" --new-window "' + $url.AbsoluteUri + '"'
  $psi.UseShellExecute = $false
  $psi.RedirectStandardOutput = $true; $psi.RedirectStandardError = $true
  $browser = New-Object Diagnostics.Process; $browser.StartInfo = $psi
  $browser.Start() | Out-Null
  $discardOut = $browser.StandardOutput.ReadToEndAsync(); $discardErr = $browser.StandardError.ReadToEndAsync()
  $active = Join-Path $profileDir 'DevToolsActivePort'
  $deadline = [DateTime]::UtcNow.AddSeconds(25)
  while (!(Test-Path -LiteralPath $active)) {
    if ([DateTime]::UtcNow -gt $deadline -or $browser.HasExited) { throw 'startup' }
    Start-Sleep -Milliseconds 100
  }
  $lines = [IO.File]::ReadAllLines($active)
  if ($lines.Length -lt 2 -or $lines[0] -notmatch '^\d{1,5}$' -or $lines[1] -notmatch '^/devtools/browser/[a-zA-Z0-9-]+$') { throw 'endpoint' }
  $socket = New-Object Net.WebSockets.ClientWebSocket
  $cts = New-Object Threading.CancellationTokenSource; $cts.CancelAfter(8000)
  try { $socket.ConnectAsync([Uri]('ws://127.0.0.1:'+$lines[0]+$lines[1]),$cts.Token).GetAwaiter().GetResult() | Out-Null } finally { $cts.Dispose() }
  $ready = $true; Emit @{event='ready'}
  while ($line = [Console]::ReadLine()) {
    $request = $line | ConvertFrom-Json
    if ($request.command -eq 'close') { try { Cdp 999999 'Browser.close' | Out-Null } catch {}; break }
    if ($request.command -ne 'cookies') { throw 'command' }
    $result = Cdp ([int]$request.id) 'Storage.getCookies'
    Emit @{id=$request.id; cookies=@($result.cookies)}
  }
} catch { Emit @{event='error'; code=$(if($ready){'window-closed'}else{'browser-startup'})} }
finally {
  if ($socket) { $socket.Dispose() }
  if ($browser) {
    try { if (!$browser.HasExited) { $browser.CloseMainWindow() | Out-Null; if (!$browser.WaitForExit(2500)) { $browser.Kill(); $browser.WaitForExit(2500) | Out-Null } } } catch {}
    $browser.Dispose()
  }
  if ($profileDir -and [IO.Path]::GetFileName($profileDir) -match '^moyu-shopping-private-[a-f0-9]{32}$') {
    for ($i=0; $i -lt 20; $i++) {
      try { Remove-Item -LiteralPath $profileDir -Force -Recurse -ErrorAction Stop; break } catch { Start-Sleep -Milliseconds 150 }
    }
  }
}
`
