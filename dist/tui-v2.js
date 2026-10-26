var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS({
  "node_modules/emoji-regex/index.js"(exports, module) {
    module.exports = () => {
      return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
    };
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val2, options) {
      options = options || {};
      var type = typeof val2;
      if (type === "string" && val2.length > 0) {
        return parse6(val2);
      } else if (type === "number" && isFinite(val2)) {
        return options.long ? fmtLong(val2) : fmtShort(val2);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val2)
      );
    };
    function parse6(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index2 = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index2++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val2 = args[index2];
              match = formatter.call(self, val2);
              args.splice(index2, 1);
              index2--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter3) {
        const newDebug = createDebug(this.namespace + (typeof delimiter3 === "undefined" ? ":" : delimiter3) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const ns of split) {
          if (ns[0] === "-") {
            createDebug.skips.push(ns.slice(1));
          } else {
            createDebug.names.push(ns);
          }
        }
      }
      function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while (searchIndex < search.length) {
          if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
            if (template[templateIndex] === "*") {
              starIndex = templateIndex;
              matchIndex = searchIndex;
              templateIndex++;
            } else {
              searchIndex++;
              templateIndex++;
            }
          } else if (starIndex !== -1) {
            templateIndex = starIndex + 1;
            matchIndex++;
            searchIndex = matchIndex;
          } else {
            return false;
          }
        }
        while (templateIndex < template.length && template[templateIndex] === "*") {
          templateIndex++;
        }
        return templateIndex === template.length;
      }
      function disable() {
        const namespaces = [
          ...createDebug.names,
          ...createDebug.skips.map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        for (const skip of createDebug.skips) {
          if (matchesTemplate(name, skip)) {
            return false;
          }
        }
        for (const ns of createDebug.names) {
          if (matchesTemplate(name, ns)) {
            return true;
          }
        }
        return false;
      }
      function coerce(val2) {
        if (val2 instanceof Error) {
          return val2.stack || val2.message;
        }
        return val2;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index2 = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index2++;
        if (match === "%c") {
          lastC = index2;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load2() {
      let r;
      try {
        r = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports, module) {
    var tty = __require("tty");
    var util = __require("util");
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = __require("supports-color");
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop2 = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val2 = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val2)) {
        val2 = true;
      } else if (/^(no|off|false|disabled)$/i.test(val2)) {
        val2 = false;
      } else if (val2 === "null") {
        val2 = null;
      } else {
        val2 = Number(val2);
      }
      obj[prop2] = val2;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix3 = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix3 + args[0].split("\n").join("\n" + prefix3);
        args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load2() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports, module) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module.exports = require_browser();
    } else {
      module.exports = require_node();
    }
  }
});

// node_modules/agent-base/dist/helpers.js
var require_helpers = __commonJS({
  "node_modules/agent-base/dist/helpers.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.req = exports.json = exports.toBuffer = void 0;
    var http2 = __importStar(__require("http"));
    var https2 = __importStar(__require("https"));
    async function toBuffer(stream) {
      let length = 0;
      const chunks = [];
      for await (const chunk of stream) {
        length += chunk.length;
        chunks.push(chunk);
      }
      return Buffer.concat(chunks, length);
    }
    exports.toBuffer = toBuffer;
    async function json(stream) {
      const buf = await toBuffer(stream);
      const str = buf.toString("utf8");
      try {
        return JSON.parse(str);
      } catch (_err) {
        const err = _err;
        err.message += ` (input: ${str})`;
        throw err;
      }
    }
    exports.json = json;
    function req(url, opts = {}) {
      const href = typeof url === "string" ? url : url.href;
      const req2 = (href.startsWith("https:") ? https2 : http2).request(url, opts);
      const promise = new Promise((resolve5, reject) => {
        req2.once("response", resolve5).once("error", reject).end();
      });
      req2.then = promise.then.bind(promise);
      return req2;
    }
    exports.req = req;
  }
});

// node_modules/agent-base/dist/index.js
var require_dist = __commonJS({
  "node_modules/agent-base/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Agent = void 0;
    var net = __importStar(__require("net"));
    var http2 = __importStar(__require("http"));
    var https_1 = __require("https");
    __exportStar(require_helpers(), exports);
    var INTERNAL = Symbol("AgentBaseInternalState");
    var Agent = class extends http2.Agent {
      constructor(opts) {
        super(opts);
        this[INTERNAL] = {};
      }
      /**
       * Determine whether this is an `http` or `https` request.
       */
      isSecureEndpoint(options) {
        if (options) {
          if (typeof options.secureEndpoint === "boolean") {
            return options.secureEndpoint;
          }
          if (typeof options.protocol === "string") {
            return options.protocol === "https:";
          }
        }
        const { stack } = new Error();
        if (typeof stack !== "string")
          return false;
        return stack.split("\n").some((l) => l.indexOf("(https.js:") !== -1 || l.indexOf("node:https:") !== -1);
      }
      // In order to support async signatures in `connect()` and Node's native
      // connection pooling in `http.Agent`, the array of sockets for each origin
      // has to be updated synchronously. This is so the length of the array is
      // accurate when `addRequest()` is next called. We achieve this by creating a
      // fake socket and adding it to `sockets[origin]` and incrementing
      // `totalSocketCount`.
      incrementSockets(name) {
        if (this.maxSockets === Infinity && this.maxTotalSockets === Infinity) {
          return null;
        }
        if (!this.sockets[name]) {
          this.sockets[name] = [];
        }
        const fakeSocket = new net.Socket({ writable: false });
        this.sockets[name].push(fakeSocket);
        this.totalSocketCount++;
        return fakeSocket;
      }
      decrementSockets(name, socket) {
        if (!this.sockets[name] || socket === null) {
          return;
        }
        const sockets = this.sockets[name];
        const index2 = sockets.indexOf(socket);
        if (index2 !== -1) {
          sockets.splice(index2, 1);
          this.totalSocketCount--;
          if (sockets.length === 0) {
            delete this.sockets[name];
          }
        }
      }
      // In order to properly update the socket pool, we need to call `getName()` on
      // the core `https.Agent` if it is a secureEndpoint.
      getName(options) {
        const secureEndpoint = this.isSecureEndpoint(options);
        if (secureEndpoint) {
          return https_1.Agent.prototype.getName.call(this, options);
        }
        return super.getName(options);
      }
      createSocket(req, options, cb) {
        const connectOpts = {
          ...options,
          secureEndpoint: this.isSecureEndpoint(options)
        };
        const name = this.getName(connectOpts);
        const fakeSocket = this.incrementSockets(name);
        Promise.resolve().then(() => this.connect(req, connectOpts)).then((socket) => {
          this.decrementSockets(name, fakeSocket);
          if (socket instanceof http2.Agent) {
            try {
              return socket.addRequest(req, connectOpts);
            } catch (err) {
              return cb(err);
            }
          }
          this[INTERNAL].currentSocket = socket;
          super.createSocket(req, options, cb);
        }, (err) => {
          this.decrementSockets(name, fakeSocket);
          cb(err);
        });
      }
      createConnection() {
        const socket = this[INTERNAL].currentSocket;
        this[INTERNAL].currentSocket = void 0;
        if (!socket) {
          throw new Error("No socket was returned in the `connect()` function");
        }
        return socket;
      }
      get defaultPort() {
        return this[INTERNAL].defaultPort ?? (this.protocol === "https:" ? 443 : 80);
      }
      set defaultPort(v) {
        if (this[INTERNAL]) {
          this[INTERNAL].defaultPort = v;
        }
      }
      get protocol() {
        return this[INTERNAL].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
      }
      set protocol(v) {
        if (this[INTERNAL]) {
          this[INTERNAL].protocol = v;
        }
      }
    };
    exports.Agent = Agent;
  }
});

// node_modules/https-proxy-agent/dist/parse-proxy-response.js
var require_parse_proxy_response = __commonJS({
  "node_modules/https-proxy-agent/dist/parse-proxy-response.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseProxyResponse = void 0;
    var debug_1 = __importDefault(require_src());
    var debug = (0, debug_1.default)("https-proxy-agent:parse-proxy-response");
    function parseProxyResponse(socket) {
      return new Promise((resolve5, reject) => {
        let buffersLength = 0;
        const buffers = [];
        function read() {
          const b = socket.read();
          if (b)
            ondata(b);
          else
            socket.once("readable", read);
        }
        function cleanup() {
          socket.removeListener("end", onend);
          socket.removeListener("error", onerror);
          socket.removeListener("readable", read);
        }
        function onend() {
          cleanup();
          debug("onend");
          reject(new Error("Proxy connection ended before receiving CONNECT response"));
        }
        function onerror(err) {
          cleanup();
          debug("onerror %o", err);
          reject(err);
        }
        function ondata(b) {
          buffers.push(b);
          buffersLength += b.length;
          const buffered = Buffer.concat(buffers, buffersLength);
          const endOfHeaders = buffered.indexOf("\r\n\r\n");
          if (endOfHeaders === -1) {
            debug("have not received end of HTTP headers yet...");
            read();
            return;
          }
          const headerParts = buffered.slice(0, endOfHeaders).toString("ascii").split("\r\n");
          const firstLine = headerParts.shift();
          if (!firstLine) {
            socket.destroy();
            return reject(new Error("No header received from proxy CONNECT response"));
          }
          const firstLineParts = firstLine.split(" ");
          const statusCode = +firstLineParts[1];
          const statusText = firstLineParts.slice(2).join(" ");
          const headers = {};
          for (const header of headerParts) {
            if (!header)
              continue;
            const firstColon = header.indexOf(":");
            if (firstColon === -1) {
              socket.destroy();
              return reject(new Error(`Invalid header from proxy CONNECT response: "${header}"`));
            }
            const key = header.slice(0, firstColon).toLowerCase();
            const value = header.slice(firstColon + 1).trimStart();
            const current = headers[key];
            if (typeof current === "string") {
              headers[key] = [current, value];
            } else if (Array.isArray(current)) {
              current.push(value);
            } else {
              headers[key] = value;
            }
          }
          debug("got proxy server response: %o %o", firstLine, headers);
          cleanup();
          resolve5({
            connect: {
              statusCode,
              statusText,
              headers
            },
            buffered
          });
        }
        socket.on("error", onerror);
        socket.on("end", onend);
        read();
      });
    }
    exports.parseProxyResponse = parseProxyResponse;
  }
});

// node_modules/https-proxy-agent/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/https-proxy-agent/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpsProxyAgent = void 0;
    var net = __importStar(__require("net"));
    var tls = __importStar(__require("tls"));
    var assert_1 = __importDefault(__require("assert"));
    var debug_1 = __importDefault(require_src());
    var agent_base_1 = require_dist();
    var url_1 = __require("url");
    var parse_proxy_response_1 = require_parse_proxy_response();
    var debug = (0, debug_1.default)("https-proxy-agent");
    var setServernameFromNonIpHost = (options) => {
      if (options.servername === void 0 && options.host && !net.isIP(options.host)) {
        return {
          ...options,
          servername: options.host
        };
      }
      return options;
    };
    var HttpsProxyAgent2 = class extends agent_base_1.Agent {
      constructor(proxy, opts) {
        super(opts);
        this.options = { path: void 0 };
        this.proxy = typeof proxy === "string" ? new url_1.URL(proxy) : proxy;
        this.proxyHeaders = opts?.headers ?? {};
        debug("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
        const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, "");
        const port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
        this.connectOpts = {
          // Attempt to negotiate http/1.1 for proxy servers that support http/2
          ALPNProtocols: ["http/1.1"],
          ...opts ? omit(opts, "headers") : null,
          host,
          port
        };
      }
      /**
       * Called when the node-core HTTP client library is creating a
       * new HTTP request.
       */
      async connect(req, opts) {
        const { proxy } = this;
        if (!opts.host) {
          throw new TypeError('No "host" provided');
        }
        let socket;
        if (proxy.protocol === "https:") {
          debug("Creating `tls.Socket`: %o", this.connectOpts);
          socket = tls.connect(setServernameFromNonIpHost(this.connectOpts));
        } else {
          debug("Creating `net.Socket`: %o", this.connectOpts);
          socket = net.connect(this.connectOpts);
        }
        const headers = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : { ...this.proxyHeaders };
        const host = net.isIPv6(opts.host) ? `[${opts.host}]` : opts.host;
        let payload = `CONNECT ${host}:${opts.port} HTTP/1.1\r
`;
        if (proxy.username || proxy.password) {
          const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
          headers["Proxy-Authorization"] = `Basic ${Buffer.from(auth).toString("base64")}`;
        }
        headers.Host = `${host}:${opts.port}`;
        if (!headers["Proxy-Connection"]) {
          headers["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
        }
        for (const name of Object.keys(headers)) {
          payload += `${name}: ${headers[name]}\r
`;
        }
        const proxyResponsePromise = (0, parse_proxy_response_1.parseProxyResponse)(socket);
        socket.write(`${payload}\r
`);
        const { connect, buffered } = await proxyResponsePromise;
        req.emit("proxyConnect", connect);
        this.emit("proxyConnect", connect, req);
        if (connect.statusCode === 200) {
          req.once("socket", resume);
          if (opts.secureEndpoint) {
            debug("Upgrading socket connection to TLS");
            return tls.connect({
              ...omit(setServernameFromNonIpHost(opts), "host", "path", "port"),
              socket
            });
          }
          return socket;
        }
        socket.destroy();
        const fakeSocket = new net.Socket({ writable: false });
        fakeSocket.readable = true;
        req.once("socket", (s) => {
          debug("Replaying proxy buffer for failed request");
          (0, assert_1.default)(s.listenerCount("data") > 0);
          s.push(buffered);
          s.push(null);
        });
        return fakeSocket;
      }
    };
    HttpsProxyAgent2.protocols = ["http", "https"];
    exports.HttpsProxyAgent = HttpsProxyAgent2;
    function resume(socket) {
      socket.resume();
    }
    function omit(obj, ...keys) {
      const ret = {};
      let key;
      for (key in obj) {
        if (!keys.includes(key)) {
          ret[key] = obj[key];
        }
      }
      return ret;
    }
  }
});

// node_modules/qrcode/lib/core/utils.js
var require_utils = __commonJS({
  "node_modules/qrcode/lib/core/utils.js"(exports) {
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version) {
      if (!version) throw new Error('"version" cannot be null or undefined');
      if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
      return version * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
      return CODEWORDS_COUNT[version];
    };
    exports.getBCHDigit = function(data2) {
      let digit = 0;
      while (data2 !== 0) {
        digit++;
        data2 >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f) {
      if (typeof f !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index2) {
        const bufIndex = Math.floor(index2 / 8);
        return (this.buffer[bufIndex] >>> 7 - index2 % 8 & 1) === 1;
      },
      put: function(num, length) {
        for (let i = 0; i < length; i++) {
          this.putBit((num >>> length - i - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size;
      this.data = new Uint8Array(size * size);
      this.reservedBit = new Uint8Array(size * size);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index2 = row * this.size + col;
      this.data[index2] = value;
      if (reserved) this.reservedBit[index2] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version) {
      if (version === 1) return [];
      const posCount = Math.floor(version / 7) + 2;
      const size = getSymbolSize(version);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i = 1; i < posCount - 1; i++) {
        positions[i] = positions[i - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version) {
      const coords = [];
      const pos = exports.getRowColCoords(version);
      const posLength = pos.length;
      for (let i = 0; i < posLength; i++) {
        for (let j = 0; j < posLength; j++) {
          if (i === 0 && j === 0 || // top-left
          i === 0 && j === posLength - 1 || // bottom-left
          i === posLength - 1 && j === 0) {
            continue;
          }
          coords.push([pos[i], pos[j]]);
        }
      }
      return coords;
    };
  }
});

// node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version) {
      const size = getSymbolSize(version);
      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data2) {
      const size = data2.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module2 = data2.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data2.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data2) {
      const size = data2.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last2 = data2.get(row, col) + data2.get(row, col + 1) + data2.get(row + 1, col) + data2.get(row + 1, col + 1);
          if (last2 === 4 || last2 === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data2) {
      const size = data2.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data2.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data2.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data2) {
      let darkCount = 0;
      const modulesCount = data2.data.length;
      for (let i = 0; i < modulesCount; i++) darkCount += data2.data[i];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i, j) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern2, data2) {
      const size = data2.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data2.isReserved(row, col)) continue;
          data2.xor(row, col, getMaskAt(pattern2, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data2, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data2);
        const penalty = exports.getPenaltyN1(data2) + exports.getPenaltyN2(data2) + exports.getPenaltyN3(data2) + exports.getPenaltyN4(data2);
        exports.applyMask(p, data2);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }
      return bestPattern;
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "node_modules/qrcode/lib/core/galois-field.js"(exports) {
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (function initTables() {
      let x = 1;
      for (let i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1;
        if (x & 256) {
          x ^= 285;
        }
      }
      for (let i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    })();
    exports.log = function log(n) {
      if (n < 1) throw new Error("log(" + n + ")");
      return LOG_TABLE[n];
    };
    exports.exp = function exp(n) {
      return EXP_TABLE[n];
    };
    exports.mul = function mul(x, y) {
      if (x === 0 || y === 0) return 0;
      return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
    };
  }
});

// node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "node_modules/qrcode/lib/core/polynomial.js"(exports) {
    var GF = require_galois_field();
    exports.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i = 0; i < p1.length; i++) {
        for (let j = 0; j < p2.length; j++) {
          coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
      }
      return coeff;
    };
    exports.mod = function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i = 0; i < divisor.length; i++) {
          result[i] ^= GF.mul(divisor[i], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0) offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i = 0; i < degree; i++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
      }
      return poly;
    };
  }
});

// node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode(data2) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data2.length + this.degree);
      paddedData.set(data2);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start = this.degree - remainder.length;
      if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "node_modules/qrcode/lib/core/version-check.js"(exports) {
    exports.isValid = function isValid(version) {
      return !isNaN(version) && version >= 1 && version <= 40;
    };
  }
});

// node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "node_modules/qrcode/lib/core/regex.js"(exports) {
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "node_modules/qrcode/lib/core/mode.js"(exports) {
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
      if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid version: " + version);
      }
      if (version >= 1 && version < 10) return mode.ccBits[0];
      else if (version < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports.KANJI;
      else return exports.BYTE;
    };
    exports.toString = function toString2(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "node_modules/qrcode/lib/core/version.js"(exports) {
    var Utils = require_utils();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version) {
      return Mode.getCharCountIndicator(mode, version) + 4;
    }
    function getTotalBitsFromDataArray(segments, version) {
      let totalBits = 0;
      segments.forEach(function(data2) {
        const reservedBits = getReservedBitsCount(data2.mode, version);
        totalBits += reservedBits + data2.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined") mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data2, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data2)) {
        if (data2.length > 1) {
          return getBestVersionForMixedData(data2, ecl);
        }
        if (data2.length === 0) {
          return 1;
        }
        seg = data2[0];
      } else {
        seg = data2;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version) {
      if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d = version << 12;
      while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
      }
      return version << 12 | d;
    };
  }
});

// node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "node_modules/qrcode/lib/core/format-info.js"(exports) {
    var Utils = require_utils();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      const data2 = errorCorrectionLevel.bit << 3 | mask;
      let d = data2 << 10;
      while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
      }
      return (data2 << 10 | d) ^ G15_MASK;
    };
  }
});

// node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    var Mode = require_mode();
    function NumericData(data2) {
      this.mode = Mode.NUMERIC;
      this.data = data2.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      let i, group, value;
      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i;
      if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":"
    ];
    function AlphanumericData(data2) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data2;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      let i;
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    var Mode = require_mode();
    function ByteData(data2) {
      this.mode = Mode.BYTE;
      if (typeof data2 === "string") {
        this.data = new TextEncoder().encode(data2);
      } else {
        this.data = new Uint8Array(data2);
      }
    }
    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (let i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };
    module.exports = ByteData;
  }
});

// node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    var Mode = require_mode();
    var Utils = require_utils();
    function KanjiData(data2) {
      this.mode = Mode.KANJI;
      this.data = data2;
    }
    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      let i;
      for (i = 0; i < this.data.length; i++) {
        let value = Utils.toSJIS(this.data[i]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error(
            "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
          );
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = __commonJS({
  "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
    "use strict";
    var dijkstra = {
      single_source_shortest_paths: function(graph, s, d) {
        var predecessors = {};
        var costs = {};
        costs[s] = 0;
        var open3 = dijkstra.PriorityQueue.make();
        open3.push(s, 0);
        var closest2, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open3.empty()) {
          closest2 = open3.pop();
          u = closest2.value;
          cost_of_s_to_u = closest2.cost;
          adjacent_nodes = graph[u] || {};
          for (v in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v)) {
              cost_of_e = adjacent_nodes[v];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v];
              first_visit = typeof costs[v] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v] = cost_of_s_to_u_plus_cost_of_e;
                open3.push(v, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v] = u;
              }
            }
          }
        }
        if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
          var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while (u) {
          nodes.push(u);
          predecessor = predecessors[u];
          u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(
          predecessors,
          d
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T = dijkstra.PriorityQueue, t = {}, key;
          opts = opts || {};
          for (key in T) {
            if (T.hasOwnProperty(key)) {
              t[key] = T[key];
            }
          }
          t.queue = [];
          t.sorter = opts.sorter || T.default_sorter;
          return t;
        },
        default_sorter: function(a, b) {
          return a.cost - b.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = { value, cost };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    if (typeof module !== "undefined") {
      module.exports = dijkstra;
    }
  }
});

// node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "node_modules/qrcode/lib/core/segments.js"(exports) {
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex2, mode, str) {
      const segments = [];
      let result;
      while ((result = regex2.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i = 0; i < segs.length; i++) {
        const seg = segs[i];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version) {
      const table = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i = 0; i < nodes.length; i++) {
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for (let j = 0; j < nodeGroup.length; j++) {
          const node = nodeGroup[j];
          const key = "" + i + j;
          currentNodeIds.push(key);
          table[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (let n = 0; n < prevNodeIds.length; n++) {
            const prevNodeId = prevNodeIds[n];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n = 0; n < prevNodeIds.length; n++) {
        graph[prevNodeIds[n]].end = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data2, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data2);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data2 + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data2);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data2);
        case Mode.KANJI:
          return new KanjiData(data2);
        case Mode.BYTE:
          return new ByteData(data2);
      }
    }
    exports.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString(data2, version) {
      const segs = getSegmentsFromString(data2, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version);
      const path = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i = 1; i < path.length - 1; i++) {
        optimizedSegs.push(graph.table[path[i]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data2) {
      return exports.fromArray(
        getSegmentsFromString(data2, Utils.isKanjiModeEnabled())
      );
    };
  }
});

// node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/qrcode/lib/core/qrcode.js"(exports) {
    var Utils = require_utils();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version) {
      const size = matrix.size;
      const pos = FinderPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -1; r <= 7; r++) {
          if (row + r <= -1 || size <= row + r) continue;
          for (let c = -1; c <= 7; c++) {
            if (col + c <= -1 || size <= col + c) continue;
            if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      const size = matrix.size;
      for (let r = 8; r < size - 8; r++) {
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version) {
      const pos = AlignmentPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version) {
      const size = matrix.size;
      const bits = Version.getEncodedBits(version);
      let row, col, mod;
      for (let i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i, mod;
      for (i = 0; i < 15; i++) {
        mod = (bits >> i & 1) === 1;
        if (i < 6) {
          matrix.set(i, 8, mod, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i, 8, mod, true);
        }
        if (i < 8) {
          matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i - 1, mod, true);
        }
      }
      matrix.set(size - 8, 8, 1, true);
    }
    function setupData(matrix, data2) {
      const size = matrix.size;
      let inc = -1;
      let row = size - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (let c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              let dark = false;
              if (byteIndex < data2.length) {
                dark = (data2[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version, errorCorrectionLevel, segments) {
      const buffer = new BitBuffer();
      segments.forEach(function(data2) {
        buffer.put(data2.mode.bit, 4);
        buffer.put(data2.getLength(), Mode.getCharCountIndicator(data2.mode, version));
        data2.write(buffer);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (let i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs = new ReedSolomonEncoder(ecCount);
      let offset = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer = new Uint8Array(bitBuffer.buffer);
      for (let b = 0; b < ecTotalBlocks; b++) {
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b] = buffer.slice(offset, offset + dataSize);
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data2 = new Uint8Array(totalCodewords);
      let index2 = 0;
      let i, r;
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data2[index2++] = dcData[r][i];
          }
        }
      }
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data2[index2++] = ecData[r][i];
        }
      }
      return data2;
    }
    function createSymbol(data2, version, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data2)) {
        segments = Segments.fromArray(data2);
      } else if (typeof data2 === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data2);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data2, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version) {
        version = bestVersion;
      } else if (version < bestVersion) {
        throw new Error(
          "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
        );
      }
      const dataBits = createData(version, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version >= 7) {
        setupVersionInfo(modules, version);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(
          modules,
          setupFormatInfo.bind(null, modules, errorCorrectionLevel)
        );
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create(data2, options) {
      if (typeof data2 === "undefined" || data2 === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version;
      let mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data2, version, errorCorrectionLevel, mask);
    };
  }
});

// node_modules/css-what/lib/commonjs/types.js
var require_types = __commonJS({
  "node_modules/css-what/lib/commonjs/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AttributeAction = exports.IgnoreCaseMode = exports.SelectorType = void 0;
    var SelectorType5;
    (function(SelectorType6) {
      SelectorType6["Attribute"] = "attribute";
      SelectorType6["Pseudo"] = "pseudo";
      SelectorType6["PseudoElement"] = "pseudo-element";
      SelectorType6["Tag"] = "tag";
      SelectorType6["Universal"] = "universal";
      SelectorType6["Adjacent"] = "adjacent";
      SelectorType6["Child"] = "child";
      SelectorType6["Descendant"] = "descendant";
      SelectorType6["Parent"] = "parent";
      SelectorType6["Sibling"] = "sibling";
      SelectorType6["ColumnCombinator"] = "column-combinator";
    })(SelectorType5 = exports.SelectorType || (exports.SelectorType = {}));
    exports.IgnoreCaseMode = {
      Unknown: null,
      QuirksMode: "quirks",
      IgnoreCase: true,
      CaseSensitive: false
    };
    var AttributeAction2;
    (function(AttributeAction3) {
      AttributeAction3["Any"] = "any";
      AttributeAction3["Element"] = "element";
      AttributeAction3["End"] = "end";
      AttributeAction3["Equals"] = "equals";
      AttributeAction3["Exists"] = "exists";
      AttributeAction3["Hyphen"] = "hyphen";
      AttributeAction3["Not"] = "not";
      AttributeAction3["Start"] = "start";
    })(AttributeAction2 = exports.AttributeAction || (exports.AttributeAction = {}));
  }
});

// node_modules/css-what/lib/commonjs/parse.js
var require_parse = __commonJS({
  "node_modules/css-what/lib/commonjs/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = exports.isTraversal = void 0;
    var types_1 = require_types();
    var reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
    var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
    var actionTypes = /* @__PURE__ */ new Map([
      [126, types_1.AttributeAction.Element],
      [94, types_1.AttributeAction.Start],
      [36, types_1.AttributeAction.End],
      [42, types_1.AttributeAction.Any],
      [33, types_1.AttributeAction.Not],
      [124, types_1.AttributeAction.Hyphen]
    ]);
    var unpackPseudos = /* @__PURE__ */ new Set([
      "has",
      "not",
      "matches",
      "is",
      "where",
      "host",
      "host-context"
    ]);
    function isTraversal3(selector) {
      switch (selector.type) {
        case types_1.SelectorType.Adjacent:
        case types_1.SelectorType.Child:
        case types_1.SelectorType.Descendant:
        case types_1.SelectorType.Parent:
        case types_1.SelectorType.Sibling:
        case types_1.SelectorType.ColumnCombinator:
          return true;
        default:
          return false;
      }
    }
    exports.isTraversal = isTraversal3;
    var stripQuotesFromPseudos = /* @__PURE__ */ new Set(["contains", "icontains"]);
    function funescape(_, escaped, escapedWhitespace) {
      var high = parseInt(escaped, 16) - 65536;
      return high !== high || escapedWhitespace ? escaped : high < 0 ? (
        // BMP codepoint
        String.fromCharCode(high + 65536)
      ) : (
        // Supplemental Plane codepoint (surrogate pair)
        String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
      );
    }
    function unescapeCSS(str) {
      return str.replace(reEscape, funescape);
    }
    function isQuote(c) {
      return c === 39 || c === 34;
    }
    function isWhitespace2(c) {
      return c === 32 || c === 9 || c === 10 || c === 12 || c === 13;
    }
    function parse6(selector) {
      var subselects2 = [];
      var endIndex = parseSelector(subselects2, "".concat(selector), 0);
      if (endIndex < selector.length) {
        throw new Error("Unmatched selector: ".concat(selector.slice(endIndex)));
      }
      return subselects2;
    }
    exports.parse = parse6;
    function parseSelector(subselects2, selector, selectorIndex) {
      var tokens = [];
      function getName2(offset) {
        var match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
          throw new Error("Expected name, found ".concat(selector.slice(selectorIndex)));
        }
        var name = match[0];
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
      }
      function stripWhitespace(offset) {
        selectorIndex += offset;
        while (selectorIndex < selector.length && isWhitespace2(selector.charCodeAt(selectorIndex))) {
          selectorIndex++;
        }
      }
      function readValueWithParenthesis() {
        selectorIndex += 1;
        var start = selectorIndex;
        var counter = 1;
        for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
          if (selector.charCodeAt(selectorIndex) === 40 && !isEscaped(selectorIndex)) {
            counter++;
          } else if (selector.charCodeAt(selectorIndex) === 41 && !isEscaped(selectorIndex)) {
            counter--;
          }
        }
        if (counter) {
          throw new Error("Parenthesis not matched");
        }
        return unescapeCSS(selector.slice(start, selectorIndex - 1));
      }
      function isEscaped(pos) {
        var slashCount = 0;
        while (selector.charCodeAt(--pos) === 92)
          slashCount++;
        return (slashCount & 1) === 1;
      }
      function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal3(tokens[tokens.length - 1])) {
          throw new Error("Did not expect successive traversals.");
        }
      }
      function addTraversal(type) {
        if (tokens.length > 0 && tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
          tokens[tokens.length - 1].type = type;
          return;
        }
        ensureNotTraversal();
        tokens.push({ type });
      }
      function addSpecialAttribute(name, action2) {
        tokens.push({
          type: types_1.SelectorType.Attribute,
          name,
          action: action2,
          value: getName2(1),
          namespace: null,
          ignoreCase: "quirks"
        });
      }
      function finalizeSubselector() {
        if (tokens.length && tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
          tokens.pop();
        }
        if (tokens.length === 0) {
          throw new Error("Empty sub-selector");
        }
        subselects2.push(tokens);
      }
      stripWhitespace(0);
      if (selector.length === selectorIndex) {
        return selectorIndex;
      }
      loop: while (selectorIndex < selector.length) {
        var firstChar = selector.charCodeAt(selectorIndex);
        switch (firstChar) {
          // Whitespace
          case 32:
          case 9:
          case 10:
          case 12:
          case 13: {
            if (tokens.length === 0 || tokens[0].type !== types_1.SelectorType.Descendant) {
              ensureNotTraversal();
              tokens.push({ type: types_1.SelectorType.Descendant });
            }
            stripWhitespace(1);
            break;
          }
          // Traversals
          case 62: {
            addTraversal(types_1.SelectorType.Child);
            stripWhitespace(1);
            break;
          }
          case 60: {
            addTraversal(types_1.SelectorType.Parent);
            stripWhitespace(1);
            break;
          }
          case 126: {
            addTraversal(types_1.SelectorType.Sibling);
            stripWhitespace(1);
            break;
          }
          case 43: {
            addTraversal(types_1.SelectorType.Adjacent);
            stripWhitespace(1);
            break;
          }
          // Special attribute selectors: .class, #id
          case 46: {
            addSpecialAttribute("class", types_1.AttributeAction.Element);
            break;
          }
          case 35: {
            addSpecialAttribute("id", types_1.AttributeAction.Equals);
            break;
          }
          case 91: {
            stripWhitespace(1);
            var name_1 = void 0;
            var namespace = null;
            if (selector.charCodeAt(selectorIndex) === 124) {
              name_1 = getName2(1);
            } else if (selector.startsWith("*|", selectorIndex)) {
              namespace = "*";
              name_1 = getName2(2);
            } else {
              name_1 = getName2(0);
              if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 61) {
                namespace = name_1;
                name_1 = getName2(1);
              }
            }
            stripWhitespace(0);
            var action = types_1.AttributeAction.Exists;
            var possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
            if (possibleAction) {
              action = possibleAction;
              if (selector.charCodeAt(selectorIndex + 1) !== 61) {
                throw new Error("Expected `=`");
              }
              stripWhitespace(2);
            } else if (selector.charCodeAt(selectorIndex) === 61) {
              action = types_1.AttributeAction.Equals;
              stripWhitespace(1);
            }
            var value = "";
            var ignoreCase = null;
            if (action !== "exists") {
              if (isQuote(selector.charCodeAt(selectorIndex))) {
                var quote = selector.charCodeAt(selectorIndex);
                var sectionEnd = selectorIndex + 1;
                while (sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd))) {
                  sectionEnd += 1;
                }
                if (selector.charCodeAt(sectionEnd) !== quote) {
                  throw new Error("Attribute value didn't end");
                }
                value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                selectorIndex = sectionEnd + 1;
              } else {
                var valueStart = selectorIndex;
                while (selectorIndex < selector.length && (!isWhitespace2(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 || isEscaped(selectorIndex))) {
                  selectorIndex += 1;
                }
                value = unescapeCSS(selector.slice(valueStart, selectorIndex));
              }
              stripWhitespace(0);
              var forceIgnore = selector.charCodeAt(selectorIndex) | 32;
              if (forceIgnore === 115) {
                ignoreCase = false;
                stripWhitespace(1);
              } else if (forceIgnore === 105) {
                ignoreCase = true;
                stripWhitespace(1);
              }
            }
            if (selector.charCodeAt(selectorIndex) !== 93) {
              throw new Error("Attribute selector didn't terminate");
            }
            selectorIndex += 1;
            var attributeSelector = {
              type: types_1.SelectorType.Attribute,
              name: name_1,
              action,
              value,
              namespace,
              ignoreCase
            };
            tokens.push(attributeSelector);
            break;
          }
          case 58: {
            if (selector.charCodeAt(selectorIndex + 1) === 58) {
              tokens.push({
                type: types_1.SelectorType.PseudoElement,
                name: getName2(2).toLowerCase(),
                data: selector.charCodeAt(selectorIndex) === 40 ? readValueWithParenthesis() : null
              });
              continue;
            }
            var name_2 = getName2(1).toLowerCase();
            var data2 = null;
            if (selector.charCodeAt(selectorIndex) === 40) {
              if (unpackPseudos.has(name_2)) {
                if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                  throw new Error("Pseudo-selector ".concat(name_2, " cannot be quoted"));
                }
                data2 = [];
                selectorIndex = parseSelector(data2, selector, selectorIndex + 1);
                if (selector.charCodeAt(selectorIndex) !== 41) {
                  throw new Error("Missing closing parenthesis in :".concat(name_2, " (").concat(selector, ")"));
                }
                selectorIndex += 1;
              } else {
                data2 = readValueWithParenthesis();
                if (stripQuotesFromPseudos.has(name_2)) {
                  var quot = data2.charCodeAt(0);
                  if (quot === data2.charCodeAt(data2.length - 1) && isQuote(quot)) {
                    data2 = data2.slice(1, -1);
                  }
                }
                data2 = unescapeCSS(data2);
              }
            }
            tokens.push({ type: types_1.SelectorType.Pseudo, name: name_2, data: data2 });
            break;
          }
          case 44: {
            finalizeSubselector();
            tokens = [];
            stripWhitespace(1);
            break;
          }
          default: {
            if (selector.startsWith("/*", selectorIndex)) {
              var endIndex = selector.indexOf("*/", selectorIndex + 2);
              if (endIndex < 0) {
                throw new Error("Comment was not terminated");
              }
              selectorIndex = endIndex + 2;
              if (tokens.length === 0) {
                stripWhitespace(0);
              }
              break;
            }
            var namespace = null;
            var name_3 = void 0;
            if (firstChar === 42) {
              selectorIndex += 1;
              name_3 = "*";
            } else if (firstChar === 124) {
              name_3 = "";
              if (selector.charCodeAt(selectorIndex + 1) === 124) {
                addTraversal(types_1.SelectorType.ColumnCombinator);
                stripWhitespace(2);
                break;
              }
            } else if (reName.test(selector.slice(selectorIndex))) {
              name_3 = getName2(0);
            } else {
              break loop;
            }
            if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 124) {
              namespace = name_3;
              if (selector.charCodeAt(selectorIndex + 1) === 42) {
                name_3 = "*";
                selectorIndex += 2;
              } else {
                name_3 = getName2(1);
              }
            }
            tokens.push(name_3 === "*" ? { type: types_1.SelectorType.Universal, namespace } : { type: types_1.SelectorType.Tag, name: name_3, namespace });
          }
        }
      }
      finalizeSubselector();
      return selectorIndex;
    }
  }
});

// node_modules/css-what/lib/commonjs/stringify.js
var require_stringify = __commonJS({
  "node_modules/css-what/lib/commonjs/stringify.js"(exports) {
    "use strict";
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringify = void 0;
    var types_1 = require_types();
    var attribValChars = ["\\", '"'];
    var pseudoValChars = __spreadArray(__spreadArray([], attribValChars, true), ["(", ")"], false);
    var charsToEscapeInAttributeValue = new Set(attribValChars.map(function(c) {
      return c.charCodeAt(0);
    }));
    var charsToEscapeInPseudoValue = new Set(pseudoValChars.map(function(c) {
      return c.charCodeAt(0);
    }));
    var charsToEscapeInName = new Set(__spreadArray(__spreadArray([], pseudoValChars, true), [
      "~",
      "^",
      "$",
      "*",
      "+",
      "!",
      "|",
      ":",
      "[",
      "]",
      " ",
      "."
    ], false).map(function(c) {
      return c.charCodeAt(0);
    }));
    function stringify2(selector) {
      return selector.map(function(token) {
        return token.map(stringifyToken).join("");
      }).join(", ");
    }
    exports.stringify = stringify2;
    function stringifyToken(token, index2, arr) {
      switch (token.type) {
        // Simple types
        case types_1.SelectorType.Child:
          return index2 === 0 ? "> " : " > ";
        case types_1.SelectorType.Parent:
          return index2 === 0 ? "< " : " < ";
        case types_1.SelectorType.Sibling:
          return index2 === 0 ? "~ " : " ~ ";
        case types_1.SelectorType.Adjacent:
          return index2 === 0 ? "+ " : " + ";
        case types_1.SelectorType.Descendant:
          return " ";
        case types_1.SelectorType.ColumnCombinator:
          return index2 === 0 ? "|| " : " || ";
        case types_1.SelectorType.Universal:
          return token.namespace === "*" && index2 + 1 < arr.length && "name" in arr[index2 + 1] ? "" : "".concat(getNamespace(token.namespace), "*");
        case types_1.SelectorType.Tag:
          return getNamespacedName(token);
        case types_1.SelectorType.PseudoElement:
          return "::".concat(escapeName(token.name, charsToEscapeInName)).concat(token.data === null ? "" : "(".concat(escapeName(token.data, charsToEscapeInPseudoValue), ")"));
        case types_1.SelectorType.Pseudo:
          return ":".concat(escapeName(token.name, charsToEscapeInName)).concat(token.data === null ? "" : "(".concat(typeof token.data === "string" ? escapeName(token.data, charsToEscapeInPseudoValue) : stringify2(token.data), ")"));
        case types_1.SelectorType.Attribute: {
          if (token.name === "id" && token.action === types_1.AttributeAction.Equals && token.ignoreCase === "quirks" && !token.namespace) {
            return "#".concat(escapeName(token.value, charsToEscapeInName));
          }
          if (token.name === "class" && token.action === types_1.AttributeAction.Element && token.ignoreCase === "quirks" && !token.namespace) {
            return ".".concat(escapeName(token.value, charsToEscapeInName));
          }
          var name_1 = getNamespacedName(token);
          if (token.action === types_1.AttributeAction.Exists) {
            return "[".concat(name_1, "]");
          }
          return "[".concat(name_1).concat(getActionValue(token.action), '="').concat(escapeName(token.value, charsToEscapeInAttributeValue), '"').concat(token.ignoreCase === null ? "" : token.ignoreCase ? " i" : " s", "]");
        }
      }
    }
    function getActionValue(action) {
      switch (action) {
        case types_1.AttributeAction.Equals:
          return "";
        case types_1.AttributeAction.Element:
          return "~";
        case types_1.AttributeAction.Start:
          return "^";
        case types_1.AttributeAction.End:
          return "$";
        case types_1.AttributeAction.Any:
          return "*";
        case types_1.AttributeAction.Not:
          return "!";
        case types_1.AttributeAction.Hyphen:
          return "|";
        case types_1.AttributeAction.Exists:
          throw new Error("Shouldn't be here");
      }
    }
    function getNamespacedName(token) {
      return "".concat(getNamespace(token.namespace)).concat(escapeName(token.name, charsToEscapeInName));
    }
    function getNamespace(namespace) {
      return namespace !== null ? "".concat(namespace === "*" ? "*" : escapeName(namespace, charsToEscapeInName), "|") : "";
    }
    function escapeName(str, charsToEscape) {
      var lastIdx = 0;
      var ret = "";
      for (var i = 0; i < str.length; i++) {
        if (charsToEscape.has(str.charCodeAt(i))) {
          ret += "".concat(str.slice(lastIdx, i), "\\").concat(str.charAt(i));
          lastIdx = i + 1;
        }
      }
      return ret.length > 0 ? ret + str.slice(lastIdx) : str;
    }
  }
});

// node_modules/css-what/lib/commonjs/index.js
var require_commonjs = __commonJS({
  "node_modules/css-what/lib/commonjs/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringify = exports.parse = exports.isTraversal = void 0;
    __exportStar(require_types(), exports);
    var parse_1 = require_parse();
    Object.defineProperty(exports, "isTraversal", { enumerable: true, get: function() {
      return parse_1.isTraversal;
    } });
    Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
      return parse_1.parse;
    } });
    var stringify_1 = require_stringify();
    Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
      return stringify_1.stringify;
    } });
  }
});

// node_modules/boolbase/index.js
var require_boolbase = __commonJS({
  "node_modules/boolbase/index.js"(exports, module) {
    module.exports = {
      trueFunc: function trueFunc2() {
        return true;
      },
      falseFunc: function falseFunc() {
        return false;
      }
    };
  }
});

// src/ui/v2.ts
import { Plugin } from "@opencode/plugin/tui";

// src/ui/index.tsx
import { insertNode as _$insertNode4 } from "@opentui/solid";
import { use as _$use2 } from "@opentui/solid";
import { effect as _$effect4 } from "@opentui/solid";
import { insert as _$insert4 } from "@opentui/solid";
import { setProp as _$setProp4 } from "@opentui/solid";
import { createElement as _$createElement4 } from "@opentui/solid";
import { memo as _$memo4 } from "@opentui/solid";
import { createComponent as _$createComponent4 } from "@opentui/solid";
import { createEffect as createEffect2, createMemo, createSignal as createSignal4, onCleanup as onCleanup2, onMount, Show as Show4 } from "solid-js";
import { ScrollBoxRenderable } from "@opentui/core";
import { dirname as dirname5, resolve as resolve4, basename as basename4 } from "node:path";
import { watch as watch2 } from "node:fs";
import { access as access4 } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { createHash as createHash8 } from "node:crypto";

// node_modules/ansi-regex/index.js
function ansiRegex({ onlyFirst = false } = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const osc = `(?:(?:\\u001B\\]|\\u009D)[^\\u0007\\u001B\\u009C\\u009D]*${ST})`;
  const csi = "[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]";
  const pattern2 = `${osc}|${csi}`;
  return new RegExp(pattern2, onlyFirst ? void 0 : "g");
}

// node_modules/strip-ansi/index.js
var regex = ansiRegex();
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  return string.replace(regex, "");
}

// node_modules/get-east-asian-width/lookup-data.js
var ambiguousMinimalCodePoint = 161;
var ambiguousMaximumCodePoint = 1114109;
var ambiguousRanges = [161, 161, 164, 164, 167, 168, 170, 170, 173, 174, 176, 180, 182, 186, 188, 191, 198, 198, 208, 208, 215, 216, 222, 225, 230, 230, 232, 234, 236, 237, 240, 240, 242, 243, 247, 250, 252, 252, 254, 254, 257, 257, 273, 273, 275, 275, 283, 283, 294, 295, 299, 299, 305, 307, 312, 312, 319, 322, 324, 324, 328, 331, 333, 333, 338, 339, 358, 359, 363, 363, 462, 462, 464, 464, 466, 466, 468, 468, 470, 470, 472, 472, 474, 474, 476, 476, 593, 593, 609, 609, 708, 708, 711, 711, 713, 715, 717, 717, 720, 720, 728, 731, 733, 733, 735, 735, 768, 879, 913, 929, 931, 937, 945, 961, 963, 969, 1025, 1025, 1040, 1103, 1105, 1105, 8208, 8208, 8211, 8214, 8216, 8217, 8220, 8221, 8224, 8226, 8228, 8231, 8240, 8240, 8242, 8243, 8245, 8245, 8251, 8251, 8254, 8254, 8308, 8308, 8319, 8319, 8321, 8324, 8364, 8364, 8451, 8451, 8453, 8453, 8457, 8457, 8467, 8467, 8470, 8470, 8481, 8482, 8486, 8486, 8491, 8491, 8531, 8532, 8539, 8542, 8544, 8555, 8560, 8569, 8585, 8585, 8592, 8601, 8632, 8633, 8658, 8658, 8660, 8660, 8679, 8679, 8704, 8704, 8706, 8707, 8711, 8712, 8715, 8715, 8719, 8719, 8721, 8721, 8725, 8725, 8730, 8730, 8733, 8736, 8739, 8739, 8741, 8741, 8743, 8748, 8750, 8750, 8756, 8759, 8764, 8765, 8776, 8776, 8780, 8780, 8786, 8786, 8800, 8801, 8804, 8807, 8810, 8811, 8814, 8815, 8834, 8835, 8838, 8839, 8853, 8853, 8857, 8857, 8869, 8869, 8895, 8895, 8978, 8978, 9312, 9449, 9451, 9547, 9552, 9587, 9600, 9615, 9618, 9621, 9632, 9633, 9635, 9641, 9650, 9651, 9654, 9655, 9660, 9661, 9664, 9665, 9670, 9672, 9675, 9675, 9678, 9681, 9698, 9701, 9711, 9711, 9733, 9734, 9737, 9737, 9742, 9743, 9756, 9756, 9758, 9758, 9792, 9792, 9794, 9794, 9824, 9825, 9827, 9829, 9831, 9834, 9836, 9837, 9839, 9839, 9886, 9887, 9919, 9919, 9926, 9933, 9935, 9939, 9941, 9953, 9955, 9955, 9960, 9961, 9963, 9969, 9972, 9972, 9974, 9977, 9979, 9980, 9982, 9983, 10045, 10045, 10102, 10111, 11094, 11097, 12872, 12879, 57344, 63743, 65024, 65039, 65533, 65533, 127232, 127242, 127248, 127277, 127280, 127337, 127344, 127373, 127375, 127376, 127387, 127404, 917760, 917999, 983040, 1048573, 1048576, 1114109];
var fullwidthMinimalCodePoint = 12288;
var fullwidthMaximumCodePoint = 65510;
var fullwidthRanges = [12288, 12288, 65281, 65376, 65504, 65510];
var wideMinimalCodePoint = 4352;
var wideMaximumCodePoint = 262141;
var wideRanges = [4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749, 9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918, 9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981, 9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071, 10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904, 11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543, 12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128, 42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126, 65128, 65131, 94176, 94180, 94192, 94198, 94208, 101594, 101631, 101664, 101760, 101874, 101888, 102801, 102816, 102866, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110888, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110952, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183, 127183, 127374, 127374, 127377, 127386, 127406, 127406, 127488, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904, 127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066, 128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420, 128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128729, 128732, 128735, 128747, 128748, 128756, 128764, 128986, 128986, 128992, 129003, 129008, 129008, 129292, 129338, 129340, 129349, 129351, 129535, 129648, 129660, 129664, 129734, 129736, 129736, 129740, 129757, 129759, 129771, 129775, 129786, 131072, 196605, 196608, 262141];

// node_modules/get-east-asian-width/utilities.js
var isInRange = (ranges, codePoint) => {
  let low = 0;
  let high = Math.floor(ranges.length / 2) - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const i = mid * 2;
    if (codePoint < ranges[i]) {
      high = mid - 1;
    } else if (codePoint > ranges[i + 1]) {
      low = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};

// node_modules/get-east-asian-width/lookup.js
var commonCjkCodePoint = 19968;
var [wideFastPathStart, wideFastPathEnd] = /* @__PURE__ */ findWideFastPathRange(wideRanges);
function findWideFastPathRange(ranges) {
  let fastPathStart = ranges[0];
  let fastPathEnd = ranges[1];
  for (let index2 = 0; index2 < ranges.length; index2 += 2) {
    const start = ranges[index2];
    const end2 = ranges[index2 + 1];
    if (commonCjkCodePoint >= start && commonCjkCodePoint <= end2) {
      return [start, end2];
    }
    if (end2 - start > fastPathEnd - fastPathStart) {
      fastPathStart = start;
      fastPathEnd = end2;
    }
  }
  return [fastPathStart, fastPathEnd];
}
var isAmbiguous = (codePoint) => {
  if (codePoint < ambiguousMinimalCodePoint || codePoint > ambiguousMaximumCodePoint) {
    return false;
  }
  return isInRange(ambiguousRanges, codePoint);
};
var isFullwidth = (codePoint) => {
  if (codePoint < fullwidthMinimalCodePoint || codePoint > fullwidthMaximumCodePoint) {
    return false;
  }
  return isInRange(fullwidthRanges, codePoint);
};
var isWide = (codePoint) => {
  if (codePoint >= wideFastPathStart && codePoint <= wideFastPathEnd) {
    return true;
  }
  if (codePoint < wideMinimalCodePoint || codePoint > wideMaximumCodePoint) {
    return false;
  }
  return isInRange(wideRanges, codePoint);
};

// node_modules/get-east-asian-width/index.js
function validate(codePoint) {
  if (!Number.isSafeInteger(codePoint)) {
    throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
  }
}
function eastAsianWidth(codePoint, { ambiguousAsWide = false } = {}) {
  validate(codePoint);
  if (isFullwidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) {
    return 2;
  }
  return 1;
}

// node_modules/string-width/index.js
var import_emoji_regex = __toESM(require_emoji_regex(), 1);
var segmenter = new Intl.Segmenter();
var defaultIgnorableCodePointRegex = /^\p{Default_Ignorable_Code_Point}$/u;
function stringWidth(string, options = {}) {
  if (typeof string !== "string" || string.length === 0) {
    return 0;
  }
  const {
    ambiguousIsNarrow = true,
    countAnsiEscapeCodes = false
  } = options;
  if (!countAnsiEscapeCodes) {
    string = stripAnsi(string);
  }
  if (string.length === 0) {
    return 0;
  }
  let width = 0;
  const eastAsianWidthOptions = { ambiguousAsWide: !ambiguousIsNarrow };
  for (const { segment: character } of segmenter.segment(string)) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 8203 && codePoint <= 8207 || codePoint === 65279) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879 || codePoint >= 6832 && codePoint <= 6911 || codePoint >= 7616 && codePoint <= 7679 || codePoint >= 8400 && codePoint <= 8447 || codePoint >= 65056 && codePoint <= 65071) {
      continue;
    }
    if (codePoint >= 55296 && codePoint <= 57343) {
      continue;
    }
    if (codePoint >= 65024 && codePoint <= 65039) {
      continue;
    }
    if (defaultIgnorableCodePointRegex.test(character)) {
      continue;
    }
    if ((0, import_emoji_regex.default)().test(character)) {
      width += 2;
      continue;
    }
    width += eastAsianWidth(codePoint, eastAsianWidthOptions);
  }
  return width;
}

// src/library/text-reader.mjs
import { readFile as readFile3, stat, realpath, readdir as readdir2 } from "node:fs/promises";
import { resolve as resolve2, basename, extname } from "node:path";
import { homedir } from "node:os";

// src/library/vault.mjs
import { randomBytes, createCipheriv, createDecipheriv, createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
var magic = Buffer.from("MOYU1");
var aad = Buffer.from("opencode-moyu:library:v1");
var defaultKeyFile = (directory) => resolve(directory, "../keys/library.key");
var LibraryVault = class {
  #key;
  #pending;
  constructor(keyFile) {
    this.keyFile = keyFile;
  }
  async key(create = true) {
    if (this.#key) return this.#key;
    if (!this.#pending) this.#pending = this.loadKey(create).finally(() => {
      this.#pending = void 0;
    });
    return this.#pending;
  }
  async loadKey(create) {
    let key;
    try {
      key = await readFile(this.keyFile);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      if (!create) throw new Error("\u7F3A\u5C11\u8D44\u6599\u5E93\u5BC6\u94A5\uFF0C\u8BF7\u6062\u590D\u539F\u5BC6\u94A5\u6587\u4EF6");
      await mkdir(dirname(this.keyFile), { recursive: true, mode: 448 });
      try {
        await writeFile(this.keyFile, randomBytes(32), { flag: "wx", mode: 384 });
      } catch (error2) {
        if (error2.code !== "EEXIST") throw error2;
      }
      key = await readFile(this.keyFile);
    }
    for (let attempt = 0; key.length !== 32 && attempt < 20; attempt++) {
      await new Promise((resolve5) => setTimeout(resolve5, 10));
      key = await readFile(this.keyFile);
    }
    if (key.length !== 32) throw new Error("\u8D44\u6599\u5E93\u5BC6\u94A5\u957F\u5EA6\u5F02\u5E38");
    this.#key = key;
    return this.#key;
  }
  async seal(value) {
    const nonce = randomBytes(12);
    const cipher = createCipheriv("aes-256-gcm", await this.key(), nonce);
    cipher.setAAD(aad);
    const encrypted = Buffer.concat([cipher.update(JSON.stringify(value), "utf8"), cipher.final()]);
    return Buffer.concat([magic, nonce, cipher.getAuthTag(), encrypted]);
  }
  async unseal(bytes) {
    if (bytes.length < 33 || !bytes.subarray(0, 5).equals(magic)) throw new Error("\u4E0D\u662F\u53D7\u652F\u6301\u7684\u52A0\u5BC6\u8D44\u6599\u6587\u4EF6");
    try {
      const decipher = createDecipheriv("aes-256-gcm", await this.key(false), bytes.subarray(5, 17));
      decipher.setAAD(aad);
      decipher.setAuthTag(bytes.subarray(17, 33));
      return JSON.parse(Buffer.concat([decipher.update(bytes.subarray(33)), decipher.final()]).toString("utf8"));
    } catch {
      throw new Error("\u8D44\u6599\u89E3\u5BC6\u5931\u8D25\uFF1A\u5BC6\u94A5\u4E0D\u5339\u914D\uFF0C\u6216\u6587\u4EF6\u5DF2\u635F\u574F");
    }
  }
};

// src/library/store.mjs
import { mkdir as mkdir2, readFile as readFile2, writeFile as writeFile2, rename, unlink, open, readdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { randomUUID, createHash as createHash2 } from "node:crypto";
var stableId = (value) => createHash2("sha256").update(value).digest("hex").slice(0, 24);
async function atomicWrite(path, content) {
  const temporary = path + "." + randomUUID() + ".tmp";
  try {
    await writeFile2(temporary, content, { flag: "wx", mode: 384 });
    await rename(temporary, path);
  } finally {
    await unlink(temporary).catch((error) => {
      if (error.code !== "ENOENT") throw error;
    });
  }
}
var LibraryStore = class {
  constructor(directory, { keyFile = defaultKeyFile(directory) } = {}) {
    this.directory = directory;
    this.internal = join(directory, ".moyu");
    this.vault = new LibraryVault(keyFile);
  }
  async ready() {
    for (const name of ["jobs", "resources", "parts"]) await mkdir2(join(this.internal, name), { recursive: true });
  }
  jobPath(id) {
    return join(this.internal, "jobs", id + ".enc");
  }
  partPath(id, index2) {
    return join(this.internal, "parts", id, String(index2).padStart(6, "0") + ".enc");
  }
  async readJob(id) {
    try {
      return await this.vault.unseal(await readFile2(this.jobPath(id)));
    } catch (error) {
      if (error.code === "ENOENT") return void 0;
      throw error;
    }
  }
  async writeJob(job) {
    await atomicWrite(this.jobPath(job.id), await this.vault.seal(job));
  }
  async writePart(id, index2, text4) {
    await mkdir2(join(this.internal, "parts", id), { recursive: true });
    await atomicWrite(this.partPath(id, index2), await this.vault.seal({ text: text4 }));
  }
  async putResource(resource) {
    await this.ready();
    await atomicWrite(join(this.internal, "resources", resource.id + ".enc"), await this.vault.seal(resource));
  }
  async resources() {
    await this.ready();
    const out = [];
    for (const name of await readdir(join(this.internal, "resources"))) {
      if (name.endsWith(".enc")) out.push(await this.vault.unseal(await readFile2(join(this.internal, "resources", name))));
    }
    return out;
  }
  async resource(id) {
    if (!/^[a-f0-9]{24}$/.test(id)) return;
    try {
      return await this.vault.unseal(await readFile2(join(this.internal, "resources", id + ".enc")));
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  async readPart(id, index2) {
    return (await this.vault.unseal(await readFile2(this.partPath(id, index2)))).text;
  }
  async writeBook(id, title, text4, extra = {}) {
    await this.ready();
    const path = join(this.directory, id + ".moyubook");
    const payload = { ...extra, schemaVersion: 1, resourceId: id, title, text: text4 };
    if (Buffer.byteLength(JSON.stringify(payload)) > 32 * 1024 * 1024) throw new Error("\u5355\u672C\u8D85\u8FC7 32 MiB\uFF0C\u8BF7\u6309\u5377\u62C6\u5206\u91C7\u96C6");
    await atomicWrite(path, await this.vault.seal(payload));
    return path;
  }
  async importLocal(book) {
    const id = stableId("local:" + book.path);
    return this.withJobLock(id, async () => {
      const path = await this.writeBook(id, book.title, book.text);
      await this.putResource({ schemaVersion: 1, id, kind: "novel", title: book.title, source: { adapter: "local-text", url: book.path }, assets: [{ role: "body", mime: "application/x-moyu-book", path }], metadata: { imported: true }, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
      return { ...book, path, resourceId: id };
    });
  }
  async deleteResource(id) {
    if (!/^[a-f0-9]{24}$/.test(id)) throw new Error("\u65E0\u6548\u8D44\u6599 ID");
    return this.withJobLock(id, async () => {
      for (const path of [join(this.directory, id + ".moyubook"), this.jobPath(id), join(this.internal, "resources", id + ".enc"), join(this.internal, "media", id + ".moyuvid")]) {
        await unlink(path).catch((error) => {
          if (error.code !== "ENOENT") throw error;
        });
      }
      await rm(join(this.internal, "parts", id), { recursive: true, force: true });
      return { deleted: id, originalFilesPreserved: true };
    });
  }
  async withJobLock(id, fn) {
    await this.ready();
    const path = join(this.internal, "jobs", id + ".lock");
    let handle;
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        handle = await open(path, "wx", 384);
        break;
      } catch (error) {
        if (error.code !== "EEXIST") throw error;
        const lock = JSON.parse(await readFile2(path, "utf8"));
        let alive = true;
        try {
          process.kill(lock.pid, 0);
        } catch (error2) {
          if (error2.code === "ESRCH") alive = false;
        }
        if (alive) throw new Error("\u8FD9\u672C\u4E66\u5DF2\u6709\u91C7\u96C6\u4EFB\u52A1\u5728\u8FD0\u884C\uFF0C\u8BF7\u7B49\u5F85\u540E\u91CD\u8BD5");
        await unlink(path);
      }
    }
    if (!handle) throw new Error("\u65E0\u6CD5\u53D6\u5F97\u91C7\u96C6\u4EFB\u52A1\u9501");
    try {
      await handle.writeFile(JSON.stringify({ pid: process.pid, startedAt: (/* @__PURE__ */ new Date()).toISOString() }));
      return await fn();
    } finally {
      await handle.close();
      await unlink(path);
    }
  }
};

// src/library/text-reader.mjs
import { dirname as dirname2 } from "node:path";
var segmenter2 = new Intl.Segmenter("zh", { granularity: "grapheme" });
var chapterPattern = /^(?:第[零〇一二三四五六七八九十百千万两\d]+[章节回卷部篇集](?:\s|[：:、.．]|[^\d]).*|第[零〇一二三四五六七八九十百千万两\d]+[章节回卷部篇集]|(?:序章|序言|楔子|引子|前言|尾声|后记|终章|番外)(?:\s.*|[：:、].*)?|chapter\s+\d+.*)$/iu;
function expandPath(input, cwd = process.cwd()) {
  const value = input.trim().replace(/^(["'])(.*)\1$/, "$2");
  if (!value) throw new Error("\u8BF7\u8F93\u5165\u5C0F\u8BF4\u6587\u4EF6\u8DEF\u5F84");
  return resolve2(cwd, value === "~" ? homedir() : value.startsWith("~/") ? homedir() + value.slice(1) : value);
}
function decodeBook(bytes) {
  if (bytes[0] === 255 && bytes[1] === 254) return new TextDecoder("utf-16le").decode(bytes);
  if (bytes[0] === 254 && bytes[1] === 255) return new TextDecoder("utf-16be").decode(bytes);
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    return new TextDecoder("gb18030", { fatal: true }).decode(bytes);
  }
}
function cleanText(text4) {
  return text4.replace(/\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g, "").replace(/\x1b\[[0-?]*[ -/]*[@-~]/g, "").replace(/\r\n?/g, "\n").replace(/\t/g, "    ").replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f\u202a-\u202e\u2066-\u2069]/g, "").replace(/^\uFEFF/, "");
}
function chapterIdentity(title) {
  const match = title.normalize("NFKC").match(/^第([零〇一二三四五六七八九十百千万两\d]+)([章节回卷部篇集])(.*)$/u);
  if (!match) return title;
  const digits = { \u96F6: 0, "\u3007": 0, \u4E00: 1, \u4E8C: 2, \u4E24: 2, \u4E09: 3, \u56DB: 4, \u4E94: 5, \u516D: 6, \u4E03: 7, \u516B: 8, \u4E5D: 9 };
  const units = { \u5341: 10, \u767E: 100, \u5343: 1e3, \u4E07: 1e4 };
  let total = 0, section = 0, digit = 0;
  if (/^\d+$/u.test(match[1])) total = Number(match[1]);
  else {
    for (const char of match[1]) {
      if (char in digits) digit = digits[char];
      else if (units[char] === 1e4) {
        total += (section + digit) * 1e4;
        section = 0;
        digit = 0;
      } else if (units[char]) {
        section += (digit || 1) * units[char];
        digit = 0;
      } else return title;
    }
    total += section + digit;
  }
  return `${total}:${match[2]}:${match[3].replace(/\s+/gu, "")}`;
}
function chaptersOf(text4) {
  const chapters = [];
  let offset = 0, headingEnd = 0;
  for (const line of text4.split("\n")) {
    const title = line.trim();
    if (title.length <= 100 && chapterPattern.test(title)) {
      const previous = chapters.at(-1);
      if (!previous || chapterIdentity(previous.title) !== chapterIdentity(title) || text4.slice(headingEnd, offset).trim()) chapters.push({ title, offset });
      headingEnd = offset + line.length;
    }
    offset += line.length + 1;
  }
  return chapters;
}
function wrapLines(text4, width) {
  const lines = [];
  const widths = /* @__PURE__ */ new Map();
  let line = "", columns = 0, start = 0, offset = 0;
  for (const paragraph of text4.split("\n")) {
    for (const { segment } of segmenter2.segment(paragraph)) {
      let cells = widths.get(segment);
      if (cells === void 0) {
        cells = stringWidth(segment);
        if (widths.size < 4096) widths.set(segment, cells);
      }
      if (columns + cells > width && line) {
        lines.push({ text: line, start });
        line = "";
        columns = 0;
        start = offset;
      }
      line += segment;
      columns += cells;
      offset += segment.length;
    }
    lines.push({ text: line, start });
    offset += 1;
    start = offset;
    line = "";
    columns = 0;
  }
  return lines;
}
function groupPages(lines, rows) {
  const pages = [];
  for (let index2 = 0; index2 < lines.length; index2 += rows) {
    pages.push({ start: lines[index2].start, text: lines.slice(index2, index2 + rows).map((item) => item.text).join("\n") });
  }
  while (pages.length > 1 && !pages.at(-1).text.trim()) pages.pop();
  return pages;
}
function validSize(width, rows) {
  if (!Number.isInteger(width) || width < 2 || !Number.isInteger(rows) || rows < 1) throw new Error("\u5206\u9875\u5C3A\u5BF8\u65E0\u6548");
}
function createPaginator() {
  let previousText, previousWidth, previousRows, lines, pages;
  return (text4, width = 36, rows = 16) => {
    validSize(width, rows);
    if (text4 !== previousText || width !== previousWidth) {
      lines = wrapLines(text4, width);
      previousText = text4;
      previousWidth = width;
      previousRows = void 0;
    }
    if (rows !== previousRows) {
      pages = groupPages(lines, rows);
      previousRows = rows;
    }
    return pages;
  };
}
function pageAt(pages, offset) {
  let low = 0, high = pages.length - 1;
  while (low < high) {
    const mid = Math.ceil((low + high) / 2);
    if (pages[mid].start <= offset) low = mid;
    else high = mid - 1;
  }
  return low;
}
async function loadBook(input, cwd, { keyFile } = {}) {
  const path = await realpath(expandPath(input, cwd));
  const info = await stat(path);
  if (!info.isFile()) throw new Error("\u8BF7\u9009\u62E9 TXT \u6216 Markdown \u6587\u4EF6");
  if (extname(path).toLowerCase() === ".moyubook") {
    if (info.size > 34 * 1024 * 1024) throw new Error("\u52A0\u5BC6\u6587\u4EF6\u8D85\u8FC7\u5927\u5C0F\u9650\u5236");
    const payload = await new LibraryVault(keyFile || defaultKeyFile(dirname2(path))).unseal(await readFile3(path));
    if (typeof payload.title !== "string" || typeof payload.text !== "string" || typeof payload.resourceId !== "string") throw new Error("\u52A0\u5BC6\u8D44\u6599\u683C\u5F0F\u65E0\u6548");
    let chapters = chaptersOf(payload.text);
    if (payload.chapters !== void 0) {
      if (!Array.isArray(payload.chapters) || payload.chapters.length > 2e4 || !payload.chapters.every((item, index2, items) => item && typeof item.title === "string" && /^[a-f0-9]{24}$/.test(item.id) && item.index === index2 && Number.isInteger(item.offset) && item.offset >= 0 && item.offset < payload.text.length && (!index2 || item.offset > items[index2 - 1].offset) && ["ready", "pending", "failed"].includes(item.status))) throw new Error("\u7AE0\u8282\u76EE\u5F55\u683C\u5F0F\u65E0\u6548");
      chapters = payload.chapters;
    }
    const catalog = payload.catalog;
    if (catalog && (typeof catalog.url !== "string" || !/^https?:\/\//.test(catalog.url) || typeof catalog.sourceId !== "string" || !Number.isInteger(catalog.total) || !Number.isInteger(catalog.downloaded))) throw new Error("\u6765\u6E90\u76EE\u5F55\u683C\u5F0F\u65E0\u6548");
    return { path, title: payload.title, text: payload.text, chapters, catalog, resourceId: payload.resourceId };
  }
  if (![".txt", ".md"].includes(extname(path).toLowerCase())) throw new Error("\u76EE\u524D\u652F\u6301 .txt\u3001.md \u548C\u52A0\u5BC6\u8D44\u6599\u6587\u4EF6");
  if (info.size > 32 * 1024 * 1024) throw new Error("\u6587\u4EF6\u8D85\u8FC7 32 MiB\uFF0C\u8BF7\u6309\u5377\u62C6\u5206");
  const text4 = cleanText(decodeBook(await readFile3(path)));
  if (!text4.trim()) throw new Error("\u8FD9\u4E2A\u6587\u4EF6\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9");
  return { path, title: basename(path, extname(path)), text: text4, chapters: chaptersOf(text4), catalog: void 0 };
}
async function listBooks(directory, { keyFile } = {}) {
  const entries = await readdir2(directory, { withFileTypes: true });
  const plain = entries.filter((item) => item.isFile() && /\.(?:txt|md)$/i.test(item.name)).map((item) => ({ title: basename(item.name, extname(item.name)), path: resolve2(directory, item.name), progress: void 0 })).sort((a, b) => a.title.localeCompare(b.title, "zh"));
  const resources = entries.some((item) => item.name === ".moyu") ? await new LibraryStore(directory, { keyFile }).resources() : [];
  const managed = resources.filter((item) => item.kind === "novel").map((item) => ({
    title: item.title,
    path: item.assets.find((asset) => asset.role === "body")?.path,
    resourceId: item.id,
    progress: Number.isInteger(item.metadata.totalChapters) ? `\u6B63\u6587 ${item.metadata.chapters}/${item.metadata.totalChapters} \u7AE0${item.metadata.catalogComplete === false ? " \xB7 \u76EE\u5F55\u672A\u5B8C\u6574" : ""}` : void 0
  })).filter((item) => item.path);
  return [...managed, ...plain.filter((item) => !managed.some((saved) => saved.title === item.title))];
}

// src/library/reading-position.mjs
function readingPosition(book, offset) {
  const chapter = book.chapters.findLast((item) => item.offset <= offset);
  return chapter ? { offset, chapterId: chapter.id, chapterTitle: chapter.title, within: Math.max(0, offset - chapter.offset), status: chapter.status } : { offset };
}
function restorePosition(book, saved, fallback = 0) {
  let offset = Number.isFinite(saved?.offset) ? saved.offset : Number.isFinite(fallback) ? fallback : 0;
  if (typeof saved?.chapterId === "string" || typeof saved?.chapterTitle === "string") {
    let index2 = typeof saved.chapterId === "string" ? book.chapters.findIndex((item) => item.id === saved.chapterId) : -1;
    if (index2 < 0 && book.chapters.filter((item) => item.title === saved.chapterTitle).length === 1) index2 = book.chapters.findIndex((item) => item.title === saved.chapterTitle);
    if (index2 >= 0) {
      const chapter = book.chapters[index2], end2 = book.chapters[index2 + 1]?.offset ?? book.text.length;
      const within = saved.status && saved.status !== "ready" && chapter.status === "ready" ? 0 : Number.isFinite(saved.within) ? Math.max(0, saved.within) : 0;
      offset = chapter.offset + Math.min(within, Math.max(0, end2 - chapter.offset - 1));
    }
  }
  return Math.max(0, Math.min(Math.trunc(offset), Math.max(0, book.text.length - 1)));
}

// src/ui/sidebar-layout.mjs
function sidebarLayout(scrollbox) {
  const sidebar = scrollbox.parent;
  const pane = sidebar?.parent;
  const frame = pane?.parent;
  const docked = frame?.getChildren().some((node) => node.id === "session-pane");
  if (!sidebar || sidebar.width < 32 || sidebar.width > 100 || !sidebar.getChildren().includes(scrollbox)) return;
  if (docked && (pane.width !== sidebar.width || pane.getChildren().length !== 1)) return;
  const targets = (docked ? [sidebar, pane] : [sidebar]).map((node) => ({ node, original: node.width, applied: void 0 }));
  function restore() {
    for (const item of targets) {
      if (!item.node.isDestroyed && item.applied !== void 0 && item.node.width === item.applied) item.node.width = item.original;
      item.applied = void 0;
    }
  }
  return {
    frame: docked ? frame : void 0,
    apply(percent, terminalWidth) {
      if (percent === void 0) return restore();
      const total = docked ? Math.max(1, terminalWidth - (frame.screenX ?? frame.x ?? 0)) : terminalWidth;
      const max = Math.max(36, Math.min(Math.floor(total * 0.75), total - 44));
      const width = Math.max(36, Math.min(max, Math.round(total * percent / 100)));
      for (const item of targets) {
        if (item.node.isDestroyed) continue;
        if (item.node.width !== width) item.node.width = width;
        item.applied = width;
      }
    },
    restore
  };
}
function sidebarDock(reader, viewport, changed = () => {
}, scrollbox) {
  const container = reader.parent;
  if (!container?.getChildren().includes(reader)) return;
  const original = container.minHeight ?? null;
  const previous = container.onSizeChange;
  const resized = function() {
    previous?.call(this);
    queueMicrotask(changed);
  };
  container.onSizeChange = resized;
  let minimum;
  const hiddenCards = /* @__PURE__ */ new Map();
  function cardsToCollapse() {
    const inside = container.getChildren().filter((node) => node !== reader);
    const siblings2 = scrollbox?.parent?.getChildren() ?? [];
    const position = siblings2.indexOf(scrollbox);
    return [.../* @__PURE__ */ new Set([...inside, ...position >= 0 ? siblings2.slice(position + 1) : []])];
  }
  function restoreCards() {
    for (const [node, visible] of hiddenCards) if (!node.isDestroyed && node.visible === false) node.visible = visible;
    hiddenCards.clear();
  }
  function restore() {
    restoreCards();
    if (minimum !== void 0 && !container.isDestroyed) container.minHeight = original;
    if (!container.isDestroyed && container.onSizeChange === resized) container.onSizeChange = previous;
    minimum = void 0;
  }
  return {
    measure(active, expanded = false) {
      if (!active || reader.isDestroyed || viewport.isDestroyed || container.isDestroyed) {
        restore();
        return 0;
      }
      if (minimum !== viewport.height) {
        minimum = viewport.height;
        container.minHeight = minimum;
      }
      if (!expanded) restoreCards();
      else for (const node of cardsToCollapse()) {
        if (node.isDestroyed || node.visible === false) continue;
        if (!hiddenCards.has(node)) hiddenCards.set(node, node.visible !== false);
        node.visible = false;
      }
      const cards = container.getChildren().filter((node) => node !== reader && !node.isDestroyed && node.visible !== false && node.height > 0);
      return cards.reduce((rows, node) => rows + node.height + 1, 0);
    },
    restore
  };
}

// src/ui/video-size.mjs
var VIDEO_SCALE_PRESETS = Object.freeze([25, 50, 75, 100, 125, 150, 175, 200]);
function scaledVideoSize(width, height, requested = 100) {
  if (!Number.isFinite(width) || width <= 0 || width > 75 || !Number.isFinite(height) || height <= 0 || height > 100) throw new Error("\u89C6\u9891\u57FA\u51C6\u5C3A\u5BF8\u65E0\u6548");
  if (!Number.isFinite(requested)) throw new Error("\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7F29\u653E\u767E\u5206\u6BD4");
  const maximum = Math.min(200, Math.floor(Math.min(75 / width, 100 / height) * 100 + 1e-8));
  const percent = Math.max(25, Math.min(maximum, Math.round(requested)));
  return { percent, maximum, width: width * percent / 100, height: height * percent / 100 };
}

// src/ui/video.tsx
import { createTextNode as _$createTextNode } from "@opentui/solid";
import { insertNode as _$insertNode } from "@opentui/solid";
import { effect as _$effect } from "@opentui/solid";
import { insert as _$insert } from "@opentui/solid";
import { use as _$use } from "@opentui/solid";
import { setProp as _$setProp } from "@opentui/solid";
import { createElement as _$createElement } from "@opentui/solid";
import { memo as _$memo } from "@opentui/solid";
import { createComponent as _$createComponent } from "@opentui/solid";
import { createEffect, createSignal, Index, Show, untrack, onCleanup } from "solid-js";
import * as OpenTui from "@opentui/core";
import { watch } from "node:fs";
import { access as access3 } from "node:fs/promises";
import { join as join6 } from "node:path";

// src/media/runtime.mjs
import { spawn, execFile } from "node:child_process";
import { access, readdir as readdir3, realpath as realpath2, stat as stat2 } from "node:fs/promises";
import { constants } from "node:fs";
import { join as join2, delimiter, extname as extname2, basename as basename2 } from "node:path";
import { homedir as homedir2 } from "node:os";
import { promisify } from "node:util";
var execute = promisify(execFile);
var binaries = /* @__PURE__ */ new Map();
async function mediaBinary(name) {
  if (binaries.has(name)) return binaries.get(name);
  const custom = process.env["MOYU_" + name.toUpperCase()];
  const dirs = [process.env.MOYU_MEDIA_BIN, join2(homedir2(), ".local/share/opencode-moyu/media/bin"), ...(process.env.PATH || "").split(delimiter)].filter(Boolean);
  for (const root2 of ["miniconda3", "miniforge3", "anaconda3"]) {
    const base = join2(homedir2(), root2);
    dirs.push(join2(base, "bin"));
    for (const env of (await readdir3(join2(base, "envs")).catch(() => [])).slice(0, 32)) dirs.push(join2(base, "envs", env, "bin"));
  }
  const candidates = custom ? [custom] : dirs.flatMap((dir) => process.platform === "win32" ? [join2(dir, name + ".exe")] : [join2(dir, name), join2(dir, name + ".exe")]);
  for (const path of candidates) {
    try {
      await access(path, constants.X_OK);
      await execute(path, ["-version"], { timeout: 5e3, maxBuffer: 32768, windowsHide: true });
      binaries.set(name, path);
      return path;
    } catch {
    }
  }
  throw new Error(`\u672A\u627E\u5230 ${name}\u3002\u8BF7\u5B89\u88C5 FFmpeg\uFF08\u542B ffprobe / ffplay\uFF09\uFF0C\u6216\u8BBE\u7F6E MOYU_MEDIA_BIN \u6307\u5411\u5176 bin \u76EE\u5F55\u3002`);
}
async function nativeMediaPath(binary, path) {
  if (process.platform !== "win32" && binary.toLowerCase().endsWith(".exe")) return (await execute("wslpath", ["-w", path], { timeout: 5e3 })).stdout.trim();
  return path;
}
async function inspectVideo(input, cwd, { signal } = {}) {
  signal?.throwIfAborted();
  if (/^[a-z]+:\/\//i.test(input.trim())) throw new Error("\u9996\u7248\u652F\u6301\u672C\u5730\u89C6\u9891\uFF0C\u8BF7\u8F93\u5165\u6587\u4EF6\u8DEF\u5F84");
  const path = await realpath2(expandPath(input, cwd));
  const info = await stat2(path);
  if (!info.isFile() || !/\.(mp4|mkv|webm|mov|avi|m4v|mpeg|mpg|gif)$/i.test(path)) throw new Error("\u8BF7\u9009\u62E9 MP4\u3001MKV\u3001WebM\u3001MOV\u3001AVI \u6216 GIF \u89C6\u9891\u6587\u4EF6");
  const binary = await mediaBinary("ffprobe");
  const { stdout } = await execute(binary, ["-v", "error", "-protocol_whitelist", "file,pipe", "-show_entries", "stream=codec_type,width,height,sample_aspect_ratio:stream_tags=rotate:stream_side_data=rotation:format=duration", "-of", "json", await nativeMediaPath(binary, path)], { timeout: 15e3, maxBuffer: 256 * 1024, windowsHide: true, signal });
  const data2 = JSON.parse(stdout), video = data2.streams?.find((stream) => stream.codec_type === "video");
  if (!video?.width || !video.height) throw new Error("\u6587\u4EF6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u89C6\u9891\u8F68\u9053");
  const duration = Number(data2.format?.duration);
  if (!Number.isFinite(duration) || duration <= 0) throw new Error("\u6682\u4E0D\u652F\u6301\u65E0\u6CD5\u786E\u5B9A\u65F6\u957F\u7684\u89C6\u9891");
  const sar = String(video.sample_aspect_ratio || "1:1").split(":").map(Number);
  let width = video.width * (sar[0] > 0 && sar[1] > 0 ? sar[0] / sar[1] : 1), height = video.height;
  const rotation = Number(video.side_data_list?.find((item) => item.rotation !== void 0)?.rotation ?? video.tags?.rotate ?? 0);
  if (Math.abs(rotation) % 180 === 90) [width, height] = [height, width];
  return { path, title: basename2(path, extname2(path)), width, height, duration, hasAudio: data2.streams.some((stream) => stream.codec_type === "audio") };
}
function launchMedia(binary, args) {
  return spawn(binary, args, { stdio: ["ignore", "pipe", "pipe"], windowsHide: true });
}
function stopMedia(child) {
  if (!child || child.exitCode !== null || child.signalCode) return;
  child.kill("SIGTERM");
  const timer = setTimeout(() => {
    if (child.exitCode === null && !child.signalCode) child.kill("SIGKILL");
  }, 1e3);
  timer.unref?.();
  child.once("close", () => clearTimeout(timer));
}

// src/media/pixels.mjs
function pixelSize(width, height, columns, rows) {
  const maxWidth = Math.max(2, Math.min(160, Math.floor(columns)));
  const maxHeight = Math.max(2, Math.min(100, Math.floor(rows) * 2));
  const scale = Math.min(maxWidth / width, maxHeight / height);
  return { width: Math.max(2, Math.floor(width * scale)), height: Math.max(2, Math.floor(height * scale / 2) * 2) };
}
function pixelRuns(frame, width, height) {
  if (frame.length !== width * height * 3) throw new Error("\u89C6\u9891\u5E27\u957F\u5EA6\u5F02\u5E38");
  const runs = [];
  const color = (offset) => [0, 1, 2].map((i) => Math.round(frame[offset + i] / 51) * 51).join(",");
  for (let y = 0; y < height; y += 2) {
    let last2;
    for (let x = 0; x < width; x++) {
      const fg = color((y * width + x) * 3), bg = color(((y + 1) * width + x) * 3);
      if (last2?.fg === fg && last2.bg === bg) last2.text += "\u2580";
      else {
        last2 = { text: "\u2580", fg, bg };
        runs.push(last2);
      }
    }
    if (y + 2 < height) runs.push({ text: "\n" });
  }
  return runs;
}
function mediaTime(seconds) {
  const value = Math.max(0, Math.floor(Number(seconds) || 0));
  const hours = Math.floor(value / 3600);
  return (hours ? hours + ":" : "") + [Math.floor(value / 60) % 60, value % 60].map((n) => String(n).padStart(2, "0")).join(":");
}

// src/media/frame-queue.mjs
var FrameQueue = class {
  constructor() {
    this.chunks = [];
    this.head = 0;
    this.offset = 0;
    this.length = 0;
  }
  push(chunk) {
    if (chunk.length) {
      this.chunks.push(chunk);
      this.length += chunk.length;
    }
  }
  read(size) {
    if (this.length < size) return;
    const first2 = this.chunks[this.head];
    let frame;
    if (first2.length - this.offset >= size) {
      frame = first2.subarray(this.offset, this.offset + size);
      this.offset += size;
      if (this.offset === first2.length) {
        this.chunks[this.head++] = void 0;
        this.offset = 0;
      }
    } else {
      frame = Buffer.allocUnsafe(size);
      let written = 0;
      while (written < size) {
        const chunk = this.chunks[this.head], count2 = Math.min(size - written, chunk.length - this.offset);
        chunk.copy(frame, written, this.offset, this.offset + count2);
        written += count2;
        this.offset += count2;
        if (this.offset === chunk.length) {
          this.chunks[this.head++] = void 0;
          this.offset = 0;
        }
      }
    }
    this.length -= size;
    if (this.head === this.chunks.length) {
      this.chunks = [];
      this.head = 0;
    } else if (this.head > 64) {
      this.chunks = this.chunks.slice(this.head);
      this.head = 0;
    }
    return frame;
  }
};

// src/media/player.mjs
var PixelPlayer = class {
  constructor({ onFrame = (_frame, _size) => {
  }, onState = (_state) => {
  }, onError = (_error) => {
  }, binary = mediaBinary, launch = launchMedia, frameSize = pixelSize, beforePlay = async (_signal) => {
  } } = {}) {
    this.onFrame = onFrame;
    this.onState = onState;
    this.onError = onError;
    this.binary = binary;
    this.launch = launch;
    this.generation = 0;
    this.position = 0;
    this.playing = false;
    this.muted = true;
    this.fps = 10;
    this.columns = 36;
    this.rows = 16;
    this.disposed = false;
    this.frameSize = frameSize;
    this.scaleFilter = "neighbor";
    this.beforePlay = beforePlay;
    this.stopping = Promise.resolve();
  }
  emit() {
    this.onState({ position: this.position, playing: this.playing, muted: this.muted, loading: this.loading || false });
  }
  load(video, position = 0) {
    this.stop();
    this.video = video;
    const saved = Number(position) || 0;
    this.position = saved >= video.duration - 0.05 ? 0 : Math.max(0, saved);
    this.muted = true;
    this.emit();
    return this.start(false);
  }
  resize(columns, rows, filter4 = this.scaleFilter, force = false) {
    const changed = columns !== this.columns || rows !== this.rows || filter4 !== this.scaleFilter;
    this.columns = columns;
    this.rows = rows;
    this.scaleFilter = filter4;
    if (this.video && (changed || force)) {
      const size = this.frameSize(this.video.width, this.video.height, columns, rows);
      if (!force && this.output === `${size.width}:${size.height}:${filter4}`) return;
      return this.start(this.playing);
    }
  }
  stop() {
    this.playAbort?.abort();
    ++this.generation;
    clearTimeout(this.timer);
    const stopping = [this.decoder, this.audio].filter((child) => child && child.exitCode === null && !child.signalCode).map((child) => new Promise((resolve5) => {
      child.once("close", resolve5);
      stopMedia(child);
    }));
    this.stopping = Promise.all([this.stopping, ...stopping]).then(() => {
    });
    this.decoder = void 0;
    this.audio = void 0;
    this.loading = false;
  }
  pause() {
    this.stop();
    this.playing = false;
    this.emit();
  }
  async pauseAndWait() {
    this.pause();
    await this.stopping;
  }
  play() {
    if (this.position >= (this.video?.duration || Infinity) - 0.05) this.position = 0;
    return this.start(true);
  }
  seek(seconds) {
    if (!this.video) return;
    this.position = Math.max(0, Math.min(this.video.duration - 0.05, Number(seconds) || 0));
    return this.start(this.playing);
  }
  async setMuted(muted) {
    if (muted === this.muted || !this.video) return;
    const token = this.generation;
    if (!muted && !this.video.hasAudio) throw new Error("\u8FD9\u4E2A\u89C6\u9891\u6CA1\u6709\u97F3\u8F68");
    if (!muted) await this.binary("ffplay");
    if (this.disposed || token !== this.generation) return;
    this.muted = muted;
    if (this.playing) await this.start(true);
    else this.emit();
  }
  async start(playing) {
    this.stop();
    if (!this.video || this.disposed) return;
    const token = this.generation, video = this.video, start = this.position, abort = this.playAbort = new AbortController();
    this.playing = playing;
    this.loading = true;
    this.emit();
    try {
      await this.stopping;
      if (token !== this.generation || this.disposed) return;
      if (playing) await this.beforePlay(abort.signal);
      if (token !== this.generation || this.disposed) return;
      const binary = await this.binary("ffmpeg"), path = await nativeMediaPath(binary, video.path);
      if (token !== this.generation || this.disposed) return;
      const size = this.frameSize(video.width, video.height, this.columns, this.rows), frameBytes = size.width * size.height * 3;
      this.output = `${size.width}:${size.height}:${this.scaleFilter}`;
      const args = ["-nostdin", "-hide_banner", "-loglevel", "error", "-threads", "1", "-filter_threads", "1", "-protocol_whitelist", "file,pipe", "-ss", String(start), "-i", path, "-map", "0:v:0", "-an", "-sn", "-vf", `fps=${this.fps},scale=${size.width}:${size.height}:flags=${this.scaleFilter},setsar=1`, ...!playing ? ["-frames:v", "1"] : [], "-pix_fmt", "rgb24", "-f", "rawvideo", "pipe:1"];
      const child = this.decoder = this.launch(binary, args);
      const buffer = new FrameQueue();
      let stderr = "", ended = false, exitCode, frames = 0, audioStarted = false, lastFrameAt = Date.now();
      let nextFrameAt;
      const valid = () => token === this.generation && !this.disposed;
      const fail = (error) => {
        if (!valid()) return;
        this.pause();
        this.onError(error instanceof Error ? error.message : String(error));
      };
      child.stderr.on("data", (chunk) => {
        stderr = (stderr + chunk.toString()).slice(-1500);
      });
      child.on("error", fail);
      child.stdout.on("data", (chunk) => {
        if (!valid()) return;
        buffer.push(chunk);
        if (buffer.length >= frameBytes * 3) child.stdout.pause();
      });
      child.on("close", (code) => {
        ended = true;
        exitCode = code;
        if (code && valid()) fail(new Error(`\u89C6\u9891\u89E3\u7801\u5931\u8D25\uFF1A${stderr || code}`));
      });
      const tick = () => {
        if (!valid()) return;
        if (buffer.length >= frameBytes) {
          lastFrameAt = Date.now();
          nextFrameAt = Math.max(nextFrameAt ?? lastFrameAt, lastFrameAt) + 1e3 / this.fps;
          const frame = buffer.read(frameBytes);
          this.loading = false;
          this.position = Math.min(video.duration, start + frames++ / this.fps);
          this.onFrame(frame, size);
          if (!valid()) return;
          this.emit();
          if (!audioStarted && playing && !this.muted) {
            audioStarted = true;
            void this.startAudio(video, start, token);
          }
          if (buffer.length < frameBytes * 3) child.stdout.resume();
          if (!playing) {
            this.stop();
            return;
          }
        } else if (ended) {
          if (!frames && exitCode === 0) return fail(new Error("\u6CA1\u6709\u89E3\u7801\u51FA\u89C6\u9891\u5E27"));
          this.position = video.duration;
          this.pause();
          return;
        } else if (Date.now() - lastFrameAt > 2e4) return fail(new Error("\u89C6\u9891\u89E3\u7801\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u6216\u91CD\u65B0\u6253\u5F00"));
        this.timer = setTimeout(tick, frames ? Math.max(buffer.length >= frameBytes ? 1 : 10, nextFrameAt - Date.now()) : 20);
      };
      tick();
    } catch (error) {
      if (token !== this.generation || this.disposed) return;
      this.pause();
      this.onError(error instanceof Error ? error.message : String(error));
    }
  }
  async startAudio(video, position, token) {
    try {
      const binary = await this.binary("ffplay"), path = await nativeMediaPath(binary, video.path);
      if (token !== this.generation || this.disposed || this.muted) return;
      const child = this.audio = this.launch(binary, ["-hide_banner", "-loglevel", "error", "-nodisp", "-vn", "-sn", "-autoexit", "-volume", "70", "-ss", String(position), "-protocol_whitelist", "file,pipe", "-i", path]);
      let stderr = "";
      child.stdout.resume();
      child.stderr.on("data", (chunk) => {
        stderr = (stderr + chunk.toString()).slice(-600);
      });
      const failed = (reason) => {
        if (token !== this.generation || this.disposed) return;
        this.muted = true;
        this.emit();
        this.onError(`\u58F0\u97F3\u64AD\u653E\u5931\u8D25\uFF0C\u5DF2\u6062\u590D\u9759\u97F3\uFF1A${reason}`);
      };
      child.on("error", (error) => failed(error.message));
      child.on("close", (code) => {
        if (code) failed(stderr || String(code));
      });
    } catch (error) {
      if (token !== this.generation || this.disposed) return;
      this.muted = true;
      this.emit();
      this.onError(String(error));
    }
  }
  dispose() {
    this.stop();
    this.playing = false;
    this.disposed = true;
  }
};

// src/media/inline-image.mjs
function imageProtocol(core, renderer) {
  if (typeof core.ImageRenderable !== "function" || typeof core.NativeImage?.fromRgba !== "function") return "legacy";
  const caps = renderer.capabilities || {};
  const requested = caps.image_protocol || "auto";
  if (typeof core.resolveImageRenderProtocol === "function") return core.resolveImageRenderProtocol(requested, caps, Boolean(renderer.resolution));
  if (requested === "blocks" || caps.multiplexer && caps.multiplexer !== "none") return "blocks";
  if (caps.kitty_graphics) return "kitty";
  return caps.sixel && renderer.resolution ? "sixel" : "blocks";
}
function imageFrameSize(width, height, columns, rows, renderer, protocol) {
  const cellWidth = renderer.resolution?.width / renderer.width || 8;
  const cellHeight = renderer.resolution?.height / renderer.height || 16;
  const maxWidth = Math.min(1920, Math.max(2, columns * (protocol === "blocks" ? 4 : cellWidth)));
  const maxHeight = Math.min(1920, Math.max(2, rows * (protocol === "blocks" ? 8 : cellHeight)));
  const scale = Math.min(1, maxWidth / width, maxHeight / height, Math.sqrt(2073600 / (width * height)));
  return { width: Math.max(2, Math.floor(width * scale / 2) * 2), height: Math.max(2, Math.floor(height * scale / 2) * 2) };
}
var InlineImage = class {
  constructor(core, renderer, onError = (_error) => {
  }) {
    this.core = core;
    this.renderer = renderer;
    this.onError = onError;
  }
  mount(container) {
    this.unmount();
    try {
      this.node = new this.core.ImageRenderable(this.renderer, { id: "moyu-video-image", width: "100%", height: "100%", fit: "fit", protocol: "auto", onError: this.onError });
      container.add(this.node);
      if (this.last) this.draw(this.last.bytes, this.last.size);
    } catch (error) {
      this.onError(error);
    }
  }
  present(bytes, size) {
    this.last = { bytes, size };
    if (this.node && !this.node.isDestroyed) {
      try {
        this.draw(bytes, size);
      } catch (error) {
        this.onError(error);
      }
    }
  }
  draw(bytes, size) {
    if (bytes.length !== size.width * size.height * 3) throw new Error("\u539F\u753B\u5E27\u957F\u5EA6\u5F02\u5E38");
    const rgba = Buffer.allocUnsafe(size.width * size.height * 4);
    for (let source = 0, target = 0; source < bytes.length; source += 3, target += 4) {
      rgba[target] = bytes[source];
      rgba[target + 1] = bytes[source + 1];
      rgba[target + 2] = bytes[source + 2];
      rgba[target + 3] = 255;
    }
    const image = this.core.NativeImage.fromRgba(rgba, size.width, size.height, size.width * 4, { owner: this.renderer.nativeScene?.resourceContext });
    try {
      this.node.source = image;
    } finally {
      image.dispose();
    }
  }
  clear() {
    this.last = void 0;
    if (this.node && !this.node.isDestroyed) this.node.source = void 0;
  }
  unmount() {
    if (this.node && !this.node.isDestroyed) this.node.destroy();
    this.node = void 0;
  }
  dispose() {
    this.clear();
    this.unmount();
  }
};

// src/sources/local-video.mjs
async function addLocalVideo(library, input, cwd) {
  const media = await inspectVideo(input, cwd);
  media.title = cleanText(media.title);
  const id = stableId("local-video:" + media.path);
  await library.putResource({ schemaVersion: 1, id, kind: "video", title: media.title, source: { adapter: "local-video", url: media.path }, assets: [{ role: "media", mime: "video/*", path: media.path }], metadata: { ...media, originalFile: true }, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  return { ...media, id };
}
async function resolveLocalVideo(resource) {
  if (resource.kind !== "video" || resource.source.adapter !== "local-video") throw new Error("\u6682\u4E0D\u652F\u6301\u8FD9\u4E2A\u89C6\u9891\u6765\u6E90");
  const path = resource.assets.find((asset) => asset.role === "media")?.path;
  if (!path) throw new Error("\u89C6\u9891\u8BB0\u5F55\u6CA1\u6709\u672C\u5730\u6587\u4EF6\u8DEF\u5F84");
  return { ...await inspectVideo(path), id: resource.id, title: resource.title };
}

// src/services/video-ingestion.mjs
import { spawn as spawn2, execFile as execFile2 } from "node:child_process";
import { access as access2, mkdir as mkdir5, mkdtemp, readdir as readdir5, stat as stat4, rm as rm3 } from "node:fs/promises";
import { join as join5, delimiter as delimiter2, dirname as dirname3, extname as extname3 } from "node:path";
import { homedir as homedir3 } from "node:os";
import { constants as constants2 } from "node:fs";
import { promisify as promisify2 } from "node:util";

// src/media/settings.mjs
import { readFile as readFile4, unlink as unlink2, mkdir as mkdir3 } from "node:fs/promises";
import { join as join3 } from "node:path";

// src/media/video-quality.mjs
var VIDEO_QUALITIES = Object.freeze([480, 720, 1080]);
var DEFAULT_VIDEO_QUALITY = 1080;
function videoQuality(value = DEFAULT_VIDEO_QUALITY) {
  if (!VIDEO_QUALITIES.includes(value)) throw new Error("\u8BF7\u9009\u62E9 480p\u3001720p \u6216 1080p \u4E0B\u8F7D\u6E05\u6670\u5EA6");
  return value;
}
function videoFormatArgs(quality = DEFAULT_VIDEO_QUALITY) {
  return ["--format", "bv*+ba/bv*", "--format-sort", `res:${videoQuality(quality)},vcodec:h264,acodec:m4a`];
}

// src/media/settings.mjs
var MediaSettings = class {
  constructor(library) {
    this.library = library;
    this.path = join3(library.internal, "settings", "youtube.enc");
  }
  async key() {
    try {
      return (await this.library.vault.unseal(await readFile4(this.path))).apiKey || "";
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    return process.env.YOUTUBE_API_KEY || "";
  }
  async status() {
    return { youtubeApiKeyConfigured: Boolean(await this.key()) };
  }
  async saveKey(input) {
    const apiKey = input.trim();
    if (!/^[A-Za-z0-9_-]{20,200}$/.test(apiKey)) throw new Error("API Key \u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u7C98\u8D34\u5B8C\u6574\u5BC6\u94A5");
    await mkdir3(join3(this.library.internal, "settings"), { recursive: true, mode: 448 });
    await atomicWrite(this.path, await this.library.vault.seal({ apiKey }));
    return this.status();
  }
  async removeKey() {
    await unlink2(this.path).catch((error) => {
      if (error.code !== "ENOENT") throw error;
    });
    return this.status();
  }
  async downloadQuality() {
    try {
      const settings = await this.library.vault.unseal(await readFile4(join3(this.library.internal, "settings", "video.enc")));
      return videoQuality(settings.downloadQuality);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    return DEFAULT_VIDEO_QUALITY;
  }
  async saveDownloadQuality(input) {
    const downloadQuality = videoQuality(input);
    await mkdir3(join3(this.library.internal, "settings"), { recursive: true, mode: 448 });
    await atomicWrite(join3(this.library.internal, "settings", "video.enc"), await this.library.vault.seal({ downloadQuality }));
    return downloadQuality;
  }
};

// src/media/cache.mjs
import { createCipheriv as createCipheriv2, createDecipheriv as createDecipheriv2, randomBytes as randomBytes2, randomUUID as randomUUID2 } from "node:crypto";
import { createReadStream, createWriteStream } from "node:fs";
import { mkdir as mkdir4, open as open2, readdir as readdir4, writeFile as writeFile3, rename as rename2, rm as rm2, stat as stat3 } from "node:fs/promises";
import { join as join4 } from "node:path";
import { pipeline } from "node:stream/promises";
var magic2 = Buffer.from("MOYUVID1");
var aad2 = Buffer.from("opencode-moyu:video:v1");
var MAX_VIDEO_BYTES = 256 * 1024 * 1024;
var MediaCache = class {
  constructor(library) {
    this.library = library;
    this.directory = join4(library.internal, "media");
    this.playback = join4(library.internal, "playback");
  }
  path(id) {
    if (!/^[a-f0-9]{24}$/.test(id)) throw new Error("\u65E0\u6548\u89C6\u9891 ID");
    return join4(this.directory, id + ".moyuvid");
  }
  async seal(id, source) {
    const size = (await stat3(source)).size;
    if (size > MAX_VIDEO_BYTES) throw new Error("\u89C6\u9891\u8D85\u8FC7 256 MiB \u9650\u5236");
    await mkdir4(this.directory, { recursive: true, mode: 448 });
    const target = this.path(id), temporary = target + "." + randomUUID2() + ".tmp";
    const nonce = randomBytes2(12), cipher = createCipheriv2("aes-256-gcm", await this.library.vault.key(), nonce);
    cipher.setAAD(aad2);
    try {
      await writeFile3(temporary, Buffer.concat([magic2, nonce, Buffer.alloc(16)]), { flag: "wx", mode: 384 });
      await pipeline(createReadStream(source), cipher, createWriteStream(temporary, { flags: "a" }));
      const file = await open2(temporary, "r+");
      try {
        await file.write(cipher.getAuthTag(), 0, 16, 20);
      } finally {
        await file.close();
      }
      await rename2(temporary, target);
      return target;
    } finally {
      await rm2(temporary, { force: true });
    }
  }
  async removeStalePlayback() {
    await mkdir4(this.playback, { recursive: true, mode: 448 });
    for (const entry of await readdir4(this.playback, { withFileTypes: true })) {
      if (!entry.isDirectory() || !/^\d+-[a-f0-9-]{36}$/.test(entry.name)) continue;
      const pid = Number(entry.name.split("-")[0]);
      try {
        process.kill(pid, 0);
      } catch (error) {
        if (error.code === "ESRCH") await rm2(join4(this.playback, entry.name), { recursive: true, force: true });
      }
    }
  }
  /** @param {any} resource @param {{signal?: AbortSignal}} options */
  async open(resource, { signal } = {}) {
    signal?.throwIfAborted();
    if (resource.source.adapter === "local-video") return resolveLocalVideo(resource);
    if (resource.kind !== "video" || !resource.metadata.managedMedia) throw new Error("\u89C6\u9891\u5C1A\u672A\u4E0B\u8F7D\uFF0C\u8BF7\u5148\u4ECE\u6765\u6E90\u5BFC\u5165");
    const path = this.path(resource.id), info = await stat3(path);
    if (info.size > MAX_VIDEO_BYTES + 36 || info.size < 36) throw new Error("\u89C6\u9891\u7F13\u5B58\u5927\u5C0F\u5F02\u5E38");
    const file = await open2(path, "r"), header = Buffer.alloc(36);
    try {
      await file.read(header, 0, 36, 0);
    } finally {
      await file.close();
    }
    if (!header.subarray(0, 8).equals(magic2)) throw new Error("\u89C6\u9891\u7F13\u5B58\u683C\u5F0F\u4E0D\u652F\u6301");
    await this.removeStalePlayback();
    const temporary = join4(this.playback, process.pid + "-" + randomUUID2());
    await mkdir4(temporary, { mode: 448 });
    const extension = /^\.(mp4|mkv|webm|mov|avi|m4v|mpeg|mpg|gif)$/.test(resource.metadata.extension || "") ? resource.metadata.extension : ".mp4";
    const decoded = join4(temporary, "video" + extension);
    const release = () => rm2(temporary, { recursive: true, force: true, maxRetries: 4, retryDelay: 200 });
    try {
      const decipher = createDecipheriv2("aes-256-gcm", await this.library.vault.key(false), header.subarray(8, 20));
      decipher.setAAD(aad2);
      decipher.setAuthTag(header.subarray(20, 36));
      await pipeline(createReadStream(path, { start: 36 }), decipher, createWriteStream(decoded, { flags: "wx", mode: 384 }), { signal });
      const video = await inspectVideo(decoded, void 0, { signal });
      signal?.throwIfAborted();
      return { ...video, id: resource.id, title: resource.title, release };
    } catch {
      await release();
      signal?.throwIfAborted();
      throw new Error("\u89C6\u9891\u7F13\u5B58\u65E0\u6CD5\u89E3\u5BC6\u6216\u64AD\u653E\uFF0C\u8BF7\u68C0\u67E5\u5BC6\u94A5\u53CA\u6587\u4EF6\u5B8C\u6574\u6027\u540E\u91CD\u65B0\u4E0B\u8F7D");
    }
  }
};

// src/core/http.mjs
import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import http from "node:http";
import https from "node:https";
import { createGunzip, createBrotliDecompress, createInflate } from "node:zlib";
var import_https_proxy_agent = __toESM(require_dist2(), 1);
function isPublicAddress(address) {
  const value = address.toLowerCase().replace(/^\[|\]$/g, "");
  if (isIP(value) === 4) {
    const [a, b] = value.split(".").map(Number);
    return !(a === 0 || a === 10 || a === 127 || a >= 224 || a === 100 && b >= 64 && b <= 127 || a === 169 && b === 254 || a === 172 && b >= 16 && b <= 31 || a === 192 && (b === 168 || b === 0) || a === 198 && (b === 18 || b === 19));
  }
  return isIP(value) === 6 && /^[23][0-9a-f]{0,3}:/.test(value);
}
function httpUrl(input) {
  const url = new URL(input);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) throw new Error("\u6765\u6E90\u53EA\u652F\u6301\u4E0D\u5E26\u767B\u5F55\u51ED\u636E\u7684 HTTP(S) \u5730\u5740");
  url.hash = "";
  return url;
}
function createHttpClient({ allowPrivate = false, maxBytes = 2 * 1024 * 1024, timeoutMs = 15e3, useProxy = true, maxRedirects = 4 } = {}) {
  return async function readPage(input, { signal, headers = {}, method = "GET", body, asBytes = false, redirect = "follow" } = {}) {
    if (!["GET", "POST"].includes(method)) throw new Error("\u4E0D\u652F\u6301\u7684 HTTP \u8BF7\u6C42\u65B9\u5F0F");
    if (!["follow", "manual"].includes(redirect)) throw new Error("\u4E0D\u652F\u6301\u7684\u91CD\u5B9A\u5411\u5904\u7406\u65B9\u5F0F");
    let url = httpUrl(input);
    const initialOrigin = url.origin;
    for (let redirects = 0; redirects <= maxRedirects; redirects++) {
      signal?.throwIfAborted();
      const hostname = url.hostname.replace(/^\[|\]$/g, "");
      const addresses = isIP(hostname) ? [{ address: hostname, family: isIP(hostname) }] : await lookup(hostname, { all: true });
      if (!addresses.length || !allowPrivate && addresses.some((item) => !isPublicAddress(item.address))) throw new Error("\u6765\u6E90\u4E0D\u80FD\u6307\u5411\u672C\u673A\u3001\u5C40\u57DF\u7F51\u6216\u4FDD\u7559\u7F51\u7EDC\u5730\u5740");
      const pinned = addresses[0];
      const bypass = (process.env.NO_PROXY || process.env.no_proxy || "").split(/[,\s]+/).filter(Boolean).some((value) => {
        if (value === "*") return true;
        const [host, port] = value.toLowerCase().split(":");
        if (port && port !== (url.port || (url.protocol === "https:" ? "443" : "80"))) return false;
        const suffix = host.replace(/^\*?\./, "");
        return hostname === suffix || hostname.endsWith("." + suffix);
      });
      const proxy = !useProxy || bypass ? void 0 : url.protocol === "https:" ? process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy : process.env.HTTP_PROXY || process.env.http_proxy;
      const agent = proxy ? new import_https_proxy_agent.HttpsProxyAgent(proxy) : void 0;
      const result = await new Promise((resolve5, reject) => {
        const request = (url.protocol === "https:" ? https : http).request(url, {
          method,
          signal,
          agent,
          lookup: (_host, options, callback) => options?.all ? callback(null, [pinned]) : callback(null, pinned.address, pinned.family),
          headers: { "User-Agent": "OpenCode-Moyu/0.4.1 (+local reading library)", Accept: "text/html,text/plain;q=0.9", "Accept-Encoding": "gzip, br, deflate", ...url.origin === initialOrigin ? headers : {} }
        }, async (response) => {
          try {
            const status = response.statusCode ?? 0;
            if ([301, 302, 303, 307, 308].includes(status) && response.headers.location) {
              response.resume();
              resolve5({ url: url.href, redirect: response.headers.location, status, cookies: response.headers["set-cookie"] ?? [] });
              return;
            }
            if (status < 200 || status >= 300) {
              response.resume();
              throw new Error(`\u6765\u6E90\u8FD4\u56DE HTTP ${status}\uFF1B\u505C\u6B62\u6293\u53D6`);
            }
            const contentType = String(response.headers["content-type"] ?? "text/html");
            if (!asBytes && !/^(text\/|application\/(xhtml\+xml|xml|json))/i.test(contentType)) {
              response.resume();
              throw new Error(`\u5F53\u524D\u6587\u5B57\u6765\u6E90\u4E0D\u652F\u6301\uFF1A${contentType}`);
            }
            const encoding = response.headers["content-encoding"];
            const stream = encoding === "gzip" ? response.pipe(createGunzip()) : encoding === "br" ? response.pipe(createBrotliDecompress()) : encoding === "deflate" ? response.pipe(createInflate()) : response;
            const chunks = [];
            let size = 0;
            for await (const chunk of stream) {
              size += chunk.length;
              if (size > maxBytes) {
                request.destroy();
                throw new Error("\u6765\u6E90\u9875\u9762\u8D85\u8FC7\u5927\u5C0F\u9650\u5236");
              }
              chunks.push(chunk);
            }
            const bytes = Buffer.concat(chunks);
            const cookies = response.headers["set-cookie"] ?? [];
            if (asBytes) {
              resolve5({ url: url.href, bytes, contentType, cookies });
              return;
            }
            const declared = contentType.match(/charset\s*=\s*["']?([^\s;"']+)/i)?.[1] ?? bytes.subarray(0, 4096).toString("latin1").match(/charset\s*=\s*["']?([\w-]+)/i)?.[1];
            const text4 = declared ? new TextDecoder(declared).decode(bytes) : decodeBook(bytes);
            resolve5({ url: url.href, text: text4, contentType, cookies });
          } catch (error) {
            reject(error);
          }
        });
        request.setTimeout(timeoutMs, () => request.destroy(new Error("\u6765\u6E90\u8BF7\u6C42\u8D85\u65F6")));
        const deadline = setTimeout(() => request.destroy(new Error("\u6765\u6E90\u8BF7\u6C42\u8D85\u8FC7\u603B\u65F6\u9650")), timeoutMs);
        request.on("close", () => clearTimeout(deadline));
        request.on("error", reject);
        request.end(body);
      });
      if (result.redirect) {
        if (redirect === "manual") return result;
        const next2 = httpUrl(new URL(result.redirect, url).href);
        if (method !== "GET" && next2.origin !== url.origin) throw new Error("\u4E0D\u80FD\u5C06\u767B\u5F55\u8BF7\u6C42\u91CD\u5B9A\u5411\u5230\u5176\u4ED6\u7AD9\u70B9");
        url = next2;
        continue;
      }
      return result;
    }
    throw new Error("\u6765\u6E90\u91CD\u5B9A\u5411\u6B21\u6570\u8FC7\u591A");
  };
}

// src/sources/video-platforms.mjs
var short = (value, max = 180) => cleanText(String(value ?? "").replace(/<[^>]*>/g, "")).slice(0, max);
function videoUrl(input) {
  const value = input.trim();
  if (/^BV[\da-zA-Z]{10}$/.test(value)) return { platform: "bilibili", id: value, url: `https://www.bilibili.com/video/${value}/` };
  if (/^[\w-]{11}$/.test(value)) return { platform: "youtube", id: value, url: `https://www.youtube.com/watch?v=${value}` };
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error("\u8BF7\u8F93\u5165 B \u7AD9 BV \u53F7\u6216\u5B8C\u6574\u89C6\u9891\u94FE\u63A5 / YouTube \u89C6\u9891\u94FE\u63A5");
  }
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.port) throw new Error("\u89C6\u9891\u94FE\u63A5\u683C\u5F0F\u4E0D\u652F\u6301");
  const host = url.hostname.toLowerCase();
  if (["www.bilibili.com", "bilibili.com", "m.bilibili.com"].includes(host)) {
    const id = url.pathname.match(/^\/video\/(BV[\da-zA-Z]{10}|av\d+)(?:\/|$)/)?.[1];
    if (id) {
      const page = Math.max(1, Math.min(1e3, Number(url.searchParams.get("p")) || 1));
      return { platform: "bilibili", id, page, url: `https://www.bilibili.com/video/${id}/${page > 1 ? "?p=" + Math.floor(page) : ""}` };
    }
  }
  if (["www.youtube.com", "youtube.com", "m.youtube.com", "youtu.be"].includes(host)) {
    const id = host === "youtu.be" ? url.pathname.slice(1) : url.pathname === "/watch" ? url.searchParams.get("v") : url.pathname.match(/^\/(?:shorts|embed)\/([^/]+)/)?.[1];
    if (id && /^[\w-]{11}$/.test(id)) return { platform: "youtube", id, url: `https://www.youtube.com/watch?v=${id}` };
  }
  throw new Error("\u4EC5\u652F\u6301 B \u7AD9\u5355\u4E2A\u89C6\u9891\u548C YouTube \u5355\u4E2A\u89C6\u9891\u94FE\u63A5\uFF1B\u77ED\u94FE\u63A5\u8BF7\u5148\u590D\u5236\u5B8C\u6574\u5730\u5740");
}
function createVideoPlatforms({ settings, read = createHttpClient({ maxBytes: 1024 * 1024, maxRedirects: 0 }) }) {
  async function youtube(path, params, signal) {
    const key = await settings.key();
    if (!key) throw new Error("\u8BF7\u5148\u5728\u300C\u89C6\u9891\u6765\u6E90\u8BBE\u7F6E\u300D\u586B\u5199 YouTube API Key");
    const url = new URL("https://www.googleapis.com/youtube/v3/" + path);
    for (const [name, value] of Object.entries(params)) url.searchParams.set(name, String(value));
    try {
      const result = await read(url.href, { signal, headers: { Accept: "application/json", "X-Goog-Api-Key": key } });
      const data2 = JSON.parse(result.text);
      if (data2.error) throw new Error("API_ERROR");
      return data2;
    } catch (error) {
      if (signal?.aborted) throw error;
      const code = String(error).match(/HTTP\s+(\d{3})/)?.[1];
      throw new Error(`YouTube API \u8BF7\u6C42\u5931\u8D25${code ? "\uFF08HTTP " + code + "\uFF09" : ""}\uFF0C\u8BF7\u68C0\u67E5 API Key\u3001YouTube Data API v3 \u662F\u5426\u542F\u7528\u3001\u914D\u989D\u548C\u7F51\u7EDC\u3002`);
    }
  }
  async function bili(path, params, signal) {
    const url = new URL("https://api.bilibili.com" + path);
    for (const [name, value] of Object.entries(params)) url.searchParams.set(name, String(value));
    const result = await read(url.href, { signal, headers: { Accept: "application/json", Referer: "https://www.bilibili.com/" } });
    const data2 = JSON.parse(result.text);
    if (data2.code !== 0) throw new Error(`B \u7AD9\u63A5\u53E3\u8FD4\u56DE ${Number(data2.code)}\uFF0C\u5F53\u524D\u6765\u6E90\u4E0D\u53EF\u7528\uFF1B\u8BF7\u68C0\u67E5\u94FE\u63A5\u6216\u7A0D\u540E\u91CD\u8BD5`);
    return data2.data;
  }
  async function search({ platform, query, limit = 5, signal }) {
    query = String(query).trim().slice(0, 200);
    if (!query) throw new Error("\u8BF7\u8F93\u5165\u89C6\u9891\u5173\u952E\u8BCD");
    limit = Math.max(1, Math.min(5, Math.floor(Number(limit) || 5)));
    if (platform === "youtube") {
      const data3 = await youtube("search", { part: "snippet", type: "video", q: query, maxResults: limit, fields: "items(id/videoId,snippet(title,channelTitle,description))" }, signal);
      return (data3.items || []).filter((item) => /^[\w-]{11}$/.test(item.id?.videoId)).map((item) => ({ platform, id: item.id.videoId, url: `https://www.youtube.com/watch?v=${item.id.videoId}`, title: short(item.snippet.title), author: short(item.snippet.channelTitle, 80), description: short(item.snippet.description, 200) })).slice(0, limit);
    }
    if (platform !== "bilibili") throw new Error("\u672A\u77E5\u89C6\u9891\u6765\u6E90");
    const data2 = await bili("/x/web-interface/search/type", { search_type: "video", keyword: query, page: 1, page_size: limit }, signal);
    return (data2.result || []).filter((item) => /^BV[\da-zA-Z]{10}$/.test(item.bvid)).slice(0, limit).map((item) => ({ platform, id: item.bvid, url: `https://www.bilibili.com/video/${item.bvid}/`, title: short(item.title), author: short(item.author, 80), description: short(item.description, 200), duration: short(item.duration, 20) }));
  }
  async function info(input, { signal } = {}) {
    const target = videoUrl(input);
    if (target.platform === "youtube") {
      const data3 = await youtube("videos", { part: "snippet,contentDetails,statistics", id: target.id, fields: "items(id,snippet(title,channelTitle,description),contentDetails/duration,statistics/viewCount)" }, signal);
      const item = data3.items?.[0];
      if (!item) throw new Error("YouTube \u672A\u8FD4\u56DE\u8FD9\u4E2A\u89C6\u9891\uFF0C\u53EF\u80FD\u5DF2\u5220\u9664\u3001\u975E\u516C\u5F00\u6216\u4E0D\u53EF\u8BBF\u95EE");
      return { ...target, title: short(item.snippet.title), author: short(item.snippet.channelTitle, 80), description: short(item.snippet.description, 600), duration: short(item.contentDetails?.duration, 40), views: Number(item.statistics?.viewCount) || 0 };
    }
    const data2 = await bili("/x/web-interface/view", target.id.startsWith("av") ? { aid: target.id.slice(2) } : { bvid: target.id }, signal);
    return { ...target, title: short(data2.title), author: short(data2.owner?.name, 80), description: short(data2.desc, 600), duration: Number(data2.duration) || 0, views: Number(data2.stat?.view) || 0 };
  }
  async function popular({ page = 1, signal } = {}) {
    page = Math.max(1, Math.min(100, Math.floor(Number(page) || 1)));
    const data2 = await bili("/x/web-interface/popular", { pn: page, ps: 10 }, signal);
    const items = (data2.list || []).filter((item) => /^BV[\da-zA-Z]{10}$/.test(item.bvid)).slice(0, 10).map((item) => ({
      platform: "bilibili",
      id: item.bvid,
      url: `https://www.bilibili.com/video/${item.bvid}/`,
      title: short(item.title),
      author: short(item.owner?.name, 80),
      duration: Number(item.duration) || 0
    }));
    return { items, page, hasMore: !data2.no_more && items.length > 0 && page < 100 };
  }
  return { search, info, popular, list: () => [{ id: "bilibili", name: "\u54D4\u54E9\u54D4\u54E9", search: true, apiKey: false }, { id: "youtube", name: "YouTube", search: true, apiKey: true }] };
}

// src/services/video-ingestion.mjs
var execute2 = promisify2(execFile2);
var VIDEO_FORMAT_ARGS = Object.freeze(videoFormatArgs());
async function downloaderBinary() {
  const paths = process.env.MOYU_YTDLP ? [process.env.MOYU_YTDLP] : [
    join5(homedir3(), ".local/share/opencode-moyu/media/bin", process.platform === "win32" ? "yt-dlp.exe" : "yt-dlp"),
    ...String(process.env.PATH || "").split(delimiter2).map((dir) => join5(dir, process.platform === "win32" ? "yt-dlp.exe" : "yt-dlp"))
  ];
  for (const path of paths) {
    try {
      await access2(path, constants2.X_OK);
      await execute2(path, ["--version"], { timeout: 5e3, maxBuffer: 1024, windowsHide: true });
      return path;
    } catch {
    }
  }
  throw new Error("\u672A\u627E\u5230 yt-dlp\uFF0C\u8BF7\u5B89\u88C5\u5B98\u65B9 yt-dlp\uFF0C\u6216\u7528 MOYU_YTDLP \u6307\u5B9A\u8DEF\u5F84");
}
function safeError(message) {
  return cleanText(String(message)).replace(/https?:\/\/\S+/g, "[\u6765\u6E90\u5730\u5740]").slice(-600);
}
function downloadFailure(message, platform) {
  if (/sign in to confirm|not a bot|captcha|human.verification|verify.you.are.human/i.test(message)) return `${platform === "youtube" ? "YouTube" : "\u89C6\u9891\u6765\u6E90"} \u8981\u6C42\u767B\u5F55\u6216\u4EBA\u673A\u9A8C\u8BC1\uFF0C\u5DF2\u505C\u6B62\u4E0B\u8F7D\u3002API Key \u4EC5\u7528\u4E8E\u6570\u636E\u67E5\u8BE2\uFF0C\u4E0D\u80FD\u89E3\u9664\u89C6\u9891\u8BBF\u95EE\u9650\u5236\u3002`;
  if (/private video|members.only|premium|age.restricted|login required|sign in/i.test(message)) return "\u89C6\u9891\u9700\u8981\u8D26\u6237\u6216\u989D\u5916\u8BBF\u95EE\u6743\u9650\uFF0C\u5DF2\u505C\u6B62\u4E0B\u8F7D";
  if (/video is unavailable|video unavailable|removed|does not exist/i.test(message)) return "\u89C6\u9891\u4E0D\u53EF\u7528\u3001\u5DF2\u5220\u9664\u6216\u5F53\u524D\u7F51\u7EDC\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u672A\u5165\u5E93";
  if (/requested format is not available/i.test(message)) return "\u6765\u6E90\u672A\u63D0\u4F9B\u5F53\u524D\u53EF\u4E0B\u8F7D\u7684\u89C6\u9891\u683C\u5F0F\uFF0C\u672A\u5165\u5E93";
  return "\u89C6\u9891\u6765\u6E90\u83B7\u53D6\u5931\u8D25\uFF1A" + safeError(message);
}
async function downloadVideo(url, directory, { signal, quality, onProgress = (_value) => {
}, binary = downloaderBinary, launch = spawn2 } = {}) {
  const target = videoUrl(url);
  signal?.throwIfAborted();
  const executable = await binary(), ffmpeg = await mediaBinary("ffmpeg");
  signal?.throwIfAborted();
  const args = ["--ignore-config", "--no-plugin-dirs", "--no-cache-dir", "--no-playlist", "--playlist-items", "1", "--no-remote-components", "--js-runtimes", "node", "--socket-timeout", "15", "--retries", "0", "--extractor-retries", "0", "--fragment-retries", "0", "--abort-on-unavailable-fragments", "--concurrent-fragments", "1", "--match-filters", "!is_live & duration <= 3600", "--max-filesize", String(MAX_VIDEO_BYTES), ...videoFormatArgs(quality), "--merge-output-format", "mp4/mkv", "--ffmpeg-location", dirname3(ffmpeg), "--no-mtime", "--newline", "--progress", "--progress-template", "download:MOYU_PROGRESS:%(progress._percent_str)s", "--print", "before_dl:MOYU_META:%(title)j", "--no-simulate", "--paths", directory, "--output", "video.%(ext)s", "--", target.url];
  return new Promise((resolve5, reject) => {
    const child = launch(executable, args, { stdio: ["ignore", "pipe", "pipe"], windowsHide: true, detached: process.platform !== "win32" });
    let stderr = "", partial = "", title = "", failure, finished = false;
    const terminate = (error) => {
      if (finished || failure) return;
      failure = error;
      try {
        if (process.platform !== "win32") process.kill(-child.pid, "SIGTERM");
        else spawn2("taskkill", ["/pid", String(child.pid), "/t", "/f"], { stdio: "ignore", windowsHide: true }).once("error", () => child.kill());
      } catch {
      }
      const timer = setTimeout(() => {
        try {
          if (process.platform !== "win32") process.kill(-child.pid, "SIGKILL");
          else child.kill("SIGKILL");
        } catch {
        }
      }, 1500);
      timer.unref?.();
      child.once("close", () => clearTimeout(timer));
    };
    const abort = () => terminate(new Error("\u89C6\u9891\u4E0B\u8F7D\u5DF2\u53D6\u6D88"));
    signal?.addEventListener("abort", abort, { once: true });
    if (signal?.aborted) abort();
    child.stdout.on("data", (chunk) => {
      partial += chunk.toString();
      if (partial.length > 8192) partial = partial.slice(-8192);
      const lines = partial.split(/\r?\n/);
      partial = lines.pop() || "";
      for (const line of lines) {
        if (line.startsWith("MOYU_META:")) {
          try {
            title = cleanText(JSON.parse(line.slice(10))).slice(0, 180);
          } catch {
          }
        }
        const match = line.match(/MOYU_PROGRESS:\s*([\d.]+)%/);
        if (match) onProgress({ percent: Math.min(99, Number(match[1])), phase: "downloading" });
      }
    });
    child.stderr.on("data", (chunk) => {
      stderr = (stderr + chunk.toString()).slice(-4e3);
    });
    const deadline = setTimeout(() => terminate(new Error("\u89C6\u9891\u4E0B\u8F7D\u8D85\u8FC7 10 \u5206\u949F\uFF0C\u5DF2\u505C\u6B62")), 6e5);
    let checking = false;
    const quota = setInterval(async () => {
      if (checking || finished) return;
      checking = true;
      try {
        const files = await readdir5(directory);
        const sizes = await Promise.all(files.map((name) => stat4(join5(directory, name)).then((item) => item.size).catch(() => 0)));
        if (sizes.reduce((sum, size) => sum + size, 0) > MAX_VIDEO_BYTES * 2) terminate(new Error("\u89C6\u9891\u4E0B\u8F7D\u4E34\u65F6\u6587\u4EF6\u8D85\u8FC7 512 MiB \u9650\u5236"));
      } catch (error) {
        if (!finished) terminate(new Error("\u65E0\u6CD5\u68C0\u67E5\u4E0B\u8F7D\u7F13\u5B58\uFF1A" + safeError(error.message)));
      } finally {
        checking = false;
      }
    }, 500);
    const clean2 = () => {
      finished = true;
      clearTimeout(deadline);
      clearInterval(quota);
      signal?.removeEventListener("abort", abort);
    };
    child.once("error", (error) => {
      clean2();
      reject(new Error("\u4E0B\u8F7D\u5668\u65E0\u6CD5\u542F\u52A8\uFF1A" + safeError(error.message)));
    });
    child.once("close", async (code) => {
      clean2();
      if (failure) return reject(failure);
      if (code !== 0) return reject(new Error(downloadFailure(stderr || "\u4E0B\u8F7D\u5668\u9000\u51FA " + code, target.platform)));
      try {
        const names = (await readdir5(directory)).filter((name) => /^video\.(mp4|mkv|webm|mov|avi|m4v|mpeg|mpg)$/.test(name));
        if (names.length !== 1) throw new Error("\u672A\u53D6\u5F97\u5B8C\u6574\u89C6\u9891\uFF0C\u53EF\u80FD\u53D7\u767B\u5F55\u3001\u65F6\u957F\u3001\u5927\u5C0F\u6216\u683C\u5F0F\u9650\u5236");
        const path = join5(directory, names[0]);
        if ((await stat4(path)).size > MAX_VIDEO_BYTES) throw new Error("\u89C6\u9891\u8D85\u8FC7 256 MiB \u9650\u5236");
        resolve5({ path, title });
      } catch (error) {
        reject(error);
      }
    });
  });
}
function createVideoIngestion({ directory, keyFile, read, download = downloadVideo }) {
  const store = new LibraryStore(directory, { keyFile }), settings = new MediaSettings(store), cache = new MediaCache(store);
  const platforms = createVideoPlatforms({ settings, ...read ? { read } : {} });
  async function cleanup() {
    await cache.removeStalePlayback();
    const workRoot = join5(store.internal, "downloads");
    await mkdir5(workRoot, { recursive: true, mode: 448 });
    for (const entry of await readdir5(workRoot, { withFileTypes: true })) {
      if (!entry.isDirectory() || !/^\d+-[a-f0-9]{24}-[A-Za-z0-9]{6}$/.test(entry.name)) continue;
      try {
        process.kill(Number(entry.name.split("-")[0]), 0);
      } catch (error) {
        if (error.code === "ESRCH") await rm3(join5(workRoot, entry.name), { recursive: true, force: true });
      }
    }
  }
  async function importVideo({ url, signal, quality = void 0, onProgress = (_value) => {
  } }) {
    const target = videoUrl(url);
    quality = videoQuality(quality ?? await settings.downloadQuality());
    const lockId = stableId("video:" + target.url), id = stableId("video:" + target.url + ":" + quality);
    return store.withJobLock(lockId, async () => {
      signal?.throwIfAborted();
      const existing = (await store.resources()).filter((item) => item.kind === "video" && item.source.url === target.url && item.metadata.managedMedia && Math.max(item.metadata.downloadQuality ?? 480, Math.min(item.metadata.width || 0, item.metadata.height || 0)) >= quality).sort((a, b) => Math.min(b.metadata.width, b.metadata.height) - Math.min(a.metadata.width, a.metadata.height));
      for (const resource of existing) {
        try {
          await access2(cache.path(resource.id));
          return { resource, cached: true };
        } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
      }
      const workRoot = join5(store.internal, "downloads");
      await mkdir5(workRoot, { recursive: true, mode: 448 });
      const work = await mkdtemp(join5(workRoot, process.pid + "-" + id + "-"));
      try {
        onProgress({ phase: "resolving", percent: 0 });
        let details;
        if (target.platform === "bilibili" || await settings.key()) {
          try {
            details = await platforms.info(target.url, { signal });
          } catch {
            signal?.throwIfAborted();
          }
        }
        const media = await download(target.url, work, { signal, quality, onProgress });
        signal?.throwIfAborted();
        const info = await inspectVideo(media.path);
        signal?.throwIfAborted();
        onProgress({ phase: "encrypting", percent: 99 });
        const path = await cache.seal(id, media.path);
        signal?.throwIfAborted();
        const resource = { schemaVersion: 1, id, kind: "video", title: media.title || details?.title || info.title, source: { adapter: target.platform, url: target.url }, assets: [{ role: "media", mime: "application/x-moyu-video", path }], metadata: { author: details?.author, description: details?.description, views: details?.views, metadataFetched: Boolean(details), width: info.width, height: info.height, duration: info.duration, hasAudio: info.hasAudio, managedMedia: true, downloadQuality: quality, extension: extname3(media.path) }, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
        await store.putResource(resource);
        return { resource, cached: false };
      } catch (error) {
        await rm3(cache.path(id), { force: true });
        throw error;
      } finally {
        await rm3(work, { recursive: true, force: true });
      }
    });
  }
  return { store, settings, cache, platforms, importVideo, cleanup };
}

// src/ui/video.tsx
var prefix = "opencode-moyu:video:";
function createVideoReader(api, library, settings) {
  const [video, setVideo] = createSignal();
  const [frame, setFrame] = createSignal([]);
  const [frameSize, setFrameSize] = createSignal({
    width: 1,
    height: 1
  });
  const [state, setState] = createSignal({
    position: 0,
    playing: false,
    muted: true,
    loading: false
  }, {
    equals: (before2, after2) => Math.floor(before2.position) === Math.floor(after2.position) && before2.playing === after2.playing && before2.muted === after2.muted && before2.loading === after2.loading
  });
  const [error, setError] = createSignal("");
  const [busy, setBusy] = createSignal(false);
  const [downloadProgress, setDownloadProgress] = createSignal("");
  const [presentation, setPresentation] = createSignal(api.kv.get(prefix + "presentation", "auto"));
  const [protocol, setProtocol] = createSignal(imageProtocol(OpenTui, api.renderer));
  const [sourceProgress, setSourceProgress] = createSignal("");
  const [downloadQuality, setDownloadQuality] = createSignal(DEFAULT_VIDEO_QUALITY);
  let sourceAbort;
  const inline = new InlineImage(OpenTui, api.renderer, (cause) => {
    setPresentation("pixel");
    showError(cause);
  });
  const useImage = () => presentation() !== "pixel" && protocol() !== "legacy";
  const qualityLabel = () => !useImage() ? "\u50CF\u7D20\u98CE" : ["kitty", "sixel"].includes(protocol()) ? "\u539F\u753B" : "\u7EC6\u817B\u5B57\u7B26";
  const capabilitiesChanged = () => setProtocol(imageProtocol(OpenTui, api.renderer));
  api.renderer.on("capabilities", capabilitiesChanged);
  api.renderer.on("resize", capabilitiesChanged);
  const sources = createVideoIngestion({
    directory: library.directory,
    keyFile: library.vault.keyFile
  });
  void sources.settings.downloadQuality().then((value) => {
    if (!api.lifecycle.signal.aborted) setDownloadQuality(value);
  }).catch(showError);
  let downloadAbort;
  let loadAbort;
  let downloadTask;
  const loads = /* @__PURE__ */ new Set();
  let token = 0, restoring = 0, renderKey = "", resizeTimer;
  const colors = /* @__PURE__ */ new Map();
  function color(value) {
    if (!value) return void 0;
    if (!colors.has(value)) colors.set(value, "#" + value.split(",").map((n) => Number(n).toString(16).padStart(2, "0")).join(""));
    return colors.get(value);
  }
  const player = new PixelPlayer({
    beforePlay: async (signal) => {
      await settings.beforePlay?.(signal);
    },
    frameSize: (width, height, columns, rows) => useImage() ? imageFrameSize(width, height, columns, rows, api.renderer, protocol()) : pixelSize(width, height, columns, rows),
    onFrame: (bytes, size) => {
      if (useImage()) {
        inline.present(bytes, size);
        return;
      }
      setFrameSize({
        width: size.width,
        height: size.height / 2
      });
      setFrame(pixelRuns(bytes, size.width, size.height).map((run) => ({
        text: run.text,
        fg: color(run.fg),
        bg: color(run.bg)
      })));
    },
    onState: (next2) => {
      const stopped = state().playing && !next2.playing;
      setState(next2);
      if (stopped) void settings.releasePlayback?.(player.stopping.then(() => {
      })).catch(showError);
    },
    onError: (message) => {
      setError(message);
      api.ui.toast({
        title: "\u58A8\u9C7C\u89C6\u9891",
        message,
        variant: "error"
      });
    }
  });
  function save() {
    const current = video();
    if (current) api.kv.set(prefix + current.id, player.position);
  }
  const saveTimer = setInterval(() => {
    if (player.playing) save();
  }, 5e3);
  function pause() {
    player.pause();
    save();
  }
  let removalTimer;
  const resourceWatcher = watch(join6(library.internal, "resources"), (_event, filename) => {
    const current = video();
    if (!current || filename?.toString() !== current.id + ".enc") return;
    clearTimeout(removalTimer);
    removalTimer = setTimeout(() => {
      void access3(join6(library.internal, "resources", current.id + ".enc")).catch((cause) => {
        if (cause.code !== "ENOENT" || api.lifecycle.signal.aborted || video()?.id !== current.id) return;
        ++token;
        pause();
        setVideo(void 0);
        setFrame([]);
        inline.clear();
        player.video = void 0;
        api.kv.set(prefix + current.id, 0);
        api.kv.set(prefix + "last", "");
        void current.release?.().catch(() => {
        });
      });
    }, 50);
  });
  function releaseManaged() {
    const current = video();
    if (!current?.release) return;
    ++token;
    pause();
    setBusy(false);
    setVideo(void 0);
    setFrame([]);
    inline.clear();
    player.video = void 0;
    void current.release().catch(() => {
    });
  }
  function load2(input, resource) {
    const pending = loadVideo(input, resource);
    loads.add(pending);
    void pending.finally(() => loads.delete(pending));
    return pending;
  }
  async function loadVideo(input, resource) {
    loadAbort?.abort();
    const abort = loadAbort = new AbortController();
    const request = ++token;
    setBusy(true);
    setError("");
    pause();
    try {
      const next2 = resource ? await sources.cache.open(resource, {
        signal: abort.signal
      }) : await addLocalVideo(library, input, api.state.path.directory);
      if (request !== token || api.lifecycle.signal.aborted || !settings.active()) {
        await next2.release?.();
        return;
      }
      const previous = video();
      await previous?.release?.();
      if (request !== token || api.lifecycle.signal.aborted || !settings.active()) {
        await next2.release?.();
        return;
      }
      setVideo(next2);
      setFrame([]);
      inline.clear();
      settings.activate();
      api.kv.set(prefix + "last", next2.id);
      player.columns = settings.columns();
      player.rows = settings.rows();
      player.scaleFilter = useImage() ? "lanczos" : "neighbor";
      renderKey = useImage() ? protocol() : "pixel";
      await player.load(next2, api.kv.get(prefix + next2.id, 0));
    } catch (cause) {
      if (request !== token || abort.signal.aborted || api.lifecycle.signal.aborted) return;
      const message = cause instanceof Error ? cause.message : String(cause);
      setError(message);
      api.ui.toast({
        title: "\u89C6\u9891\u6253\u5F00\u5931\u8D25",
        message,
        variant: "error"
      });
    } finally {
      if (loadAbort === abort) loadAbort = void 0;
      if (request === token) setBusy(false);
    }
  }
  function prompt() {
    settings.dialog(() => _$createComponent(api.ui.DialogPrompt, {
      title: "\u6253\u5F00\u89C6\u9891 \xB7 \u672C\u5730\u6587\u4EF6",
      placeholder: "\u4F8B\u5982 /mnt/d/videos/\u89C6\u9891.mp4",
      get onCancel() {
        return settings.close;
      },
      onConfirm: (path) => {
        settings.close();
        void load2(path);
      }
    }));
  }
  function showError(cause) {
    if (api.lifecycle.signal.aborted) return;
    const message = cause instanceof Error ? cause.message : String(cause);
    setError(message);
    api.ui.toast({
      title: "\u89C6\u9891\u6765\u6E90",
      message,
      variant: "error"
    });
  }
  function download(url) {
    if (downloadTask) {
      api.ui.toast({
        message: "\u5DF2\u6709\u4E0B\u8F7D\u4EFB\u52A1\uFF0C\u8BF7\u7B49\u5F85\u6216\u70B9\u51FB\u53D6\u6D88",
        variant: "info"
      });
      return;
    }
    const pending = runDownload(url);
    downloadTask = pending;
    void pending.finally(() => {
      if (downloadTask === pending) downloadTask = void 0;
    });
    return pending;
  }
  async function runDownload(url) {
    if (downloadAbort) return api.ui.toast({
      message: "\u5DF2\u6709\u4E0B\u8F7D\u4EFB\u52A1\uFF0C\u8BF7\u7B49\u5F85\u6216\u70B9\u51FB\u53D6\u6D88",
      variant: "info"
    });
    const abort = downloadAbort = new AbortController();
    const selection = token;
    pause();
    setError("");
    setDownloadProgress("\u6B63\u5728\u89E3\u6790\u89C6\u9891\u6765\u6E90\u2026");
    try {
      const result = await sources.importVideo({
        url,
        signal: abort.signal,
        onProgress: (progress) => {
          if (!api.lifecycle.signal.aborted) setDownloadProgress(progress.phase === "encrypting" ? "\u6B63\u5728\u52A0\u5BC6\u5165\u5E93\u2026" : `\u6B63\u5728\u4E0B\u8F7D ${progress.percent.toFixed(0)}% \xB7 \u70B9\u51FB\u53D6\u6D88\u53EF\u505C\u6B62`);
        }
      });
      if (api.lifecycle.signal.aborted || abort.signal.aborted) return;
      api.ui.toast({
        message: result.cached ? "\u5DF2\u590D\u7528\u89C6\u9891\u7F13\u5B58" : "\u89C6\u9891\u5DF2\u52A0\u5BC6\u5165\u5E93",
        variant: "info"
      });
      if (settings.active() && token === selection) await load2("", result.resource);
    } catch (cause) {
      if (!api.lifecycle.signal.aborted) showError(cause);
    } finally {
      if (downloadAbort === abort) {
        downloadAbort = void 0;
        setDownloadProgress("");
      }
    }
  }
  function promptUrl() {
    settings.dialog(() => _$createComponent(api.ui.DialogPrompt, {
      title: "\u5BFC\u5165 B \u7AD9 / YouTube \u89C6\u9891",
      get placeholder() {
        return `\u5B8C\u6574\u89C6\u9891\u94FE\u63A5\u6216 BV \u53F7\uFF0C\u4F18\u5148 ${downloadQuality()}p / 256 MiB / 60 \u5206\u949F`;
      },
      get onCancel() {
        return settings.close;
      },
      onConfirm: (url) => {
        settings.close();
        void download(url);
      }
    }));
  }
  async function querySource(label, request, show) {
    sourceAbort?.abort();
    const abort = sourceAbort = new AbortController();
    setError("");
    setSourceProgress(label);
    try {
      const result = await request(abort.signal);
      if (sourceAbort === abort && !abort.signal.aborted && !api.lifecycle.signal.aborted && settings.active()) show(result);
    } catch (cause) {
      if (!abort.signal.aborted) showError(cause);
    } finally {
      if (sourceAbort === abort) {
        sourceAbort = void 0;
        setSourceProgress("");
      }
    }
  }
  function popular(page = 1) {
    settings.close();
    void querySource("\u6B63\u5728\u83B7\u53D6 B \u7AD9\u70ED\u95E8\u2026", (signal) => sources.platforms.popular({
      page,
      signal
    }), (result) => {
      if (!result.items.length) return api.ui.toast({
        message: "\u5F53\u524D\u6CA1\u6709\u66F4\u591A\u70ED\u95E8\u89C6\u9891",
        variant: "info"
      });
      settings.dialog(() => _$createComponent(api.ui.DialogSelect, {
        get title() {
          return `B \u7AD9\u70ED\u95E8 \xB7 \u7B2C ${result.page} \u9875`;
        },
        placeholder: "\u70B9\u51FB\u89C6\u9891\u4E0B\u8F7D\uFF0C\u5173\u95ED\u540E\u4ECD\u53EF\u70B9\u51FB\u300C\u70ED\u95E8\u300D\u7EE7\u7EED\u6D4F\u89C8",
        get options() {
          return [...result.items.map((item) => ({
            title: item.title,
            value: item.url,
            description: `${item.author} \xB7 ${mediaTime(item.duration)}`
          })), ...result.hasMore ? [{
            title: "\u6362\u4E00\u6279 \u2192",
            value: "next",
            description: "\u4E0B\u4E00\u9875\u70ED\u95E8\u89C6\u9891"
          }] : [], ...page > 1 ? [{
            title: "\u2190 \u4E0A\u4E00\u6279",
            value: "previous",
            description: "\u8FD4\u56DE\u4E0A\u4E00\u9875"
          }] : []];
        },
        onSelect: (item) => {
          settings.close();
          if (item.value === "next") popular(page + 1);
          else if (item.value === "previous") popular(page - 1);
          else void download(String(item.value));
        }
      }));
    });
  }
  function searchPlatform() {
    settings.dialog(() => _$createComponent(api.ui.DialogSelect, {
      title: "\u9009\u62E9\u89C6\u9891\u641C\u7D22\u6765\u6E90",
      options: [{
        title: "\u54D4\u54E9\u54D4\u54E9",
        value: "bilibili",
        description: "\u516C\u5F00\u89C6\u9891\u641C\u7D22"
      }, {
        title: "YouTube",
        value: "youtube",
        description: "\u4F7F\u7528\u672C\u5730\u4FDD\u5B58\u7684 API Key"
      }],
      onSelect: (platform) => {
        settings.close();
        settings.dialog(() => _$createComponent(api.ui.DialogPrompt, {
          get title() {
            return `${platform.title} \xB7 \u641C\u7D22\u89C6\u9891`;
          },
          placeholder: "\u8F93\u5165\u5173\u952E\u8BCD\uFF0C\u6700\u591A\u8FD4\u56DE 5 \u4E2A\u7ED3\u679C",
          get onCancel() {
            return settings.close;
          },
          onConfirm: (query) => {
            settings.close();
            void querySource("\u6B63\u5728\u641C\u7D22\u89C6\u9891\u2026", (signal) => sources.platforms.search({
              platform: String(platform.value),
              query,
              signal
            }), (items) => {
              if (!items.length) return api.ui.toast({
                message: "\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u89C6\u9891",
                variant: "info"
              });
              settings.dialog(() => _$createComponent(api.ui.DialogSelect, {
                get title() {
                  return `${platform.title} \xB7 \u641C\u7D22\u7ED3\u679C`;
                },
                placeholder: "\u70B9\u51FB\u89C6\u9891\u4E0B\u8F7D\u5230\u4FA7\u680F\u64AD\u653E\u5668",
                get options() {
                  return items.map((item) => ({
                    title: item.title,
                    value: item.url,
                    description: item.author
                  }));
                },
                onSelect: (item) => {
                  settings.close();
                  void download(String(item.value));
                }
              }));
            });
          }
        }));
      }
    }));
  }
  function quality() {
    settings.dialog(() => _$createComponent(api.ui.DialogSelect, {
      title: "\u4FA7\u680F\u89C6\u9891\u753B\u8D28",
      get placeholder() {
        return _$memo(() => protocol() === "legacy")() ? "\u5F53\u524D OpenCode \u7F3A\u5C11\u56FE\u7247\u7EC4\u4EF6\uFF0C\u4F7F\u7528\u50CF\u7D20\u98CE" : ["kitty", "sixel"].includes(protocol()) ? "\u5F53\u524D\u7EC8\u7AEF\u652F\u6301\u539F\u753B\uFF0C\u4ECD\u5728\u4FA7\u680F\u5185\u64AD\u653E" : "\u5F53\u524D\u7EC8\u7AEF\u672A\u542F\u7528\u56FE\u7247\u534F\u8BAE\uFF0C\u81EA\u52A8\u6A21\u5F0F\u4F7F\u7528\u7EC6\u817B\u5B57\u7B26\uFF1B\u539F\u753B\u9700\u8981\u652F\u6301 Sixel / Kitty \u7684\u7EC8\u7AEF";
      },
      get current() {
        return presentation();
      },
      options: [{
        title: "\u81EA\u52A8\u6E05\u6670\uFF08\u63A8\u8350\uFF09",
        value: "auto",
        description: "\u56FE\u7247\u534F\u8BAE\u53EF\u7528\u65F6\u663E\u793A\u539F\u753B\uFF0C\u5426\u5219\u4F7F\u7528\u7EC6\u817B\u5B57\u7B26"
      }, {
        title: "\u50CF\u7D20\u98CE",
        value: "pixel",
        description: "\u4FDD\u7559\u539F\u6765\u7684\u4F4E\u5F00\u9500\u5B57\u7B26\u753B\u9762"
      }],
      onSelect: (item) => {
        settings.close();
        setPresentation(String(item.value));
        api.kv.set(prefix + "presentation", item.value);
      }
    }));
  }
  async function downloadQualityMenu() {
    try {
      const current = await sources.settings.downloadQuality();
      if (api.lifecycle.signal.aborted) return;
      setDownloadQuality(current);
      settings.dialog(() => _$createComponent(api.ui.DialogSelect, {
        title: "\u89C6\u9891\u4E0B\u8F7D\u6E05\u6670\u5EA6",
        placeholder: "\u6765\u6E90\u652F\u6301\u65F6\u4F18\u5148\u6240\u9009\u6E05\u6670\u5EA6\uFF0C\u65E7\u89C6\u9891\u9700\u91CD\u65B0\u5BFC\u5165\uFF1B\u6BCF\u4E2A\u89C6\u9891\u6700\u591A 256 MiB",
        current,
        get options() {
          return [...VIDEO_QUALITIES].reverse().map((value) => ({
            title: `${value}p${value === 1080 ? " \u9AD8\u6E05\uFF08\u63A8\u8350\uFF09" : value === 720 ? " \u9AD8\u6E05" : " \u6D41\u7545"}`,
            value,
            description: value === 1080 ? "\u4F18\u5148\u4E0B\u8F7D\u66F4\u6E05\u6670\u7684\u6E90\u89C6\u9891\uFF0C\u5B9E\u9645\u4EE5\u6765\u6E90\u63D0\u4F9B\u4E3A\u51C6" : value === 720 ? "\u517C\u987E\u6E05\u6670\u5EA6\u3001\u4E0B\u8F7D\u65F6\u95F4\u4E0E\u6587\u4EF6\u5927\u5C0F" : "\u8282\u7701\u7A7A\u95F4\uFF0C\u9002\u5408\u8F83\u6162\u7F51\u7EDC"
          }));
        },
        onSelect: (item) => {
          settings.close();
          void sources.settings.saveDownloadQuality(item.value).then((value) => {
            if (api.lifecycle.signal.aborted) return;
            setDownloadQuality(value);
            api.ui.toast({
              message: `\u4E0B\u8F7D\u6E05\u6670\u5EA6\u5DF2\u8BBE\u4E3A ${value}p\uFF0C\u91CD\u65B0\u5BFC\u5165\u540C\u4E00\u94FE\u63A5\u53EF\u83B7\u53D6\u9AD8\u6E05\u526F\u672C`,
              variant: "info"
            });
          }).catch(showError);
        }
      }));
    } catch (cause) {
      showError(cause);
    }
  }
  async function sourceSettings() {
    try {
      const status = await sources.settings.status();
      if (api.lifecycle.signal.aborted) return;
      settings.dialog(() => _$createComponent(api.ui.DialogSelect, {
        title: "\u89C6\u9891\u6765\u6E90\u8BBE\u7F6E",
        placeholder: "API Key \u4EC5\u7528\u4E8E YouTube \u6570\u636E\u67E5\u8BE2\uFF0C\u672C\u5730\u52A0\u5BC6\u4FDD\u5B58",
        get options() {
          return [{
            title: status.youtubeApiKeyConfigured ? "\u66F4\u65B0 YouTube API Key" : "\u586B\u5199 YouTube API Key",
            value: "key",
            description: status.youtubeApiKeyConfigured ? "\u5DF2\u914D\u7F6E \xB7 \u4E0D\u56DE\u663E\u5BC6\u94A5" : "\u542F\u7528 YouTube Data API v3 \u540E\u586B\u5199"
          }, {
            title: "\u79FB\u9664\u4FDD\u5B58\u7684 YouTube API Key",
            value: "remove",
            description: "\u4E0D\u5F71\u54CD\u5DF2\u4E0B\u8F7D\u7684\u89C6\u9891"
          }];
        },
        onSelect: (item) => {
          settings.close();
          if (item.value === "remove") {
            settings.dialog(() => _$createComponent(api.ui.DialogConfirm, {
              title: "\u79FB\u9664 YouTube API Key",
              message: "\u79FB\u9664\u672C\u5730\u4FDD\u5B58\u7684\u5BC6\u94A5\uFF1F\u82E5\u8BBE\u7F6E\u4E86 YOUTUBE_API_KEY \u73AF\u5883\u53D8\u91CF\uFF0C\u4ECD\u4F1A\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u3002",
              get onCancel() {
                return settings.close;
              },
              onConfirm: () => {
                settings.close();
                void sources.settings.removeKey().then(() => sourceSettings()).catch(showError);
              }
            }));
            return;
          }
          settings.dialog(() => _$createComponent(api.ui.DialogPrompt, {
            title: "YouTube API Key \xB7 \u672C\u5730\u52A0\u5BC6\u4FDD\u5B58",
            placeholder: "\u7C98\u8D34\u5B8C\u6574 API Key\uFF0C\u4FDD\u5B58\u540E\u4E0D\u56DE\u663E",
            get onCancel() {
              return settings.close;
            },
            onConfirm: (key) => {
              settings.close();
              void sources.settings.saveKey(key).then(() => api.ui.toast({
                message: "YouTube API Key \u5DF2\u52A0\u5BC6\u4FDD\u5B58",
                variant: "info"
              })).catch(showError);
            }
          }));
        }
      }));
    } catch (cause) {
      showError(cause);
    }
  }
  async function shelf() {
    try {
      const resources = (await library.resources()).filter((item) => item.kind === "video");
      if (api.lifecycle.signal.aborted) return;
      settings.dialog(() => _$createComponent(api.ui.DialogSelect, {
        title: "\u89C6\u9891\u5E93 \xB7 \u58A8\u9C7C\u89C6\u9891",
        placeholder: "\u9009\u62E9\u89C6\u9891\uFF0C\u6216\u6253\u5F00\u672C\u5730\u6587\u4EF6",
        get current() {
          return video()?.id;
        },
        get options() {
          return [{
            title: "\uFF0B \u6253\u5F00\u672C\u5730\u89C6\u9891\u2026",
            value: "",
            description: "MP4 / MKV / WebM / MOV / AVI / GIF"
          }, {
            title: "\uFF0B B \u7AD9 / YouTube \u89C6\u9891\u94FE\u63A5\u2026",
            value: "url",
            description: "\u4E0B\u8F7D\u53EF\u516C\u5F00\u8BBF\u95EE\u7684\u89C6\u9891\uFF0C\u52A0\u5BC6\u5165\u5E93"
          }, {
            title: "\u641C\u7D22\u5728\u7EBF\u89C6\u9891\u2026",
            value: "search",
            description: "\u54D4\u54E9\u54D4\u54E9 / YouTube"
          }, {
            title: "\u6D4F\u89C8 B \u7AD9\u70ED\u95E8\u2026",
            value: "popular",
            description: "\u76F4\u63A5\u9009\u89C6\u9891\uFF0C\u65E0\u9700\u94FE\u63A5\u6216 API Key"
          }, ...settings.collect ? [{
            title: "\u8BA9\u5F53\u524D\u6A21\u578B\u641C\u7D22 / \u91C7\u96C6\u89C6\u9891\u2026",
            value: "collect",
            description: "\u652F\u6301\u70ED\u95E8\u3001\u5173\u952E\u8BCD\u641C\u7D22\u3001\u89C6\u9891\u94FE\u63A5\u548C\u4E0B\u8F7D\u6E05\u6670\u5EA6"
          }] : [], {
            title: "\u4FA7\u680F\u89C6\u9891\u753B\u8D28\u2026",
            value: "quality",
            description: qualityLabel()
          }, {
            title: "\u89C6\u9891\u4E0B\u8F7D\u6E05\u6670\u5EA6\u2026",
            value: "download-quality",
            description: `\u4F18\u5148 ${downloadQuality()}p \xB7 \u65E7\u89C6\u9891\u53EF\u91CD\u65B0\u5BFC\u5165\u5347\u7EA7`
          }, {
            title: "\u89C6\u9891\u6765\u6E90\u8BBE\u7F6E\u2026",
            value: "settings",
            description: "\u586B\u5199\u6216\u79FB\u9664 YouTube API Key"
          }, ...resources.map((item) => ({
            title: item.title,
            value: item.id,
            description: `${mediaTime(item.metadata.duration)} \xB7 ${Math.round(item.metadata.width)}\xD7${Math.round(item.metadata.height)}` + (item.metadata.managedMedia ? " \xB7 " + item.source.adapter + " \xB7 \u52A0\u5BC6\u7F13\u5B58" : " \xB7 \u672C\u5730\u6587\u4EF6")
          }))];
        },
        onSelect: (item) => {
          settings.close();
          if (!item.value) prompt();
          else if (item.value === "url") promptUrl();
          else if (item.value === "search") searchPlatform();
          else if (item.value === "popular") popular();
          else if (item.value === "collect") settings.collect?.();
          else if (item.value === "quality") quality();
          else if (item.value === "download-quality") void downloadQualityMenu();
          else if (item.value === "settings") void sourceSettings();
          else void load2("", resources.find((saved) => saved.id === item.value));
        }
      }));
    } catch (cause) {
      api.ui.toast({
        message: String(cause),
        variant: "error"
      });
    }
  }
  async function restore() {
    if (video() || busy()) return;
    const request = ++restoring;
    const id = api.kv.get(prefix + "last", "");
    if (!id) return;
    const resource = await library.resource(id);
    if (request === restoring && resource?.kind === "video" && !video() && !busy() && settings.active() && !api.lifecycle.signal.aborted) await load2("", resource);
  }
  function remove2() {
    const current = video();
    if (!current) return shelf();
    settings.dialog(() => _$createComponent(api.ui.DialogConfirm, {
      title: "\u4ECE\u89C6\u9891\u5E93\u79FB\u9664",
      get message() {
        return `\u79FB\u9664\u300A${current.title}\u300B\u7684\u8BB0\u5F55\u3001\u64AD\u653E\u8FDB\u5EA6\u53CA\u5DF2\u4E0B\u8F7D\u7684\u52A0\u5BC6\u7F13\u5B58\uFF1F\u672C\u5730\u5BFC\u5165\u7684\u539F\u6587\u4EF6\u4FDD\u7559\u3002`;
      },
      get onCancel() {
        return settings.close;
      },
      onConfirm: () => {
        settings.close();
        pause();
        ++token;
        void current.release?.().catch(() => {
        });
        void library.deleteResource(current.id).then(() => {
          if (api.lifecycle.signal.aborted) return;
          api.kv.set(prefix + current.id, 0);
          if (video()?.id === current.id) {
            setVideo(void 0);
            setFrame([]);
            inline.clear();
            player.video = void 0;
            api.kv.set(prefix + "last", "");
          }
        }).catch((cause) => api.ui.toast({
          message: String(cause),
          variant: "error"
        }));
      }
    }));
  }
  function seek(delta) {
    if (video()) {
      void player.seek(player.position + delta);
      save();
    }
  }
  function jump() {
    if (!video()) return prompt();
    settings.dialog(() => _$createComponent(api.ui.DialogPrompt, {
      title: "\u8DF3\u8F6C\u89C6\u9891 \xB7 \u8F93\u5165\u79D2\u6570\u6216 \u5206:\u79D2",
      placeholder: "\u4F8B\u5982 90 \u6216 1:30",
      get onCancel() {
        return settings.close;
      },
      onConfirm: (input) => {
        const parts = input.trim().split(":");
        if (!parts.length || parts.length > 3 || parts.some((part) => !/^\d+(?:\.\d+)?$/.test(part))) return api.ui.toast({
          message: "\u8BF7\u8F93\u5165\u6709\u6548\u65F6\u95F4",
          variant: "error"
        });
        const seconds = parts.reduce((sum, part) => sum * 60 + Number(part), 0);
        settings.close();
        void player.seek(seconds);
        save();
      }
    }));
  }
  function play() {
    setError("");
    if (!video()) prompt();
    else if (player.playing) pause();
    else void player.play();
  }
  async function mute() {
    setError("");
    try {
      await player.setMuted(!state().muted);
    } catch (cause) {
      const message = String(cause);
      setError(message);
      api.ui.toast({
        message,
        variant: "error"
      });
    }
  }
  createEffect(() => {
    const columns = settings.columns(), rows = settings.rows(), active = settings.active();
    const nextKey = useImage() ? protocol() : "pixel", filter4 = useImage() ? "lanczos" : "neighbor";
    clearTimeout(resizeTimer);
    if (!active) {
      sourceAbort?.abort();
      loadAbort?.abort();
      ++token;
      ++restoring;
      setBusy(false);
      untrack(() => {
        pause();
        releaseManaged();
      });
      return;
    }
    if (nextKey !== renderKey) {
      renderKey = "";
      player.stop();
      inline.clear();
      setFrame([]);
    }
    resizeTimer = setTimeout(() => {
      if (api.lifecycle.signal.aborted || !settings.active()) return;
      const changed = nextKey !== renderKey;
      renderKey = nextKey;
      void player.resize(columns, rows, filter4, changed);
      void restore().catch(showError);
    }, 80);
  });
  async function dispose() {
    ++token;
    ++restoring;
    loadAbort?.abort();
    sourceAbort?.abort();
    downloadAbort?.abort();
    resourceWatcher.close();
    clearTimeout(removalTimer);
    clearInterval(saveTimer);
    clearTimeout(resizeTimer);
    save();
    player.dispose();
    inline.dispose();
    api.renderer.off("capabilities", capabilitiesChanged);
    api.renderer.off("resize", capabilitiesChanged);
    await Promise.allSettled([...loads, downloadTask, video()?.release?.()]);
  }
  void sources.cleanup().catch(showError);
  function ImageSurface() {
    onCleanup(() => inline.unmount());
    return (() => {
      var _el$ = _$createElement("box");
      _$use((node) => inline.mount(node), _el$);
      _$setProp(_el$, "width", "100%");
      _$setProp(_el$, "height", "100%");
      return _el$;
    })();
  }
  function View(props) {
    const Button = props.Button;
    return [(() => {
      var _el$2 = _$createElement("box");
      _$setProp(_el$2, "flexShrink", 0);
      _$insert(_el$2, _$createComponent(Button, {
        get label() {
          return _$memo(() => !!busy())() ? "\u6B63\u5728\u6253\u5F00\u89C6\u9891\u2026" : video()?.title ?? "\u8BF7\u9009\u62E9\u672C\u5730\u89C6\u9891";
        },
        action: shelf
      }), null);
      _$insert(_el$2, _$createComponent(Show, {
        get when() {
          return downloadProgress() || sourceProgress();
        },
        get fallback() {
          return (() => {
            var _el$8 = _$createElement("text");
            _$setProp(_el$8, "height", 1);
            _$setProp(_el$8, "wrapMode", "none");
            _$insert(_el$8, (() => {
              var _c$ = _$memo(() => !!error());
              return () => _c$() ? "\u64AD\u653E\u5F02\u5E38\uFF0C\u53EF\u91CD\u65B0\u6253\u5F00\u89C6\u9891" : _$memo(() => !!!video())() ? `${qualityLabel()} \xB7 \u9ED8\u8BA4\u9759\u97F3` : _$memo(() => !!state().loading)() ? "\u6B63\u5728\u89E3\u7801\u2026" : `${state().playing ? "\u64AD\u653E\u4E2D" : "\u5DF2\u6682\u505C"} \xB7 ${Math.round(video().width)}\xD7${Math.round(video().height)} \xB7 ${qualityLabel()}`;
            })());
            return _el$8;
          })();
        },
        get children() {
          return _$createComponent(Button, {
            get label() {
              return `[\u53D6\u6D88] ${downloadProgress() || sourceProgress()}`;
            },
            action: () => {
              downloadAbort?.abort();
              sourceAbort?.abort();
            }
          });
        }
      }), null);
      _$effect((_$p) => _$setProp(_el$2, "height", 2 + props.gap, _$p));
      return _el$2;
    })(), (() => {
      var _el$3 = _$createElement("box");
      _$setProp(_el$3, "flexShrink", 0);
      _$setProp(_el$3, "alignItems", "center");
      _$setProp(_el$3, "justifyContent", "center");
      _$insert(_el$3, _$createComponent(Show, {
        get when() {
          return video();
        },
        get fallback() {
          return (() => {
            var _el$9 = _$createElement("text");
            _$insertNode(_el$9, _$createTextNode(`\u70B9\u51FB\u300C\u641C\u7D22\u300D\u6216\u300C\u70ED\u95E8\u300D\u9009\u89C6\u9891`));
            return _el$9;
          })();
        },
        get children() {
          return _$createComponent(Show, {
            get when() {
              return useImage();
            },
            get fallback() {
              return (() => {
                var _el$1 = _$createElement("text");
                _$setProp(_el$1, "selectable", false);
                _$setProp(_el$1, "wrapMode", "none");
                _$insert(_el$1, _$createComponent(Index, {
                  get each() {
                    return frame();
                  },
                  children: (run) => (() => {
                    var _el$10 = _$createElement("span");
                    _$insert(_el$10, () => run().text);
                    _$effect((_$p) => _$setProp(_el$10, "style", {
                      fg: run().fg,
                      bg: run().bg
                    }, _$p));
                    return _el$10;
                  })()
                }));
                _$effect((_p$) => {
                  var _v$3 = frameSize().width, _v$4 = frameSize().height;
                  _v$3 !== _p$.e && (_p$.e = _$setProp(_el$1, "width", _v$3, _p$.e));
                  _v$4 !== _p$.t && (_p$.t = _$setProp(_el$1, "height", _v$4, _p$.t));
                  return _p$;
                }, {
                  e: void 0,
                  t: void 0
                });
                return _el$1;
              })();
            },
            get children() {
              return _$createComponent(ImageSurface, {});
            }
          });
        }
      }));
      _$effect((_$p) => _$setProp(_el$3, "height", settings.rows(), _$p));
      return _el$3;
    })(), (() => {
      var _el$4 = _$createElement("box"), _el$5 = _$createElement("box"), _el$6 = _$createElement("box"), _el$7 = _$createElement("box");
      _$insertNode(_el$4, _el$5);
      _$insertNode(_el$4, _el$6);
      _$insertNode(_el$4, _el$7);
      _$setProp(_el$4, "flexShrink", 0);
      _$insert(_el$4, _$createComponent(Button, {
        get label() {
          return `${mediaTime(state().position)} / ${mediaTime(video()?.duration)}`;
        },
        action: jump,
        muted: true
      }), _el$5);
      _$setProp(_el$5, "height", 1);
      _$setProp(_el$5, "flexDirection", "row");
      _$setProp(_el$5, "gap", 1);
      _$insert(_el$5, _$createComponent(Button, {
        get label() {
          return state().playing ? "[\u6682\u505C]" : "[\u64AD\u653E]";
        },
        action: play
      }), null);
      _$insert(_el$5, _$createComponent(Button, {
        get label() {
          return state().muted ? "[\u5F00\u542F\u58F0\u97F3]" : "[\u9759\u97F3]";
        },
        action: mute
      }), null);
      _$setProp(_el$6, "height", 1);
      _$setProp(_el$6, "flexDirection", "row");
      _$setProp(_el$6, "justifyContent", "space-between");
      _$insert(_el$6, _$createComponent(Button, {
        label: "[\u540E\u900010\u79D2]",
        action: () => seek(-10)
      }), null);
      _$insert(_el$6, _$createComponent(Button, {
        label: "[\u524D\u8FDB10\u79D2]",
        action: () => seek(10)
      }), null);
      _$setProp(_el$7, "height", 1);
      _$setProp(_el$7, "flexDirection", "row");
      _$setProp(_el$7, "gap", 1);
      _$insert(_el$7, _$createComponent(Button, {
        get label() {
          return `[\u663E\u793A\uFF1A${qualityLabel()}]`;
        },
        action: quality
      }), null);
      _$insert(_el$7, _$createComponent(Button, {
        get label() {
          return `[\u4E0B\u8F7D${downloadQuality()}p]`;
        },
        action: () => void downloadQualityMenu()
      }), null);
      _$effect((_p$) => {
        var _v$ = 4 + props.gap, _v$2 = props.gap;
        _v$ !== _p$.e && (_p$.e = _$setProp(_el$4, "height", _v$, _p$.e));
        _v$2 !== _p$.t && (_p$.t = _$setProp(_el$4, "paddingTop", _v$2, _p$.t));
        return _p$;
      }, {
        e: void 0,
        t: void 0
      });
      return _el$4;
    })()];
  }
  return {
    View,
    shelf,
    remove: remove2,
    pause,
    pauseAndWait: () => player.pauseAndWait(),
    restore,
    dispose,
    jump,
    seek,
    search: searchPlatform,
    popular
  };
}

// src/ui/music.tsx
import { insertNode as _$insertNode2 } from "@opentui/solid";
import { effect as _$effect2 } from "@opentui/solid";
import { insert as _$insert2 } from "@opentui/solid";
import { memo as _$memo2 } from "@opentui/solid";
import { setProp as _$setProp2 } from "@opentui/solid";
import { createElement as _$createElement2 } from "@opentui/solid";
import { createComponent as _$createComponent2 } from "@opentui/solid";
import { createSignal as createSignal2, For, Show as Show2 } from "solid-js";

// src/music/service.mjs
import { writeFile as writeFile4 } from "node:fs/promises";
import { join as join9 } from "node:path";

// src/music/providers.mjs
import { createCipheriv as createCipheriv3, createHash as createHash4, randomBytes as randomBytes5 } from "node:crypto";

// src/music/qq-login.mjs
import { randomBytes as randomBytes3 } from "node:crypto";
var loginOrigin = "https://ssl.ptlogin2.qq.com";
var musicOrigin = "https://y.qq.com/";
var redirectUri = musicOrigin + "portal/wx_redirect.html?login_type=1&surl=https://y.qq.com/";
var paramsUrl = (base, params) => {
  const url = new URL(base);
  url.search = new URLSearchParams(params).toString();
  return url.href;
};
function qqHash(value, seed = 0) {
  let hash = seed;
  for (const char of value) hash = hash * 33 + char.charCodeAt(0) | 0;
  return hash & 2147483647;
}
function parseQQCallback(text4) {
  const match = /^\s*ptuiCB\s*\(([^]*)\)\s*;?\s*$/.exec(text4);
  if (!match || text4.length > 16384) throw new Error("QQ\u626B\u7801\u54CD\u5E94\u683C\u5F0F\u5F02\u5E38\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801");
  const args = [], pattern2 = /\s*'((?:\\.|[^'\\])*)'\s*(,|$)/gy;
  let offset = 0;
  while (offset < match[1].length) {
    pattern2.lastIndex = offset;
    const item = pattern2.exec(match[1]);
    if (!item || args.length >= 8) throw new Error("QQ\u626B\u7801\u54CD\u5E94\u683C\u5F0F\u5F02\u5E38\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801");
    args.push(item[1].replace(/\\(?:x([\da-f]{2})|u([\da-f]{4})|(['"\\/])|([nrt]))/gi, (_all, hex, unicode, literal, control) => hex || unicode ? String.fromCharCode(parseInt(hex || unicode, 16)) : literal || { n: "\n", r: "\r", t: "	" }[control]));
    offset = pattern2.lastIndex;
    if (!item[2]) break;
    if (offset === match[1].length) throw new Error("QQ\u626B\u7801\u54CD\u5E94\u683C\u5F0F\u5F02\u5E38\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801");
  }
  if (args.length < 3 || !/^\d{1,6}$/.test(args[0])) throw new Error("QQ\u626B\u7801\u54CD\u5E94\u683C\u5F0F\u5F02\u5E38\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801");
  return { code: Number(args[0]), callback: args[2], nickname: args[5] || "" };
}
function qqResponseCookies(headers = [], target) {
  const jar = /* @__PURE__ */ new Map(), values = /* @__PURE__ */ Object.create(null), destination = target ? new URL(target) : void 0;
  for (const header of headers) for (const cookie of header.split(/,(?=\s*[\w-]+=)/)) {
    const match = /^\s*([\w-]+)=([^;]*)/.exec(cookie);
    if (!match || /[\x00-\x20\x7f-\uffff]/.test(match[2])) continue;
    const domain = /;\s*domain=([^;]+)/i.exec(cookie)?.[1].trim().replace(/^\./, "").toLowerCase() || "";
    const path = /;\s*path=([^;]+)/i.exec(cookie)?.[1].trim() || "/";
    const expires = /;\s*expires=([^;]+)/i.exec(cookie)?.[1];
    const maxAge = /;\s*max-age=([^;]+)/i.exec(cookie)?.[1];
    const key = `${match[1]}
${domain}
${path}`;
    if (!match[2] || maxAge !== void 0 && Number(maxAge) <= 0 || expires && Date.parse(expires) <= Date.now()) {
      jar.delete(key);
      continue;
    }
    jar.set(key, { name: match[1], value: match[2], domain, path });
  }
  const candidates = [...jar.values()].filter((item) => !destination || (!item.domain || destination.hostname === item.domain || destination.hostname.endsWith("." + item.domain)) && (destination.pathname === item.path || destination.pathname.startsWith(item.path.endsWith("/") ? item.path : item.path + "/")));
  candidates.sort((a, b) => a.domain.length - b.domain.length || a.path.length - b.path.length);
  for (const item of candidates) values[item.name] = item.value;
  return values;
}
var bodyText = (response) => response.text ?? response.bytes?.toString("utf8") ?? "";
var safeText = (value) => String(value || "").replace(/[\x00-\x1f\x7f-\x9f]/g, "").slice(0, 80);
function createQQLogin(request) {
  async function read(url, options = {}) {
    const response = await request(url, { ...options, asBytes: true, redirect: "manual", headers: { "User-Agent": "Mozilla/5.0", Referer: "https://xui.ptlogin2.qq.com/", ...options.headers } });
    options.signal?.throwIfAborted();
    return response;
  }
  async function begin({ signal } = {}) {
    const response = await read(paramsUrl(loginOrigin + "/ptqrshow", { appid: "716027609", e: "2", l: "M", s: "3", d: "72", v: "4", t: String(Math.random()), daid: "383", pt_3rd_aid: "100497308" }), { signal });
    const cookies = qqResponseCookies(response.cookies), bytes = response.bytes;
    if (!cookies.qrsig || !bytes || bytes.length > 1024 * 1024 || bytes.length < 8 || !bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) throw new Error("QQ\u672A\u8FD4\u56DE\u6709\u6548\u4E8C\u7EF4\u7801\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    return { platform: "qq", qrsig: cookies.qrsig, state: randomBytes3(18).toString("hex"), image: "data:image/png;base64," + bytes.toString("base64") };
  }
  async function authorize(session, callback, signal, onProgress) {
    let url;
    try {
      url = new URL(callback);
    } catch {
      throw new Error("QQ\u6388\u6743\u5730\u5740\u5F02\u5E38\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801");
    }
    if (url.protocol !== "https:" || url.port || url.username || url.password || !["ssl.ptlogin2.graph.qq.com", "ssl.ptlogin2.qq.com", "ptlogin2.qq.com", "ptlogin2.music.qq.com"].includes(url.hostname) || url.pathname !== "/check_sig") throw new Error("QQ\u6388\u6743\u5730\u5740\u5F02\u5E38\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801");
    const uin = url.searchParams.get("uin"), sig = url.searchParams.get("ptsigx");
    if (!/^\d{5,20}$/.test(uin || "") || !sig || sig.length > 512 || /[^\x21-\x7e]/.test(sig)) throw new Error("QQ\u6388\u6743\u53C2\u6570\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801");
    const checked2 = await read(paramsUrl("https://ssl.ptlogin2.graph.qq.com/check_sig", { uin, ptsigx: sig, pttype: "1", service: "ptqrlogin", nodirect: "0", s_url: "https://graph.qq.com/oauth2.0/login_jump", ptlang: "2052", ptredirect: "100", aid: "716027609", daid: "383", j_later: "0", low_login_hour: "0", regmaster: "0", pt_login_type: "3", pt_aid: "0", pt_aaid: "16", pt_light: "0", pt_3rd_aid: "100497308" }), { signal });
    const sso = qqResponseCookies(checked2.cookies, "https://graph.qq.com/oauth2.0/authorize");
    if (!sso.p_skey) throw new Error("QQ\u6388\u6743\u5C1A\u672A\u5B8C\u6210\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801\u5E76\u5728\u624B\u673A\u786E\u8BA4");
    const gtk = qqHash(sso.p_skey, 5381);
    const cookie = Object.entries(sso).map(([key, value]) => `${key}=${value}`).join("; ");
    const authorization = await read("https://graph.qq.com/oauth2.0/authorize", { signal, method: "POST", body: new URLSearchParams({ response_type: "code", client_id: "100497308", redirect_uri: redirectUri, scope: "get_user_info", state: session.state, switch: "", from_ptlogin: "1", src: "1", update_auth: "1", openapi: "1010_1030", g_tk: String(gtk), auth_time: String(Date.now()), ui: session.state }).toString(), headers: { Cookie: cookie, "Content-Type": "application/x-www-form-urlencoded", Referer: "https://graph.qq.com/" } });
    let location;
    try {
      location = new URL(authorization.redirect);
    } catch {
      throw new Error("QQ\u6388\u6743\u672A\u8FD4\u56DE\u767B\u5F55\u7ED3\u679C\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801");
    }
    if (location.origin === "https://graph.qq.com" && location.pathname === "/oauth2.0/show") throw new Error("QQ\u6388\u6743\u672A\u5B8C\u6210\uFF0C\u5E73\u53F0\u8FD4\u56DE\u4E86\u767B\u5F55\u9875\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801");
    const code = location.searchParams.get("code");
    if (location.origin !== "https://y.qq.com" || location.pathname !== "/portal/wx_redirect.html" || location.searchParams.get("state") !== session.state || !/^[\w-]{8,512}$/.test(code || "")) throw new Error("QQ\u6388\u6743\u7ED3\u679C\u4E0D\u5339\u914D\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801");
    onProgress("exchanging");
    const result = await read("https://u.y.qq.com/cgi-bin/musicu.fcg", { signal, method: "POST", body: JSON.stringify({ comm: { ct: 24, cv: 4747474, platform: "yqq.json", format: "json", g_tk: gtk, tmeLoginType: 2 }, req: { module: "QQConnectLogin.LoginServer", method: "QQLogin", param: { code } } }), headers: { "Content-Type": "application/json", Referer: musicOrigin } });
    let data2;
    try {
      data2 = JSON.parse(bodyText(result));
    } catch {
      throw new Error("QQ\u97F3\u4E50\u6388\u6743\u7ED3\u679C\u5F02\u5E38\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801");
    }
    const info = data2.req?.data, cookies = qqResponseCookies(result.cookies);
    if (data2.code || data2.req?.code) throw new Error(`QQ\u97F3\u4E50\u62D2\u7EDD\u4E86\u672C\u6B21\u6388\u6743${Number.isInteger(data2.req?.code) ? `\uFF08${data2.req.code}\uFF09` : ""}\uFF0C\u8BF7\u5728\u5B98\u65B9\u5BA2\u6237\u7AEF\u68C0\u67E5\u8D26\u53F7\u72B6\u6001`);
    const musicid = String(info?.str_musicid || info?.musicid || cookies.uin?.replace(/^o/, "") || ""), musickey = info?.musickey || cookies.qqmusic_key || cookies.qm_keyst;
    if (!/^\d{5,24}$/.test(musicid) || typeof musickey !== "string" || !/^[\x21-\x3a\x3c-\x7e]{1,8192}$/.test(musickey)) throw new Error("QQ\u97F3\u4E50\u672A\u8FD4\u56DE\u5B8C\u6574\u767B\u5F55\u6001\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801");
    return { cookie: `uin=${musicid}; qqmusic_key=${musickey}`, nickname: safeText(info?.nick || info?.nickname) };
  }
  async function check(session, { signal, onProgress = (_status) => {
  } } = {}) {
    const response = await read(paramsUrl(loginOrigin + "/ptqrlogin", { u1: "https://graph.qq.com/oauth2.0/login_jump", ptqrtoken: String(qqHash(session.qrsig)), ptredirect: "0", h: "1", t: "1", g: "1", from_ui: "1", ptlang: "2052", action: `0-0-${Date.now()}`, js_ver: "20102616", js_type: "1", pt_uistyle: "40", aid: "716027609", daid: "383", pt_3rd_aid: "100497308", has_onekey: "1" }), { signal, headers: { Cookie: `qrsig=${session.qrsig}` } });
    const result = parseQQCallback(bodyText(response));
    if (result.code === 66) return { status: "waiting" };
    if (result.code === 67) return { status: "scanned" };
    if (result.code === 65) return { status: "expired" };
    if (result.code !== 0) return { status: "failed" };
    onProgress("authorizing");
    const account = await authorize(session, result.callback, signal, onProgress);
    return { status: "authorized", ...account, nickname: account.nickname || safeText(result.nickname) };
  }
  return { begin, check };
}

// src/music/playlists.mjs
import { createHash as createHash3, randomBytes as randomBytes4 } from "node:crypto";
var locations = {
  netease: (id) => `https://music.163.com/#/playlist?id=${id}`,
  qq: (id) => id === "liked" ? void 0 : `https://y.qq.com/n/ryqq/playlist/${id}`,
  kugou: (id) => /^\d+$/.test(id) ? `https://www.kugou.com/yy/special/single/${id}.html` : void 0
};
var text = (value) => String(value ?? "").replace(/<[^>]*>/g, "").replace(/&#(x[\da-f]+|\d+);/gi, (_s, code) => {
  const n = code[0].toLowerCase() === "x" ? parseInt(code.slice(1), 16) : Number(code);
  return n > 0 && n <= 1114111 ? String.fromCodePoint(n) : "";
}).replace(/&amp;/g, "&").replace(/[\x00-\x1f\x7f-\x9f]/g, " ").trim().slice(0, 180);
var count = (value) => value !== void 0 && value !== null && Number.isFinite(Number(value)) && Number(value) >= 0 ? Math.min(1e7, Math.trunc(Number(value))) : void 0;
var playlistKey = (playlist) => playlist.platform + ":" + playlist.id;
function musicPlaylist(input) {
  const platform = input?.platform, id = String(input?.id ?? "");
  const liked = platform === "qq" && id === "liked";
  if (!Object.hasOwn(locations, platform) || !liked && !(platform === "kugou" ? /^[\w-]{1,120}$/ : /^[1-9]\d{0,23}$/).test(id)) throw new Error("\u65E0\u6548\u6B4C\u5355\u5E73\u53F0\u6216 ID");
  if (platform === "qq" && !liked && !Number.isSafeInteger(Number(id))) throw new Error("\u65E0\u6548\u6B4C\u5355 ID");
  const legacyId = platform === "kugou" && /^[1-9]\d{0,23}$/.test(String(input.legacyId ?? "")) ? String(input.legacyId) : void 0;
  return { platform, id, title: liked ? "\u6211\u559C\u6B22" : text(input.title) || "\u6B4C\u5355 " + id, creator: text(input.creator), count: count(input.count), legacyId, sourceUrl: locations[platform](legacyId || id) };
}
function playlistTarget(input, fallback = "qq") {
  const value = String(input).trim();
  if (!/^https?:\/\//i.test(value)) {
    const prefixed = /^(netease|qq|kugou)\s*[:：]\s*(.+)$/i.exec(value);
    return musicPlaylist({ platform: prefixed?.[1].toLowerCase() || fallback, id: prefixed?.[2] || value });
  }
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error("\u6B4C\u5355\u94FE\u63A5\u683C\u5F0F\u4E0D\u6B63\u786E");
  }
  if (url.username || url.password || url.port) throw new Error("\u4E0D\u652F\u6301\u6B64\u6B4C\u5355\u94FE\u63A5");
  if (url.hostname === "music.163.com") {
    const query = url.hash.startsWith("#/") ? new URL("https://music.163.com/" + url.hash.slice(2)) : url;
    if (/\/(?:m\/)?playlist(?:\/|$)/.test(query.pathname)) return musicPlaylist({ platform: "netease", id: query.searchParams.get("id") || query.pathname.match(/playlist\/(\d+)/)?.[1] });
  }
  if (["y.qq.com", "i.y.qq.com"].includes(url.hostname)) return musicPlaylist({ platform: "qq", id: url.pathname.match(/\/playlist\/(\d+)/)?.[1] || (/taoge/.test(url.pathname) ? url.searchParams.get("id") || url.searchParams.get("disstid") : void 0) });
  if (["www.kugou.com", "m.kugou.com"].includes(url.hostname)) return musicPlaylist({ platform: "kugou", id: url.pathname.match(/\/(?:songlist|plist\/list)\/([\w-]+)/)?.[1] || url.pathname.match(/\/special\/single\/(\d+)\.html/)?.[1] });
  throw new Error("\u8BF7\u4F7F\u7528 QQ\u97F3\u4E50\u3001\u7F51\u6613\u4E91\u6216\u9177\u72D7\u7684\u5B8C\u6574\u6B4C\u5355\u94FE\u63A5\uFF0C\u4E5F\u53EF\u8F93\u5165 \u5E73\u53F0:\u6B4C\u5355ID");
}
function pageOptions(page = 1, limit = 20) {
  if (!Number.isInteger(page) || page < 1 || page > 500 || !Number.isInteger(limit) || limit < 1 || limit > 100) throw new Error("\u6B4C\u5355\u5206\u9875\u8303\u56F4\u4E0D\u6B63\u786E");
  return { page, limit, offset: (page - 1) * limit };
}
function listPage(list, map2, options, total, more) {
  if (!Array.isArray(list)) throw new Error("\u5E73\u53F0\u672A\u8FD4\u56DE\u6B4C\u5355\u5217\u8868\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
  const playlists = list.slice(0, options.limit).flatMap((item) => {
    try {
      return [musicPlaylist(map2(item))];
    } catch {
      return [];
    }
  });
  return { playlists, page: options.page, limit: options.limit, total: count(total), hasMore: more !== void 0 ? Boolean(more) : count(total) !== void 0 ? options.offset + list.length < Number(total) : list.length >= options.limit };
}
function checked(data2, key) {
  const result = key ? data2[key] : data2;
  const denied = (code) => code !== void 0 && ![0, 200].includes(Number(code));
  if (denied(data2.code) || key && !result || denied(result?.code)) throw new Error("\u5E73\u53F0\u62D2\u7EDD\u4E86\u97F3\u4E50\u67E5\u8BE2\uFF0C\u8BF7\u68C0\u67E5\u767B\u5F55\u72B6\u6001\u6216\u8D44\u6E90\u53EF\u89C1\u6027");
  return key ? result.data : result;
}
function createPlaylistProviders({ json, netease, parseSongs, normalizeTrack, cookies, page: readPage }) {
  const kgMid = randomBytes4(16).toString("hex");
  async function qq(module, method, param, cookie, signal, comm = {}) {
    const values = cookies(cookie), uin = (values.uin || values.wxuin || "0").replace(/^o/, ""), key = values.qqmusic_key || values.qm_keyst || "";
    let gtk = 5381;
    for (const c of key) gtk = gtk * 33 + c.charCodeAt(0) & 2147483647;
    const { data: data2 } = await json("https://u.y.qq.com/cgi-bin/musicu.fcg", { signal, method: "POST", body: JSON.stringify({ comm: { ct: 24, cv: 4747474, uin, authst: key, g_tk: gtk, tmeLoginType: 2, format: "json", ...comm }, req: { module, method, param } }), headers: { Cookie: cookie, Referer: "https://y.qq.com/", "Content-Type": "application/json" } });
    return checked(data2, "req");
  }
  async function kg(path, params, body, router, cookie, signal) {
    const values = cookies(cookie), query = { dfid: values.dfid || "-", mid: values.mid || values.kg_mid || kgMid, uuid: "-", appid: 1005, clientver: 20489, clienttime: Math.floor(Date.now() / 1e3), ...values.token ? { token: values.token, userid: values.userid || 0 } : {}, ...params };
    const payload = body ? JSON.stringify(body) : "", salt = "OIlwieks28dk2k092lksi2UIkp";
    query.signature = createHash3("md5").update(salt + Object.keys(query).sort().map((key) => `${key}=${query[key]}`).join("") + payload + salt).digest("hex");
    const url = new URL("https://gateway.kugou.com" + path);
    url.search = new URLSearchParams(Object.entries(query).map(([key, value]) => [key, String(value)])).toString();
    const { data: data2 } = await json(url.href, { signal, method: body ? "POST" : "GET", body: payload || void 0, headers: { "Content-Type": "application/json", ...router ? { "x-router": router } : {} } });
    if (data2.status !== 1 || data2.error_code) throw new Error("\u9177\u72D7\u62D2\u7EDD\u4E86\u6B4C\u5355\u67E5\u8BE2\uFF0C\u8BF7\u68C0\u67E5\u767B\u5F55\u72B6\u6001\u6216\u6B4C\u5355\u53EF\u89C1\u6027");
    return data2.data;
  }
  async function qqMine(cookie, signal, offset, limit) {
    const values = cookies(cookie), uin = (values.uin || values.wxuin || "").replace(/^o/, "");
    if (!uin || !(values.qqmusic_key || values.qm_keyst)) throw new Error("\u8BF7\u5148\u767B\u5F55 QQ\u97F3\u4E50");
    const url = new URL("https://c.y.qq.com/rsc/fcgi-bin/fcg_user_created_diss");
    url.search = new URLSearchParams({ ct: "24", cv: "4747474", format: "json", platform: "yqq.json", uin, hostuin: uin, sin: String(offset), size: String(limit) }).toString();
    const { data: data2 } = await json(url.href, { signal, headers: { Cookie: cookie, Referer: "https://y.qq.com/" } });
    return checked(data2).data;
  }
  async function playlists(platform, { mode = "search", query = "", collection = "created", page = 1, limit = 5, cookie = "", signal } = {}) {
    const options = pageOptions(page, limit), values = cookies(cookie);
    if (!["search", "mine"].includes(mode) || !["created", "favorite"].includes(collection)) throw new Error("\u65E0\u6548\u6B4C\u5355\u67E5\u8BE2\u65B9\u5F0F");
    if (mode === "search" && (!query.trim() || query.length > 120)) throw new Error("\u8BF7\u8F93\u5165 1\u2013120 \u5B57\u7684\u6B4C\u5355\u540D\u79F0");
    if (platform === "qq") {
      if (mode === "search") {
        const data3 = await qq("music.search.SearchCgiService", "DoSearchForQQMusicDesktop", { grp: 1, num_per_page: limit, page_num: page, query, search_type: 3 }, cookie, signal, { ct: 19, cv: 1859 });
        return listPage(data3.body?.songlist?.list, (item) => ({ platform, id: item.dissid, title: item.dissname, creator: item.creator?.name, count: item.song_count }), options, data3.meta?.sum);
      }
      const rawLimit = page === 1 ? limit - 1 : limit, rawOffset = Math.max(0, options.offset - 1);
      const mine = await qqMine(cookie, signal, collection === "favorite" ? 0 : rawOffset, collection === "favorite" ? 1 : Math.max(1, rawLimit));
      if (collection === "favorite") {
        if (!mine?.encrypt_uin) throw new Error("QQ\u97F3\u4E50\u767B\u5F55\u6001\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55");
        const data3 = await qq("music.musicasset.PlaylistFavRead", "CgiGetPlaylistFavInfo", { uin: mine.encrypt_uin, offset: options.offset, size: limit }, cookie, signal);
        return listPage(data3.v_list, (item) => ({ platform, id: item.tid ?? item.id, title: item.title, creator: item.nickname, count: item.songnum }), options, data3.total, data3.hasmore);
      }
      const result = listPage(mine?.disslist?.slice(0, rawLimit), (item) => ({ platform, id: item.tid, title: item.diss_name, count: item.song_cnt }), { ...options, offset: rawOffset, limit: rawLimit }, mine?.totoal ?? mine?.total);
      if (page === 1) result.playlists.unshift(musicPlaylist({ platform, id: "liked" }));
      return { ...result, limit };
    }
    if (platform === "netease") {
      if (mode === "search") {
        const url = new URL("https://music.163.com/api/search/get/web");
        url.search = new URLSearchParams({ s: query, type: "1000", offset: String(options.offset), limit: String(limit) }).toString();
        const { data: data4 } = await json(url.href, { signal, headers: { Cookie: cookie, Referer: "https://music.163.com/" } });
        checked(data4);
        return listPage(data4.result?.playlists ?? [], (item) => ({ platform, id: item.id, title: item.name, creator: item.creator?.nickname, count: item.trackCount }), options, data4.result?.playlistCount ?? 0);
      }
      if (!values.MUSIC_U) throw new Error("\u8BF7\u5148\u767B\u5F55\u7F51\u6613\u4E91");
      const account = checked((await netease("nuser/account/get", {}, cookie, signal)).data);
      if (!account.account?.id) throw new Error("\u7F51\u6613\u4E91\u767B\u5F55\u6001\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55");
      const data3 = checked((await netease("user/playlist", { uid: account.account.id, offset: options.offset, limit }, cookie, signal)).data);
      const list = data3.playlist?.filter((item) => collection === "favorite" ? item.subscribed : !item.subscribed);
      return listPage(list, (item) => ({ platform, id: item.id, title: item.name, creator: item.creator?.nickname, count: item.trackCount }), options, void 0, data3.more);
    }
    if (platform !== "kugou") throw new Error("\u4E0D\u652F\u6301\u7684\u6B4C\u5355\u5E73\u53F0");
    if (mode === "search") {
      const data3 = await kg("/v1/search/special", { albumhide: 0, iscorrection: 1, keyword: query, nocollect: 0, page, pagesize: limit, platform: "AndroidFilter" }, void 0, "complexsearch.kugou.com", cookie, signal);
      return listPage(data3.lists, (item) => ({ platform, id: item.gid || item.specialid, legacyId: item.specialid, title: item.specialname, creator: item.nickname, count: item.song_count }), options, data3.total);
    }
    if (!values.userid || !values.token) throw new Error("\u8BF7\u5148\u767B\u5F55\u9177\u72D7");
    if (collection === "favorite") throw new Error("\u9177\u72D7\u76EE\u524D\u8FD4\u56DE\u521B\u5EFA\u548C\u6536\u85CF\u7684\u5408\u5E76\u5217\u8868\uFF0C\u8BF7\u9009\u62E9\u201C\u6211\u7684\u6B4C\u5355\u201D");
    const data2 = await kg("/v7/get_all_list", { plat: 1, userid: Number(values.userid) }, { userid: values.userid, token: values.token, total_ver: 979, type: 2, page, pagesize: limit }, "cloudlist.service.kugou.com", cookie, signal);
    return listPage(data2.info ?? data2.list ?? data2.lists, (item) => ({ platform, id: item.global_collection_id || item.gid, title: item.name || item.list_name, count: item.count ?? item.songcount }), options, data2.total);
  }
  async function playlist(platform, id, { page = 1, limit = 20, cookie = "", signal } = {}) {
    const initial = musicPlaylist({ platform, id }), options = pageOptions(page, limit);
    if (platform === "kugou" && /^\d+$/.test(id)) {
      const response = await readPage(initial.sourceUrl, { signal, asBytes: true });
      const html3 = (response.text ?? response.bytes.toString("utf8")).replace(/\\"/g, '"');
      const globalId = /["']global_collection_id["']\s*:\s*["'](collection_[\w-]+)["']/.exec(html3)?.[1];
      if (!globalId) throw new Error("\u672A\u89E3\u6790\u5230\u9177\u72D7\u6B4C\u5355\uFF0C\u8BF7\u5728\u6B4C\u5355\u641C\u7D22\u4E2D\u6309\u540D\u79F0\u9009\u62E9");
      const result = await playlist(platform, globalId, { page, limit, cookie, signal });
      return { ...result, info: musicPlaylist({ ...result.info, legacyId: id }) };
    }
    let info, tracks, total, hasMore, rawCount;
    if (platform === "qq") {
      const liked = id === "liked", mine = liked ? await qqMine(cookie, signal, 0, 1) : void 0;
      if (liked && !mine?.encrypt_uin) throw new Error("QQ\u97F3\u4E50\u767B\u5F55\u6001\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55");
      const data2 = await qq("music.srfDissInfo.DissInfo", "CgiGetDiss", { disstid: liked ? 0 : Number(id), dirid: liked ? 201 : 0, tag: liked, song_begin: options.offset, song_num: limit, userinfo: liked, orderlist: true, onlysonglist: false, ...liked ? { enc_host_uin: mine.encrypt_uin } : {} }, cookie, signal);
      if (data2.code || !Array.isArray(data2.songlist)) throw new Error("QQ\u97F3\u4E50\u672A\u8FD4\u56DE\u6B4C\u66F2\uFF0C\u8BF7\u68C0\u67E5\u6B4C\u5355\u53EF\u89C1\u6027");
      info = { ...initial, title: data2.dirinfo?.title || data2.dirinfo?.dissname, creator: data2.dirinfo?.creator?.nick, count: data2.total_song_num };
      rawCount = data2.songlist.length;
      tracks = parseSongs(platform, { data: { song: { list: data2.songlist.slice(0, limit) } } });
      total = data2.total_song_num;
      hasMore = Boolean(data2.hasmore);
    } else if (platform === "netease") {
      const data2 = checked((await netease("v3/playlist/detail", { id, n: 1e3, s: 0 }, cookie, signal)).data), source = data2.playlist;
      if (!source || !Array.isArray(source.trackIds)) throw new Error("\u7F51\u6613\u4E91\u672A\u8FD4\u56DE\u6B4C\u66F2\uFF0C\u8BF7\u68C0\u67E5\u6B4C\u5355\u53EF\u89C1\u6027");
      info = { ...initial, title: source.name, creator: source.creator?.nickname, count: source.trackCount };
      const ids = source.trackIds.slice(options.offset, options.offset + limit).map((track) => ({ id: track.id }));
      const songs = ids.length ? checked((await netease("v3/song/detail", { c: JSON.stringify(ids) }, cookie, signal)).data).songs : [];
      rawCount = ids.length;
      tracks = parseSongs(platform, { result: { songs } });
      total = source.trackCount ?? source.trackIds.length;
      hasMore = options.offset + ids.length < source.trackIds.length;
    } else {
      const data2 = await kg("/pubsongs/v2/get_other_list_file_nofilt", { area_code: 1, begin_idx: options.offset, plat: 1, type: 1, mode: 1, personal_switch: 1, extend_fields: "abtags,hot_cmt,popularization", pagesize: limit, global_collection_id: id }, void 0, void 0, cookie, signal);
      if (!Array.isArray(data2.songs)) throw new Error("\u9177\u72D7\u672A\u8FD4\u56DE\u6B4C\u66F2\uFF0C\u8BF7\u68C0\u67E5\u6B4C\u5355\u53EF\u89C1\u6027");
      let detail = data2.list_info || {};
      if (!detail.name && !detail.specialname) {
        const metadata = await kg("/v3/get_list_info", {}, { data: [{ global_collection_id: id }], userid: Number(cookies(cookie).userid || 0), token: cookies(cookie).token || "" }, "pubsongs.kugou.com", cookie, signal);
        detail = Array.isArray(metadata) ? metadata[0] || {} : metadata;
      }
      info = { ...initial, title: detail.name || detail.list_name || detail.specialname, creator: detail.nickname || detail.username, count: data2.count };
      rawCount = data2.songs.length;
      total = data2.count;
      hasMore = options.offset + rawCount < Number(total);
      tracks = data2.songs.slice(0, limit).flatMap((song) => {
        try {
          const parts = String(song.name || "").split(" - "), artist = song.singerinfo?.map((item) => item.name).join(" / ") || (parts.length > 1 ? parts.shift() : "");
          if (parts.length > 1 && parts[0] === song.singerinfo?.[0]?.name) parts.shift();
          return [normalizeTrack({ platform, id: song.hash, title: parts.join(" - "), artist, album: song.albuminfo?.name, albumId: song.album_id, duration: song.timelen / 1e3 })];
        } catch {
          return [];
        }
      });
    }
    return { info: musicPlaylist(info), tracks, page, limit, total: count(total), hasMore, unavailable: Math.max(0, Math.min(rawCount, limit) - tracks.length) };
  }
  async function radio({ limit = 5, exclude = [], cookie = "", signal } = {}) {
    if (!Number.isInteger(limit) || limit < 1 || limit > 10) throw new Error("\u63A8\u8350\u6570\u91CF\u5E94\u4E3A 1\u201310 \u9996");
    const values = cookies(cookie);
    if (!(values.uin || values.wxuin) || !(values.qqmusic_key || values.qm_keyst)) throw new Error("\u8BF7\u5148\u767B\u5F55 QQ\u97F3\u4E50\uFF0C\u518D\u542C\u79C1\u4EBA\u7535\u53F0");
    const data2 = await qq("music.radioProxy.MbTrackRadioSvr", "get_radio_track", { id: 99, num: limit, from: 0, scene: 0, song_ids: [] }, cookie, signal);
    if (!Array.isArray(data2.tracks)) throw new Error("QQ\u97F3\u4E50\u6682\u672A\u8FD4\u56DE\u4E2A\u6027\u63A8\u8350\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    const seen = new Set(exclude.slice(-100)), raw = data2.tracks.slice(0, limit);
    const tracks = parseSongs("qq", { data: { song: { list: raw } } }).filter((track) => {
      if (seen.has(track.id)) return false;
      seen.add(track.id);
      return true;
    });
    return { tracks };
  }
  return { playlists, playlist, radio };
}

// src/music/providers.mjs
var MUSIC_PLATFORMS = Object.freeze([
  { id: "netease", name: "\u7F51\u6613\u4E91", qr: true, home: "https://music.163.com/" },
  { id: "qq", name: "QQ\u97F3\u4E50", qr: true, home: "https://y.qq.com/" },
  { id: "kugou", name: "\u9177\u72D7", qr: true, home: "https://www.kugou.com/" }
]);
function musicPlatform(id) {
  const platform = MUSIC_PLATFORMS.find((item) => item.id === id);
  if (!platform) throw new Error("\u4E0D\u652F\u6301\u7684\u97F3\u4E50\u5E73\u53F0");
  return platform;
}
var trackKey = (track) => track.platform + ":" + track.id;
var clean = (value) => String(value ?? "").replace(/<[^>]*>/g, "").replace(/&(?:amp|lt|gt|quot|#39);/g, (s) => ({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" })[s]).replace(/[\x00-\x1f\x7f-\x9f]/g, " ").slice(0, 180).trim();
function musicTrack(input) {
  const platform = musicPlatform(input?.platform).id, id = String(input.id ?? "");
  if (!(platform === "netease" ? /^\d{1,24}$/ : platform === "kugou" ? /^[a-f0-9]{32}$/i : /^[a-z0-9]{1,40}$/i).test(id)) throw new Error("\u65E0\u6548\u6B4C\u66F2 ID");
  const duration = Number(input.duration);
  return {
    platform,
    id,
    title: clean(input.title) || "\u672A\u77E5\u6B4C\u66F2",
    artist: clean(input.artist) || "\u672A\u77E5\u6B4C\u624B",
    album: clean(input.album),
    duration: Number.isFinite(duration) && duration > 0 ? Math.min(duration, 86400) : 0,
    albumId: /^\d{1,24}$/.test(String(input.albumId)) ? String(input.albumId) : "",
    mediaId: /^[a-z0-9]{1,40}$/i.test(input.mediaId ?? "") ? input.mediaId : "",
    sourceUrl: platform === "netease" ? `https://music.163.com/#/song?id=${id}` : platform === "qq" ? `https://y.qq.com/n/ryqq/songDetail/${id}` : `https://www.kugou.com/song/#hash=${id}`
  };
}
function parseSearch(platform, data2) {
  const list = platform === "netease" ? data2.result?.songs : platform === "qq" ? data2.data?.song?.list : data2.data?.lists;
  if (!Array.isArray(list)) throw new Error("\u641C\u7D22\u63A5\u53E3\u672A\u8FD4\u56DE\u6B4C\u66F2\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
  return list.flatMap((song) => {
    try {
      return [musicTrack(platform === "netease" ? { platform, id: song.id, title: song.name, artist: (song.ar ?? song.artists ?? []).map((s) => s.name).join(" / "), album: (song.al ?? song.album)?.name, duration: (song.dt ?? song.duration) / 1e3 } : platform === "qq" ? { platform, id: song.mid ?? song.songmid, title: song.name ?? song.songname, artist: (song.singer ?? []).map((s) => s.name).join(" / "), album: song.album?.name ?? song.albumname, duration: song.interval, mediaId: song.file?.media_mid ?? song.media_mid } : { platform, id: song.FileHash, title: song.SongName, artist: song.SingerName, album: song.AlbumName, albumId: song.AlbumID, duration: song.Duration })];
    } catch {
      return [];
    }
  });
}
function cookieValues(cookie = "") {
  return Object.fromEntries(cookie.split(";").map((s) => s.trim()).filter(Boolean).map((s) => {
    const at = s.indexOf("=");
    return [s.slice(0, at), s.slice(at + 1)];
  }).filter(([key]) => /^[\w-]+$/.test(key)));
}
var md5 = (text4) => createHash4("md5").update(text4).digest("hex");
function neteaseForm(payload, secret = randomBytes5(12).toString("base64")) {
  const encrypt = (text4, key) => {
    const cipher = createCipheriv3("aes-128-cbc", key, "0102030405060708");
    return Buffer.concat([cipher.update(text4), cipher.final()]).toString("base64");
  };
  const modulus = BigInt("0x00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7");
  let value = BigInt("0x" + Buffer.from(secret).reverse().toString("hex")), exponent = 65537n, encoded = 1n;
  while (exponent) {
    if (exponent & 1n) encoded = encoded * value % modulus;
    value = value * value % modulus;
    exponent >>= 1n;
  }
  return new URLSearchParams({ params: encrypt(encrypt(JSON.stringify(payload), "0CoJUm6Qyw8W8jud"), secret), encSecKey: encoded.toString(16).padStart(256, "0") }).toString();
}
function kugouSignature(params) {
  const salt = "NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt";
  return md5(salt + Object.keys(params).map((key) => `${key}=${params[key]}`).sort().join("") + salt);
}
var urlWith = (base, params) => {
  const url = new URL(base);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, String(value));
  return url.href;
};
function playResult(url, preview = false, duration) {
  if (!url) throw new Error("\u5E73\u53F0\u672A\u63D0\u4F9B\u64AD\u653E\u5730\u5740\uFF0C\u8BF7\u68C0\u67E5\u767B\u5F55\u3001\u4F1A\u5458\u6216\u5730\u533A\u6743\u9650");
  return { url: httpUrl(url).href, preview: Boolean(preview), duration: Number(duration) || 0 };
}
function createMusicProviders({ request = createHttpClient() } = {}) {
  const kugouMid = randomBytes5(16).toString("hex");
  const qqLogin = createQQLogin(request);
  async function json(url, options = {}) {
    const result = await request(url, { ...options, asBytes: true, headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json,text/plain,*/*", ...options.headers } });
    let data2;
    try {
      data2 = JSON.parse(result.text ?? result.bytes.toString("utf8"));
    } catch {
      throw new Error("\u5E73\u53F0\u8FD4\u56DE\u4E86\u975E JSON \u54CD\u5E94\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
    return { data: data2, cookies: result.cookies || [] };
  }
  const netease = (path, payload, cookie = "", signal) => json("https://music.163.com/weapi/" + path, { method: "POST", body: neteaseForm({ ...payload, csrf_token: cookieValues(cookie).__csrf || "" }), signal, headers: { Referer: "https://music.163.com/", Cookie: cookie, "Content-Type": "application/x-www-form-urlencoded" } });
  async function kugou(path, params, session, signal) {
    const query = { dfid: "-", mid: session.mid, uuid: "-", appid: 1005, clientver: 20489, clienttime: Math.floor(Date.now() / 1e3), ...params };
    query.signature = kugouSignature(query);
    return json(urlWith("https://login-user.kugou.com" + path, query), { signal, headers: { Referer: "https://h5.kugou.com/", mid: session.mid } });
  }
  async function search(platform, query, { limit = 8, cookie = "", signal } = {}) {
    musicPlatform(platform);
    if (!String(query).trim() || query.length > 120) throw new Error("\u8BF7\u8F93\u5165 1\u2013120 \u5B57\u7684\u6B4C\u66F2\u6216\u6B4C\u624B\u540D\u79F0");
    limit = Math.max(1, Math.min(30, Math.trunc(Number(limit)) || 8));
    const url = platform === "netease" ? urlWith("https://music.163.com/api/search/get/web", { s: query, type: 1, limit, offset: 0 }) : platform === "qq" ? urlWith("https://c.y.qq.com/soso/fcgi-bin/client_search_cp", { w: query, format: "json", p: 1, n: limit }) : urlWith("https://songsearch.kugou.com/song_search_v2", { keyword: query, page: 1, pagesize: limit });
    const { data: data2 } = await json(url, { signal, headers: { Cookie: cookie, Referer: musicPlatform(platform).home } });
    return parseSearch(platform, data2).slice(0, limit);
  }
  async function resolve5(input, { cookie = "", signal } = {}) {
    const track = musicTrack(input), values = cookieValues(cookie);
    if (track.platform === "netease") {
      const { data: data3 } = await netease("song/enhance/player/url/v1", { ids: JSON.stringify([track.id]), level: "higher", encodeType: "mp3" }, cookie, signal);
      const item = data3.data?.[0];
      return playResult(item?.url, item?.freeTrialInfo, item?.freeTrialInfo ? (item.freeTrialInfo.end - item.freeTrialInfo.start) / 1e3 : item?.time / 1e3);
    }
    if (track.platform === "qq") {
      const uin = (values.uin || values.wxuin || "0").replace(/^o/, ""), key = values.qqmusic_key || values.qm_keyst || "";
      let gtk = 5381;
      for (const c of key) gtk = gtk + (gtk << 5) + c.charCodeAt(0) & 2147483647;
      const payload = { comm: { uin, authst: key, g_tk: gtk, ct: 24, cv: 0, format: "json" }, req_1: { module: "vkey.GetVkeyServer", method: "CgiGetVkey", param: { guid: "10000", songmid: [track.id], songtype: [0], uin, loginflag: cookie ? 1 : 0, platform: "20", filename: [`M500${track.mediaId || track.id}.mp3`] } } };
      const { data: data3 } = await json("https://u.y.qq.com/cgi-bin/musicu.fcg", { signal, method: "POST", body: JSON.stringify(payload), headers: { Cookie: cookie, Referer: "https://y.qq.com/", "Content-Type": "application/json" } });
      const result = data3.req_1?.data, item = result?.midurlinfo?.[0];
      return playResult(item?.purl ? new URL(item.purl, result.sip?.[0] || "https://isure.stream.qqmusic.qq.com/").href : "");
    }
    const mid = values.mid || values.kg_mid || kugouMid, hash = track.id.toLowerCase(), userid = values.userid || 0;
    const params = {
      dfid: values.dfid || "-",
      mid,
      uuid: "-",
      appid: 1005,
      clientver: 11430,
      clienttime: Math.floor(Date.now() / 1e3),
      album_id: Number(track.albumId || 0),
      area_code: 1,
      hash,
      version: 11430,
      quality: 128,
      album_audio_id: 0,
      behavior: "play",
      pid: 2,
      cmd: 26,
      pidversion: 3001,
      IsFreePart: 0,
      cdnBackup: 1,
      module: "",
      page_id: 151369488,
      ppage_id: "463467626,350369493,788954147",
      ...values.token ? { token: values.token, userid } : {},
      key: md5(`${hash}57ae12eb6890223e355ccfcb74edf70d1005${mid}${userid}`)
    };
    const salt = "OIlwieks28dk2k092lksi2UIkp";
    params.signature = md5(salt + Object.keys(params).sort().map((key) => `${key}=${params[key]}`).join("") + salt);
    const { data: data2 } = await json(urlWith("https://gateway.kugou.com/v5/url", params), { signal, headers: { "x-router": "trackercdn.kugou.com", mid, dfid: params.dfid } });
    if (data2["SSA-CODE"] || data2.data?.["SSA-CODE"] || data2.error_code === 30020) throw new Error("\u9177\u72D7\u8981\u6C42\u989D\u5916\u9A8C\u8BC1\uFF0C\u8BF7\u5148\u5728\u5B98\u65B9 App \u5B8C\u6210\u9A8C\u8BC1\u540E\u91CD\u8BD5");
    return playResult(Array.isArray(data2.url) ? data2.url[0] : data2.url, data2.is_free_part, data2.timeLength);
  }
  async function beginLogin(platform, { signal } = {}) {
    musicPlatform(platform);
    if (platform === "qq") return qqLogin.begin({ signal });
    if (platform === "netease") {
      const { data: data3 } = await netease("login/qrcode/unikey", { type: 3 }, "", signal);
      const key2 = data3.unikey ?? data3.data?.unikey;
      if (!key2) throw new Error("\u7F51\u6613\u4E91\u672A\u8FD4\u56DE\u626B\u7801\u51ED\u636E\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      return { platform, key: key2, url: urlWith("https://music.163.com/login", { codekey: key2 }) };
    }
    const session = { platform, mid: randomBytes5(16).toString("hex") };
    const { data: data2 } = await kugou("/v2/qrcode", { appid: 1001, type: 1, plat: 4, srcappid: 2919, qrcode_txt: "https://h5.kugou.com/apps/loginQRCode/html/index.html?appid=1005&" }, session, signal);
    const key = data2.data?.qrcode;
    if (!key) throw new Error("\u9177\u72D7\u672A\u8FD4\u56DE\u626B\u7801\u51ED\u636E\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    return { ...session, key, url: urlWith("https://h5.kugou.com/apps/loginQRCode/html/index.html", { qrcode: key }) };
  }
  async function checkLogin(session, { signal, onProgress = (_status) => {
  } } = {}) {
    if (session.platform === "qq") return qqLogin.check(session, { signal, onProgress });
    if (session.platform === "netease") {
      const { data: data3, cookies } = await netease("login/qrcode/client/login", { key: session.key, type: 3 }, "", signal);
      if (data3.code === 803) {
        const cookie = cookies.map((c) => c.split(";")[0]).join("; ");
        if (!cookieValues(cookie).MUSIC_U) throw new Error("\u626B\u7801\u5B8C\u6210\u4F46\u5E73\u53F0\u672A\u8FD4\u56DE\u6709\u6548\u767B\u5F55\u6001");
        return { status: "authorized", cookie };
      }
      return { status: data3.code === 800 ? "expired" : data3.code === 802 ? "scanned" : data3.code === 801 ? "waiting" : "failed" };
    }
    musicPlatform(session.platform);
    const { data: data2 } = await kugou("/v2/get_userinfo_qrcode", { plat: 4, appid: 1005, srcappid: 2919, qrcode: session.key, dev: "Web" }, session, signal);
    const info = data2.data;
    if (Number(info?.status) === 4) {
      if (!info.token || !info.userid) throw new Error("\u626B\u7801\u5B8C\u6210\u4F46\u5E73\u53F0\u672A\u8FD4\u56DE\u6709\u6548\u767B\u5F55\u6001");
      return { status: "authorized", cookie: `token=${info.token}; userid=${info.userid}; mid=${session.mid}`, nickname: clean(info.nickname) };
    }
    return { status: Number(info?.status) === 0 ? "expired" : Number(info?.status) === 2 ? "scanned" : Number(info?.status) === 1 ? "waiting" : "failed" };
  }
  return { search, resolve: resolve5, beginLogin, checkLogin, ...createPlaylistProviders({ json, netease, parseSongs: parseSearch, normalizeTrack: musicTrack, cookies: cookieValues, page: request }) };
}

// src/music/settings.mjs
import { readFile as readFile5, mkdir as mkdir6, unlink as unlink3 } from "node:fs/promises";
import { join as join7 } from "node:path";
function normalizeMusicCookie(platform, input) {
  musicPlatform(platform);
  if (typeof input !== "string" || input.length > 16384 || /[\x00-\x1f\x7f]/.test(input)) throw new Error("\u767B\u5F55\u6001\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u7C98\u8D34\u5355\u884C Cookie");
  const values = cookieValues(input.trim().replace(/^cookie:\s*/i, ""));
  const required = platform === "netease" ? values.MUSIC_U : platform === "qq" ? (values.uin || values.wxuin) && (values.qqmusic_key || values.qm_keyst) : values.token && values.userid;
  if (!required) throw new Error(platform === "netease" ? "\u9700\u8981\u7F51\u6613\u4E91\u7F51\u9875\u767B\u5F55\u540E\u7684 MUSIC_U" : platform === "qq" ? "\u9700\u8981 QQ\u97F3\u4E50\u7684 uin\uFF08\u6216 wxuin\uFF09\u548C qqmusic_key\uFF08\u6216 qm_keyst\uFF09" : "\u9700\u8981\u9177\u72D7\u767B\u5F55\u540E\u7684 userid \u548C token");
  const allowed = platform === "netease" ? ["MUSIC_U", "__csrf", "NMTID", "MUSIC_A"] : platform === "qq" ? ["uin", "wxuin", "qqmusic_key", "qm_keyst", "qqmusic_fromtag"] : ["userid", "token", "mid", "kg_mid", "dfid"];
  return allowed.filter((key) => values[key]).map((key) => `${key}=${values[key]}`).join("; ");
}
var MusicSettings = class {
  constructor(library) {
    this.library = library;
    this.directory = join7(library.internal, "settings");
  }
  path(name) {
    return join7(this.directory, `music-${name}.enc`);
  }
  async read(name, fallback) {
    try {
      return await this.library.vault.unseal(await readFile5(this.path(name)));
    } catch (error) {
      if (error.code === "ENOENT") return fallback;
      throw error;
    }
  }
  async write(name, value) {
    await mkdir6(this.directory, { recursive: true, mode: 448 });
    await atomicWrite(this.path(name), await this.library.vault.seal(value));
  }
  async cookie(platform) {
    musicPlatform(platform);
    return (await this.read(platform, {})).cookie || "";
  }
  async account(platform) {
    musicPlatform(platform);
    const value = await this.read(platform, {});
    return { platform, configured: Boolean(value.cookie), method: value.method || "", nickname: value.nickname || "", savedAt: value.savedAt || "" };
  }
  async saveAccount(platform, input, { method = "cookie", nickname = "" } = {}) {
    const cookie = normalizeMusicCookie(platform, input);
    await this.write(platform, { cookie, method, nickname: String(nickname).replace(/[\x00-\x1f\x7f-\x9f]/g, "").slice(0, 80), savedAt: (/* @__PURE__ */ new Date()).toISOString() });
    return this.account(platform);
  }
  async logout(platform) {
    musicPlatform(platform);
    await unlink3(this.path(platform)).catch((error) => {
      if (error.code !== "ENOENT") throw error;
    });
    return this.account(platform);
  }
  async player() {
    const value = await this.read("player", {});
    const queue = (Array.isArray(value.queue) ? value.queue : []).slice(0, 100).flatMap((track) => {
      try {
        return [musicTrack(track)];
      } catch {
        return [];
      }
    });
    return { queue, currentKey: queue.some((track) => trackKey(track) === value.currentKey) ? value.currentKey : "", volume: Number.isFinite(value.volume) ? Math.max(0, Math.min(100, value.volume)) : 50, repeat: value.repeat === "one" ? "one" : "all" };
  }
  savePlayer(value) {
    return this.write("player", { queue: value.queue.slice(0, 100).map(musicTrack), currentKey: value.currentKey, volume: value.volume, repeat: value.repeat });
  }
};

// src/music/temp.mjs
import { mkdtemp as mkdtemp2, readdir as readdir6, rm as rm4 } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join as join8, resolve as resolve3, dirname as dirname4, basename as basename3 } from "node:path";
var pattern = /^moyu-music-(?:audio|login)-(\d+)-[\w-]+$/;
function createMusicTemp(kind) {
  if (!["audio", "login"].includes(kind)) throw new Error("\u65E0\u6548\u97F3\u4E50\u7F13\u5B58\u7C7B\u578B");
  return mkdtemp2(join8(tmpdir(), `moyu-music-${kind}-${process.pid}-`));
}
async function removeMusicTemp(path) {
  const absolute = resolve3(path);
  if (dirname4(absolute) !== resolve3(tmpdir()) || !pattern.test(basename3(absolute))) throw new Error("\u97F3\u4E50\u7F13\u5B58\u8DEF\u5F84\u8D8A\u754C");
  await rm4(absolute, { recursive: true, force: true, maxRetries: 4, retryDelay: 100 });
}
async function cleanupMusicTemps() {
  for (const entry of await readdir6(tmpdir(), { withFileTypes: true })) {
    const match = pattern.exec(entry.name);
    if (!entry.isDirectory() || !match) continue;
    try {
      process.kill(Number(match[1]), 0);
      continue;
    } catch (error) {
      if (error.code !== "ESRCH") continue;
    }
    await removeMusicTemp(join8(tmpdir(), entry.name));
  }
}

// src/music/service.mjs
var MusicService = class {
  constructor(library, { providers = createMusicProviders(), download = createHttpClient({ maxBytes: 64 * 1024 * 1024, timeoutMs: 6e4 }), accountCoordinator = (
    /** @type {any} */
    void 0
  ) } = {}) {
    this.settings = new MusicSettings(library);
    this.providers = providers;
    this.download = download;
    this.accountWrites = /* @__PURE__ */ new Map();
    this.accountCoordinator = accountCoordinator;
  }
  /** @param {string} query @param {{platform?: string, limit?: number, signal?: AbortSignal}} options */
  async search(query, { platform = "all", limit = 8, signal } = {}) {
    const selected = platform === "all" ? MUSIC_PLATFORMS : [musicPlatform(platform)];
    const results = await Promise.allSettled(selected.map(async (source) => this.providers.search(source.id, query.trim(), { limit, cookie: await this.settings.cookie(source.id), signal })));
    signal?.throwIfAborted();
    const tracks = [], errors = [], batches = [];
    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      if (result.status === "fulfilled") batches.push(result.value);
      else errors.push({ platform: selected[i].id, message: result.reason instanceof Error ? result.reason.message : "\u5E73\u53F0\u6682\u4E0D\u53EF\u7528" });
    }
    for (let index2 = 0; index2 < Math.max(0, ...batches.map((batch) => batch.length)); index2++) for (const batch of batches) if (batch[index2]) tracks.push(batch[index2]);
    return { tracks, errors };
  }
  async prepare(input, { signal } = {}) {
    const track = musicTrack(input), cookie = await this.settings.cookie(track.platform);
    const source = await this.providers.resolve(track, { cookie, signal });
    signal?.throwIfAborted();
    const result = await this.download(source.url, { signal, asBytes: true, headers: { Referer: musicPlatform(track.platform).home } });
    signal?.throwIfAborted();
    const directory = await createMusicTemp("audio");
    try {
      const path = join9(directory, "track.audio");
      await writeFile4(path, result.bytes, { mode: 384, signal });
      signal?.throwIfAborted();
      return { path, track, preview: source.preview, release: () => removeMusicTemp(directory) };
    } catch (error) {
      await removeMusicTemp(directory);
      throw error;
    }
  }
  /** @param {{mode?: string, query?: string, platform?: string, collection?: string, page?: number, limit?: number, signal?: AbortSignal}} options */
  async playlists({ mode = "search", query = "", platform = "all", collection = "created", page = 1, limit = 5, signal } = {}) {
    let selected = platform === "all" ? MUSIC_PLATFORMS : [musicPlatform(platform)];
    if (mode === "mine" && platform === "all") {
      const configured = await Promise.all(selected.map((item) => this.settings.account(item.id)));
      selected = selected.filter((item, index2) => configured[index2].configured);
      if (!selected.length) throw new Error("\u8BF7\u5148\u5728 /music \u7684\u8D26\u53F7\u83DC\u5355\u767B\u5F55\u97F3\u4E50\u5E73\u53F0");
    }
    const results = await Promise.allSettled(selected.map(async (item) => this.providers.playlists(item.id, { mode, query, collection, page, limit, cookie: await this.settings.cookie(item.id), signal })));
    signal?.throwIfAborted();
    const playlists = [], errors = [], pages = [];
    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      if (result.status === "fulfilled") pages.push(result.value);
      else errors.push({ platform: selected[i].id, message: result.reason instanceof Error ? result.reason.message : "\u5E73\u53F0\u6B4C\u5355\u6682\u4E0D\u53EF\u7528" });
    }
    for (let index2 = 0; index2 < Math.max(0, ...pages.map((batch) => batch.playlists.length)); index2++) for (const batch of pages) if (batch.playlists[index2]) playlists.push(batch.playlists[index2]);
    return { playlists, errors, page, limit, hasMore: pages.some((item) => item.hasMore) };
  }
  /** @param {string} platform @param {string} id @param {{page?: number, limit?: number, signal?: AbortSignal}} options */
  async playlist(platform, id, { page = 1, limit = 20, signal } = {}) {
    musicPlaylist({ platform, id });
    const result = await this.providers.playlist(platform, id, { page, limit, signal, cookie: await this.settings.cookie(platform) });
    signal?.throwIfAborted();
    return result;
  }
  /** @param {{limit?: number, exclude?: string[], signal?: AbortSignal}} options */
  async radio({ limit = 5, exclude = [], signal } = {}) {
    const result = await this.providers.radio({ limit, exclude, signal, cookie: await this.settings.cookie("qq") });
    signal?.throwIfAborted();
    return result;
  }
  accountWrite(platform, operation) {
    const pending = (this.accountWrites.get(platform) || Promise.resolve()).catch(() => {
    }).then(operation);
    this.accountWrites.set(platform, pending);
    void pending.finally(() => {
      if (this.accountWrites.get(platform) === pending) this.accountWrites.delete(platform);
    }).catch(() => {
    });
    return pending;
  }
  saveAccount(platform, cookie, options) {
    return this.accountWrite(platform, () => this.accountCoordinator ? this.accountCoordinator.saveAccount(platform, cookie, options) : this.settings.saveAccount(platform, cookie, options));
  }
  logout(platform) {
    return this.accountWrite(platform, () => this.accountCoordinator ? this.accountCoordinator.logout(platform) : this.settings.logout(platform));
  }
  /** Cancelling before a scan completes can never save a late login response. */
  /** @param {string} platform @param {{signal?: AbortSignal, onSession?: (session: any) => Promise<void>, onStatus?: (status: string) => void, intervalMs?: number, expiresMs?: number}} options */
  async login(platform, { signal, onSession = async (_session) => {
  }, onStatus = (_status) => {
  }, intervalMs = 2500, expiresMs = 18e4 } = {}) {
    signal?.throwIfAborted();
    const expectedVersion = await this.accountCoordinator?.accountVersion(platform);
    const session = await this.providers.beginLogin(platform, { signal });
    signal?.throwIfAborted();
    await onSession(session);
    const deadline = Date.now() + expiresMs;
    while (Date.now() < deadline) {
      signal?.throwIfAborted();
      const state = await this.providers.checkLogin(session, { signal, onProgress: onStatus });
      signal?.throwIfAborted();
      if (state.status === "authorized") return this.accountWrite(platform, async () => {
        signal?.throwIfAborted();
        const options = { method: "qr", nickname: state.nickname };
        return this.accountCoordinator ? this.accountCoordinator.saveAccount(platform, state.cookie, { ...options, expectedVersion, signal }) : this.settings.saveAccount(platform, state.cookie, options);
      });
      if (state.status === "expired" || state.status === "failed") throw new Error(state.status === "expired" ? "\u4E8C\u7EF4\u7801\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801" : "\u5E73\u53F0\u62D2\u7EDD\u4E86\u626B\u7801\u8BF7\u6C42\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      onStatus(state.status);
      await new Promise((resolve5, reject) => {
        const abort = () => {
          clearTimeout(timer);
          reject(signal.reason);
        };
        const timer = setTimeout(() => {
          signal?.removeEventListener("abort", abort);
          resolve5();
        }, intervalMs);
        signal?.addEventListener("abort", abort, { once: true });
        if (signal?.aborted) abort();
      });
    }
    throw new Error("\u4E8C\u7EF4\u7801\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801");
  }
};

// src/music/login.mjs
var import_qrcode = __toESM(require_qrcode(), 1);
import { writeFile as writeFile5 } from "node:fs/promises";
import { join as join10 } from "node:path";
import { spawn as spawn3 } from "node:child_process";
import { pathToFileURL } from "node:url";
function musicQRCode(url) {
  const { modules } = import_qrcode.default.create(url, { errorCorrectionLevel: "M" });
  const size = modules.size, commands = [];
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (modules.data[y * size + x]) commands.push(`M${x + 4} ${y + 4}h1v1h-1z`);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size + 8} ${size + 8}" shape-rendering="crispEdges"><rect width="100%" height="100%" fill="white"/><path fill="black" d="${commands.join("")}"/></svg>`;
  return "data:image/svg+xml;base64," + Buffer.from(svg).toString("base64");
}
function openMusicPage(target) {
  const command = process.platform === "win32" ? "rundll32.exe" : process.platform === "darwin" ? "open" : "xdg-open";
  const args = process.platform === "win32" ? ["url.dll,FileProtocolHandler", target] : [target];
  return new Promise((resolve5, reject) => {
    const child = spawn3(command, args, { stdio: "ignore", windowsHide: true });
    child.once("error", () => reject(new Error("\u65E0\u6CD5\u6253\u5F00\u9ED8\u8BA4\u6D4F\u89C8\u5668\uFF0C\u8BF7\u68C0\u67E5\u7CFB\u7EDF\u7684\u6D4F\u89C8\u5668\u8BBE\u7F6E")));
    child.once("spawn", () => {
      child.unref();
      resolve5();
    });
  });
}
async function musicLoginPage(session) {
  const name = musicPlatform(session.platform).name;
  const directory = await createMusicTemp("login");
  try {
    const image = session.image || musicQRCode(session.url);
    if (session.image && (session.image.length > 2 * 1024 * 1024 || !/^data:image\/png;base64,[A-Za-z0-9+/]+={0,2}$/.test(session.image))) throw new Error("\u767B\u5F55\u4E8C\u7EF4\u7801\u683C\u5F0F\u4E0D\u6B63\u786E");
    const scanner = session.platform === "qq" ? "\u624B\u673A QQ" : name + "\u624B\u673A App";
    const path = join10(directory, "login.html");
    await writeFile5(path, `<!doctype html><html lang="zh-CN">
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data:; style-src 'unsafe-inline'">
<title>${name} \xB7 \u6478\u9C7C\u97F3\u4E50</title>
<style>body{margin:0;background:#101820;color:#e8edef;font:18px system-ui;display:grid;min-height:100vh;place-items:center}main{text-align:center;padding:28px}img{width:300px;max-width:80vw;image-rendering:pixelated;border-radius:16px}p{color:#acbec7;line-height:1.8;max-width:440px}h1{font-size:26px}</style>
<main><h1>${name} \xB7 \u626B\u7801\u767B\u5F55</h1><img alt="\u767B\u5F55\u4E8C\u7EF4\u7801" src="${image}">
<p>\u8BF7\u7528${scanner}\u626B\u7801\u5E76\u786E\u8BA4\u3002<br>\u5B8C\u6210\u540E\u8FD4\u56DE OpenCode \u67E5\u770B\u8D26\u53F7\u72B6\u6001\u3002<br>\u626B\u7801\u7B49\u5F85\u6700\u591A 3 \u5206\u949F\uFF0C\u53D6\u6D88\u540E\u8F6F\u4EF6\u4E0D\u518D\u63A5\u6536\u767B\u5F55\u3002</p></main></html>`, { mode: 384 });
    return { url: pathToFileURL(path).href, release: () => removeMusicTemp(directory) };
  } catch (error) {
    await removeMusicTemp(directory);
    throw error;
  }
}

// src/ui/music.tsx
function createMusicReader(api, library, controller, settings) {
  const service = new MusicService(library, {
    accountCoordinator: controller
  });
  const [state, setState] = createSignal2({
    queue: [],
    current: void 0,
    radio: false,
    playing: false,
    position: 0,
    duration: 0,
    volume: 50,
    repeat: "all",
    busy: false,
    error: "",
    preview: false
  });
  const [platform, setPlatform] = createSignal2("all");
  const [results, setResults] = createSignal2([]);
  const [searching, setSearching] = createSignal2(false);
  const [searchError, setSearchError] = createSignal2("");
  const [accounts, setAccounts] = createSignal2({});
  const [loginStatus, setLoginStatus] = createSignal2("");
  const [loginBusy, setLoginBusy] = createSignal2(false);
  const [playlistBusy, setPlaylistBusy] = createSignal2(false);
  const [playlistNotice, setPlaylistNotice] = createSignal2("");
  let playlistAbort;
  let lastPlaylistList;
  let lastPlaylist;
  let searchAbort, loginAbort, loginPlatform = "";
  const loginTasks = /* @__PURE__ */ new Set();
  function toast(message, error = false) {
    if (!api.lifecycle.signal.aborted) api.ui.toast({
      title: "\u58A8\u9C7C\u97F3\u4E50",
      message,
      variant: error ? "error" : "info"
    });
  }
  function failed(error) {
    toast(error instanceof Error ? error.message : "\u97F3\u4E50\u64CD\u4F5C\u5931\u8D25", true);
  }
  let previousError = "";
  const unsubscribe = controller.subscribe((value) => {
    if (api.lifecycle.signal.aborted) return;
    setState(value);
    if (value.error && value.error !== previousError) toast(value.error, true);
    previousError = value.error;
  });
  async function refreshAccounts() {
    const values = await Promise.all(MUSIC_PLATFORMS.map((source) => service.settings.account(source.id)));
    if (!api.lifecycle.signal.aborted) setAccounts(Object.fromEntries(values.map((item) => [item.platform, item])));
  }
  const ready = Promise.all([cleanupMusicTemps(), controller.ready, refreshAccounts()]).catch(failed);
  function choosePlatform(next2) {
    searchAbort?.abort();
    searchAbort = void 0;
    setSearching(false);
    setResults([]);
    setSearchError("");
    setPlatform(next2);
    playlistAbort?.abort();
    playlistAbort = void 0;
    setPlaylistBusy(false);
    setPlaylistNotice("");
    lastPlaylistList = void 0;
    lastPlaylist = void 0;
  }
  function action(track) {
    settings.dialog(() => _$createComponent2(api.ui.DialogSelect, {
      get title() {
        return track.title;
      },
      get options() {
        return [{
          title: "\u7ACB\u5373\u64AD\u653E",
          value: "play",
          description: `${musicPlatform(track.platform).name} \xB7 ${track.artist}`
        }, {
          title: "\u52A0\u5165\u64AD\u653E\u961F\u5217",
          value: "add",
          description: "\u4FDD\u7559\u5F53\u524D\u64AD\u653E\uFF0C\u6700\u591A 100 \u9996"
        }, {
          title: "\u6253\u5F00\u5E73\u53F0\u6B4C\u66F2\u9875",
          value: "source",
          description: "\u5728\u9ED8\u8BA4\u6D4F\u89C8\u5668\u6253\u5F00"
        }];
      },
      onSelect: (item) => {
        settings.close();
        try {
          if (item.value === "source") {
            void openMusicPage(track.sourceUrl).catch(failed);
            return;
          }
          void controller.add(track).then(() => item.value === "play" ? controller.play(trackKey(track)) : toast("\u5DF2\u52A0\u5165\u64AD\u653E\u961F\u5217")).catch(failed);
        } catch (error) {
          failed(error);
        }
      }
    }));
  }
  function showResults() {
    if (!results().length) {
      promptSearch();
      return;
    }
    settings.dialog(() => _$createComponent2(api.ui.DialogSelect, {
      get title() {
        return `\u97F3\u4E50\u641C\u7D22 \xB7 ${results().length} \u9996`;
      },
      placeholder: "\u8F93\u5165\u6B4C\u540D\u6216\u6B4C\u624B\u8FC7\u6EE4\uFF0C\u9009\u62E9\u540E\u53EF\u64AD\u653E\u6216\u52A0\u5165\u961F\u5217",
      get options() {
        return results().map((track) => ({
          title: `[${musicPlatform(track.platform).name}] ${track.title}`,
          value: trackKey(track),
          description: `${track.artist} \xB7 ${track.album} \xB7 ${mediaTime(track.duration)}`
        }));
      },
      onSelect: (item) => {
        settings.close();
        const track = results().find((track2) => trackKey(track2) === item.value);
        if (track) action(track);
      }
    }));
  }
  async function search(query) {
    searchAbort?.abort();
    const abort = searchAbort = new AbortController();
    setSearching(true);
    setSearchError("");
    try {
      const result = await service.search(query, {
        platform: platform(),
        signal: abort.signal
      });
      if (abort.signal.aborted || api.lifecycle.signal.aborted) return;
      setResults(result.tracks);
      setSearchError(result.errors.map((item) => `${musicPlatform(item.platform).name}\uFF1A${item.message}`).join("\uFF1B"));
      if (result.tracks.length && settings.active() && settings.canDialog()) showResults();
      else toast(result.tracks.length ? "\u641C\u7D22\u5B8C\u6210\uFF0C\u70B9\u51FB\u300C\u7ED3\u679C\u300D\u67E5\u770B" : result.errors.length ? "\u641C\u7D22\u5931\u8D25\uFF0C\u64AD\u653E\u533A\u663E\u793A\u4E86\u5404\u5E73\u53F0\u539F\u56E0" : "\u6CA1\u6709\u627E\u5230\u6B4C\u66F2", !result.tracks.length);
    } catch (error) {
      if (!abort.signal.aborted) failed(error);
    } finally {
      if (searchAbort === abort) {
        searchAbort = void 0;
        setSearching(false);
      }
    }
  }
  function promptSearch() {
    setPlaylistNotice("");
    settings.dialog(() => _$createComponent2(api.ui.DialogPrompt, {
      get title() {
        return `\u641C\u7D22\u97F3\u4E50 \xB7 ${platform() === "all" ? "\u5168\u90E8\u5E73\u53F0" : musicPlatform(platform()).name}`;
      },
      placeholder: "\u8F93\u5165\u6B4C\u66F2\u540D\u3001\u6B4C\u624B\u6216\u4E13\u8F91\u540D",
      get onCancel() {
        return settings.close;
      },
      onConfirm: (query) => {
        settings.close();
        if (query.trim()) void search(query.trim());
      }
    }));
  }
  function queue() {
    if (!state().queue.length) return promptSearch();
    settings.dialog(() => _$createComponent2(api.ui.DialogSelect, {
      get title() {
        return `\u64AD\u653E\u961F\u5217 \xB7 ${state().queue.length} \u9996`;
      },
      get options() {
        return state().queue.map((track) => ({
          title: `${state().current && trackKey(track) === trackKey(state().current) ? "\u266A " : ""}${track.title}`,
          value: trackKey(track),
          description: `${musicPlatform(track.platform).name} \xB7 ${track.artist}`
        }));
      },
      onSelect: (item) => {
        settings.close();
        const track = state().queue.find((track2) => trackKey(track2) === item.value);
        if (track) action(track);
      }
    }));
  }
  function cancelPlaylistQuery() {
    playlistAbort?.abort();
    playlistAbort = void 0;
    setPlaylistBusy(false);
    setPlaylistNotice("\u6B4C\u5355\u67E5\u8BE2\u5DF2\u53D6\u6D88");
  }
  async function queryPlaylist(work) {
    playlistAbort?.abort();
    const abort = playlistAbort = new AbortController();
    setPlaylistBusy(true);
    setPlaylistNotice("\u6B63\u5728\u67E5\u8BE2\u6B4C\u5355\u2026");
    try {
      await work(abort.signal);
    } catch (error) {
      if (!abort.signal.aborted && !api.lifecycle.signal.aborted) {
        setPlaylistNotice(error instanceof Error ? error.message : "\u6B4C\u5355\u67E5\u8BE2\u5931\u8D25");
        failed(error);
      }
    } finally {
      if (playlistAbort === abort) {
        playlistAbort = void 0;
        setPlaylistBusy(false);
      }
    }
  }
  function showPlaylistList() {
    const saved = lastPlaylistList;
    if (!saved) return playlistMenu();
    const {
      data: data2,
      query
    } = saved;
    settings.dialog(() => _$createComponent2(api.ui.DialogSelect, {
      get title() {
        return `${query.mode === "mine" ? query.collection === "favorite" ? "\u6536\u85CF\u6B4C\u5355" : "\u6211\u7684\u6B4C\u5355" : "\u6B4C\u5355\u641C\u7D22"} \xB7 \u7B2C ${data2.page} \u9875`;
      },
      placeholder: "\u9009\u62E9\u6B4C\u5355\u67E5\u770B\u6B4C\u66F2\uFF0C\u8F93\u5165\u540D\u79F0\u53EF\u8FC7\u6EE4\u672C\u9875",
      get options() {
        return [...data2.playlists.map((item) => ({
          title: `[${musicPlatform(item.platform).name}] ${item.title}`,
          value: playlistKey(item),
          description: `${item.count === void 0 ? "\u6B4C\u66F2\u6570\u672A\u77E5" : item.count + " \u9996"}${item.creator ? " \xB7 " + item.creator : ""}`
        })), ...data2.page > 1 ? [{
          title: "\u2039 \u4E0A\u4E00\u9875",
          value: "@prev",
          description: "\u67E5\u8BE2\u4E0A\u4E00\u9875\u6B4C\u5355"
        }] : [], ...data2.hasMore ? [{
          title: "\u4E0B\u4E00\u9875 \u203A",
          value: "@next",
          description: "\u7EE7\u7EED\u67E5\u8BE2\u6B4C\u5355"
        }] : [], {
          title: "\u8FD4\u56DE\u6B4C\u5355\u83DC\u5355",
          value: "@menu",
          description: "\u6211\u7684\u6B4C\u5355\u3001\u6536\u85CF\u3001\u641C\u7D22\u6216\u94FE\u63A5"
        }];
      },
      onSelect: (item) => {
        settings.close();
        if (item.value === "@menu") return playlistMenu();
        if (item.value === "@prev" || item.value === "@next") return loadPlaylistList(query, data2.page + (item.value === "@prev" ? -1 : 1));
        const selected = data2.playlists.find((playlist) => playlistKey(playlist) === item.value);
        if (selected) loadPlaylist(selected);
      }
    }));
  }
  function loadPlaylistList(query, page = 1) {
    void queryPlaylist(async (signal) => {
      const data2 = await service.playlists({
        ...query,
        page,
        limit: 10,
        signal
      });
      if (signal.aborted || api.lifecycle.signal.aborted) return;
      lastPlaylistList = {
        query,
        data: data2
      };
      lastPlaylist = void 0;
      const errors = data2.errors.map((item) => `${musicPlatform(item.platform).name}\uFF1A${item.message}`).join("\uFF1B");
      setPlaylistNotice(errors || `\u6B4C\u5355\u7B2C ${page} \u9875 \xB7 ${data2.playlists.length} \u4E2A`);
      if (!data2.playlists.length && !data2.hasMore) {
        toast(errors || "\u6CA1\u6709\u627E\u5230\u6B4C\u5355", Boolean(errors));
        return;
      }
      if (settings.active() && settings.canDialog()) showPlaylistList();
      else toast("\u6B4C\u5355\u5DF2\u52A0\u8F7D\uFF0C\u70B9\u51FB\u300C\u6B4C\u5355\u300D\u7EE7\u7EED\u67E5\u770B");
    });
  }
  function showPlaylist() {
    const data2 = lastPlaylist;
    if (!data2) return playlistMenu();
    settings.dialog(() => _$createComponent2(api.ui.DialogSelect, {
      get title() {
        return `${data2.info.title} \xB7 \u7B2C ${data2.page} \u9875`;
      },
      get placeholder() {
        return `\u672C\u9875 ${data2.tracks.length} \u9996${data2.total === void 0 ? "" : " / \u5171 " + data2.total + " \u9996"}\uFF0C\u9009\u62E9\u6B4C\u66F2\u53EF\u64AD\u653E\u6216\u52A0\u5165\u961F\u5217`;
      },
      get options() {
        return [...data2.tracks.length ? [{
          title: "\uFF0B \u672C\u9875\u6B4C\u66F2\u52A0\u5165\u961F\u5217",
          value: "@add",
          description: `\u52A0\u5165\u672C\u9875 ${data2.tracks.length} \u9996\uFF0C\u6309\u6B4C\u66F2\u53BB\u91CD\uFF0C\u4FDD\u7559\u5F53\u524D\u64AD\u653E`
        }] : [], ...data2.tracks.map((track) => ({
          title: track.title,
          value: trackKey(track),
          description: `${track.artist} \xB7 ${mediaTime(track.duration)}`
        })), ...data2.page > 1 ? [{
          title: "\u2039 \u4E0A\u4E00\u9875\u6B4C\u66F2",
          value: "@prev",
          description: "\u6BCF\u9875 20 \u9996"
        }] : [], ...data2.hasMore ? [{
          title: "\u4E0B\u4E00\u9875\u6B4C\u66F2 \u203A",
          value: "@next",
          description: "\u7EE7\u7EED\u67E5\u770B\uFF0C\u6BCF\u9875 20 \u9996"
        }] : [], {
          title: "\u8FD4\u56DE\u6B4C\u5355\u5217\u8868",
          value: "@back",
          description: "\u4FDD\u7559\u5F53\u524D\u67E5\u8BE2\u548C\u9875\u7801"
        }];
      },
      onSelect: (item) => {
        settings.close();
        if (item.value === "@back") return lastPlaylistList ? showPlaylistList() : playlistMenu();
        if (item.value === "@prev" || item.value === "@next") return loadPlaylist(data2.info, data2.page + (item.value === "@prev" ? -1 : 1));
        if (item.value === "@add") {
          void controller.addMany(data2.tracks).then((added) => toast(`\u5DF2\u52A0\u5165 ${added.added} \u9996${added.duplicates ? "\uFF0C\u8DF3\u8FC7 " + added.duplicates + " \u9996\u91CD\u590D\u6B4C\u66F2" : ""}`)).catch(failed);
          return;
        }
        const track = data2.tracks.find((track2) => trackKey(track2) === item.value);
        if (track) action(track);
      }
    }));
  }
  function loadPlaylist(playlist, page = 1) {
    void queryPlaylist(async (signal) => {
      const data2 = await service.playlist(playlist.platform, playlist.id, {
        page,
        limit: 20,
        signal
      });
      if (signal.aborted || api.lifecycle.signal.aborted) return;
      if (playlist.legacyId) data2.info = musicPlaylist({
        ...data2.info,
        legacyId: playlist.legacyId
      });
      lastPlaylist = data2;
      setPlaylistNotice(`${data2.info.title} \xB7 \u7B2C ${page} \u9875${data2.unavailable ? " \xB7 " + data2.unavailable + " \u9996\u6682\u4E0D\u53EF\u7528" : ""}`);
      if (settings.active() && settings.canDialog()) showPlaylist();
      else toast("\u6B4C\u5355\u6B4C\u66F2\u5DF2\u52A0\u8F7D\uFF0C\u70B9\u51FB\u300C\u6B4C\u5355\u300D\u7EE7\u7EED\u67E5\u770B");
    });
  }
  function playlistMenu() {
    settings.dialog(() => _$createComponent2(api.ui.DialogSelect, {
      title: "\u97F3\u4E50\u6B4C\u5355",
      get options() {
        return [...["all", "qq"].includes(platform()) ? [{
          title: "\u6211\u559C\u6B22 \xB7 QQ\u97F3\u4E50",
          value: "liked",
          description: "\u767B\u5F55\u8D26\u53F7\u7684\u7231\u5FC3\u6B4C\u66F2\uFF0C\u652F\u6301\u5206\u9875"
        }] : [], {
          title: "\u6211\u7684\u6B4C\u5355",
          value: "mine",
          description: "\u4F7F\u7528\u5DF2\u767B\u5F55\u8D26\u53F7\uFF0C\u6309\u5F53\u524D\u5E73\u53F0\u7B5B\u9009"
        }, {
          title: "\u6211\u6536\u85CF\u7684\u6B4C\u5355",
          value: "favorite",
          description: "QQ\u97F3\u4E50 / \u7F51\u6613\u4E91\u6536\u85CF\u6B4C\u5355"
        }, {
          title: "\u641C\u7D22\u6B4C\u5355",
          value: "search",
          description: "\u6309\u540D\u79F0\u641C\u7D22\uFF0C\u652F\u6301\u5168\u90E8\u6216\u5355\u4E2A\u5E73\u53F0"
        }, {
          title: "\u6253\u5F00\u6B4C\u5355\u94FE\u63A5 / ID",
          value: "link",
          description: "\u5B8C\u6574\u94FE\u63A5\uFF0C\u6216 qq:123\u3001netease:123\u3001kugou:ID"
        }, ...lastPlaylist || lastPlaylistList ? [{
          title: "\u7EE7\u7EED\u67E5\u770B\u4E0A\u6B21\u6B4C\u5355",
          value: "resume",
          description: "\u8FD4\u56DE\u4E0A\u6B21\u5217\u8868\u6216\u6B4C\u66F2\u9875"
        }] : [], ...playlistBusy() ? [{
          title: "\u53D6\u6D88\u6B4C\u5355\u67E5\u8BE2",
          value: "cancel",
          description: "\u505C\u6B62\u5F53\u524D\u67E5\u8BE2"
        }] : []];
      },
      onSelect: (item) => {
        settings.close();
        if (item.value === "liked") return loadPlaylist(musicPlaylist({
          platform: "qq",
          id: "liked"
        }));
        if (item.value === "cancel") return cancelPlaylistQuery();
        if (item.value === "resume") return lastPlaylist ? showPlaylist() : showPlaylistList();
        if (item.value === "mine" || item.value === "favorite") return loadPlaylistList({
          mode: "mine",
          platform: platform(),
          collection: item.value === "favorite" ? "favorite" : "created"
        });
        if (item.value === "search") settings.dialog(() => _$createComponent2(api.ui.DialogPrompt, {
          title: "\u641C\u7D22\u6B4C\u5355",
          placeholder: "\u8F93\u5165\u6B4C\u5355\u540D\u79F0\uFF0C\u4F8B\u5982 \u901A\u52E4\u3001\u8F7B\u97F3\u4E50",
          get onCancel() {
            return settings.close;
          },
          onConfirm: (query) => {
            settings.close();
            if (query.trim()) loadPlaylistList({
              mode: "search",
              query: query.trim(),
              platform: platform()
            });
          }
        }));
        else settings.dialog(() => _$createComponent2(api.ui.DialogPrompt, {
          title: "\u6253\u5F00\u6B4C\u5355",
          placeholder: "\u8F93\u5165\u5B8C\u6574\u6B4C\u5355\u94FE\u63A5\uFF0C\u6216 \u5E73\u53F0:\u6B4C\u5355ID",
          get onCancel() {
            return settings.close;
          },
          onConfirm: (value) => {
            settings.close();
            try {
              loadPlaylist(playlistTarget(value, platform() === "all" ? "qq" : platform()));
            } catch (error) {
              failed(error);
            }
          }
        }));
      }
    }));
  }
  function radioMenu() {
    settings.dialog(() => _$createComponent2(api.ui.DialogSelect, {
      title: "QQ\u97F3\u4E50\u79C1\u4EBA\u7535\u53F0",
      get options() {
        return [{
          title: state().radio ? "\u91CD\u65B0\u5F00\u59CB\u79C1\u4EBA\u7535\u53F0" : "\u5F00\u59CB\u79C1\u4EBA\u7535\u53F0",
          value: "start",
          description: "\u4F7F\u7528 QQ \u4E2A\u6027\u63A8\u8350\u7ACB\u5373\u64AD\u653E\uFF0C\u4E0B\u4E00\u9996\u7EE7\u7EED\u5237\u6B4C"
        }, ...state().radio ? [{
          title: "\u9000\u51FA\u79C1\u4EBA\u7535\u53F0",
          value: "stop",
          description: "\u505C\u6B62\u7535\u53F0\uFF0C\u8FD4\u56DE\u539F\u64AD\u653E\u961F\u5217\u5E76\u4FDD\u6301\u6682\u505C"
        }] : [], {
          title: "\u6211\u559C\u6B22",
          value: "liked",
          description: "\u67E5\u770B QQ \u97F3\u4E50\u7231\u5FC3\u6B4C\u66F2"
        }];
      },
      onSelect: (item) => {
        settings.close();
        if (item.value === "liked") return loadPlaylist(musicPlaylist({
          platform: "qq",
          id: "liked"
        }));
        if (item.value === "stop") {
          void controller.stopRadio().catch(failed);
          return;
        }
        setPlaylistNotice("");
        setSearchError("");
        void controller.startRadio().catch(failed);
      }
    }));
  }
  function remove2() {
    if (!state().queue.length) return;
    settings.dialog(() => _$createComponent2(api.ui.DialogSelect, {
      title: "\u6574\u7406\u97F3\u4E50\u961F\u5217",
      get options() {
        return [{
          title: "\u79FB\u9664\u961F\u5217\u5F53\u524D\u6B4C\u66F2",
          value: "remove",
          description: state().queue.find((track) => trackKey(track) === controller.currentKey)?.title || "\u672A\u9009\u62E9\u6B4C\u66F2"
        }, {
          title: "\u6E05\u7A7A\u64AD\u653E\u961F\u5217",
          value: "clear",
          description: "\u505C\u6B62\u64AD\u653E\u5E76\u6E05\u7A7A\u961F\u5217"
        }];
      },
      onSelect: (item) => {
        settings.close();
        if (item.value === "remove") void controller.remove().catch(failed);
        else settings.dialog(() => _$createComponent2(api.ui.DialogConfirm, {
          title: "\u6E05\u7A7A\u64AD\u653E\u961F\u5217",
          message: "\u505C\u6B62\u97F3\u4E50\u5E76\u79FB\u9664\u961F\u5217\u91CC\u7684\u5168\u90E8\u6B4C\u66F2\uFF1F\u5E73\u53F0\u8D26\u53F7\u548C\u6536\u85CF\u4E0D\u53D7\u5F71\u54CD\u3002",
          get onCancel() {
            return settings.close;
          },
          onConfirm: () => {
            settings.close();
            void controller.clear().catch(failed);
          }
        }));
      }
    }));
  }
  function cancelLogin() {
    loginAbort?.abort();
    loginAbort = void 0;
    loginPlatform = "";
    setLoginBusy(false);
    setLoginStatus("");
  }
  function startLogin(source) {
    cancelLogin();
    const abort = loginAbort = new AbortController();
    loginPlatform = source;
    setLoginBusy(true);
    setLoginStatus(`${musicPlatform(source).name}\uFF1A\u6B63\u5728\u751F\u6210\u4E8C\u7EF4\u7801\u2026`);
    const task = (async () => {
      let page;
      try {
        await service.login(source, {
          signal: abort.signal,
          onSession: async (session) => {
            page = await musicLoginPage(session);
            abort.signal.throwIfAborted();
            await openMusicPage(page.url);
          },
          onStatus: (status) => {
            if (abort.signal.aborted) return;
            const message = status === "authorizing" ? "\u624B\u673A\u5DF2\u786E\u8BA4\uFF0C\u6B63\u5728\u83B7\u53D6\u6388\u6743\u2026" : status === "exchanging" ? "\u6B63\u5728\u6362\u53D6 QQ\u97F3\u4E50\u767B\u5F55\u6001\u2026" : status === "scanned" ? "\u5DF2\u626B\u7801\uFF0C\u8BF7\u5728\u624B\u673A\u786E\u8BA4" : source === "qq" ? "\u8BF7\u7528\u624B\u673A QQ \u626B\u63CF\u6D4F\u89C8\u5668\u91CC\u7684\u4E8C\u7EF4\u7801" : "\u8BF7\u7528\u624B\u673A App \u626B\u63CF\u6D4F\u89C8\u5668\u91CC\u7684\u4E8C\u7EF4\u7801";
            setLoginStatus(`${musicPlatform(source).name}\uFF1A${message}`);
          }
        });
        if (abort.signal.aborted) return;
        await refreshAccounts();
        setLoginStatus(`${musicPlatform(source).name}\uFF1A\u767B\u5F55\u6210\u529F\uFF0C\u767B\u5F55\u6001\u5DF2\u52A0\u5BC6\u4FDD\u5B58`);
        toast(`${musicPlatform(source).name}\u767B\u5F55\u6001\u5DF2\u52A0\u5BC6\u4FDD\u5B58`);
      } catch (error) {
        if (!abort.signal.aborted && !api.lifecycle.signal.aborted) {
          setLoginStatus(`${musicPlatform(source).name}\u767B\u5F55\u5931\u8D25\uFF1A${error instanceof Error ? error.message : "\u8BF7\u91CD\u65B0\u626B\u7801"}`);
          failed(error);
        }
      } finally {
        await page?.release().catch(() => {
        });
        if (loginAbort === abort) {
          loginAbort = void 0;
          loginPlatform = "";
          setLoginBusy(false);
        }
      }
    })();
    loginTasks.add(task);
    void task.finally(() => loginTasks.delete(task)).catch(() => {
    });
  }
  function importCookie(source) {
    settings.dialog(() => _$createComponent2(api.ui.DialogPrompt, {
      get title() {
        return `${musicPlatform(source).name} \xB7 \u5BFC\u5165\u7F51\u9875\u767B\u5F55\u6001`;
      },
      placeholder: "\u7C98\u8D34 Cookie\uFF0C\u4EC5\u5728\u672C\u5730\u52A0\u5BC6\u4FDD\u5B58\uFF0C\u4E0D\u4F1A\u53D1\u9001\u5230\u6A21\u578B\u804A\u5929",
      get onCancel() {
        return settings.close;
      },
      onConfirm: (cookie) => {
        settings.close();
        if (loginPlatform === source) cancelLogin();
        void service.saveAccount(source, cookie).then(refreshAccounts).then(() => toast("\u767B\u5F55\u6001\u5DF2\u5BFC\u5165\uFF0C\u5B9E\u9645\u64AD\u653E\u6743\u9650\u53CA\u6709\u6548\u671F\u7531\u5E73\u53F0\u51B3\u5B9A")).catch(failed);
      }
    }));
  }
  function accountMenu(source) {
    const current = accounts()[source];
    settings.dialog(() => _$createComponent2(api.ui.DialogSelect, {
      get title() {
        return `${musicPlatform(source).name} \xB7 ${current?.configured ? current.method === "qr" ? "\u5DF2\u626B\u7801\u4FDD\u5B58" : "\u5DF2\u5BFC\u5165\u767B\u5F55\u6001" : "\u672A\u767B\u5F55"}`;
      },
      get options() {
        return [...musicPlatform(source).qr ? [{
          title: source === "qq" ? "\u624B\u673A QQ \u626B\u7801\u767B\u5F55" : "\u624B\u673A App \u626B\u7801\u767B\u5F55",
          value: "qr",
          description: "\u5728\u9ED8\u8BA4\u6D4F\u89C8\u5668\u663E\u793A\u4E8C\u7EF4\u7801\uFF0C\u786E\u8BA4\u540E\u81EA\u52A8\u4FDD\u5B58"
        }] : [], {
          title: "\u5BFC\u5165\u7F51\u9875\u767B\u5F55\u6001",
          value: "cookie",
          description: "\u5728\u5E73\u53F0\u5B98\u7F51\u767B\u5F55\u540E\u590D\u5236\u8BF7\u6C42\u4E2D\u7684 Cookie"
        }, {
          title: "\u6253\u5F00\u5E73\u53F0\u5B98\u7F51",
          value: "home",
          description: "\u4F7F\u7528\u9ED8\u8BA4\u6D4F\u89C8\u5668"
        }, ...loginPlatform === source ? [{
          title: "\u53D6\u6D88\u672C\u6B21\u626B\u7801",
          value: "cancel",
          description: "\u505C\u6B62\u63A5\u6536\u8FD9\u6B21\u626B\u7801\u7684\u767B\u5F55\u7ED3\u679C"
        }] : [], ...current?.configured ? [{
          title: "\u9000\u51FA\u672C\u5730\u8D26\u53F7",
          value: "logout",
          description: "\u5220\u9664\u6B64\u5904\u4FDD\u5B58\u7684\u767B\u5F55\u6001\uFF0C\u4FDD\u7559\u5E73\u53F0\u8D26\u53F7"
        }] : []];
      },
      onSelect: (item) => {
        settings.close();
        if (item.value === "qr") startLogin(source);
        else if (item.value === "cookie") importCookie(source);
        else if (item.value === "home") void openMusicPage(musicPlatform(source).home).catch(failed);
        else if (item.value === "cancel") cancelLogin();
        else settings.dialog(() => _$createComponent2(api.ui.DialogConfirm, {
          get title() {
            return `\u9000\u51FA${musicPlatform(source).name}`;
          },
          message: "\u5220\u9664\u672C\u5730\u4FDD\u5B58\u7684\u767B\u5F55\u6001\uFF1F\u4F7F\u7528\u8BE5\u5E73\u53F0\u64AD\u653E\u4E2D\u7684\u97F3\u4E50\u4F1A\u6682\u505C\u3002",
          get onCancel() {
            return settings.close;
          },
          onConfirm: () => {
            settings.close();
            if (loginPlatform === source) cancelLogin();
            if (state().current?.platform === source) void controller.pause();
            void service.logout(source).then(refreshAccounts).then(() => toast("\u5DF2\u5220\u9664\u672C\u5730\u767B\u5F55\u6001")).catch(failed);
          }
        }));
      }
    }));
  }
  async function accountsMenu() {
    try {
      await refreshAccounts();
    } catch (error) {
      failed(error);
      return;
    }
    if (api.lifecycle.signal.aborted) return;
    settings.dialog(() => _$createComponent2(api.ui.DialogSelect, {
      title: "\u97F3\u4E50\u8D26\u53F7 \xB7 \u5404\u5E73\u53F0\u72EC\u7ACB\u767B\u5F55",
      get options() {
        return MUSIC_PLATFORMS.map((source) => ({
          title: source.name,
          value: source.id,
          description: accounts()[source.id]?.configured ? `${accounts()[source.id].method === "qr" ? "\u5DF2\u626B\u7801\u4FDD\u5B58" : "\u5DF2\u5BFC\u5165\u767B\u5F55\u6001"}${accounts()[source.id].nickname ? " \xB7 " + accounts()[source.id].nickname : ""}` : source.id === "qq" ? "\u672A\u767B\u5F55 \xB7 \u652F\u6301\u624B\u673A QQ \u626B\u7801" : "\u672A\u767B\u5F55 \xB7 \u652F\u6301 App \u626B\u7801\u6216 Cookie"
        }));
      },
      onSelect: (item) => {
        settings.close();
        accountMenu(item.value);
      }
    }));
  }
  function View(props) {
    const Button = props.Button, theme = () => api.theme.current;
    const visibleQueue = () => state().queue.slice(0, Math.max(0, settings.rows() - 11));
    return (() => {
      var _el$ = _$createElement2("box"), _el$2 = _$createElement2("box"), _el$5 = _$createElement2("text"), _el$6 = _$createElement2("box");
      _$insertNode2(_el$, _el$2);
      _$insertNode2(_el$, _el$5);
      _$insertNode2(_el$, _el$6);
      _$setProp2(_el$, "flexShrink", 0);
      _$setProp2(_el$2, "flexShrink", 0);
      _$setProp2(_el$2, "height", 1);
      _$setProp2(_el$2, "flexDirection", "row");
      _$setProp2(_el$2, "gap", 1);
      _$insert2(_el$2, _$createComponent2(Button, {
        label: "[\u5168\u90E8]",
        action: () => choosePlatform("all"),
        get muted() {
          return platform() !== "all";
        }
      }), null);
      _$insert2(_el$2, _$createComponent2(For, {
        each: MUSIC_PLATFORMS,
        children: (source) => _$createComponent2(Button, {
          get label() {
            return `[${source.id === "netease" ? "\u7F51\u6613" : source.id === "qq" ? "QQ" : "\u9177\u72D7"}]`;
          },
          action: () => choosePlatform(source.id),
          get muted() {
            return platform() !== source.id;
          }
        })
      }), null);
      _$insert2(_el$2, _$createComponent2(Button, {
        get label() {
          return playlistBusy() ? "[\u6B4C\u5355\u2026]" : "[\u6B4C\u5355]";
        },
        action: playlistMenu
      }), null);
      _$insert2(_el$, _$createComponent2(Show2, {
        get when() {
          return settings.rows() >= 7;
        },
        get children() {
          return [(() => {
            var _el$3 = _$createElement2("text");
            _$setProp2(_el$3, "height", 1);
            _$setProp2(_el$3, "wrapMode", "none");
            _$insert2(_el$3, () => state().current?.title || (state().radio ? "QQ\u79C1\u4EBA\u7535\u53F0" : "\u641C\u4E00\u9996\u559C\u6B22\u7684\u6B4C"));
            _$effect2((_$p) => _$setProp2(_el$3, "fg", theme().text, _$p));
            return _el$3;
          })(), (() => {
            var _el$4 = _$createElement2("text");
            _$setProp2(_el$4, "height", 1);
            _$setProp2(_el$4, "wrapMode", "none");
            _$insert2(_el$4, (() => {
              var _c$ = _$memo2(() => !!state().radio);
              return () => _c$() ? `QQ\u79C1\u4EBA\u7535\u53F0${state().current ? " \xB7 " + state().current.artist : " \xB7 \u6B63\u5728\u83B7\u53D6\u63A8\u8350"}${state().preview ? " \xB7 \u8BD5\u542C" : ""}` : _$memo2(() => !!state().current)() ? `${musicPlatform(state().current.platform).name} \xB7 ${state().current.artist}${state().preview ? " \xB7 \u8BD5\u542C" : ""}` : "\u7F51\u6613\u4E91 / QQ\u97F3\u4E50 / \u9177\u72D7";
            })());
            _$effect2((_$p) => _$setProp2(_el$4, "fg", theme().textMuted, _$p));
            return _el$4;
          })()];
        }
      }), _el$5);
      _$setProp2(_el$5, "height", 1);
      _$setProp2(_el$5, "wrapMode", "none");
      _$insert2(_el$5, (() => {
        var _c$2 = _$memo2(() => !!state().busy);
        return () => _c$2() ? "\u6B63\u5728\u52A0\u8F7D\u97F3\u9891\u2026" : `${mediaTime(state().position)} / ${mediaTime(state().duration || state().current?.duration || 0)} \xB7 \u97F3\u91CF ${state().volume}%`;
      })());
      _$setProp2(_el$6, "flexShrink", 0);
      _$setProp2(_el$6, "height", 1);
      _$setProp2(_el$6, "flexDirection", "row");
      _$setProp2(_el$6, "gap", 1);
      _$insert2(_el$6, _$createComponent2(Button, {
        label: "[\u4E0A\u4E00\u9996]",
        action: () => controller.next(-1)
      }), null);
      _$insert2(_el$6, _$createComponent2(Button, {
        get label() {
          return _$memo2(() => !!state().busy)() ? "[\u53D6\u6D88]" : state().playing ? "[\u6682\u505C]" : "[\u64AD\u653E]";
        },
        action: () => state().radio || state().queue.length ? controller.toggle() : promptSearch()
      }), null);
      _$insert2(_el$6, _$createComponent2(Button, {
        label: "[\u4E0B\u4E00\u9996]",
        action: () => controller.next(1)
      }), null);
      _$insert2(_el$, _$createComponent2(Show2, {
        get when() {
          return settings.rows() >= 6;
        },
        get children() {
          var _el$7 = _$createElement2("box");
          _$setProp2(_el$7, "flexShrink", 0);
          _$setProp2(_el$7, "height", 1);
          _$setProp2(_el$7, "flexDirection", "row");
          _$setProp2(_el$7, "gap", 1);
          _$insert2(_el$7, _$createComponent2(Button, {
            label: "[\u221210s]",
            action: () => controller.seek(-10)
          }), null);
          _$insert2(_el$7, _$createComponent2(Button, {
            label: "[+10s]",
            action: () => controller.seek(10)
          }), null);
          _$insert2(_el$7, _$createComponent2(Button, {
            label: "[\u97F3\u2212]",
            action: () => controller.volume(state().volume - 10)
          }), null);
          _$insert2(_el$7, _$createComponent2(Button, {
            label: "[\u97F3+]",
            action: () => controller.volume(state().volume + 10)
          }), null);
          return _el$7;
        }
      }), null);
      _$insert2(_el$, _$createComponent2(Show2, {
        get when() {
          return settings.rows() >= 9;
        },
        get children() {
          return [(() => {
            var _el$8 = _$createElement2("box");
            _$setProp2(_el$8, "flexShrink", 0);
            _$setProp2(_el$8, "height", 1);
            _$setProp2(_el$8, "flexDirection", "row");
            _$setProp2(_el$8, "gap", 1);
            _$insert2(_el$8, _$createComponent2(Button, {
              get label() {
                return _$memo2(() => !!state().radio)() ? "[\u79C1\u4EBA\u7535\u53F0]" : state().repeat === "one" ? "[\u5355\u66F2\u5FAA\u73AF]" : "[\u5217\u8868\u5FAA\u73AF]";
              },
              action: () => state().radio ? radioMenu() : controller.cycleRepeat()
            }), null);
            _$insert2(_el$8, _$createComponent2(Button, {
              label: "[\u6574\u7406\u961F\u5217]",
              action: remove2
            }), null);
            _$insert2(_el$8, _$createComponent2(Button, {
              get label() {
                return state().radio ? "[\u9000\u51FA\u7535\u53F0]" : "[QQ\u7535\u53F0]";
              },
              action: () => state().radio ? controller.stopRadio() : radioMenu()
            }), null);
            return _el$8;
          })(), (() => {
            var _el$9 = _$createElement2("text");
            _$setProp2(_el$9, "height", 2);
            _$setProp2(_el$9, "wrapMode", "word");
            _$insert2(_el$9, () => (loginBusy() ? loginStatus() : "") || playlistNotice() || state().error || (searching() ? "\u6B63\u5728\u641C\u7D22\u97F3\u4E50\u2026" : searchError()) || loginStatus() || "\u5168\u5C40\u5171\u4EAB\u64AD\u653E\uFF1B\u5C0F\u8BF4\u53EF\u4F34\u968F\u97F3\u4E50\uFF0C\u89C6\u9891\u4F18\u5148\u3002");
            _$effect2((_$p) => _$setProp2(_el$9, "fg", theme().textMuted, _$p));
            return _el$9;
          })(), _$createComponent2(Show2, {
            get when() {
              return loginBusy();
            },
            get children() {
              return _$createComponent2(Button, {
                label: "[\u53D6\u6D88\u626B\u7801]",
                action: cancelLogin
              });
            }
          }), _$createComponent2(Show2, {
            get when() {
              return playlistBusy();
            },
            get children() {
              return _$createComponent2(Button, {
                label: "[\u53D6\u6D88\u6B4C\u5355\u67E5\u8BE2]",
                action: cancelPlaylistQuery
              });
            }
          })];
        }
      }), null);
      _$insert2(_el$, _$createComponent2(For, {
        get each() {
          return visibleQueue();
        },
        children: (track) => (() => {
          var _el$0 = _$createElement2("box");
          _$setProp2(_el$0, "height", 1);
          _$setProp2(_el$0, "flexShrink", 0);
          _$insert2(_el$0, _$createComponent2(Button, {
            get label() {
              return `${state().current && trackKey(track) === trackKey(state().current) ? "\u266A " : "  "}${track.title} \xB7 ${musicPlatform(track.platform).name}`;
            },
            action: () => action(track),
            get muted() {
              return _$memo2(() => !!state().current)() && trackKey(track) !== trackKey(state().current);
            }
          }));
          return _el$0;
        })()
      }), null);
      _$effect2((_p$) => {
        var _v$ = settings.rows(), _v$2 = settings.rows(), _v$3 = theme().textMuted;
        _v$ !== _p$.e && (_p$.e = _$setProp2(_el$, "height", _v$, _p$.e));
        _v$2 !== _p$.t && (_p$.t = _$setProp2(_el$, "minHeight", _v$2, _p$.t));
        _v$3 !== _p$.a && (_p$.a = _$setProp2(_el$5, "fg", _v$3, _p$.a));
        return _p$;
      }, {
        e: void 0,
        t: void 0,
        a: void 0
      });
      return _el$;
    })();
  }
  function jump() {
    if (!state().current || !state().duration) return;
    settings.dialog(() => _$createComponent2(api.ui.DialogPrompt, {
      title: "\u8DF3\u8F6C\u97F3\u4E50 \xB7 \u8F93\u5165\u79D2\u6570",
      get placeholder() {
        return `0\u2013${Math.floor(state().duration)}`;
      },
      get onCancel() {
        return settings.close;
      },
      onConfirm: (value) => {
        settings.close();
        const seconds = Number(value);
        if (!Number.isFinite(seconds) || seconds < 0 || seconds > state().duration) {
          toast("\u8BF7\u8F93\u5165\u97F3\u9891\u65F6\u957F\u8303\u56F4\u5185\u7684\u79D2\u6570", true);
          return;
        }
        void controller.seek(seconds - state().position);
      }
    }));
  }
  return {
    ready,
    View,
    search: promptSearch,
    results: showResults,
    queue,
    playlists: playlistMenu,
    accounts: accountsMenu,
    login: startLogin,
    state,
    pause: () => controller.pause(),
    seek: (delta) => controller.seek(delta),
    jump,
    remove: remove2,
    async dispose() {
      unsubscribe();
      searchAbort?.abort();
      playlistAbort?.abort();
      cancelLogin();
      await Promise.allSettled([...loginTasks]);
      await Promise.allSettled([...service.accountWrites.values()]);
    }
  };
}

// src/ui/shopping.tsx
import { effect as _$effect3 } from "@opentui/solid";
import { createTextNode as _$createTextNode2 } from "@opentui/solid";
import { insertNode as _$insertNode3 } from "@opentui/solid";
import { insert as _$insert3 } from "@opentui/solid";
import { setProp as _$setProp3 } from "@opentui/solid";
import { createElement as _$createElement3 } from "@opentui/solid";
import { memo as _$memo3 } from "@opentui/solid";
import { createComponent as _$createComponent3 } from "@opentui/solid";
import { createSignal as createSignal3, For as For2, Show as Show3 } from "solid-js";

// src/shopping/settings.mjs
import { mkdir as mkdir7, readFile as readFile6, readdir as readdir7, unlink as unlink4 } from "node:fs/promises";
import { join as join11 } from "node:path";

// src/shopping/contracts.mjs
import { createHash as createHash5 } from "node:crypto";
var SHOPPING_SOURCES = [
  { id: "manmanbuy", name: "\u6162\u6162\u4E70\u597D\u4EF7", origin: "https://s.manmanbuy.com", credential: false },
  { id: "jd", name: "\u4EAC\u4E1C\u8054\u76DF", origin: "https://api.jd.com", credential: true },
  { id: "taobao", name: "\u6DD8\u5B9D / \u5929\u732B\u8054\u76DF", origin: "https://eco.taobao.com", credential: true }
];
function shoppingSource(id) {
  const source = SHOPPING_SOURCES.find((item) => item.id === id);
  if (!source) throw new Error("\u4E0D\u652F\u6301\u7684\u8D2D\u7269\u6765\u6E90");
  return source;
}
function cleanText2(input, max = 300) {
  return String(input ?? "").replace(/<[^>]*>/g, "").replace(/[\x00-\x1f\x7f-\x9f\u202a-\u202e\u2066-\u2069]/g, "").replace(/\s+/gu, " ").trim().slice(0, max);
}
function cents(input) {
  const text4 = String(input ?? "").trim();
  if (!/^\d{1,9}(?:\.\d{1,2})?$/.test(text4)) return null;
  const [whole, fraction = ""] = text4.split(".");
  return Number(whole) * 100 + Number(fraction.padEnd(2, "0"));
}
var money = (value) => Number.isSafeInteger(value) && value >= 0 ? `\xA5${(value / 100).toFixed(2)}` : "\u4EF7\u683C\u5F85\u786E\u8BA4";
var domains = ["jd.com", "3.cn", "taobao.com", "tmall.com", "tb.cn", "alimama.com", "manmanbuy.com"];
function shoppingUrl(input, base) {
  try {
    if (typeof input !== "string" || !input || input.length > 4e3) return "";
    const url = new URL(input.startsWith("//") ? "https:" + input : input, base);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.port) return "";
    if (!domains.some((domain) => url.hostname === domain || url.hostname.endsWith("." + domain))) return "";
    url.protocol = "https:";
    return url.href;
  } catch {
    return "";
  }
}
function offerKey(offer) {
  shoppingSource(offer.source);
  return createHash5("sha256").update(offer.source + ":" + offer.id).digest("hex").slice(0, 32);
}
function shoppingOffer(value) {
  shoppingSource(value.source);
  const id = cleanText2(value.id, 120), title = cleanText2(value.title, 180), sourceUrl = shoppingUrl(value.sourceUrl);
  if (!id || !title || !sourceUrl) throw new Error("\u5546\u54C1\u8D44\u6599\u7F3A\u5C11\u6709\u6548\u6765\u6E90\u6216\u6807\u9898");
  const amount = (v) => Number.isSafeInteger(v) && v >= 0 && v <= 99999999999 ? v : null;
  const coupons = (Array.isArray(value.coupons) ? value.coupons : []).slice(0, 8).map((coupon) => ({
    title: cleanText2(coupon.title, 120),
    amountCents: amount(coupon.amountCents),
    thresholdCents: amount(coupon.thresholdCents),
    url: shoppingUrl(coupon.url),
    startsAt: cleanText2(coupon.startsAt, 40),
    endsAt: cleanText2(coupon.endsAt, 40)
  }));
  return {
    source: value.source,
    id,
    title,
    platform: cleanText2(value.platform, 24),
    shop: cleanText2(value.shop, 80),
    sourceUrl,
    priceCents: amount(value.priceCents),
    priceLabel: cleanText2(value.priceLabel, 30),
    shippingCents: amount(value.shippingCents),
    conditions: cleanText2(value.conditions, 500),
    publishedAt: cleanText2(value.publishedAt, 40),
    observedAt: cleanText2(value.observedAt, 40),
    couponMentioned: value.couponMentioned === true,
    coupons
  };
}
function couponAvailable(coupon, now = Date.now()) {
  const start = Date.parse(coupon.startsAt), end2 = Date.parse(coupon.endsAt);
  return Boolean(coupon.url) && (!Number.isFinite(start) || start <= now) && (!Number.isFinite(end2) || end2 >= now);
}

// src/shopping/settings.mjs
var ShoppingSettings = class {
  constructor(library) {
    this.library = library;
    this.directory = join11(library.internal, "shopping");
  }
  async read(name, fallback) {
    try {
      return await this.library.vault.unseal(await readFile6(join11(this.directory, name + ".enc")));
    } catch (error) {
      if (error.code === "ENOENT") return fallback;
      throw error;
    }
  }
  async write(name, value) {
    await mkdir7(this.directory, { recursive: true, mode: 448 });
    await atomicWrite(join11(this.directory, name + ".enc"), await this.library.vault.seal(value));
  }
  async credentials(source) {
    shoppingSource(source);
    return this.read("config-" + source, null);
  }
  async status(source) {
    return { source, configured: Boolean(await this.credentials(source)) };
  }
  async saveCredentials(source, input) {
    if (!shoppingSource(source).credential) throw new Error("\u8FD9\u4E2A\u6765\u6E90\u4E0D\u9700\u8981\u5BC6\u94A5");
    if (typeof input === "string" && input.length > 4096) throw new Error("\u5E94\u7528\u914D\u7F6E\u8FC7\u957F");
    let value;
    try {
      value = typeof input === "string" ? JSON.parse(input) : input;
    } catch {
      throw new Error("\u914D\u7F6E\u9700\u8981\u5B8C\u6574 JSON\uFF0C\u5305\u542B appKey\u3001appSecret\uFF1B\u6DD8\u5B9D\u8FD8\u9700\u8981 adzoneId");
    }
    const keys = source === "taobao" ? ["appKey", "appSecret", "adzoneId"] : ["appKey", "appSecret"];
    const config = {};
    for (const key of keys) {
      const field = typeof value?.[key] === "string" ? value[key].trim() : "";
      if (!/^[A-Za-z0-9_-]{1,200}$/.test(field) || key === "adzoneId" && !/^\d{1,20}$/.test(field)) throw new Error(`\u8BF7\u586B\u5199\u6709\u6548\u7684 ${key}`);
      config[key] = field;
    }
    await this.write("config-" + source, config);
    return this.status(source);
  }
  async removeCredentials(source) {
    shoppingSource(source);
    await this.remove("config-" + source);
    return this.status(source);
  }
  async remove(name) {
    await unlink4(join11(this.directory, name + ".enc")).catch((error) => {
      if (error.code !== "ENOENT") throw error;
    });
  }
  async favorites() {
    let names;
    try {
      names = await readdir7(this.directory);
    } catch (error) {
      if (error.code === "ENOENT") return [];
      throw error;
    }
    const offers = [];
    for (const name of names.filter((name2) => /^favorite-[a-f0-9]{32}\.enc$/.test(name2))) {
      const item = await this.read(name.slice(0, -4), null);
      if (item) offers.push(shoppingOffer(item));
    }
    return offers.sort((a, b) => b.observedAt.localeCompare(a.observedAt));
  }
  saveFavorite(offer) {
    const value = shoppingOffer(offer);
    return this.write("favorite-" + offerKey(value), value);
  }
  removeFavorite(offer) {
    return this.remove("favorite-" + offerKey(offer));
  }
};

// src/shopping/providers.mjs
import { createHash as createHash6 } from "node:crypto";

// node_modules/cheerio/dist/esm/options.js
var defaultOpts = {
  _useHtmlParser2: false
};
function flattenOptions(options, baseOptions) {
  if (!options) {
    return baseOptions !== null && baseOptions !== void 0 ? baseOptions : defaultOpts;
  }
  const opts = {
    _useHtmlParser2: !!options.xmlMode,
    ...baseOptions,
    ...options
  };
  if (options.xml) {
    opts._useHtmlParser2 = true;
    opts.xmlMode = true;
    if (options.xml !== true) {
      Object.assign(opts, options.xml);
    }
  } else if (options.xmlMode) {
    opts._useHtmlParser2 = true;
  }
  return opts;
}

// node_modules/cheerio/dist/esm/static.js
var static_exports = {};
__export(static_exports, {
  contains: () => contains,
  extract: () => extract,
  html: () => html,
  merge: () => merge,
  parseHTML: () => parseHTML,
  root: () => root,
  text: () => text2,
  xml: () => xml
});

// node_modules/domutils/lib/esm/index.js
var esm_exports2 = {};
__export(esm_exports2, {
  DocumentPosition: () => DocumentPosition,
  append: () => append,
  appendChild: () => appendChild,
  compareDocumentPosition: () => compareDocumentPosition,
  existsOne: () => existsOne,
  filter: () => filter,
  find: () => find,
  findAll: () => findAll,
  findOne: () => findOne,
  findOneChild: () => findOneChild,
  getAttributeValue: () => getAttributeValue,
  getChildren: () => getChildren,
  getElementById: () => getElementById,
  getElements: () => getElements,
  getElementsByClassName: () => getElementsByClassName,
  getElementsByTagName: () => getElementsByTagName,
  getElementsByTagType: () => getElementsByTagType,
  getFeed: () => getFeed,
  getInnerHTML: () => getInnerHTML,
  getName: () => getName,
  getOuterHTML: () => getOuterHTML,
  getParent: () => getParent,
  getSiblings: () => getSiblings,
  getText: () => getText,
  hasAttrib: () => hasAttrib,
  hasChildren: () => hasChildren,
  innerText: () => innerText,
  isCDATA: () => isCDATA,
  isComment: () => isComment,
  isDocument: () => isDocument,
  isTag: () => isTag2,
  isText: () => isText,
  nextElementSibling: () => nextElementSibling,
  prepend: () => prepend,
  prependChild: () => prependChild,
  prevElementSibling: () => prevElementSibling,
  removeElement: () => removeElement,
  removeSubsets: () => removeSubsets,
  replaceElement: () => replaceElement,
  testElement: () => testElement,
  textContent: () => textContent,
  uniqueSort: () => uniqueSort
});

// node_modules/domelementtype/lib/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  CDATA: () => CDATA,
  Comment: () => Comment,
  Directive: () => Directive,
  Doctype: () => Doctype,
  ElementType: () => ElementType,
  Root: () => Root,
  Script: () => Script,
  Style: () => Style,
  Tag: () => Tag,
  Text: () => Text,
  isTag: () => isTag
});
var ElementType;
(function(ElementType2) {
  ElementType2["Root"] = "root";
  ElementType2["Text"] = "text";
  ElementType2["Directive"] = "directive";
  ElementType2["Comment"] = "comment";
  ElementType2["Script"] = "script";
  ElementType2["Style"] = "style";
  ElementType2["Tag"] = "tag";
  ElementType2["CDATA"] = "cdata";
  ElementType2["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
function isTag(elem) {
  return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
var Root = ElementType.Root;
var Text = ElementType.Text;
var Directive = ElementType.Directive;
var Comment = ElementType.Comment;
var Script = ElementType.Script;
var Style = ElementType.Style;
var Tag = ElementType.Tag;
var CDATA = ElementType.CDATA;
var Doctype = ElementType.Doctype;

// node_modules/domhandler/lib/esm/node.js
var Node = class {
  constructor() {
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.startIndex = null;
    this.endIndex = null;
  }
  // Read-write aliases for properties
  /**
   * Same as {@link parent}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get parentNode() {
    return this.parent;
  }
  set parentNode(parent2) {
    this.parent = parent2;
  }
  /**
   * Same as {@link prev}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get previousSibling() {
    return this.prev;
  }
  set previousSibling(prev2) {
    this.prev = prev2;
  }
  /**
   * Same as {@link next}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nextSibling() {
    return this.next;
  }
  set nextSibling(next2) {
    this.next = next2;
  }
  /**
   * Clone this node, and optionally its children.
   *
   * @param recursive Clone child nodes as well.
   * @returns A clone of the node.
   */
  cloneNode(recursive = false) {
    return cloneNode(this, recursive);
  }
};
var DataNode = class extends Node {
  /**
   * @param data The content of the data node
   */
  constructor(data2) {
    super();
    this.data = data2;
  }
  /**
   * Same as {@link data}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nodeValue() {
    return this.data;
  }
  set nodeValue(data2) {
    this.data = data2;
  }
};
var Text2 = class extends DataNode {
  constructor() {
    super(...arguments);
    this.type = ElementType.Text;
  }
  get nodeType() {
    return 3;
  }
};
var Comment2 = class extends DataNode {
  constructor() {
    super(...arguments);
    this.type = ElementType.Comment;
  }
  get nodeType() {
    return 8;
  }
};
var ProcessingInstruction = class extends DataNode {
  constructor(name, data2) {
    super(data2);
    this.name = name;
    this.type = ElementType.Directive;
  }
  get nodeType() {
    return 1;
  }
};
var NodeWithChildren = class extends Node {
  /**
   * @param children Children of the node. Only certain node types can have children.
   */
  constructor(children2) {
    super();
    this.children = children2;
  }
  // Aliases
  /** First child of the node. */
  get firstChild() {
    var _a4;
    return (_a4 = this.children[0]) !== null && _a4 !== void 0 ? _a4 : null;
  }
  /** Last child of the node. */
  get lastChild() {
    return this.children.length > 0 ? this.children[this.children.length - 1] : null;
  }
  /**
   * Same as {@link children}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get childNodes() {
    return this.children;
  }
  set childNodes(children2) {
    this.children = children2;
  }
};
var CDATA2 = class extends NodeWithChildren {
  constructor() {
    super(...arguments);
    this.type = ElementType.CDATA;
  }
  get nodeType() {
    return 4;
  }
};
var Document = class extends NodeWithChildren {
  constructor() {
    super(...arguments);
    this.type = ElementType.Root;
  }
  get nodeType() {
    return 9;
  }
};
var Element = class extends NodeWithChildren {
  /**
   * @param name Name of the tag, eg. `div`, `span`.
   * @param attribs Object mapping attribute names to attribute values.
   * @param children Children of the node.
   */
  constructor(name, attribs, children2 = [], type = name === "script" ? ElementType.Script : name === "style" ? ElementType.Style : ElementType.Tag) {
    super(children2);
    this.name = name;
    this.attribs = attribs;
    this.type = type;
  }
  get nodeType() {
    return 1;
  }
  // DOM Level 1 aliases
  /**
   * Same as {@link name}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get tagName() {
    return this.name;
  }
  set tagName(name) {
    this.name = name;
  }
  get attributes() {
    return Object.keys(this.attribs).map((name) => {
      var _a4, _b;
      return {
        name,
        value: this.attribs[name],
        namespace: (_a4 = this["x-attribsNamespace"]) === null || _a4 === void 0 ? void 0 : _a4[name],
        prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
      };
    });
  }
};
function isTag2(node) {
  return isTag(node);
}
function isCDATA(node) {
  return node.type === ElementType.CDATA;
}
function isText(node) {
  return node.type === ElementType.Text;
}
function isComment(node) {
  return node.type === ElementType.Comment;
}
function isDirective(node) {
  return node.type === ElementType.Directive;
}
function isDocument(node) {
  return node.type === ElementType.Root;
}
function hasChildren(node) {
  return Object.prototype.hasOwnProperty.call(node, "children");
}
function cloneNode(node, recursive = false) {
  let result;
  if (isText(node)) {
    result = new Text2(node.data);
  } else if (isComment(node)) {
    result = new Comment2(node.data);
  } else if (isTag2(node)) {
    const children2 = recursive ? cloneChildren(node.children) : [];
    const clone2 = new Element(node.name, { ...node.attribs }, children2);
    children2.forEach((child) => child.parent = clone2);
    if (node.namespace != null) {
      clone2.namespace = node.namespace;
    }
    if (node["x-attribsNamespace"]) {
      clone2["x-attribsNamespace"] = { ...node["x-attribsNamespace"] };
    }
    if (node["x-attribsPrefix"]) {
      clone2["x-attribsPrefix"] = { ...node["x-attribsPrefix"] };
    }
    result = clone2;
  } else if (isCDATA(node)) {
    const children2 = recursive ? cloneChildren(node.children) : [];
    const clone2 = new CDATA2(children2);
    children2.forEach((child) => child.parent = clone2);
    result = clone2;
  } else if (isDocument(node)) {
    const children2 = recursive ? cloneChildren(node.children) : [];
    const clone2 = new Document(children2);
    children2.forEach((child) => child.parent = clone2);
    if (node["x-mode"]) {
      clone2["x-mode"] = node["x-mode"];
    }
    result = clone2;
  } else if (isDirective(node)) {
    const instruction = new ProcessingInstruction(node.name, node.data);
    if (node["x-name"] != null) {
      instruction["x-name"] = node["x-name"];
      instruction["x-publicId"] = node["x-publicId"];
      instruction["x-systemId"] = node["x-systemId"];
    }
    result = instruction;
  } else {
    throw new Error(`Not implemented yet: ${node.type}`);
  }
  result.startIndex = node.startIndex;
  result.endIndex = node.endIndex;
  if (node.sourceCodeLocation != null) {
    result.sourceCodeLocation = node.sourceCodeLocation;
  }
  return result;
}
function cloneChildren(childs) {
  const children2 = childs.map((child) => cloneNode(child, true));
  for (let i = 1; i < children2.length; i++) {
    children2[i].prev = children2[i - 1];
    children2[i - 1].next = children2[i];
  }
  return children2;
}

// node_modules/domhandler/lib/esm/index.js
var defaultOpts2 = {
  withStartIndices: false,
  withEndIndices: false,
  xmlMode: false
};
var DomHandler = class {
  /**
   * @param callback Called once parsing has completed.
   * @param options Settings for the handler.
   * @param elementCB Callback whenever a tag is closed.
   */
  constructor(callback, options, elementCB) {
    this.dom = [];
    this.root = new Document(this.dom);
    this.done = false;
    this.tagStack = [this.root];
    this.lastNode = null;
    this.parser = null;
    if (typeof options === "function") {
      elementCB = options;
      options = defaultOpts2;
    }
    if (typeof callback === "object") {
      options = callback;
      callback = void 0;
    }
    this.callback = callback !== null && callback !== void 0 ? callback : null;
    this.options = options !== null && options !== void 0 ? options : defaultOpts2;
    this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
  }
  onparserinit(parser) {
    this.parser = parser;
  }
  // Resets the handler back to starting state
  onreset() {
    this.dom = [];
    this.root = new Document(this.dom);
    this.done = false;
    this.tagStack = [this.root];
    this.lastNode = null;
    this.parser = null;
  }
  // Signals the handler that parsing is done
  onend() {
    if (this.done)
      return;
    this.done = true;
    this.parser = null;
    this.handleCallback(null);
  }
  onerror(error) {
    this.handleCallback(error);
  }
  onclosetag() {
    this.lastNode = null;
    const elem = this.tagStack.pop();
    if (this.options.withEndIndices) {
      elem.endIndex = this.parser.endIndex;
    }
    if (this.elementCB)
      this.elementCB(elem);
  }
  onopentag(name, attribs) {
    const type = this.options.xmlMode ? ElementType.Tag : void 0;
    const element = new Element(name, attribs, void 0, type);
    this.addNode(element);
    this.tagStack.push(element);
  }
  ontext(data2) {
    const { lastNode } = this;
    if (lastNode && lastNode.type === ElementType.Text) {
      lastNode.data += data2;
      if (this.options.withEndIndices) {
        lastNode.endIndex = this.parser.endIndex;
      }
    } else {
      const node = new Text2(data2);
      this.addNode(node);
      this.lastNode = node;
    }
  }
  oncomment(data2) {
    if (this.lastNode && this.lastNode.type === ElementType.Comment) {
      this.lastNode.data += data2;
      return;
    }
    const node = new Comment2(data2);
    this.addNode(node);
    this.lastNode = node;
  }
  oncommentend() {
    this.lastNode = null;
  }
  oncdatastart() {
    const text4 = new Text2("");
    const node = new CDATA2([text4]);
    this.addNode(node);
    text4.parent = node;
    this.lastNode = text4;
  }
  oncdataend() {
    this.lastNode = null;
  }
  onprocessinginstruction(name, data2) {
    const node = new ProcessingInstruction(name, data2);
    this.addNode(node);
  }
  handleCallback(error) {
    if (typeof this.callback === "function") {
      this.callback(error, this.dom);
    } else if (error) {
      throw error;
    }
  }
  addNode(node) {
    const parent2 = this.tagStack[this.tagStack.length - 1];
    const previousSibling = parent2.children[parent2.children.length - 1];
    if (this.options.withStartIndices) {
      node.startIndex = this.parser.startIndex;
    }
    if (this.options.withEndIndices) {
      node.endIndex = this.parser.endIndex;
    }
    parent2.children.push(node);
    if (previousSibling) {
      node.prev = previousSibling;
      previousSibling.next = node;
    }
    node.parent = parent2;
    this.lastNode = null;
  }
};

// node_modules/dom-serializer/node_modules/entities/lib/esm/generated/decode-data-html.js
var decode_data_html_default = new Uint16Array(
  // prettier-ignore
  '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((c) => c.charCodeAt(0))
);

// node_modules/dom-serializer/node_modules/entities/lib/esm/generated/decode-data-xml.js
var decode_data_xml_default = new Uint16Array(
  // prettier-ignore
  "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((c) => c.charCodeAt(0))
);

// node_modules/dom-serializer/node_modules/entities/lib/esm/decode_codepoint.js
var _a;
var decodeMap = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
var fromCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
    let output = "";
    if (codePoint > 65535) {
      codePoint -= 65536;
      output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
  }
);
function replaceCodePoint(codePoint) {
  var _a4;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a4 = decodeMap.get(codePoint)) !== null && _a4 !== void 0 ? _a4 : codePoint;
}

// node_modules/dom-serializer/node_modules/entities/lib/esm/decode.js
var CharCodes;
(function(CharCodes4) {
  CharCodes4[CharCodes4["NUM"] = 35] = "NUM";
  CharCodes4[CharCodes4["SEMI"] = 59] = "SEMI";
  CharCodes4[CharCodes4["EQUALS"] = 61] = "EQUALS";
  CharCodes4[CharCodes4["ZERO"] = 48] = "ZERO";
  CharCodes4[CharCodes4["NINE"] = 57] = "NINE";
  CharCodes4[CharCodes4["LOWER_A"] = 97] = "LOWER_A";
  CharCodes4[CharCodes4["LOWER_F"] = 102] = "LOWER_F";
  CharCodes4[CharCodes4["LOWER_X"] = 120] = "LOWER_X";
  CharCodes4[CharCodes4["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes4[CharCodes4["UPPER_A"] = 65] = "UPPER_A";
  CharCodes4[CharCodes4["UPPER_F"] = 70] = "UPPER_F";
  CharCodes4[CharCodes4["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
var TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags3) {
  BinTrieFlags3[BinTrieFlags3["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags3[BinTrieFlags3["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
  BinTrieFlags3[BinTrieFlags3["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code) {
  return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function(EntityDecoderState3) {
  EntityDecoderState3[EntityDecoderState3["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState3[EntityDecoderState3["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState3[EntityDecoderState3["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState3[EntityDecoderState3["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState3[EntityDecoderState3["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode3) {
  DecodingMode3[DecodingMode3["Legacy"] = 0] = "Legacy";
  DecodingMode3[DecodingMode3["Strict"] = 1] = "Strict";
  DecodingMode3[DecodingMode3["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
var EntityDecoder = class {
  constructor(decodeTree, emitCodePoint, errors) {
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors;
    this.state = EntityDecoderState.EntityStart;
    this.consumed = 1;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.decodeMode = DecodingMode.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(decodeMode) {
    this.decodeMode = decodeMode;
    this.state = EntityDecoderState.EntityStart;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(str, offset) {
    switch (this.state) {
      case EntityDecoderState.EntityStart: {
        if (str.charCodeAt(offset) === CharCodes.NUM) {
          this.state = EntityDecoderState.NumericStart;
          this.consumed += 1;
          return this.stateNumericStart(str, offset + 1);
        }
        this.state = EntityDecoderState.NamedEntity;
        return this.stateNamedEntity(str, offset);
      }
      case EntityDecoderState.NumericStart: {
        return this.stateNumericStart(str, offset);
      }
      case EntityDecoderState.NumericDecimal: {
        return this.stateNumericDecimal(str, offset);
      }
      case EntityDecoderState.NumericHex: {
        return this.stateNumericHex(str, offset);
      }
      case EntityDecoderState.NamedEntity: {
        return this.stateNamedEntity(str, offset);
      }
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(str, offset) {
    if (offset >= str.length) {
      return -1;
    }
    if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
      this.state = EntityDecoderState.NumericHex;
      this.consumed += 1;
      return this.stateNumericHex(str, offset + 1);
    }
    this.state = EntityDecoderState.NumericDecimal;
    return this.stateNumericDecimal(str, offset);
  }
  addToNumericResult(str, start, end2, base) {
    if (start !== end2) {
      const digitCount = end2 - start;
      this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
      this.consumed += digitCount;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char) || isHexadecimalCharacter(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 16);
        return this.emitNumericEntity(char, 3);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 16);
    return -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 10);
        return this.emitNumericEntity(char, 2);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 10);
    return -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(lastCp, expectedLength) {
    var _a4;
    if (this.consumed <= expectedLength) {
      (_a4 = this.errors) === null || _a4 === void 0 ? void 0 : _a4.absenceOfDigitsInNumericCharacterReference(this.consumed);
      return 0;
    }
    if (lastCp === CharCodes.SEMI) {
      this.consumed += 1;
    } else if (this.decodeMode === DecodingMode.Strict) {
      return 0;
    }
    this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
    if (this.errors) {
      if (lastCp !== CharCodes.SEMI) {
        this.errors.missingSemicolonAfterCharacterReference();
      }
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(str, offset) {
    const { decodeTree } = this;
    let current = decodeTree[this.treeIndex];
    let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
    for (; offset < str.length; offset++, this.excess++) {
      const char = str.charCodeAt(offset);
      this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
      if (this.treeIndex < 0) {
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
        (valueLength === 0 || // And there should be no invalid characters.
        isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
      }
      current = decodeTree[this.treeIndex];
      valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      if (valueLength !== 0) {
        if (char === CharCodes.SEMI) {
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        }
        if (this.decodeMode !== DecodingMode.Strict) {
          this.result = this.treeIndex;
          this.consumed += this.excess;
          this.excess = 0;
        }
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var _a4;
    const { result, decodeTree } = this;
    const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
    this.emitNamedEntityData(result, valueLength, this.consumed);
    (_a4 = this.errors) === null || _a4 === void 0 ? void 0 : _a4.missingSemicolonAfterCharacterReference();
    return this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(result, valueLength, consumed) {
    const { decodeTree } = this;
    this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
    if (valueLength === 3) {
      this.emitCodePoint(decodeTree[result + 2], consumed);
    }
    return consumed;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var _a4;
    switch (this.state) {
      case EntityDecoderState.NamedEntity: {
        return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      }
      // Otherwise, emit a numeric entity if we have one.
      case EntityDecoderState.NumericDecimal: {
        return this.emitNumericEntity(0, 2);
      }
      case EntityDecoderState.NumericHex: {
        return this.emitNumericEntity(0, 3);
      }
      case EntityDecoderState.NumericStart: {
        (_a4 = this.errors) === null || _a4 === void 0 ? void 0 : _a4.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      case EntityDecoderState.EntityStart: {
        return 0;
      }
    }
  }
};
function getDecoder(decodeTree) {
  let ret = "";
  const decoder = new EntityDecoder(decodeTree, (str) => ret += fromCodePoint(str));
  return function decodeWithTrie(str, decodeMode) {
    let lastIndex = 0;
    let offset = 0;
    while ((offset = str.indexOf("&", offset)) >= 0) {
      ret += str.slice(lastIndex, offset);
      decoder.startEntity(decodeMode);
      const len = decoder.write(
        str,
        // Skip the "&"
        offset + 1
      );
      if (len < 0) {
        lastIndex = offset + decoder.end();
        break;
      }
      lastIndex = offset + len;
      offset = len === 0 ? lastIndex + 1 : lastIndex;
    }
    const result = ret + str.slice(lastIndex);
    ret = "";
    return result;
  };
}
function determineBranch(decodeTree, current, nodeIdx, char) {
  const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
  }
  if (jumpOffset) {
    const value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
  }
  let lo = nodeIdx;
  let hi = lo + branchCount - 1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    const midVal = decodeTree[mid];
    if (midVal < char) {
      lo = mid + 1;
    } else if (midVal > char) {
      hi = mid - 1;
    } else {
      return decodeTree[mid + branchCount];
    }
  }
  return -1;
}
var htmlDecoder = getDecoder(decode_data_html_default);
var xmlDecoder = getDecoder(decode_data_xml_default);

// node_modules/dom-serializer/node_modules/entities/lib/esm/generated/encode-html.js
function restoreDiff(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i][0] += arr[i - 1][0] + 1;
  }
  return arr;
}
var encode_html_default = new Map(/* @__PURE__ */ restoreDiff([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ restoreDiff([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));

// node_modules/dom-serializer/node_modules/entities/lib/esm/escape.js
var xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
var xmlCodeMap = /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [39, "&apos;"],
  [60, "&lt;"],
  [62, "&gt;"]
]);
var getCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? (str, index2) => str.codePointAt(index2) : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    (c, index2) => (c.charCodeAt(index2) & 64512) === 55296 ? (c.charCodeAt(index2) - 55296) * 1024 + c.charCodeAt(index2 + 1) - 56320 + 65536 : c.charCodeAt(index2)
  )
);
function encodeXML(str) {
  let ret = "";
  let lastIdx = 0;
  let match;
  while ((match = xmlReplacer.exec(str)) !== null) {
    const i = match.index;
    const char = str.charCodeAt(i);
    const next2 = xmlCodeMap.get(char);
    if (next2 !== void 0) {
      ret += str.substring(lastIdx, i) + next2;
      lastIdx = i + 1;
    } else {
      ret += `${str.substring(lastIdx, i)}&#x${getCodePoint(str, i).toString(16)};`;
      lastIdx = xmlReplacer.lastIndex += Number((char & 64512) === 55296);
    }
  }
  return ret + str.substr(lastIdx);
}
function getEscaper(regex2, map2) {
  return function escape2(data2) {
    let match;
    let lastIdx = 0;
    let result = "";
    while (match = regex2.exec(data2)) {
      if (lastIdx !== match.index) {
        result += data2.substring(lastIdx, match.index);
      }
      result += map2.get(match[0].charCodeAt(0));
      lastIdx = match.index + 1;
    }
    return result + data2.substring(lastIdx);
  };
}
var escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
var escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [160, "&nbsp;"]
]));
var escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
  [38, "&amp;"],
  [60, "&lt;"],
  [62, "&gt;"],
  [160, "&nbsp;"]
]));

// node_modules/dom-serializer/node_modules/entities/lib/esm/index.js
var EntityLevel;
(function(EntityLevel2) {
  EntityLevel2[EntityLevel2["XML"] = 0] = "XML";
  EntityLevel2[EntityLevel2["HTML"] = 1] = "HTML";
})(EntityLevel || (EntityLevel = {}));
var EncodingMode;
(function(EncodingMode2) {
  EncodingMode2[EncodingMode2["UTF8"] = 0] = "UTF8";
  EncodingMode2[EncodingMode2["ASCII"] = 1] = "ASCII";
  EncodingMode2[EncodingMode2["Extensive"] = 2] = "Extensive";
  EncodingMode2[EncodingMode2["Attribute"] = 3] = "Attribute";
  EncodingMode2[EncodingMode2["Text"] = 4] = "Text";
})(EncodingMode || (EncodingMode = {}));

// node_modules/dom-serializer/lib/esm/foreignNames.js
var elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((val2) => [val2.toLowerCase(), val2]));
var attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((val2) => [val2.toLowerCase(), val2]));

// node_modules/dom-serializer/lib/esm/index.js
var unencodedElements = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function replaceQuotes(value) {
  return value.replace(/"/g, "&quot;");
}
function formatAttributes(attributes2, opts) {
  var _a4;
  if (!attributes2)
    return;
  const encode = ((_a4 = opts.encodeEntities) !== null && _a4 !== void 0 ? _a4 : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML : escapeAttribute;
  return Object.keys(attributes2).map((key) => {
    var _a5, _b;
    const value = (_a5 = attributes2[key]) !== null && _a5 !== void 0 ? _a5 : "";
    if (opts.xmlMode === "foreign") {
      key = (_b = attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
    }
    if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
      return key;
    }
    return `${key}="${encode(value)}"`;
  }).join(" ");
}
var singleTag = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function render(node, options = {}) {
  const nodes = "length" in node ? node : [node];
  let output = "";
  for (let i = 0; i < nodes.length; i++) {
    output += renderNode(nodes[i], options);
  }
  return output;
}
var esm_default = render;
function renderNode(node, options) {
  switch (node.type) {
    case Root:
      return render(node.children, options);
    // @ts-expect-error We don't use `Doctype` yet
    case Doctype:
    case Directive:
      return renderDirective(node);
    case Comment:
      return renderComment(node);
    case CDATA:
      return renderCdata(node);
    case Script:
    case Style:
    case Tag:
      return renderTag(node, options);
    case Text:
      return renderText(node, options);
  }
}
var foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]);
var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
function renderTag(elem, opts) {
  var _a4;
  if (opts.xmlMode === "foreign") {
    elem.name = (_a4 = elementNames.get(elem.name)) !== null && _a4 !== void 0 ? _a4 : elem.name;
    if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
      opts = { ...opts, xmlMode: false };
    }
  }
  if (!opts.xmlMode && foreignElements.has(elem.name)) {
    opts = { ...opts, xmlMode: "foreign" };
  }
  let tag = `<${elem.name}`;
  const attribs = formatAttributes(elem.attribs, opts);
  if (attribs) {
    tag += ` ${attribs}`;
  }
  if (elem.children.length === 0 && (opts.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    opts.selfClosingTags !== false
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    opts.selfClosingTags && singleTag.has(elem.name)
  ))) {
    if (!opts.xmlMode)
      tag += " ";
    tag += "/>";
  } else {
    tag += ">";
    if (elem.children.length > 0) {
      tag += render(elem.children, opts);
    }
    if (opts.xmlMode || !singleTag.has(elem.name)) {
      tag += `</${elem.name}>`;
    }
  }
  return tag;
}
function renderDirective(elem) {
  return `<${elem.data}>`;
}
function renderText(elem, opts) {
  var _a4;
  let data2 = elem.data || "";
  if (((_a4 = opts.encodeEntities) !== null && _a4 !== void 0 ? _a4 : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
    data2 = opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML(data2) : escapeText(data2);
  }
  return data2;
}
function renderCdata(elem) {
  return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
  return `<!--${elem.data}-->`;
}

// node_modules/domutils/lib/esm/stringify.js
function getOuterHTML(node, options) {
  return esm_default(node, options);
}
function getInnerHTML(node, options) {
  return hasChildren(node) ? node.children.map((node2) => getOuterHTML(node2, options)).join("") : "";
}
function getText(node) {
  if (Array.isArray(node))
    return node.map(getText).join("");
  if (isTag2(node))
    return node.name === "br" ? "\n" : getText(node.children);
  if (isCDATA(node))
    return getText(node.children);
  if (isText(node))
    return node.data;
  return "";
}
function textContent(node) {
  if (Array.isArray(node))
    return node.map(textContent).join("");
  if (hasChildren(node) && !isComment(node)) {
    return textContent(node.children);
  }
  if (isText(node))
    return node.data;
  return "";
}
function innerText(node) {
  if (Array.isArray(node))
    return node.map(innerText).join("");
  if (hasChildren(node) && (node.type === ElementType.Tag || isCDATA(node))) {
    return innerText(node.children);
  }
  if (isText(node))
    return node.data;
  return "";
}

// node_modules/domutils/lib/esm/traversal.js
function getChildren(elem) {
  return hasChildren(elem) ? elem.children : [];
}
function getParent(elem) {
  return elem.parent || null;
}
function getSiblings(elem) {
  const parent2 = getParent(elem);
  if (parent2 != null)
    return getChildren(parent2);
  const siblings2 = [elem];
  let { prev: prev2, next: next2 } = elem;
  while (prev2 != null) {
    siblings2.unshift(prev2);
    ({ prev: prev2 } = prev2);
  }
  while (next2 != null) {
    siblings2.push(next2);
    ({ next: next2 } = next2);
  }
  return siblings2;
}
function getAttributeValue(elem, name) {
  var _a4;
  return (_a4 = elem.attribs) === null || _a4 === void 0 ? void 0 : _a4[name];
}
function hasAttrib(elem, name) {
  return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}
function getName(elem) {
  return elem.name;
}
function nextElementSibling(elem) {
  let { next: next2 } = elem;
  while (next2 !== null && !isTag2(next2))
    ({ next: next2 } = next2);
  return next2;
}
function prevElementSibling(elem) {
  let { prev: prev2 } = elem;
  while (prev2 !== null && !isTag2(prev2))
    ({ prev: prev2 } = prev2);
  return prev2;
}

// node_modules/domutils/lib/esm/manipulation.js
function removeElement(elem) {
  if (elem.prev)
    elem.prev.next = elem.next;
  if (elem.next)
    elem.next.prev = elem.prev;
  if (elem.parent) {
    const childs = elem.parent.children;
    const childsIndex = childs.lastIndexOf(elem);
    if (childsIndex >= 0) {
      childs.splice(childsIndex, 1);
    }
  }
  elem.next = null;
  elem.prev = null;
  elem.parent = null;
}
function replaceElement(elem, replacement) {
  const prev2 = replacement.prev = elem.prev;
  if (prev2) {
    prev2.next = replacement;
  }
  const next2 = replacement.next = elem.next;
  if (next2) {
    next2.prev = replacement;
  }
  const parent2 = replacement.parent = elem.parent;
  if (parent2) {
    const childs = parent2.children;
    childs[childs.lastIndexOf(elem)] = replacement;
    elem.parent = null;
  }
}
function appendChild(parent2, child) {
  removeElement(child);
  child.next = null;
  child.parent = parent2;
  if (parent2.children.push(child) > 1) {
    const sibling = parent2.children[parent2.children.length - 2];
    sibling.next = child;
    child.prev = sibling;
  } else {
    child.prev = null;
  }
}
function append(elem, next2) {
  removeElement(next2);
  const { parent: parent2 } = elem;
  const currNext = elem.next;
  next2.next = currNext;
  next2.prev = elem;
  elem.next = next2;
  next2.parent = parent2;
  if (currNext) {
    currNext.prev = next2;
    if (parent2) {
      const childs = parent2.children;
      childs.splice(childs.lastIndexOf(currNext), 0, next2);
    }
  } else if (parent2) {
    parent2.children.push(next2);
  }
}
function prependChild(parent2, child) {
  removeElement(child);
  child.parent = parent2;
  child.prev = null;
  if (parent2.children.unshift(child) !== 1) {
    const sibling = parent2.children[1];
    sibling.prev = child;
    child.next = sibling;
  } else {
    child.next = null;
  }
}
function prepend(elem, prev2) {
  removeElement(prev2);
  const { parent: parent2 } = elem;
  if (parent2) {
    const childs = parent2.children;
    childs.splice(childs.indexOf(elem), 0, prev2);
  }
  if (elem.prev) {
    elem.prev.next = prev2;
  }
  prev2.parent = parent2;
  prev2.prev = elem.prev;
  prev2.next = elem;
  elem.prev = prev2;
}

// node_modules/domutils/lib/esm/querying.js
function filter(test, node, recurse = true, limit = Infinity) {
  return find(test, Array.isArray(node) ? node : [node], recurse, limit);
}
function find(test, nodes, recurse, limit) {
  const result = [];
  const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
  const indexStack = [0];
  for (; ; ) {
    if (indexStack[0] >= nodeStack[0].length) {
      if (indexStack.length === 1) {
        return result;
      }
      nodeStack.shift();
      indexStack.shift();
      continue;
    }
    const elem = nodeStack[0][indexStack[0]++];
    if (test(elem)) {
      result.push(elem);
      if (--limit <= 0)
        return result;
    }
    if (recurse && hasChildren(elem) && elem.children.length > 0) {
      indexStack.unshift(0);
      nodeStack.unshift(elem.children);
    }
  }
}
function findOneChild(test, nodes) {
  return nodes.find(test);
}
function findOne(test, nodes, recurse = true) {
  const searchedNodes = Array.isArray(nodes) ? nodes : [nodes];
  for (let i = 0; i < searchedNodes.length; i++) {
    const node = searchedNodes[i];
    if (isTag2(node) && test(node)) {
      return node;
    }
    if (recurse && hasChildren(node) && node.children.length > 0) {
      const found = findOne(test, node.children, true);
      if (found)
        return found;
    }
  }
  return null;
}
function existsOne(test, nodes) {
  return (Array.isArray(nodes) ? nodes : [nodes]).some((node) => isTag2(node) && test(node) || hasChildren(node) && existsOne(test, node.children));
}
function findAll(test, nodes) {
  const result = [];
  const nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
  const indexStack = [0];
  for (; ; ) {
    if (indexStack[0] >= nodeStack[0].length) {
      if (nodeStack.length === 1) {
        return result;
      }
      nodeStack.shift();
      indexStack.shift();
      continue;
    }
    const elem = nodeStack[0][indexStack[0]++];
    if (isTag2(elem) && test(elem))
      result.push(elem);
    if (hasChildren(elem) && elem.children.length > 0) {
      indexStack.unshift(0);
      nodeStack.unshift(elem.children);
    }
  }
}

// node_modules/domutils/lib/esm/legacy.js
var Checks = {
  tag_name(name) {
    if (typeof name === "function") {
      return (elem) => isTag2(elem) && name(elem.name);
    } else if (name === "*") {
      return isTag2;
    }
    return (elem) => isTag2(elem) && elem.name === name;
  },
  tag_type(type) {
    if (typeof type === "function") {
      return (elem) => type(elem.type);
    }
    return (elem) => elem.type === type;
  },
  tag_contains(data2) {
    if (typeof data2 === "function") {
      return (elem) => isText(elem) && data2(elem.data);
    }
    return (elem) => isText(elem) && elem.data === data2;
  }
};
function getAttribCheck(attrib, value) {
  if (typeof value === "function") {
    return (elem) => isTag2(elem) && value(elem.attribs[attrib]);
  }
  return (elem) => isTag2(elem) && elem.attribs[attrib] === value;
}
function combineFuncs(a, b) {
  return (elem) => a(elem) || b(elem);
}
function compileTest(options) {
  const funcs = Object.keys(options).map((key) => {
    const value = options[key];
    return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
  });
  return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
function testElement(options, node) {
  const test = compileTest(options);
  return test ? test(node) : true;
}
function getElements(options, nodes, recurse, limit = Infinity) {
  const test = compileTest(options);
  return test ? filter(test, nodes, recurse, limit) : [];
}
function getElementById(id, nodes, recurse = true) {
  if (!Array.isArray(nodes))
    nodes = [nodes];
  return findOne(getAttribCheck("id", id), nodes, recurse);
}
function getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
  return filter(Checks["tag_name"](tagName), nodes, recurse, limit);
}
function getElementsByClassName(className, nodes, recurse = true, limit = Infinity) {
  return filter(getAttribCheck("class", className), nodes, recurse, limit);
}
function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
  return filter(Checks["tag_type"](type), nodes, recurse, limit);
}

// node_modules/domutils/lib/esm/helpers.js
function removeSubsets(nodes) {
  let idx = nodes.length;
  while (--idx >= 0) {
    const node = nodes[idx];
    if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
      nodes.splice(idx, 1);
      continue;
    }
    for (let ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
      if (nodes.includes(ancestor)) {
        nodes.splice(idx, 1);
        break;
      }
    }
  }
  return nodes;
}
var DocumentPosition;
(function(DocumentPosition2) {
  DocumentPosition2[DocumentPosition2["DISCONNECTED"] = 1] = "DISCONNECTED";
  DocumentPosition2[DocumentPosition2["PRECEDING"] = 2] = "PRECEDING";
  DocumentPosition2[DocumentPosition2["FOLLOWING"] = 4] = "FOLLOWING";
  DocumentPosition2[DocumentPosition2["CONTAINS"] = 8] = "CONTAINS";
  DocumentPosition2[DocumentPosition2["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
function compareDocumentPosition(nodeA, nodeB) {
  const aParents = [];
  const bParents = [];
  if (nodeA === nodeB) {
    return 0;
  }
  let current = hasChildren(nodeA) ? nodeA : nodeA.parent;
  while (current) {
    aParents.unshift(current);
    current = current.parent;
  }
  current = hasChildren(nodeB) ? nodeB : nodeB.parent;
  while (current) {
    bParents.unshift(current);
    current = current.parent;
  }
  const maxIdx = Math.min(aParents.length, bParents.length);
  let idx = 0;
  while (idx < maxIdx && aParents[idx] === bParents[idx]) {
    idx++;
  }
  if (idx === 0) {
    return DocumentPosition.DISCONNECTED;
  }
  const sharedParent = aParents[idx - 1];
  const siblings2 = sharedParent.children;
  const aSibling = aParents[idx];
  const bSibling = bParents[idx];
  if (siblings2.indexOf(aSibling) > siblings2.indexOf(bSibling)) {
    if (sharedParent === nodeB) {
      return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
    }
    return DocumentPosition.FOLLOWING;
  }
  if (sharedParent === nodeA) {
    return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
  }
  return DocumentPosition.PRECEDING;
}
function uniqueSort(nodes) {
  nodes = nodes.filter((node, i, arr) => !arr.includes(node, i + 1));
  nodes.sort((a, b) => {
    const relative = compareDocumentPosition(a, b);
    if (relative & DocumentPosition.PRECEDING) {
      return -1;
    } else if (relative & DocumentPosition.FOLLOWING) {
      return 1;
    }
    return 0;
  });
  return nodes;
}

// node_modules/domutils/lib/esm/feeds.js
function getFeed(doc) {
  const feedRoot = getOneElement(isValidFeed, doc);
  return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
function getAtomFeed(feedRoot) {
  var _a4;
  const childs = feedRoot.children;
  const feed = {
    type: "atom",
    items: getElementsByTagName("entry", childs).map((item) => {
      var _a5;
      const { children: children2 } = item;
      const entry = { media: getMediaElements(children2) };
      addConditionally(entry, "id", "id", children2);
      addConditionally(entry, "title", "title", children2);
      const href2 = (_a5 = getOneElement("link", children2)) === null || _a5 === void 0 ? void 0 : _a5.attribs["href"];
      if (href2) {
        entry.link = href2;
      }
      const description = fetch("summary", children2) || fetch("content", children2);
      if (description) {
        entry.description = description;
      }
      const pubDate = fetch("updated", children2);
      if (pubDate) {
        entry.pubDate = new Date(pubDate);
      }
      return entry;
    })
  };
  addConditionally(feed, "id", "id", childs);
  addConditionally(feed, "title", "title", childs);
  const href = (_a4 = getOneElement("link", childs)) === null || _a4 === void 0 ? void 0 : _a4.attribs["href"];
  if (href) {
    feed.link = href;
  }
  addConditionally(feed, "description", "subtitle", childs);
  const updated = fetch("updated", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally(feed, "author", "email", childs, true);
  return feed;
}
function getRssFeed(feedRoot) {
  var _a4, _b;
  const childs = (_b = (_a4 = getOneElement("channel", feedRoot.children)) === null || _a4 === void 0 ? void 0 : _a4.children) !== null && _b !== void 0 ? _b : [];
  const feed = {
    type: feedRoot.name.substr(0, 3),
    id: "",
    items: getElementsByTagName("item", feedRoot.children).map((item) => {
      const { children: children2 } = item;
      const entry = { media: getMediaElements(children2) };
      addConditionally(entry, "id", "guid", children2);
      addConditionally(entry, "title", "title", children2);
      addConditionally(entry, "link", "link", children2);
      addConditionally(entry, "description", "description", children2);
      const pubDate = fetch("pubDate", children2) || fetch("dc:date", children2);
      if (pubDate)
        entry.pubDate = new Date(pubDate);
      return entry;
    })
  };
  addConditionally(feed, "title", "title", childs);
  addConditionally(feed, "link", "link", childs);
  addConditionally(feed, "description", "description", childs);
  const updated = fetch("lastBuildDate", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally(feed, "author", "managingEditor", childs, true);
  return feed;
}
var MEDIA_KEYS_STRING = ["url", "type", "lang"];
var MEDIA_KEYS_INT = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function getMediaElements(where) {
  return getElementsByTagName("media:content", where).map((elem) => {
    const { attribs } = elem;
    const media = {
      medium: attribs["medium"],
      isDefault: !!attribs["isDefault"]
    };
    for (const attrib of MEDIA_KEYS_STRING) {
      if (attribs[attrib]) {
        media[attrib] = attribs[attrib];
      }
    }
    for (const attrib of MEDIA_KEYS_INT) {
      if (attribs[attrib]) {
        media[attrib] = parseInt(attribs[attrib], 10);
      }
    }
    if (attribs["expression"]) {
      media.expression = attribs["expression"];
    }
    return media;
  });
}
function getOneElement(tagName, node) {
  return getElementsByTagName(tagName, node, true, 1)[0];
}
function fetch(tagName, where, recurse = false) {
  return textContent(getElementsByTagName(tagName, where, recurse, 1)).trim();
}
function addConditionally(obj, prop2, tagName, where, recurse = false) {
  const val2 = fetch(tagName, where, recurse);
  if (val2)
    obj[prop2] = val2;
}
function isValidFeed(value) {
  return value === "rss" || value === "feed" || value === "rdf:RDF";
}

// node_modules/cheerio/dist/esm/static.js
function render2(that, dom, options) {
  if (!that)
    return "";
  return that(dom !== null && dom !== void 0 ? dom : that._root.children, null, void 0, options).toString();
}
function isOptions(dom, options) {
  return !options && typeof dom === "object" && dom != null && !("length" in dom) && !("type" in dom);
}
function html(dom, options) {
  const toRender = isOptions(dom) ? (options = dom, void 0) : dom;
  const opts = {
    ...this === null || this === void 0 ? void 0 : this._options,
    ...flattenOptions(options)
  };
  return render2(this, toRender, opts);
}
function xml(dom) {
  const options = { ...this._options, xmlMode: true };
  return render2(this, dom, options);
}
function text2(elements) {
  const elems = elements !== null && elements !== void 0 ? elements : this ? this.root() : [];
  let ret = "";
  for (let i = 0; i < elems.length; i++) {
    ret += textContent(elems[i]);
  }
  return ret;
}
function parseHTML(data2, context, keepScripts = typeof context === "boolean" ? context : false) {
  if (!data2 || typeof data2 !== "string") {
    return null;
  }
  if (typeof context === "boolean") {
    keepScripts = context;
  }
  const parsed = this.load(data2, this._options, false);
  if (!keepScripts) {
    parsed("script").remove();
  }
  return [...parsed.root()[0].children];
}
function root() {
  return this(this._root);
}
function contains(container, contained) {
  if (contained === container) {
    return false;
  }
  let next2 = contained;
  while (next2 && next2 !== next2.parent) {
    next2 = next2.parent;
    if (next2 === container) {
      return true;
    }
  }
  return false;
}
function extract(map2) {
  return this.root().extract(map2);
}
function merge(arr1, arr2) {
  if (!isArrayLike(arr1) || !isArrayLike(arr2)) {
    return;
  }
  let newLength = arr1.length;
  const len = +arr2.length;
  for (let i = 0; i < len; i++) {
    arr1[newLength++] = arr2[i];
  }
  arr1.length = newLength;
  return arr1;
}
function isArrayLike(item) {
  if (Array.isArray(item)) {
    return true;
  }
  if (typeof item !== "object" || item === null || !("length" in item) || typeof item.length !== "number" || item.length < 0) {
    return false;
  }
  for (let i = 0; i < item.length; i++) {
    if (!(i in item)) {
      return false;
    }
  }
  return true;
}

// node_modules/cheerio/dist/esm/api/attributes.js
var attributes_exports = {};
__export(attributes_exports, {
  addClass: () => addClass,
  attr: () => attr,
  data: () => data,
  hasClass: () => hasClass,
  prop: () => prop,
  removeAttr: () => removeAttr,
  removeClass: () => removeClass,
  toggleClass: () => toggleClass,
  val: () => val
});

// node_modules/cheerio/dist/esm/utils.js
function isCheerio(maybeCheerio) {
  return maybeCheerio.cheerio != null;
}
function camelCase(str) {
  return str.replace(/[._-](\w|$)/g, (_, x) => x.toUpperCase());
}
function cssCase(str) {
  return str.replace(/[A-Z]/g, "-$&").toLowerCase();
}
function domEach(array, fn) {
  const len = array.length;
  for (let i = 0; i < len; i++)
    fn(array[i], i);
  return array;
}
var CharacterCode;
(function(CharacterCode2) {
  CharacterCode2[CharacterCode2["LowerA"] = 97] = "LowerA";
  CharacterCode2[CharacterCode2["LowerZ"] = 122] = "LowerZ";
  CharacterCode2[CharacterCode2["UpperA"] = 65] = "UpperA";
  CharacterCode2[CharacterCode2["UpperZ"] = 90] = "UpperZ";
  CharacterCode2[CharacterCode2["Exclamation"] = 33] = "Exclamation";
})(CharacterCode || (CharacterCode = {}));
function isHtml(str) {
  const tagStart = str.indexOf("<");
  if (tagStart === -1 || tagStart > str.length - 3)
    return false;
  const tagChar = str.charCodeAt(tagStart + 1);
  return (tagChar >= CharacterCode.LowerA && tagChar <= CharacterCode.LowerZ || tagChar >= CharacterCode.UpperA && tagChar <= CharacterCode.UpperZ || tagChar === CharacterCode.Exclamation) && str.includes(">", tagStart + 2);
}

// node_modules/entities/dist/esm/decode-codepoint.js
var _a2;
var decodeMap2 = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
var fromCodePoint2 = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, n/no-unsupported-features/es-builtins
  (_a2 = String.fromCodePoint) !== null && _a2 !== void 0 ? _a2 : ((codePoint) => {
    let output = "";
    if (codePoint > 65535) {
      codePoint -= 65536;
      output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
  })
);
function replaceCodePoint2(codePoint) {
  var _a4;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a4 = decodeMap2.get(codePoint)) !== null && _a4 !== void 0 ? _a4 : codePoint;
}

// node_modules/entities/dist/esm/internal/decode-shared.js
function decodeBase64(input) {
  const binary = (
    // eslint-disable-next-line n/no-unsupported-features/node-builtins
    typeof atob === "function" ? (
      // Browser (and Node >=16)
      // eslint-disable-next-line n/no-unsupported-features/node-builtins
      atob(input)
    ) : (
      // Older Node versions (<16)
      // eslint-disable-next-line n/no-unsupported-features/node-builtins
      typeof Buffer.from === "function" ? (
        // eslint-disable-next-line n/no-unsupported-features/node-builtins
        Buffer.from(input, "base64").toString("binary")
      ) : (
        // eslint-disable-next-line unicorn/no-new-buffer, n/no-deprecated-api
        new Buffer(input, "base64").toString("binary")
      )
    )
  );
  const evenLength = binary.length & ~1;
  const out = new Uint16Array(evenLength / 2);
  for (let index2 = 0, outIndex = 0; index2 < evenLength; index2 += 2) {
    const lo = binary.charCodeAt(index2);
    const hi = binary.charCodeAt(index2 + 1);
    out[outIndex++] = lo | hi << 8;
  }
  return out;
}

// node_modules/entities/dist/esm/generated/decode-data-html.js
var htmlDecodeTree = /* @__PURE__ */ decodeBase64("QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IAAOA12J/c8iFvaxBhAAhOVGFjZGZnbG1vcHFzdHV4owOlA6kDsAO/A8IDxgPNA9ID8gP9AwEEFAQeBCAEJQRHAEphSAA7gNAA0EBjAHUAdABlADuAyQDJQIABYWl5ALYDuQO+A/Ihb24aYXIAYwA7gMoAykAtZG8AdAAWYXIAAOA12AjdcgBhAHYAZQA7gMgAyEDlIm1lbnQAoAgiAAFhcNYD2QNjAHIAEmF0AHkAUwLhAwAAAADpA20lYWxsU3F1YXJlAACg+yVlJ3J5U21hbGxTcXVhcmUAAKCrJQABZ3D2A/kDbwBuABhhZgAA4DXYPN3zImlsb26VY3UAAAFhaQYEDgRsAFSgdSppImxkZQAAoEIi7CNpYnJpdW0AoMwhAAFjaRgEGwRyAACgMCFtAACgcyphAJdjbQBsADuAywDLQAABaXApBC0E8yF0cwCgAyLvJG5lbnRpYWxFAKBHIYACY2Zpb3MAPQQ/BEMEXQRyBHkAJGRyAADgNdgJ3WwibGVkAFMCTAQAAAAAVARtJWFsbFNxdWFyZQAAoPwlZSdyeVNtYWxsU3F1YXJlAACgqiVwA2UEAABpBAAAAABtBGYAAOA12D3dwSFsbACgACLyI2llcnRyZgCgMSFjAPIAcQQABkpUYWJjZGZnb3JzdIgEiwSOBJMElwSkBKcEqwStBLIE5QTqBGMAeQADZDuAPgA+QO0hbWFkoJMD3GNyImV2ZQAeYYABZWl5AJ0EoASjBOQhaWwiYXIAYwAcYRNkbwB0ACBhcgAA4DXYCt0AoNkicABmAADgNdg+3eUiYXRlcgADRUZHTFNUvwTIBM8E1QTZBOAEcSJ1YWwATKBlIuUhc3MAoNsidSRsbEVxdWFsAACgZyJyI2VhdGVyAACgoirlIXNzAKB3IuwkYW50RXF1YWwAoH4qaSJsZGUAAKBzImMAcgAA4DXYotwAoGsiAARBYWNmaW9zdfkE/QQFBQgFCwUTBSIFKwVSIkRjeQAqZAABY3QBBQQFZQBrAMdiXmDpIXJjJGFyAACgDCFsJWJlcnRTcGFjZQAAoAsh8AEYBQAAGwVmAACgDSHpJXpvbnRhbExpbmUAoAAlAAFjdCYFKAXyABIF8iFvayZhbQBwAEQBMQU5BW8AdwBuAEgAdQBtAPAAAAFxInVhbAAAoE8iAAdFSk9hY2RmZ21ub3N0dVMFVgVZBVwFYwVtBXAFcwV6BZAFtgXFBckFzQVjAHkAFWTsIWlnMmFjAHkAAWRjAHUAdABlADuAzQDNQAABaXlnBWwFcgBjADuAzgDOQBhkbwB0ADBhcgAAoBEhcgBhAHYAZQA7gMwAzEAAoREhYXB/BYsFAAFjZ4MFhQVyACphaSNuYXJ5SQAAoEghbABpAGUA8wD6AvQBlQUAAKUFZaAsIgABZ3KaBZ4F8iFhbACgKyLzI2VjdGlvbgCgwiJpI3NpYmxlAAABQ1SsBbEFbyJtbWEAAKBjIGkibWVzAACgYiCAAWdwdAC8Bb8FwwVvAG4ALmFmAADgNdhA3WEAmWNjAHIAAKAQIWkibGRlAChh6wHSBQAA1QVjAHkABmRsADuAzwDPQIACY2Zvc3UA4QXpBe0F8gX9BQABaXnlBegFcgBjADRhGWRyAADgNdgN3XAAZgAA4DXYQd3jAfcFAAD7BXIAAOA12KXc8iFjeQhk6yFjeQRkgANISmFjZm9zAAwGDwYSBhUGHQYhBiYGYwB5ACVkYwB5AAxk8CFwYZpjAAFleRkGHAbkIWlsNmEaZHIAAOA12A7dcABmAADgNdhC3WMAcgAA4DXYptyABUpUYWNlZmxtb3N0AD0GQAZDBl4GawZkB2gHcAd0B80H2gdjAHkACWQ7gDwAPECAAmNtbnByAEwGTwZSBlUGWwb1IXRlOWHiIWRhm2NnAACg6ifsI2FjZXRyZgCgEiFyAACgniGAAWFleQBkBmcGagbyIW9uPWHkIWlsO2EbZAABZnNvBjQHdAAABUFDREZSVFVWYXKABp4GpAbGBssG3AYDByEHwQIqBwABbnKEBowGZyVsZUJyYWNrZXQAAKDoJ/Ihb3cAoZAhQlKTBpcGYQByAACg5CHpJGdodEFycm93AKDGIWUjaWxpbmcAAKAII28A9QGqBgAAsgZiJWxlQnJhY2tldAAAoOYnbgDUAbcGAAC+BmUkZVZlY3RvcgAAoGEp5SJjdG9yQqDDIWEAcgAAoFkpbCJvb3IAAKAKI2kiZ2h0AAABQVbSBtcGciJyb3cAAKCUIeUiY3RvcgCgTikAAWVy4AbwBmUAAKGjIkFW5gbrBnIicm93AACgpCHlImN0b3IAoFopaSNhbmdsZQBCorIi+wYAAAAA/wZhAHIAAKDPKXEidWFsAACgtCJwAIABRFRWAAoHEQcYB+8kd25WZWN0b3IAoFEpZSRlVmVjdG9yAACgYCnlImN0b3JCoL8hYQByAACgWCnlImN0b3JCoLwhYQByAACgUilpAGcAaAB0AGEAcgByAG8A9wDMAnMAAANFRkdMU1Q/B0cHTgdUB1gHXwfxJXVhbEdyZWF0ZXIAoNoidSRsbEVxdWFsAACgZiJyI2VhdGVyAACgdiLlIXNzAKChKuwkYW50RXF1YWwAoH0qaSJsZGUAAKByInIAAOA12A/dZaDYIuYjdGFycm93AKDaIWkiZG90AD9hgAFucHcAege1B7kHZwAAAkxSbHKCB5QHmwerB+UhZnQAAUFSiAeNB3Iicm93AACg9SfpJGdodEFycm93AKD3J+kkZ2h0QXJyb3cAoPYn5SFmdAABYXLcAqEHaQBnAGgAdABhAHIAcgBvAPcA5wJpAGcAaAB0AGEAcgByAG8A9wDuAmYAAOA12EPdZQByAAABTFK/B8YHZSRmdEFycm93AACgmSHpJGdodEFycm93AKCYIYABY2h0ANMH1QfXB/IAWgYAoLAh8iFva0FhAKBqIgAEYWNlZmlvc3XpB+wH7gf/BwMICQgOCBEIcAAAoAUpeQAcZAABZGzyB/kHaSR1bVNwYWNlAACgXyBsI2ludHJmAACgMyFyAADgNdgQ3e4jdXNQbHVzAKATInAAZgAA4DXYRN1jAPIA/gecY4AESmFjZWZvc3R1ACEIJAgoCDUIgQiFCDsKQApHCmMAeQAKZGMidXRlAENhgAFhZXkALggxCDQI8iFvbkdh5CFpbEVhHWSAAWdzdwA7CGEIfQjhInRpdmWAAU1UVgBECEwIWQhlJWRpdW1TcGFjZQAAoAsgaABpAAABY25SCFMIawBTAHAAYQBjAOUASwhlAHIAeQBUAGgAaQDuAFQI9CFlZAABR0xnCHUIcgBlAGEAdABlAHIARwByAGUAYQB0AGUA8gDrBGUAcwBzAEwAZQBzAPMA2wdMImluZQAKYHIAAOA12BHdAAJCbnB0jAiRCJkInAhyImVhawAAoGAgwiZyZWFraW5nU3BhY2WgYGYAAKAVIUOq7CqzCMIIzQgAAOcIGwkAAAAAAAAtCQAAbwkAAIcJAACdCcAJGQoAADQKAAFvdbYIvAjuI2dydWVudACgYiJwIkNhcAAAoG0ibyh1YmxlVmVydGljYWxCYXIAAKAmIoABbHF4ANII1wjhCOUibWVudACgCSL1IWFsVKBgImkibGRlAADgQiI4A2kic3RzAACgBCJyI2VhdGVyAACjbyJFRkdMU1T1CPoIAgkJCQ0JFQlxInVhbAAAoHEidSRsbEVxdWFsAADgZyI4A3IjZWF0ZXIAAOBrIjgD5SFzcwCgeSLsJGFudEVxdWFsAOB+KjgDaSJsZGUAAKB1IvUhbXBEASAJJwnvI3duSHVtcADgTiI4A3EidWFsAADgTyI4A2UAAAFmczEJRgn0JFRyaWFuZ2xlQqLqIj0JAAAAAEIJYQByAADgzyk4A3EidWFsAACg7CJzAICibiJFR0xTVABRCVYJXAlhCWkJcSJ1YWwAAKBwInIjZWF0ZXIAAKB4IuUhc3MA4GoiOAPsJGFudEVxdWFsAOB9KjgDaSJsZGUAAKB0IuUic3RlZAABR0x1CX8J8iZlYXRlckdyZWF0ZXIA4KIqOAPlI3NzTGVzcwDgoSo4A/IjZWNlZGVzAKGAIkVTjwmVCXEidWFsAADgryo4A+wkYW50RXF1YWwAoOAiAAFlaaAJqQl2JmVyc2VFbGVtZW50AACgDCLnJWh0VHJpYW5nbGVCousitgkAAAAAuwlhAHIAAODQKTgDcSJ1YWwAAKDtIgABcXXDCeAJdSNhcmVTdQAAAWJwywnVCfMhZXRF4I8iOANxInVhbAAAoOIi5SJyc2V0ReCQIjgDcSJ1YWwAAKDjIoABYmNwAOYJ8AkNCvMhZXRF4IIi0iBxInVhbAAAoIgi4yJlZWRzgKGBIkVTVAD6CQAKBwpxInVhbAAA4LAqOAPsJGFudEVxdWFsAKDhImkibGRlAADgfyI4A+UicnNldEXggyLSIHEidWFsAACgiSJpImxkZQCAoUEiRUZUACIKJwouCnEidWFsAACgRCJ1JGxsRXF1YWwAAKBHImkibGRlAACgSSJlJXJ0aWNhbEJhcgAAoCQiYwByAADgNdip3GkAbABkAGUAO4DRANFAnWMAB0VhY2RmZ21vcHJzdHV2XgphCmgKcgp2CnoKgQqRCpYKqwqtCrsKyArNCuwhaWdSYWMAdQB0AGUAO4DTANNAAAFpeWwKcQpyAGMAO4DUANRAHmRiImxhYwBQYXIAAOA12BLdcgBhAHYAZQA7gNIA0kCAAWFlaQCHCooKjQpjAHIATGFnAGEAqWNjInJvbgCfY3AAZgAA4DXYRt3lI25DdXJseQABRFGeCqYKbyV1YmxlUXVvdGUAAKAcIHUib3RlAACgGCAAoFQqAAFjbLEKtQpyAADgNdiq3GEAcwBoADuA2ADYQGkAbAHACsUKZABlADuA1QDVQGUAcwAAoDcqbQBsADuA1gDWQGUAcgAAAUJQ0wrmCgABYXLXCtoKcgAAoD4gYQBjAAABZWvgCuIKAKDeI2UAdAAAoLQjYSVyZW50aGVzaXMAAKDcI4AEYWNmaGlsb3JzAP0KAwsFCwkLCwsMCxELIwtaC3IjdGlhbEQAAKACInkAH2RyAADgNdgT3WkApmOgY/Ujc01pbnVzsWAAAWlwFQsgC24AYwBhAHIAZQBwAGwAYQBuAOUACgVmAACgGSGAobsqZWlvACoLRQtJC+MiZWRlc4CheiJFU1QANAs5C0ALcSJ1YWwAAKCvKuwkYW50RXF1YWwAoHwiaSJsZGUAAKB+Im0AZQAAoDMgAAFkcE0LUQv1IWN0AKAPIm8jcnRpb24AYaA3ImwAAKAdIgABY2leC2ILcgAA4DXYq9yoYwACVWZvc2oLbwtzC3cLTwBUADuAIgAiQHIAAOA12BTdcABmAACgGiFjAHIAAOA12KzcAAZCRWFjZWZoaW9yc3WPC5MLlwupC7YL2AvbC90LhQyTDJoMowzhIXJyAKAQKUcAO4CuAK5AgAFjbnIAnQugC6ML9SF0ZVRhZwAAoOsncgB0oKAhbAAAoBYpgAFhZXkArwuyC7UL8iFvblhh5CFpbFZhIGR2oBwhZSJyc2UAAAFFVb8LzwsAAWxxwwvIC+UibWVudACgCyL1JGlsaWJyaXVtAKDLIXAmRXF1aWxpYnJpdW0AAKBvKXIAAKAcIW8AoWPnIWh0AARBQ0RGVFVWYewLCgwQDDIMNwxeDHwM9gIAAW5y8Av4C2clbGVCcmFja2V0AACg6SfyIW93AKGSIUJM/wsDDGEAcgAAoOUhZSRmdEFycm93AACgxCFlI2lsaW5nAACgCSNvAPUBFgwAAB4MYiVsZUJyYWNrZXQAAKDnJ24A1AEjDAAAKgxlJGVWZWN0b3IAAKBdKeUiY3RvckKgwiFhAHIAAKBVKWwib29yAACgCyMAAWVyOwxLDGUAAKGiIkFWQQxGDHIicm93AACgpiHlImN0b3IAoFspaSNhbmdsZQBCorMiVgwAAAAAWgxhAHIAAKDQKXEidWFsAACgtSJwAIABRFRWAGUMbAxzDO8kd25WZWN0b3IAoE8pZSRlVmVjdG9yAACgXCnlImN0b3JCoL4hYQByAACgVCnlImN0b3JCoMAhYQByAACgUykAAXB1iQyMDGYAAKAdIe4kZEltcGxpZXMAoHAp6SRnaHRhcnJvdwCg2yEAAWNongyhDHIAAKAbIQCgsSHsJGVEZWxheWVkAKD0KYAGSE9hY2ZoaW1vcXN0dQC/DMgMzAzQDOIM5gwKDQ0NFA0ZDU8NVA1YDQABQ2PDDMYMyCFjeSlkeQAoZEYiVGN5ACxkYyJ1dGUAWmEAorwqYWVpedgM2wzeDOEM8iFvbmBh5CFpbF5hcgBjAFxhIWRyAADgNdgW3e8hcnQAAkRMUlXvDPYM/QwEDW8kd25BcnJvdwAAoJMhZSRmdEFycm93AACgkCHpJGdodEFycm93AKCSIXAjQXJyb3cAAKCRIechbWGjY+EkbGxDaXJjbGUAoBgicABmAADgNdhK3XICHw0AAAAAIg10AACgGiLhIXJlgKGhJUlTVQAqDTINSg3uJXRlcnNlY3Rpb24AoJMidQAAAWJwNw1ADfMhZXRFoI8icSJ1YWwAAKCRIuUicnNldEWgkCJxInVhbAAAoJIibiJpb24AAKCUImMAcgAA4DXYrtxhAHIAAKDGIgACYmNtcF8Nag2ODZANc6DQImUAdABFoNAicSJ1YWwAAKCGIgABY2huDYkNZSJlZHMAgKF7IkVTVAB4DX0NhA1xInVhbAAAoLAq7CRhbnRFcXVhbACgfSJpImxkZQAAoH8iVABoAGEA9ADHCwCgESIAodEiZXOVDZ8NciJzZXQARaCDInEidWFsAACghyJlAHQAAKDRIoAFSFJTYWNmaGlvcnMAtQ27Db8NyA3ODdsN3w3+DRgOHQ4jDk8AUgBOADuA3gDeQMEhREUAoCIhAAFIY8MNxg1jAHkAC2R5ACZkAAFidcwNzQ0JYKRjgAFhZXkA1A3XDdoN8iFvbmRh5CFpbGJhImRyAADgNdgX3QABZWnjDe4N8gHoDQAA7Q3lImZvcmUAoDQiYQCYYwABY27yDfkNayNTcGFjZQAA4F8gCiDTInBhY2UAoAkg7CFkZYChPCJFRlQABw4MDhMOcSJ1YWwAAKBDInUkbGxFcXVhbAAAoEUiaSJsZGUAAKBIInAAZgAA4DXYS93pI3BsZURvdACg2yAAAWN0Jw4rDnIAAOA12K/c8iFva2Zh4QpFDlYOYA5qDgAAbg5yDgAAAAAAAAAAAAB5DnwOqA6zDgAADg8RDxYPGg8AAWNySA5ODnUAdABlADuA2gDaQHIAb6CfIeMhaXIAoEkpcgDjAVsOAABdDnkADmR2AGUAbGEAAWl5Yw5oDnIAYwA7gNsA20AjZGIibGFjAHBhcgAA4DXYGN1yAGEAdgBlADuA2QDZQOEhY3JqYQABZGl/Dp8OZQByAAABQlCFDpcOAAFhcokOiw5yAF9gYQBjAAABZWuRDpMOAKDfI2UAdAAAoLUjYSVyZW50aGVzaXMAAKDdI28AbgBQoMMi7CF1cwCgjiIAAWdwqw6uDm8AbgByYWYAAOA12EzdAARBREVUYWRwc78O0g7ZDuEOBQPqDvMOBw9yInJvdwDCoZEhyA4AAMwOYQByAACgEilvJHduQXJyb3cAAKDFIW8kd25BcnJvdwAAoJUhcSV1aWxpYnJpdW0AAKBuKWUAZQBBoKUiciJyb3cAAKClIW8AdwBuAGEAcgByAG8A9wAQA2UAcgAAAUxS+Q4AD2UkZnRBcnJvdwAAoJYh6SRnaHRBcnJvdwCglyFpAGyg0gNvAG4ApWPpIW5nbmFjAHIAAOA12LDcaSJsZGUAaGFtAGwAO4DcANxAgAREYmNkZWZvc3YALQ8xDzUPNw89D3IPdg97D4AP4SFzaACgqyJhAHIAAKDrKnkAEmThIXNobKCpIgCg5ioAAWVyQQ9DDwCgwSKAAWJ0eQBJD00Paw9hAHIAAKAWIGmgFiDjIWFsAAJCTFNUWA9cD18PZg9hAHIAAKAjIukhbmV8YGUkcGFyYXRvcgAAoFgnaSJsZGUAAKBAItQkaGluU3BhY2UAoAogcgAA4DXYGd1wAGYAAOA12E3dYwByAADgNdix3GQiYXNoAACgqiKAAmNlZm9zAI4PkQ+VD5kPng/pIXJjdGHkIWdlAKDAInIAAOA12BrdcABmAADgNdhO3WMAcgAA4DXYstwAAmZpb3OqD64Prw+0D3IAAOA12BvdnmNwAGYAAOA12E/dYwByAADgNdiz3IAEQUlVYWNmb3N1AMgPyw/OD9EP2A/gD+QP6Q/uD2MAeQAvZGMAeQAHZGMAeQAuZGMAdQB0AGUAO4DdAN1AAAFpedwP3w9yAGMAdmErZHIAAOA12BzdcABmAADgNdhQ3WMAcgAA4DXYtNxtAGwAeGEABEhhY2RlZm9z/g8BEAUQDRAQEB0QIBAkEGMAeQAWZGMidXRlAHlhAAFheQkQDBDyIW9ufWEXZG8AdAB7YfIBFRAAABwQbwBXAGkAZAB0AOgAVAhhAJZjcgAAoCghcABmAACgJCFjAHIAAOA12LXc4QtCEEkQTRAAAGcQbRByEAAAAAAAAAAAeRCKEJcQ8hD9EAAAGxEhETIROREAAD4RYwB1AHQAZQA7gOEA4UByImV2ZQADYYCiPiJFZGl1eQBWEFkQWxBgEGUQAOA+IjMDAKA/InIAYwA7gOIA4kB0AGUAO4C0ALRAMGRsAGkAZwA7gOYA5kByoGEgAOA12B7dcgBhAHYAZQA7gOAA4EAAAWVwfBCGEAABZnCAEIQQ8yF5bQCgNSHoAIMQaABhALFjAAFhcI0QWwAAAWNskRCTEHIAAWFnAACgPypkApwQAAAAALEQAKInImFkc3ajEKcQqRCuEG4AZAAAoFUqAKBcKmwib3BlAACgWCoAoFoqAKMgImVsbXJzersQvRDAEN0Q5RDtEACgpCllAACgICJzAGQAYaAhImEEzhDQENIQ1BDWENgQ2hDcEACgqCkAoKkpAKCqKQCgqykAoKwpAKCtKQCgrikAoK8pdAB2oB8iYgBkoL4iAKCdKQABcHTpEOwQaAAAoCIixWDhIXJyAKB8IwABZ3D1EPgQbwBuAAVhZgAA4DXYUt0Ao0giRWFlaW9wBxEJEQ0RDxESERQRAKBwKuMhaXIAoG8qAKBKImQAAKBLInMAJ2DyIW94ZaBIIvEADhFpAG4AZwA7gOUA5UCAAWN0eQAmESoRKxFyAADgNdi23CpgbQBwAGWgSCLxAPgBaQBsAGQAZQA7gOMA40BtAGwAO4DkAORAAAFjaUERRxFvAG4AaQBuAPQA6AFuAHQAAKARKgAITmFiY2RlZmlrbG5vcHJzdWQRaBGXEZ8RpxGrEdIR1hErEjASexKKEn0RThNbE3oTbwB0AACg7SoAAWNybBGJEWsAAAJjZXBzdBF4EX0RghHvIW5nAKBMInAjc2lsb24A9mNyImltZQAAoDUgaQBtAGWgPSJxAACgzSJ2AY0RkRFlAGUAAKC9ImUAZABnoAUjZQAAoAUjcgBrAHSgtSPiIXJrAKC2IwABb3mjEaYRbgDnAHcRMWTxIXVvAKAeIIACY21wcnQAtBG5Eb4RwRHFEeEhdXPloDUi5ABwInR5dgAAoLApcwDpAH0RbgBvAPUA6gCAAWFodwDLEcwRzhGyYwCgNiHlIWVuAKBsInIAAOA12B/dZwCAA2Nvc3R1dncA4xHyEQUSEhIhEiYSKRKAAWFpdQDpEesR7xHwAKMFcgBjAACg7yVwAACgwyKAAWRwdAD4EfwRABJvAHQAAKAAKuwhdXMAoAEqaSJtZXMAAKACKnECCxIAAAAADxLjIXVwAKAGKmEAcgAAoAUm8iNpYW5nbGUAAWR1GhIeEu8hd24AoL0lcAAAoLMlcCJsdXMAAKAEKmUA5QBCD+UAkg9hInJvdwAAoA0pgAFha28ANhJoEncSAAFjbjoSZRJrAIABbHN0AEESRxJNEm8jemVuZ2UAAKDrKXEAdQBhAHIA5QBcBPIjaWFuZ2xlgKG0JWRscgBYElwSYBLvIXduAKC+JeUhZnQAoMIlaSJnaHQAAKC4JWsAAKAjJLEBbRIAAHUSsgFxEgAAcxIAoJIlAKCRJTQAAKCTJWMAawAAoIglAAFlb38ShxJx4D0A5SD1IWl2AOBhIuUgdAAAoBAjAAJwdHd4kRKVEpsSnxJmAADgNdhT3XSgpSJvAG0AAKClIvQhaWUAoMgiAAZESFVWYmRobXB0dXayEsES0RLgEvcS+xIKExoTHxMjEygTNxMAAkxSbHK5ErsSvRK/EgCgVyUAoFQlAKBWJQCgUyUAolAlRFVkdckSyxLNEs8SAKBmJQCgaSUAoGQlAKBnJQACTFJsctgS2hLcEt4SAKBdJQCgWiUAoFwlAKBZJQCjUSVITFJobHLrEu0S7xLxEvMS9RIAoGwlAKBjJQCgYCUAoGslAKBiJQCgXyVvAHgAAKDJKQACTFJscgITBBMGEwgTAKBVJQCgUiUAoBAlAKAMJQCiACVEVWR1EhMUExYTGBMAoGUlAKBoJQCgLCUAoDQlaSJudXMAAKCfIuwhdXMAoJ4iaSJtZXMAAKCgIgACTFJsci8TMRMzEzUTAKBbJQCgWCUAoBglAKAUJQCjAiVITFJobHJCE0QTRhNIE0oTTBMAoGolAKBhJQCgXiUAoDwlAKAkJQCgHCUAAWV2UhNVE3YA5QD5AGIAYQByADuApgCmQAACY2Vpb2ITZhNqE24TcgAA4DXYt9xtAGkAAKBPIG0A5aA9IogRbAAAoVwAYmh0E3YTAKDFKfMhdWIAoMgnbAF+E4QTbABloCIgdAAAoCIgcAAAoU4iRWWJE4sTAKCuKvGgTyI8BeEMqRMAAN8TABQDFB8UAAAjFDQUAAAAAIUUAAAAAI0UAAAAANcU4xT3FPsUAACIFQAAlhWAAWNwcgCuE7ET1RP1IXRlB2GAoikiYWJjZHMAuxO/E8QTzhPSE24AZAAAoEQqciJjdXAAAKBJKgABYXXIE8sTcAAAoEsqcAAAoEcqbwB0AACgQCoA4CkiAP4AAWVv2RPcE3QAAKBBIO4ABAUAAmFlaXXlE+8T9RP4E/AB6hMAAO0TcwAAoE0qbwBuAA1hZABpAGwAO4DnAOdAcgBjAAlhcABzAHOgTCptAACgUCpvAHQAC2GAAWRtbgAIFA0UEhRpAGwAO4C4ALhAcCJ0eXYAAKCyKXQAAIGiADtlGBQZFKJAcgBkAG8A9ABiAXIAAOA12CDdgAFjZWkAKBQqFDIUeQBHZGMAawBtoBMn4SFyawCgEyfHY3IAAKPLJUVjZWZtcz8UQRRHFHcUfBSAFACgwykAocYCZWxGFEkUcQAAoFciZQBhAlAUAAAAAGAUciJyb3cAAAFsclYUWhTlIWZ0AKC6IWkiZ2h0AACguyGAAlJTYWNkAGgUaRRrFG8UcxSuYACgyCRzAHQAAKCbIukhcmMAoJoi4SFzaACgnSJuImludAAAoBAqaQBkAACg7yrjIWlyAKDCKfUhYnN1oGMmaQB0AACgYybsApMUmhS2FAAAwxRvAG4AZaA6APGgVCKrAG0CnxQAAAAAoxRhAHSgLABAYAChASJmbKcUqRTuABMNZQAAAW14rhSyFOUhbnQAoAEiZQDzANIB5wG6FAAAwBRkoEUibwB0AACgbSpuAPQAzAGAAWZyeQDIFMsUzhQA4DXYVN1vAOQA1wEAgakAO3MeAdMUcgAAoBchAAFhb9oU3hRyAHIAAKC1IXMAcwAAoBcnAAFjdeYU6hRyAADgNdi43AABYnDuFPIUZaDPKgCg0SploNAqAKDSKuQhb3QAoO8igANkZWxwcnZ3AAYVEBUbFSEVRBVlFYQV4SFycgABbHIMFQ4VAKA4KQCgNSlwAhYVAAAAABkVcgAAoN4iYwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWlsN2E6ZHIAAOA12CjdciJlZW4AOGFjAHkARWRjAHkAXGRwAGYAAOA12FzdYwByAADgNdjA3IALQUJFSGFiY2RlZmdoamxtbm9wcnN0dXYAXhxtHHEcdRx5HN8cBx0dHTwd3B3tHfEdAR4EHh0eLB5FHrwewx7hHgkfPR9LH4ABYXJ0AGQcZxxpHHIA8gBvB/IAxQLhIWlsAKAbKeEhcnIAoA4pZ6BmIgCgiyphAHIAAKBiKWMJjRwAAJAcAACVHAAAAAAAAAAAAACZHJwcAACmHKgcrRwAANIc9SF0ZTph7SJwdHl2AKC0KXIAYQDuAFoG4iFkYbtjZwAAoegnZGyhHKMcAKCRKeUAiwYAoIUqdQBvADuAqwCrQHIAgKOQIWJmaGxwc3QAuhy/HMIcxBzHHMoczhxmoOQhcwAAoB8pcwAAoB0p6wCyGnAAAKCrIWwAAKA5KWkAbQAAoHMpbAAAoKIhAKGrKmFl1hzaHGkAbAAAoBkpc6CtKgDgrSoA/oABYWJyAOUc6RztHHIAcgAAoAwpcgBrAACgcicAAWFr8Rz4HGMAAAFla/Yc9xx7YFtgAAFlc/wc/hwAoIspbAAAAWR1Ax0FHQCgjykAoI0pAAJhZXV5Dh0RHRodHB3yIW9uPmEAAWRpFR0YHWkAbAA8YewAowbiAPccO2QAAmNxcnMkHScdLB05HWEAAKA2KXUAbwDyoBwgqhEAAWR1MB00HeghYXIAoGcpcyJoYXIAAKBLKWgAAKCyIQCiZCJmZ3FzRB1FB5Qdnh10AIACYWhscnQATh1WHWUdbB2NHXIicm93AHSgkCFhAOkAzxxhI3Jwb29uAAABZHVeHWId7yF3bgCgvSFwAACgvCHlJGZ0YXJyb3dzAKDHIWkiZ2h0AIABYWhzAHUdex2DHXIicm93APOglCGdBmEAcgBwAG8AbwBuAPMAzgtxAHUAaQBnAGEAcgByAG8A9wBlGugkcmVldGltZXMAoMsi8aFkIk0HAACaHWwAYQBuAPQAXgcAon0qY2Rnc6YdqR2xHbcdYwAAoKgqbwB0AG+gfypyoIEqAKCDKmXg2iIA/nMAAKCTKoACYWRlZ3MAwB3GHcod1h3ZHXAAcAByAG8A+ACmHG8AdAAAoNYicQAAAWdxzx3SHXQA8gBGB2cAdADyAHQcdADyAFMHaQDtAGMHgAFpbHIA4h3mHeod8yFodACgfClvAG8A8gDKBgDgNdgp3UWgdiIAoJEqYQH1Hf4dcgAAAWR1YB35HWygvCEAoGopbABrAACghCVjAHkAWWQAomoiYWNodAweDx4VHhkecgDyAGsdbwByAG4AZQDyAGAW4SFyZACgaylyAGkAAKD6JQABaW8hHiQe5CFvdEBh9SFzdGGgsCPjIWhlAKCwIwACRWFlczMeNR48HkEeAKBoInAAcKCJKvIhb3gAoIkqcaCHKvGghyo0HmkAbQAAoOYiAARhYm5vcHR3elIeXB5fHoUelh6mHqsetB4AAW5yVh5ZHmcAAKDsJ3IAAKD9IXIA6wCwBmcAgAFsbXIAZh52Hnse5SFmdAABYXKIB2weaQBnAGgAdABhAHIAcgBvAPcAkwfhInBzdG8AoPwnaQBnAGgAdABhAHIAcgBvAPcAmgdwI2Fycm93AAABbHKNHpEeZQBmAPQAxhxpImdodAAAoKwhgAFhZmwAnB6fHqIecgAAoIUpAOA12F3ddQBzAACgLSppIm1lcwAAoDQqYQGvHrMecwB0AACgFyLhAIoOZaHKJbkeRhLuIWdlAKDKJWEAcgBsoCgAdAAAoJMpgAJhY2htdADMHs8e1R7bHt0ecgDyAJ0GbwByAG4AZQDyANYWYQByAGSgyyEAoG0pAKAOIHIAaQAAoL8iAANhY2hpcXTrHu8e1QfzHv0eBh/xIXVvAKA5IHIAAOA12MHcbQDloXIi+h4AAPweAKCNKgCgjyoAAWJ19xwBH28AcqAYIACgGiDyIW9rQmEAhDwAO2NkaGlscXJCBhcfxh0gHyQfKB8sHzEfAAFjaRsfHR8AoKYqcgAAoHkqcgBlAOUAkx3tIWVzAKDJIuEhcnIAoHYpdSJlc3QAAKB7KgABUGk1HzkfYQByAACglillocMlAgdfEnIAAAFkdUIfRx9zImhhcgAAoEop6CFhcgCgZikAAWVuTx9WH3IjdG5lcXEAAOBoIgD+xQBUHwAHRGFjZGVmaGlsbm9wc3VuH3Ifoh+rH68ftx+7H74f5h/uH/MfBwj/HwsgxCFvdACgOiIAAmNscHJ5H30fiR+eH3IAO4CvAK9AAAFldIEfgx8AoEImZaAgJ3MAZQAAoCAnc6CmIXQAbwCAoaYhZGx1AJQfmB+cH28AdwDuAHkDZQBmAPQA6gbwAOkO6yFlcgCgriUAAW95ph+qH+0hbWEAoCkqPGThIXNoAKAUIOElc3VyZWRhbmdsZQCgISJyAADgNdgq3W8AAKAnIYABY2RuAMQfyR/bH3IAbwA7gLUAtUBhoiMi0B8AANMf1x9zAPQAKxFpAHIAAKDwKm8AdAA7gLcAt0B1AHMA4qESIh4TAADjH3WgOCIAoCoqYwHqH+0fcAAAoNsq8gB+GnAAbAB1APMACAgAAWRw9x/7H+UhbHMAoKciZgAA4DXYXt0AAWN0AyAHIHIAAOA12MLc8CFvcwCgPiJsobwDECAVIPQiaW1hcACguCJhAPAAEyAADEdMUlZhYmNkZWZnaGlqbG1vcHJzdHV2dzwgRyBmIG0geSCqILgg2iDeIBEhFSEyIUMhTSFQIZwhnyHSIQAiIyKLIrEivyIUIwABZ3RAIEMgAODZIjgD9uBrItIgBwmAAWVsdABNIF8gYiBmAHQAAAFhclMgWCByInJvdwAAoM0h6SRnaHRhcnJvdwCgziEA4NgiOAP24Goi0iBfCekkZ2h0YXJyb3cAoM8hAAFEZHEgdSDhIXNoAKCvIuEhc2gAoK4igAJiY25wdACCIIYgiSCNIKIgbABhAACgByL1IXRlRGFnAADgICLSIACiSSJFaW9wlSCYIJwgniAA4HAqOANkAADgSyI4A3MASWFyAG8A+AAyCnUAcgBhoG4mbADzoG4mmwjzAa8gAACzIHAAO4CgAKBAbQBwAOXgTiI4AyoJgAJhZW91eQDBIMogzSDWINkg8AHGIAAAyCAAoEMqbwBuAEhh5CFpbEZhbgBnAGSgRyJvAHQAAOBtKjgDcAAAoEIqPWThIXNoAKATIACjYCJBYWRxc3jpIO0g+SD+IAIhDCFyAHIAAKDXIXIAAAFocvIg9SBrAACgJClvoJch9wAGD28AdAAA4FAiOAN1AGkA9gC7CAABZWkGIQohYQByAACgKCntAN8I6SFzdPOgBCLlCHIAAOA12CvdAAJFZXN0/wgcISshLiHxoXEiIiEAABMJ8aFxIgAJAAAnIWwAYQBuAPQAEwlpAO0AGQlyoG8iAKBvIoABQWFwADghOyE/IXIA8gBeIHIAcgAAoK4hYQByAACg8ipzogsiSiEAAAAAxwtkoPwiAKD6ImMAeQBaZIADQUVhZGVzdABcIV8hYiFmIWkhkyGWIXIA8gBXIADgZiI4A3IAcgAAoJohcgAAoCUggKFwImZxcwBwIYQhjiF0AAABYXJ1IXohcgByAG8A9wBlIWkAZwBoAHQAYQByAHIAbwD3AD4h8aFwImAhAACKIWwAYQBuAPQAZwlz4H0qOAMAoG4iaQDtAG0JcqBuImkA5aDqIkUJaQDkADoKAAFwdKMhpyFmAADgNdhf3YCBrAA7aW4AriGvIcchrEBuAIChCSJFZHYAtyG6Ib8hAOD5IjgDbwB0AADg9SI4A+EB1gjEIcYhAKD3IgCg9iJpAHagDCLhAagJzyHRIQCg/iIAoP0igAFhb3IA2CHsIfEhcgCAoSYiYXN0AOAh5SHpIWwAbABlAOwAywhsAADg/SrlIADgAiI4A2wiaW50AACgFCrjoYAi9yEAAPohdQDlAJsJY+CvKjgDZaCAIvEAkwkAAkFhaXQHIgoiFyIeInIA8gBsIHIAcgAAoZshY3cRIhQiAOAzKTgDAOCdITgDZyRodGFycm93AACgmyFyAGkA5aDrIr4JgANjaGltcHF1AC8iPCJHIpwhTSJQIloigKGBImNlcgA2Iv0JOSJ1AOUABgoA4DXYw9zvIXJ0bQKdIQAAAABEImEAcgDhAOEhbQBloEEi8aBEIiYKYQDyAMsIcwB1AAABYnBWIlgi5QDUCeUA3wmAAWJjcABgInMieCKAoYQiRWVzAGci7glqIgDgxSo4A2UAdABl4IIi0iBxAPGgiCJoImMAZaCBIvEA/gmAoYUiRWVzAH8iFgqCIgDgxio4A2UAdABl4IMi0iBxAPGgiSKAIgACZ2lscpIilCKaIpwi7AAMCWwAZABlADuA8QDxQOcAWwlpI2FuZ2xlAAABbHKkIqoi5SFmdGWg6iLxAEUJaSJnaHQAZaDrIvEAvgltoL0DAKEjAGVzuCK8InIAbwAAoBYhcAAAoAcggARESGFkZ2lscnMAziLSItYi2iLeIugi7SICIw8j4SFzaACgrSLhIXJyAKAEKXAAAOBNItIg4SFzaACgrCIAAWV04iLlIgDgZSLSIADgPgDSIG4iZmluAACg3imAAUFldADzIvci+iJyAHIAAKACKQDgZCLSIHLgPADSIGkAZQAA4LQi0iAAAUF0BiMKI3IAcgAAoAMp8iFpZQDgtSLSIGkAbQAA4Dwi0iCAAUFhbgAaIx4jKiNyAHIAAKDWIXIAAAFociMjJiNrAACgIylvoJYh9wD/DuUhYXIAoCcpUxJqFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVCMAAF4jaSN/I4IjjSOeI8AUAAAAAKYjwCMAANoj3yMAAO8jHiQvJD8kRCQAAWNzVyNsFHUAdABlADuA8wDzQAABaXlhI2cjcgBjoJoiO4D0APRAPmSAAmFiaW9zAHEjdCN3I3EBeiNzAOgAdhTsIWFjUWF2AACgOCrvIWxkAKC8KewhaWdTYQABY3KFI4kjaQByAACgvykA4DXYLN1vA5QjAAAAAJYjAACcI24A22JhAHYAZQA7gPIA8kAAoMEpAAFibaEjjAphAHIAAKC1KQACYWNpdKwjryO6I70jcgDyAFkUAAFpcrMjtiNyAACgvinvIXNzAKC7KW4A5QDZCgCgwCmAAWFlaQDFI8gjyyNjAHIATWFnAGEAyWOAAWNkbgDRI9Qj1iPyIW9uv2MAoLYpdQDzAHgBcABmAADgNdhg3YABYWVsAOQj5yPrI3IAAKC3KXIAcAAAoLkpdQDzAHwBAKMoImFkaW9zdvkj/CMPJBMkFiQbJHIA8gBeFIChXSplZm0AAyQJJAwkcgBvoDQhZgAAoDQhO4CqAKpAO4C6ALpA5yFvZgCgtiJyAACgVipsIm9wZQAAoFcqAKBbKoABY2xvACMkJSQrJPIACCRhAHMAaAA7gPgA+EBsAACgmCJpAGwBMyQ4JGQAZQA7gPUA9UBlAHMAYaCXInMAAKA2Km0AbAA7gPYA9kDiIWFyAKA9I+EKXiQAAHokAAB8JJQkAACYJKkkAAAAALUkEQsAAPAkAAAAAAQleiUAAIMlcgCAoSUiYXN0AGUkbyQBCwCBtgA7bGokayS2QGwAZQDsABgDaQJ1JAAAAAB4JG0AAKDzKgCg/Sp5AD9kcgCAAmNpbXB0AIUkiCSLJJkSjyRuAHQAJWBvAGQALmBpAGwAAKAwIOUhbmsAoDEgcgAA4DXYLd2AAWltbwCdJKAkpCR2oMYD1WNtAGEA9AD+B24AZQAAoA4m9KHAA64kAAC0JGMjaGZvcmsAAKDUItZjAAFhdbgkxCRuAAABY2u9JMIkawBooA8hAKAOIfYAaRpzAACkKwBhYmNkZW1zdNMkIRPXJNsk4STjJOck6yTjIWlyAKAjKmkAcgAAoCIqAAFvdYsW3yQAoCUqAKByKm4AO4CxALFAaQBtAACgJip3AG8AAKAnKoABaXB1APUk+iT+JO4idGludACgFSpmAADgNdhh3W4AZAA7gKMAo0CApHoiRWFjZWlub3N1ABMlFSUYJRslTCVRJVklSSV1JQCgsypwAACgtyp1AOUAPwtjoK8qgKJ6ImFjZW5zACclLSU0JTYlSSVwAHAAcgBvAPgAFyV1AHIAbAB5AGUA8QA/C/EAOAuAAWFlcwA8JUElRSXwInByb3gAoLkqcQBxAACgtSppAG0AAKDoImkA7QBEC20AZQDzoDIgIguAAUVhcwBDJVclRSXwAEAlgAFkZnAATwtfJXElgAFhbHMAZSVpJW0l7CFhcgCgLiPpIW5lAKASI/UhcmYAoBMjdKAdIu8AWQvyIWVsAKCwIgABY2l9JYElcgAA4DXYxdzIY24iY3NwAACgCCAAA2Zpb3BzdZElKxuVJZolnyWkJXIAAOA12C7dcABmAADgNdhi3XIiaW1lAACgVyBjAHIAAOA12MbcgAFhZW8AqiW6JcAldAAAAWVpryW2JXIAbgBpAG8AbgDzABkFbgB0AACgFipzAHQAZaA/APEACRj0AG0LgApBQkhhYmNkZWZoaWxtbm9wcnN0dXgA4yXyJfYl+iVpJpAmpia9JtUm5ib4JlonaCdxJ3UnnietJ7EnyCfiJ+cngAFhcnQA6SXsJe4lcgDyAJkM8gD6AuEhaWwAoBwpYQByAPIA3BVhAHIAAKBkKYADY2RlbnFydAAGJhAmEyYYJiYmKyZaJgABZXUKJg0mAOA9IjEDdABlAFVhaQDjACAN7SJwdHl2AKCzKWcAgKHpJ2RlbAAgJiImJCYAoJIpAKClKeUA9wt1AG8AO4C7ALtAcgAApZIhYWJjZmhscHN0dz0mQCZFJkcmSiZMJk4mUSZVJlgmcAAAoHUpZqDlIXMAAKAgKQCgMylzAACgHinrALka8ACVHmwAAKBFKWkAbQAAoHQpbAAAoKMhAKCdIQABYWleJmImaQBsAACgGilvAG6gNiJhAGwA8wB2C4ABYWJyAG8mciZ2JnIA8gAvEnIAawAAoHMnAAFha3omgSZjAAABZWt/JoAmfWBdYAABZXOFJocmAKCMKWwAAAFkdYwmjiYAoI4pAKCQKQACYWV1eZcmmiajJqUm8iFvbllhAAFkaZ4moSZpAGwAV2HsAA8M4gCAJkBkAAJjbHFzrSawJrUmuiZhAACgNylkImhhcgAAoGkpdQBvAPKgHSCjAWgAAKCzIYABYWNnAMMm0iaUC2wAgKEcIWlwcwDLJs4migxuAOUAoAxhAHIA9ADaC3QAAKCtJYABaWxyANsm3ybjJvMhaHQAoH0pbwBvAPIANgwA4DXYL90AAWFv6ib1JnIAAAFkde8m8SYAoMEhbKDAIQCgbCl2oMED8WOAAWducwD+Jk4nUCdoAHQAAANhaGxyc3QKJxInISc1Jz0nRydyInJvdwB0oJIhYQDpAFYmYSNycG9vbgAAAWR1GiceJ28AdwDuAPAmcAAAoMAh5SFmdAABYWgnJy0ncgByAG8AdwDzAAkMYQByAHAAbwBvAG4A8wATBGklZ2h0YXJyb3dzAACgySFxAHUAaQBnAGEAcgByAG8A9wBZJugkcmVldGltZXMAoMwiZwDaYmkAbgBnAGQAbwB0AHMAZQDxABwYgAFhaG0AYCdjJ2YncgDyAAkMYQDyABMEAKAPIG8idXN0AGGgsSPjIWhlAKCxI+0haWQAoO4qAAJhYnB0fCeGJ4knmScAAW5ygCeDJ2cAAKDtJ3IAAKD+IXIA6wAcDIABYWZsAI8nkieVJ3IAAKCGKQDgNdhj3XUAcwAAoC4qaSJtZXMAAKA1KgABYXCiJ6gncgBnoCkAdAAAoJQp7yJsaW50AKASKmEAcgDyADwnAAJhY2hxuCe8J6EMwCfxIXVvAKA6IHIAAOA12MfcAAFidYAmxCdvAPKgGSCoAYABaGlyAM4n0ifWJ3IAZQDlAE0n7SFlcwCgyiJpAIChuSVlZmwAXAxjEt4n9CFyaQCgzinsInVoYXIAoGgpAKAeIWENBSgJKA0oSyhVKIYoAACLKLAoAAAAAOMo5ygAABApJCkxKW0pcSmHKaYpAACYKgAAAACxKmMidXRlAFthcQB1AO8ABR+ApHsiRWFjZWlucHN5ABwoHignKCooLygyKEEoRihJKACgtCrwASMoAAAlKACguCpvAG4AYWF1AOUAgw1koLAqaQBsAF9hcgBjAF1hgAFFYXMAOCg6KD0oAKC2KnAAAKC6KmkAbQAAoOki7yJsaW50AKATKmkA7QCIDUFkbwB0AGKixSKRFgAAAABTKACgZiqAA0FhY21zdHgAYChkKG8ocyh1KHkogihyAHIAAKDYIXIAAAFocmkoayjrAJAab6CYIfcAzAd0ADuApwCnQGkAO2D3IWFyAKApKW0AAAFpbn4ozQBuAHUA8wDOAHQAAKA2J3IA7+A12DDdIxkAAmFjb3mRKJUonSisKHIAcAAAoG8mAAFoeZkonChjAHkASWRIZHIAdABtAqUoAAAAAKgoaQDkAFsPYQByAGEA7ABsJDuArQCtQAABZ22zKLsobQBhAAChwwNmdroouijCY4CjPCJkZWdsbnByAMgozCjPKNMo1yjaKN4obwB0AACgairxoEMiCw5FoJ4qAKCgKkWgnSoAoJ8qZQAAoEYi7CF1cwCgJCrhIXJyAKByKWEAcgDyAPwMAAJhZWl07Sj8KAEpCCkAAWxz8Sj4KGwAcwBlAHQAbQDpAH8oaABwAACgMyrwImFyc2wAoOQpAAFkbFoPBSllAACgIyNloKoqc6CsKgDgrCoA/oABZmxwABUpGCkfKfQhY3lMZGKgLwBhoMQpcgAAoD8jZgAA4DXYZN1hAAABZHIoKRcDZQBzAHWgYCZpAHQAAKBgJoABY3N1ADYpRilhKQABYXU6KUApcABzoJMiAOCTIgD+cABzoJQiAOCUIgD+dQAAAWJwSylWKQChjyJlcz4NUCllAHQAZaCPIvEAPw0AoZAiZXNIDVspZQB0AGWgkCLxAEkNAKGhJWFmZilbBHIAZQFrKVwEAKChJWEAcgDyAAMNAAJjZW10dyl7KX8pgilyAADgNdjI3HQAbQDuAM4AaQDsAAYpYQByAOYAVw0AAWFyiimOKXIA5qAGJhESAAFhbpIpoylpImdodAAAAWVwmSmgKXAAcwBpAGwAbwDuANkXaADpAKAkcwCvYIACYmNtbnAArin8KY4NJSooKgCkgiJFZGVtbnByc7wpvinCKcgpzCnUKdgp3CkAoMUqbwB0AACgvSpkoIYibwB0AACgwyr1IWx0AKDBKgABRWXQKdIpAKDLKgCgiiLsIXVzAKC/KuEhcnIAoHkpgAFlaXUA4inxKfQpdAAAoYIiZW7oKewpcQDxoIYivSllAHEA8aCKItEpbQAAoMcqAAFicPgp+ikAoNUqAKDTKmMAgKJ7ImFjZW5zAAcqDSoUKhYqRihwAHAAcgBvAPgAIyh1AHIAbAB5AGUA8QCDDfEAfA2AAWFlcwAcKiIqPShwAHAAcgBvAPgAPChxAPEAOShnAACgaiYApoMiMTIzRWRlaGxtbnBzPCo/KkIqRSpHKlIqWCpjKmcqaypzKncqO4C5ALlAO4CyALJAO4CzALNAAKDGKgABb3NLKk4qdAAAoL4qdQBiAACg2CpkoIcibwB0AACgxCpzAAABb3VdKmAqbAAAoMknYgAAoNcq4SFycgCgeyn1IWx0AKDCKgABRWVvKnEqAKDMKgCgiyLsIXVzAKDAKoABZWl1AH0qjCqPKnQAAKGDImVugyqHKnEA8aCHIkYqZQBxAPGgiyJwKm0AAKDIKgABYnCTKpUqAKDUKgCg1iqAAUFhbgCdKqEqrCpyAHIAAKDZIXIAAAFocqYqqCrrAJUab6CZIfcAxQf3IWFyAKAqKWwAaQBnADuA3wDfQOELzyrZKtwq6SrsKvEqAAD1KjQrAAAAAAAAAAAAAEwrbCsAAHErvSsAAAAAAADRK3IC1CoAAAAA2CrnIWV0AKAWI8RjcgDrAOUKgAFhZXkA4SrkKucq8iFvbmVh5CFpbGNhQmRvAPQAIg5sInJlYwAAoBUjcgAA4DXYMd0AAmVpa2/7KhIrKCsuK/IBACsAAAkrZQAAATRm6g0EK28AcgDlAOsNYQBzorgDECsAAAAAEit5AG0A0WMAAWNuFislK2sAAAFhcxsrIStwAHAAcgBvAPgAFw5pAG0AAKA8InMA8AD9DQABYXMsKyEr8AAXDnIAbgA7gP4A/kDsATgrOyswG2QA5QBnAmUAcwCAgdcAO2JkAEMrRCtJK9dAYaCgInIAAKAxKgCgMCqAAWVwcwBRK1MraSvhAAkh4qKkIlsrXysAAAAAYytvAHQAAKA2I2kAcgAAoPEqb+A12GXdcgBrAACg2irhAHgociJpbWUAAKA0IIABYWlwAHYreSu3K2QA5QC+DYADYWRlbXBzdACFK6MrmiunK6wrsCuzK24iZ2xlAACitSVkbHFykCuUK5ornCvvIXduAKC/JeUhZnRloMMl8QACBwCgXCJpImdodABloLkl8QBdDG8AdAAAoOwlaSJudXMAAKA6KuwhdXMAoDkqYgAAoM0p6SFtZQCgOyrlInppdW0AoOIjgAFjaHQAwivKK80rAAFyecYrySsA4DXYydxGZGMAeQBbZPIhb2tnYQABaW/UK9creAD0ANERaCJlYWQAAAFsct4r5ytlAGYAdABhAHIAcgBvAPcAXQbpJGdodGFycm93AKCgIQAJQUhhYmNkZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg");

// node_modules/entities/dist/esm/generated/decode-data-xml.js
var xmlDecodeTree = /* @__PURE__ */ decodeBase64("AAJhZ2xxBwARABMAFQBtAg0AAAAAAA8AcAAmYG8AcwAnYHQAPmB0ADxg9SFvdCJg");

// node_modules/entities/dist/esm/internal/bin-trie-flags.js
var BinTrieFlags2;
(function(BinTrieFlags3) {
  BinTrieFlags3[BinTrieFlags3["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags3[BinTrieFlags3["FLAG13"] = 8192] = "FLAG13";
  BinTrieFlags3[BinTrieFlags3["BRANCH_LENGTH"] = 8064] = "BRANCH_LENGTH";
  BinTrieFlags3[BinTrieFlags3["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags2 || (BinTrieFlags2 = {}));

// node_modules/entities/dist/esm/decode.js
var CharCodes2;
(function(CharCodes4) {
  CharCodes4[CharCodes4["NUM"] = 35] = "NUM";
  CharCodes4[CharCodes4["SEMI"] = 59] = "SEMI";
  CharCodes4[CharCodes4["EQUALS"] = 61] = "EQUALS";
  CharCodes4[CharCodes4["ZERO"] = 48] = "ZERO";
  CharCodes4[CharCodes4["NINE"] = 57] = "NINE";
  CharCodes4[CharCodes4["LOWER_A"] = 97] = "LOWER_A";
  CharCodes4[CharCodes4["LOWER_F"] = 102] = "LOWER_F";
  CharCodes4[CharCodes4["LOWER_X"] = 120] = "LOWER_X";
  CharCodes4[CharCodes4["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes4[CharCodes4["UPPER_A"] = 65] = "UPPER_A";
  CharCodes4[CharCodes4["UPPER_F"] = 70] = "UPPER_F";
  CharCodes4[CharCodes4["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes2 || (CharCodes2 = {}));
var TO_LOWER_BIT2 = 32;
function isNumber2(code) {
  return code >= CharCodes2.ZERO && code <= CharCodes2.NINE;
}
function isHexadecimalCharacter2(code) {
  return code >= CharCodes2.UPPER_A && code <= CharCodes2.UPPER_F || code >= CharCodes2.LOWER_A && code <= CharCodes2.LOWER_F;
}
function isAsciiAlphaNumeric2(code) {
  return code >= CharCodes2.UPPER_A && code <= CharCodes2.UPPER_Z || code >= CharCodes2.LOWER_A && code <= CharCodes2.LOWER_Z || isNumber2(code);
}
function isEntityInAttributeInvalidEnd2(code) {
  return code === CharCodes2.EQUALS || isAsciiAlphaNumeric2(code);
}
var EntityDecoderState2;
(function(EntityDecoderState3) {
  EntityDecoderState3[EntityDecoderState3["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState3[EntityDecoderState3["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState3[EntityDecoderState3["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState3[EntityDecoderState3["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState3[EntityDecoderState3["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState2 || (EntityDecoderState2 = {}));
var DecodingMode2;
(function(DecodingMode3) {
  DecodingMode3[DecodingMode3["Legacy"] = 0] = "Legacy";
  DecodingMode3[DecodingMode3["Strict"] = 1] = "Strict";
  DecodingMode3[DecodingMode3["Attribute"] = 2] = "Attribute";
})(DecodingMode2 || (DecodingMode2 = {}));
var EntityDecoder2 = class {
  constructor(decodeTree, emitCodePoint, errors) {
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors;
    this.state = EntityDecoderState2.EntityStart;
    this.consumed = 1;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.decodeMode = DecodingMode2.Strict;
    this.runConsumed = 0;
  }
  /** Resets the instance to make it reusable. */
  startEntity(decodeMode) {
    this.decodeMode = decodeMode;
    this.state = EntityDecoderState2.EntityStart;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.consumed = 1;
    this.runConsumed = 0;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(input, offset) {
    switch (this.state) {
      case EntityDecoderState2.EntityStart: {
        if (input.charCodeAt(offset) === CharCodes2.NUM) {
          this.state = EntityDecoderState2.NumericStart;
          this.consumed += 1;
          return this.stateNumericStart(input, offset + 1);
        }
        this.state = EntityDecoderState2.NamedEntity;
        return this.stateNamedEntity(input, offset);
      }
      case EntityDecoderState2.NumericStart: {
        return this.stateNumericStart(input, offset);
      }
      case EntityDecoderState2.NumericDecimal: {
        return this.stateNumericDecimal(input, offset);
      }
      case EntityDecoderState2.NumericHex: {
        return this.stateNumericHex(input, offset);
      }
      case EntityDecoderState2.NamedEntity: {
        return this.stateNamedEntity(input, offset);
      }
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(input, offset) {
    if (offset >= input.length) {
      return -1;
    }
    if ((input.charCodeAt(offset) | TO_LOWER_BIT2) === CharCodes2.LOWER_X) {
      this.state = EntityDecoderState2.NumericHex;
      this.consumed += 1;
      return this.stateNumericHex(input, offset + 1);
    }
    this.state = EntityDecoderState2.NumericDecimal;
    return this.stateNumericDecimal(input, offset);
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(input, offset) {
    while (offset < input.length) {
      const char = input.charCodeAt(offset);
      if (isNumber2(char) || isHexadecimalCharacter2(char)) {
        const digit = char <= CharCodes2.NINE ? char - CharCodes2.ZERO : (char | TO_LOWER_BIT2) - CharCodes2.LOWER_A + 10;
        this.result = this.result * 16 + digit;
        this.consumed++;
        offset++;
      } else {
        return this.emitNumericEntity(char, 3);
      }
    }
    return -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(input, offset) {
    while (offset < input.length) {
      const char = input.charCodeAt(offset);
      if (isNumber2(char)) {
        this.result = this.result * 10 + (char - CharCodes2.ZERO);
        this.consumed++;
        offset++;
      } else {
        return this.emitNumericEntity(char, 2);
      }
    }
    return -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(lastCp, expectedLength) {
    var _a4;
    if (this.consumed <= expectedLength) {
      (_a4 = this.errors) === null || _a4 === void 0 ? void 0 : _a4.absenceOfDigitsInNumericCharacterReference(this.consumed);
      return 0;
    }
    if (lastCp === CharCodes2.SEMI) {
      this.consumed += 1;
    } else if (this.decodeMode === DecodingMode2.Strict) {
      return 0;
    }
    this.emitCodePoint(replaceCodePoint2(this.result), this.consumed);
    if (this.errors) {
      if (lastCp !== CharCodes2.SEMI) {
        this.errors.missingSemicolonAfterCharacterReference();
      }
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param input The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(input, offset) {
    const { decodeTree } = this;
    let current = decodeTree[this.treeIndex];
    let valueLength = (current & BinTrieFlags2.VALUE_LENGTH) >> 14;
    while (offset < input.length) {
      if (valueLength === 0 && (current & BinTrieFlags2.FLAG13) !== 0) {
        const runLength = (current & BinTrieFlags2.BRANCH_LENGTH) >> 7;
        if (this.runConsumed === 0) {
          const firstChar = current & BinTrieFlags2.JUMP_TABLE;
          if (input.charCodeAt(offset) !== firstChar) {
            return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
          }
          offset++;
          this.excess++;
          this.runConsumed++;
        }
        while (this.runConsumed < runLength) {
          if (offset >= input.length) {
            return -1;
          }
          const charIndexInPacked = this.runConsumed - 1;
          const packedWord = decodeTree[this.treeIndex + 1 + (charIndexInPacked >> 1)];
          const expectedChar = charIndexInPacked % 2 === 0 ? packedWord & 255 : packedWord >> 8 & 255;
          if (input.charCodeAt(offset) !== expectedChar) {
            this.runConsumed = 0;
            return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
          }
          offset++;
          this.excess++;
          this.runConsumed++;
        }
        this.runConsumed = 0;
        this.treeIndex += 1 + (runLength >> 1);
        current = decodeTree[this.treeIndex];
        valueLength = (current & BinTrieFlags2.VALUE_LENGTH) >> 14;
      }
      if (offset >= input.length)
        break;
      const char = input.charCodeAt(offset);
      if (char === CharCodes2.SEMI && valueLength !== 0 && (current & BinTrieFlags2.FLAG13) !== 0) {
        return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
      }
      this.treeIndex = determineBranch2(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
      if (this.treeIndex < 0) {
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === DecodingMode2.Attribute && // We shouldn't have consumed any characters after the entity,
        (valueLength === 0 || // And there should be no invalid characters.
        isEntityInAttributeInvalidEnd2(char)) ? 0 : this.emitNotTerminatedNamedEntity();
      }
      current = decodeTree[this.treeIndex];
      valueLength = (current & BinTrieFlags2.VALUE_LENGTH) >> 14;
      if (valueLength !== 0) {
        if (char === CharCodes2.SEMI) {
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        }
        if (this.decodeMode !== DecodingMode2.Strict && (current & BinTrieFlags2.FLAG13) === 0) {
          this.result = this.treeIndex;
          this.consumed += this.excess;
          this.excess = 0;
        }
      }
      offset++;
      this.excess++;
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var _a4;
    const { result, decodeTree } = this;
    const valueLength = (decodeTree[result] & BinTrieFlags2.VALUE_LENGTH) >> 14;
    this.emitNamedEntityData(result, valueLength, this.consumed);
    (_a4 = this.errors) === null || _a4 === void 0 ? void 0 : _a4.missingSemicolonAfterCharacterReference();
    return this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(result, valueLength, consumed) {
    const { decodeTree } = this;
    this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~(BinTrieFlags2.VALUE_LENGTH | BinTrieFlags2.FLAG13) : decodeTree[result + 1], consumed);
    if (valueLength === 3) {
      this.emitCodePoint(decodeTree[result + 2], consumed);
    }
    return consumed;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var _a4;
    switch (this.state) {
      case EntityDecoderState2.NamedEntity: {
        return this.result !== 0 && (this.decodeMode !== DecodingMode2.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      }
      // Otherwise, emit a numeric entity if we have one.
      case EntityDecoderState2.NumericDecimal: {
        return this.emitNumericEntity(0, 2);
      }
      case EntityDecoderState2.NumericHex: {
        return this.emitNumericEntity(0, 3);
      }
      case EntityDecoderState2.NumericStart: {
        (_a4 = this.errors) === null || _a4 === void 0 ? void 0 : _a4.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      case EntityDecoderState2.EntityStart: {
        return 0;
      }
    }
  }
};
function determineBranch2(decodeTree, current, nodeIndex, char) {
  const branchCount = (current & BinTrieFlags2.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags2.JUMP_TABLE;
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
  }
  if (jumpOffset) {
    const value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
  }
  const packedKeySlots = branchCount + 1 >> 1;
  let lo = 0;
  let hi = branchCount - 1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    const slot = mid >> 1;
    const packed = decodeTree[nodeIndex + slot];
    const midKey = packed >> (mid & 1) * 8 & 255;
    if (midKey < char) {
      lo = mid + 1;
    } else if (midKey > char) {
      hi = mid - 1;
    } else {
      return decodeTree[nodeIndex + packedKeySlots + mid];
    }
  }
  return -1;
}

// node_modules/htmlparser2/dist/esm/Tokenizer.js
var CharCodes3;
(function(CharCodes4) {
  CharCodes4[CharCodes4["Tab"] = 9] = "Tab";
  CharCodes4[CharCodes4["NewLine"] = 10] = "NewLine";
  CharCodes4[CharCodes4["FormFeed"] = 12] = "FormFeed";
  CharCodes4[CharCodes4["CarriageReturn"] = 13] = "CarriageReturn";
  CharCodes4[CharCodes4["Space"] = 32] = "Space";
  CharCodes4[CharCodes4["ExclamationMark"] = 33] = "ExclamationMark";
  CharCodes4[CharCodes4["Number"] = 35] = "Number";
  CharCodes4[CharCodes4["Amp"] = 38] = "Amp";
  CharCodes4[CharCodes4["SingleQuote"] = 39] = "SingleQuote";
  CharCodes4[CharCodes4["DoubleQuote"] = 34] = "DoubleQuote";
  CharCodes4[CharCodes4["Dash"] = 45] = "Dash";
  CharCodes4[CharCodes4["Slash"] = 47] = "Slash";
  CharCodes4[CharCodes4["Zero"] = 48] = "Zero";
  CharCodes4[CharCodes4["Nine"] = 57] = "Nine";
  CharCodes4[CharCodes4["Semi"] = 59] = "Semi";
  CharCodes4[CharCodes4["Lt"] = 60] = "Lt";
  CharCodes4[CharCodes4["Eq"] = 61] = "Eq";
  CharCodes4[CharCodes4["Gt"] = 62] = "Gt";
  CharCodes4[CharCodes4["Questionmark"] = 63] = "Questionmark";
  CharCodes4[CharCodes4["UpperA"] = 65] = "UpperA";
  CharCodes4[CharCodes4["LowerA"] = 97] = "LowerA";
  CharCodes4[CharCodes4["UpperF"] = 70] = "UpperF";
  CharCodes4[CharCodes4["LowerF"] = 102] = "LowerF";
  CharCodes4[CharCodes4["UpperZ"] = 90] = "UpperZ";
  CharCodes4[CharCodes4["LowerZ"] = 122] = "LowerZ";
  CharCodes4[CharCodes4["LowerX"] = 120] = "LowerX";
  CharCodes4[CharCodes4["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes3 || (CharCodes3 = {}));
var State;
(function(State2) {
  State2[State2["Text"] = 1] = "Text";
  State2[State2["BeforeTagName"] = 2] = "BeforeTagName";
  State2[State2["InTagName"] = 3] = "InTagName";
  State2[State2["InSelfClosingTag"] = 4] = "InSelfClosingTag";
  State2[State2["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
  State2[State2["InClosingTagName"] = 6] = "InClosingTagName";
  State2[State2["AfterClosingTagName"] = 7] = "AfterClosingTagName";
  State2[State2["BeforeAttributeName"] = 8] = "BeforeAttributeName";
  State2[State2["InAttributeName"] = 9] = "InAttributeName";
  State2[State2["AfterAttributeName"] = 10] = "AfterAttributeName";
  State2[State2["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
  State2[State2["InAttributeValueDq"] = 12] = "InAttributeValueDq";
  State2[State2["InAttributeValueSq"] = 13] = "InAttributeValueSq";
  State2[State2["InAttributeValueNq"] = 14] = "InAttributeValueNq";
  State2[State2["BeforeDeclaration"] = 15] = "BeforeDeclaration";
  State2[State2["InDeclaration"] = 16] = "InDeclaration";
  State2[State2["InProcessingInstruction"] = 17] = "InProcessingInstruction";
  State2[State2["BeforeComment"] = 18] = "BeforeComment";
  State2[State2["CDATASequence"] = 19] = "CDATASequence";
  State2[State2["InSpecialComment"] = 20] = "InSpecialComment";
  State2[State2["InCommentLike"] = 21] = "InCommentLike";
  State2[State2["BeforeSpecialS"] = 22] = "BeforeSpecialS";
  State2[State2["BeforeSpecialT"] = 23] = "BeforeSpecialT";
  State2[State2["SpecialStartSequence"] = 24] = "SpecialStartSequence";
  State2[State2["InSpecialTag"] = 25] = "InSpecialTag";
  State2[State2["InEntity"] = 26] = "InEntity";
})(State || (State = {}));
function isWhitespace(c) {
  return c === CharCodes3.Space || c === CharCodes3.NewLine || c === CharCodes3.Tab || c === CharCodes3.FormFeed || c === CharCodes3.CarriageReturn;
}
function isEndOfTagSection(c) {
  return c === CharCodes3.Slash || c === CharCodes3.Gt || isWhitespace(c);
}
function isASCIIAlpha(c) {
  return c >= CharCodes3.LowerA && c <= CharCodes3.LowerZ || c >= CharCodes3.UpperA && c <= CharCodes3.UpperZ;
}
var QuoteType;
(function(QuoteType2) {
  QuoteType2[QuoteType2["NoValue"] = 0] = "NoValue";
  QuoteType2[QuoteType2["Unquoted"] = 1] = "Unquoted";
  QuoteType2[QuoteType2["Single"] = 2] = "Single";
  QuoteType2[QuoteType2["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
var Sequences = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `</script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ]),
  // `</textarea`
  XmpEnd: new Uint8Array([60, 47, 120, 109, 112])
  // `</xmp`
};
var Tokenizer = class {
  constructor({ xmlMode = false, decodeEntities = true }, cbs) {
    this.cbs = cbs;
    this.state = State.Text;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.entityStart = 0;
    this.baseState = State.Text;
    this.isSpecial = false;
    this.running = true;
    this.offset = 0;
    this.currentSequence = void 0;
    this.sequenceIndex = 0;
    this.xmlMode = xmlMode;
    this.decodeEntities = decodeEntities;
    this.entityDecoder = new EntityDecoder2(xmlMode ? xmlDecodeTree : htmlDecodeTree, (cp, consumed) => this.emitCodePoint(cp, consumed));
  }
  reset() {
    this.state = State.Text;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.baseState = State.Text;
    this.currentSequence = void 0;
    this.running = true;
    this.offset = 0;
  }
  write(chunk) {
    this.offset += this.buffer.length;
    this.buffer = chunk;
    this.parse();
  }
  end() {
    if (this.running)
      this.finish();
  }
  pause() {
    this.running = false;
  }
  resume() {
    this.running = true;
    if (this.index < this.buffer.length + this.offset) {
      this.parse();
    }
  }
  stateText(c) {
    if (c === CharCodes3.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes3.Lt)) {
      if (this.index > this.sectionStart) {
        this.cbs.ontext(this.sectionStart, this.index);
      }
      this.state = State.BeforeTagName;
      this.sectionStart = this.index;
    } else if (this.decodeEntities && c === CharCodes3.Amp) {
      this.startEntity();
    }
  }
  stateSpecialStartSequence(c) {
    const isEnd = this.sequenceIndex === this.currentSequence.length;
    const isMatch = isEnd ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      isEndOfTagSection(c)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (c | 32) === this.currentSequence[this.sequenceIndex]
    );
    if (!isMatch) {
      this.isSpecial = false;
    } else if (!isEnd) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0;
    this.state = State.InTagName;
    this.stateInTagName(c);
  }
  /** Look for an end tag. For <title> tags, also decode entities. */
  stateInSpecialTag(c) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (c === CharCodes3.Gt || isWhitespace(c)) {
        const endOfText = this.index - this.currentSequence.length;
        if (this.sectionStart < endOfText) {
          const actualIndex = this.index;
          this.index = endOfText;
          this.cbs.ontext(this.sectionStart, endOfText);
          this.index = actualIndex;
        }
        this.isSpecial = false;
        this.sectionStart = endOfText + 2;
        this.stateInClosingTagName(c);
        return;
      }
      this.sequenceIndex = 0;
    }
    if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
      this.sequenceIndex += 1;
    } else if (this.sequenceIndex === 0) {
      if (this.currentSequence === Sequences.TitleEnd) {
        if (this.decodeEntities && c === CharCodes3.Amp) {
          this.startEntity();
        }
      } else if (this.fastForwardTo(CharCodes3.Lt)) {
        this.sequenceIndex = 1;
      }
    } else {
      this.sequenceIndex = Number(c === CharCodes3.Lt);
    }
  }
  stateCDATASequence(c) {
    if (c === Sequences.Cdata[this.sequenceIndex]) {
      if (++this.sequenceIndex === Sequences.Cdata.length) {
        this.state = State.InCommentLike;
        this.currentSequence = Sequences.CdataEnd;
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
      }
    } else {
      this.sequenceIndex = 0;
      this.state = State.InDeclaration;
      this.stateInDeclaration(c);
    }
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(c) {
    while (++this.index < this.buffer.length + this.offset) {
      if (this.buffer.charCodeAt(this.index - this.offset) === c) {
        return true;
      }
    }
    this.index = this.buffer.length + this.offset - 1;
    return false;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(c) {
    if (c === this.currentSequence[this.sequenceIndex]) {
      if (++this.sequenceIndex === this.currentSequence.length) {
        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, this.index, 2);
        } else {
          this.cbs.oncomment(this.sectionStart, this.index, 2);
        }
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
        this.state = State.Text;
      }
    } else if (this.sequenceIndex === 0) {
      if (this.fastForwardTo(this.currentSequence[0])) {
        this.sequenceIndex = 1;
      }
    } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
      this.sequenceIndex = 0;
    }
  }
  /**
   * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
   *
   * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
   * We allow anything that wouldn't end the tag.
   */
  isTagStartChar(c) {
    return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
  }
  startSpecial(sequence, offset) {
    this.isSpecial = true;
    this.currentSequence = sequence;
    this.sequenceIndex = offset;
    this.state = State.SpecialStartSequence;
  }
  stateBeforeTagName(c) {
    if (c === CharCodes3.ExclamationMark) {
      this.state = State.BeforeDeclaration;
      this.sectionStart = this.index + 1;
    } else if (c === CharCodes3.Questionmark) {
      this.state = State.InProcessingInstruction;
      this.sectionStart = this.index + 1;
    } else if (this.isTagStartChar(c)) {
      const lower = c | 32;
      this.sectionStart = this.index;
      if (this.xmlMode) {
        this.state = State.InTagName;
      } else if (lower === Sequences.ScriptEnd[2]) {
        this.state = State.BeforeSpecialS;
      } else if (lower === Sequences.TitleEnd[2] || lower === Sequences.XmpEnd[2]) {
        this.state = State.BeforeSpecialT;
      } else {
        this.state = State.InTagName;
      }
    } else if (c === CharCodes3.Slash) {
      this.state = State.BeforeClosingTagName;
    } else {
      this.state = State.Text;
      this.stateText(c);
    }
  }
  stateInTagName(c) {
    if (isEndOfTagSection(c)) {
      this.cbs.onopentagname(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c);
    }
  }
  stateBeforeClosingTagName(c) {
    if (isWhitespace(c)) {
    } else if (c === CharCodes3.Gt) {
      this.state = State.Text;
    } else {
      this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
      this.sectionStart = this.index;
    }
  }
  stateInClosingTagName(c) {
    if (c === CharCodes3.Gt || isWhitespace(c)) {
      this.cbs.onclosetag(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = State.AfterClosingTagName;
      this.stateAfterClosingTagName(c);
    }
  }
  stateAfterClosingTagName(c) {
    if (c === CharCodes3.Gt || this.fastForwardTo(CharCodes3.Gt)) {
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeAttributeName(c) {
    if (c === CharCodes3.Gt) {
      this.cbs.onopentagend(this.index);
      if (this.isSpecial) {
        this.state = State.InSpecialTag;
        this.sequenceIndex = 0;
      } else {
        this.state = State.Text;
      }
      this.sectionStart = this.index + 1;
    } else if (c === CharCodes3.Slash) {
      this.state = State.InSelfClosingTag;
    } else if (!isWhitespace(c)) {
      this.state = State.InAttributeName;
      this.sectionStart = this.index;
    }
  }
  stateInSelfClosingTag(c) {
    if (c === CharCodes3.Gt) {
      this.cbs.onselfclosingtag(this.index);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
      this.isSpecial = false;
    } else if (!isWhitespace(c)) {
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c);
    }
  }
  stateInAttributeName(c) {
    if (c === CharCodes3.Eq || isEndOfTagSection(c)) {
      this.cbs.onattribname(this.sectionStart, this.index);
      this.sectionStart = this.index;
      this.state = State.AfterAttributeName;
      this.stateAfterAttributeName(c);
    }
  }
  stateAfterAttributeName(c) {
    if (c === CharCodes3.Eq) {
      this.state = State.BeforeAttributeValue;
    } else if (c === CharCodes3.Slash || c === CharCodes3.Gt) {
      this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
      this.sectionStart = -1;
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c);
    } else if (!isWhitespace(c)) {
      this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
      this.state = State.InAttributeName;
      this.sectionStart = this.index;
    }
  }
  stateBeforeAttributeValue(c) {
    if (c === CharCodes3.DoubleQuote) {
      this.state = State.InAttributeValueDq;
      this.sectionStart = this.index + 1;
    } else if (c === CharCodes3.SingleQuote) {
      this.state = State.InAttributeValueSq;
      this.sectionStart = this.index + 1;
    } else if (!isWhitespace(c)) {
      this.sectionStart = this.index;
      this.state = State.InAttributeValueNq;
      this.stateInAttributeValueNoQuotes(c);
    }
  }
  handleInAttributeValue(c, quote) {
    if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(quote === CharCodes3.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index + 1);
      this.state = State.BeforeAttributeName;
    } else if (this.decodeEntities && c === CharCodes3.Amp) {
      this.startEntity();
    }
  }
  stateInAttributeValueDoubleQuotes(c) {
    this.handleInAttributeValue(c, CharCodes3.DoubleQuote);
  }
  stateInAttributeValueSingleQuotes(c) {
    this.handleInAttributeValue(c, CharCodes3.SingleQuote);
  }
  stateInAttributeValueNoQuotes(c) {
    if (isWhitespace(c) || c === CharCodes3.Gt) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(QuoteType.Unquoted, this.index);
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c);
    } else if (this.decodeEntities && c === CharCodes3.Amp) {
      this.startEntity();
    }
  }
  stateBeforeDeclaration(c) {
    if (c === CharCodes3.OpeningSquareBracket) {
      this.state = State.CDATASequence;
      this.sequenceIndex = 0;
    } else {
      this.state = c === CharCodes3.Dash ? State.BeforeComment : State.InDeclaration;
    }
  }
  stateInDeclaration(c) {
    if (c === CharCodes3.Gt || this.fastForwardTo(CharCodes3.Gt)) {
      this.cbs.ondeclaration(this.sectionStart, this.index);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateInProcessingInstruction(c) {
    if (c === CharCodes3.Gt || this.fastForwardTo(CharCodes3.Gt)) {
      this.cbs.onprocessinginstruction(this.sectionStart, this.index);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeComment(c) {
    if (c === CharCodes3.Dash) {
      this.state = State.InCommentLike;
      this.currentSequence = Sequences.CommentEnd;
      this.sequenceIndex = 2;
      this.sectionStart = this.index + 1;
    } else {
      this.state = State.InDeclaration;
    }
  }
  stateInSpecialComment(c) {
    if (c === CharCodes3.Gt || this.fastForwardTo(CharCodes3.Gt)) {
      this.cbs.oncomment(this.sectionStart, this.index, 0);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeSpecialS(c) {
    const lower = c | 32;
    if (lower === Sequences.ScriptEnd[3]) {
      this.startSpecial(Sequences.ScriptEnd, 4);
    } else if (lower === Sequences.StyleEnd[3]) {
      this.startSpecial(Sequences.StyleEnd, 4);
    } else {
      this.state = State.InTagName;
      this.stateInTagName(c);
    }
  }
  stateBeforeSpecialT(c) {
    const lower = c | 32;
    switch (lower) {
      case Sequences.TitleEnd[3]: {
        this.startSpecial(Sequences.TitleEnd, 4);
        break;
      }
      case Sequences.TextareaEnd[3]: {
        this.startSpecial(Sequences.TextareaEnd, 4);
        break;
      }
      case Sequences.XmpEnd[3]: {
        this.startSpecial(Sequences.XmpEnd, 4);
        break;
      }
      default: {
        this.state = State.InTagName;
        this.stateInTagName(c);
      }
    }
  }
  startEntity() {
    this.baseState = this.state;
    this.state = State.InEntity;
    this.entityStart = this.index;
    this.entityDecoder.startEntity(this.xmlMode ? DecodingMode2.Strict : this.baseState === State.Text || this.baseState === State.InSpecialTag ? DecodingMode2.Legacy : DecodingMode2.Attribute);
  }
  stateInEntity() {
    const indexInBuffer = this.index - this.offset;
    const length = this.entityDecoder.write(this.buffer, indexInBuffer);
    if (length >= 0) {
      this.state = this.baseState;
      if (length === 0) {
        this.index -= 1;
      }
    } else {
      if (indexInBuffer < this.buffer.length && this.buffer.charCodeAt(indexInBuffer) === CharCodes3.Amp) {
        this.state = this.baseState;
        this.index -= 1;
        return;
      }
      this.index = this.offset + this.buffer.length - 1;
    }
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    if (this.running && this.sectionStart !== this.index) {
      if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
        this.cbs.ontext(this.sectionStart, this.index);
        this.sectionStart = this.index;
      } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = this.index;
      }
    }
  }
  shouldContinue() {
    return this.index < this.buffer.length + this.offset && this.running;
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse() {
    while (this.shouldContinue()) {
      const c = this.buffer.charCodeAt(this.index - this.offset);
      switch (this.state) {
        case State.Text: {
          this.stateText(c);
          break;
        }
        case State.SpecialStartSequence: {
          this.stateSpecialStartSequence(c);
          break;
        }
        case State.InSpecialTag: {
          this.stateInSpecialTag(c);
          break;
        }
        case State.CDATASequence: {
          this.stateCDATASequence(c);
          break;
        }
        case State.InAttributeValueDq: {
          this.stateInAttributeValueDoubleQuotes(c);
          break;
        }
        case State.InAttributeName: {
          this.stateInAttributeName(c);
          break;
        }
        case State.InCommentLike: {
          this.stateInCommentLike(c);
          break;
        }
        case State.InSpecialComment: {
          this.stateInSpecialComment(c);
          break;
        }
        case State.BeforeAttributeName: {
          this.stateBeforeAttributeName(c);
          break;
        }
        case State.InTagName: {
          this.stateInTagName(c);
          break;
        }
        case State.InClosingTagName: {
          this.stateInClosingTagName(c);
          break;
        }
        case State.BeforeTagName: {
          this.stateBeforeTagName(c);
          break;
        }
        case State.AfterAttributeName: {
          this.stateAfterAttributeName(c);
          break;
        }
        case State.InAttributeValueSq: {
          this.stateInAttributeValueSingleQuotes(c);
          break;
        }
        case State.BeforeAttributeValue: {
          this.stateBeforeAttributeValue(c);
          break;
        }
        case State.BeforeClosingTagName: {
          this.stateBeforeClosingTagName(c);
          break;
        }
        case State.AfterClosingTagName: {
          this.stateAfterClosingTagName(c);
          break;
        }
        case State.BeforeSpecialS: {
          this.stateBeforeSpecialS(c);
          break;
        }
        case State.BeforeSpecialT: {
          this.stateBeforeSpecialT(c);
          break;
        }
        case State.InAttributeValueNq: {
          this.stateInAttributeValueNoQuotes(c);
          break;
        }
        case State.InSelfClosingTag: {
          this.stateInSelfClosingTag(c);
          break;
        }
        case State.InDeclaration: {
          this.stateInDeclaration(c);
          break;
        }
        case State.BeforeDeclaration: {
          this.stateBeforeDeclaration(c);
          break;
        }
        case State.BeforeComment: {
          this.stateBeforeComment(c);
          break;
        }
        case State.InProcessingInstruction: {
          this.stateInProcessingInstruction(c);
          break;
        }
        case State.InEntity: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup();
  }
  finish() {
    if (this.state === State.InEntity) {
      this.entityDecoder.end();
      this.state = this.baseState;
    }
    this.handleTrailingData();
    this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const endIndex = this.buffer.length + this.offset;
    if (this.sectionStart >= endIndex) {
      return;
    }
    if (this.state === State.InCommentLike) {
      if (this.currentSequence === Sequences.CdataEnd) {
        this.cbs.oncdata(this.sectionStart, endIndex, 0);
      } else {
        this.cbs.oncomment(this.sectionStart, endIndex, 0);
      }
    } else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) {
    } else {
      this.cbs.ontext(this.sectionStart, endIndex);
    }
  }
  emitCodePoint(cp, consumed) {
    if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
      if (this.sectionStart < this.entityStart) {
        this.cbs.onattribdata(this.sectionStart, this.entityStart);
      }
      this.sectionStart = this.entityStart + consumed;
      this.index = this.sectionStart - 1;
      this.cbs.onattribentity(cp);
    } else {
      if (this.sectionStart < this.entityStart) {
        this.cbs.ontext(this.sectionStart, this.entityStart);
      }
      this.sectionStart = this.entityStart + consumed;
      this.index = this.sectionStart - 1;
      this.cbs.ontextentity(cp, this.sectionStart);
    }
  }
};

// node_modules/htmlparser2/dist/esm/Parser.js
var formTags = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]);
var pTag = /* @__PURE__ */ new Set(["p"]);
var tableSectionTags = /* @__PURE__ */ new Set(["thead", "tbody"]);
var ddtTags = /* @__PURE__ */ new Set(["dd", "dt"]);
var rtpTags = /* @__PURE__ */ new Set(["rt", "rp"]);
var openImpliesClose = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", pTag],
  ["h1", pTag],
  ["h2", pTag],
  ["h3", pTag],
  ["h4", pTag],
  ["h5", pTag],
  ["h6", pTag],
  ["select", formTags],
  ["input", formTags],
  ["output", formTags],
  ["button", formTags],
  ["datalist", formTags],
  ["textarea", formTags],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", ddtTags],
  ["dt", ddtTags],
  ["address", pTag],
  ["article", pTag],
  ["aside", pTag],
  ["blockquote", pTag],
  ["details", pTag],
  ["div", pTag],
  ["dl", pTag],
  ["fieldset", pTag],
  ["figcaption", pTag],
  ["figure", pTag],
  ["footer", pTag],
  ["form", pTag],
  ["header", pTag],
  ["hr", pTag],
  ["main", pTag],
  ["nav", pTag],
  ["ol", pTag],
  ["pre", pTag],
  ["section", pTag],
  ["table", pTag],
  ["ul", pTag],
  ["rt", rtpTags],
  ["rp", rtpTags],
  ["tbody", tableSectionTags],
  ["tfoot", tableSectionTags]
]);
var voidElements = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
var foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
var htmlIntegrationElements = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]);
var reNameEnd = /\s|\//;
var Parser = class {
  constructor(cbs, options = {}) {
    var _a4, _b, _c, _d, _e, _f;
    this.options = options;
    this.startIndex = 0;
    this.endIndex = 0;
    this.openTagStart = 0;
    this.tagname = "";
    this.attribname = "";
    this.attribvalue = "";
    this.attribs = null;
    this.stack = [];
    this.buffers = [];
    this.bufferOffset = 0;
    this.writeIndex = 0;
    this.ended = false;
    this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
    this.htmlMode = !this.options.xmlMode;
    this.lowerCaseTagNames = (_a4 = options.lowerCaseTags) !== null && _a4 !== void 0 ? _a4 : this.htmlMode;
    this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : this.htmlMode;
    this.recognizeSelfClosing = (_c = options.recognizeSelfClosing) !== null && _c !== void 0 ? _c : !this.htmlMode;
    this.tokenizer = new ((_d = options.Tokenizer) !== null && _d !== void 0 ? _d : Tokenizer)(this.options, this);
    this.foreignContext = [!this.htmlMode];
    (_f = (_e = this.cbs).onparserinit) === null || _f === void 0 ? void 0 : _f.call(_e, this);
  }
  // Tokenizer event handlers
  /** @internal */
  ontext(start, endIndex) {
    var _a4, _b;
    const data2 = this.getSlice(start, endIndex);
    this.endIndex = endIndex - 1;
    (_b = (_a4 = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a4, data2);
    this.startIndex = endIndex;
  }
  /** @internal */
  ontextentity(cp, endIndex) {
    var _a4, _b;
    this.endIndex = endIndex - 1;
    (_b = (_a4 = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a4, fromCodePoint2(cp));
    this.startIndex = endIndex;
  }
  /**
   * Checks if the current tag is a void element. Override this if you want
   * to specify your own additional void elements.
   */
  isVoidElement(name) {
    return this.htmlMode && voidElements.has(name);
  }
  /** @internal */
  onopentagname(start, endIndex) {
    this.endIndex = endIndex;
    let name = this.getSlice(start, endIndex);
    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }
    this.emitOpenTag(name);
  }
  emitOpenTag(name) {
    var _a4, _b, _c, _d;
    this.openTagStart = this.startIndex;
    this.tagname = name;
    const impliesClose = this.htmlMode && openImpliesClose.get(name);
    if (impliesClose) {
      while (this.stack.length > 0 && impliesClose.has(this.stack[0])) {
        const element = this.stack.shift();
        (_b = (_a4 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a4, element, true);
      }
    }
    if (!this.isVoidElement(name)) {
      this.stack.unshift(name);
      if (this.htmlMode) {
        if (foreignContextElements.has(name)) {
          this.foreignContext.unshift(true);
        } else if (htmlIntegrationElements.has(name)) {
          this.foreignContext.unshift(false);
        }
      }
    }
    (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
    if (this.cbs.onopentag)
      this.attribs = {};
  }
  endOpenTag(isImplied) {
    var _a4, _b;
    this.startIndex = this.openTagStart;
    if (this.attribs) {
      (_b = (_a4 = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a4, this.tagname, this.attribs, isImplied);
      this.attribs = null;
    }
    if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
      this.cbs.onclosetag(this.tagname, true);
    }
    this.tagname = "";
  }
  /** @internal */
  onopentagend(endIndex) {
    this.endIndex = endIndex;
    this.endOpenTag(false);
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  onclosetag(start, endIndex) {
    var _a4, _b, _c, _d, _e, _f, _g, _h;
    this.endIndex = endIndex;
    let name = this.getSlice(start, endIndex);
    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }
    if (this.htmlMode && (foreignContextElements.has(name) || htmlIntegrationElements.has(name))) {
      this.foreignContext.shift();
    }
    if (!this.isVoidElement(name)) {
      const pos = this.stack.indexOf(name);
      if (pos !== -1) {
        for (let index2 = 0; index2 <= pos; index2++) {
          const element = this.stack.shift();
          (_b = (_a4 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a4, element, index2 !== pos);
        }
      } else if (this.htmlMode && name === "p") {
        this.emitOpenTag("p");
        this.closeCurrentTag(true);
      }
    } else if (this.htmlMode && name === "br") {
      (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, "br");
      (_f = (_e = this.cbs).onopentag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", {}, true);
      (_h = (_g = this.cbs).onclosetag) === null || _h === void 0 ? void 0 : _h.call(_g, "br", false);
    }
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  onselfclosingtag(endIndex) {
    this.endIndex = endIndex;
    if (this.recognizeSelfClosing || this.foreignContext[0]) {
      this.closeCurrentTag(false);
      this.startIndex = endIndex + 1;
    } else {
      this.onopentagend(endIndex);
    }
  }
  closeCurrentTag(isOpenImplied) {
    var _a4, _b;
    const name = this.tagname;
    this.endOpenTag(isOpenImplied);
    if (this.stack[0] === name) {
      (_b = (_a4 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a4, name, !isOpenImplied);
      this.stack.shift();
    }
  }
  /** @internal */
  onattribname(start, endIndex) {
    this.startIndex = start;
    const name = this.getSlice(start, endIndex);
    this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
  }
  /** @internal */
  onattribdata(start, endIndex) {
    this.attribvalue += this.getSlice(start, endIndex);
  }
  /** @internal */
  onattribentity(cp) {
    this.attribvalue += fromCodePoint2(cp);
  }
  /** @internal */
  onattribend(quote, endIndex) {
    var _a4, _b;
    this.endIndex = endIndex;
    (_b = (_a4 = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a4, this.attribname, this.attribvalue, quote === QuoteType.Double ? '"' : quote === QuoteType.Single ? "'" : quote === QuoteType.NoValue ? void 0 : null);
    if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
      this.attribs[this.attribname] = this.attribvalue;
    }
    this.attribvalue = "";
  }
  getInstructionName(value) {
    const index2 = value.search(reNameEnd);
    let name = index2 < 0 ? value : value.substr(0, index2);
    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }
    return name;
  }
  /** @internal */
  ondeclaration(start, endIndex) {
    this.endIndex = endIndex;
    const value = this.getSlice(start, endIndex);
    if (this.cbs.onprocessinginstruction) {
      const name = this.getInstructionName(value);
      this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
    }
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  onprocessinginstruction(start, endIndex) {
    this.endIndex = endIndex;
    const value = this.getSlice(start, endIndex);
    if (this.cbs.onprocessinginstruction) {
      const name = this.getInstructionName(value);
      this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
    }
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  oncomment(start, endIndex, offset) {
    var _a4, _b, _c, _d;
    this.endIndex = endIndex;
    (_b = (_a4 = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a4, this.getSlice(start, endIndex - offset));
    (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  oncdata(start, endIndex, offset) {
    var _a4, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    this.endIndex = endIndex;
    const value = this.getSlice(start, endIndex - offset);
    if (!this.htmlMode || this.options.recognizeCDATA) {
      (_b = (_a4 = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a4);
      (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
      (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
    } else {
      (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, `[CDATA[${value}]]`);
      (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
    }
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  onend() {
    var _a4, _b;
    if (this.cbs.onclosetag) {
      this.endIndex = this.startIndex;
      for (let index2 = 0; index2 < this.stack.length; index2++) {
        this.cbs.onclosetag(this.stack[index2], true);
      }
    }
    (_b = (_a4 = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a4);
  }
  /**
   * Resets the parser to a blank state, ready to parse a new HTML document
   */
  reset() {
    var _a4, _b, _c, _d;
    (_b = (_a4 = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a4);
    this.tokenizer.reset();
    this.tagname = "";
    this.attribname = "";
    this.attribs = null;
    this.stack.length = 0;
    this.startIndex = 0;
    this.endIndex = 0;
    (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
    this.buffers.length = 0;
    this.foreignContext.length = 0;
    this.foreignContext.unshift(!this.htmlMode);
    this.bufferOffset = 0;
    this.writeIndex = 0;
    this.ended = false;
  }
  /**
   * Resets the parser, then parses a complete document and
   * pushes it to the handler.
   *
   * @param data Document to parse.
   */
  parseComplete(data2) {
    this.reset();
    this.end(data2);
  }
  getSlice(start, end2) {
    while (start - this.bufferOffset >= this.buffers[0].length) {
      this.shiftBuffer();
    }
    let slice2 = this.buffers[0].slice(start - this.bufferOffset, end2 - this.bufferOffset);
    while (end2 - this.bufferOffset > this.buffers[0].length) {
      this.shiftBuffer();
      slice2 += this.buffers[0].slice(0, end2 - this.bufferOffset);
    }
    return slice2;
  }
  shiftBuffer() {
    this.bufferOffset += this.buffers[0].length;
    this.writeIndex--;
    this.buffers.shift();
  }
  /**
   * Parses a chunk of data and calls the corresponding callbacks.
   *
   * @param chunk Chunk to parse.
   */
  write(chunk) {
    var _a4, _b;
    if (this.ended) {
      (_b = (_a4 = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a4, new Error(".write() after done!"));
      return;
    }
    this.buffers.push(chunk);
    if (this.tokenizer.running) {
      this.tokenizer.write(chunk);
      this.writeIndex++;
    }
  }
  /**
   * Parses the end of the buffer and clears the stack, calls onend.
   *
   * @param chunk Optional final chunk to parse.
   */
  end(chunk) {
    var _a4, _b;
    if (this.ended) {
      (_b = (_a4 = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a4, new Error(".end() after done!"));
      return;
    }
    if (chunk)
      this.write(chunk);
    this.ended = true;
    this.tokenizer.end();
  }
  /**
   * Pauses parsing. The parser won't emit events until `resume` is called.
   */
  pause() {
    this.tokenizer.pause();
  }
  /**
   * Resumes parsing after `pause` was called.
   */
  resume() {
    this.tokenizer.resume();
    while (this.tokenizer.running && this.writeIndex < this.buffers.length) {
      this.tokenizer.write(this.buffers[this.writeIndex++]);
    }
    if (this.ended)
      this.tokenizer.end();
  }
  /**
   * Alias of `write`, for backwards compatibility.
   *
   * @param chunk Chunk to parse.
   * @deprecated
   */
  parseChunk(chunk) {
    this.write(chunk);
  }
  /**
   * Alias of `end`, for backwards compatibility.
   *
   * @param chunk Optional final chunk to parse.
   * @deprecated
   */
  done(chunk) {
    this.end(chunk);
  }
};

// node_modules/htmlparser2/dist/esm/index.js
function parseDocument(data2, options) {
  const handler = new DomHandler(void 0, options);
  new Parser(handler, options).end(data2);
  return handler.root;
}

// node_modules/cheerio/dist/esm/api/attributes.js
var _a3;
var hasOwn = (
  // @ts-expect-error `hasOwn` is a standard object method
  (_a3 = Object.hasOwn) !== null && _a3 !== void 0 ? _a3 : ((object, prop2) => Object.prototype.hasOwnProperty.call(object, prop2))
);
var rspace = /\s+/;
var dataAttrPrefix = "data-";
var rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
var rbrace = /^{[^]*}$|^\[[^]*]$/;
function getAttr(elem, name, xmlMode) {
  var _a4;
  if (!elem || !isTag2(elem))
    return void 0;
  (_a4 = elem.attribs) !== null && _a4 !== void 0 ? _a4 : elem.attribs = {};
  if (!name) {
    return elem.attribs;
  }
  if (hasOwn(elem.attribs, name)) {
    return !xmlMode && rboolean.test(name) ? name : elem.attribs[name];
  }
  if (elem.name === "option" && name === "value") {
    return text2(elem.children);
  }
  if (elem.name === "input" && (elem.attribs["type"] === "radio" || elem.attribs["type"] === "checkbox") && name === "value") {
    return "on";
  }
  return void 0;
}
function setAttr(el, name, value) {
  if (value === null) {
    removeAttribute(el, name);
  } else {
    el.attribs[name] = `${value}`;
  }
}
function attr(name, value) {
  if (typeof name === "object" || value !== void 0) {
    if (typeof value === "function") {
      if (typeof name !== "string") {
        {
          throw new Error("Bad combination of arguments.");
        }
      }
      return domEach(this, (el, i) => {
        if (isTag2(el))
          setAttr(el, name, value.call(el, i, el.attribs[name]));
      });
    }
    return domEach(this, (el) => {
      if (!isTag2(el))
        return;
      if (typeof name === "object") {
        for (const objName of Object.keys(name)) {
          const objValue = name[objName];
          setAttr(el, objName, objValue);
        }
      } else {
        setAttr(el, name, value);
      }
    });
  }
  return arguments.length > 1 ? this : getAttr(this[0], name, this.options.xmlMode);
}
function getProp(el, name, xmlMode) {
  return name in el ? (
    // @ts-expect-error TS doesn't like us accessing the value directly here.
    el[name]
  ) : !xmlMode && rboolean.test(name) ? getAttr(el, name, false) !== void 0 : getAttr(el, name, xmlMode);
}
function setProp(el, name, value, xmlMode) {
  if (name in el) {
    el[name] = value;
  } else {
    setAttr(el, name, !xmlMode && rboolean.test(name) ? value ? "" : null : `${value}`);
  }
}
function prop(name, value) {
  var _a4;
  if (typeof name === "string" && value === void 0) {
    const el = this[0];
    if (!el)
      return void 0;
    switch (name) {
      case "style": {
        const property = this.css();
        const keys = Object.keys(property);
        for (let i = 0; i < keys.length; i++) {
          property[i] = keys[i];
        }
        property.length = keys.length;
        return property;
      }
      case "tagName":
      case "nodeName": {
        if (!isTag2(el))
          return void 0;
        return el.name.toUpperCase();
      }
      case "href":
      case "src": {
        if (!isTag2(el))
          return void 0;
        const prop2 = (_a4 = el.attribs) === null || _a4 === void 0 ? void 0 : _a4[name];
        if (typeof URL !== "undefined" && (name === "href" && (el.tagName === "a" || el.tagName === "link") || name === "src" && (el.tagName === "img" || el.tagName === "iframe" || el.tagName === "audio" || el.tagName === "video" || el.tagName === "source")) && prop2 !== void 0 && this.options.baseURI) {
          return new URL(prop2, this.options.baseURI).href;
        }
        return prop2;
      }
      case "innerText": {
        return innerText(el);
      }
      case "textContent": {
        return textContent(el);
      }
      case "outerHTML": {
        if (el.type === esm_exports.Root)
          return this.html();
        return this.clone().wrap("<container />").parent().html();
      }
      case "innerHTML": {
        return this.html();
      }
      default: {
        if (!isTag2(el))
          return void 0;
        return getProp(el, name, this.options.xmlMode);
      }
    }
  }
  if (typeof name === "object" || value !== void 0) {
    if (typeof value === "function") {
      if (typeof name === "object") {
        throw new TypeError("Bad combination of arguments.");
      }
      return domEach(this, (el, i) => {
        if (isTag2(el)) {
          setProp(el, name, value.call(el, i, getProp(el, name, this.options.xmlMode)), this.options.xmlMode);
        }
      });
    }
    return domEach(this, (el) => {
      if (!isTag2(el))
        return;
      if (typeof name === "object") {
        for (const key of Object.keys(name)) {
          const val2 = name[key];
          setProp(el, key, val2, this.options.xmlMode);
        }
      } else {
        setProp(el, name, value, this.options.xmlMode);
      }
    });
  }
  return void 0;
}
function setData(elem, name, value) {
  var _a4;
  (_a4 = elem.data) !== null && _a4 !== void 0 ? _a4 : elem.data = {};
  if (typeof name === "object")
    Object.assign(elem.data, name);
  else if (typeof name === "string" && value !== void 0) {
    elem.data[name] = value;
  }
}
function readAllData(el) {
  for (const domName of Object.keys(el.attribs)) {
    if (!domName.startsWith(dataAttrPrefix)) {
      continue;
    }
    const jsName = camelCase(domName.slice(dataAttrPrefix.length));
    if (!hasOwn(el.data, jsName)) {
      el.data[jsName] = parseDataValue(el.attribs[domName]);
    }
  }
  return el.data;
}
function readData(el, name) {
  const domName = dataAttrPrefix + cssCase(name);
  const data2 = el.data;
  if (hasOwn(data2, name)) {
    return data2[name];
  }
  if (hasOwn(el.attribs, domName)) {
    return data2[name] = parseDataValue(el.attribs[domName]);
  }
  return void 0;
}
function parseDataValue(value) {
  if (value === "null")
    return null;
  if (value === "true")
    return true;
  if (value === "false")
    return false;
  const num = Number(value);
  if (value === String(num))
    return num;
  if (rbrace.test(value)) {
    try {
      return JSON.parse(value);
    } catch {
    }
  }
  return value;
}
function data(name, value) {
  var _a4;
  const elem = this[0];
  if (!elem || !isTag2(elem))
    return;
  const dataEl = elem;
  (_a4 = dataEl.data) !== null && _a4 !== void 0 ? _a4 : dataEl.data = {};
  if (name == null) {
    return readAllData(dataEl);
  }
  if (typeof name === "object" || value !== void 0) {
    domEach(this, (el) => {
      if (isTag2(el)) {
        if (typeof name === "object")
          setData(el, name);
        else
          setData(el, name, value);
      }
    });
    return this;
  }
  return readData(dataEl, name);
}
function val(value) {
  const querying = arguments.length === 0;
  const element = this[0];
  if (!element || !isTag2(element))
    return querying ? void 0 : this;
  switch (element.name) {
    case "textarea": {
      return this.text(value);
    }
    case "select": {
      const option = this.find("option:selected");
      if (!querying) {
        if (this.attr("multiple") == null && typeof value === "object") {
          return this;
        }
        this.find("option").removeAttr("selected");
        const values = typeof value === "object" ? value : [value];
        for (const val2 of values) {
          this.find(`option[value="${val2}"]`).attr("selected", "");
        }
        return this;
      }
      return this.attr("multiple") ? option.toArray().map((el) => text2(el.children)) : option.attr("value");
    }
    case "input":
    case "option": {
      return querying ? this.attr("value") : this.attr("value", value);
    }
  }
  return void 0;
}
function removeAttribute(elem, name) {
  if (!elem.attribs || !hasOwn(elem.attribs, name))
    return;
  delete elem.attribs[name];
}
function splitNames(names) {
  return names ? names.trim().split(rspace) : [];
}
function removeAttr(name) {
  const attrNames = splitNames(name);
  for (const attrName of attrNames) {
    domEach(this, (elem) => {
      if (isTag2(elem))
        removeAttribute(elem, attrName);
    });
  }
  return this;
}
function hasClass(className) {
  return this.toArray().some((elem) => {
    const clazz = isTag2(elem) && elem.attribs["class"];
    let idx = -1;
    if (clazz && className.length > 0) {
      while ((idx = clazz.indexOf(className, idx + 1)) > -1) {
        const end2 = idx + className.length;
        if ((idx === 0 || rspace.test(clazz[idx - 1])) && (end2 === clazz.length || rspace.test(clazz[end2]))) {
          return true;
        }
      }
    }
    return false;
  });
}
function addClass(value) {
  if (typeof value === "function") {
    return domEach(this, (el, i) => {
      if (isTag2(el)) {
        const className = el.attribs["class"] || "";
        addClass.call([el], value.call(el, i, className));
      }
    });
  }
  if (!value || typeof value !== "string")
    return this;
  const classNames = value.split(rspace);
  const numElements = this.length;
  for (let i = 0; i < numElements; i++) {
    const el = this[i];
    if (!isTag2(el))
      continue;
    const className = getAttr(el, "class", false);
    if (className) {
      let setClass = ` ${className} `;
      for (const cn of classNames) {
        const appendClass = `${cn} `;
        if (!setClass.includes(` ${appendClass}`))
          setClass += appendClass;
      }
      setAttr(el, "class", setClass.trim());
    } else {
      setAttr(el, "class", classNames.join(" ").trim());
    }
  }
  return this;
}
function removeClass(name) {
  if (typeof name === "function") {
    return domEach(this, (el, i) => {
      if (isTag2(el)) {
        removeClass.call([el], name.call(el, i, el.attribs["class"] || ""));
      }
    });
  }
  const classes = splitNames(name);
  const numClasses = classes.length;
  const removeAll = arguments.length === 0;
  return domEach(this, (el) => {
    if (!isTag2(el))
      return;
    if (removeAll) {
      el.attribs["class"] = "";
    } else {
      const elClasses = splitNames(el.attribs["class"]);
      let changed = false;
      for (let j = 0; j < numClasses; j++) {
        const index2 = elClasses.indexOf(classes[j]);
        if (index2 !== -1) {
          elClasses.splice(index2, 1);
          changed = true;
          j--;
        }
      }
      if (changed) {
        el.attribs["class"] = elClasses.join(" ");
      }
    }
  });
}
function toggleClass(value, stateVal) {
  if (typeof value === "function") {
    return domEach(this, (el, i) => {
      if (isTag2(el)) {
        toggleClass.call([el], value.call(el, i, el.attribs["class"] || "", stateVal), stateVal);
      }
    });
  }
  if (!value || typeof value !== "string")
    return this;
  const classNames = value.split(rspace);
  const numClasses = classNames.length;
  const state = typeof stateVal === "boolean" ? stateVal ? 1 : -1 : 0;
  const numElements = this.length;
  for (let i = 0; i < numElements; i++) {
    const el = this[i];
    if (!isTag2(el))
      continue;
    const elementClasses = splitNames(el.attribs["class"]);
    for (let j = 0; j < numClasses; j++) {
      const index2 = elementClasses.indexOf(classNames[j]);
      if (state >= 0 && index2 === -1) {
        elementClasses.push(classNames[j]);
      } else if (state <= 0 && index2 !== -1) {
        elementClasses.splice(index2, 1);
      }
    }
    el.attribs["class"] = elementClasses.join(" ");
  }
  return this;
}

// node_modules/cheerio/dist/esm/api/traversing.js
var traversing_exports = {};
__export(traversing_exports, {
  _findBySelector: () => _findBySelector,
  add: () => add,
  addBack: () => addBack,
  children: () => children,
  closest: () => closest,
  contents: () => contents,
  each: () => each,
  end: () => end,
  eq: () => eq,
  filter: () => filter3,
  filterArray: () => filterArray,
  find: () => find3,
  first: () => first,
  get: () => get,
  has: () => has,
  index: () => index,
  is: () => is3,
  last: () => last,
  map: () => map,
  next: () => next,
  nextAll: () => nextAll,
  nextUntil: () => nextUntil,
  not: () => not,
  parent: () => parent,
  parents: () => parents,
  parentsUntil: () => parentsUntil,
  prev: () => prev,
  prevAll: () => prevAll,
  prevUntil: () => prevUntil,
  siblings: () => siblings,
  slice: () => slice,
  toArray: () => toArray
});

// node_modules/cheerio-select/lib/esm/index.js
var import_css_what5 = __toESM(require_commonjs(), 1);

// node_modules/css-select/lib/esm/index.js
var import_boolbase6 = __toESM(require_boolbase(), 1);

// node_modules/css-select/lib/esm/compile.js
var import_css_what4 = __toESM(require_commonjs(), 1);
var import_boolbase5 = __toESM(require_boolbase(), 1);

// node_modules/css-select/lib/esm/sort.js
var import_css_what = __toESM(require_commonjs(), 1);
var procedure = /* @__PURE__ */ new Map([
  [import_css_what.SelectorType.Universal, 50],
  [import_css_what.SelectorType.Tag, 30],
  [import_css_what.SelectorType.Attribute, 1],
  [import_css_what.SelectorType.Pseudo, 0]
]);
function isTraversal(token) {
  return !procedure.has(token.type);
}
var attributes = /* @__PURE__ */ new Map([
  [import_css_what.AttributeAction.Exists, 10],
  [import_css_what.AttributeAction.Equals, 8],
  [import_css_what.AttributeAction.Not, 7],
  [import_css_what.AttributeAction.Start, 6],
  [import_css_what.AttributeAction.End, 6],
  [import_css_what.AttributeAction.Any, 5]
]);
function sortByProcedure(arr) {
  const procs = arr.map(getProcedure);
  for (let i = 1; i < arr.length; i++) {
    const procNew = procs[i];
    if (procNew < 0)
      continue;
    for (let j = i - 1; j >= 0 && procNew < procs[j]; j--) {
      const token = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = token;
      procs[j + 1] = procs[j];
      procs[j] = procNew;
    }
  }
}
function getProcedure(token) {
  var _a4, _b;
  let proc = (_a4 = procedure.get(token.type)) !== null && _a4 !== void 0 ? _a4 : -1;
  if (token.type === import_css_what.SelectorType.Attribute) {
    proc = (_b = attributes.get(token.action)) !== null && _b !== void 0 ? _b : 4;
    if (token.action === import_css_what.AttributeAction.Equals && token.name === "id") {
      proc = 9;
    }
    if (token.ignoreCase) {
      proc >>= 1;
    }
  } else if (token.type === import_css_what.SelectorType.Pseudo) {
    if (!token.data) {
      proc = 3;
    } else if (token.name === "has" || token.name === "contains") {
      proc = 0;
    } else if (Array.isArray(token.data)) {
      proc = Math.min(...token.data.map((d) => Math.min(...d.map(getProcedure))));
      if (proc < 0) {
        proc = 0;
      }
    } else {
      proc = 2;
    }
  }
  return proc;
}

// node_modules/css-select/lib/esm/attributes.js
var import_boolbase = __toESM(require_boolbase(), 1);
var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex(value) {
  return value.replace(reChars, "\\$&");
}
var caseInsensitiveAttributes = /* @__PURE__ */ new Set([
  "accept",
  "accept-charset",
  "align",
  "alink",
  "axis",
  "bgcolor",
  "charset",
  "checked",
  "clear",
  "codetype",
  "color",
  "compact",
  "declare",
  "defer",
  "dir",
  "direction",
  "disabled",
  "enctype",
  "face",
  "frame",
  "hreflang",
  "http-equiv",
  "lang",
  "language",
  "link",
  "media",
  "method",
  "multiple",
  "nohref",
  "noresize",
  "noshade",
  "nowrap",
  "readonly",
  "rel",
  "rev",
  "rules",
  "scope",
  "scrolling",
  "selected",
  "shape",
  "target",
  "text",
  "type",
  "valign",
  "valuetype",
  "vlink"
]);
function shouldIgnoreCase(selector, options) {
  return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
}
var attributeRules = {
  equals(next2, data2, options) {
    const { adapter } = options;
    const { name } = data2;
    let { value } = data2;
    if (shouldIgnoreCase(data2, options)) {
      value = value.toLowerCase();
      return (elem) => {
        const attr2 = adapter.getAttributeValue(elem, name);
        return attr2 != null && attr2.length === value.length && attr2.toLowerCase() === value && next2(elem);
      };
    }
    return (elem) => adapter.getAttributeValue(elem, name) === value && next2(elem);
  },
  hyphen(next2, data2, options) {
    const { adapter } = options;
    const { name } = data2;
    let { value } = data2;
    const len = value.length;
    if (shouldIgnoreCase(data2, options)) {
      value = value.toLowerCase();
      return function hyphenIC(elem) {
        const attr2 = adapter.getAttributeValue(elem, name);
        return attr2 != null && (attr2.length === len || attr2.charAt(len) === "-") && attr2.substr(0, len).toLowerCase() === value && next2(elem);
      };
    }
    return function hyphen(elem) {
      const attr2 = adapter.getAttributeValue(elem, name);
      return attr2 != null && (attr2.length === len || attr2.charAt(len) === "-") && attr2.substr(0, len) === value && next2(elem);
    };
  },
  element(next2, data2, options) {
    const { adapter } = options;
    const { name, value } = data2;
    if (/\s/.test(value)) {
      return import_boolbase.default.falseFunc;
    }
    const regex2 = new RegExp(`(?:^|\\s)${escapeRegex(value)}(?:$|\\s)`, shouldIgnoreCase(data2, options) ? "i" : "");
    return function element(elem) {
      const attr2 = adapter.getAttributeValue(elem, name);
      return attr2 != null && attr2.length >= value.length && regex2.test(attr2) && next2(elem);
    };
  },
  exists(next2, { name }, { adapter }) {
    return (elem) => adapter.hasAttrib(elem, name) && next2(elem);
  },
  start(next2, data2, options) {
    const { adapter } = options;
    const { name } = data2;
    let { value } = data2;
    const len = value.length;
    if (len === 0) {
      return import_boolbase.default.falseFunc;
    }
    if (shouldIgnoreCase(data2, options)) {
      value = value.toLowerCase();
      return (elem) => {
        const attr2 = adapter.getAttributeValue(elem, name);
        return attr2 != null && attr2.length >= len && attr2.substr(0, len).toLowerCase() === value && next2(elem);
      };
    }
    return (elem) => {
      var _a4;
      return !!((_a4 = adapter.getAttributeValue(elem, name)) === null || _a4 === void 0 ? void 0 : _a4.startsWith(value)) && next2(elem);
    };
  },
  end(next2, data2, options) {
    const { adapter } = options;
    const { name } = data2;
    let { value } = data2;
    const len = -value.length;
    if (len === 0) {
      return import_boolbase.default.falseFunc;
    }
    if (shouldIgnoreCase(data2, options)) {
      value = value.toLowerCase();
      return (elem) => {
        var _a4;
        return ((_a4 = adapter.getAttributeValue(elem, name)) === null || _a4 === void 0 ? void 0 : _a4.substr(len).toLowerCase()) === value && next2(elem);
      };
    }
    return (elem) => {
      var _a4;
      return !!((_a4 = adapter.getAttributeValue(elem, name)) === null || _a4 === void 0 ? void 0 : _a4.endsWith(value)) && next2(elem);
    };
  },
  any(next2, data2, options) {
    const { adapter } = options;
    const { name, value } = data2;
    if (value === "") {
      return import_boolbase.default.falseFunc;
    }
    if (shouldIgnoreCase(data2, options)) {
      const regex2 = new RegExp(escapeRegex(value), "i");
      return function anyIC(elem) {
        const attr2 = adapter.getAttributeValue(elem, name);
        return attr2 != null && attr2.length >= value.length && regex2.test(attr2) && next2(elem);
      };
    }
    return (elem) => {
      var _a4;
      return !!((_a4 = adapter.getAttributeValue(elem, name)) === null || _a4 === void 0 ? void 0 : _a4.includes(value)) && next2(elem);
    };
  },
  not(next2, data2, options) {
    const { adapter } = options;
    const { name } = data2;
    let { value } = data2;
    if (value === "") {
      return (elem) => !!adapter.getAttributeValue(elem, name) && next2(elem);
    } else if (shouldIgnoreCase(data2, options)) {
      value = value.toLowerCase();
      return (elem) => {
        const attr2 = adapter.getAttributeValue(elem, name);
        return (attr2 == null || attr2.length !== value.length || attr2.toLowerCase() !== value) && next2(elem);
      };
    }
    return (elem) => adapter.getAttributeValue(elem, name) !== value && next2(elem);
  }
};

// node_modules/css-select/lib/esm/pseudo-selectors/index.js
var import_css_what2 = __toESM(require_commonjs(), 1);

// node_modules/nth-check/lib/esm/parse.js
var whitespace = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]);
var ZERO = "0".charCodeAt(0);
var NINE = "9".charCodeAt(0);
function parse(formula) {
  formula = formula.trim().toLowerCase();
  if (formula === "even") {
    return [2, 0];
  } else if (formula === "odd") {
    return [2, 1];
  }
  let idx = 0;
  let a = 0;
  let sign = readSign();
  let number = readNumber();
  if (idx < formula.length && formula.charAt(idx) === "n") {
    idx++;
    a = sign * (number !== null && number !== void 0 ? number : 1);
    skipWhitespace();
    if (idx < formula.length) {
      sign = readSign();
      skipWhitespace();
      number = readNumber();
    } else {
      sign = number = 0;
    }
  }
  if (number === null || idx < formula.length) {
    throw new Error(`n-th rule couldn't be parsed ('${formula}')`);
  }
  return [a, sign * number];
  function readSign() {
    if (formula.charAt(idx) === "-") {
      idx++;
      return -1;
    }
    if (formula.charAt(idx) === "+") {
      idx++;
    }
    return 1;
  }
  function readNumber() {
    const start = idx;
    let value = 0;
    while (idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE) {
      value = value * 10 + (formula.charCodeAt(idx) - ZERO);
      idx++;
    }
    return idx === start ? null : value;
  }
  function skipWhitespace() {
    while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) {
      idx++;
    }
  }
}

// node_modules/nth-check/lib/esm/compile.js
var import_boolbase2 = __toESM(require_boolbase(), 1);
function compile(parsed) {
  const a = parsed[0];
  const b = parsed[1] - 1;
  if (b < 0 && a <= 0)
    return import_boolbase2.default.falseFunc;
  if (a === -1)
    return (index2) => index2 <= b;
  if (a === 0)
    return (index2) => index2 === b;
  if (a === 1)
    return b < 0 ? import_boolbase2.default.trueFunc : (index2) => index2 >= b;
  const absA = Math.abs(a);
  const bMod = (b % absA + absA) % absA;
  return a > 1 ? (index2) => index2 >= b && index2 % absA === bMod : (index2) => index2 <= b && index2 % absA === bMod;
}

// node_modules/nth-check/lib/esm/index.js
function nthCheck(formula) {
  return compile(parse(formula));
}

// node_modules/css-select/lib/esm/pseudo-selectors/filters.js
var import_boolbase3 = __toESM(require_boolbase(), 1);
function getChildFunc(next2, adapter) {
  return (elem) => {
    const parent2 = adapter.getParent(elem);
    return parent2 != null && adapter.isTag(parent2) && next2(elem);
  };
}
var filters = {
  contains(next2, text4, { adapter }) {
    return function contains2(elem) {
      return next2(elem) && adapter.getText(elem).includes(text4);
    };
  },
  icontains(next2, text4, { adapter }) {
    const itext = text4.toLowerCase();
    return function icontains(elem) {
      return next2(elem) && adapter.getText(elem).toLowerCase().includes(itext);
    };
  },
  // Location specific methods
  "nth-child"(next2, rule, { adapter, equals }) {
    const func = nthCheck(rule);
    if (func === import_boolbase3.default.falseFunc)
      return import_boolbase3.default.falseFunc;
    if (func === import_boolbase3.default.trueFunc)
      return getChildFunc(next2, adapter);
    return function nthChild(elem) {
      const siblings2 = adapter.getSiblings(elem);
      let pos = 0;
      for (let i = 0; i < siblings2.length; i++) {
        if (equals(elem, siblings2[i]))
          break;
        if (adapter.isTag(siblings2[i])) {
          pos++;
        }
      }
      return func(pos) && next2(elem);
    };
  },
  "nth-last-child"(next2, rule, { adapter, equals }) {
    const func = nthCheck(rule);
    if (func === import_boolbase3.default.falseFunc)
      return import_boolbase3.default.falseFunc;
    if (func === import_boolbase3.default.trueFunc)
      return getChildFunc(next2, adapter);
    return function nthLastChild(elem) {
      const siblings2 = adapter.getSiblings(elem);
      let pos = 0;
      for (let i = siblings2.length - 1; i >= 0; i--) {
        if (equals(elem, siblings2[i]))
          break;
        if (adapter.isTag(siblings2[i])) {
          pos++;
        }
      }
      return func(pos) && next2(elem);
    };
  },
  "nth-of-type"(next2, rule, { adapter, equals }) {
    const func = nthCheck(rule);
    if (func === import_boolbase3.default.falseFunc)
      return import_boolbase3.default.falseFunc;
    if (func === import_boolbase3.default.trueFunc)
      return getChildFunc(next2, adapter);
    return function nthOfType(elem) {
      const siblings2 = adapter.getSiblings(elem);
      let pos = 0;
      for (let i = 0; i < siblings2.length; i++) {
        const currentSibling = siblings2[i];
        if (equals(elem, currentSibling))
          break;
        if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
          pos++;
        }
      }
      return func(pos) && next2(elem);
    };
  },
  "nth-last-of-type"(next2, rule, { adapter, equals }) {
    const func = nthCheck(rule);
    if (func === import_boolbase3.default.falseFunc)
      return import_boolbase3.default.falseFunc;
    if (func === import_boolbase3.default.trueFunc)
      return getChildFunc(next2, adapter);
    return function nthLastOfType(elem) {
      const siblings2 = adapter.getSiblings(elem);
      let pos = 0;
      for (let i = siblings2.length - 1; i >= 0; i--) {
        const currentSibling = siblings2[i];
        if (equals(elem, currentSibling))
          break;
        if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
          pos++;
        }
      }
      return func(pos) && next2(elem);
    };
  },
  // TODO determine the actual root element
  root(next2, _rule, { adapter }) {
    return (elem) => {
      const parent2 = adapter.getParent(elem);
      return (parent2 == null || !adapter.isTag(parent2)) && next2(elem);
    };
  },
  scope(next2, rule, options, context) {
    const { equals } = options;
    if (!context || context.length === 0) {
      return filters["root"](next2, rule, options);
    }
    if (context.length === 1) {
      return (elem) => equals(context[0], elem) && next2(elem);
    }
    return (elem) => context.includes(elem) && next2(elem);
  },
  hover: dynamicStatePseudo("isHovered"),
  visited: dynamicStatePseudo("isVisited"),
  active: dynamicStatePseudo("isActive")
};
function dynamicStatePseudo(name) {
  return function dynamicPseudo(next2, _rule, { adapter }) {
    const func = adapter[name];
    if (typeof func !== "function") {
      return import_boolbase3.default.falseFunc;
    }
    return function active(elem) {
      return func(elem) && next2(elem);
    };
  };
}

// node_modules/css-select/lib/esm/pseudo-selectors/pseudos.js
var pseudos = {
  empty(elem, { adapter }) {
    return !adapter.getChildren(elem).some((elem2) => (
      // FIXME: `getText` call is potentially expensive.
      adapter.isTag(elem2) || adapter.getText(elem2) !== ""
    ));
  },
  "first-child"(elem, { adapter, equals }) {
    if (adapter.prevElementSibling) {
      return adapter.prevElementSibling(elem) == null;
    }
    const firstChild = adapter.getSiblings(elem).find((elem2) => adapter.isTag(elem2));
    return firstChild != null && equals(elem, firstChild);
  },
  "last-child"(elem, { adapter, equals }) {
    const siblings2 = adapter.getSiblings(elem);
    for (let i = siblings2.length - 1; i >= 0; i--) {
      if (equals(elem, siblings2[i]))
        return true;
      if (adapter.isTag(siblings2[i]))
        break;
    }
    return false;
  },
  "first-of-type"(elem, { adapter, equals }) {
    const siblings2 = adapter.getSiblings(elem);
    const elemName = adapter.getName(elem);
    for (let i = 0; i < siblings2.length; i++) {
      const currentSibling = siblings2[i];
      if (equals(elem, currentSibling))
        return true;
      if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
        break;
      }
    }
    return false;
  },
  "last-of-type"(elem, { adapter, equals }) {
    const siblings2 = adapter.getSiblings(elem);
    const elemName = adapter.getName(elem);
    for (let i = siblings2.length - 1; i >= 0; i--) {
      const currentSibling = siblings2[i];
      if (equals(elem, currentSibling))
        return true;
      if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
        break;
      }
    }
    return false;
  },
  "only-of-type"(elem, { adapter, equals }) {
    const elemName = adapter.getName(elem);
    return adapter.getSiblings(elem).every((sibling) => equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName);
  },
  "only-child"(elem, { adapter, equals }) {
    return adapter.getSiblings(elem).every((sibling) => equals(elem, sibling) || !adapter.isTag(sibling));
  }
};
function verifyPseudoArgs(func, name, subselect, argIndex) {
  if (subselect === null) {
    if (func.length > argIndex) {
      throw new Error(`Pseudo-class :${name} requires an argument`);
    }
  } else if (func.length === argIndex) {
    throw new Error(`Pseudo-class :${name} doesn't have any arguments`);
  }
}

// node_modules/css-select/lib/esm/pseudo-selectors/aliases.js
var aliases = {
  // Links
  "any-link": ":is(a, area, link)[href]",
  link: ":any-link:not(:visited)",
  // Forms
  // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
  disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
  enabled: ":not(:disabled)",
  checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
  required: ":is(input, select, textarea)[required]",
  optional: ":is(input, select, textarea):not([required])",
  // JQuery extensions
  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
  selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
  checkbox: "[type=checkbox]",
  file: "[type=file]",
  password: "[type=password]",
  radio: "[type=radio]",
  reset: "[type=reset]",
  image: "[type=image]",
  submit: "[type=submit]",
  parent: ":not(:empty)",
  header: ":is(h1, h2, h3, h4, h5, h6)",
  button: ":is(button, input[type=button])",
  input: ":is(input, textarea, select, button)",
  text: "input:is(:not([type!='']), [type=text])"
};

// node_modules/css-select/lib/esm/pseudo-selectors/subselects.js
var import_boolbase4 = __toESM(require_boolbase(), 1);
var PLACEHOLDER_ELEMENT = {};
function ensureIsTag(next2, adapter) {
  if (next2 === import_boolbase4.default.falseFunc)
    return import_boolbase4.default.falseFunc;
  return (elem) => adapter.isTag(elem) && next2(elem);
}
function getNextSiblings(elem, adapter) {
  const siblings2 = adapter.getSiblings(elem);
  if (siblings2.length <= 1)
    return [];
  const elemIndex = siblings2.indexOf(elem);
  if (elemIndex < 0 || elemIndex === siblings2.length - 1)
    return [];
  return siblings2.slice(elemIndex + 1).filter(adapter.isTag);
}
function copyOptions(options) {
  return {
    xmlMode: !!options.xmlMode,
    lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
    lowerCaseTags: !!options.lowerCaseTags,
    quirksMode: !!options.quirksMode,
    cacheResults: !!options.cacheResults,
    pseudos: options.pseudos,
    adapter: options.adapter,
    equals: options.equals
  };
}
var is = (next2, token, options, context, compileToken2) => {
  const func = compileToken2(token, copyOptions(options), context);
  return func === import_boolbase4.default.trueFunc ? next2 : func === import_boolbase4.default.falseFunc ? import_boolbase4.default.falseFunc : (elem) => func(elem) && next2(elem);
};
var subselects = {
  is,
  /**
   * `:matches` and `:where` are aliases for `:is`.
   */
  matches: is,
  where: is,
  not(next2, token, options, context, compileToken2) {
    const func = compileToken2(token, copyOptions(options), context);
    return func === import_boolbase4.default.falseFunc ? next2 : func === import_boolbase4.default.trueFunc ? import_boolbase4.default.falseFunc : (elem) => !func(elem) && next2(elem);
  },
  has(next2, subselect, options, _context, compileToken2) {
    const { adapter } = options;
    const opts = copyOptions(options);
    opts.relativeSelector = true;
    const context = subselect.some((s) => s.some(isTraversal)) ? (
      // Used as a placeholder. Will be replaced with the actual element.
      [PLACEHOLDER_ELEMENT]
    ) : void 0;
    const compiled = compileToken2(subselect, opts, context);
    if (compiled === import_boolbase4.default.falseFunc)
      return import_boolbase4.default.falseFunc;
    const hasElement = ensureIsTag(compiled, adapter);
    if (context && compiled !== import_boolbase4.default.trueFunc) {
      const { shouldTestNextSiblings = false } = compiled;
      return (elem) => {
        if (!next2(elem))
          return false;
        context[0] = elem;
        const childs = adapter.getChildren(elem);
        const nextElements = shouldTestNextSiblings ? [...childs, ...getNextSiblings(elem, adapter)] : childs;
        return adapter.existsOne(hasElement, nextElements);
      };
    }
    return (elem) => next2(elem) && adapter.existsOne(hasElement, adapter.getChildren(elem));
  }
};

// node_modules/css-select/lib/esm/pseudo-selectors/index.js
function compilePseudoSelector(next2, selector, options, context, compileToken2) {
  var _a4;
  const { name, data: data2 } = selector;
  if (Array.isArray(data2)) {
    if (!(name in subselects)) {
      throw new Error(`Unknown pseudo-class :${name}(${data2})`);
    }
    return subselects[name](next2, data2, options, context, compileToken2);
  }
  const userPseudo = (_a4 = options.pseudos) === null || _a4 === void 0 ? void 0 : _a4[name];
  const stringPseudo = typeof userPseudo === "string" ? userPseudo : aliases[name];
  if (typeof stringPseudo === "string") {
    if (data2 != null) {
      throw new Error(`Pseudo ${name} doesn't have any arguments`);
    }
    const alias = (0, import_css_what2.parse)(stringPseudo);
    return subselects["is"](next2, alias, options, context, compileToken2);
  }
  if (typeof userPseudo === "function") {
    verifyPseudoArgs(userPseudo, name, data2, 1);
    return (elem) => userPseudo(elem, data2) && next2(elem);
  }
  if (name in filters) {
    return filters[name](next2, data2, options, context);
  }
  if (name in pseudos) {
    const pseudo = pseudos[name];
    verifyPseudoArgs(pseudo, name, data2, 2);
    return (elem) => pseudo(elem, options, data2) && next2(elem);
  }
  throw new Error(`Unknown pseudo-class :${name}`);
}

// node_modules/css-select/lib/esm/general.js
var import_css_what3 = __toESM(require_commonjs(), 1);
function getElementParent(node, adapter) {
  const parent2 = adapter.getParent(node);
  if (parent2 && adapter.isTag(parent2)) {
    return parent2;
  }
  return null;
}
function compileGeneralSelector(next2, selector, options, context, compileToken2) {
  const { adapter, equals } = options;
  switch (selector.type) {
    case import_css_what3.SelectorType.PseudoElement: {
      throw new Error("Pseudo-elements are not supported by css-select");
    }
    case import_css_what3.SelectorType.ColumnCombinator: {
      throw new Error("Column combinators are not yet supported by css-select");
    }
    case import_css_what3.SelectorType.Attribute: {
      if (selector.namespace != null) {
        throw new Error("Namespaced attributes are not yet supported by css-select");
      }
      if (!options.xmlMode || options.lowerCaseAttributeNames) {
        selector.name = selector.name.toLowerCase();
      }
      return attributeRules[selector.action](next2, selector, options);
    }
    case import_css_what3.SelectorType.Pseudo: {
      return compilePseudoSelector(next2, selector, options, context, compileToken2);
    }
    // Tags
    case import_css_what3.SelectorType.Tag: {
      if (selector.namespace != null) {
        throw new Error("Namespaced tag names are not yet supported by css-select");
      }
      let { name } = selector;
      if (!options.xmlMode || options.lowerCaseTags) {
        name = name.toLowerCase();
      }
      return function tag(elem) {
        return adapter.getName(elem) === name && next2(elem);
      };
    }
    // Traversal
    case import_css_what3.SelectorType.Descendant: {
      if (options.cacheResults === false || typeof WeakSet === "undefined") {
        return function descendant(elem) {
          let current = elem;
          while (current = getElementParent(current, adapter)) {
            if (next2(current)) {
              return true;
            }
          }
          return false;
        };
      }
      const isFalseCache = /* @__PURE__ */ new WeakSet();
      return function cachedDescendant(elem) {
        let current = elem;
        while (current = getElementParent(current, adapter)) {
          if (!isFalseCache.has(current)) {
            if (adapter.isTag(current) && next2(current)) {
              return true;
            }
            isFalseCache.add(current);
          }
        }
        return false;
      };
    }
    case "_flexibleDescendant": {
      return function flexibleDescendant(elem) {
        let current = elem;
        do {
          if (next2(current))
            return true;
        } while (current = getElementParent(current, adapter));
        return false;
      };
    }
    case import_css_what3.SelectorType.Parent: {
      return function parent2(elem) {
        return adapter.getChildren(elem).some((elem2) => adapter.isTag(elem2) && next2(elem2));
      };
    }
    case import_css_what3.SelectorType.Child: {
      return function child(elem) {
        const parent2 = adapter.getParent(elem);
        return parent2 != null && adapter.isTag(parent2) && next2(parent2);
      };
    }
    case import_css_what3.SelectorType.Sibling: {
      return function sibling(elem) {
        const siblings2 = adapter.getSiblings(elem);
        for (let i = 0; i < siblings2.length; i++) {
          const currentSibling = siblings2[i];
          if (equals(elem, currentSibling))
            break;
          if (adapter.isTag(currentSibling) && next2(currentSibling)) {
            return true;
          }
        }
        return false;
      };
    }
    case import_css_what3.SelectorType.Adjacent: {
      if (adapter.prevElementSibling) {
        return function adjacent(elem) {
          const previous = adapter.prevElementSibling(elem);
          return previous != null && next2(previous);
        };
      }
      return function adjacent(elem) {
        const siblings2 = adapter.getSiblings(elem);
        let lastElement;
        for (let i = 0; i < siblings2.length; i++) {
          const currentSibling = siblings2[i];
          if (equals(elem, currentSibling))
            break;
          if (adapter.isTag(currentSibling)) {
            lastElement = currentSibling;
          }
        }
        return !!lastElement && next2(lastElement);
      };
    }
    case import_css_what3.SelectorType.Universal: {
      if (selector.namespace != null && selector.namespace !== "*") {
        throw new Error("Namespaced universal selectors are not yet supported by css-select");
      }
      return next2;
    }
  }
}

// node_modules/css-select/lib/esm/compile.js
function compile2(selector, options, context) {
  const next2 = compileUnsafe(selector, options, context);
  return ensureIsTag(next2, options.adapter);
}
function compileUnsafe(selector, options, context) {
  const token = typeof selector === "string" ? (0, import_css_what4.parse)(selector) : selector;
  return compileToken(token, options, context);
}
function includesScopePseudo(t) {
  return t.type === import_css_what4.SelectorType.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some((data2) => data2.some(includesScopePseudo)));
}
var DESCENDANT_TOKEN = { type: import_css_what4.SelectorType.Descendant };
var FLEXIBLE_DESCENDANT_TOKEN = {
  type: "_flexibleDescendant"
};
var SCOPE_TOKEN = {
  type: import_css_what4.SelectorType.Pseudo,
  name: "scope",
  data: null
};
function absolutize(token, { adapter }, context) {
  const hasContext = !!(context === null || context === void 0 ? void 0 : context.every((e) => {
    const parent2 = adapter.isTag(e) && adapter.getParent(e);
    return e === PLACEHOLDER_ELEMENT || parent2 && adapter.isTag(parent2);
  }));
  for (const t of token) {
    if (t.length > 0 && isTraversal(t[0]) && t[0].type !== import_css_what4.SelectorType.Descendant) {
    } else if (hasContext && !t.some(includesScopePseudo)) {
      t.unshift(DESCENDANT_TOKEN);
    } else {
      continue;
    }
    t.unshift(SCOPE_TOKEN);
  }
}
function compileToken(token, options, context) {
  var _a4;
  token.forEach(sortByProcedure);
  context = (_a4 = options.context) !== null && _a4 !== void 0 ? _a4 : context;
  const isArrayContext = Array.isArray(context);
  const finalContext = context && (Array.isArray(context) ? context : [context]);
  if (options.relativeSelector !== false) {
    absolutize(token, options, finalContext);
  } else if (token.some((t) => t.length > 0 && isTraversal(t[0]))) {
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
  }
  let shouldTestNextSiblings = false;
  const query = token.map((rules) => {
    if (rules.length >= 2) {
      const [first2, second] = rules;
      if (first2.type !== import_css_what4.SelectorType.Pseudo || first2.name !== "scope") {
      } else if (isArrayContext && second.type === import_css_what4.SelectorType.Descendant) {
        rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
      } else if (second.type === import_css_what4.SelectorType.Adjacent || second.type === import_css_what4.SelectorType.Sibling) {
        shouldTestNextSiblings = true;
      }
    }
    return compileRules(rules, options, finalContext);
  }).reduce(reduceRules, import_boolbase5.default.falseFunc);
  query.shouldTestNextSiblings = shouldTestNextSiblings;
  return query;
}
function compileRules(rules, options, context) {
  var _a4;
  return rules.reduce((previous, rule) => previous === import_boolbase5.default.falseFunc ? import_boolbase5.default.falseFunc : compileGeneralSelector(previous, rule, options, context, compileToken), (_a4 = options.rootFunc) !== null && _a4 !== void 0 ? _a4 : import_boolbase5.default.trueFunc);
}
function reduceRules(a, b) {
  if (b === import_boolbase5.default.falseFunc || a === import_boolbase5.default.trueFunc) {
    return a;
  }
  if (a === import_boolbase5.default.falseFunc || b === import_boolbase5.default.trueFunc) {
    return b;
  }
  return function combine(elem) {
    return a(elem) || b(elem);
  };
}

// node_modules/css-select/lib/esm/index.js
var defaultEquals = (a, b) => a === b;
var defaultOptions = {
  adapter: esm_exports2,
  equals: defaultEquals
};
function convertOptionFormats(options) {
  var _a4, _b, _c, _d;
  const opts = options !== null && options !== void 0 ? options : defaultOptions;
  (_a4 = opts.adapter) !== null && _a4 !== void 0 ? _a4 : opts.adapter = esm_exports2;
  (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
  return opts;
}
function wrapCompile(func) {
  return function addAdapter(selector, options, context) {
    const opts = convertOptionFormats(options);
    return func(selector, opts, context);
  };
}
var compile3 = wrapCompile(compile2);
var _compileUnsafe = wrapCompile(compileUnsafe);
var _compileToken = wrapCompile(compileToken);
function getSelectorFunc(searchFunc) {
  return function select2(query, elements, options) {
    const opts = convertOptionFormats(options);
    if (typeof query !== "function") {
      query = compileUnsafe(query, opts, elements);
    }
    const filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
    return searchFunc(query, filteredElements, opts);
  };
}
function prepareContext(elems, adapter, shouldTestNextSiblings = false) {
  if (shouldTestNextSiblings) {
    elems = appendNextSiblings(elems, adapter);
  }
  return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
}
function appendNextSiblings(elem, adapter) {
  const elems = Array.isArray(elem) ? elem.slice(0) : [elem];
  const elemsLength = elems.length;
  for (let i = 0; i < elemsLength; i++) {
    const nextSiblings = getNextSiblings(elems[i], adapter);
    elems.push(...nextSiblings);
  }
  return elems;
}
var selectAll = getSelectorFunc((query, elems, options) => query === import_boolbase6.default.falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems));
var selectOne = getSelectorFunc((query, elems, options) => query === import_boolbase6.default.falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems));

// node_modules/cheerio-select/lib/esm/index.js
var boolbase7 = __toESM(require_boolbase(), 1);

// node_modules/cheerio-select/lib/esm/positionals.js
var filterNames = /* @__PURE__ */ new Set([
  "first",
  "last",
  "eq",
  "gt",
  "nth",
  "lt",
  "even",
  "odd"
]);
function isFilter(s) {
  if (s.type !== "pseudo")
    return false;
  if (filterNames.has(s.name))
    return true;
  if (s.name === "not" && Array.isArray(s.data)) {
    return s.data.some((s2) => s2.some(isFilter));
  }
  return false;
}
function getLimit(filter4, data2, partLimit) {
  const num = data2 != null ? parseInt(data2, 10) : NaN;
  switch (filter4) {
    case "first":
      return 1;
    case "nth":
    case "eq":
      return isFinite(num) ? num >= 0 ? num + 1 : Infinity : 0;
    case "lt":
      return isFinite(num) ? num >= 0 ? Math.min(num, partLimit) : Infinity : 0;
    case "gt":
      return isFinite(num) ? Infinity : 0;
    case "odd":
      return 2 * partLimit;
    case "even":
      return 2 * partLimit - 1;
    case "last":
    case "not":
      return Infinity;
  }
}

// node_modules/cheerio-select/lib/esm/helpers.js
function getDocumentRoot(node) {
  while (node.parent)
    node = node.parent;
  return node;
}
function groupSelectors(selectors) {
  const filteredSelectors = [];
  const plainSelectors = [];
  for (const selector of selectors) {
    if (selector.some(isFilter)) {
      filteredSelectors.push(selector);
    } else {
      plainSelectors.push(selector);
    }
  }
  return [plainSelectors, filteredSelectors];
}

// node_modules/cheerio-select/lib/esm/index.js
var UNIVERSAL_SELECTOR = {
  type: import_css_what5.SelectorType.Universal,
  namespace: null
};
var SCOPE_PSEUDO = {
  type: import_css_what5.SelectorType.Pseudo,
  name: "scope",
  data: null
};
function is2(element, selector, options = {}) {
  return some([element], selector, options);
}
function some(elements, selector, options = {}) {
  if (typeof selector === "function")
    return elements.some(selector);
  const [plain, filtered] = groupSelectors((0, import_css_what5.parse)(selector));
  return plain.length > 0 && elements.some(_compileToken(plain, options)) || filtered.some((sel) => filterBySelector(sel, elements, options).length > 0);
}
function filterByPosition(filter4, elems, data2, options) {
  const num = typeof data2 === "string" ? parseInt(data2, 10) : NaN;
  switch (filter4) {
    case "first":
    case "lt":
      return elems;
    case "last":
      return elems.length > 0 ? [elems[elems.length - 1]] : elems;
    case "nth":
    case "eq":
      return isFinite(num) && Math.abs(num) < elems.length ? [num < 0 ? elems[elems.length + num] : elems[num]] : [];
    case "gt":
      return isFinite(num) ? elems.slice(num + 1) : [];
    case "even":
      return elems.filter((_, i) => i % 2 === 0);
    case "odd":
      return elems.filter((_, i) => i % 2 === 1);
    case "not": {
      const filtered = new Set(filterParsed(data2, elems, options));
      return elems.filter((e) => !filtered.has(e));
    }
  }
}
function filter2(selector, elements, options = {}) {
  return filterParsed((0, import_css_what5.parse)(selector), elements, options);
}
function filterParsed(selector, elements, options) {
  if (elements.length === 0)
    return [];
  const [plainSelectors, filteredSelectors] = groupSelectors(selector);
  let found;
  if (plainSelectors.length) {
    const filtered = filterElements(elements, plainSelectors, options);
    if (filteredSelectors.length === 0) {
      return filtered;
    }
    if (filtered.length) {
      found = new Set(filtered);
    }
  }
  for (let i = 0; i < filteredSelectors.length && (found === null || found === void 0 ? void 0 : found.size) !== elements.length; i++) {
    const filteredSelector = filteredSelectors[i];
    const missing = found ? elements.filter((e) => isTag2(e) && !found.has(e)) : elements;
    if (missing.length === 0)
      break;
    const filtered = filterBySelector(filteredSelector, elements, options);
    if (filtered.length) {
      if (!found) {
        if (i === filteredSelectors.length - 1) {
          return filtered;
        }
        found = new Set(filtered);
      } else {
        filtered.forEach((el) => found.add(el));
      }
    }
  }
  return typeof found !== "undefined" ? found.size === elements.length ? elements : (
    // Filter elements to preserve order
    elements.filter((el) => found.has(el))
  ) : [];
}
function filterBySelector(selector, elements, options) {
  var _a4;
  if (selector.some(import_css_what5.isTraversal)) {
    const root2 = (_a4 = options.root) !== null && _a4 !== void 0 ? _a4 : getDocumentRoot(elements[0]);
    const opts = { ...options, context: elements, relativeSelector: false };
    selector.push(SCOPE_PSEUDO);
    return findFilterElements(root2, selector, opts, true, elements.length);
  }
  return findFilterElements(elements, selector, options, false, elements.length);
}
function select(selector, root2, options = {}, limit = Infinity) {
  if (typeof selector === "function") {
    return find2(root2, selector);
  }
  const [plain, filtered] = groupSelectors((0, import_css_what5.parse)(selector));
  const results = filtered.map((sel) => findFilterElements(root2, sel, options, true, limit));
  if (plain.length) {
    results.push(findElements(root2, plain, options, limit));
  }
  if (results.length === 0) {
    return [];
  }
  if (results.length === 1) {
    return results[0];
  }
  return uniqueSort(results.reduce((a, b) => [...a, ...b]));
}
function findFilterElements(root2, selector, options, queryForSelector, totalLimit) {
  const filterIndex = selector.findIndex(isFilter);
  const sub = selector.slice(0, filterIndex);
  const filter4 = selector[filterIndex];
  const partLimit = selector.length - 1 === filterIndex ? totalLimit : Infinity;
  const limit = getLimit(filter4.name, filter4.data, partLimit);
  if (limit === 0)
    return [];
  const elemsNoLimit = sub.length === 0 && !Array.isArray(root2) ? getChildren(root2).filter(isTag2) : sub.length === 0 ? (Array.isArray(root2) ? root2 : [root2]).filter(isTag2) : queryForSelector || sub.some(import_css_what5.isTraversal) ? findElements(root2, [sub], options, limit) : filterElements(root2, [sub], options);
  const elems = elemsNoLimit.slice(0, limit);
  let result = filterByPosition(filter4.name, elems, filter4.data, options);
  if (result.length === 0 || selector.length === filterIndex + 1) {
    return result;
  }
  const remainingSelector = selector.slice(filterIndex + 1);
  const remainingHasTraversal = remainingSelector.some(import_css_what5.isTraversal);
  if (remainingHasTraversal) {
    if ((0, import_css_what5.isTraversal)(remainingSelector[0])) {
      const { type } = remainingSelector[0];
      if (type === import_css_what5.SelectorType.Sibling || type === import_css_what5.SelectorType.Adjacent) {
        result = prepareContext(result, esm_exports2, true);
      }
      remainingSelector.unshift(UNIVERSAL_SELECTOR);
    }
    options = {
      ...options,
      // Avoid absolutizing the selector
      relativeSelector: false,
      /*
       * Add a custom root func, to make sure traversals don't match elements
       * that aren't a part of the considered tree.
       */
      rootFunc: (el) => result.includes(el)
    };
  } else if (options.rootFunc && options.rootFunc !== boolbase7.trueFunc) {
    options = { ...options, rootFunc: boolbase7.trueFunc };
  }
  return remainingSelector.some(isFilter) ? findFilterElements(result, remainingSelector, options, false, totalLimit) : remainingHasTraversal ? (
    // Query existing elements to resolve traversal.
    findElements(result, [remainingSelector], options, totalLimit)
  ) : (
    // If we don't have any more traversals, simply filter elements.
    filterElements(result, [remainingSelector], options)
  );
}
function findElements(root2, sel, options, limit) {
  const query = _compileToken(sel, options, root2);
  return find2(root2, query, limit);
}
function find2(root2, query, limit = Infinity) {
  const elems = prepareContext(root2, esm_exports2, query.shouldTestNextSiblings);
  return find((node) => isTag2(node) && query(node), elems, true, limit);
}
function filterElements(elements, sel, options) {
  const els = (Array.isArray(elements) ? elements : [elements]).filter(isTag2);
  if (els.length === 0)
    return els;
  const query = _compileToken(sel, options);
  return query === boolbase7.trueFunc ? els : els.filter(query);
}

// node_modules/cheerio/dist/esm/api/traversing.js
var reSiblingSelector = /^\s*[+~]/;
function find3(selectorOrHaystack) {
  if (!selectorOrHaystack) {
    return this._make([]);
  }
  if (typeof selectorOrHaystack !== "string") {
    const haystack = isCheerio(selectorOrHaystack) ? selectorOrHaystack.toArray() : [selectorOrHaystack];
    const context = this.toArray();
    return this._make(haystack.filter((elem) => context.some((node) => contains(node, elem))));
  }
  return this._findBySelector(selectorOrHaystack, Number.POSITIVE_INFINITY);
}
function _findBySelector(selector, limit) {
  var _a4;
  const context = this.toArray();
  const elems = reSiblingSelector.test(selector) ? context : this.children().toArray();
  const options = {
    context,
    root: (_a4 = this._root) === null || _a4 === void 0 ? void 0 : _a4[0],
    // Pass options that are recognized by `cheerio-select`
    xmlMode: this.options.xmlMode,
    lowerCaseTags: this.options.lowerCaseTags,
    lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
    pseudos: this.options.pseudos,
    quirksMode: this.options.quirksMode
  };
  return this._make(select(selector, elems, options, limit));
}
function _getMatcher(matchMap) {
  return function(fn, ...postFns) {
    return function(selector) {
      var _a4;
      let matched = matchMap(fn, this);
      if (selector) {
        matched = filterArray(matched, selector, this.options.xmlMode, (_a4 = this._root) === null || _a4 === void 0 ? void 0 : _a4[0]);
      }
      return this._make(
        // Post processing is only necessary if there is more than one element.
        this.length > 1 && matched.length > 1 ? postFns.reduce((elems, fn2) => fn2(elems), matched) : matched
      );
    };
  };
}
var _matcher = _getMatcher((fn, elems) => {
  let ret = [];
  for (let i = 0; i < elems.length; i++) {
    const value = fn(elems[i]);
    if (value.length > 0)
      ret = ret.concat(value);
  }
  return ret;
});
var _singleMatcher = _getMatcher((fn, elems) => {
  const ret = [];
  for (let i = 0; i < elems.length; i++) {
    const value = fn(elems[i]);
    if (value !== null) {
      ret.push(value);
    }
  }
  return ret;
});
function _matchUntil(nextElem, ...postFns) {
  let matches = null;
  const innerMatcher = _getMatcher((nextElem2, elems) => {
    const matched = [];
    domEach(elems, (elem) => {
      for (let next2; next2 = nextElem2(elem); elem = next2) {
        if (matches === null || matches === void 0 ? void 0 : matches(next2, matched.length))
          break;
        matched.push(next2);
      }
    });
    return matched;
  })(nextElem, ...postFns);
  return function(selector, filterSelector) {
    matches = typeof selector === "string" ? (elem) => is2(elem, selector, this.options) : selector ? getFilterFn(selector) : null;
    const ret = innerMatcher.call(this, filterSelector);
    matches = null;
    return ret;
  };
}
function _removeDuplicates(elems) {
  return elems.length > 1 ? Array.from(new Set(elems)) : elems;
}
var parent = _singleMatcher(({ parent: parent2 }) => parent2 && !isDocument(parent2) ? parent2 : null, _removeDuplicates);
var parents = _matcher((elem) => {
  const matched = [];
  while (elem.parent && !isDocument(elem.parent)) {
    matched.push(elem.parent);
    elem = elem.parent;
  }
  return matched;
}, uniqueSort, (elems) => elems.reverse());
var parentsUntil = _matchUntil(({ parent: parent2 }) => parent2 && !isDocument(parent2) ? parent2 : null, uniqueSort, (elems) => elems.reverse());
function closest(selector) {
  var _a4;
  const set = [];
  if (!selector) {
    return this._make(set);
  }
  const selectOpts = {
    xmlMode: this.options.xmlMode,
    root: (_a4 = this._root) === null || _a4 === void 0 ? void 0 : _a4[0]
  };
  const selectFn = typeof selector === "string" ? (elem) => is2(elem, selector, selectOpts) : getFilterFn(selector);
  domEach(this, (elem) => {
    if (elem && !isDocument(elem) && !isTag2(elem)) {
      elem = elem.parent;
    }
    while (elem && isTag2(elem)) {
      if (selectFn(elem, 0)) {
        if (!set.includes(elem)) {
          set.push(elem);
        }
        break;
      }
      elem = elem.parent;
    }
  });
  return this._make(set);
}
var next = _singleMatcher((elem) => nextElementSibling(elem));
var nextAll = _matcher((elem) => {
  const matched = [];
  while (elem.next) {
    elem = elem.next;
    if (isTag2(elem))
      matched.push(elem);
  }
  return matched;
}, _removeDuplicates);
var nextUntil = _matchUntil((el) => nextElementSibling(el), _removeDuplicates);
var prev = _singleMatcher((elem) => prevElementSibling(elem));
var prevAll = _matcher((elem) => {
  const matched = [];
  while (elem.prev) {
    elem = elem.prev;
    if (isTag2(elem))
      matched.push(elem);
  }
  return matched;
}, _removeDuplicates);
var prevUntil = _matchUntil((el) => prevElementSibling(el), _removeDuplicates);
var siblings = _matcher((elem) => getSiblings(elem).filter((el) => isTag2(el) && el !== elem), uniqueSort);
var children = _matcher((elem) => getChildren(elem).filter(isTag2), _removeDuplicates);
function contents() {
  const elems = this.toArray().reduce((newElems, elem) => hasChildren(elem) ? newElems.concat(elem.children) : newElems, []);
  return this._make(elems);
}
function each(fn) {
  let i = 0;
  const len = this.length;
  while (i < len && fn.call(this[i], i, this[i]) !== false)
    ++i;
  return this;
}
function map(fn) {
  let elems = [];
  for (let i = 0; i < this.length; i++) {
    const el = this[i];
    const val2 = fn.call(el, i, el);
    if (val2 != null) {
      elems = elems.concat(val2);
    }
  }
  return this._make(elems);
}
function getFilterFn(match) {
  if (typeof match === "function") {
    return (el, i) => match.call(el, i, el);
  }
  if (isCheerio(match)) {
    return (el) => Array.prototype.includes.call(match, el);
  }
  return function(el) {
    return match === el;
  };
}
function filter3(match) {
  var _a4;
  return this._make(filterArray(this.toArray(), match, this.options.xmlMode, (_a4 = this._root) === null || _a4 === void 0 ? void 0 : _a4[0]));
}
function filterArray(nodes, match, xmlMode, root2) {
  return typeof match === "string" ? filter2(match, nodes, { xmlMode, root: root2 }) : nodes.filter(getFilterFn(match));
}
function is3(selector) {
  const nodes = this.toArray();
  return typeof selector === "string" ? some(nodes.filter(isTag2), selector, this.options) : selector ? nodes.some(getFilterFn(selector)) : false;
}
function not(match) {
  let nodes = this.toArray();
  if (typeof match === "string") {
    const matches = new Set(filter2(match, nodes, this.options));
    nodes = nodes.filter((el) => !matches.has(el));
  } else {
    const filterFn = getFilterFn(match);
    nodes = nodes.filter((el, i) => !filterFn(el, i));
  }
  return this._make(nodes);
}
function has(selectorOrHaystack) {
  return this.filter(typeof selectorOrHaystack === "string" ? (
    // Using the `:has` selector here short-circuits searches.
    `:has(${selectorOrHaystack})`
  ) : (_, el) => this._make(el).find(selectorOrHaystack).length > 0);
}
function first() {
  return this.length > 1 ? this._make(this[0]) : this;
}
function last() {
  return this.length > 0 ? this._make(this[this.length - 1]) : this;
}
function eq(i) {
  var _a4;
  i = +i;
  if (i === 0 && this.length <= 1)
    return this;
  if (i < 0)
    i = this.length + i;
  return this._make((_a4 = this[i]) !== null && _a4 !== void 0 ? _a4 : []);
}
function get(i) {
  if (i == null) {
    return this.toArray();
  }
  return this[i < 0 ? this.length + i : i];
}
function toArray() {
  return Array.prototype.slice.call(this);
}
function index(selectorOrNeedle) {
  let $haystack;
  let needle;
  if (selectorOrNeedle == null) {
    $haystack = this.parent().children();
    needle = this[0];
  } else if (typeof selectorOrNeedle === "string") {
    $haystack = this._make(selectorOrNeedle);
    needle = this[0];
  } else {
    $haystack = this;
    needle = isCheerio(selectorOrNeedle) ? selectorOrNeedle[0] : selectorOrNeedle;
  }
  return Array.prototype.indexOf.call($haystack, needle);
}
function slice(start, end2) {
  return this._make(Array.prototype.slice.call(this, start, end2));
}
function end() {
  var _a4;
  return (_a4 = this.prevObject) !== null && _a4 !== void 0 ? _a4 : this._make([]);
}
function add(other, context) {
  const selection = this._make(other, context);
  const contents2 = uniqueSort([...this.get(), ...selection.get()]);
  return this._make(contents2);
}
function addBack(selector) {
  return this.prevObject ? this.add(selector ? this.prevObject.filter(selector) : this.prevObject) : this;
}

// node_modules/cheerio/dist/esm/api/manipulation.js
var manipulation_exports = {};
__export(manipulation_exports, {
  _makeDomArray: () => _makeDomArray,
  after: () => after,
  append: () => append2,
  appendTo: () => appendTo,
  before: () => before,
  clone: () => clone,
  empty: () => empty,
  html: () => html2,
  insertAfter: () => insertAfter,
  insertBefore: () => insertBefore,
  prepend: () => prepend2,
  prependTo: () => prependTo,
  remove: () => remove,
  replaceWith: () => replaceWith,
  text: () => text3,
  toString: () => toString,
  unwrap: () => unwrap,
  wrap: () => wrap,
  wrapAll: () => wrapAll,
  wrapInner: () => wrapInner
});

// node_modules/cheerio/dist/esm/parse.js
function getParse(parser) {
  return function parse6(content, options, isDocument2, context) {
    if (typeof Buffer !== "undefined" && Buffer.isBuffer(content)) {
      content = content.toString();
    }
    if (typeof content === "string") {
      return parser(content, options, isDocument2, context);
    }
    const doc = content;
    if (!Array.isArray(doc) && isDocument(doc)) {
      return doc;
    }
    const root2 = new Document([]);
    update(doc, root2);
    return root2;
  };
}
function update(newChilds, parent2) {
  const arr = Array.isArray(newChilds) ? newChilds : [newChilds];
  if (parent2) {
    parent2.children = arr;
  } else {
    parent2 = null;
  }
  for (let i = 0; i < arr.length; i++) {
    const node = arr[i];
    if (node.parent && node.parent.children !== arr) {
      removeElement(node);
    }
    if (parent2) {
      node.prev = arr[i - 1] || null;
      node.next = arr[i + 1] || null;
    } else {
      node.prev = node.next = null;
    }
    node.parent = parent2;
  }
  return parent2;
}

// node_modules/cheerio/dist/esm/api/manipulation.js
function _makeDomArray(elem, clone2) {
  if (elem == null) {
    return [];
  }
  if (typeof elem === "string") {
    return this._parse(elem, this.options, false, null).children.slice(0);
  }
  if ("length" in elem) {
    if (elem.length === 1) {
      return this._makeDomArray(elem[0], clone2);
    }
    const result = [];
    for (let i = 0; i < elem.length; i++) {
      const el = elem[i];
      if (typeof el === "object") {
        if (el == null) {
          continue;
        }
        if (!("length" in el)) {
          result.push(clone2 ? cloneNode(el, true) : el);
          continue;
        }
      }
      result.push(...this._makeDomArray(el, clone2));
    }
    return result;
  }
  return [clone2 ? cloneNode(elem, true) : elem];
}
function _insert(concatenator) {
  return function(...elems) {
    const lastIdx = this.length - 1;
    return domEach(this, (el, i) => {
      if (!hasChildren(el))
        return;
      const domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, this._render(el.children)) : elems;
      const dom = this._makeDomArray(domSrc, i < lastIdx);
      concatenator(dom, el.children, el);
    });
  };
}
function uniqueSplice(array, spliceIdx, spliceCount, newElems, parent2) {
  var _a4, _b;
  const spliceArgs = [
    spliceIdx,
    spliceCount,
    ...newElems
  ];
  const prev2 = spliceIdx === 0 ? null : array[spliceIdx - 1];
  const next2 = spliceIdx + spliceCount >= array.length ? null : array[spliceIdx + spliceCount];
  for (let idx = 0; idx < newElems.length; ++idx) {
    const node = newElems[idx];
    const oldParent = node.parent;
    if (oldParent) {
      const oldSiblings = oldParent.children;
      const prevIdx = oldSiblings.indexOf(node);
      if (prevIdx !== -1) {
        oldParent.children.splice(prevIdx, 1);
        if (parent2 === oldParent && spliceIdx > prevIdx) {
          spliceArgs[0]--;
        }
      }
    }
    node.parent = parent2;
    if (node.prev) {
      node.prev.next = (_a4 = node.next) !== null && _a4 !== void 0 ? _a4 : null;
    }
    if (node.next) {
      node.next.prev = (_b = node.prev) !== null && _b !== void 0 ? _b : null;
    }
    node.prev = idx === 0 ? prev2 : newElems[idx - 1];
    node.next = idx === newElems.length - 1 ? next2 : newElems[idx + 1];
  }
  if (prev2) {
    prev2.next = newElems[0];
  }
  if (next2) {
    next2.prev = newElems[newElems.length - 1];
  }
  return array.splice(...spliceArgs);
}
function appendTo(target) {
  const appendTarget = isCheerio(target) ? target : this._make(target);
  appendTarget.append(this);
  return this;
}
function prependTo(target) {
  const prependTarget = isCheerio(target) ? target : this._make(target);
  prependTarget.prepend(this);
  return this;
}
var append2 = _insert((dom, children2, parent2) => {
  uniqueSplice(children2, children2.length, 0, dom, parent2);
});
var prepend2 = _insert((dom, children2, parent2) => {
  uniqueSplice(children2, 0, 0, dom, parent2);
});
function _wrap(insert) {
  return function(wrapper) {
    const lastIdx = this.length - 1;
    const lastParent = this.parents().last();
    for (let i = 0; i < this.length; i++) {
      const el = this[i];
      const wrap2 = typeof wrapper === "function" ? wrapper.call(el, i, el) : typeof wrapper === "string" && !isHtml(wrapper) ? lastParent.find(wrapper).clone() : wrapper;
      const [wrapperDom] = this._makeDomArray(wrap2, i < lastIdx);
      if (!wrapperDom || !hasChildren(wrapperDom))
        continue;
      let elInsertLocation = wrapperDom;
      let j = 0;
      while (j < elInsertLocation.children.length) {
        const child = elInsertLocation.children[j];
        if (isTag2(child)) {
          elInsertLocation = child;
          j = 0;
        } else {
          j++;
        }
      }
      insert(el, elInsertLocation, [wrapperDom]);
    }
    return this;
  };
}
var wrap = _wrap((el, elInsertLocation, wrapperDom) => {
  const { parent: parent2 } = el;
  if (!parent2)
    return;
  const siblings2 = parent2.children;
  const index2 = siblings2.indexOf(el);
  update([el], elInsertLocation);
  uniqueSplice(siblings2, index2, 0, wrapperDom, parent2);
});
var wrapInner = _wrap((el, elInsertLocation, wrapperDom) => {
  if (!hasChildren(el))
    return;
  update(el.children, elInsertLocation);
  update(wrapperDom, el);
});
function unwrap(selector) {
  this.parent(selector).not("body").each((_, el) => {
    this._make(el).replaceWith(el.children);
  });
  return this;
}
function wrapAll(wrapper) {
  const el = this[0];
  if (el) {
    const wrap2 = this._make(typeof wrapper === "function" ? wrapper.call(el, 0, el) : wrapper).insertBefore(el);
    let elInsertLocation;
    for (let i = 0; i < wrap2.length; i++) {
      if (wrap2[i].type === esm_exports.Tag) {
        elInsertLocation = wrap2[i];
      }
    }
    let j = 0;
    while (elInsertLocation && j < elInsertLocation.children.length) {
      const child = elInsertLocation.children[j];
      if (child.type === esm_exports.Tag) {
        elInsertLocation = child;
        j = 0;
      } else {
        j++;
      }
    }
    if (elInsertLocation)
      this._make(elInsertLocation).append(this);
  }
  return this;
}
function after(...elems) {
  const lastIdx = this.length - 1;
  return domEach(this, (el, i) => {
    if (!hasChildren(el) || !el.parent) {
      return;
    }
    const siblings2 = el.parent.children;
    const index2 = siblings2.indexOf(el);
    if (index2 === -1)
      return;
    const domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, this._render(el.children)) : elems;
    const dom = this._makeDomArray(domSrc, i < lastIdx);
    uniqueSplice(siblings2, index2 + 1, 0, dom, el.parent);
  });
}
function insertAfter(target) {
  if (typeof target === "string") {
    target = this._make(target);
  }
  this.remove();
  const clones = [];
  for (const el of this._makeDomArray(target)) {
    const clonedSelf = this.clone().toArray();
    const { parent: parent2 } = el;
    if (!parent2) {
      continue;
    }
    const siblings2 = parent2.children;
    const index2 = siblings2.indexOf(el);
    if (index2 === -1)
      continue;
    uniqueSplice(siblings2, index2 + 1, 0, clonedSelf, parent2);
    clones.push(...clonedSelf);
  }
  return this._make(clones);
}
function before(...elems) {
  const lastIdx = this.length - 1;
  return domEach(this, (el, i) => {
    if (!hasChildren(el) || !el.parent) {
      return;
    }
    const siblings2 = el.parent.children;
    const index2 = siblings2.indexOf(el);
    if (index2 === -1)
      return;
    const domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, this._render(el.children)) : elems;
    const dom = this._makeDomArray(domSrc, i < lastIdx);
    uniqueSplice(siblings2, index2, 0, dom, el.parent);
  });
}
function insertBefore(target) {
  const targetArr = this._make(target);
  this.remove();
  const clones = [];
  domEach(targetArr, (el) => {
    const clonedSelf = this.clone().toArray();
    const { parent: parent2 } = el;
    if (!parent2) {
      return;
    }
    const siblings2 = parent2.children;
    const index2 = siblings2.indexOf(el);
    if (index2 === -1)
      return;
    uniqueSplice(siblings2, index2, 0, clonedSelf, parent2);
    clones.push(...clonedSelf);
  });
  return this._make(clones);
}
function remove(selector) {
  const elems = selector ? this.filter(selector) : this;
  domEach(elems, (el) => {
    removeElement(el);
    el.prev = el.next = el.parent = null;
  });
  return this;
}
function replaceWith(content) {
  return domEach(this, (el, i) => {
    const { parent: parent2 } = el;
    if (!parent2) {
      return;
    }
    const siblings2 = parent2.children;
    const cont = typeof content === "function" ? content.call(el, i, el) : content;
    const dom = this._makeDomArray(cont);
    update(dom, null);
    const index2 = siblings2.indexOf(el);
    uniqueSplice(siblings2, index2, 1, dom, parent2);
    if (!dom.includes(el)) {
      el.parent = el.prev = el.next = null;
    }
  });
}
function empty() {
  return domEach(this, (el) => {
    if (!hasChildren(el))
      return;
    for (const child of el.children) {
      child.next = child.prev = child.parent = null;
    }
    el.children.length = 0;
  });
}
function html2(str) {
  if (str === void 0) {
    const el = this[0];
    if (!el || !hasChildren(el))
      return null;
    return this._render(el.children);
  }
  return domEach(this, (el) => {
    if (!hasChildren(el))
      return;
    for (const child of el.children) {
      child.next = child.prev = child.parent = null;
    }
    const content = isCheerio(str) ? str.toArray() : this._parse(`${str}`, this.options, false, el).children;
    update(content, el);
  });
}
function toString() {
  return this._render(this);
}
function text3(str) {
  if (str === void 0) {
    return text2(this);
  }
  if (typeof str === "function") {
    return domEach(this, (el, i) => this._make(el).text(str.call(el, i, text2([el]))));
  }
  return domEach(this, (el) => {
    if (!hasChildren(el))
      return;
    for (const child of el.children) {
      child.next = child.prev = child.parent = null;
    }
    const textNode = new Text2(`${str}`);
    update(textNode, el);
  });
}
function clone() {
  const clone2 = Array.prototype.map.call(this.get(), (el) => cloneNode(el, true));
  const root2 = new Document(clone2);
  for (const node of clone2) {
    node.parent = root2;
  }
  return this._make(clone2);
}

// node_modules/cheerio/dist/esm/api/css.js
var css_exports = {};
__export(css_exports, {
  css: () => css
});
function css(prop2, val2) {
  if (prop2 != null && val2 != null || // When `prop` is a "plain" object
  typeof prop2 === "object" && !Array.isArray(prop2)) {
    return domEach(this, (el, i) => {
      if (isTag2(el)) {
        setCss(el, prop2, val2, i);
      }
    });
  }
  if (this.length === 0) {
    return void 0;
  }
  return getCss(this[0], prop2);
}
function setCss(el, prop2, value, idx) {
  if (typeof prop2 === "string") {
    const styles = getCss(el);
    const val2 = typeof value === "function" ? value.call(el, idx, styles[prop2]) : value;
    if (val2 === "") {
      delete styles[prop2];
    } else if (val2 != null) {
      styles[prop2] = val2;
    }
    el.attribs["style"] = stringify(styles);
  } else if (typeof prop2 === "object") {
    const keys = Object.keys(prop2);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      setCss(el, k, prop2[k], i);
    }
  }
}
function getCss(el, prop2) {
  if (!el || !isTag2(el))
    return;
  const styles = parse5(el.attribs["style"]);
  if (typeof prop2 === "string") {
    return styles[prop2];
  }
  if (Array.isArray(prop2)) {
    const newStyles = {};
    for (const item of prop2) {
      if (styles[item] != null) {
        newStyles[item] = styles[item];
      }
    }
    return newStyles;
  }
  return styles;
}
function stringify(obj) {
  return Object.keys(obj).reduce((str, prop2) => `${str}${str ? " " : ""}${prop2}: ${obj[prop2]};`, "");
}
function parse5(styles) {
  styles = (styles || "").trim();
  if (!styles)
    return {};
  const obj = {};
  let key;
  for (const str of styles.split(";")) {
    const n = str.indexOf(":");
    if (n < 1 || n === str.length - 1) {
      const trimmed = str.trimEnd();
      if (trimmed.length > 0 && key !== void 0) {
        obj[key] += `;${trimmed}`;
      }
    } else {
      key = str.slice(0, n).trim();
      obj[key] = str.slice(n + 1).trim();
    }
  }
  return obj;
}

// node_modules/cheerio/dist/esm/api/forms.js
var forms_exports = {};
__export(forms_exports, {
  serialize: () => serialize,
  serializeArray: () => serializeArray
});
var submittableSelector = "input,select,textarea,keygen";
var r20 = /%20/g;
var rCRLF = /\r?\n/g;
function serialize() {
  const arr = this.serializeArray();
  const retArr = arr.map((data2) => `${encodeURIComponent(data2.name)}=${encodeURIComponent(data2.value)}`);
  return retArr.join("&").replace(r20, "+");
}
function serializeArray() {
  return this.map((_, elem) => {
    const $elem = this._make(elem);
    if (isTag2(elem) && elem.name === "form") {
      return $elem.find(submittableSelector).toArray();
    }
    return $elem.filter(submittableSelector).toArray();
  }).filter(
    // Verify elements have a name (`attr.name`) and are not disabled (`:enabled`)
    '[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))'
  ).map((_, elem) => {
    var _a4;
    const $elem = this._make(elem);
    const name = $elem.attr("name");
    const value = (_a4 = $elem.val()) !== null && _a4 !== void 0 ? _a4 : "";
    if (Array.isArray(value)) {
      return value.map((val2) => (
        /*
         * We trim replace any line endings (e.g. `\r` or `\r\n` with `\r\n`) to guarantee consistency across platforms
         * These can occur inside of `<textarea>'s`
         */
        { name, value: val2.replace(rCRLF, "\r\n") }
      ));
    }
    return { name, value: value.replace(rCRLF, "\r\n") };
  }).toArray();
}

// node_modules/cheerio/dist/esm/api/extract.js
var extract_exports = {};
__export(extract_exports, {
  extract: () => extract2
});
function getExtractDescr(descr) {
  var _a4;
  if (typeof descr === "string") {
    return { selector: descr, value: "textContent" };
  }
  return {
    selector: descr.selector,
    value: (_a4 = descr.value) !== null && _a4 !== void 0 ? _a4 : "textContent"
  };
}
function extract2(map2) {
  const ret = {};
  for (const key in map2) {
    const descr = map2[key];
    const isArray = Array.isArray(descr);
    const { selector, value } = getExtractDescr(isArray ? descr[0] : descr);
    const fn = typeof value === "function" ? value : typeof value === "string" ? (el) => this._make(el).prop(value) : (el) => this._make(el).extract(value);
    if (isArray) {
      ret[key] = this._findBySelector(selector, Number.POSITIVE_INFINITY).map((_, el) => fn(el, key, ret)).get();
    } else {
      const $ = this._findBySelector(selector, 1);
      ret[key] = $.length > 0 ? fn($[0], key, ret) : void 0;
    }
  }
  return ret;
}

// node_modules/cheerio/dist/esm/cheerio.js
var Cheerio = class {
  /**
   * Instance of cheerio. Methods are specified in the modules. Usage of this
   * constructor is not recommended. Please use `$.load` instead.
   *
   * @private
   * @param elements - The new selection.
   * @param root - Sets the root node.
   * @param options - Options for the instance.
   */
  constructor(elements, root2, options) {
    this.length = 0;
    this.options = options;
    this._root = root2;
    if (elements) {
      for (let idx = 0; idx < elements.length; idx++) {
        this[idx] = elements[idx];
      }
      this.length = elements.length;
    }
  }
};
Cheerio.prototype.cheerio = "[cheerio object]";
Cheerio.prototype.splice = Array.prototype.splice;
Cheerio.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
Object.assign(Cheerio.prototype, attributes_exports, traversing_exports, manipulation_exports, css_exports, forms_exports, extract_exports);

// node_modules/cheerio/dist/esm/load.js
function getLoad(parse6, render3) {
  return function load2(content, options, isDocument2 = true) {
    if (content == null) {
      throw new Error("cheerio.load() expects a string");
    }
    const internalOpts = flattenOptions(options);
    const initialRoot = parse6(content, internalOpts, isDocument2, null);
    class LoadedCheerio extends Cheerio {
      _make(selector, context) {
        const cheerio = initialize(selector, context);
        cheerio.prevObject = this;
        return cheerio;
      }
      _parse(content2, options2, isDocument3, context) {
        return parse6(content2, options2, isDocument3, context);
      }
      _render(dom) {
        return render3(dom, this.options);
      }
    }
    function initialize(selector, context, root2 = initialRoot, opts) {
      if (selector && isCheerio(selector))
        return selector;
      const options2 = flattenOptions(opts, internalOpts);
      const r = typeof root2 === "string" ? [parse6(root2, options2, false, null)] : "length" in root2 ? root2 : [root2];
      const rootInstance = isCheerio(r) ? r : new LoadedCheerio(r, null, options2);
      rootInstance._root = rootInstance;
      if (!selector) {
        return new LoadedCheerio(void 0, rootInstance, options2);
      }
      const elements = typeof selector === "string" && isHtml(selector) ? (
        // $(<html>)
        parse6(selector, options2, false, null).children
      ) : isNode(selector) ? (
        // $(dom)
        [selector]
      ) : Array.isArray(selector) ? (
        // $([dom])
        selector
      ) : void 0;
      const instance = new LoadedCheerio(elements, rootInstance, options2);
      if (elements) {
        return instance;
      }
      if (typeof selector !== "string") {
        throw new TypeError("Unexpected type of selector");
      }
      let search = selector;
      const searchContext = context ? (
        // If we don't have a context, maybe we have a root, from loading
        typeof context === "string" ? isHtml(context) ? (
          // $('li', '<ul>...</ul>')
          new LoadedCheerio([parse6(context, options2, false, null)], rootInstance, options2)
        ) : (
          // $('li', 'ul')
          (search = `${context} ${search}`, rootInstance)
        ) : isCheerio(context) ? (
          // $('li', $)
          context
        ) : (
          // $('li', node), $('li', [nodes])
          new LoadedCheerio(Array.isArray(context) ? context : [context], rootInstance, options2)
        )
      ) : rootInstance;
      if (!searchContext)
        return instance;
      return searchContext.find(search);
    }
    Object.assign(initialize, static_exports, {
      load: load2,
      // `_root` and `_options` are used in static methods.
      _root: initialRoot,
      _options: internalOpts,
      // Add `fn` for plugins
      fn: LoadedCheerio.prototype,
      // Add the prototype here to maintain `instanceof` behavior.
      prototype: LoadedCheerio.prototype
    });
    return initialize;
  };
}
function isNode(obj) {
  return (
    // @ts-expect-error: TS doesn't know about the `name` property.
    !!obj.name || // @ts-expect-error: TS doesn't know about the `type` property.
    obj.type === esm_exports.Root || // @ts-expect-error: TS doesn't know about the `type` property.
    obj.type === esm_exports.Text || // @ts-expect-error: TS doesn't know about the `type` property.
    obj.type === esm_exports.Comment
  );
}

// node_modules/cheerio/dist/esm/slim.js
var load = getLoad(getParse(parseDocument), esm_default);

// src/shopping/providers.mjs
var shoppingTimestamp = (date = /* @__PURE__ */ new Date()) => new Date(date.getTime() + 8 * 36e5).toISOString().slice(0, 19).replace("T", " ");
function signShopping(params, secret) {
  const text4 = Object.keys(params).filter((key) => key !== "sign").sort().map((key) => key + params[key]).join("");
  return createHash6("md5").update(secret + text4 + secret, "utf8").digest("hex").toUpperCase();
}
var isoTime = (value) => {
  const number = Number(value);
  if (!number || !Number.isFinite(number)) return "";
  const date = new Date(number < 1e11 ? number * 1e3 : number);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString();
};
function parseManmanbuy(html3, { url = "https://s.manmanbuy.com/", now = (/* @__PURE__ */ new Date()).toISOString() } = {}) {
  const $ = load(html3);
  if (new URL(url).hostname !== "s.manmanbuy.com" || /验证码|访问验证|安全验证/.test($("title").text()) || $("#captcha-element, [id*=captcha]").length) throw new Error("\u6162\u6162\u4E70\u9700\u8981\u4EBA\u673A\u9A8C\u8BC1\uFF0C\u5DF2\u505C\u6B62\u8BE5\u6765\u6E90");
  $("script, style, noscript").remove();
  const offers = [], seen = /* @__PURE__ */ new Set();
  $('[class*="DiscountItemPC_discountItem__"]').each((_, element) => {
    const card = $(element), titleLink = card.find('[class*="itemTitle__"] a').first();
    const sourceUrl = shoppingUrl(titleLink.attr("href"), url), id = /discuxiao_(\d+)\.aspx/.exec(sourceUrl)?.[1];
    if (!id || seen.has(id)) return;
    const conditions = cleanText2(card.find('[class*="itemSubTitle__"]').text(), 500);
    const price = /^(\d+(?:\.\d{1,2})?)\s*元(?:[^\d]|$)/u.exec(conditions)?.[1];
    const title = titleLink.text(), mall = cleanText2(card.find('[class*="itemMall__"]').text());
    const platform = /京东/.test(mall) ? "jd" : /天猫/.test(mall) ? "tmall" : /淘宝/.test(mall) ? "taobao" : mall;
    offers.push(shoppingOffer({
      source: "manmanbuy",
      id,
      title,
      sourceUrl,
      priceCents: cents(price),
      priceLabel: "\u7206\u6599\u4EF7",
      platform,
      shop: mall,
      conditions,
      couponMentioned: /券/.test(title + conditions),
      publishedAt: card.find('[class*="itemTime__"]').text(),
      observedAt: now
    }));
    seen.add(id);
  });
  if (!offers.length && !/暂无|没有找到|无相关|未找到/.test($.root().text())) throw new Error("\u6162\u6162\u4E70\u672A\u89E3\u6790\u51FA\u5546\u54C1\uFF0C\u53EF\u80FD\u9875\u9762\u7ED3\u6784\u5DF2\u53D8\u5316\uFF1B\u8BF7\u6253\u5F00\u6765\u6E90\u9875\u6838\u5BF9");
  return offers;
}
function parseJD(data2, now = (/* @__PURE__ */ new Date()).toISOString()) {
  return (Array.isArray(data2) ? data2 : []).slice(0, 50).flatMap((item) => {
    try {
      if (!/^\d{1,25}$/.test(String(item.skuId))) return [];
      const coupons = (item.couponInfo?.couponList || []).slice(0, 8).map((coupon) => ({
        title: `\u6EE1${coupon.quota ?? "?"}\u51CF${coupon.discount ?? "?"}`,
        amountCents: cents(coupon.discount),
        thresholdCents: cents(coupon.quota),
        url: coupon.link,
        startsAt: isoTime(coupon.useStartTime),
        endsAt: isoTime(coupon.useEndTime)
      }));
      const estimate = cents(item.priceInfo?.lowestCouponPrice), listed = cents(item.priceInfo?.price);
      const final = estimate !== null && estimate > 0 ? estimate : null;
      return [shoppingOffer({
        source: "jd",
        id: item.skuId,
        title: item.skuName,
        sourceUrl: `https://item.jd.com/${item.skuId}.html`,
        platform: "jd",
        shop: item.shopInfo?.shopName,
        priceCents: final ?? listed,
        priceLabel: final !== null ? "\u9884\u4F30\u5238\u540E\u4EF7" : "\u9500\u552E\u4EF7",
        conditions: "\u8054\u76DF\u62A5\u4EF7\uFF1B\u6838\u5BF9\u89C4\u683C\u3001\u914D\u9001\u3001\u4F1A\u5458\u4E0E\u4F18\u60E0\u5238\u4F7F\u7528\u6761\u4EF6\uFF0C\u4EE5\u5E73\u53F0\u7ED3\u7B97\u4E3A\u51C6",
        observedAt: now,
        coupons
      })];
    } catch {
      return [];
    }
  });
}
function parseTaobao(data2, now = (/* @__PURE__ */ new Date()).toISOString()) {
  return (Array.isArray(data2) ? data2 : []).slice(0, 50).flatMap((item) => {
    try {
      const basic = item.item_basic_info || {}, price = item.price_promotion_info || {}, publish = item.publish_info || {};
      const promotion = price.final_promotion_path_list?.final_promotion_path_map_data || [];
      const coupons = (price.more_promotion_list?.more_promotion_map_data || []).filter((p) => /券/.test(p.promotion_title || "")).map((p) => ({ title: cleanText2(p.promotion_title + " " + p.promotion_desc), url: p.promotion_url, startsAt: isoTime(p.promotion_start_time), endsAt: isoTime(p.promotion_end_time) }));
      const estimate = cents(price.final_promotion_price);
      const final = estimate !== null && estimate > 0 ? estimate : null;
      return [shoppingOffer({
        source: "taobao",
        id: item.item_id,
        title: basic.title,
        sourceUrl: publish.click_url || publish.coupon_share_url || basic.item_url,
        platform: Number(basic.user_type) === 1 ? "tmall" : "taobao",
        shop: basic.shop_title,
        priceCents: final ?? cents(price.zk_final_price),
        priceLabel: final !== null ? "\u9884\u4F30\u4FC3\u9500\u4EF7" : "\u9500\u552E\u4EF7",
        shippingCents: cents(basic.real_post_fee),
        conditions: ["\u6838\u5BF9\u89C4\u683C\u3001\u8FD0\u8D39\u548C\u8D26\u53F7\u6743\u76CA\uFF0C\u4EE5\u5E73\u53F0\u7ED3\u7B97\u4E3A\u51C6", ...promotion.map((p) => cleanText2(p.promotion_title + " " + p.promotion_desc))].join("\uFF1B"),
        couponMentioned: promotion.some((p) => /券/.test(p.promotion_title || "")),
        coupons,
        observedAt: now
      })];
    } catch {
      return [];
    }
  });
}
function createShoppingProviders({ http: http2 = createHttpClient({ timeoutMs: 15e3, maxBytes: 2 * 1024 * 1024 }), now = () => /* @__PURE__ */ new Date() } = {}) {
  async function api(url, params, signal) {
    const response = await http2(url, { method: "POST", body: new URLSearchParams(params).toString(), headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" }, signal, redirect: "manual" });
    let data2;
    try {
      data2 = JSON.parse(response.text);
    } catch {
      throw new Error("\u8D2D\u7269\u63A5\u53E3\u6CA1\u6709\u8FD4\u56DE\u6709\u6548 JSON");
    }
    if (data2.error_response) throw new Error("\u5E73\u53F0\u63A5\u53E3\u62D2\u7EDD\u8BF7\u6C42\uFF0C\u8BF7\u5728\u6765\u6E90\u8BBE\u7F6E\u68C0\u67E5\u5E94\u7528\u51ED\u636E\u4E0E\u63A5\u53E3\u6743\u9650");
    return data2;
  }
  return {
    async search(source, query, { credentials, signal, page = 1, limit = 20, onlyCoupons = false, tmallOnly = false } = {}) {
      if (source === "manmanbuy") {
        const url = new URL("https://s.manmanbuy.com/pc/search/result");
        url.search = new URLSearchParams({ c: "discount", keyword: query, pageId: String(page) }).toString();
        const response2 = await http2(url.href, { signal, redirect: "manual" });
        if (response2.redirect) throw new Error("\u6162\u6162\u4E70\u8981\u6C42\u8DF3\u8F6C\u6216\u8BBF\u95EE\u9A8C\u8BC1\uFF0C\u5DF2\u505C\u6B62\u8BE5\u6765\u6E90\uFF1B\u53EF\u6253\u5F00\u5B98\u65B9\u6765\u6E90\u9875\u67E5\u770B");
        return parseManmanbuy(response2.text, { url: response2.url, now: now().toISOString() });
      }
      if (!credentials) throw new Error("\u8BF7\u5728\u8D2D\u7269\u300C\u6765\u6E90\u300D\u4E2D\u914D\u7F6E\u8054\u76DF\u5E94\u7528\u51ED\u636E\uFF1B\u4E70\u5BB6\u7F51\u9875\u767B\u5F55\u4E0D\u80FD\u66FF\u4EE3\u63A5\u53E3\u6388\u6743");
      const params = { app_key: credentials.appKey, format: "json", sign_method: "md5", timestamp: shoppingTimestamp(now()) };
      if (source === "jd") {
        Object.assign(params, { method: "jd.union.open.goods.query", v: "1.0", param_json: JSON.stringify({ goodsReqDTO: { keyword: query, pageIndex: page, pageSize: limit, ...onlyCoupons ? { isCoupon: 1 } : {} } }) });
        params.sign = signShopping(params, credentials.appSecret);
        const data3 = await api("https://api.jd.com/routerjson", params, signal);
        let result;
        try {
          const outer = data3.jd_union_open_goods_query_responce || data3.jd_union_open_goods_query_response;
          result = typeof outer?.queryResult === "string" ? JSON.parse(outer.queryResult) : outer?.queryResult;
        } catch {
        }
        if (!result || Number(result.code) !== 200) throw new Error("\u4EAC\u4E1C\u8054\u76DF\u67E5\u8BE2\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5546\u54C1\u67E5\u8BE2\u63A5\u53E3\u6743\u9650\u4E0E\u989D\u5EA6");
        return parseJD(result.data, now().toISOString());
      }
      if (source !== "taobao") throw new Error("\u4E0D\u652F\u6301\u7684\u8D2D\u7269\u6765\u6E90");
      Object.assign(params, { method: "taobao.tbk.dg.material.optional.upgrade", v: "2.0", q: query, adzone_id: credentials.adzoneId, page_no: String(page), page_size: String(limit), has_coupon: String(onlyCoupons), is_tmall: String(tmallOnly) });
      params.sign = signShopping(params, credentials.appSecret);
      const data2 = await api("https://eco.taobao.com/router/rest", params, signal);
      const response = data2.tbk_dg_material_optional_upgrade_response;
      if (!response) throw new Error("\u6DD8\u5B9D\u8054\u76DF\u67E5\u8BE2\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5E94\u7528\u51ED\u636E\u3001\u63A8\u5E7F\u4F4D\u548C\u63A5\u53E3\u6743\u9650");
      return parseTaobao(response.result_list?.map_data || [], now().toISOString());
    }
  };
}

// src/shopping/service.mjs
var ShoppingService = class {
  constructor(library, { providers = createShoppingProviders() } = {}) {
    this.settings = new ShoppingSettings(library);
    this.providers = providers;
  }
  async sources() {
    return Promise.all(SHOPPING_SOURCES.map(async (source) => ({ ...source, ...await this.settings.status(source.id), capabilities: ["search", "offers", "favorites"], login: "platform-page" })));
  }
  /** @param {string} query @param {{source?: string, platform?: string, onlyCoupons?: boolean, maxPriceCents?: number|null, limit?: number, page?: number, signal?: AbortSignal}} options */
  async search(query, { source = "all", platform = "all", onlyCoupons = false, maxPriceCents = null, limit = 10, page = 1, signal } = {}) {
    if (typeof query !== "string" || !query.trim() || query.length > 200) throw new Error("\u8BF7\u8F93\u5165 1\u2013200 \u5B57\u7684\u5546\u54C1\u5173\u952E\u8BCD\u3001\u54C1\u724C\u578B\u53F7\u4E0E\u89C4\u683C");
    if (!["all", "jd", "taobao", "tmall"].includes(platform)) throw new Error("\u4E0D\u652F\u6301\u7684\u5E73\u53F0\u7B5B\u9009");
    if (!Number.isInteger(limit) || limit < 1 || limit > 20 || !Number.isInteger(page) || page < 1 || page > 100) throw new Error("\u6BCF\u6B21\u67E5\u8BE2 1\u201320 \u6761\uFF0C\u9875\u7801 1\u2013100");
    if (maxPriceCents !== null && (!Number.isSafeInteger(maxPriceCents) || maxPriceCents < 0)) throw new Error("\u9884\u7B97\u683C\u5F0F\u4E0D\u6B63\u786E");
    const states = await this.sources(), selected = source === "all" ? states.filter((s) => !s.credential || s.configured) : [states.find((s) => s.id === shoppingSource(source).id)];
    signal?.throwIfAborted();
    const completed = await Promise.allSettled(selected.map(async (item) => {
      const credentials = item.credential ? await this.settings.credentials(item.id) : null;
      const offers2 = await this.providers.search(item.id, query.trim(), { credentials, signal, page, limit: 20, onlyCoupons, tmallOnly: platform === "tmall" });
      return offers2.map(shoppingOffer);
    }));
    signal?.throwIfAborted();
    const offers = [], errors = [], keys = /* @__PURE__ */ new Set();
    completed.forEach((result, index2) => {
      if (result.status === "rejected") {
        errors.push({ source: selected[index2].id, message: result.reason instanceof Error ? result.reason.message : "\u6765\u6E90\u67E5\u8BE2\u5931\u8D25" });
        return;
      }
      for (const offer of result.value) {
        const matchPlatform = platform === "all" || offer.platform === platform || platform === "taobao" && offer.platform === "tmall";
        if (!matchPlatform || onlyCoupons && !offer.coupons.some((coupon) => couponAvailable(coupon)) && !offer.couponMentioned) continue;
        if (maxPriceCents !== null && (offer.priceCents === null || offer.priceCents > maxPriceCents)) continue;
        const key = offerKey(offer);
        if (!keys.has(key)) {
          offers.push(offer);
          keys.add(key);
        }
      }
    });
    offers.sort((a, b) => (a.priceCents ?? Infinity) - (b.priceCents ?? Infinity));
    return {
      query: query.trim(),
      page,
      offers: offers.slice(0, limit),
      matched: offers.length,
      errors,
      skipped: source === "all" ? states.filter((s) => s.credential && !s.configured).map((s) => ({ source: s.id, reason: "\u672A\u914D\u7F6E\u8054\u76DF\u5E94\u7528\u51ED\u636E" })) : [],
      notice: "\u6309\u672C\u6B21\u67E5\u5230\u7684\u62A5\u4EF7\u6392\u5E8F\uFF1B\u5546\u54C1\u89C4\u683C\u53EF\u80FD\u4E0D\u540C\uFF0C\u7206\u6599\u53CA\u9884\u4F30\u4EF7\u9700\u6838\u5BF9\u4F18\u60E0\u6761\u4EF6\u3002\u4E0D\u662F\u5168\u7F51\u6700\u4F4E\u4EF7\u6216\u7ED3\u7B97\u4EF7\u4FDD\u8BC1\u3002"
    };
  }
};

// src/ui/shopping.tsx
function createShoppingReader(api, library, settings) {
  const service = new ShoppingService(library);
  const [results, setResults] = createSignal3([]);
  const [source, setSource] = createSignal3("all");
  const [platform, setPlatform] = createSignal3("all");
  const [onlyCoupons, setOnlyCoupons] = createSignal3(false);
  const [maxPrice, setMaxPrice] = createSignal3(null);
  const [busy, setBusy] = createSignal3(false);
  const [notice, setNotice] = createSignal3("\u641C\u7D22\u5546\u54C1\uFF0C\u67E5\u770B\u597D\u4EF7\u4E0E\u4F18\u60E0\u6761\u4EF6");
  const [lastQuery, setLastQuery] = createSignal3("");
  const [page, setPage] = createSignal3(1);
  let pending, disposed = false;
  function toast(message, error = false) {
    if (!disposed && !api.lifecycle.signal.aborted) api.ui.toast({
      title: "\u58A8\u9C7C\u8D2D\u7269",
      message,
      variant: error ? "error" : "info"
    });
  }
  function fail(error) {
    toast(error instanceof Error ? error.message : "\u8D2D\u7269\u64CD\u4F5C\u5931\u8D25", true);
  }
  async function open3(url) {
    const target = shoppingUrl(url);
    if (!target) throw new Error("\u65E0\u6548\u7684\u8D2D\u7269\u5E73\u53F0\u94FE\u63A5");
    await openMusicPage(target);
  }
  function notes(offer, saved) {
    const lines = [`${offer.priceLabel} ${money(offer.priceCents)}`, `\u8FD0\u8D39\uFF1A${offer.shippingCents === null ? "\u5F85\u786E\u8BA4" : money(offer.shippingCents)}`, `\u6765\u6E90\uFF1A${shoppingSource(offer.source).name}`, `\u5E97\u94FA\uFF1A${offer.shop || offer.platform}`, `\u53D1\u5E03\uFF1A${offer.publishedAt || "\u6765\u6E90\u672A\u6CE8\u660E"}`, `\u67E5\u8BE2\uFF1A${offer.observedAt}`, "\u4F18\u60E0\u6761\u4EF6\uFF1A", offer.conditions || "\u6765\u6E90\u672A\u6CE8\u660E\uFF0C\u8BF7\u5230\u5E73\u53F0\u9875\u9762\u6838\u5BF9"];
    const wrapped = [];
    for (const line of lines) {
      let part = "";
      for (const char of line) {
        if (stringWidth(part + char) > 44) {
          wrapped.push(part);
          part = "";
        }
        part += char;
      }
      if (part) wrapped.push(part);
    }
    settings.dialog(() => _$createComponent3(api.ui.DialogSelect, {
      title: "\u5B8C\u6574\u62A5\u4EF7\u4E0E\u4F18\u60E0\u8BF4\u660E",
      placeholder: "\u53EF\u6EDA\u52A8\u67E5\u770B\uFF1B\u70B9\u51FB\u4EFB\u4E00\u884C\u8FD4\u56DE\u5546\u54C1\u64CD\u4F5C",
      get options() {
        return wrapped.map((title, i) => ({
          title,
          value: String(i)
        }));
      },
      onSelect: () => {
        settings.close();
        detail(offer, saved);
      }
    }));
  }
  function detail(offer, saved = false) {
    settings.dialog(() => _$createComponent3(api.ui.DialogSelect, {
      get title() {
        return offer.title;
      },
      get placeholder() {
        return `${offer.priceLabel} ${money(offer.priceCents)} \xB7 ${offer.conditions}`;
      },
      get options() {
        return [{
          title: `${offer.priceLabel} ${money(offer.priceCents)}`,
          value: "info",
          description: `${offer.shop || offer.platform} \xB7 \u8FD0\u8D39${offer.shippingCents === null ? "\u5F85\u786E\u8BA4" : money(offer.shippingCents)}`
        }, {
          title: offer.conditions || "\u4F18\u60E0\u6761\u4EF6\u8BF7\u5230\u6765\u6E90\u9875\u6838\u5BF9",
          value: "conditions",
          description: `\u53D1\u5E03 ${offer.publishedAt || "\u6765\u6E90\u672A\u6CE8\u660E"} \xB7 \u67E5\u8BE2 ${offer.observedAt}`
        }, {
          title: "\u6253\u5F00\u5546\u54C1 / \u597D\u4EF7\u6765\u6E90\u9875",
          value: "source",
          description: shoppingSource(offer.source).name + " \xB7 \u5728\u5E73\u53F0\u9875\u9762\u767B\u5F55\u3001\u9886\u5238\u6216\u8D2D\u4E70"
        }, ...offer.coupons.filter((coupon) => couponAvailable(coupon)).map((coupon, i) => ({
          title: `\u6253\u5F00\u4F18\u60E0\u5238\uFF1A${coupon.title}`,
          value: `coupon:${i}`,
          description: coupon.endsAt ? `\u5230\u671F ${coupon.endsAt}\uFF0C\u9886\u53D6\u8D44\u683C\u7531\u5E73\u53F0\u786E\u8BA4` : "\u4F18\u60E0\u8D44\u683C\u4E0E\u53E0\u52A0\u6761\u4EF6\u7531\u5E73\u53F0\u786E\u8BA4"
        })), {
          title: saved ? "\u5220\u9664\u8FD9\u6761\u6536\u85CF" : "\u6536\u85CF\u6B64\u62A5\u4EF7",
          value: saved ? "remove" : "save",
          description: "\u4EC5\u5728\u672C\u5730\u52A0\u5BC6\u4FDD\u5B58\uFF0C\u6536\u85CF\u4EF7\u683C\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0"
        }, {
          title: "\u641C\u7D22\u540C\u6B3E\u5173\u952E\u8BCD\u2026",
          value: "search",
          description: "\u8F93\u5165\u54C1\u724C\u3001\u578B\u53F7\u3001\u5BB9\u91CF / \u6570\u91CF\uFF0C\u6838\u5BF9\u76F8\u540C\u89C4\u683C"
        }];
      },
      onSelect: (item) => {
        settings.close();
        if (item.value === "info" || item.value === "conditions") return notes(offer, saved);
        if (item.value === "source") return void open3(offer.sourceUrl).catch(fail);
        if (item.value.startsWith("coupon:")) {
          const coupon = offer.coupons.filter((coupon2) => couponAvailable(coupon2))[Number(item.value.slice(7))];
          if (coupon) void open3(coupon.url).catch(fail);
          return;
        }
        if (item.value === "search") return promptSearch();
        void (item.value === "remove" ? service.settings.removeFavorite(offer) : service.settings.saveFavorite(offer)).then(() => toast(item.value === "remove" ? "\u5DF2\u5220\u9664\u6536\u85CF" : "\u62A5\u4EF7\u5DF2\u52A0\u5BC6\u6536\u85CF")).catch(fail);
      }
    }));
  }
  function showResults() {
    if (!results().length) return promptSearch();
    settings.dialog(() => _$createComponent3(api.ui.DialogSelect, {
      get title() {
        return `\u8D2D\u7269\u7ED3\u679C \xB7 \u7B2C ${page()} \u9875 \xB7 ${results().length} \u6761`;
      },
      placeholder: "\u6309\u672C\u6B21\u62A5\u4EF7\u6392\u5E8F\uFF0C\u9009\u62E9\u67E5\u770B\u4F18\u60E0\u6761\u4EF6\u3001\u9886\u5238\u5165\u53E3\u6216\u6536\u85CF",
      get options() {
        return results().map((offer) => ({
          title: `${money(offer.priceCents)} \xB7 ${offer.title}`,
          value: offerKey(offer),
          description: `${offer.priceLabel} \xB7 ${offer.shop || offer.platform} \xB7 ${offer.conditions}`
        }));
      },
      onSelect: (item) => {
        settings.close();
        const offer = results().find((offer2) => offerKey(offer2) === item.value);
        if (offer) detail(offer);
      }
    }));
  }
  async function search(query, nextPage = 1) {
    pending?.abort();
    const controller = pending = new AbortController();
    setBusy(true);
    setNotice("\u6B63\u5728\u67E5\u8BE2\u597D\u4EF7\u2026");
    setResults([]);
    try {
      const response = await service.search(query, {
        source: source(),
        platform: platform(),
        onlyCoupons: onlyCoupons(),
        maxPriceCents: maxPrice(),
        page: nextPage,
        limit: 20,
        signal: controller.signal
      });
      if (controller.signal.aborted || disposed || api.lifecycle.signal.aborted) return;
      setLastQuery(query);
      setPage(nextPage);
      setResults(response.offers);
      setNotice(response.errors.length ? response.errors.map((e) => `${shoppingSource(e.source).name}\uFF1A${e.message}`).join("\uFF1B") : response.offers.length ? `\u627E\u5230 ${response.offers.length} \u6761\u62A5\u4EF7\uFF1B\u672A\u914D\u7F6E\u7684\u8054\u76DF\u6765\u6E90\u4E0D\u53C2\u4E0E\u805A\u5408` : "\u672C\u9875\u6CA1\u6709\u7B26\u5408\u7B5B\u9009\u7684\u597D\u4EF7\uFF0C\u53EF\u6362\u5173\u952E\u8BCD\u3001\u7B5B\u9009\u6216\u4E0B\u4E00\u9875");
      if (response.offers.length && settings.active() && settings.canDialog()) showResults();
      else toast(response.offers.length ? "\u67E5\u8BE2\u5B8C\u6210\uFF0C\u70B9\u51FB\u300C\u7ED3\u679C\u300D\u67E5\u770B" : notice(), !response.offers.length && Boolean(response.errors.length));
    } catch (error) {
      if (!controller.signal.aborted) fail(error);
    } finally {
      if (pending === controller) {
        pending = void 0;
        setBusy(false);
      }
    }
  }
  function promptSearch() {
    settings.dialog(() => _$createComponent3(api.ui.DialogPrompt, {
      title: "\u641C\u7D22\u5546\u54C1 / \u4F18\u60E0\u5238",
      placeholder: "\u54C1\u724C + \u578B\u53F7 + \u89C4\u683C\uFF0C\u4F8B\u5982\uFF1A\u84DD\u7259\u8033\u673A\uFF0C256GB\uFF0C12\u74F6\u88C5",
      get onCancel() {
        return settings.close;
      },
      onConfirm: (input) => {
        if (!input.trim()) return toast("\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0", true);
        settings.close();
        void search(input.trim());
      }
    }));
  }
  async function favorites() {
    try {
      const offers = await service.settings.favorites();
      if (disposed || api.lifecycle.signal.aborted) return;
      if (!offers.length) return toast("\u8FD8\u6CA1\u6709\u6536\u85CF\uFF1B\u5728\u641C\u7D22\u7ED3\u679C\u4E2D\u9009\u62E9\u5546\u54C1\u540E\u6536\u85CF");
      settings.dialog(() => _$createComponent3(api.ui.DialogSelect, {
        get title() {
          return `\u8D2D\u7269\u6536\u85CF \xB7 ${offers.length} \u6761`;
        },
        placeholder: "\u6536\u85CF\u7684\u662F\u67E5\u8BE2\u65F6\u7684\u62A5\u4EF7\uFF0C\u9009\u62E9\u53EF\u67E5\u770B\u6765\u6E90\u6216\u5220\u9664",
        get options() {
          return offers.map((offer) => ({
            title: `${money(offer.priceCents)} \xB7 ${offer.title}`,
            value: offerKey(offer),
            description: `${offer.shop} \xB7 ${offer.priceLabel} \xB7 \u67E5\u8BE2 ${offer.observedAt}`
          }));
        },
        onSelect: (item) => {
          settings.close();
          const offer = offers.find((offer2) => offerKey(offer2) === item.value);
          if (offer) detail(offer, true);
        }
      }));
    } catch (error) {
      fail(error);
    }
  }
  function filters2() {
    settings.dialog(() => _$createComponent3(api.ui.DialogSelect, {
      title: "\u8D2D\u7269\u7B5B\u9009",
      get options() {
        return [{
          title: `\u6765\u6E90\uFF1A${source() === "all" ? "\u6240\u6709\u53EF\u7528\u6765\u6E90" : shoppingSource(source()).name}`,
          value: "source"
        }, {
          title: `\u5E73\u53F0\uFF1A${{
            all: "\u5168\u90E8",
            jd: "\u4EAC\u4E1C",
            taobao: "\u6DD8\u5B9D / \u5929\u732B",
            tmall: "\u4EC5\u5929\u732B"
          }[platform()]}`,
          value: "platform"
        }, {
          title: `\u53EA\u770B\u6709\u5238\u6216\u63D0\u5230\u5238\u7684\u597D\u4EF7\uFF1A${onlyCoupons() ? "\u5F00" : "\u5173"}`,
          value: "coupon",
          description: "\u7206\u6599\u63D0\u5230\u5238\u4E0D\u4EE3\u8868\u5DF2\u6838\u9A8C\u9886\u53D6\u8D44\u683C"
        }, {
          title: `\u9884\u7B97\u4E0A\u9650\uFF1A${maxPrice() === null ? "\u4E0D\u9650" : money(maxPrice())}`,
          value: "budget",
          description: "\u6309\u62A5\u4EF7\u7B5B\u9009\uFF0C\u4E0D\u542B\u672A\u786E\u8BA4\u7684\u914D\u9001\u8D39\u7528"
        }];
      },
      onSelect: (item) => {
        settings.close();
        if (item.value === "coupon") {
          setOnlyCoupons(!onlyCoupons());
          return filters2();
        }
        if (item.value === "budget") return settings.dialog(() => _$createComponent3(api.ui.DialogPrompt, {
          title: "\u5355\u4EF6\u9884\u7B97\u4E0A\u9650 \xB7 \u5143",
          placeholder: "\u4F8B\u5982 199.90\uFF1B\u8F93\u5165 0 \u53D6\u6D88\u4E0A\u9650",
          get onCancel() {
            return settings.close;
          },
          onConfirm: (input) => {
            const value = cents(input.trim());
            if (value === null) return toast("\u8BF7\u8F93\u5165\u6709\u6548\u91D1\u989D\uFF0C\u6700\u591A\u4E24\u4F4D\u5C0F\u6570", true);
            setMaxPrice(value || null);
            settings.close();
            filters2();
          }
        }));
        const choices = item.value === "source" ? [{
          id: "all",
          name: "\u6240\u6709\u53EF\u7528\u6765\u6E90"
        }, ...SHOPPING_SOURCES] : [{
          id: "all",
          name: "\u5168\u90E8\u5E73\u53F0"
        }, {
          id: "jd",
          name: "\u4EAC\u4E1C"
        }, {
          id: "taobao",
          name: "\u6DD8\u5B9D / \u5929\u732B"
        }, {
          id: "tmall",
          name: "\u4EC5\u5929\u732B"
        }];
        settings.dialog(() => _$createComponent3(api.ui.DialogSelect, {
          get title() {
            return item.value === "source" ? "\u9009\u62E9\u6765\u6E90" : "\u9009\u62E9\u5E73\u53F0";
          },
          get options() {
            return choices.map((choice) => ({
              title: choice.name,
              value: choice.id
            }));
          },
          onSelect: (choice) => {
            item.value === "source" ? setSource(choice.value) : setPlatform(choice.value);
            settings.close();
            filters2();
          }
        }));
      }
    }));
  }
  async function sources() {
    try {
      const states = await service.sources();
      if (disposed || api.lifecycle.signal.aborted) return;
      settings.dialog(() => _$createComponent3(api.ui.DialogSelect, {
        title: "\u8D2D\u7269\u6765\u6E90\u4E0E\u767B\u5F55",
        placeholder: "\u516C\u5F00\u597D\u4EF7\u65E0\u9700\u5BC6\u94A5\uFF1B\u5E73\u53F0\u767B\u5F55\u5728\u5B98\u65B9\u9875\u9762\u5B8C\u6210\uFF0C\u63D2\u4EF6\u4E0D\u63A5\u6536\u4E70\u5BB6\u5BC6\u7801",
        get options() {
          return [...states.map((item) => ({
            title: `${item.name} \xB7 ${!item.credential ? "\u516C\u5F00\u7F51\u9875" : item.configured ? "\u5E94\u7528\u5DF2\u914D\u7F6E" : "\u5E94\u7528\u672A\u914D\u7F6E"}`,
            value: item.id,
            description: item.credential ? "\u914D\u7F6E / \u5220\u9664\u8054\u76DF\u5E94\u7528\u51ED\u636E" : "\u76F4\u63A5\u641C\u7D22\u516C\u5F00\u6298\u6263\u7206\u6599\uFF1B\u9047\u5230\u9A8C\u8BC1\u65F6\u505C\u6B62"
          })), {
            title: "\u6253\u5F00\u4EAC\u4E1C\u5B98\u65B9\u767B\u5F55\u9875",
            value: "login-jd",
            description: "\u767B\u5F55\u4FDD\u7559\u5728\u6D4F\u89C8\u5668\uFF0C\u7528\u4E8E\u9886\u5238\u53CA\u8D2D\u4E70"
          }, {
            title: "\u6253\u5F00\u6DD8\u5B9D / \u5929\u732B\u5B98\u65B9\u767B\u5F55\u9875",
            value: "login-taobao",
            description: "\u767B\u5F55\u4FDD\u7559\u5728\u6D4F\u89C8\u5668\uFF0C\u7528\u4E8E\u9886\u5238\u53CA\u8D2D\u4E70"
          }];
        },
        onSelect: (item) => {
          settings.close();
          if (item.value.startsWith("login-")) return void open3(item.value === "login-jd" ? "https://passport.jd.com/new/login.aspx" : "https://login.taobao.com/member/login.jhtml").catch(fail);
          if (item.value === "manmanbuy") {
            setSource("manmanbuy");
            return promptSearch();
          }
          configure(item.value);
        }
      }));
    } catch (error) {
      fail(error);
    }
  }
  function configure(id) {
    settings.dialog(() => _$createComponent3(api.ui.DialogSelect, {
      get title() {
        return `${shoppingSource(id).name} \xB7 \u5E94\u7528\u8BBE\u7F6E`;
      },
      options: [{
        title: "\u586B\u5199\u5E94\u7528\u51ED\u636E\uFF08\u672C\u5730\u52A0\u5BC6\uFF09",
        value: "save",
        description: "\u586B\u8054\u76DF\u5F00\u53D1\u8005 AppKey / AppSecret\uFF0C\u548C\u4E70\u5BB6\u767B\u5F55\u5206\u5F00"
      }, {
        title: "\u6253\u5F00\u5B98\u65B9\u5F00\u53D1\u8005\u5E73\u53F0",
        value: "docs"
      }, {
        title: "\u5220\u9664\u5DF2\u4FDD\u5B58\u7684\u5E94\u7528\u51ED\u636E",
        value: "remove"
      }],
      onSelect: (item) => {
        settings.close();
        if (item.value === "docs") return void open3(id === "jd" ? "https://union.jd.com/" : "https://pub.alimama.com/").catch(fail);
        if (item.value === "remove") return void service.settings.removeCredentials(id).then(() => toast("\u5DF2\u5220\u9664\u8BE5\u6765\u6E90\u7684\u5E94\u7528\u51ED\u636E")).catch(fail);
        settings.dialog(() => _$createComponent3(api.ui.DialogPrompt, {
          get title() {
            return `${shoppingSource(id).name} \xB7 \u672C\u5730\u52A0\u5BC6\u914D\u7F6E\uFF0C\u4E0D\u56DE\u663E`;
          },
          placeholder: id === "jd" ? '{"appKey":"...","appSecret":"..."}' : '{"appKey":"...","appSecret":"...","adzoneId":"\u63A8\u5E7F\u4F4DID"}',
          get onCancel() {
            return settings.close;
          },
          onConfirm: (input) => {
            settings.close();
            void service.settings.saveCredentials(id, input).then(() => toast("\u5E94\u7528\u51ED\u636E\u5DF2\u52A0\u5BC6\u4FDD\u5B58\uFF1B\u67E5\u8BE2\u65F6\u786E\u8BA4\u63A5\u53E3\u6743\u9650")).catch(fail);
          }
        }));
      }
    }));
  }
  function View(props) {
    const Button = props.Button, theme = () => api.theme.current;
    const textRows = () => settings.rows() < 8 ? 1 : 2;
    const count2 = () => Math.max(0, Math.floor((settings.rows() - 2 - textRows() * 2) / 3));
    return (() => {
      var _el$ = _$createElement3("box"), _el$2 = _$createElement3("box"), _el$3 = _$createElement3("text"), _el$4 = _$createElement3("box"), _el$5 = _$createElement3("box"), _el$6 = _$createElement3("text");
      _$insertNode3(_el$, _el$2);
      _$insertNode3(_el$, _el$3);
      _$insertNode3(_el$, _el$4);
      _$insertNode3(_el$, _el$5);
      _$insertNode3(_el$, _el$6);
      _$setProp3(_el$, "flexDirection", "column");
      _$setProp3(_el$, "flexShrink", 0);
      _$setProp3(_el$2, "height", 1);
      _$setProp3(_el$2, "flexShrink", 0);
      _$setProp3(_el$2, "flexDirection", "row");
      _$setProp3(_el$2, "gap", 1);
      _$insert3(_el$2, _$createComponent3(Button, {
        label: "[\u7B5B\u9009]",
        action: filters2
      }), null);
      _$insert3(_el$2, _$createComponent3(Button, {
        label: "[\u6765\u6E90/\u767B\u5F55]",
        action: sources
      }), null);
      _$insert3(_el$3, (() => {
        var _c$ = _$memo3(() => !!busy());
        return () => _c$() ? "\u6B63\u5728\u67E5\u8BE2\uFF0C\u53EF\u70B9\u51FB\u53D6\u6D88" : notice();
      })());
      _$insert3(_el$, _$createComponent3(For2, {
        get each() {
          return results().slice(0, count2());
        },
        children: (offer) => (() => {
          var _el$8 = _$createElement3("box"), _el$9 = _$createElement3("text"), _el$0 = _$createTextNode2(` \xB7 `), _el$1 = _$createElement3("text");
          _$insertNode3(_el$8, _el$9);
          _$insertNode3(_el$8, _el$1);
          _$setProp3(_el$8, "height", 3);
          _$setProp3(_el$8, "flexShrink", 0);
          _$insert3(_el$8, _$createComponent3(Button, {
            get label() {
              return `${money(offer.priceCents)} ${offer.title}`;
            },
            action: () => detail(offer)
          }), _el$9);
          _$insertNode3(_el$9, _el$0);
          _$setProp3(_el$9, "height", 1);
          _$setProp3(_el$9, "wrapMode", "none");
          _$insert3(_el$9, () => offer.priceLabel, _el$0);
          _$insert3(_el$9, () => offer.shop || offer.platform, null);
          _$setProp3(_el$1, "height", 1);
          _$setProp3(_el$1, "wrapMode", "none");
          _$insert3(_el$1, () => offer.conditions);
          _$effect3((_p$) => {
            var _v$6 = theme().textMuted, _v$7 = theme().textMuted;
            _v$6 !== _p$.e && (_p$.e = _$setProp3(_el$9, "fg", _v$6, _p$.e));
            _v$7 !== _p$.t && (_p$.t = _$setProp3(_el$1, "fg", _v$7, _p$.t));
            return _p$;
          }, {
            e: void 0,
            t: void 0
          });
          return _el$8;
        })()
      }), _el$4);
      _$setProp3(_el$4, "flexGrow", 1);
      _$setProp3(_el$5, "height", 1);
      _$setProp3(_el$5, "flexShrink", 0);
      _$setProp3(_el$5, "flexDirection", "row");
      _$setProp3(_el$5, "gap", 1);
      _$insert3(_el$5, _$createComponent3(Show3, {
        get when() {
          return busy();
        },
        get fallback() {
          return _$createComponent3(Show3, {
            get when() {
              return lastQuery();
            },
            get children() {
              return [_$createComponent3(Button, {
                label: "[\u5237\u65B0]",
                action: () => search(lastQuery(), page())
              }), _$createComponent3(Button, {
                label: "[\u4E0B\u4E00\u9875]",
                action: () => search(lastQuery(), page() + 1),
                get muted() {
                  return page() >= 100;
                }
              })];
            }
          });
        },
        get children() {
          return _$createComponent3(Button, {
            label: "[\u53D6\u6D88]",
            action: () => {
              pending?.abort();
              setNotice("\u5DF2\u53D6\u6D88\u67E5\u8BE2");
            }
          });
        }
      }));
      _$insertNode3(_el$6, _$createTextNode2(`\u62A5\u4EF7\u9700\u6838\u5BF9\u89C4\u683C\u548C\u4F18\u60E0\u6761\u4EF6\uFF1B\u9886\u5238\u3001\u767B\u5F55\u53CA\u8D2D\u4E70\u5728\u5E73\u53F0\u9875\u9762\u5B8C\u6210`));
      _$effect3((_p$) => {
        var _v$ = settings.rows(), _v$2 = theme().textMuted, _v$3 = textRows(), _v$4 = theme().textMuted, _v$5 = textRows();
        _v$ !== _p$.e && (_p$.e = _$setProp3(_el$, "height", _v$, _p$.e));
        _v$2 !== _p$.t && (_p$.t = _$setProp3(_el$3, "fg", _v$2, _p$.t));
        _v$3 !== _p$.a && (_p$.a = _$setProp3(_el$3, "height", _v$3, _p$.a));
        _v$4 !== _p$.o && (_p$.o = _$setProp3(_el$6, "fg", _v$4, _p$.o));
        _v$5 !== _p$.i && (_p$.i = _$setProp3(_el$6, "height", _v$5, _p$.i));
        return _p$;
      }, {
        e: void 0,
        t: void 0,
        a: void 0,
        o: void 0,
        i: void 0
      });
      return _el$;
    })();
  }
  return {
    search: promptSearch,
    results: showResults,
    favorites,
    sources,
    View,
    dispose() {
      disposed = true;
      pending?.abort();
    }
  };
}

// src/runtime/media-client.mjs
import { createConnection } from "node:net";
import { randomUUID as randomUUID4 } from "node:crypto";

// src/runtime/channel.mjs
import { createHash as createHash7 } from "node:crypto";
import { realpath as realpath3, mkdir as mkdir8 } from "node:fs/promises";
import { join as join12 } from "node:path";
import { tmpdir as tmpdir2 } from "node:os";
var MAX_FRAME = 512 * 1024;
async function runtimeAddress(library) {
  await library.ready();
  const directory = await realpath3(library.directory), key = await library.vault.key();
  const identity = process.platform === "win32" ? directory.toLowerCase() : directory;
  const scope = createHash7("sha256").update(identity).update(key).digest("hex").slice(0, 32);
  if (process.platform === "win32") return { path: "\\\\.\\pipe\\opencode-moyu-" + scope, scope };
  if (process.platform === "linux") return { path: "\0opencode-moyu-" + scope, scope };
  const folder = join12(tmpdir2(), `moyu-${process.getuid?.() ?? "user"}-${scope}`);
  await mkdir8(folder, { recursive: true, mode: 448 });
  return { path: join12(folder, "media.sock"), scope };
}
function channel(socket, vault, receive, failed) {
  let buffer = "", reads = Promise.resolve(), writes = Promise.resolve(), ended = false;
  const fail = (error) => {
    if (ended) return;
    ended = true;
    failed(error);
    socket.destroy();
  };
  socket.on("error", fail);
  socket.on("data", (chunk) => {
    buffer += chunk.toString("utf8");
    if (Buffer.byteLength(buffer) > MAX_FRAME) {
      fail(new Error("\u5171\u4EAB\u64AD\u653E\u5668\u6D88\u606F\u8FC7\u5927"));
      return;
    }
    let index2;
    while ((index2 = buffer.indexOf("\n")) >= 0) {
      const frame = buffer.slice(0, index2);
      buffer = buffer.slice(index2 + 1);
      reads = reads.then(async () => {
        const message = await vault.unseal(Buffer.from(frame, "base64"));
        void Promise.resolve(receive(message)).catch(fail);
      }).catch(fail);
    }
  });
  return {
    send(message) {
      writes = writes.then(async () => {
        if (ended || socket.destroyed) return;
        const bytes = await vault.seal(message);
        if (bytes.length * 4 / 3 > MAX_FRAME || socket.writableLength > MAX_FRAME * 2) throw new Error("\u5171\u4EAB\u64AD\u653E\u5668\u8FDE\u63A5\u79EF\u538B");
        socket.write(bytes.toString("base64") + "\n");
      }).catch(fail);
      return writes;
    }
  };
}

// src/runtime/media-server.mjs
import { createServer } from "node:net";
import { randomUUID as randomUUID3 } from "node:crypto";

// src/music/player.mjs
import { execFile as execFile3 } from "node:child_process";
import { promisify as promisify3 } from "node:util";
import { performance } from "node:perf_hooks";
var execute3 = promisify3(execFile3);
async function inspectAudio(path) {
  const binary = await mediaBinary("ffprobe");
  const { stdout } = await execute3(binary, ["-v", "error", "-protocol_whitelist", "file,pipe", "-show_entries", "stream=codec_type:format=duration", "-of", "json", await nativeMediaPath(binary, path)], { timeout: 15e3, maxBuffer: 65536, windowsHide: true });
  const data2 = JSON.parse(stdout), duration = Number(data2.format?.duration);
  if (!data2.streams?.some((stream) => stream.codec_type === "audio") || !Number.isFinite(duration) || duration <= 0) throw new Error("\u5E73\u53F0\u8FD4\u56DE\u7684\u6587\u4EF6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u97F3\u8F68");
  return { duration };
}
function stopChild(child) {
  if (!child || child.exitCode !== null || child.signalCode) return Promise.resolve();
  return new Promise((resolve5) => {
    child.once("close", resolve5);
    stopMedia(child);
  });
}
var AudioPlayer = class {
  constructor({ onState = () => {
  }, onEnded = () => {
  }, onError = (_error) => {
  }, inspect = inspectAudio, binary = mediaBinary, launch = launchMedia } = {}) {
    Object.assign(this, { onState, onEnded, onError, inspect, binary, launch });
    this.duration = 0;
    this.volume = 50;
    this.playing = false;
    this.offset = 0;
    this.generation = 0;
    this.stopping = Promise.resolve();
    this.timer = setInterval(() => {
      if (this.playing) this.onState();
    }, 500);
    this.timer.unref?.();
  }
  get position() {
    return Math.min(this.duration, this.offset + (this.playing ? (performance.now() - this.anchor) / 1e3 : 0));
  }
  pause() {
    this.offset = this.position;
    this.playing = false;
    ++this.generation;
    const child = this.child;
    this.child = void 0;
    this.stopping = Promise.all([this.stopping, stopChild(child)]).then(() => {
    });
    this.onState();
    return this.stopping;
  }
  async open(path) {
    const stopped = this.pause(), generation = this.generation;
    await stopped;
    if (generation !== this.generation) return false;
    const { duration } = await this.inspect(path);
    if (generation !== this.generation) return false;
    this.path = path;
    this.duration = duration;
    this.offset = 0;
    this.onState();
    return true;
  }
  async play() {
    if (!this.path || this.playing || this.child) return;
    const generation = ++this.generation;
    await this.stopping;
    const binary = await this.binary("ffplay"), path = await nativeMediaPath(binary, this.path);
    if (generation !== this.generation) return;
    if (this.offset >= this.duration) this.offset = 0;
    const child = this.child = this.launch(binary, ["-nodisp", "-autoexit", "-loglevel", "error", "-volume", String(this.volume), "-ss", String(this.offset), "-protocol_whitelist", "file,pipe", "-i", path]);
    child.stdout?.resume();
    child.stderr?.resume();
    const failed = () => {
      if (generation !== this.generation || child !== this.child) return;
      this.offset = this.position;
      this.playing = false;
      this.child = void 0;
      this.onState();
      this.onError(new Error("\u97F3\u9891\u64AD\u653E\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 FFmpeg\u3001\u7CFB\u7EDF\u97F3\u91CF\u548C\u97F3\u9891\u8BBE\u5907"));
    };
    child.once("error", failed);
    child.once("spawn", () => {
      if (generation !== this.generation) return;
      this.anchor = performance.now();
      this.playing = true;
      this.onState();
    });
    child.once("close", (code) => {
      if (generation !== this.generation || child !== this.child) return;
      if (code !== 0) {
        failed();
        return;
      }
      this.offset = this.duration;
      this.playing = false;
      this.child = void 0;
      this.onState();
      this.onEnded();
    });
  }
  async seek(position) {
    const playing = this.playing;
    const stopped = this.pause(), generation = this.generation;
    await stopped;
    if (generation !== this.generation) return;
    this.offset = Math.max(0, Math.min(this.duration, Number(position) || 0));
    this.onState();
    if (playing) await this.play();
  }
  async setVolume(volume) {
    const next2 = Math.max(0, Math.min(100, Math.round(Number(volume) || 0)));
    if (next2 === this.volume) return;
    const playing = this.playing;
    const stopped = this.pause(), generation = this.generation;
    await stopped;
    if (generation !== this.generation) return;
    this.volume = next2;
    this.onState();
    if (playing) await this.play();
  }
  async dispose() {
    clearInterval(this.timer);
    await this.pause();
    this.path = void 0;
  }
};
var MusicController = class {
  constructor(service, { onChange = (_state) => {
  }, player, onError = (_error) => {
  } } = {}) {
    this.service = service;
    this.onChange = onChange;
    this.onError = onError;
    this.queue = [];
    this.currentKey = "";
    this.repeat = "all";
    this.busy = false;
    this.error = "";
    this.preview = false;
    this.generation = 0;
    this.writes = Promise.resolve();
    this.tasks = /* @__PURE__ */ new Set();
    this.player = player || new AudioPlayer({ onState: () => this.emit(), onEnded: () => {
      void this.next(1, true);
    }, onError: (error) => this.fail(error) });
  }
  get current() {
    return this.radio ? this.radio.history[this.radio.index] : this.queue.find((track) => trackKey(track) === this.currentKey);
  }
  get state() {
    return { queue: this.queue, current: this.current, radio: Boolean(this.radio), playing: this.player.playing, position: this.player.position, duration: this.player.duration, volume: this.player.volume, repeat: this.repeat, busy: this.busy, error: this.error, preview: this.preview };
  }
  emit() {
    if (!this.disposed) this.onChange(this.state);
  }
  fail(error) {
    this.error = error instanceof Error ? error.message : "\u97F3\u4E50\u64CD\u4F5C\u5931\u8D25";
    this.busy = false;
    this.emit();
    if (!this.disposed) this.onError(this.error);
  }
  async restore() {
    const value = await this.service.settings.player();
    if (this.disposed) return;
    this.queue = value.queue;
    this.currentKey = value.currentKey;
    this.player.volume = value.volume;
    this.repeat = value.repeat;
    this.emit();
  }
  save() {
    const value = { queue: this.queue, currentKey: this.currentKey, volume: this.player.volume, repeat: this.repeat };
    this.writes = this.writes.catch(() => {
    }).then(() => this.service.settings.savePlayer(value)).catch((error) => this.fail(error));
    return this.writes;
  }
  add(input) {
    const track = musicTrack(input);
    this.addMany([track]);
    return track;
  }
  addMany(inputs) {
    const tracks = inputs.map(musicTrack), known = new Set(this.queue.map(trackKey)), additions = [];
    for (const track of tracks) if (!known.has(trackKey(track))) {
      known.add(trackKey(track));
      additions.push(track);
    }
    if (this.queue.length + additions.length > 100) throw new Error(`\u64AD\u653E\u961F\u5217\u6700\u591A 100 \u9996\uFF0C\u8FD8\u5269 ${100 - this.queue.length} \u4E2A\u4F4D\u7F6E\uFF0C\u8BF7\u5148\u6574\u7406\u961F\u5217`);
    if (additions.length) {
      this.queue = [...this.queue, ...additions];
      if (!this.currentKey) this.currentKey = trackKey(this.queue[0]);
      this.emit();
      void this.save();
    }
    return { added: additions.length, duplicates: tracks.length - additions.length };
  }
  play(key) {
    if (this.disposed) return Promise.resolve();
    const track = key !== void 0 ? this.queue.find((item) => trackKey(item) === key) : this.current || (!this.radio ? this.queue[0] : void 0);
    if (!track) return Promise.resolve();
    if (key !== void 0 && this.radio) {
      this.radioAbort?.abort();
      this.radioAbort = void 0;
      this.radio = void 0;
      this.error = "";
      this.emit();
    }
    if (trackKey(track) === this.preparedKey && this.prepared && !this.busy) return this.player.play().catch((error) => this.fail(error));
    return this.task(this.load(track));
  }
  task(task) {
    this.tasks.add(task);
    void task.finally(() => this.tasks.delete(task)).catch(() => {
    });
    return task;
  }
  async load(track) {
    const key = trackKey(track);
    this.abort?.abort();
    const abort = this.abort = new AbortController(), generation = ++this.generation;
    const previous = this.prepared;
    this.prepared = void 0;
    this.preparedKey = void 0;
    if (!this.radio) this.currentKey = key;
    this.busy = true;
    this.error = "";
    this.preview = false;
    this.emit();
    void this.save();
    let prepared;
    try {
      await this.player.pause();
      await previous?.release();
      abort.signal.throwIfAborted();
      this.player.path = void 0;
      this.player.duration = 0;
      this.player.offset = 0;
      prepared = await this.service.prepare(track, { signal: abort.signal });
      if (abort.signal.aborted || generation !== this.generation || this.disposed) return;
      if (!await this.player.open(prepared.path)) return;
      if (abort.signal.aborted || generation !== this.generation || this.disposed) return;
      this.prepared = prepared;
      this.preparedKey = key;
      this.preview = prepared.preview || Boolean(track.duration && this.player.duration < track.duration - 3);
      await this.player.play();
    } catch (error) {
      if (!abort.signal.aborted && generation === this.generation && !this.disposed) this.fail(error);
    } finally {
      if (prepared && this.prepared !== prepared) await prepared.release().catch(() => {
      });
      if (generation === this.generation) {
        this.busy = false;
        this.abort = void 0;
        this.emit();
      }
    }
  }
  pause() {
    this.abort?.abort();
    this.abort = void 0;
    this.radioAbort?.abort();
    this.radioAbort = void 0;
    ++this.generation;
    this.busy = false;
    this.emit();
    return this.player.pause();
  }
  toggle() {
    return this.player.playing || this.busy ? this.pause() : this.radio && !this.current ? this.next() : this.play();
  }
  startRadio() {
    if (this.disposed) return Promise.resolve();
    this.radio = { history: [], index: -1, seen: [] };
    return this.next();
  }
  async stopRadio() {
    if (!this.radio) return;
    const stopped = this.pause(), prepared = this.prepared;
    this.radio = void 0;
    this.prepared = void 0;
    this.preparedKey = void 0;
    this.player.path = void 0;
    this.player.duration = 0;
    this.player.offset = 0;
    this.error = "";
    this.preview = false;
    this.emit();
    await stopped;
    await prepared?.release();
  }
  async advanceRadio(direction) {
    const session = this.radio, stopped = this.pause(), abort = this.radioAbort = new AbortController();
    this.busy = true;
    this.error = "";
    this.emit();
    try {
      await stopped;
      abort.signal.throwIfAborted();
      let index2 = Math.max(0, session.index + (direction < 0 ? -1 : 1));
      if (index2 >= session.history.length) {
        for (let attempt = 0; attempt < 3; attempt++) {
          const result = await this.service.radio({ exclude: session.seen, signal: abort.signal });
          abort.signal.throwIfAborted();
          if (this.radio !== session || this.disposed) return;
          const seen = new Set(session.seen), tracks = result.tracks.map(musicTrack).filter((track) => {
            if (seen.has(track.id)) return false;
            seen.add(track.id);
            return true;
          });
          if (!tracks.length) continue;
          session.history.push(...tracks);
          session.seen = [...seen].slice(-100);
          const trim = Math.max(0, session.history.length - 100);
          if (trim) {
            session.history.splice(0, trim);
            session.index -= trim;
            index2 -= trim;
          }
          break;
        }
      }
      if (index2 >= session.history.length) throw new Error("QQ\u97F3\u4E50\u6682\u672A\u8FD4\u56DE\u65B0\u7684\u63A8\u8350\uFF0C\u8BF7\u7A0D\u540E\u70B9\u4E0B\u4E00\u9996\u91CD\u8BD5");
      session.index = index2;
      if (this.preparedKey === trackKey(this.current) && this.prepared) await this.player.seek(0);
      abort.signal.throwIfAborted();
      if (this.radio !== session || this.disposed) return;
      this.radioAbort = void 0;
      this.busy = false;
      await this.play();
    } catch (error) {
      if (!abort.signal.aborted && this.radio === session && !this.disposed) this.fail(error);
    } finally {
      if (this.radioAbort === abort) {
        this.radioAbort = void 0;
        this.busy = false;
        this.emit();
      }
    }
  }
  async next(direction = 1, natural = false) {
    if (this.radio && !this.disposed) return this.task(this.advanceRadio(direction));
    if (!this.queue.length || this.disposed) return;
    const index2 = Math.max(0, this.queue.findIndex((track) => trackKey(track) === this.currentKey));
    const next2 = natural && this.repeat === "one" ? index2 : (index2 + direction + this.queue.length) % this.queue.length;
    const target = this.queue[next2], stopped = this.pause(), generation = this.generation;
    await stopped;
    if (generation !== this.generation || this.disposed || !this.queue.some((track) => trackKey(track) === trackKey(target))) return;
    if (trackKey(target) === this.currentKey && this.prepared) await this.player.seek(0);
    return this.play(trackKey(target));
  }
  async seek(delta) {
    if (!this.prepared || this.busy) return;
    try {
      await this.player.seek(this.player.position + delta);
    } catch (error) {
      this.fail(error);
    }
  }
  async volume(value) {
    try {
      await this.player.setVolume(value);
      await this.save();
    } catch (error) {
      this.fail(error);
    }
  }
  cycleRepeat() {
    this.repeat = this.repeat === "all" ? "one" : "all";
    this.emit();
    void this.save();
  }
  async remove(key = this.currentKey) {
    let stopped, prepared;
    if (!this.radio && key === this.currentKey) {
      stopped = this.pause();
      prepared = this.prepared;
      this.prepared = void 0;
      this.preparedKey = void 0;
      this.player.path = void 0;
      this.player.duration = 0;
      this.player.offset = 0;
    }
    this.queue = this.queue.filter((track) => trackKey(track) !== key);
    if (key === this.currentKey) this.currentKey = this.queue[0] ? trackKey(this.queue[0]) : "";
    if (!this.radio) {
      this.error = "";
      this.preview = false;
    }
    this.emit();
    await this.save();
    await stopped;
    await prepared?.release();
  }
  async clear() {
    await this.stopRadio();
    const removing = this.remove(this.currentKey);
    this.queue = [];
    this.currentKey = "";
    this.emit();
    await this.save();
    await removing;
  }
  async dispose() {
    this.disposed = true;
    await this.pause();
    await this.player.dispose();
    await Promise.allSettled([...this.tasks]);
    await this.prepared?.release();
    this.prepared = void 0;
    await this.writes;
  }
};

// src/runtime/media-server.mjs
var methods = /* @__PURE__ */ new Set(["add", "addMany", "play", "toggle", "pause", "next", "seek", "volume", "cycleRepeat", "remove", "clear", "startRadio", "stopRadio"]);
var startsAudio = /* @__PURE__ */ new Set(["play", "toggle", "next", "startRadio"]);
var SharedMediaServer = class {
  constructor(library, { service = new MusicService(library), player } = {}) {
    this.library = library;
    this.service = service;
    this.peers = /* @__PURE__ */ new Set();
    this.epoch = randomUUID3();
    this.sequence = 0;
    this.preferences = {};
    this.videoOwner = "";
    this.mediaWrites = Promise.resolve();
    this.settingsWrites = Promise.resolve();
    this.controller = new MusicController(service, { player, onChange: () => this.publish() });
    this.server = createServer((socket) => this.connect(socket));
  }
  async listen(path) {
    try {
      await new Promise((resolve5, reject) => {
        this.server.once("error", reject);
        this.server.listen(path, () => {
          this.server.off("error", reject);
          resolve5();
        });
      });
    } catch (error) {
      await this.controller.dispose();
      throw error;
    }
    this.ready = Promise.all([this.controller.restore(), this.service.settings.read("preferences", {}).then((value) => {
      this.preferences = value;
    })]);
    try {
      await this.ready;
    } catch (error) {
      await this.close();
      throw error;
    }
    return this;
  }
  snapshot() {
    return { ...this.controller.state, currentKey: this.controller.currentKey, preferences: this.preferences, videoOwner: this.videoOwner, epoch: this.epoch, sequence: ++this.sequence };
  }
  sendState(peer, state) {
    const update2 = { ...state };
    if (peer.queue === state.queue) delete update2.queue;
    if (peer.preferences === state.preferences) delete update2.preferences;
    peer.queue = state.queue;
    peer.preferences = state.preferences;
    return peer.channel.send({ type: "state", state: update2 });
  }
  publish() {
    if (this.closing) return;
    const state = this.snapshot();
    for (const peer of this.peers) if (peer.id) void this.sendState(peer, state);
  }
  connect(socket) {
    const peer = { socket, id: "", requests: /* @__PURE__ */ new Map(), calls: /* @__PURE__ */ new Map(), seen: /* @__PURE__ */ new Set() };
    this.peers.add(peer);
    const timer = setTimeout(() => {
      if (!peer.id) socket.destroy();
    }, 5e3);
    timer.unref?.();
    peer.channel = channel(socket, this.library.vault, (message) => this.receive(peer, message), () => {
    });
    socket.once("close", () => {
      clearTimeout(timer);
      this.peers.delete(peer);
      for (const request of peer.requests.values()) request.abort();
      for (const call of peer.calls.values()) {
        clearTimeout(call.timer);
        call.reject(new Error("\u89C6\u9891\u7A97\u53E3\u5DF2\u5173\u95ED"));
      }
      if (this.videoOwner === peer.id) {
        this.videoOwner = "";
        this.publish();
      }
    });
  }
  async receive(peer, message) {
    if (this.closing && message?.type !== "callback") return;
    if (message?.type === "hello") {
      if (peer.id || !/^[\w-]{16,80}$/.test(message.clientId)) throw new Error("\u65E0\u6548\u5171\u4EAB\u4F1A\u8BDD");
      peer.id = message.clientId;
      await this.ready;
      await this.sendState(peer, this.snapshot());
      return;
    }
    if (!peer.id || message?.epoch !== this.epoch) throw new Error("\u5171\u4EAB\u4F1A\u8BDD\u5DF2\u66F4\u6362");
    if (message.type === "callback") {
      const pending = peer.calls.get(message.id);
      if (pending) {
        peer.calls.delete(message.id);
        clearTimeout(pending.timer);
        message.error ? pending.reject(new Error(message.error)) : pending.resolve();
      }
      return;
    }
    if (message.type === "cancel") {
      peer.requests.get(message.id)?.abort();
      return;
    }
    if (message.type !== "request" || typeof message.id !== "string" || peer.seen.has(message.id)) throw new Error("\u65E0\u6548\u5171\u4EAB\u547D\u4EE4");
    peer.seen.add(message.id);
    if (peer.seen.size > 512) peer.seen.delete(peer.seen.values().next().value);
    const abort = new AbortController();
    peer.requests.set(message.id, abort);
    try {
      const value = await this.execute(peer, message.method, message.args || [], abort.signal);
      await peer.channel.send({ type: "reply", id: message.id, value });
    } catch (error) {
      await peer.channel.send({ type: "reply", id: message.id, error: error instanceof Error ? error.message : "\u5171\u4EAB\u64CD\u4F5C\u5931\u8D25" });
    } finally {
      peer.requests.delete(message.id);
    }
  }
  serialize(kind, operation) {
    const pending = this[kind].catch(() => {
    }).then(operation);
    this[kind] = pending.then(() => {
    }, () => {
    });
    return pending;
  }
  pauseVideo(peer) {
    if (!peer) return Promise.resolve();
    const id = randomUUID3();
    return new Promise((resolve5, reject) => {
      const timer = setTimeout(() => {
        peer.calls.delete(id);
        reject(new Error("\u53E6\u4E00\u4E2A\u89C6\u9891\u7A97\u53E3\u672A\u54CD\u5E94\uFF0C\u8BF7\u5148\u6682\u505C\u8BE5\u7A97\u53E3"));
      }, 5e3);
      peer.calls.set(id, { resolve: resolve5, reject, timer });
      void peer.channel.send({ type: "pauseVideo", id, epoch: this.epoch });
    });
  }
  async execute(peer, method, args, signal) {
    if (method === "video.claim") return this.serialize("mediaWrites", async () => {
      if (!Number.isSafeInteger(args[0]) || args[0] < (peer.videoRevision || 0)) return false;
      peer.videoRevision = args[0];
      signal.throwIfAborted();
      await this.controller.pause();
      if (this.videoOwner && this.videoOwner !== peer.id) {
        await this.pauseVideo([...this.peers].find((item) => item.id === this.videoOwner));
        this.videoOwner = "";
        this.publish();
      }
      signal.throwIfAborted();
      this.videoOwner = peer.id;
      this.publish();
      return true;
    });
    if (method === "video.release") return this.serialize("mediaWrites", () => {
      if (!Number.isSafeInteger(args[0]) || args[0] < (peer.videoRevision || 0)) return;
      peer.videoRevision = args[0];
      if (this.videoOwner === peer.id) {
        this.videoOwner = "";
        this.publish();
      }
    });
    if (method === "preference.set") return this.serialize("settingsWrites", async () => {
      const [key, value] = args;
      if (typeof key !== "string" || !key.startsWith("opencode-moyu:") || key.length > 180 || JSON.stringify(value)?.length > 4096) throw new Error("\u65E0\u6548\u9605\u8BFB\u8BBE\u7F6E");
      signal.throwIfAborted();
      const next2 = { ...this.preferences, [key]: value };
      await this.service.settings.write("preferences", next2);
      this.preferences = next2;
      this.publish();
    });
    if (method === "account.version") return (await this.service.settings.read("accounts", {}))[args[0]] || "0";
    if (method === "account.save" || method === "account.logout") return this.serialize("settingsWrites", async () => {
      const [platform, cookie, options = {}] = args;
      if (!["netease", "qq", "kugou"].includes(platform)) throw new Error("\u65E0\u6548\u97F3\u4E50\u5E73\u53F0");
      const versions = await this.service.settings.read("accounts", {});
      if (options.expectedVersion !== void 0 && options.expectedVersion !== (versions[platform] || "0")) throw new Error("\u5176\u4ED6\u7A97\u53E3\u5DF2\u4FEE\u6539\u8BE5\u8D26\u53F7\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55");
      if (method === "account.save") normalizeMusicCookie(platform, cookie);
      signal.throwIfAborted();
      await this.service.settings.write("accounts", { ...versions, [platform]: randomUUID3() });
      signal.throwIfAborted();
      return method === "account.save" ? this.service.settings.saveAccount(platform, cookie, options) : this.service.settings.logout(platform);
    });
    if (!methods.has(method)) throw new Error("\u672A\u77E5\u5171\u4EAB\u64CD\u4F5C");
    const begin = () => {
      if (this.closing) throw new Error("\u5171\u4EAB\u64AD\u653E\u5668\u6B63\u5728\u5207\u6362\u7A97\u53E3\uFF0C\u8BF7\u91CD\u8BD5");
      signal.throwIfAborted();
      const pausing = method === "toggle" && (this.controller.state.playing || this.controller.state.busy);
      if (startsAudio.has(method) && !pausing && this.videoOwner) throw new Error("\u6709\u7A97\u53E3\u6B63\u5728\u770B\u89C6\u9891\uFF0C\u8BF7\u5148\u6682\u505C\u89C6\u9891\u6216\u5207\u56DE\u5C0F\u8BF4 / \u97F3\u4E50");
      return { pending: this.controller[method](...args) };
    };
    const { pending } = startsAudio.has(method) ? await this.serialize("mediaWrites", begin) : begin();
    try {
      return await pending;
    } finally {
      this.publish();
    }
  }
  async close() {
    if (this.closing) return this.closed;
    this.closing = true;
    this.closed = (async () => {
      for (const peer of this.peers) for (const request of peer.requests.values()) request.abort();
      if (this.videoOwner) await this.pauseVideo([...this.peers].find((peer) => peer.id === this.videoOwner));
      await this.controller.dispose();
      await Promise.allSettled([this.mediaWrites, this.settingsWrites]);
      for (const peer of this.peers) {
        await peer.channel.send({ type: "reconnect" });
        peer.socket.destroy();
      }
      await new Promise((resolve5) => this.server.close(resolve5));
    })();
    return this.closed;
  }
};

// src/runtime/media-client.mjs
var SharedMediaClient = class {
  constructor(library, { onChange = (_state) => {
  }, onError = (_error) => {
  }, service, player, reconnectMs = 150 } = {}) {
    this.library = library;
    this.onChange = onChange;
    this.onError = onError;
    this.serverOptions = { service, player };
    this.reconnectMs = reconnectMs;
    this.onPauseVideo = async () => {
    };
    this.videoRevision = 0;
    this.id = randomUUID4();
    this.pending = /* @__PURE__ */ new Map();
    this.preferenceWrites = /* @__PURE__ */ new Map();
    this.preferenceTasks = /* @__PURE__ */ new Set();
    this.listeners = /* @__PURE__ */ new Set();
    this.ready = this.ensure();
  }
  async ensure() {
    if (this.disposed) throw new Error("\u5171\u4EAB\u64AD\u653E\u5668\u5DF2\u5173\u95ED");
    if (this.connecting) return this.connecting;
    this.connecting = this.connect().finally(() => {
      this.connecting = void 0;
    });
    return this.connecting;
  }
  async connect() {
    const address = this.address ||= await runtimeAddress(this.library);
    for (let attempt = 0; attempt < 40 && !this.disposed; attempt++) {
      try {
        await this.open(address.path);
        return;
      } catch (error) {
        if (!["ENOENT", "ECONNREFUSED", "EPIPE", "ECONNRESET"].includes(error.code)) throw error;
        try {
          this.host = await new SharedMediaServer(this.library, this.serverOptions).listen(address.path);
        } catch (error2) {
          if (error2.code !== "EADDRINUSE") throw error2;
        }
        await new Promise((resolve5) => setTimeout(resolve5, 25));
      }
    }
    throw new Error("\u5171\u4EAB\u64AD\u653E\u5668\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u97F3\u4E50\u9762\u677F");
  }
  open(path) {
    return new Promise((resolve5, reject) => {
      const socket = createConnection(path), timeout = setTimeout(() => {
        socket.destroy();
        reject(new Error("\u5171\u4EAB\u64AD\u653E\u5668\u8FDE\u63A5\u8D85\u65F6"));
      }, 8e3);
      let accepted = false;
      socket.once("error", reject);
      const transport = channel(socket, this.library.vault, async (message) => {
        if (message.type === "state") {
          if (this.epoch === message.state.epoch && this.state?.sequence > message.state.sequence) return;
          this.state = this.epoch === message.state.epoch ? { ...this.state, ...message.state } : message.state;
          this.epoch = message.state.epoch;
          this.preferences = { ...this.state.preferences, ...Object.fromEntries([...this.preferenceWrites].map(([key, entry]) => [key, entry.value])) };
          this.onChange(this.state);
          for (const listener of this.listeners) listener(this.state);
          if (!accepted) {
            accepted = true;
            clearTimeout(timeout);
            this.socket = socket;
            this.transport = transport;
            resolve5();
          }
        } else if (message.type === "reply") {
          const pending = this.pending.get(message.id);
          if (pending) {
            this.pending.delete(message.id);
            pending.cleanup();
            message.error ? pending.reject(new Error(message.error)) : pending.resolve(message.value);
          }
        } else if (message.type === "pauseVideo") {
          try {
            await this.onPauseVideo?.();
            await transport.send({ type: "callback", id: message.id, epoch: this.epoch });
          } catch {
            await transport.send({ type: "callback", id: message.id, epoch: this.epoch, error: "\u89C6\u9891\u6682\u505C\u5931\u8D25\uFF0C\u8BF7\u5148\u5728\u539F\u7A97\u53E3\u6682\u505C" });
          }
        } else if (message.type === "reconnect") socket.destroy();
      }, reject);
      socket.once("connect", () => {
        void transport.send({ type: "hello", clientId: this.id });
      });
      socket.once("close", () => {
        clearTimeout(timeout);
        if (!accepted) reject(Object.assign(new Error("\u5171\u4EAB\u8FDE\u63A5\u5DF2\u5173\u95ED"), { code: "ECONNRESET" }));
        if (this.socket !== socket) return;
        this.socket = void 0;
        const stoppedVideo = Promise.resolve(this.onPauseVideo()).catch(() => {
        });
        for (const request of this.pending.values()) {
          request.cleanup();
          request.reject(new Error("\u5171\u4EAB\u64AD\u653E\u5668\u6B63\u5728\u5207\u6362\u7A97\u53E3\uFF0C\u8BF7\u91CD\u8BD5"));
        }
        this.pending.clear();
        if (!this.disposed) this.reconnectTimer = setTimeout(() => {
          void stoppedVideo.then(() => this.ensure()).catch(this.onError);
        }, this.reconnectMs);
      });
    });
  }
  async request(method, args = [], { signal, timeoutMs = 9e4 } = {}) {
    signal?.throwIfAborted();
    if (!this.socket) await this.ensure();
    signal?.throwIfAborted();
    const id = randomUUID4();
    return new Promise((resolve5, reject) => {
      const abort = () => {
        this.pending.delete(id);
        cleanup();
        void this.transport.send({ type: "cancel", id, epoch: this.epoch });
        reject(signal?.reason || new Error("\u5171\u4EAB\u64CD\u4F5C\u8D85\u65F6"));
      };
      const timer = setTimeout(abort, timeoutMs), cleanup = () => {
        clearTimeout(timer);
        signal?.removeEventListener("abort", abort);
      };
      this.pending.set(id, { resolve: resolve5, reject, cleanup });
      signal?.addEventListener("abort", abort, { once: true });
      void this.transport.send({ type: "request", id, epoch: this.epoch, method, args });
    });
  }
  get currentKey() {
    return this.state?.currentKey || "";
  }
  subscribe(listener) {
    this.listeners.add(listener);
    if (this.state) listener(this.state);
    return () => this.listeners.delete(listener);
  }
  add(track) {
    return this.request("add", [track]);
  }
  addMany(tracks) {
    return this.request("addMany", [tracks]);
  }
  play(key) {
    return this.request("play", key === void 0 ? [] : [key]);
  }
  toggle() {
    return this.request("toggle");
  }
  pause() {
    return this.request("pause");
  }
  next(direction = 1) {
    return this.request("next", [direction]);
  }
  seek(delta) {
    return this.request("seek", [delta]);
  }
  volume(value) {
    return this.request("volume", [value]);
  }
  cycleRepeat() {
    return this.request("cycleRepeat");
  }
  remove() {
    return this.request("remove");
  }
  clear() {
    return this.request("clear");
  }
  startRadio() {
    return this.request("startRadio");
  }
  stopRadio() {
    return this.request("stopRadio");
  }
  claimVideo(options = {}) {
    return this.request("video.claim", [++this.videoRevision], options);
  }
  releaseVideo(stopped = Promise.resolve()) {
    const revision = ++this.videoRevision;
    return stopped.then(() => this.request("video.release", [revision]));
  }
  accountVersion(platform) {
    return this.request("account.version", [platform]);
  }
  saveAccount(platform, cookie, options = {}) {
    const { signal, ...settings } = options;
    return this.request("account.save", [platform, cookie, settings], { signal });
  }
  logout(platform) {
    return this.request("account.logout", [platform]);
  }
  setPreference(key, value) {
    const entry = { value };
    this.preferenceWrites.set(key, entry);
    this.preferences = { ...this.preferences, [key]: value };
    const writing = this.request("preference.set", [key, value], { timeoutMs: 5e3 }).finally(() => {
      if (this.preferenceWrites.get(key) === entry) this.preferenceWrites.delete(key);
      this.preferences = { ...this.state?.preferences, ...Object.fromEntries([...this.preferenceWrites].map(([name, pending]) => [name, pending.value])) };
    });
    this.preferenceTasks.add(writing);
    void writing.finally(() => this.preferenceTasks.delete(writing)).catch(() => {
    });
    return writing;
  }
  async dispose() {
    if (this.disposed) return;
    this.disposed = true;
    clearTimeout(this.reconnectTimer);
    await this.onPauseVideo?.();
    await Promise.allSettled([...this.preferenceTasks]);
    this.socket?.destroy();
    if (this.host) await this.host.close();
    for (const request of this.pending.values()) {
      request.cleanup();
      request.reject(new Error("\u5171\u4EAB\u64AD\u653E\u5668\u5DF2\u5173\u95ED"));
    }
    this.pending.clear();
  }
};

// src/ui/index.tsx
var prefix2 = "opencode-moyu:";
var pluginRoot = resolve4(dirname5(fileURLToPath(import.meta.url)), "..");
var tui = async (host, options) => {
  const configuredRows = Number(options?.rows);
  const fixedRows = Number.isInteger(configuredRows) && configuredRows >= 4 ? Math.min(configuredRows, 40) : void 0;
  const booksDir = expandPath(typeof options?.booksDir === "string" ? options.booksDir : resolve4(pluginRoot, "books"));
  const keyFile = typeof options?.keyFile === "string" ? expandPath(options.keyFile) : void 0;
  const library = new LibraryStore(booksDir, {
    keyFile
  });
  await library.ready();
  const playback = new SharedMediaClient(library, {
    onError: (error) => {
      if (!host.lifecycle.signal.aborted) host.ui.toast({
        title: "\u5168\u5C40\u64AD\u653E\u5668",
        message: String(error),
        variant: "error"
      });
    }
  });
  try {
    await playback.ready;
  } catch (error) {
    await playback.dispose();
    throw error;
  }
  const api = {
    ...host,
    kv: {
      ready: true,
      get(key, fallback) {
        return Object.hasOwn(playback.preferences || {}, key) ? playback.preferences[key] : host.kv.get(key, fallback);
      },
      set(key, value) {
        void playback.setPreference(key, value).catch((error) => {
          if (!host.lifecycle.signal.aborted) host.ui.toast({
            message: String(error),
            variant: "error"
          });
        });
      }
    }
  };
  const moyu = api.moyu;
  const collect = moyu?.collect;
  const [visible, setVisible] = createSignal4(true);
  const [mode, setMode] = createSignal4("novel");
  const [book, setBook] = createSignal4();
  const [offset, setOffset] = createSignal4(0);
  const [height, setHeight] = createSignal4(api.renderer.height);
  const [width, setWidth] = createSignal4(api.renderer.width);
  const [bodyWidth, setBodyWidth] = createSignal4(36);
  const [busy, setBusy] = createSignal4(false);
  const [novelHeightPercent, setNovelHeightPercent] = createSignal4();
  const [novelWidthPercent, setNovelWidthPercent] = createSignal4();
  const [videoHeightPercent, setVideoHeightPercent] = createSignal4(100);
  const [videoWidthPercent, setVideoWidthPercent] = createSignal4(60);
  const [videoExpanded, setVideoExpanded] = createSignal4(false);
  const [videoScalePercent, setVideoScalePercent] = createSignal4(100);
  const [expandedScalePercent, setExpandedScalePercent] = createSignal4(100);
  const [viewportHeight, setViewportHeight] = createSignal4();
  const [hostRows, setHostRows] = createSignal4(0);
  const onboarding = createMemo(() => options?.hostMajor === 2 || !api.kv.get("dismissed_getting_started", false) && !api.state.provider.some((provider) => provider.id !== "opencode" || Object.values(provider.models).some((model) => model.cost?.input !== 0)));
  const compactMode = () => mode() === "music" || mode() === "shopping";
  const chromeRows = () => compactMode() ? 3 : (height() < 40 ? 10 : 13) + (mode() === "video" && options?.hostMajor === 2 ? 1 : 0);
  const minimumRows = () => options?.hostMajor !== 2 && height() < 40 ? 2 : 4;
  const availableRows = createMemo(() => Math.max(minimumRows(), viewportHeight() === void 0 ? height() - (onboarding() ? 31 : 20) : viewportHeight() - chromeRows() - hostRows()));
  const normalVideoSize = createMemo(() => scaledVideoSize(videoWidthPercent() ?? Math.max(20, Math.min(75, (bodyWidth() + 4) / Math.max(1, width()) * 100)), videoHeightPercent() ?? Math.min(fixedRows ?? 24, availableRows()) / availableRows() * 100, videoScalePercent()));
  const videoSize = createMemo(() => videoExpanded() ? scaledVideoSize(75, 100, expandedScalePercent()) : normalVideoSize());
  const heightPercent = createMemo(() => compactMode() ? 100 : mode() === "video" ? !videoExpanded() && videoHeightPercent() === void 0 && videoScalePercent() === 100 ? void 0 : videoSize().height : novelHeightPercent());
  const widthPercent = createMemo(() => compactMode() ? 33 : mode() === "video" ? !videoExpanded() && videoWidthPercent() === void 0 && videoScalePercent() === 100 ? void 0 : videoSize().width : novelWidthPercent());
  const rows = createMemo(() => heightPercent() === void 0 ? Math.min(fixedRows ?? 24, availableRows()) : Math.max(minimumRows(), Math.floor(availableRows() * heightPercent() / 100)));
  const paginate = createPaginator();
  const pages = createMemo((previous) => mode() !== "novel" || !visible() ? previous ?? [{
    start: 0,
    text: ""
  }] : paginate(book()?.text ?? "", bodyWidth(), rows()));
  const page = createMemo(() => pageAt(pages(), offset()));
  const currentChapter = createMemo(() => book()?.chapters.findLast((item) => item.offset <= offset())?.title ?? "\u6B63\u6587");
  let request = 0;
  let ownsDialog = false;
  let started = false;
  const progressKey = (path) => prefix2 + "position:" + createHash8("sha256").update(path).digest("hex");
  function save() {
    const current = book();
    if (current) {
      api.kv.set(progressKey(current.path), offset());
      api.kv.set(progressKey(current.path) + ":anchor", readingPosition(current, offset()));
    }
  }
  function toast(message, variant = "info") {
    api.ui.toast({
      title: "\u58A8\u9C7C\u9605\u8BFB",
      message,
      variant,
      duration: 3500
    });
  }
  function closeDialog() {
    ownsDialog = false;
    api.ui.dialog.clear();
  }
  function dialog(render3) {
    ownsDialog = true;
    api.ui.dialog.replace(render3, () => {
      ownsDialog = false;
    });
  }
  const video = createVideoReader(api, library, {
    columns: bodyWidth,
    rows,
    active: () => mode() === "video" && visible() && api.route.current.name === "session",
    activate: () => selectMode("video"),
    dialog,
    close: closeDialog,
    collect: collect ? promptVideoCollection : void 0,
    beforePlay: (signal) => playback.claimVideo({
      signal
    }),
    releasePlayback: (stopped) => playback.releaseVideo(stopped)
  });
  playback.onPauseVideo = () => video.pauseAndWait();
  const music = createMusicReader(api, library, playback, {
    rows,
    active: () => mode() === "music" && visible() && api.route.current.name === "session",
    canDialog: () => !ownsDialog,
    dialog,
    close: closeDialog
  });
  const shopping = createShoppingReader(api, library, {
    rows,
    active: () => mode() === "shopping" && visible() && api.route.current.name === "session",
    canDialog: () => !ownsDialog,
    dialog,
    close: closeDialog
  });
  await music.ready;
  moyu?.registerNavigation?.((next2) => {
    if (["novel", "video", "music", "shopping"].includes(next2) && !api.lifecycle.signal.aborted) return navigateMoyu(next2);
  });
  moyu?.registerMusicLogin?.((platform) => {
    if (api.lifecycle.signal.aborted) return;
    selectMode("music");
    setVisible(true);
    api.kv.set(prefix2 + "visible", true);
    music.login(platform);
  });
  function selectMode(next2) {
    save();
    setMode(next2);
    api.kv.set(prefix2 + "mode", next2);
  }
  async function open3(path, quiet = false) {
    const token = ++request;
    setBusy(true);
    try {
      let next2 = await loadBook(path, api.state.path.directory || process.cwd(), {
        keyFile
      });
      if (!next2.resourceId) next2 = await library.importLocal(next2);
      if (token !== request || api.lifecycle.signal.aborted) return;
      const anchor = book()?.path === next2.path ? readingPosition(book(), offset()) : api.kv.get(progressKey(next2.path) + ":anchor");
      save();
      const stored = api.kv.get(progressKey(next2.path), 0);
      setOffset(restorePosition(next2, anchor, stored));
      setBook(next2);
      api.kv.set(prefix2 + "last", next2.path);
      if (!quiet) {
        selectMode("novel");
        setVisible(true);
        api.kv.set(prefix2 + "visible", true);
        if (api.route.current.name !== "session") toast("\u5DF2\u6253\u5F00\uFF0C\u8FDB\u5165\u4F1A\u8BDD\u540E\u53EF\u5728\u53F3\u4FA7\u680F\u9605\u8BFB");
      }
    } catch (error) {
      if (token === request && !api.lifecycle.signal.aborted) toast(error instanceof Error ? error.message : String(error), "error");
    } finally {
      if (token === request) setBusy(false);
    }
  }
  function turn(direction) {
    if (mode() === "shopping") return;
    if (mode() === "video") {
      video.seek(direction * 10);
      return;
    }
    if (mode() === "music") {
      void music.seek(direction * 10);
      return;
    }
    if (!book() || busy()) return;
    const next2 = Math.max(0, Math.min(pages().length - 1, page() + direction));
    setOffset(pages()[next2].start);
    save();
  }
  function toggle() {
    const next2 = !visible();
    setVisible(next2);
    api.kv.set(prefix2 + "visible", next2);
    if (!next2 && ownsDialog) closeDialog();
    if (next2 && api.route.current.name !== "session") toast("\u9605\u8BFB\u9762\u677F\u4F4D\u4E8E\u4F1A\u8BDD\u53F3\u4FA7\u680F\uFF1B\u8FDB\u5165\u4F1A\u8BDD\u540E\u663E\u793A");
  }
  function promptFile() {
    dialog(() => _$createComponent4(api.ui.DialogPrompt, {
      title: "\u6253\u5F00\u5C0F\u8BF4 \xB7 \u672C\u5730 TXT / Markdown",
      placeholder: "/mnt/d/books/\u5C0F\u8BF4.txt \u6216 ~/books/\u5C0F\u8BF4.txt",
      onCancel: closeDialog,
      onConfirm: (path) => {
        closeDialog();
        void open3(path);
      }
    }));
  }
  function promptCollection() {
    dialog(() => _$createComponent4(api.ui.DialogPrompt, {
      title: "\u8BA9\u5F53\u524D\u6A21\u578B\u91C7\u96C6\u5C0F\u8BF4",
      placeholder: "\u4F8B\u5982\uFF1A\u5FD8\u8BED\u7684\u51E1\u4EBA\u4FEE\u4ED9\u4F20\uFF0C\u5148\u91C7\u96C620\u7AE0\uFF1B\u4E5F\u53EF\u8F93\u5165\u76EE\u5F55\u94FE\u63A5",
      onCancel: closeDialog,
      onConfirm: (query) => {
        closeDialog();
        void collect?.(query);
      }
    }));
  }
  function promptVideoCollection() {
    dialog(() => _$createComponent4(api.ui.DialogPrompt, {
      title: "\u8BA9\u5F53\u524D\u6A21\u578B\u641C\u7D22 / \u91C7\u96C6\u89C6\u9891",
      placeholder: "\u4F8B\u5982\uFF1A\u70ED\u95E8\uFF1B\u641C\u7D22 \u732B\u54AA\uFF1B\u4E0B\u8F7D\u8FD9\u4E2A B \u7AD9\u94FE\u63A5\uFF0C1080p",
      onCancel: closeDialog,
      onConfirm: (query) => {
        closeDialog();
        void collect?.(`\u89C6\u9891 ${query}`);
      }
    }));
  }
  async function shelf() {
    try {
      const items = await listBooks(booksDir, {
        keyFile
      });
      if (api.lifecycle.signal.aborted) return;
      dialog(() => _$createComponent4(api.ui.DialogSelect, {
        title: "\u4E66\u67B6 \xB7 \u58A8\u9C7C\u9605\u8BFB",
        placeholder: "\u641C\u7D22\u4E66\u540D\uFF0C\u6216\u9009\u62E9\u91C7\u96C6 / \u6253\u5F00\u672C\u5730\u6587\u4EF6",
        get options() {
          return [...collect ? [{
            title: "\uFF0B \u8BA9\u5F53\u524D\u6A21\u578B\u91C7\u96C6\u5C0F\u8BF4\u2026",
            value: "moyu:collect",
            description: "\u8F93\u5165\u4E66\u540D\u3001\u4F5C\u8005\u6216\u76EE\u5F55\u94FE\u63A5"
          }] : [], ...collect ? [{
            title: "\uFF0B \u89C6\u9891\u641C\u7D22 / \u70ED\u95E8\u91C7\u96C6\u2026",
            value: "moyu:video",
            description: "\u7528\u5F53\u524D\u6A21\u578B\u6D4F\u89C8 B \u7AD9\u70ED\u95E8\u3001\u641C\u7D22\u6216\u4E0B\u8F7D\u89C6\u9891"
          }] : [], {
            title: "\uFF0B \u6253\u5F00\u672C\u5730\u6587\u4EF6\u2026",
            value: "",
            description: "\u8F93\u5165\u4EFB\u610F TXT \u6587\u4EF6\u8DEF\u5F84"
          }, ...items.map((item) => ({
            title: item.title,
            value: item.path,
            description: item.progress || item.path
          }))];
        },
        onSelect: (item) => {
          closeDialog();
          if (item.value === "moyu:collect") promptCollection();
          else if (item.value === "moyu:video") promptVideoCollection();
          else if (item.value) void open3(String(item.value));
          else promptFile();
        }
      }));
    } catch {
      promptFile();
    }
  }
  function openMoyu() {
    setVisible(true);
    api.kv.set(prefix2 + "visible", true);
    dialog(() => _$createComponent4(api.ui.DialogSelect, {
      title: "\u58A8\u9C7C \xB7 \u9009\u62E9\u529F\u80FD",
      placeholder: "\u70B9\u51FB\u8FDB\u5165\uFF1B\u8D2D\u7269\u6BD4\u4EF7\u548C\u672C\u5730\u9605\u8BFB\u4E0D\u9700\u8981\u9009\u62E9\u6A21\u578B",
      options: [{
        title: "\u5C0F\u8BF4",
        value: "novel",
        description: "\u4E66\u67B6\u3001\u7AE0\u8282\u76EE\u5F55\u4E0E\u91C7\u96C6\u9605\u8BFB"
      }, {
        title: "\u89C6\u9891",
        value: "video",
        description: "\u672C\u5730\u3001B \u7AD9\u548C YouTube \u89C6\u9891"
      }, {
        title: "\u97F3\u4E50",
        value: "music",
        description: "\u805A\u5408\u641C\u7D22\u3001\u6B4C\u5355\u4E0E\u64AD\u653E\u5668"
      }, {
        title: "\u8D2D\u7269",
        value: "shopping",
        description: "\u4F4E\u4EF7\u641C\u7D22\u3001\u4F18\u60E0\u5238\u548C\u52A0\u5BC6\u6536\u85CF"
      }],
      onSelect: (item) => {
        closeDialog();
        navigateMoyu(item.value);
      }
    }));
  }
  function navigateMoyu(next2) {
    selectMode(next2);
    setVisible(true);
    api.kv.set(prefix2 + "visible", true);
    if (next2 === "novel") return shelf();
    if (next2 === "video") return video.shelf();
  }
  function chapters() {
    if (mode() !== "novel") selectMode("novel");
    const current = book();
    if (!current) return promptFile();
    const items = current.chapters.length ? current.chapters : chaptersOf(current.text);
    if (!items.length) return toast("\u6CA1\u6709\u8BC6\u522B\u5230\u7AE0\u8282\u6807\u9898\uFF0C\u53EF\u7528\u300C\u8DF3\u8F6C\u8FDB\u5EA6\u300D\u5B9A\u4F4D");
    dialog(() => _$createComponent4(api.ui.DialogSelect, {
      get title() {
        return `${current.title} \xB7 \u76EE\u5F55`;
      },
      placeholder: "\u641C\u7D22\u7AE0\u8282",
      get current() {
        return (items.findLast((item) => item.offset <= offset()) ?? items[0]).offset;
      },
      get options() {
        return items.map((item) => ({
          title: item.title,
          value: item.offset,
          description: item.status === "ready" ? "\u5DF2\u91C7\u96C6" : item.status === "pending" ? "\u5F85\u8865\u6B63\u6587" : item.status === "failed" ? "\u6B63\u6587\u6682\u7F3A\uFF0C\u53EF\u7A0D\u540E\u8865\u91C7" : void 0
        }));
      },
      onSelect: (item) => {
        closeDialog();
        setOffset(Number(item.value));
        save();
      }
    }));
  }
  function supplement() {
    const current = book(), catalog = current?.catalog;
    if (!catalog || !collect) return;
    const chapter = current.chapters.findLast((item) => item.offset <= offset()) ?? current.chapters[0];
    const source = {
      url: catalog.url,
      sourceId: catalog.sourceId
    };
    dialog(() => _$createComponent4(api.ui.DialogSelect, {
      title: "\u8865\u91C7\u5C0F\u8BF4\u6B63\u6587",
      get options() {
        return [{
          title: "\u8865\u91C7\u5F53\u524D\u7AE0\u8282",
          value: "current",
          description: chapter?.status === "ready" ? "\u672C\u7AE0\u5DF2\u91C7\u96C6\uFF0C\u5C06\u8DF3\u8FC7" : chapter?.title
        }, {
          title: "\u7EE7\u7EED\u8865\u91C7 5 \u7AE0",
          value: "next",
          description: "\u5148\u8865\u672A\u5C1D\u8BD5\u7AE0\u8282\uFF1B\u5DF2\u6210\u529F\u7AE0\u8282\u81EA\u52A8\u8DF3\u8FC7"
        }, {
          title: "\u5237\u65B0\u5B8C\u6574\u76EE\u5F55",
          value: "catalog",
          description: "\u4FDD\u7559\u6210\u529F\u6B63\u6587\uFF0C\u68C0\u67E5\u65B0\u589E\u6216\u5206\u9875\u76EE\u5F55\uFF1B\u4E0D\u91C7\u6B63\u6587"
        }];
      },
      onSelect: (item) => {
        closeDialog();
        if (item.value === "current" && chapter?.status === "ready") return toast("\u5F53\u524D\u7AE0\u8282\u6B63\u6587\u5DF2\u91C7\u96C6");
        const query = item.value === "catalog" ? `\u5C0F\u8BF4\uFF1A\u4EC5\u5237\u65B0\u5E76\u4FDD\u5B58\u5B8C\u6574\u7AE0\u8282\u76EE\u5F55\uFF0Cmoyu_catalog refresh=true\uFF1B\u4E0D\u91C7\u6B63\u6587\u3002\u6765\u6E90\u53C2\u6570 ${JSON.stringify(source)}` : `\u5C0F\u8BF4\uFF1A\u4ECE\u5DF2\u4FDD\u5B58\u76EE\u5F55\u8865\u91C7${item.value === "current" ? "\u5F53\u524D 1 \u7AE0" : "5 \u7AE0"}\uFF0C\u8C03\u7528 moyu_import\uFF0C\u5DF2\u91C7\u7AE0\u8282\u8DF3\u8FC7\uFF0C\u9519\u8BEF\u65F6\u505C\u6B62\u3002\u53C2\u6570 ${JSON.stringify({
          ...source,
          limit: item.value === "current" ? 1 : 5,
          ...item.value === "current" ? {
            start: chapter?.index ?? 0
          } : {}
        })}`;
        void collect(query).catch((error) => toast(String(error), "error"));
      }
    }));
  }
  function jump() {
    if (mode() === "shopping") return shopping.results();
    if (mode() === "music") return music.jump();
    if (mode() === "video") return video.jump();
    if (!book()) return promptFile();
    dialog(() => _$createComponent4(api.ui.DialogPrompt, {
      title: "\u8DF3\u8F6C\u9605\u8BFB\u8FDB\u5EA6 \xB7 \u8F93\u5165 0\u2013100",
      placeholder: "\u4F8B\u5982 35 \u6216 35%",
      onCancel: closeDialog,
      onConfirm: (input) => {
        const value = Number(input.trim().replace(/%$/, ""));
        if (!input.trim() || !Number.isFinite(value) || value < 0 || value > 100) return toast("\u8BF7\u8F93\u5165 0\u2013100 \u4E4B\u95F4\u7684\u767E\u5206\u6BD4", "error");
        closeDialog();
        setOffset(Math.min(book().text.length - 1, Math.floor(book().text.length * value / 100)));
        save();
      }
    }));
  }
  function setSize(percent) {
    if (mode() === "video") {
      commitVideoScale();
      setVideoHeightPercent(percent);
      api.kv.set(prefix2 + "video:heightPercent", percent ?? "auto");
      resetVideoExpanded();
    } else {
      setNovelHeightPercent(percent);
      api.kv.set(prefix2 + "heightPercent", percent ?? null);
    }
    save();
  }
  function resetVideoExpanded() {
    setVideoExpanded(false);
    api.kv.set(prefix2 + "video:expanded", false);
  }
  function toggleVideoSize() {
    if (!videoExpanded()) {
      setExpandedScalePercent(100);
      api.kv.set(prefix2 + "video:expandedScalePercent", 100);
    }
    setVideoExpanded((previous) => !previous);
    api.kv.set(prefix2 + "video:expanded", videoExpanded());
  }
  function setViewerWidth(percent) {
    if (mode() === "video") {
      commitVideoScale();
      setVideoWidthPercent(percent);
      api.kv.set(prefix2 + "video:widthPercent", percent ?? "auto");
      resetVideoExpanded();
    } else {
      setNovelWidthPercent(percent);
      api.kv.set(prefix2 + "widthPercent", percent ?? null);
    }
    save();
  }
  function commitVideoScale() {
    if (videoScalePercent() === 100) return;
    const current = normalVideoSize();
    setVideoWidthPercent(current.width);
    setVideoHeightPercent(current.height);
    setVideoScalePercent(100);
    api.kv.set(prefix2 + "video:widthPercent", current.width);
    api.kv.set(prefix2 + "video:heightPercent", current.height);
    api.kv.set(prefix2 + "video:scalePercent", 100);
  }
  function scaleVideo(percent) {
    if (videoExpanded()) {
      const next2 = scaledVideoSize(75, 100, percent);
      setExpandedScalePercent(next2.percent);
      api.kv.set(prefix2 + "video:expandedScalePercent", next2.percent);
    } else {
      if (videoWidthPercent() === void 0) {
        const baseline = Math.max(20, Math.min(75, (bodyWidth() + 4) / width() * 100));
        setVideoWidthPercent(baseline);
        api.kv.set(prefix2 + "video:widthPercent", baseline);
      }
      if (videoHeightPercent() === void 0) {
        const baseline = Math.min(100, Math.min(fixedRows ?? 24, availableRows()) / availableRows() * 100);
        setVideoHeightPercent(baseline);
        api.kv.set(prefix2 + "video:heightPercent", baseline);
      }
      const next2 = scaledVideoSize(videoWidthPercent(), videoHeightPercent(), percent);
      setVideoScalePercent(next2.percent);
      api.kv.set(prefix2 + "video:scalePercent", next2.percent);
    }
  }
  function stepVideoScale(direction) {
    const current = videoSize();
    const next2 = Math.max(25, Math.min(current.maximum, current.percent + direction * 10));
    if (next2 === current.percent) return toast(direction > 0 ? videoExpanded() ? "\u5DF2\u8FBE\u5230\u5F53\u524D\u7EC8\u7AEF\u53EF\u7528\u7A7A\u95F4\u4E0A\u9650" : "\u5DF2\u8FBE\u5230\u5F53\u524D\u64AD\u653E\u533A\u4E0A\u9650\uFF0C\u53EF\u4F7F\u7528\u300C\u5927\u753B\u9762\u300D\u589E\u52A0\u7A7A\u95F4" : "\u5DF2\u8FBE\u5230\u6700\u5C0F\u7F29\u653E\u6BD4\u4F8B");
    scaleVideo(next2);
  }
  function customVideoScale() {
    const maximum = videoSize().maximum;
    dialog(() => _$createComponent4(api.ui.DialogPrompt, {
      title: `\u89C6\u9891\u7F29\u653E \xB7 \u8F93\u5165 25\u2013${maximum}%`,
      get placeholder() {
        return `\u5F53\u524D ${videoSize().percent}%\uFF0C\u5BBD\u9AD8\u4E00\u8D77\u8C03\u6574`;
      },
      onCancel: closeDialog,
      onConfirm: (input) => {
        const value = Number(input.trim().replace(/%$/, ""));
        if (!input.trim() || !Number.isFinite(value) || value < 25 || value > maximum) return toast(`\u8BF7\u8F93\u5165 25\u2013${maximum} \u4E4B\u95F4\u7684\u767E\u5206\u6BD4`, "error");
        closeDialog();
        scaleVideo(value);
      }
    }));
  }
  function videoScaleMenu() {
    const current = videoSize();
    const presets = [.../* @__PURE__ */ new Set([...VIDEO_SCALE_PRESETS.filter((value) => value <= current.maximum), current.percent])].sort((a, b) => a - b);
    dialog(() => _$createComponent4(api.ui.DialogSelect, {
      title: "\u89C6\u9891\u7B49\u6BD4\u4F8B\u7F29\u653E",
      placeholder: "100% \u4E3A\u57FA\u51C6\u5C3A\u5BF8\uFF1B\u5BBD\u9AD8\u4E00\u8D77\u8C03\u6574\uFF0C\u753B\u9762\u4FDD\u6301\u539F\u6BD4\u4F8B",
      get current() {
        return String(current.percent);
      },
      get options() {
        return [...presets.map((value) => ({
          title: `\u7F29\u653E ${value}%${value === 100 ? "\uFF08\u57FA\u51C6\uFF09" : ""}`,
          value: String(value),
          description: "\u53D7\u7EC8\u7AEF\u53EF\u7528\u7A7A\u95F4\u548C\u6700\u5C0F\u5C3A\u5BF8\u9650\u5236"
        })), {
          title: "\u81EA\u5B9A\u4E49\u6BD4\u4F8B\u2026",
          value: "custom",
          description: `\u8F93\u5165 25\u2013${current.maximum}%`
        }];
      },
      onSelect: (item) => {
        closeDialog();
        if (item.value === "custom") customVideoScale();
        else scaleVideo(Number(item.value));
      }
    }));
  }
  function customSize() {
    dialog(() => _$createComponent4(api.ui.DialogPrompt, {
      get title() {
        return `${mode() === "video" ? "\u89C6\u9891\u64AD\u653E\u533A" : "\u9605\u8BFB\u533A"}\u9AD8\u5EA6 \xB7 \u8F93\u5165 10\u2013100%`;
      },
      placeholder: "\u4F8B\u5982 75\uFF0C\u6309\u53EF\u7528\u6B63\u6587\u9AD8\u5EA6\u8BA1\u7B97",
      onCancel: closeDialog,
      onConfirm: (input) => {
        const value = Number(input.trim().replace(/%$/, ""));
        if (!input.trim() || !Number.isFinite(value) || value < 10 || value > 100) return toast("\u8BF7\u8F93\u5165 10\u2013100 \u4E4B\u95F4\u7684\u767E\u5206\u6BD4", "error");
        closeDialog();
        setSize(Math.round(value));
      }
    }));
  }
  function heightSize() {
    const selected = heightPercent() === void 0 ? "auto" : String(heightPercent());
    dialog(() => _$createComponent4(api.ui.DialogSelect, {
      get title() {
        return `${mode() === "video" ? "\u89C6\u9891\u64AD\u653E\u533A" : "\u9605\u8BFB\u533A"}\u9AD8\u5EA6`;
      },
      get placeholder() {
        return mode() === "video" ? "\u5355\u72EC\u4FDD\u5B58\u89C6\u9891\u9AD8\u5EA6\uFF0C\u4E0D\u5F71\u54CD\u5C0F\u8BF4\u9605\u8BFB" : "\u70B9\u51FB\u9009\u62E9\u9AD8\u5EA6\uFF0C\u8BBE\u7F6E\u81EA\u52A8\u4FDD\u5B58";
      },
      get options() {
        return [{
          title: "\u81EA\u52A8\u9AD8\u5EA6",
          value: "auto",
          description: "\u6062\u590D\u9ED8\u8BA4\u6B63\u6587\u884C\u6570"
        }, ...[25, 50, 75, 100].map((value) => ({
          title: `\u9AD8\u5EA6 ${value}%`,
          value: String(value),
          description: "\u5360\u53EF\u7528\u6B63\u6587\u9AD8\u5EA6\u7684\u6BD4\u4F8B"
        })), {
          title: "\u81EA\u5B9A\u4E49\u9AD8\u5EA6\u2026",
          value: "custom",
          description: "\u8F93\u5165 10\u2013100%"
        }];
      },
      current: selected,
      onSelect: (item) => {
        closeDialog();
        if (item.value === "custom") return customSize();
        setSize(item.value === "auto" ? void 0 : Number(item.value));
      }
    }));
  }
  function widthSize() {
    const selected = widthPercent() === void 0 ? "auto" : String(widthPercent());
    dialog(() => _$createComponent4(api.ui.DialogSelect, {
      get title() {
        return `${mode() === "video" ? "\u89C6\u9891\u64AD\u653E\u533A" : "\u9605\u8BFB\u533A"}\u5BBD\u5EA6`;
      },
      get placeholder() {
        return mode() === "video" ? "\u5355\u72EC\u4FDD\u5B58\u89C6\u9891\u5BBD\u5EA6\uFF0C\u4E3B\u4F1A\u8BDD\u81F3\u5C11\u4FDD\u7559 44 \u5217" : "\u70B9\u51FB\u9009\u62E9\u4FA7\u680F\u5BBD\u5EA6\uFF0C\u6309\u4F1A\u8BDD\u53EF\u7528\u5BBD\u5EA6\u8BA1\u7B97";
      },
      get options() {
        return [{
          title: "\u9ED8\u8BA4\u5BBD\u5EA6",
          value: "auto",
          description: "\u6062\u590D OpenCode \u539F\u6709\u4FA7\u680F\u5BBD\u5EA6"
        }, ...(mode() === "video" ? [33, 40, 50, 60, 75] : [25, 33, 40, 50, 60]).map((value) => ({
          title: `\u5BBD\u5EA6 ${value}%`,
          value: String(value),
          description: "\u540C\u65F6\u4FDD\u7559\u4E3B\u4F1A\u8BDD\u7684\u8F93\u5165\u7A7A\u95F4"
        }))];
      },
      current: selected,
      onSelect: (item) => {
        closeDialog();
        const percent = item.value === "auto" ? void 0 : Number(item.value);
        setViewerWidth(percent);
      }
    }));
  }
  function size() {
    dialog(() => _$createComponent4(api.ui.DialogSelect, {
      get title() {
        return mode() === "video" ? "\u89C6\u9891\u64AD\u653E\u533A\u57DF\u5927\u5C0F" : "\u9605\u8BFB\u533A\u57DF\u5927\u5C0F";
      },
      placeholder: "\u70B9\u51FB\u9009\u62E9\u8981\u8C03\u6574\u7684\u5C3A\u5BF8",
      get options() {
        return [...mode() === "video" && options?.hostMajor === 2 ? [{
          title: videoExpanded() ? "\u8FD8\u539F\u89C6\u9891\u7A97\u53E3" : "\u653E\u5927\u89C6\u9891\u7A97\u53E3",
          value: "expand",
          description: "\u653E\u5927\u65F6\u6536\u8D77\u4FA7\u680F\u539F\u751F\u4FE1\u606F\uFF0C\u70B9\u8FD8\u539F\u6062\u590D"
        }] : [], ...mode() === "video" && options?.hostMajor === 2 ? [{
          title: "\u7B49\u6BD4\u4F8B\u7F29\u653E\u2026",
          value: "scale",
          description: "\u5BBD\u9AD8\u4E00\u8D77\u7F29\u5C0F\u6216\u653E\u5927\uFF0C\u4E5F\u53EF\u8F93\u5165\u767E\u5206\u6BD4"
        }] : [], ...options?.hostMajor === 2 ? [{
          title: "\u8C03\u6574\u5BBD\u5EA6",
          value: "width",
          description: "\u6539\u53D8\u4FA7\u680F\u5BBD\u5EA6\u5E76\u91CD\u65B0\u5206\u9875"
        }] : [], {
          title: "\u8C03\u6574\u9AD8\u5EA6",
          value: "height",
          description: "\u6539\u53D8\u6B63\u6587\u9AD8\u5EA6\uFF0C\u9875\u7801\u548C\u6309\u94AE\u540C\u6B65\u79FB\u52A8"
        }];
      },
      onSelect: (item) => {
        closeDialog();
        if (item.value === "expand") toggleVideoSize();
        else if (item.value === "scale") videoScaleMenu();
        else item.value === "width" ? widthSize() : heightSize();
      }
    }));
  }
  const resize = (nextWidth = api.renderer.width, nextHeight = api.renderer.height) => {
    setHeight(nextHeight);
    setWidth(nextWidth);
  };
  let refresh;
  const watcher = watch2(booksDir, (_event, filename) => {
    const current = book();
    if (!current || filename?.toString() !== basename4(current.path)) return;
    clearTimeout(refresh);
    refresh = setTimeout(() => {
      if (api.lifecycle.signal.aborted || book()?.path !== current.path) return;
      void access4(current.path).then(() => open3(current.path, true)).catch((error) => {
        if (error.code !== "ENOENT" || api.lifecycle.signal.aborted || book()?.path !== current.path) return;
        setBook(void 0);
        setOffset(0);
        api.kv.set(progressKey(current.path), 0);
        api.kv.set(prefix2 + "last", "");
      });
    }, 100);
  });
  function removeBook() {
    if (mode() === "shopping") return shopping.favorites();
    if (mode() === "music") return music.remove();
    if (mode() === "video") return video.remove();
    const current = book();
    if (!current?.resourceId) return toast("\u8BF7\u5148\u5728\u4E66\u67B6\u6253\u5F00\u8981\u5220\u9664\u7684\u5C0F\u8BF4");
    dialog(() => _$createComponent4(api.ui.DialogConfirm, {
      title: "\u4ECE\u8D44\u6599\u5E93\u5220\u9664",
      get message() {
        return `\u5220\u9664\u300A${current.title}\u300B\u7684\u52A0\u5BC6\u526F\u672C\u548C\u91C7\u96C6\u7F13\u5B58\uFF1F\u5916\u90E8\u539F\u6587\u4EF6\u4FDD\u7559\u3002`;
      },
      onCancel: closeDialog,
      onConfirm: () => {
        closeDialog();
        void library.deleteResource(current.resourceId).then(() => {
          if (api.lifecycle.signal.aborted) return;
          api.kv.set(progressKey(current.path), 0);
          api.kv.set(progressKey(current.path) + ":anchor", null);
          if (book()?.path === current.path) {
            api.kv.set(prefix2 + "last", "");
            setBook(void 0);
            setOffset(0);
          }
          toast("\u5DF2\u5220\u9664\u52A0\u5BC6\u526F\u672C\u548C\u91C7\u96C6\u7F13\u5B58");
        }).catch((error) => toast(String(error), "error"));
      }
    }));
  }
  api.renderer.on("resize", resize);
  api.lifecycle.onDispose(() => {
    ++request;
    watcher.close();
    clearTimeout(refresh);
    save();
    shopping.dispose();
    const disposing = Promise.all([video.dispose(), music.dispose()]).then(() => playback.dispose());
    api.renderer.off("resize", resize);
    if (ownsDialog) closeDialog();
    return disposing;
  });
  createEffect2(() => {
    if (!api.kv.ready || started) return;
    started = true;
    const savedSize = Number(api.kv.get(prefix2 + "heightPercent", null));
    if (Number.isFinite(savedSize) && savedSize >= 10 && savedSize <= 100) setNovelHeightPercent(savedSize);
    const savedWidth = Number(api.kv.get(prefix2 + "widthPercent", null));
    if (Number.isFinite(savedWidth) && savedWidth >= 20 && savedWidth <= 60) setNovelWidthPercent(savedWidth);
    const videoHeight = api.kv.get(prefix2 + "video:heightPercent", 100);
    if (videoHeight === "auto") setVideoHeightPercent(void 0);
    else if (Number.isFinite(Number(videoHeight)) && Number(videoHeight) > 0 && Number(videoHeight) <= 100) setVideoHeightPercent(Number(videoHeight));
    const videoWidth = api.kv.get(prefix2 + "video:widthPercent", 60);
    if (videoWidth === "auto") setVideoWidthPercent(void 0);
    else if (Number.isFinite(Number(videoWidth)) && Number(videoWidth) > 0 && Number(videoWidth) <= 75) setVideoWidthPercent(Number(videoWidth));
    const scale = Number(api.kv.get(prefix2 + "video:scalePercent", 100));
    if (Number.isFinite(scale) && scale >= 25 && scale <= 200) setVideoScalePercent(scale);
    const expandedScale = Number(api.kv.get(prefix2 + "video:expandedScalePercent", 100));
    if (Number.isFinite(expandedScale) && expandedScale >= 25 && expandedScale <= 100) setExpandedScalePercent(expandedScale);
    setVideoExpanded(api.kv.get(prefix2 + "video:expanded", false));
    setVisible(api.kv.get(prefix2 + "visible", true));
    if (api.kv.get(prefix2 + "mode", "novel") === "video" && !playback.state?.playing && !playback.state?.videoOwner) setMode("video");
    else if (api.kv.get(prefix2 + "mode", "novel") === "music") selectMode("music");
    else if (api.kv.get(prefix2 + "mode", "novel") === "shopping") selectMode("shopping");
    const initial = typeof options?.file === "string" ? options.file : api.kv.get(prefix2 + "last", "");
    void open3(initial || resolve4(pluginRoot, "books/\u591C\u73ED\u4FBF\u5229\u5E97.txt"), true);
  });
  let hadVideo = false;
  createEffect2(() => {
    const showingVideo = mode() === "video" && visible() && api.route.current.name === "session";
    if (hadVideo === showingVideo) return;
    hadVideo = showingVideo;
    void (showingVideo ? playback.claimVideo() : playback.releaseVideo(video.pauseAndWait())).catch((error) => toast(String(error), "error"));
  });
  api.keymap.registerLayer({
    commands: [{
      name: "moyu.toggle",
      title: "\u58A8\u9C7C\u9605\u8BFB\uFF1A\u663E\u793A / \u9690\u85CF",
      category: "Moyu \u9605\u8BFB",
      namespace: "palette",
      run: toggle
    }],
    bindings: [{
      key: "alt+m",
      cmd: "moyu.toggle",
      desc: "\u663E\u793A / \u9690\u85CF\u5C0F\u8BF4"
    }]
  });
  api.keymap.registerLayer({
    mode: "base",
    commands: [{
      name: "moyu.open",
      title: "\u58A8\u9C7C\uFF1A\u9009\u62E9\u5C0F\u8BF4\u3001\u89C6\u9891\u3001\u97F3\u4E50\u6216\u8D2D\u7269",
      slashName: "moyu",
      run: openMoyu
    }, {
      name: "moyu.video",
      title: "\u6478\u9C7C\u89C6\u9891\uFF1A\u6253\u5F00\u89C6\u9891\u5E93",
      slashName: "video",
      run: () => {
        selectMode("video");
        setVisible(true);
        return video.shelf();
      }
    }, {
      name: "moyu.music",
      title: "\u58A8\u9C7C\u97F3\u4E50\uFF1A\u6253\u5F00\u805A\u5408\u64AD\u653E\u5668",
      slashName: "music",
      run: () => {
        selectMode("music");
        setVisible(true);
        api.kv.set(prefix2 + "visible", true);
      }
    }, {
      name: "moyu.shopping",
      title: "\u58A8\u9C7C\u8D2D\u7269\uFF1A\u641C\u7D22\u4F4E\u4EF7\u4E0E\u4F18\u60E0\u5238",
      run: () => navigateMoyu("shopping")
    }, {
      name: "moyu.shelf",
      title: "\u58A8\u9C7C\u9605\u8BFB\uFF1A\u4E66\u67B6 / \u6253\u5F00\u6587\u4EF6",
      slashName: "read",
      run: shelf
    }, {
      name: "moyu.chapters",
      title: "\u58A8\u9C7C\u9605\u8BFB\uFF1A\u7AE0\u8282\u76EE\u5F55",
      slashName: "chapters",
      run: chapters
    }, {
      name: "moyu.jump",
      title: "\u58A8\u9C7C\u9605\u8BFB\uFF1A\u8DF3\u8F6C\u8FDB\u5EA6",
      run: jump
    }, {
      name: "moyu.size",
      title: "\u58A8\u9C7C\u9605\u8BFB\uFF1A\u8C03\u6574\u9605\u8BFB\u533A\u57DF\u5927\u5C0F",
      slashName: "readsize",
      run: size
    }, {
      name: "moyu.delete",
      title: "\u58A8\u9C7C\u9605\u8BFB\uFF1A\u5220\u9664\u5F53\u524D\u8D44\u6599",
      run: removeBook
    }, {
      name: "moyu.next",
      title: "\u58A8\u9C7C\u9605\u8BFB\uFF1A\u4E0B\u4E00\u9875",
      enabled: () => visible() && api.route.current.name === "session",
      run: () => turn(1)
    }, {
      name: "moyu.prev",
      title: "\u58A8\u9C7C\u9605\u8BFB\uFF1A\u4E0A\u4E00\u9875",
      enabled: () => visible() && api.route.current.name === "session",
      run: () => turn(-1)
    }].map((item) => ({
      ...item,
      category: "Moyu \u9605\u8BFB",
      namespace: "palette"
    })),
    bindings: [{
      key: "alt+o",
      cmd: "moyu.shelf",
      desc: "\u6253\u5F00\u4E66\u67B6"
    }, {
      key: "alt+c",
      cmd: "moyu.chapters",
      desc: "\u7AE0\u8282\u76EE\u5F55"
    }, {
      key: "alt+g",
      cmd: "moyu.jump",
      desc: "\u8DF3\u8F6C\u8FDB\u5EA6"
    }, {
      key: "<leader>j",
      cmd: "moyu.size",
      desc: "\u8C03\u6574\u9605\u8BFB\u533A\u57DF\u5927\u5C0F"
    }, {
      key: "alt+d",
      cmd: "moyu.delete",
      desc: "\u5220\u9664\u5F53\u524D\u8D44\u6599"
    }, {
      key: "alt+right",
      cmd: "moyu.next",
      desc: "\u4E0B\u4E00\u9875"
    }, {
      key: "alt+left",
      cmd: "moyu.prev",
      desc: "\u4E0A\u4E00\u9875"
    }]
  });
  function Reader() {
    let viewport;
    let scrollbox;
    let readerNode;
    let docking;
    let mountTimer;
    const [layout, setLayout] = createSignal4();
    const measure = () => {
      if (viewport && !viewport.isDestroyed && Number.isFinite(viewport.height) && viewport.height > 0) setViewportHeight(viewport.height);
    };
    const applyWidth = () => layout()?.apply(visible() ? widthPercent() : void 0, width());
    const frameResized = () => queueMicrotask(() => {
      if (!api.lifecycle.signal.aborted) applyWidth();
    });
    createEffect2(applyWidth);
    const dock = () => {
      if (options?.hostMajor !== 2 || api.lifecycle.signal.aborted) return;
      measure();
      if (visible() && readerNode && !readerNode.isDestroyed && viewport && !docking) docking = sidebarDock(readerNode, viewport, dock, scrollbox);
      setHostRows(docking?.measure(visible(), mode() === "video" && videoExpanded()) ?? 0);
      if (!visible()) docking = void 0;
    };
    createEffect2(dock);
    api.renderer.on("frame", dock);
    onMount(() => {
      mountTimer = setTimeout(() => {
        if (readerNode && !readerNode.isDestroyed) {
          observe(readerNode);
          dock();
        }
      }, 0);
    });
    function observe(node) {
      if (options?.hostMajor !== 2) return;
      if (viewport) return;
      for (let parent2 = node.parent; parent2; parent2 = parent2.parent) {
        if (!(parent2 instanceof ScrollBoxRenderable)) continue;
        scrollbox = parent2;
        viewport = parent2.viewport;
        const sizing = sidebarLayout(parent2);
        setLayout(sizing);
        sizing?.frame?.on("resized", frameResized);
        viewport.on("resized", measure);
        measure();
        dock();
        break;
      }
    }
    onCleanup2(() => {
      video.pause();
      void playback.releaseVideo(video.pauseAndWait()).catch(() => {
      });
      clearTimeout(mountTimer);
      viewport?.off("resized", measure);
      layout()?.frame?.off("resized", frameResized);
      layout()?.restore();
      api.renderer.off("frame", dock);
      docking?.restore();
    });
    const theme = () => api.theme.current;
    const gap = () => height() < 40 ? 0 : 1;
    const percentage = () => page() === pages().length - 1 ? 100 : Math.floor(pages()[page()].start / (book()?.text.length || 1) * 100);
    function Button(props) {
      let pressed = false;
      const click = (event) => {
        const activate = pressed && event.button === 0 && !event.isDragging;
        pressed = false;
        if (!activate) return;
        event.preventDefault();
        event.stopPropagation();
        queueMicrotask(() => {
          if (api.lifecycle.signal.aborted) return;
          try {
            void Promise.resolve(props.action()).catch((error) => toast(error instanceof Error ? error.message : String(error), "error"));
          } catch (error) {
            toast(error instanceof Error ? error.message : String(error), "error");
          }
        });
      };
      return (() => {
        var _el$ = _$createElement4("text");
        _$setProp4(_el$, "selectable", false);
        _$setProp4(_el$, "wrapMode", "none");
        _$setProp4(_el$, "onMouseDown", (event) => {
          if (event.button === 0) {
            pressed = true;
            event.preventDefault();
            event.stopPropagation();
          }
        });
        _$setProp4(_el$, "onMouseOut", () => {
          pressed = false;
        });
        _$setProp4(_el$, "onMouseDrag", () => {
          pressed = false;
        });
        _$setProp4(_el$, "onMouseUp", click);
        _$insert4(_el$, () => props.label);
        _$effect4((_$p) => _$setProp4(_el$, "fg", props.muted ? theme().textMuted : theme().primary, _$p));
        return _el$;
      })();
    }
    return _$createComponent4(Show4, {
      get when() {
        return visible();
      },
      get fallback() {
        return (() => {
          var _el$15 = _$createElement4("box");
          _$setProp4(_el$15, "height", 1);
          _$insert4(_el$15, _$createComponent4(Button, {
            label: "[\u663E\u793A\u9605\u8BFB]",
            action: toggle
          }));
          return _el$15;
        })();
      },
      get children() {
        var _el$2 = _$createElement4("box"), _el$3 = _$createElement4("box"), _el$4 = _$createElement4("text"), _el$5 = _$createElement4("b"), _el$6 = _$createElement4("box");
        _$insertNode4(_el$2, _el$3);
        _$insertNode4(_el$2, _el$6);
        _$use2((node) => {
          readerNode = node;
        }, _el$2);
        _$setProp4(_el$2, "flexShrink", 0);
        _$setProp4(_el$2, "width", "100%");
        _$setProp4(_el$2, "onSizeChange", function() {
          readerNode = this;
          setBodyWidth(Math.max(2, Math.floor(this.width)));
          observe(this);
          dock();
        });
        _$insertNode4(_el$3, _el$4);
        _$setProp4(_el$3, "flexShrink", 0);
        _$setProp4(_el$3, "height", 1);
        _$setProp4(_el$3, "flexDirection", "row");
        _$setProp4(_el$3, "justifyContent", "space-between");
        _$insertNode4(_el$4, _el$5);
        _$insert4(_el$5, () => bodyWidth() >= 43 ? "\u58A8\u9C7C\u591A\u5A92\u4F53" : "\u58A8\u9C7C");
        _$insert4(_el$3, _$createComponent4(Button, {
          label: "[\u9690\u85CF]",
          action: toggle,
          muted: true
        }), null);
        _$setProp4(_el$6, "flexShrink", 0);
        _$setProp4(_el$6, "height", 1);
        _$setProp4(_el$6, "flexDirection", "row");
        _$setProp4(_el$6, "gap", 1);
        _$insert4(_el$6, _$createComponent4(Button, {
          label: "[\u5C0F\u8BF4]",
          action: () => selectMode("novel"),
          get muted() {
            return mode() !== "novel";
          }
        }), null);
        _$insert4(_el$6, _$createComponent4(Button, {
          label: "[\u89C6\u9891]",
          action: () => selectMode("video"),
          get muted() {
            return mode() !== "video";
          }
        }), null);
        _$insert4(_el$6, _$createComponent4(Button, {
          label: "[\u97F3\u4E50]",
          action: () => selectMode("music"),
          get muted() {
            return mode() !== "music";
          }
        }), null);
        _$insert4(_el$6, _$createComponent4(Button, {
          label: "[\u8D2D\u7269]",
          action: () => selectMode("shopping"),
          get muted() {
            return mode() !== "shopping";
          }
        }), null);
        _$insert4(_el$2, _$createComponent4(Show4, {
          get when() {
            return mode() === "shopping";
          },
          get fallback() {
            return _$createComponent4(Show4, {
              get when() {
                return mode() === "music";
              },
              get fallback() {
                return (() => {
                  var _el$17 = _$createElement4("box");
                  _$setProp4(_el$17, "flexShrink", 0);
                  _$setProp4(_el$17, "height", 1);
                  _$setProp4(_el$17, "flexDirection", "row");
                  _$setProp4(_el$17, "gap", 2);
                  _$insert4(_el$17, _$createComponent4(Button, {
                    get label() {
                      return mode() === "video" ? "[\u89C6\u9891\u5E93]" : "[\u4E66\u67B6]";
                    },
                    action: () => mode() === "video" ? video.shelf() : shelf()
                  }), null);
                  _$insert4(_el$17, _$createComponent4(Button, {
                    get label() {
                      return mode() === "video" ? "[\u641C\u7D22]" : "[\u76EE\u5F55]";
                    },
                    action: () => mode() === "video" ? video.search() : chapters()
                  }), null);
                  _$insert4(_el$17, _$createComponent4(Show4, {
                    get when() {
                      return mode() === "video";
                    },
                    get children() {
                      return _$createComponent4(Button, {
                        label: "[\u70ED\u95E8]",
                        action: () => video.popular()
                      });
                    }
                  }), null);
                  _$insert4(_el$17, _$createComponent4(Show4, {
                    get when() {
                      return mode() === "novel" && book()?.catalog && collect;
                    },
                    get children() {
                      return _$createComponent4(Button, {
                        label: "[\u8865\u91C7]",
                        action: supplement
                      });
                    }
                  }), null);
                  _$insert4(_el$17, _$createComponent4(Button, {
                    label: "[\u5220\u9664]",
                    action: removeBook
                  }), null);
                  return _el$17;
                })();
              },
              get children() {
                var _el$16 = _$createElement4("box");
                _$setProp4(_el$16, "flexShrink", 0);
                _$setProp4(_el$16, "height", 1);
                _$setProp4(_el$16, "flexDirection", "row");
                _$setProp4(_el$16, "gap", 1);
                _$insert4(_el$16, _$createComponent4(Button, {
                  label: "[\u641C\u7D22]",
                  get action() {
                    return music.search;
                  }
                }), null);
                _$insert4(_el$16, _$createComponent4(Button, {
                  label: "[\u7ED3\u679C]",
                  get action() {
                    return music.results;
                  }
                }), null);
                _$insert4(_el$16, _$createComponent4(Button, {
                  get label() {
                    return `[\u961F\u5217${music.state().queue.length}]`;
                  },
                  get action() {
                    return music.queue;
                  }
                }), null);
                _$insert4(_el$16, _$createComponent4(Button, {
                  label: "[\u8D26\u53F7]",
                  get action() {
                    return music.accounts;
                  }
                }), null);
                return _el$16;
              }
            });
          },
          get children() {
            var _el$7 = _$createElement4("box");
            _$setProp4(_el$7, "flexShrink", 0);
            _$setProp4(_el$7, "height", 1);
            _$setProp4(_el$7, "flexDirection", "row");
            _$setProp4(_el$7, "gap", 1);
            _$insert4(_el$7, _$createComponent4(Button, {
              label: "[\u641C\u7D22]",
              get action() {
                return shopping.search;
              }
            }), null);
            _$insert4(_el$7, _$createComponent4(Button, {
              label: "[\u7ED3\u679C]",
              get action() {
                return shopping.results;
              }
            }), null);
            _$insert4(_el$7, _$createComponent4(Button, {
              label: "[\u6536\u85CF]",
              get action() {
                return shopping.favorites;
              }
            }), null);
            return _el$7;
          }
        }), null);
        _$insert4(_el$2, _$createComponent4(Show4, {
          get when() {
            return !compactMode();
          },
          get children() {
            return [(() => {
              var _el$8 = _$createElement4("box");
              _$setProp4(_el$8, "flexShrink", 0);
              _$setProp4(_el$8, "flexDirection", "row");
              _$insert4(_el$8, _$createComponent4(Show4, {
                get when() {
                  return options?.hostMajor === 2;
                },
                get children() {
                  return _$createComponent4(Button, {
                    get label() {
                      return `[\u5BBD\u5EA6 ${widthPercent() === void 0 ? "\u81EA\u52A8" : Math.round(widthPercent() * 10) / 10 + "%"}]`;
                    },
                    action: widthSize
                  });
                }
              }), null);
              _$insert4(_el$8, _$createComponent4(Button, {
                get label() {
                  return `[\u9AD8\u5EA6 ${heightPercent() === void 0 ? "\u81EA\u52A8" : Math.round(heightPercent() * 10) / 10 + "%"}]`;
                },
                action: heightSize
              }), null);
              _$insert4(_el$8, _$createComponent4(Show4, {
                get when() {
                  return _$memo4(() => mode() === "video")() && options?.hostMajor === 2;
                },
                get children() {
                  return _$createComponent4(Button, {
                    get label() {
                      return videoExpanded() ? "[\u8FD8\u539F]" : "[\u5927\u753B\u9762]";
                    },
                    action: toggleVideoSize
                  });
                }
              }), null);
              _$effect4((_p$) => {
                var _v$ = 1 + gap(), _v$2 = mode() === "video" ? 1 : 2;
                _v$ !== _p$.e && (_p$.e = _$setProp4(_el$8, "height", _v$, _p$.e));
                _v$2 !== _p$.t && (_p$.t = _$setProp4(_el$8, "gap", _v$2, _p$.t));
                return _p$;
              }, {
                e: void 0,
                t: void 0
              });
              return _el$8;
            })(), _$createComponent4(Show4, {
              get when() {
                return _$memo4(() => mode() === "video")() && options?.hostMajor === 2;
              },
              get children() {
                var _el$9 = _$createElement4("box");
                _$setProp4(_el$9, "height", 1);
                _$setProp4(_el$9, "flexShrink", 0);
                _$setProp4(_el$9, "flexDirection", "row");
                _$setProp4(_el$9, "gap", 1);
                _$insert4(_el$9, _$createComponent4(Button, {
                  label: "[\u2212]",
                  action: () => stepVideoScale(-1),
                  get muted() {
                    return videoSize().percent <= 25;
                  }
                }), null);
                _$insert4(_el$9, _$createComponent4(Button, {
                  get label() {
                    return `[\u7F29\u653E${videoSize().percent}%]`;
                  },
                  action: videoScaleMenu
                }), null);
                _$insert4(_el$9, _$createComponent4(Button, {
                  label: "[+]",
                  action: () => stepVideoScale(1),
                  get muted() {
                    return videoSize().percent >= videoSize().maximum;
                  }
                }), null);
                _$insert4(_el$9, _$createComponent4(Button, {
                  label: "[\u91CD\u7F6E]",
                  action: () => scaleVideo(100)
                }), null);
                return _el$9;
              }
            })];
          }
        }), null);
        _$insert4(_el$2, _$createComponent4(Show4, {
          get when() {
            return mode() === "music";
          },
          get fallback() {
            return _$createComponent4(Show4, {
              get when() {
                return mode() === "video";
              },
              get children() {
                return _$createComponent4(video.View, {
                  Button,
                  get gap() {
                    return gap();
                  }
                });
              }
            });
          },
          get children() {
            return _$createComponent4(music.View, {
              Button
            });
          }
        }), null);
        _$insert4(_el$2, _$createComponent4(Show4, {
          get when() {
            return mode() === "shopping";
          },
          get children() {
            return _$createComponent4(shopping.View, {
              Button
            });
          }
        }), null);
        _$insert4(_el$2, _$createComponent4(Show4, {
          get when() {
            return mode() === "novel";
          },
          get children() {
            return _$createComponent4(Show4, {
              get when() {
                return book();
              },
              get fallback() {
                return _$createComponent4(Button, {
                  get label() {
                    return busy() ? "\u6B63\u5728\u6253\u5F00\u2026" : "[\u70B9\u51FB\u6253\u5F00\u672C\u5730\u5C0F\u8BF4]";
                  },
                  action: shelf
                });
              },
              get children() {
                return [(() => {
                  var _el$0 = _$createElement4("box");
                  _$setProp4(_el$0, "flexShrink", 0);
                  _$insert4(_el$0, _$createComponent4(Button, {
                    get label() {
                      return book()?.title ?? "";
                    },
                    action: shelf,
                    muted: true
                  }), null);
                  _$insert4(_el$0, _$createComponent4(Button, {
                    get label() {
                      return currentChapter();
                    },
                    action: chapters
                  }), null);
                  _$effect4((_$p) => _$setProp4(_el$0, "height", 2 + gap(), _$p));
                  return _el$0;
                })(), (() => {
                  var _el$1 = _$createElement4("box"), _el$10 = _$createElement4("text");
                  _$insertNode4(_el$1, _el$10);
                  _$setProp4(_el$1, "flexShrink", 0);
                  _$setProp4(_el$10, "width", "100%");
                  _$setProp4(_el$10, "height", "100%");
                  _$setProp4(_el$10, "wrapMode", "none");
                  _$insert4(_el$10, () => pages()[page()].text);
                  _$effect4((_p$) => {
                    var _v$3 = rows(), _v$4 = rows(), _v$5 = theme().text;
                    _v$3 !== _p$.e && (_p$.e = _$setProp4(_el$1, "height", _v$3, _p$.e));
                    _v$4 !== _p$.t && (_p$.t = _$setProp4(_el$1, "minHeight", _v$4, _p$.t));
                    _v$5 !== _p$.a && (_p$.a = _$setProp4(_el$10, "fg", _v$5, _p$.a));
                    return _p$;
                  }, {
                    e: void 0,
                    t: void 0,
                    a: void 0
                  });
                  return _el$1;
                })(), (() => {
                  var _el$11 = _$createElement4("box"), _el$12 = _$createElement4("box"), _el$13 = _$createElement4("box"), _el$14 = _$createElement4("text");
                  _$insertNode4(_el$11, _el$12);
                  _$insertNode4(_el$11, _el$13);
                  _$insertNode4(_el$11, _el$14);
                  _$setProp4(_el$11, "flexShrink", 0);
                  _$setProp4(_el$12, "flexShrink", 0);
                  _$setProp4(_el$12, "height", 1);
                  _$setProp4(_el$12, "flexDirection", "row");
                  _$setProp4(_el$12, "justifyContent", "space-between");
                  _$insert4(_el$12, _$createComponent4(Button, {
                    get label() {
                      return `${page() + 1} / ${pages().length} \u9875 \xB7 ${percentage()}%`;
                    },
                    action: jump,
                    muted: true
                  }));
                  _$setProp4(_el$13, "flexShrink", 0);
                  _$setProp4(_el$13, "height", 1);
                  _$setProp4(_el$13, "flexDirection", "row");
                  _$setProp4(_el$13, "justifyContent", "space-between");
                  _$insert4(_el$13, _$createComponent4(Button, {
                    label: "[\u2039 \u4E0A\u4E00\u9875]",
                    action: () => turn(-1)
                  }), null);
                  _$insert4(_el$13, _$createComponent4(Button, {
                    label: "[\u4E0B\u4E00\u9875 \u203A]",
                    action: () => turn(1)
                  }), null);
                  _$setProp4(_el$14, "height", 1);
                  _$setProp4(_el$14, "wrapMode", "none");
                  _$insert4(_el$14, (() => {
                    var _c$ = _$memo4(() => !!book()?.catalog);
                    return () => _c$() ? `\u6B63\u6587 ${book().catalog.downloaded}/${book().catalog.total} \u7AE0${book().catalog.complete === false ? " \xB7 \u76EE\u5F55\u672A\u5B8C\u6574" : ""}` : "\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u8C03\u6574\u5BBD\u9AD8";
                  })());
                  _$effect4((_p$) => {
                    var _v$6 = 4 + gap(), _v$7 = gap(), _v$8 = theme().textMuted;
                    _v$6 !== _p$.e && (_p$.e = _$setProp4(_el$11, "height", _v$6, _p$.e));
                    _v$7 !== _p$.t && (_p$.t = _$setProp4(_el$11, "paddingTop", _v$7, _p$.t));
                    _v$8 !== _p$.a && (_p$.a = _$setProp4(_el$14, "fg", _v$8, _p$.a));
                    return _p$;
                  }, {
                    e: void 0,
                    t: void 0,
                    a: void 0
                  });
                  return _el$11;
                })()];
              }
            });
          }
        }), null);
        _$effect4((_p$) => {
          var _v$9 = options?.hostMajor === 2 ? "auto" : 0, _v$0 = book() || mode() !== "novel" ? rows() + chromeRows() : void 0, _v$1 = theme().text;
          _v$9 !== _p$.e && (_p$.e = _$setProp4(_el$2, "marginBottom", _v$9, _p$.e));
          _v$0 !== _p$.t && (_p$.t = _$setProp4(_el$2, "height", _v$0, _p$.t));
          _v$1 !== _p$.a && (_p$.a = _$setProp4(_el$4, "fg", _v$1, _p$.a));
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$2;
      }
    });
  }
  api.slots.register({
    order: 50,
    slots: {
      sidebar_content: () => _$createComponent4(Reader, {})
    }
  });
};
var index_default = {
  id: "opencode-moyu",
  tui
};

// src/domain/collection-task.mjs
function collectionKind(query) {
  const text4 = String(query || "").trim();
  if (/^(?:购物|比价|查券|优惠券|shop|shopping)(?:\s|[:：/]|$)/iu.test(text4)) return "shopping";
  if (/京东|淘宝|天猫|慢慢买|低价|领券|比价|优惠券|item\.jd\.com|item\.taobao\.com|detail\.tmall\.com|tb\.cn/iu.test(text4) && !/小说|章节|听歌|音乐|视频/.test(text4)) return "shopping";
  if (/^(?:音乐|music)(?:\s|[:：/]|$)/iu.test(text4)) return "music";
  if (!/^(?:视频|video)(?:\s|[:：/]|$)/iu.test(text4) && /小说|章节|书名|目录链接/u.test(text4)) return "novel";
  if (!/^(?:视频|video)(?:\s|[:：/]|$)/iu.test(text4) && /音乐|歌曲|歌手|歌单|听歌|私人(?:电台|FM)|猜你喜欢|个性推荐|随机刷歌|^(?:我喜欢|喜欢)$|网易云|QQ\s*音乐|酷狗|(?:^|\s)music(?:\s|[:：/]|$)/iu.test(text4)) return "music";
  return /视频|(?:^|\s)video(?:\s|[:：/]|$)|bilibili|哔哩哔哩|B\s*站|youtube|youtu\.be|油管|(?:^|\s)热门(?:\s|$)|搜索热门|BV[\da-zA-Z]{10}/iu.test(text4) ? "video" : "novel";
}

// src/ui/collect.mjs
function collectionQuery(input) {
  return typeof input === "string" ? input.trim().replace(/^\/?moyu(?:\s+|$)/iu, "").trim() : "";
}
function moyuNavigation(input) {
  const query = collectionQuery(input).toLowerCase();
  const sections = { "\u5C0F\u8BF4": "novel", "\u9605\u8BFB": "novel", novel: "novel", "\u89C6\u9891": "video", video: "video", "\u97F3\u4E50": "music", music: "music", "\u8D2D\u7269": "shopping", "\u6BD4\u4EF7": "shopping", shopping: "shopping", shop: "shopping" };
  return Object.hasOwn(sections, query) ? sections[query] : void 0;
}
function musicLoginRequest(input) {
  const query = collectionQuery(input).replace(/\s+/gu, "").replace(/[。！!]+$/u, "");
  const platform = "(qq(?:\u97F3\u4E50|music)?|\u7F51\u6613\u4E91(?:\u97F3\u4E50)?|\u9177\u72D7(?:\u97F3\u4E50)?|netease|kugou)";
  const match = new RegExp(`^(?:\u8BF7)?(?:\u5E2E\u6211)?(?:\u626B\u7801)?\u767B\u5F55${platform}(?:\u8D26\u53F7)?$`, "iu").exec(query) || new RegExp(`^${platform}(?:\u626B\u7801)?\u767B\u5F55$`, "iu").exec(query) || new RegExp(`^(?:login|signin)${platform}$`, "iu").exec(query);
  if (!match) return;
  return /^(?:qq)/i.test(match[1]) ? "qq" : /网易|netease/i.test(match[1]) ? "netease" : "kugou";
}
async function dispatchMoyu(host, input, { login, navigate } = {}) {
  const mode = moyuNavigation(input);
  if (mode) {
    if (!navigate) throw new Error("\u58A8\u9C7C\u529F\u80FD\u5165\u53E3\u5C1A\u672A\u51C6\u5907\u597D\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    await navigate(mode);
    return { kind: "navigation", mode };
  }
  const platform = musicLoginRequest(input);
  if (platform) {
    if (!login) throw new Error("\u97F3\u4E50\u767B\u5F55\u5165\u53E3\u5C1A\u672A\u51C6\u5907\u597D\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u6216\u6253\u5F00 /music \u7684\u8D26\u53F7\u83DC\u5355");
    await login(platform);
    return { kind: "music-login", platform };
  }
  return { kind: "collection", sessionID: await requestCollection(host, input) };
}
function collectionPrompt(query) {
  return `${collectionKind(query) === "shopping" ? "\u8D2D\u7269\u6BD4\u4EF7" : collectionKind(query) === "music" ? "\u97F3\u4E50\u4EFB\u52A1" : collectionKind(query) === "video" ? "\u89C6\u9891\u4EFB\u52A1" : "\u91C7\u96C6\u5C0F\u8BF4"}\uFF1A${query.replace(/\s+/gu, " ")}`;
}
async function requestCollection(host, input) {
  const query = collectionQuery(input);
  if (!query || query.length > 2e3) throw new Error("\u8BF7\u8F93\u5165 1\u20132000 \u5B57\u7684\u5C0F\u8BF4\u3001\u89C6\u9891\u3001\u97F3\u4E50\u6216\u8D2D\u7269\u6BD4\u4EF7\u8981\u6C42");
  const selected = host.ui.model.current();
  if (!selected) throw new Error("\u8BF7\u5148\u5728 OpenCode \u4E2D\u9009\u62E9\u53EF\u7528\u6A21\u578B");
  const model = { providerID: selected.providerID, id: selected.modelID, ...selected.variant ? { variant: selected.variant } : {} };
  const route = host.ui.router.current();
  const session = await host.client.session.create({ title: `Moyu \xB7 ${query.slice(0, 50)}`, location: host.location ?? host.data.location.default(), model, metadata: { origin: "moyu", ...route.type === "session" ? { sourceSessionID: route.sessionID } : {} } });
  const sessionID = session.id;
  host.ui.router.navigate({ type: "session", sessionID });
  await host.client.session.prompt({ sessionID, text: collectionPrompt(query), delivery: "queue", metadata: { origin: "moyu", query, kind: collectionKind(query) } });
  return sessionID;
}

// src/ui/v2.ts
var v2_default = Plugin.define({
  id: "opencode-moyu",
  async setup(context) {
    const abort = new AbortController();
    const cleanup = [];
    const [state, update2] = context.storage.store("reader", { initial: { values: {} } });
    const writes = /* @__PURE__ */ new Set();
    let dialogGeneration = 0;
    let onClose;
    let musicLogin;
    let navigation;
    const finish = () => {
      const callback = onClose;
      onClose = void 0;
      callback?.();
    };
    function clear() {
      ++dialogGeneration;
      context.ui.dialog.clear();
      finish();
    }
    function prompt(props) {
      const generation = dialogGeneration;
      void context.ui.dialog.prompt({ title: props.title, placeholder: props.placeholder }).then((value) => {
        if (generation !== dialogGeneration || abort.signal.aborted) return;
        finish();
        if (value === void 0) props.onCancel?.();
        else props.onConfirm?.(value);
      });
      return null;
    }
    function select2(props) {
      const generation = dialogGeneration;
      const options = props.options.map(({ title, value, description }) => ({ title, value, description }));
      void context.ui.dialog.select({ title: props.title, placeholder: props.placeholder, options, current: props.current }).then((value) => {
        if (generation !== dialogGeneration || abort.signal.aborted) return;
        finish();
        const option = props.options.find((item) => item.value === value);
        if (option) props.onSelect?.(option);
      });
      return null;
    }
    function confirm(props) {
      const generation = dialogGeneration;
      void context.ui.dialog.confirm({ title: props.title, message: props.message }).then((value) => {
        if (generation !== dialogGeneration || abort.signal.aborted) return;
        finish();
        if (value) props.onConfirm?.();
        else props.onCancel?.();
      });
      return null;
    }
    async function collect(query) {
      try {
        const result = await dispatchMoyu(context, query, { navigate(mode) {
          if (!navigation) throw new Error("\u58A8\u9C7C\u529F\u80FD\u5165\u53E3\u5C1A\u672A\u51C6\u5907\u597D\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
          return navigation(mode);
        }, login(platform) {
          if (!musicLogin) throw new Error("\u97F3\u4E50\u767B\u5F55\u5165\u53E3\u5C1A\u672A\u51C6\u5907\u597D\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
          musicLogin(platform);
        } });
        if (result.kind === "collection") context.ui.toast.show({ title: "\u58A8\u9C7C\u91C7\u96C6", message: "\u5DF2\u4EA4\u7ED9\u5F53\u524D\u6A21\u578B\uFF0C\u91C7\u96C6\u7ED3\u679C\u5C06\u5728\u4F1A\u8BDD\u4E2D\u663E\u793A", variant: "info" });
        return result.kind === "collection" ? result.sessionID : void 0;
      } catch (error) {
        context.ui.toast.show({ title: "\u58A8\u9C7C\u8BF7\u6C42\u5931\u8D25", message: error instanceof Error ? error.message : String(error), variant: "error" });
      }
    }
    const bridge = {
      moyu: {
        collect,
        registerNavigation(handler) {
          navigation = handler;
          cleanup.push(() => {
            navigation = void 0;
          });
        },
        registerMusicLogin(handler) {
          musicLogin = handler;
          cleanup.push(() => {
            musicLogin = void 0;
          });
        }
      },
      renderer: context.renderer,
      theme: { get current() {
        return { text: context.theme.text.base, textMuted: context.theme.text.muted, primary: context.theme.text.action.primary.base };
      } },
      kv: {
        ready: true,
        get(key, fallback) {
          return state.values[key] ?? fallback;
        },
        set(key, value) {
          const pending = update2((draft) => {
            draft.values[key] = value;
          });
          writes.add(pending);
          void pending.catch((error) => context.ui.toast.show({ message: `\u9605\u8BFB\u8FDB\u5EA6\u4FDD\u5B58\u5931\u8D25\uFF1A${error}`, variant: "error" })).finally(() => writes.delete(pending));
        }
      },
      state: { path: { directory: context.location?.directory }, provider: [] },
      route: { get current() {
        return { name: context.ui.router.current().type };
      } },
      lifecycle: { signal: abort.signal, onDispose(callback) {
        cleanup.push(callback);
      } },
      ui: {
        toast: context.ui.toast.show,
        DialogPrompt: prompt,
        DialogSelect: select2,
        DialogConfirm: confirm,
        dialog: {
          clear,
          replace(render3, callback) {
            clear();
            onClose = callback;
            render3();
          }
        }
      },
      keymap: {
        registerLayer(layer) {
          context.keymap.layer(() => ({
            // Slash completion and the palette push their own input mode. Keep
            // command discovery global, but pass modal keyboard events through.
            mode: "global",
            commands: layer.commands?.map((command) => ({
              id: command.name,
              title: command.title,
              group: command.category,
              palette: true,
              enabled: command.enabled,
              run: (input, event) => {
                if (event && layer.mode === "base" && context.keymap.mode.current() !== "base") return false;
                event?.preventDefault();
                event?.stopPropagation();
                if (command.slashName === "moyu" && collectionQuery(input)) return collect(input).then(() => {
                });
                return command.run();
              },
              bind: layer.bindings?.find((binding) => binding.cmd === command.name)?.key,
              slash: command.slashName ? { name: command.slashName, ...command.slashName === "moyu" ? { arguments: true } : {} } : void 0
            }))
          }));
        }
      },
      slots: {
        register(registration) {
          cleanup.push(context.ui.slot({ prepend: "sidebar.content", render: registration.slots.sidebar_content }));
        }
      }
    };
    await index_default.tui(bridge, { ...context.options, hostMajor: 2 }, {});
    return async () => {
      abort.abort();
      for (const dispose of cleanup.reverse()) await dispose();
      await Promise.allSettled([...writes]);
    };
  }
});
export {
  v2_default as default
};
