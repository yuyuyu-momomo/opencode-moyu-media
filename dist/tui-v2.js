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
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
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
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
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
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
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
    exports.load = load;
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
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
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
    function load() {
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
    exports.load = load;
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
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
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
    function load() {
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
        const index = sockets.indexOf(socket);
        if (index !== -1) {
          sockets.splice(index, 1);
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
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
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
      get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
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
      const index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
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
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
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
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
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
    exports.applyMask = function applyMask(pattern2, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern2, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p, data);
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
    ReedSolomonEncoder.prototype.encode = function encode(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
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
    exports.toString = function toString(mode) {
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
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
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
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
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
      const data = errorCorrectionLevel.bit << 3 | mask;
      let d = data << 10;
      while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
      }
      return (data << 10 | d) ^ G15_MASK;
    };
  }
});

// node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
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
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
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
    function ByteData(data) {
      this.mode = Mode.BYTE;
      if (typeof data === "string") {
        this.data = new TextEncoder().encode(data);
      } else {
        this.data = new Uint8Array(data);
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
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
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
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open3.empty()) {
          closest = open3.pop();
          u = closest.value;
          cost_of_s_to_u = closest.cost;
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
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
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
    exports.fromString = function fromString(data, version) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version);
      const path = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i = 1; i < path.length - 1; i++) {
        optimizedSegs.push(graph.table[path[i]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(
        getSegmentsFromString(data, Utils.isKanjiModeEnabled())
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
    function setupData(matrix, data) {
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
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
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
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        data.write(buffer);
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
      const data = new Uint8Array(totalCodewords);
      let index = 0;
      let i, r;
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index++] = dcData[r][i];
          }
        }
      }
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index++] = ecData[r][i];
        }
      }
      return data;
    }
    function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
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
    exports.create = function create(data, options) {
      if (typeof data === "undefined" || data === "") {
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
      return createSymbol(data, version, errorCorrectionLevel, mask);
    };
  }
});

// src/ui/v2.ts
import { Plugin } from "@opencode/plugin/tui";

