# 发布与隐私检查

项目发布使用统一贡献者署名 `Moyu contributors` 和占位地址 `contributors@opencode-moyu.invalid`，后者属于保留的 `.invalid` 域，不接收邮件。GitHub 仓库仍有公开所属账号，项目署名不提供账户匿名保证。保留依赖许可证中的第三方作者和版权信息。

## 发布前检查

1. 检查待发布文件，排除个人联系方式、用户目录、设备名、真实账号、令牌、Cookie、密钥、资料库和配置备份。`.gitignore` 不能移除已跟踪的文件或旧历史。
2. 运行 `npm run build`、`npm run typecheck`、`npm test` 和 `npm run test:privacy`；运行 `npm run package:zip` 后复查 ZIP 中的实际文件。
3. 运行 `npm run audit:public`。该检查覆盖未被忽略的候选文件、归档中的文件，以及主分支全部可达提交的署名、时区和内容。它是针对性检查，不能证明已发现所有秘密或个人信息。
4. 对本机已知个人信息，可增加本地私密 JSON 字符串数组，使用 `python3 scripts/audit-public.py --history HEAD --private-patterns /path/outside/repo/private-patterns.json --report /path/outside/repo/audit.json`。匹配值不写入报告，不要把私密模式文件提交到仓库。
5. 使用本地 Git 的项目署名提交和推送，确认远端分支与发布版本一致。网页编辑、第三方 GitHub 写入工具或自动化可能另行填写提交者信息，发布前需要重新核对。

建议为此仓库配置：

```bash
git config --local user.name 'Moyu contributors'
git config --local user.email 'contributors@opencode-moyu.invalid'
git config --local user.useConfigOnly true
```

提交时采用 UTC 时区可避免在提交日期中额外公开本机时区：`TZ=UTC git commit ...`。当前仓库的本地推送检查还会拒绝重新引入个人署名的历史；Git 钩子是本机配置，不会自动随克隆传播，开发者需要自行设置。CI、镜像、分支、标签、Release 附件、Issue、PR、Actions 日志和个人资料都应作为独立公开面检查。

## 历史中出现敏感信息时

真实凭据应先在原服务撤销或轮换。历史清理先创建仅本机可读的备份，列出受影响的分支、标签、PR 和附件，再在隔离副本处理，验证程序文件和版本完整，最后针对确切分支使用带预期旧值的 `--force-with-lease`。备份、旧引用和私密清理报告不得推送回公开仓库。

历史重写会改变提交哈希，旧克隆应重新克隆或按 GitHub 文档迁移，直接合并旧分支可能把已清除的内容带回。旧 SHA 缓存、他人的 Fork / 克隆、已下载的安装包和外部搜索索引不受本仓库控制；必要时通过 GitHub 官方支持处理服务器侧缓存，不能把一次推送描述为全网删除。

参考：[GitHub 历史敏感信息清理](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)、[IANA 保留域名](https://www.iana.org/assignments/special-use-domain-names/special-use-domain-names.xhtml)。