// src/ui/index.tsx
import { createTextNode as _$createTextNode2 } from "@opentui/solid";
import { insertNode as _$insertNode3 } from "@opentui/solid";
import { use as _$use2 } from "@opentui/solid";
import { effect as _$effect3 } from "@opentui/solid";
import { insert as _$insert3 } from "@opentui/solid";
import { setProp as _$setProp3 } from "@opentui/solid";
import { createElement as _$createElement3 } from "@opentui/solid";
import { memo as _$memo3 } from "@opentui/solid";
import { createComponent as _$createComponent3 } from "@opentui/solid";
import { createEffect as createEffect2, createMemo, createSignal as createSignal3, onCleanup as onCleanup2, onMount, Show as Show3 } from "solid-js";
import { ScrollBoxRenderable } from "@opentui/core";
import { dirname as dirname5, resolve as resolve4, basename as basename4 } from "node:path";
import { watch as watch2 } from "node:fs";
import { access as access4 } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { createHash as createHash6 } from "node:crypto";

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
  for (let index = 0; index < ranges.length; index += 2) {
    const start = ranges[index];
    const end = ranges[index + 1];
    if (commonCjkCodePoint >= start && commonCjkCodePoint <= end) {
      return [start, end];
    }
    if (end - start > fastPathEnd - fastPathStart) {
      fastPathStart = start;
      fastPathEnd = end;
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
  partPath(id, index) {
    return join(this.internal, "parts", id, String(index).padStart(6, "0") + ".enc");
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
  async writePart(id, index, text2) {
    await mkdir2(join(this.internal, "parts", id), { recursive: true });
    await atomicWrite(this.partPath(id, index), await this.vault.seal({ text: text2 }));
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
  async readPart(id, index) {
    return (await this.vault.unseal(await readFile2(this.partPath(id, index)))).text;
  }
  async writeBook(id, title, text2) {
    await this.ready();
    const path = join(this.directory, id + ".moyubook");
    await atomicWrite(path, await this.vault.seal({ schemaVersion: 1, resourceId: id, title, text: text2 }));
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
function cleanText(text2) {
  return text2.replace(/\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g, "").replace(/\x1b\[[0-?]*[ -/]*[@-~]/g, "").replace(/\r\n?/g, "\n").replace(/\t/g, "    ").replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f\u202a-\u202e\u2066-\u2069]/g, "").replace(/^\uFEFF/, "");
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
function chaptersOf(text2) {
  const chapters = [];
  let offset = 0, headingEnd = 0;
  for (const line of text2.split("\n")) {
    const title = line.trim();
    if (title.length <= 100 && chapterPattern.test(title)) {
      const previous = chapters.at(-1);
      if (!previous || chapterIdentity(previous.title) !== chapterIdentity(title) || text2.slice(headingEnd, offset).trim()) chapters.push({ title, offset });
      headingEnd = offset + line.length;
    }
    offset += line.length + 1;
  }
  return chapters;
}
function wrapLines(text2, width) {
  const lines = [];
  const widths = /* @__PURE__ */ new Map();
  let line = "", columns = 0, start = 0, offset = 0;
  for (const paragraph of text2.split("\n")) {
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
  for (let index = 0; index < lines.length; index += rows) {
    pages.push({ start: lines[index].start, text: lines.slice(index, index + rows).map((item) => item.text).join("\n") });
  }
  while (pages.length > 1 && !pages.at(-1).text.trim()) pages.pop();
  return pages;
}
function validSize(width, rows) {
  if (!Number.isInteger(width) || width < 2 || !Number.isInteger(rows) || rows < 1) throw new Error("\u5206\u9875\u5C3A\u5BF8\u65E0\u6548");
}
function createPaginator() {
  let previousText, previousWidth, previousRows, lines, pages;
  return (text2, width = 36, rows = 16) => {
    validSize(width, rows);
    if (text2 !== previousText || width !== previousWidth) {
      lines = wrapLines(text2, width);
      previousText = text2;
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
    return { path, title: payload.title, text: payload.text, chapters: chaptersOf(payload.text), resourceId: payload.resourceId };
  }
  if (![".txt", ".md"].includes(extname(path).toLowerCase())) throw new Error("\u76EE\u524D\u652F\u6301 .txt\u3001.md \u548C\u52A0\u5BC6\u8D44\u6599\u6587\u4EF6");
  if (info.size > 32 * 1024 * 1024) throw new Error("\u6587\u4EF6\u8D85\u8FC7 32 MiB\uFF0C\u8BF7\u6309\u5377\u62C6\u5206");
  const text2 = cleanText(decodeBook(await readFile3(path)));
  if (!text2.trim()) throw new Error("\u8FD9\u4E2A\u6587\u4EF6\u6CA1\u6709\u53EF\u9605\u8BFB\u7684\u5185\u5BB9");
  return { path, title: basename(path, extname(path)), text: text2, chapters: chaptersOf(text2) };
}
async function listBooks(directory, { keyFile } = {}) {
  const entries = await readdir2(directory, { withFileTypes: true });
  const plain = entries.filter((item) => item.isFile() && /\.(?:txt|md)$/i.test(item.name)).map((item) => ({ title: basename(item.name, extname(item.name)), path: resolve2(directory, item.name) })).sort((a, b) => a.title.localeCompare(b.title, "zh"));
  const resources = entries.some((item) => item.name === ".moyu") ? await new LibraryStore(directory, { keyFile }).resources() : [];
  const managed = resources.filter((item) => item.kind === "novel").map((item) => ({ title: item.title, path: item.assets.find((asset) => asset.role === "body")?.path, resourceId: item.id })).filter((item) => item.path);
  return [...managed, ...plain.filter((item) => !managed.some((saved) => saved.title === item.title))];
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
    const siblings = scrollbox?.parent?.getChildren() ?? [];
    const position = siblings.indexOf(scrollbox);
    return [.../* @__PURE__ */ new Set([...inside, ...position >= 0 ? siblings.slice(position + 1) : []])];
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
  for (const root of ["miniconda3", "miniforge3", "anaconda3"]) {
    const base = join2(homedir2(), root);
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
  const data = JSON.parse(stdout), video = data.streams?.find((stream) => stream.codec_type === "video");
  if (!video?.width || !video.height) throw new Error("\u6587\u4EF6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u89C6\u9891\u8F68\u9053");
  const duration = Number(data.format?.duration);
  if (!Number.isFinite(duration) || duration <= 0) throw new Error("\u6682\u4E0D\u652F\u6301\u65E0\u6CD5\u786E\u5B9A\u65F6\u957F\u7684\u89C6\u9891");
  const sar = String(video.sample_aspect_ratio || "1:1").split(":").map(Number);
  let width = video.width * (sar[0] > 0 && sar[1] > 0 ? sar[0] / sar[1] : 1), height = video.height;
  const rotation = Number(video.side_data_list?.find((item) => item.rotation !== void 0)?.rotation ?? video.tags?.rotate ?? 0);
  if (Math.abs(rotation) % 180 === 90) [width, height] = [height, width];
  return { path, title: basename2(path, extname2(path)), width, height, duration, hasAudio: data.streams.some((stream) => stream.codec_type === "audio") };
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
    let last;
    for (let x = 0; x < width; x++) {
      const fg = color((y * width + x) * 3), bg = color(((y + 1) * width + x) * 3);
      if (last?.fg === fg && last.bg === bg) last.text += "\u2580";
      else {
        last = { text: "\u2580", fg, bg };
        runs.push(last);
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
    const first = this.chunks[this.head];
    let frame;
    if (first.length - this.offset >= size) {
      frame = first.subarray(this.offset, this.offset + size);
      this.offset += size;
      if (this.offset === first.length) {
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
  resize(columns, rows, filter = this.scaleFilter, force = false) {
    const changed = columns !== this.columns || rows !== this.rows || filter !== this.scaleFilter;
    this.columns = columns;
    this.rows = rows;
    this.scaleFilter = filter;
    if (this.video && (changed || force)) {
      const size = this.frameSize(this.video.width, this.video.height, columns, rows);
      if (!force && this.output === `${size.width}:${size.height}:${filter}`) return;
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
            const text2 = declared ? new TextDecoder(declared).decode(bytes) : decodeBook(bytes);
            resolve5({ url: url.href, text: text2, contentType, cookies });
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
        const next = httpUrl(new URL(result.redirect, url).href);
        if (method !== "GET" && next.origin !== url.origin) throw new Error("\u4E0D\u80FD\u5C06\u767B\u5F55\u8BF7\u6C42\u91CD\u5B9A\u5411\u5230\u5176\u4ED6\u7AD9\u70B9");
        url = next;
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
      const data = JSON.parse(result.text);
      if (data.error) throw new Error("API_ERROR");
      return data;
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
    const data = JSON.parse(result.text);
    if (data.code !== 0) throw new Error(`B \u7AD9\u63A5\u53E3\u8FD4\u56DE ${Number(data.code)}\uFF0C\u5F53\u524D\u6765\u6E90\u4E0D\u53EF\u7528\uFF1B\u8BF7\u68C0\u67E5\u94FE\u63A5\u6216\u7A0D\u540E\u91CD\u8BD5`);
    return data.data;
  }
  async function search({ platform, query, limit = 5, signal }) {
    query = String(query).trim().slice(0, 200);
    if (!query) throw new Error("\u8BF7\u8F93\u5165\u89C6\u9891\u5173\u952E\u8BCD");
    limit = Math.max(1, Math.min(5, Math.floor(Number(limit) || 5)));
    if (platform === "youtube") {
      const data2 = await youtube("search", { part: "snippet", type: "video", q: query, maxResults: limit, fields: "items(id/videoId,snippet(title,channelTitle,description))" }, signal);
      return (data2.items || []).filter((item) => /^[\w-]{11}$/.test(item.id?.videoId)).map((item) => ({ platform, id: item.id.videoId, url: `https://www.youtube.com/watch?v=${item.id.videoId}`, title: short(item.snippet.title), author: short(item.snippet.channelTitle, 80), description: short(item.snippet.description, 200) })).slice(0, limit);
    }
    if (platform !== "bilibili") throw new Error("\u672A\u77E5\u89C6\u9891\u6765\u6E90");
    const data = await bili("/x/web-interface/search/type", { search_type: "video", keyword: query, page: 1, page_size: limit }, signal);
    return (data.result || []).filter((item) => /^BV[\da-zA-Z]{10}$/.test(item.bvid)).slice(0, limit).map((item) => ({ platform, id: item.bvid, url: `https://www.bilibili.com/video/${item.bvid}/`, title: short(item.title), author: short(item.author, 80), description: short(item.description, 200), duration: short(item.duration, 20) }));
  }
  async function info(input, { signal } = {}) {
    const target = videoUrl(input);
    if (target.platform === "youtube") {
      const data2 = await youtube("videos", { part: "snippet,contentDetails,statistics", id: target.id, fields: "items(id,snippet(title,channelTitle,description),contentDetails/duration,statistics/viewCount)" }, signal);
      const item = data2.items?.[0];
      if (!item) throw new Error("YouTube \u672A\u8FD4\u56DE\u8FD9\u4E2A\u89C6\u9891\uFF0C\u53EF\u80FD\u5DF2\u5220\u9664\u3001\u975E\u516C\u5F00\u6216\u4E0D\u53EF\u8BBF\u95EE");
      return { ...target, title: short(item.snippet.title), author: short(item.snippet.channelTitle, 80), description: short(item.snippet.description, 600), duration: short(item.contentDetails?.duration, 40), views: Number(item.statistics?.viewCount) || 0 };
    }
    const data = await bili("/x/web-interface/view", target.id.startsWith("av") ? { aid: target.id.slice(2) } : { bvid: target.id }, signal);
    return { ...target, title: short(data.title), author: short(data.owner?.name, 80), description: short(data.desc, 600), duration: Number(data.duration) || 0, views: Number(data.stat?.view) || 0 };
  }
  async function popular({ page = 1, signal } = {}) {
    page = Math.max(1, Math.min(100, Math.floor(Number(page) || 1)));
    const data = await bili("/x/web-interface/popular", { pn: page, ps: 10 }, signal);
    const items = (data.list || []).filter((item) => /^BV[\da-zA-Z]{10}$/.test(item.bvid)).slice(0, 10).map((item) => ({
      platform: "bilibili",
      id: item.bvid,
      url: `https://www.bilibili.com/video/${item.bvid}/`,
      title: short(item.title),
      author: short(item.owner?.name, 80),
      duration: Number(item.duration) || 0
    }));
    return { items, page, hasMore: !data.no_more && items.length > 0 && page < 100 };
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
    equals: (before, after) => Math.floor(before.position) === Math.floor(after.position) && before.playing === after.playing && before.muted === after.muted && before.loading === after.loading
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
    onState: (next) => {
      const stopped = state().playing && !next.playing;
      setState(next);
      if (stopped) void settings.releasePlayback?.(player.stopping.then(() => {
      })).catch(showError);
    },
    onError: (message) => {
      setError(message);
      api.ui.toast({
        title: "\u50CF\u7D20\u5F71\u9662",
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
  function load(input, resource) {
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
      const next = resource ? await sources.cache.open(resource, {
        signal: abort.signal
      }) : await addLocalVideo(library, input, api.state.path.directory);
      if (request !== token || api.lifecycle.signal.aborted || !settings.active()) {
        await next.release?.();
        return;
      }
      const previous = video();
      await previous?.release?.();
      if (request !== token || api.lifecycle.signal.aborted || !settings.active()) {
        await next.release?.();
        return;
      }
      setVideo(next);
      setFrame([]);
      inline.clear();
      settings.activate();
      api.kv.set(prefix + "last", next.id);
      player.columns = settings.columns();
      player.rows = settings.rows();
      player.scaleFilter = useImage() ? "lanczos" : "neighbor";
      renderKey = useImage() ? protocol() : "pixel";
      await player.load(next, api.kv.get(prefix + next.id, 0));
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
        void load(path);
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
      if (settings.active() && token === selection) await load("", result.resource);
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
        title: "\u89C6\u9891\u5E93 \xB7 \u50CF\u7D20\u5F71\u9662",
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
          else void load("", resources.find((saved) => saved.id === item.value));
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
    if (request === restoring && resource?.kind === "video" && !video() && !busy() && settings.active() && !api.lifecycle.signal.aborted) await load("", resource);
  }
  function remove() {
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
    const nextKey = useImage() ? protocol() : "pixel", filter = useImage() ? "lanczos" : "neighbor";
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
      void player.resize(columns, rows, filter, changed);
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
    remove,
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
function parseQQCallback(text2) {
  const match = /^\s*ptuiCB\s*\(([^]*)\)\s*;?\s*$/.exec(text2);
  if (!match || text2.length > 16384) throw new Error("QQ\u626B\u7801\u54CD\u5E94\u683C\u5F0F\u5F02\u5E38\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210\u4E8C\u7EF4\u7801");
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
    let data;
    try {
      data = JSON.parse(bodyText(result));
    } catch {
      throw new Error("QQ\u97F3\u4E50\u6388\u6743\u7ED3\u679C\u5F02\u5E38\uFF0C\u8BF7\u91CD\u65B0\u626B\u7801");
    }
    const info = data.req?.data, cookies = qqResponseCookies(result.cookies);
    if (data.code || data.req?.code) throw new Error(`QQ\u97F3\u4E50\u62D2\u7EDD\u4E86\u672C\u6B21\u6388\u6743${Number.isInteger(data.req?.code) ? `\uFF08${data.req.code}\uFF09` : ""}\uFF0C\u8BF7\u5728\u5B98\u65B9\u5BA2\u6237\u7AEF\u68C0\u67E5\u8D26\u53F7\u72B6\u6001`);
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
function listPage(list, map, options, total, more) {
  if (!Array.isArray(list)) throw new Error("\u5E73\u53F0\u672A\u8FD4\u56DE\u6B4C\u5355\u5217\u8868\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
  const playlists = list.slice(0, options.limit).flatMap((item) => {
    try {
      return [musicPlaylist(map(item))];
    } catch {
      return [];
    }
  });
  return { playlists, page: options.page, limit: options.limit, total: count(total), hasMore: more !== void 0 ? Boolean(more) : count(total) !== void 0 ? options.offset + list.length < Number(total) : list.length >= options.limit };
}
function checked(data, key) {
  const result = key ? data[key] : data;
  const denied = (code) => code !== void 0 && ![0, 200].includes(Number(code));
  if (denied(data.code) || key && !result || denied(result?.code)) throw new Error("\u5E73\u53F0\u62D2\u7EDD\u4E86\u97F3\u4E50\u67E5\u8BE2\uFF0C\u8BF7\u68C0\u67E5\u767B\u5F55\u72B6\u6001\u6216\u8D44\u6E90\u53EF\u89C1\u6027");
  return key ? result.data : result;
}
function createPlaylistProviders({ json, netease, parseSongs, normalizeTrack, cookies, page: readPage }) {
  const kgMid = randomBytes4(16).toString("hex");
  async function qq(module, method, param, cookie, signal, comm = {}) {
    const values = cookies(cookie), uin = (values.uin || values.wxuin || "0").replace(/^o/, ""), key = values.qqmusic_key || values.qm_keyst || "";
    let gtk = 5381;
    for (const c of key) gtk = gtk * 33 + c.charCodeAt(0) & 2147483647;
    const { data } = await json("https://u.y.qq.com/cgi-bin/musicu.fcg", { signal, method: "POST", body: JSON.stringify({ comm: { ct: 24, cv: 4747474, uin, authst: key, g_tk: gtk, tmeLoginType: 2, format: "json", ...comm }, req: { module, method, param } }), headers: { Cookie: cookie, Referer: "https://y.qq.com/", "Content-Type": "application/json" } });
    return checked(data, "req");
  }
  async function kg(path, params, body, router, cookie, signal) {
    const values = cookies(cookie), query = { dfid: values.dfid || "-", mid: values.mid || values.kg_mid || kgMid, uuid: "-", appid: 1005, clientver: 20489, clienttime: Math.floor(Date.now() / 1e3), ...values.token ? { token: values.token, userid: values.userid || 0 } : {}, ...params };
    const payload = body ? JSON.stringify(body) : "", salt = "OIlwieks28dk2k092lksi2UIkp";
    query.signature = createHash3("md5").update(salt + Object.keys(query).sort().map((key) => `${key}=${query[key]}`).join("") + payload + salt).digest("hex");
    const url = new URL("https://gateway.kugou.com" + path);
    url.search = new URLSearchParams(Object.entries(query).map(([key, value]) => [key, String(value)])).toString();
    const { data } = await json(url.href, { signal, method: body ? "POST" : "GET", body: payload || void 0, headers: { "Content-Type": "application/json", ...router ? { "x-router": router } : {} } });
    if (data.status !== 1 || data.error_code) throw new Error("\u9177\u72D7\u62D2\u7EDD\u4E86\u6B4C\u5355\u67E5\u8BE2\uFF0C\u8BF7\u68C0\u67E5\u767B\u5F55\u72B6\u6001\u6216\u6B4C\u5355\u53EF\u89C1\u6027");
    return data.data;
  }
  async function qqMine(cookie, signal, offset, limit) {
    const values = cookies(cookie), uin = (values.uin || values.wxuin || "").replace(/^o/, "");
    if (!uin || !(values.qqmusic_key || values.qm_keyst)) throw new Error("\u8BF7\u5148\u767B\u5F55 QQ\u97F3\u4E50");
    const url = new URL("https://c.y.qq.com/rsc/fcgi-bin/fcg_user_created_diss");
    url.search = new URLSearchParams({ ct: "24", cv: "4747474", format: "json", platform: "yqq.json", uin, hostuin: uin, sin: String(offset), size: String(limit) }).toString();
    const { data } = await json(url.href, { signal, headers: { Cookie: cookie, Referer: "https://y.qq.com/" } });
    return checked(data).data;
  }
  async function playlists(platform, { mode = "search", query = "", collection = "created", page = 1, limit = 5, cookie = "", signal } = {}) {
    const options = pageOptions(page, limit), values = cookies(cookie);
    if (!["search", "mine"].includes(mode) || !["created", "favorite"].includes(collection)) throw new Error("\u65E0\u6548\u6B4C\u5355\u67E5\u8BE2\u65B9\u5F0F");
    if (mode === "search" && (!query.trim() || query.length > 120)) throw new Error("\u8BF7\u8F93\u5165 1\u2013120 \u5B57\u7684\u6B4C\u5355\u540D\u79F0");
    if (platform === "qq") {
      if (mode === "search") {
        const data2 = await qq("music.search.SearchCgiService", "DoSearchForQQMusicDesktop", { grp: 1, num_per_page: limit, page_num: page, query, search_type: 3 }, cookie, signal, { ct: 19, cv: 1859 });
        return listPage(data2.body?.songlist?.list, (item) => ({ platform, id: item.dissid, title: item.dissname, creator: item.creator?.name, count: item.song_count }), options, data2.meta?.sum);
      }
      const rawLimit = page === 1 ? limit - 1 : limit, rawOffset = Math.max(0, options.offset - 1);
      const mine = await qqMine(cookie, signal, collection === "favorite" ? 0 : rawOffset, collection === "favorite" ? 1 : Math.max(1, rawLimit));
      if (collection === "favorite") {
        if (!mine?.encrypt_uin) throw new Error("QQ\u97F3\u4E50\u767B\u5F55\u6001\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55");
        const data2 = await qq("music.musicasset.PlaylistFavRead", "CgiGetPlaylistFavInfo", { uin: mine.encrypt_uin, offset: options.offset, size: limit }, cookie, signal);
        return listPage(data2.v_list, (item) => ({ platform, id: item.tid ?? item.id, title: item.title, creator: item.nickname, count: item.songnum }), options, data2.total, data2.hasmore);
      }
      const result = listPage(mine?.disslist?.slice(0, rawLimit), (item) => ({ platform, id: item.tid, title: item.diss_name, count: item.song_cnt }), { ...options, offset: rawOffset, limit: rawLimit }, mine?.totoal ?? mine?.total);
      if (page === 1) result.playlists.unshift(musicPlaylist({ platform, id: "liked" }));
      return { ...result, limit };
    }
    if (platform === "netease") {
      if (mode === "search") {
        const url = new URL("https://music.163.com/api/search/get/web");
        url.search = new URLSearchParams({ s: query, type: "1000", offset: String(options.offset), limit: String(limit) }).toString();
        const { data: data3 } = await json(url.href, { signal, headers: { Cookie: cookie, Referer: "https://music.163.com/" } });
        checked(data3);
        return listPage(data3.result?.playlists ?? [], (item) => ({ platform, id: item.id, title: item.name, creator: item.creator?.nickname, count: item.trackCount }), options, data3.result?.playlistCount ?? 0);
      }
      if (!values.MUSIC_U) throw new Error("\u8BF7\u5148\u767B\u5F55\u7F51\u6613\u4E91");
      const account = checked((await netease("nuser/account/get", {}, cookie, signal)).data);
      if (!account.account?.id) throw new Error("\u7F51\u6613\u4E91\u767B\u5F55\u6001\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55");
      const data2 = checked((await netease("user/playlist", { uid: account.account.id, offset: options.offset, limit }, cookie, signal)).data);
      const list = data2.playlist?.filter((item) => collection === "favorite" ? item.subscribed : !item.subscribed);
      return listPage(list, (item) => ({ platform, id: item.id, title: item.name, creator: item.creator?.nickname, count: item.trackCount }), options, void 0, data2.more);
    }
    if (platform !== "kugou") throw new Error("\u4E0D\u652F\u6301\u7684\u6B4C\u5355\u5E73\u53F0");
    if (mode === "search") {
      const data2 = await kg("/v1/search/special", { albumhide: 0, iscorrection: 1, keyword: query, nocollect: 0, page, pagesize: limit, platform: "AndroidFilter" }, void 0, "complexsearch.kugou.com", cookie, signal);
      return listPage(data2.lists, (item) => ({ platform, id: item.gid || item.specialid, legacyId: item.specialid, title: item.specialname, creator: item.nickname, count: item.song_count }), options, data2.total);
    }
    if (!values.userid || !values.token) throw new Error("\u8BF7\u5148\u767B\u5F55\u9177\u72D7");
    if (collection === "favorite") throw new Error("\u9177\u72D7\u76EE\u524D\u8FD4\u56DE\u521B\u5EFA\u548C\u6536\u85CF\u7684\u5408\u5E76\u5217\u8868\uFF0C\u8BF7\u9009\u62E9\u201C\u6211\u7684\u6B4C\u5355\u201D");
    const data = await kg("/v7/get_all_list", { plat: 1, userid: Number(values.userid) }, { userid: values.userid, token: values.token, total_ver: 979, type: 2, page, pagesize: limit }, "cloudlist.service.kugou.com", cookie, signal);
    return listPage(data.info ?? data.list ?? data.lists, (item) => ({ platform, id: item.global_collection_id || item.gid, title: item.name || item.list_name, count: item.count ?? item.songcount }), options, data.total);
  }
  async function playlist(platform, id, { page = 1, limit = 20, cookie = "", signal } = {}) {
    const initial = musicPlaylist({ platform, id }), options = pageOptions(page, limit);
    if (platform === "kugou" && /^\d+$/.test(id)) {
      const response = await readPage(initial.sourceUrl, { signal, asBytes: true });
      const html = (response.text ?? response.bytes.toString("utf8")).replace(/\\"/g, '"');
      const globalId = /["']global_collection_id["']\s*:\s*["'](collection_[\w-]+)["']/.exec(html)?.[1];
      if (!globalId) throw new Error("\u672A\u89E3\u6790\u5230\u9177\u72D7\u6B4C\u5355\uFF0C\u8BF7\u5728\u6B4C\u5355\u641C\u7D22\u4E2D\u6309\u540D\u79F0\u9009\u62E9");
      const result = await playlist(platform, globalId, { page, limit, cookie, signal });
      return { ...result, info: musicPlaylist({ ...result.info, legacyId: id }) };
    }
    let info, tracks, total, hasMore, rawCount;
    if (platform === "qq") {
      const liked = id === "liked", mine = liked ? await qqMine(cookie, signal, 0, 1) : void 0;
      if (liked && !mine?.encrypt_uin) throw new Error("QQ\u97F3\u4E50\u767B\u5F55\u6001\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55");
      const data = await qq("music.srfDissInfo.DissInfo", "CgiGetDiss", { disstid: liked ? 0 : Number(id), dirid: liked ? 201 : 0, tag: liked, song_begin: options.offset, song_num: limit, userinfo: liked, orderlist: true, onlysonglist: false, ...liked ? { enc_host_uin: mine.encrypt_uin } : {} }, cookie, signal);
      if (data.code || !Array.isArray(data.songlist)) throw new Error("QQ\u97F3\u4E50\u672A\u8FD4\u56DE\u6B4C\u66F2\uFF0C\u8BF7\u68C0\u67E5\u6B4C\u5355\u53EF\u89C1\u6027");
      info = { ...initial, title: data.dirinfo?.title || data.dirinfo?.dissname, creator: data.dirinfo?.creator?.nick, count: data.total_song_num };
      rawCount = data.songlist.length;
      tracks = parseSongs(platform, { data: { song: { list: data.songlist.slice(0, limit) } } });
      total = data.total_song_num;
      hasMore = Boolean(data.hasmore);
    } else if (platform === "netease") {
      const data = checked((await netease("v3/playlist/detail", { id, n: 1e3, s: 0 }, cookie, signal)).data), source = data.playlist;
      if (!source || !Array.isArray(source.trackIds)) throw new Error("\u7F51\u6613\u4E91\u672A\u8FD4\u56DE\u6B4C\u66F2\uFF0C\u8BF7\u68C0\u67E5\u6B4C\u5355\u53EF\u89C1\u6027");
      info = { ...initial, title: source.name, creator: source.creator?.nickname, count: source.trackCount };
      const ids = source.trackIds.slice(options.offset, options.offset + limit).map((track) => ({ id: track.id }));
      const songs = ids.length ? checked((await netease("v3/song/detail", { c: JSON.stringify(ids) }, cookie, signal)).data).songs : [];
      rawCount = ids.length;
      tracks = parseSongs(platform, { result: { songs } });
      total = source.trackCount ?? source.trackIds.length;
      hasMore = options.offset + ids.length < source.trackIds.length;
    } else {
      const data = await kg("/pubsongs/v2/get_other_list_file_nofilt", { area_code: 1, begin_idx: options.offset, plat: 1, type: 1, mode: 1, personal_switch: 1, extend_fields: "abtags,hot_cmt,popularization", pagesize: limit, global_collection_id: id }, void 0, void 0, cookie, signal);
      if (!Array.isArray(data.songs)) throw new Error("\u9177\u72D7\u672A\u8FD4\u56DE\u6B4C\u66F2\uFF0C\u8BF7\u68C0\u67E5\u6B4C\u5355\u53EF\u89C1\u6027");
      let detail = data.list_info || {};
      if (!detail.name && !detail.specialname) {
        const metadata = await kg("/v3/get_list_info", {}, { data: [{ global_collection_id: id }], userid: Number(cookies(cookie).userid || 0), token: cookies(cookie).token || "" }, "pubsongs.kugou.com", cookie, signal);
        detail = Array.isArray(metadata) ? metadata[0] || {} : metadata;
      }
      info = { ...initial, title: detail.name || detail.list_name || detail.specialname, creator: detail.nickname || detail.username, count: data.count };
      rawCount = data.songs.length;
      total = data.count;
      hasMore = options.offset + rawCount < Number(total);
      tracks = data.songs.slice(0, limit).flatMap((song) => {
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
    const data = await qq("music.radioProxy.MbTrackRadioSvr", "get_radio_track", { id: 99, num: limit, from: 0, scene: 0, song_ids: [] }, cookie, signal);
    if (!Array.isArray(data.tracks)) throw new Error("QQ\u97F3\u4E50\u6682\u672A\u8FD4\u56DE\u4E2A\u6027\u63A8\u8350\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    const seen = new Set(exclude.slice(-100)), raw = data.tracks.slice(0, limit);
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
function parseSearch(platform, data) {
  const list = platform === "netease" ? data.result?.songs : platform === "qq" ? data.data?.song?.list : data.data?.lists;
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
var md5 = (text2) => createHash4("md5").update(text2).digest("hex");
function neteaseForm(payload, secret = randomBytes5(12).toString("base64")) {
  const encrypt = (text2, key) => {
    const cipher = createCipheriv3("aes-128-cbc", key, "0102030405060708");
    return Buffer.concat([cipher.update(text2), cipher.final()]).toString("base64");
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
    let data;
    try {
      data = JSON.parse(result.text ?? result.bytes.toString("utf8"));
    } catch {
      throw new Error("\u5E73\u53F0\u8FD4\u56DE\u4E86\u975E JSON \u54CD\u5E94\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    }
    return { data, cookies: result.cookies || [] };
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
    const { data } = await json(url, { signal, headers: { Cookie: cookie, Referer: musicPlatform(platform).home } });
    return parseSearch(platform, data).slice(0, limit);
  }
  async function resolve5(input, { cookie = "", signal } = {}) {
    const track = musicTrack(input), values = cookieValues(cookie);
    if (track.platform === "netease") {
      const { data: data2 } = await netease("song/enhance/player/url/v1", { ids: JSON.stringify([track.id]), level: "higher", encodeType: "mp3" }, cookie, signal);
      const item = data2.data?.[0];
      return playResult(item?.url, item?.freeTrialInfo, item?.freeTrialInfo ? (item.freeTrialInfo.end - item.freeTrialInfo.start) / 1e3 : item?.time / 1e3);
    }
    if (track.platform === "qq") {
      const uin = (values.uin || values.wxuin || "0").replace(/^o/, ""), key = values.qqmusic_key || values.qm_keyst || "";
      let gtk = 5381;
      for (const c of key) gtk = gtk + (gtk << 5) + c.charCodeAt(0) & 2147483647;
      const payload = { comm: { uin, authst: key, g_tk: gtk, ct: 24, cv: 0, format: "json" }, req_1: { module: "vkey.GetVkeyServer", method: "CgiGetVkey", param: { guid: "10000", songmid: [track.id], songtype: [0], uin, loginflag: cookie ? 1 : 0, platform: "20", filename: [`M500${track.mediaId || track.id}.mp3`] } } };
      const { data: data2 } = await json("https://u.y.qq.com/cgi-bin/musicu.fcg", { signal, method: "POST", body: JSON.stringify(payload), headers: { Cookie: cookie, Referer: "https://y.qq.com/", "Content-Type": "application/json" } });
      const result = data2.req_1?.data, item = result?.midurlinfo?.[0];
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
    const { data } = await json(urlWith("https://gateway.kugou.com/v5/url", params), { signal, headers: { "x-router": "trackercdn.kugou.com", mid, dfid: params.dfid } });
    if (data["SSA-CODE"] || data.data?.["SSA-CODE"] || data.error_code === 30020) throw new Error("\u9177\u72D7\u8981\u6C42\u989D\u5916\u9A8C\u8BC1\uFF0C\u8BF7\u5148\u5728\u5B98\u65B9 App \u5B8C\u6210\u9A8C\u8BC1\u540E\u91CD\u8BD5");
    return playResult(Array.isArray(data.url) ? data.url[0] : data.url, data.is_free_part, data.timeLength);
  }
  async function beginLogin(platform, { signal } = {}) {
    musicPlatform(platform);
    if (platform === "qq") return qqLogin.begin({ signal });
    if (platform === "netease") {
      const { data: data2 } = await netease("login/qrcode/unikey", { type: 3 }, "", signal);
      const key2 = data2.unikey ?? data2.data?.unikey;
      if (!key2) throw new Error("\u7F51\u6613\u4E91\u672A\u8FD4\u56DE\u626B\u7801\u51ED\u636E\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      return { platform, key: key2, url: urlWith("https://music.163.com/login", { codekey: key2 }) };
    }
    const session = { platform, mid: randomBytes5(16).toString("hex") };
    const { data } = await kugou("/v2/qrcode", { appid: 1001, type: 1, plat: 4, srcappid: 2919, qrcode_txt: "https://h5.kugou.com/apps/loginQRCode/html/index.html?appid=1005&" }, session, signal);
    const key = data.data?.qrcode;
    if (!key) throw new Error("\u9177\u72D7\u672A\u8FD4\u56DE\u626B\u7801\u51ED\u636E\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
    return { ...session, key, url: urlWith("https://h5.kugou.com/apps/loginQRCode/html/index.html", { qrcode: key }) };
  }
  async function checkLogin(session, { signal, onProgress = (_status) => {
  } } = {}) {
    if (session.platform === "qq") return qqLogin.check(session, { signal, onProgress });
    if (session.platform === "netease") {
      const { data: data2, cookies } = await netease("login/qrcode/client/login", { key: session.key, type: 3 }, "", signal);
      if (data2.code === 803) {
        const cookie = cookies.map((c) => c.split(";")[0]).join("; ");
        if (!cookieValues(cookie).MUSIC_U) throw new Error("\u626B\u7801\u5B8C\u6210\u4F46\u5E73\u53F0\u672A\u8FD4\u56DE\u6709\u6548\u767B\u5F55\u6001");
        return { status: "authorized", cookie };
      }
      return { status: data2.code === 800 ? "expired" : data2.code === 802 ? "scanned" : data2.code === 801 ? "waiting" : "failed" };
    }
    musicPlatform(session.platform);
    const { data } = await kugou("/v2/get_userinfo_qrcode", { plat: 4, appid: 1005, srcappid: 2919, qrcode: session.key, dev: "Web" }, session, signal);
    const info = data.data;
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
    for (let index = 0; index < Math.max(0, ...batches.map((batch) => batch.length)); index++) for (const batch of batches) if (batch[index]) tracks.push(batch[index]);
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
      selected = selected.filter((item, index) => configured[index].configured);
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
    for (let index = 0; index < Math.max(0, ...pages.map((batch) => batch.playlists.length)); index++) for (const batch of pages) if (batch.playlists[index]) playlists.push(batch.playlists[index]);
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
      title: "\u6478\u9C7C\u97F3\u4E50",
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
  function choosePlatform(next) {
    searchAbort?.abort();
    searchAbort = void 0;
    setSearching(false);
    setResults([]);
    setSearchError("");
    setPlatform(next);
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
      data,
      query
    } = saved;
    settings.dialog(() => _$createComponent2(api.ui.DialogSelect, {
      get title() {
        return `${query.mode === "mine" ? query.collection === "favorite" ? "\u6536\u85CF\u6B4C\u5355" : "\u6211\u7684\u6B4C\u5355" : "\u6B4C\u5355\u641C\u7D22"} \xB7 \u7B2C ${data.page} \u9875`;
      },
      placeholder: "\u9009\u62E9\u6B4C\u5355\u67E5\u770B\u6B4C\u66F2\uFF0C\u8F93\u5165\u540D\u79F0\u53EF\u8FC7\u6EE4\u672C\u9875",
      get options() {
        return [...data.playlists.map((item) => ({
          title: `[${musicPlatform(item.platform).name}] ${item.title}`,
          value: playlistKey(item),
          description: `${item.count === void 0 ? "\u6B4C\u66F2\u6570\u672A\u77E5" : item.count + " \u9996"}${item.creator ? " \xB7 " + item.creator : ""}`
        })), ...data.page > 1 ? [{
          title: "\u2039 \u4E0A\u4E00\u9875",
          value: "@prev",
          description: "\u67E5\u8BE2\u4E0A\u4E00\u9875\u6B4C\u5355"
        }] : [], ...data.hasMore ? [{
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
        if (item.value === "@prev" || item.value === "@next") return loadPlaylistList(query, data.page + (item.value === "@prev" ? -1 : 1));
        const selected = data.playlists.find((playlist) => playlistKey(playlist) === item.value);
        if (selected) loadPlaylist(selected);
      }
    }));
  }
  function loadPlaylistList(query, page = 1) {
    void queryPlaylist(async (signal) => {
      const data = await service.playlists({
        ...query,
        page,
        limit: 10,
        signal
      });
      if (signal.aborted || api.lifecycle.signal.aborted) return;
      lastPlaylistList = {
        query,
        data
      };
      lastPlaylist = void 0;
      const errors = data.errors.map((item) => `${musicPlatform(item.platform).name}\uFF1A${item.message}`).join("\uFF1B");
      setPlaylistNotice(errors || `\u6B4C\u5355\u7B2C ${page} \u9875 \xB7 ${data.playlists.length} \u4E2A`);
      if (!data.playlists.length && !data.hasMore) {
        toast(errors || "\u6CA1\u6709\u627E\u5230\u6B4C\u5355", Boolean(errors));
        return;
      }
      if (settings.active() && settings.canDialog()) showPlaylistList();
      else toast("\u6B4C\u5355\u5DF2\u52A0\u8F7D\uFF0C\u70B9\u51FB\u300C\u6B4C\u5355\u300D\u7EE7\u7EED\u67E5\u770B");
    });
  }
  function showPlaylist() {
    const data = lastPlaylist;
    if (!data) return playlistMenu();
    settings.dialog(() => _$createComponent2(api.ui.DialogSelect, {
      get title() {
        return `${data.info.title} \xB7 \u7B2C ${data.page} \u9875`;
      },
      get placeholder() {
        return `\u672C\u9875 ${data.tracks.length} \u9996${data.total === void 0 ? "" : " / \u5171 " + data.total + " \u9996"}\uFF0C\u9009\u62E9\u6B4C\u66F2\u53EF\u64AD\u653E\u6216\u52A0\u5165\u961F\u5217`;
      },
      get options() {
        return [...data.tracks.length ? [{
          title: "\uFF0B \u672C\u9875\u6B4C\u66F2\u52A0\u5165\u961F\u5217",
          value: "@add",
          description: `\u52A0\u5165\u672C\u9875 ${data.tracks.length} \u9996\uFF0C\u6309\u6B4C\u66F2\u53BB\u91CD\uFF0C\u4FDD\u7559\u5F53\u524D\u64AD\u653E`
        }] : [], ...data.tracks.map((track) => ({
          title: track.title,
          value: trackKey(track),
          description: `${track.artist} \xB7 ${mediaTime(track.duration)}`
        })), ...data.page > 1 ? [{
          title: "\u2039 \u4E0A\u4E00\u9875\u6B4C\u66F2",
          value: "@prev",
          description: "\u6BCF\u9875 20 \u9996"
        }] : [], ...data.hasMore ? [{
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
        if (item.value === "@prev" || item.value === "@next") return loadPlaylist(data.info, data.page + (item.value === "@prev" ? -1 : 1));
        if (item.value === "@add") {
          void controller.addMany(data.tracks).then((added) => toast(`\u5DF2\u52A0\u5165 ${added.added} \u9996${added.duplicates ? "\uFF0C\u8DF3\u8FC7 " + added.duplicates + " \u9996\u91CD\u590D\u6B4C\u66F2" : ""}`)).catch(failed);
          return;
        }
        const track = data.tracks.find((track2) => trackKey(track2) === item.value);
        if (track) action(track);
      }
    }));
  }
  function loadPlaylist(playlist, page = 1) {
    void queryPlaylist(async (signal) => {
      const data = await service.playlist(playlist.platform, playlist.id, {
        page,
        limit: 20,
        signal
      });
      if (signal.aborted || api.lifecycle.signal.aborted) return;
      if (playlist.legacyId) data.info = musicPlaylist({
        ...data.info,
        legacyId: playlist.legacyId
      });
      lastPlaylist = data;
      setPlaylistNotice(`${data.info.title} \xB7 \u7B2C ${page} \u9875${data.unavailable ? " \xB7 " + data.unavailable + " \u9996\u6682\u4E0D\u53EF\u7528" : ""}`);
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
  function remove() {
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
              action: remove
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
    remove,
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

// src/runtime/media-client.mjs
import { createConnection } from "node:net";
import { randomUUID as randomUUID4 } from "node:crypto";

// src/runtime/channel.mjs
import { createHash as createHash5 } from "node:crypto";
import { realpath as realpath3, mkdir as mkdir7 } from "node:fs/promises";
import { join as join11 } from "node:path";
import { tmpdir as tmpdir2 } from "node:os";
var MAX_FRAME = 512 * 1024;
async function runtimeAddress(library) {
  await library.ready();
  const directory = await realpath3(library.directory), key = await library.vault.key();
  const identity = process.platform === "win32" ? directory.toLowerCase() : directory;
  const scope = createHash5("sha256").update(identity).update(key).digest("hex").slice(0, 32);
  if (process.platform === "win32") return { path: "\\\\.\\pipe\\opencode-moyu-" + scope, scope };
  if (process.platform === "linux") return { path: "\0opencode-moyu-" + scope, scope };
  const folder = join11(tmpdir2(), `moyu-${process.getuid?.() ?? "user"}-${scope}`);
  await mkdir7(folder, { recursive: true, mode: 448 });
  return { path: join11(folder, "media.sock"), scope };
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
    let index;
    while ((index = buffer.indexOf("\n")) >= 0) {
      const frame = buffer.slice(0, index);
      buffer = buffer.slice(index + 1);
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
  const data = JSON.parse(stdout), duration = Number(data.format?.duration);
  if (!data.streams?.some((stream) => stream.codec_type === "audio") || !Number.isFinite(duration) || duration <= 0) throw new Error("\u5E73\u53F0\u8FD4\u56DE\u7684\u6587\u4EF6\u6CA1\u6709\u53EF\u64AD\u653E\u7684\u97F3\u8F68");
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
    const next = Math.max(0, Math.min(100, Math.round(Number(volume) || 0)));
    if (next === this.volume) return;
    const playing = this.playing;
    const stopped = this.pause(), generation = this.generation;
    await stopped;
    if (generation !== this.generation) return;
    this.volume = next;
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
      let index = Math.max(0, session.index + (direction < 0 ? -1 : 1));
      if (index >= session.history.length) {
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
            index -= trim;
          }
          break;
        }
      }
      if (index >= session.history.length) throw new Error("QQ\u97F3\u4E50\u6682\u672A\u8FD4\u56DE\u65B0\u7684\u63A8\u8350\uFF0C\u8BF7\u7A0D\u540E\u70B9\u4E0B\u4E00\u9996\u91CD\u8BD5");
      session.index = index;
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
    const index = Math.max(0, this.queue.findIndex((track) => trackKey(track) === this.currentKey));
    const next = natural && this.repeat === "one" ? index : (index + direction + this.queue.length) % this.queue.length;
    const target = this.queue[next], stopped = this.pause(), generation = this.generation;
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
    const update = { ...state };
    if (peer.queue === state.queue) delete update.queue;
    if (peer.preferences === state.preferences) delete update.preferences;
    peer.queue = state.queue;
    peer.preferences = state.preferences;
    return peer.channel.send({ type: "state", state: update });
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
      const next = { ...this.preferences, [key]: value };
      await this.service.settings.write("preferences", next);
      this.preferences = next;
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
  const [visible, setVisible] = createSignal3(true);
  const [mode, setMode] = createSignal3("novel");
  const [book, setBook] = createSignal3();
  const [offset, setOffset] = createSignal3(0);
  const [height, setHeight] = createSignal3(api.renderer.height);
  const [width, setWidth] = createSignal3(api.renderer.width);
  const [bodyWidth, setBodyWidth] = createSignal3(36);
  const [busy, setBusy] = createSignal3(false);
  const [novelHeightPercent, setNovelHeightPercent] = createSignal3();
  const [novelWidthPercent, setNovelWidthPercent] = createSignal3();
  const [videoHeightPercent, setVideoHeightPercent] = createSignal3(100);
  const [videoWidthPercent, setVideoWidthPercent] = createSignal3(60);
  const [videoExpanded, setVideoExpanded] = createSignal3(false);
  const [videoScalePercent, setVideoScalePercent] = createSignal3(100);
  const [expandedScalePercent, setExpandedScalePercent] = createSignal3(100);
  const [viewportHeight, setViewportHeight] = createSignal3();
  const [hostRows, setHostRows] = createSignal3(0);
  const onboarding = createMemo(() => options?.hostMajor === 2 || !api.kv.get("dismissed_getting_started", false) && !api.state.provider.some((provider) => provider.id !== "opencode" || Object.values(provider.models).some((model) => model.cost?.input !== 0)));
  const chromeRows = () => mode() === "music" ? 2 : (height() < 40 ? 9 : 12) + (mode() === "video" && options?.hostMajor === 2 ? 1 : 0);
  const minimumRows = () => options?.hostMajor !== 2 && height() < 40 ? 2 : 4;
  const availableRows = createMemo(() => Math.max(minimumRows(), viewportHeight() === void 0 ? height() - (onboarding() ? 31 : 20) : viewportHeight() - chromeRows() - hostRows()));
  const normalVideoSize = createMemo(() => scaledVideoSize(videoWidthPercent() ?? Math.max(20, Math.min(75, (bodyWidth() + 4) / Math.max(1, width()) * 100)), videoHeightPercent() ?? Math.min(fixedRows ?? 24, availableRows()) / availableRows() * 100, videoScalePercent()));
  const videoSize = createMemo(() => videoExpanded() ? scaledVideoSize(75, 100, expandedScalePercent()) : normalVideoSize());
  const heightPercent = createMemo(() => mode() === "music" ? 100 : mode() === "video" ? !videoExpanded() && videoHeightPercent() === void 0 && videoScalePercent() === 100 ? void 0 : videoSize().height : novelHeightPercent());
  const widthPercent = createMemo(() => mode() === "music" ? 33 : mode() === "video" ? !videoExpanded() && videoWidthPercent() === void 0 && videoScalePercent() === 100 ? void 0 : videoSize().width : novelWidthPercent());
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
  const progressKey = (path) => prefix2 + "position:" + createHash6("sha256").update(path).digest("hex");
  function save() {
    const current = book();
    if (current) api.kv.set(progressKey(current.path), offset());
  }
  function toast(message, variant = "info") {
    api.ui.toast({
      title: "\u6478\u9C7C\u9605\u8BFB",
      message,
      variant,
      duration: 3500
    });
  }
  function closeDialog() {
    ownsDialog = false;
    api.ui.dialog.clear();
  }
  function dialog(render) {
    ownsDialog = true;
    api.ui.dialog.replace(render, () => {
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
  await music.ready;
  moyu?.registerMusicLogin?.((platform) => {
    if (api.lifecycle.signal.aborted) return;
    selectMode("music");
    setVisible(true);
    api.kv.set(prefix2 + "visible", true);
    music.login(platform);
  });
  function selectMode(next) {
    save();
    setMode(next);
    api.kv.set(prefix2 + "mode", next);
  }
  async function open3(path, quiet = false) {
    const token = ++request;
    setBusy(true);
    try {
      let next = await loadBook(path, api.state.path.directory || process.cwd(), {
        keyFile
      });
      if (!next.resourceId) next = await library.importLocal(next);
      if (token !== request || api.lifecycle.signal.aborted) return;
      save();
      const stored = api.kv.get(progressKey(next.path), 0);
      setOffset(Number.isFinite(stored) ? Math.max(0, Math.min(stored, next.text.length - 1)) : 0);
      setBook(next);
      api.kv.set(prefix2 + "last", next.path);
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
    if (mode() === "video") {
      video.seek(direction * 10);
      return;
    }
    if (mode() === "music") {
      void music.seek(direction * 10);
      return;
    }
    if (!book() || busy()) return;
    const next = Math.max(0, Math.min(pages().length - 1, page() + direction));
    setOffset(pages()[next].start);
    save();
  }
  function toggle() {
    const next = !visible();
    setVisible(next);
    api.kv.set(prefix2 + "visible", next);
    if (!next && ownsDialog) closeDialog();
    if (next && api.route.current.name !== "session") toast("\u9605\u8BFB\u9762\u677F\u4F4D\u4E8E\u4F1A\u8BDD\u53F3\u4FA7\u680F\uFF1B\u8FDB\u5165\u4F1A\u8BDD\u540E\u663E\u793A");
  }
  function promptFile() {
    dialog(() => _$createComponent3(api.ui.DialogPrompt, {
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
    dialog(() => _$createComponent3(api.ui.DialogPrompt, {
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
    dialog(() => _$createComponent3(api.ui.DialogPrompt, {
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
      dialog(() => _$createComponent3(api.ui.DialogSelect, {
        title: "\u4E66\u67B6 \xB7 \u6478\u9C7C\u9605\u8BFB",
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
            description: item.path
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
    return mode() === "music" ? music.queue() : mode() === "video" ? video.shelf() : shelf();
  }
  function chapters() {
    if (mode() !== "novel") selectMode("novel");
    const current = book();
    if (!current) return promptFile();
    const items = current.chapters.length ? current.chapters : chaptersOf(current.text);
    if (!items.length) return toast("\u6CA1\u6709\u8BC6\u522B\u5230\u7AE0\u8282\u6807\u9898\uFF0C\u53EF\u7528\u300C\u8DF3\u8F6C\u8FDB\u5EA6\u300D\u5B9A\u4F4D");
    dialog(() => _$createComponent3(api.ui.DialogSelect, {
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
          value: item.offset
        }));
      },
      onSelect: (item) => {
        closeDialog();
        setOffset(Number(item.value));
        save();
      }
    }));
  }
  function jump() {
    if (mode() === "music") return music.jump();
    if (mode() === "video") return video.jump();
    if (!book()) return promptFile();
    dialog(() => _$createComponent3(api.ui.DialogPrompt, {
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
      const next = scaledVideoSize(75, 100, percent);
      setExpandedScalePercent(next.percent);
      api.kv.set(prefix2 + "video:expandedScalePercent", next.percent);
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
      const next = scaledVideoSize(videoWidthPercent(), videoHeightPercent(), percent);
      setVideoScalePercent(next.percent);
      api.kv.set(prefix2 + "video:scalePercent", next.percent);
    }
  }
  function stepVideoScale(direction) {
    const current = videoSize();
    const next = Math.max(25, Math.min(current.maximum, current.percent + direction * 10));
    if (next === current.percent) return toast(direction > 0 ? videoExpanded() ? "\u5DF2\u8FBE\u5230\u5F53\u524D\u7EC8\u7AEF\u53EF\u7528\u7A7A\u95F4\u4E0A\u9650" : "\u5DF2\u8FBE\u5230\u5F53\u524D\u64AD\u653E\u533A\u4E0A\u9650\uFF0C\u53EF\u4F7F\u7528\u300C\u5927\u753B\u9762\u300D\u589E\u52A0\u7A7A\u95F4" : "\u5DF2\u8FBE\u5230\u6700\u5C0F\u7F29\u653E\u6BD4\u4F8B");
    scaleVideo(next);
  }
  function customVideoScale() {
    const maximum = videoSize().maximum;
    dialog(() => _$createComponent3(api.ui.DialogPrompt, {
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
    dialog(() => _$createComponent3(api.ui.DialogSelect, {
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
    dialog(() => _$createComponent3(api.ui.DialogPrompt, {
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
    dialog(() => _$createComponent3(api.ui.DialogSelect, {
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
    dialog(() => _$createComponent3(api.ui.DialogSelect, {
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
    dialog(() => _$createComponent3(api.ui.DialogSelect, {
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
    if (mode() === "music") return music.remove();
    if (mode() === "video") return video.remove();
    const current = book();
    if (!current?.resourceId) return toast("\u8BF7\u5148\u5728\u4E66\u67B6\u6253\u5F00\u8981\u5220\u9664\u7684\u5C0F\u8BF4");
    dialog(() => _$createComponent3(api.ui.DialogConfirm, {
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
      title: "\u6478\u9C7C\u9605\u8BFB\uFF1A\u663E\u793A / \u9690\u85CF",
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
      title: "\u6478\u9C7C\u9605\u8BFB\uFF1A\u6253\u5F00\u4E66\u67B6",
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
      title: "\u6478\u9C7C\u97F3\u4E50\uFF1A\u6253\u5F00\u805A\u5408\u64AD\u653E\u5668",
      slashName: "music",
      run: () => {
        selectMode("music");
        setVisible(true);
        api.kv.set(prefix2 + "visible", true);
      }
    }, {
      name: "moyu.shelf",
      title: "\u6478\u9C7C\u9605\u8BFB\uFF1A\u4E66\u67B6 / \u6253\u5F00\u6587\u4EF6",
      slashName: "read",
      run: shelf
    }, {
      name: "moyu.chapters",
      title: "\u6478\u9C7C\u9605\u8BFB\uFF1A\u7AE0\u8282\u76EE\u5F55",
      slashName: "chapters",
      run: chapters
    }, {
      name: "moyu.jump",
      title: "\u6478\u9C7C\u9605\u8BFB\uFF1A\u8DF3\u8F6C\u8FDB\u5EA6",
      run: jump
    }, {
      name: "moyu.size",
      title: "\u6478\u9C7C\u9605\u8BFB\uFF1A\u8C03\u6574\u9605\u8BFB\u533A\u57DF\u5927\u5C0F",
      slashName: "readsize",
      run: size
    }, {
      name: "moyu.delete",
      title: "\u6478\u9C7C\u9605\u8BFB\uFF1A\u5220\u9664\u5F53\u524D\u8D44\u6599",
      run: removeBook
    }, {
      name: "moyu.next",
      title: "\u6478\u9C7C\u9605\u8BFB\uFF1A\u4E0B\u4E00\u9875",
      enabled: () => visible() && api.route.current.name === "session",
      run: () => turn(1)
    }, {
      name: "moyu.prev",
      title: "\u6478\u9C7C\u9605\u8BFB\uFF1A\u4E0A\u4E00\u9875",
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
    const [layout, setLayout] = createSignal3();
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
      for (let parent = node.parent; parent; parent = parent.parent) {
        if (!(parent instanceof ScrollBoxRenderable)) continue;
        scrollbox = parent;
        viewport = parent.viewport;
        const sizing = sidebarLayout(parent);
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
        var _el$ = _$createElement3("text");
        _$setProp3(_el$, "selectable", false);
        _$setProp3(_el$, "wrapMode", "none");
        _$setProp3(_el$, "onMouseDown", (event) => {
          if (event.button === 0) {
            pressed = true;
            event.preventDefault();
            event.stopPropagation();
          }
        });
        _$setProp3(_el$, "onMouseOut", () => {
          pressed = false;
        });
        _$setProp3(_el$, "onMouseDrag", () => {
          pressed = false;
        });
        _$setProp3(_el$, "onMouseUp", click);
        _$insert3(_el$, () => props.label);
        _$effect3((_$p) => _$setProp3(_el$, "fg", props.muted ? theme().textMuted : theme().primary, _$p));
        return _el$;
      })();
    }
    return _$createComponent3(Show3, {
      get when() {
        return visible();
      },
      get fallback() {
        return (() => {
          var _el$17 = _$createElement3("box");
          _$setProp3(_el$17, "height", 1);
          _$insert3(_el$17, _$createComponent3(Button, {
            label: "[\u663E\u793A\u9605\u8BFB]",
            action: toggle
          }));
          return _el$17;
        })();
      },
      get children() {
        var _el$2 = _$createElement3("box"), _el$3 = _$createElement3("box"), _el$4 = _$createElement3("text"), _el$5 = _$createElement3("b"), _el$7 = _$createElement3("box");
        _$insertNode3(_el$2, _el$3);
        _$use2((node) => {
          readerNode = node;
        }, _el$2);
        _$setProp3(_el$2, "flexShrink", 0);
        _$setProp3(_el$2, "width", "100%");
        _$setProp3(_el$2, "onSizeChange", function() {
          readerNode = this;
          setBodyWidth(Math.max(2, Math.floor(this.width)));
          observe(this);
          dock();
        });
        _$insertNode3(_el$3, _el$4);
        _$insertNode3(_el$3, _el$7);
        _$setProp3(_el$3, "flexShrink", 0);
        _$setProp3(_el$3, "height", 1);
        _$setProp3(_el$3, "flexDirection", "row");
        _$setProp3(_el$3, "justifyContent", "space-between");
        _$insertNode3(_el$4, _el$5);
        _$insertNode3(_el$5, _$createTextNode2(`\u968F\u624B\u8BFB`));
        _$setProp3(_el$7, "flexDirection", "row");
        _$setProp3(_el$7, "gap", 1);
        _$insert3(_el$7, _$createComponent3(Button, {
          label: "[\u5C0F\u8BF4]",
          action: () => selectMode("novel"),
          get muted() {
            return mode() !== "novel";
          }
        }), null);
        _$insert3(_el$7, _$createComponent3(Button, {
          label: "[\u89C6\u9891]",
          action: () => selectMode("video"),
          get muted() {
            return mode() !== "video";
          }
        }), null);
        _$insert3(_el$7, _$createComponent3(Button, {
          label: "[\u97F3\u4E50]",
          action: () => selectMode("music"),
          get muted() {
            return mode() !== "music";
          }
        }), null);
        _$insert3(_el$7, _$createComponent3(Button, {
          label: "[\u9690\u85CF]",
          action: toggle,
          muted: true
        }), null);
        _$insert3(_el$2, _$createComponent3(Show3, {
          get when() {
            return mode() === "music";
          },
          get fallback() {
            return (() => {
              var _el$18 = _$createElement3("box");
              _$setProp3(_el$18, "flexShrink", 0);
              _$setProp3(_el$18, "height", 1);
              _$setProp3(_el$18, "flexDirection", "row");
              _$setProp3(_el$18, "gap", 2);
              _$insert3(_el$18, _$createComponent3(Button, {
                get label() {
                  return mode() === "video" ? "[\u89C6\u9891\u5E93]" : "[\u4E66\u67B6]";
                },
                action: () => mode() === "video" ? video.shelf() : shelf()
              }), null);
              _$insert3(_el$18, _$createComponent3(Button, {
                get label() {
                  return mode() === "video" ? "[\u641C\u7D22]" : "[\u76EE\u5F55]";
                },
                action: () => mode() === "video" ? video.search() : chapters()
              }), null);
              _$insert3(_el$18, _$createComponent3(Show3, {
                get when() {
                  return mode() === "video";
                },
                get children() {
                  return _$createComponent3(Button, {
                    label: "[\u70ED\u95E8]",
                    action: () => video.popular()
                  });
                }
              }), null);
              _$insert3(_el$18, _$createComponent3(Button, {
                label: "[\u5220\u9664]",
                action: removeBook
              }), null);
              return _el$18;
            })();
          },
          get children() {
            var _el$8 = _$createElement3("box");
            _$setProp3(_el$8, "flexShrink", 0);
            _$setProp3(_el$8, "height", 1);
            _$setProp3(_el$8, "flexDirection", "row");
            _$setProp3(_el$8, "gap", 1);
            _$insert3(_el$8, _$createComponent3(Button, {
              label: "[\u641C\u7D22]",
              get action() {
                return music.search;
              }
            }), null);
            _$insert3(_el$8, _$createComponent3(Button, {
              label: "[\u7ED3\u679C]",
              get action() {
                return music.results;
              }
            }), null);
            _$insert3(_el$8, _$createComponent3(Button, {
              get label() {
                return `[\u961F\u5217${music.state().queue.length}]`;
              },
              get action() {
                return music.queue;
              }
            }), null);
            _$insert3(_el$8, _$createComponent3(Button, {
              label: "[\u8D26\u53F7]",
              get action() {
                return music.accounts;
              }
            }), null);
            return _el$8;
          }
        }), null);
        _$insert3(_el$2, _$createComponent3(Show3, {
          get when() {
            return mode() !== "music";
          },
          get children() {
            return [(() => {
              var _el$9 = _$createElement3("box");
              _$setProp3(_el$9, "flexShrink", 0);
              _$setProp3(_el$9, "flexDirection", "row");
              _$insert3(_el$9, _$createComponent3(Show3, {
                get when() {
                  return options?.hostMajor === 2;
                },
                get children() {
                  return _$createComponent3(Button, {
                    get label() {
                      return `[\u5BBD\u5EA6 ${widthPercent() === void 0 ? "\u81EA\u52A8" : Math.round(widthPercent() * 10) / 10 + "%"}]`;
                    },
                    action: widthSize
                  });
                }
              }), null);
              _$insert3(_el$9, _$createComponent3(Button, {
                get label() {
                  return `[\u9AD8\u5EA6 ${heightPercent() === void 0 ? "\u81EA\u52A8" : Math.round(heightPercent() * 10) / 10 + "%"}]`;
                },
                action: heightSize
              }), null);
              _$insert3(_el$9, _$createComponent3(Show3, {
                get when() {
                  return _$memo3(() => mode() === "video")() && options?.hostMajor === 2;
                },
                get children() {
                  return _$createComponent3(Button, {
                    get label() {
                      return videoExpanded() ? "[\u8FD8\u539F]" : "[\u5927\u753B\u9762]";
                    },
                    action: toggleVideoSize
                  });
                }
              }), null);
              _$effect3((_p$) => {
                var _v$ = 1 + gap(), _v$2 = mode() === "video" ? 1 : 2;
                _v$ !== _p$.e && (_p$.e = _$setProp3(_el$9, "height", _v$, _p$.e));
                _v$2 !== _p$.t && (_p$.t = _$setProp3(_el$9, "gap", _v$2, _p$.t));
                return _p$;
              }, {
                e: void 0,
                t: void 0
              });
              return _el$9;
            })(), _$createComponent3(Show3, {
              get when() {
                return _$memo3(() => mode() === "video")() && options?.hostMajor === 2;
              },
              get children() {
                var _el$0 = _$createElement3("box");
                _$setProp3(_el$0, "height", 1);
                _$setProp3(_el$0, "flexShrink", 0);
                _$setProp3(_el$0, "flexDirection", "row");
                _$setProp3(_el$0, "gap", 1);
                _$insert3(_el$0, _$createComponent3(Button, {
                  label: "[\u2212]",
                  action: () => stepVideoScale(-1),
                  get muted() {
                    return videoSize().percent <= 25;
                  }
                }), null);
                _$insert3(_el$0, _$createComponent3(Button, {
                  get label() {
                    return `[\u7F29\u653E${videoSize().percent}%]`;
                  },
                  action: videoScaleMenu
                }), null);
                _$insert3(_el$0, _$createComponent3(Button, {
                  label: "[+]",
                  action: () => stepVideoScale(1),
                  get muted() {
                    return videoSize().percent >= videoSize().maximum;
                  }
                }), null);
                _$insert3(_el$0, _$createComponent3(Button, {
                  label: "[\u91CD\u7F6E]",
                  action: () => scaleVideo(100)
                }), null);
                return _el$0;
              }
            })];
          }
        }), null);
        _$insert3(_el$2, _$createComponent3(Show3, {
          get when() {
            return mode() === "music";
          },
          get fallback() {
            return _$createComponent3(Show3, {
              get when() {
                return mode() === "video";
              },
              get children() {
                return _$createComponent3(video.View, {
                  Button,
                  get gap() {
                    return gap();
                  }
                });
              }
            });
          },
          get children() {
            return _$createComponent3(music.View, {
              Button
            });
          }
        }), null);
        _$insert3(_el$2, _$createComponent3(Show3, {
          get when() {
            return mode() === "novel";
          },
          get children() {
            return _$createComponent3(Show3, {
              get when() {
                return book();
              },
              get fallback() {
                return _$createComponent3(Button, {
                  get label() {
                    return busy() ? "\u6B63\u5728\u6253\u5F00\u2026" : "[\u70B9\u51FB\u6253\u5F00\u672C\u5730\u5C0F\u8BF4]";
                  },
                  action: shelf
                });
              },
              get children() {
                return [(() => {
                  var _el$1 = _$createElement3("box");
                  _$setProp3(_el$1, "flexShrink", 0);
                  _$insert3(_el$1, _$createComponent3(Button, {
                    get label() {
                      return book()?.title ?? "";
                    },
                    action: shelf,
                    muted: true
                  }), null);
                  _$insert3(_el$1, _$createComponent3(Button, {
                    get label() {
                      return currentChapter();
                    },
                    action: chapters
                  }), null);
                  _$effect3((_$p) => _$setProp3(_el$1, "height", 2 + gap(), _$p));
                  return _el$1;
                })(), (() => {
                  var _el$10 = _$createElement3("box"), _el$11 = _$createElement3("text");
                  _$insertNode3(_el$10, _el$11);
                  _$setProp3(_el$10, "flexShrink", 0);
                  _$setProp3(_el$11, "width", "100%");
                  _$setProp3(_el$11, "height", "100%");
                  _$setProp3(_el$11, "wrapMode", "none");
                  _$insert3(_el$11, () => pages()[page()].text);
                  _$effect3((_p$) => {
                    var _v$3 = rows(), _v$4 = rows(), _v$5 = theme().text;
                    _v$3 !== _p$.e && (_p$.e = _$setProp3(_el$10, "height", _v$3, _p$.e));
                    _v$4 !== _p$.t && (_p$.t = _$setProp3(_el$10, "minHeight", _v$4, _p$.t));
                    _v$5 !== _p$.a && (_p$.a = _$setProp3(_el$11, "fg", _v$5, _p$.a));
                    return _p$;
                  }, {
                    e: void 0,
                    t: void 0,
                    a: void 0
                  });
                  return _el$10;
                })(), (() => {
                  var _el$12 = _$createElement3("box"), _el$13 = _$createElement3("box"), _el$14 = _$createElement3("box"), _el$15 = _$createElement3("text");
                  _$insertNode3(_el$12, _el$13);
                  _$insertNode3(_el$12, _el$14);
                  _$insertNode3(_el$12, _el$15);
                  _$setProp3(_el$12, "flexShrink", 0);
                  _$setProp3(_el$13, "flexShrink", 0);
                  _$setProp3(_el$13, "height", 1);
                  _$setProp3(_el$13, "flexDirection", "row");
                  _$setProp3(_el$13, "justifyContent", "space-between");
                  _$insert3(_el$13, _$createComponent3(Button, {
                    get label() {
                      return `${page() + 1} / ${pages().length} \u9875 \xB7 ${percentage()}%`;
                    },
                    action: jump,
                    muted: true
                  }));
                  _$setProp3(_el$14, "flexShrink", 0);
                  _$setProp3(_el$14, "height", 1);
                  _$setProp3(_el$14, "flexDirection", "row");
                  _$setProp3(_el$14, "justifyContent", "space-between");
                  _$insert3(_el$14, _$createComponent3(Button, {
                    label: "[\u2039 \u4E0A\u4E00\u9875]",
                    action: () => turn(-1)
                  }), null);
                  _$insert3(_el$14, _$createComponent3(Button, {
                    label: "[\u4E0B\u4E00\u9875 \u203A]",
                    action: () => turn(1)
                  }), null);
                  _$insertNode3(_el$15, _$createTextNode2(`\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u8C03\u6574\u5BBD\u9AD8`));
                  _$setProp3(_el$15, "height", 1);
                  _$setProp3(_el$15, "wrapMode", "none");
                  _$effect3((_p$) => {
                    var _v$6 = 4 + gap(), _v$7 = gap(), _v$8 = theme().textMuted;
                    _v$6 !== _p$.e && (_p$.e = _$setProp3(_el$12, "height", _v$6, _p$.e));
                    _v$7 !== _p$.t && (_p$.t = _$setProp3(_el$12, "paddingTop", _v$7, _p$.t));
                    _v$8 !== _p$.a && (_p$.a = _$setProp3(_el$15, "fg", _v$8, _p$.a));
                    return _p$;
                  }, {
                    e: void 0,
                    t: void 0,
                    a: void 0
                  });
                  return _el$12;
                })()];
              }
            });
          }
        }), null);
        _$effect3((_p$) => {
          var _v$9 = options?.hostMajor === 2 ? "auto" : 0, _v$0 = book() || mode() !== "novel" ? rows() + chromeRows() : void 0, _v$1 = theme().text;
          _v$9 !== _p$.e && (_p$.e = _$setProp3(_el$2, "marginBottom", _v$9, _p$.e));
          _v$0 !== _p$.t && (_p$.t = _$setProp3(_el$2, "height", _v$0, _p$.t));
          _v$1 !== _p$.a && (_p$.a = _$setProp3(_el$4, "fg", _v$1, _p$.a));
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
      sidebar_content: () => _$createComponent3(Reader, {})
    }
  });
};
var index_default = {
  id: "opencode-moyu",
  tui
};

// src/domain/collection-task.mjs
function collectionKind(query) {
  const text2 = String(query || "").trim();
  if (/^(?:音乐|music)(?:\s|[:：/]|$)/iu.test(text2)) return "music";
  if (!/^(?:视频|video)(?:\s|[:：/]|$)/iu.test(text2) && /小说|章节|书名|目录链接/u.test(text2)) return "novel";
  if (!/^(?:视频|video)(?:\s|[:：/]|$)/iu.test(text2) && /音乐|歌曲|歌手|歌单|听歌|私人(?:电台|FM)|猜你喜欢|个性推荐|随机刷歌|^(?:我喜欢|喜欢)$|网易云|QQ\s*音乐|酷狗|(?:^|\s)music(?:\s|[:：/]|$)/iu.test(text2)) return "music";
  return /视频|(?:^|\s)video(?:\s|[:：/]|$)|bilibili|哔哩哔哩|B\s*站|youtube|youtu\.be|油管|(?:^|\s)热门(?:\s|$)|搜索热门|BV[\da-zA-Z]{10}/iu.test(text2) ? "video" : "novel";
}

// src/ui/collect.mjs
function collectionQuery(input) {
  return typeof input === "string" ? input.trim().replace(/^\/?moyu(?:\s+|$)/iu, "").trim() : "";
}
function musicLoginRequest(input) {
  const query = collectionQuery(input).replace(/\s+/gu, "").replace(/[。！!]+$/u, "");
  const platform = "(qq(?:\u97F3\u4E50|music)?|\u7F51\u6613\u4E91(?:\u97F3\u4E50)?|\u9177\u72D7(?:\u97F3\u4E50)?|netease|kugou)";
  const match = new RegExp(`^(?:\u8BF7)?(?:\u5E2E\u6211)?(?:\u626B\u7801)?\u767B\u5F55${platform}(?:\u8D26\u53F7)?$`, "iu").exec(query) || new RegExp(`^${platform}(?:\u626B\u7801)?\u767B\u5F55$`, "iu").exec(query) || new RegExp(`^(?:login|signin)${platform}$`, "iu").exec(query);
  if (!match) return;
  return /^(?:qq)/i.test(match[1]) ? "qq" : /网易|netease/i.test(match[1]) ? "netease" : "kugou";
}
async function dispatchMoyu(host, input, { login } = {}) {
  const platform = musicLoginRequest(input);
  if (platform) {
    if (!login) throw new Error("\u97F3\u4E50\u767B\u5F55\u5165\u53E3\u5C1A\u672A\u51C6\u5907\u597D\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u6216\u6253\u5F00 /music \u7684\u8D26\u53F7\u83DC\u5355");
    await login(platform);
    return { kind: "music-login", platform };
  }
  return { kind: "collection", sessionID: await requestCollection(host, input) };
}
function collectionPrompt(query) {
  return `${collectionKind(query) === "music" ? "\u97F3\u4E50\u4EFB\u52A1" : collectionKind(query) === "video" ? "\u89C6\u9891\u4EFB\u52A1" : "\u91C7\u96C6\u5C0F\u8BF4"}\uFF1A${query.replace(/\s+/gu, " ")}`;
}
async function requestCollection(host, input) {
  const query = collectionQuery(input);
  if (!query || query.length > 2e3) throw new Error("\u8BF7\u8F93\u5165 1\u20132000 \u5B57\u7684\u5C0F\u8BF4\u91C7\u96C6\u3001\u89C6\u9891\u70ED\u95E8\u6216\u97F3\u4E50\u641C\u7D22\u8981\u6C42");
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
    const [state, update] = context.storage.store("reader", { initial: { values: {} } });
    const writes = /* @__PURE__ */ new Set();
    let dialogGeneration = 0;
    let onClose;
    let musicLogin;
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
    function select(props) {
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
        const result = await dispatchMoyu(context, query, { login(platform) {
          if (!musicLogin) throw new Error("\u97F3\u4E50\u767B\u5F55\u5165\u53E3\u5C1A\u672A\u51C6\u5907\u597D\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
          musicLogin(platform);
        } });
        if (result.kind === "collection") context.ui.toast.show({ title: "\u6478\u9C7C\u91C7\u96C6", message: "\u5DF2\u4EA4\u7ED9\u5F53\u524D\u6A21\u578B\uFF0C\u91C7\u96C6\u7ED3\u679C\u5C06\u5728\u4F1A\u8BDD\u4E2D\u663E\u793A", variant: "info" });
        return result.sessionID;
      } catch (error) {
        context.ui.toast.show({ title: "\u6478\u9C7C\u8BF7\u6C42\u5931\u8D25", message: error instanceof Error ? error.message : String(error), variant: "error" });
      }
    }
    const bridge = {
      moyu: { collect, registerMusicLogin(handler) {
        musicLogin = handler;
        cleanup.push(() => {
          musicLogin = void 0;
        });
      } },
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
          const pending = update((draft) => {
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
        DialogSelect: select,
        DialogConfirm: confirm,
        dialog: {
          clear,
          replace(render, callback) {
            clear();
            onClose = callback;
            render();
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
