webpackJsonp([24],{"3zmR":function(e,t,r){"use strict";var n=r("GwPc");t.a={name:"md-tool",data:function(){return{previewContent:"",previewMode:!1}},props:{pretext:{type:String,default:" "}},methods:{insertContent:function(e){var t={bold:"** **",image:"![](https://)",link:"[](https://)",code:"\n```python\n \n```"};this.$emit("insertmd",t[e])},togglePreviewMode:function(){this.previewContent=Object(n.a)(this.pretext),this.previewMode=!this.previewMode}}}},"60Gc":function(e,t,r){var n=r("9Lmd");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("rjj0").default;i("0892c1c5",n,!0,{})},"7WLp":function(e,t,r){var n=r("DkT2");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("rjj0").default;i("5dbb9520",n,!0,{})},"9Lmd":function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".create-page[data-v-6a75e639]{padding:10px 160px 10px 120px;position:relative}.create-page .create-form[data-v-6a75e639]{padding:10px 20px;border:1px dotted #689f38}.create-page .title[data-v-6a75e639]{text-align:center;margin-bottom:20px}",""])},DkT2:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".icon[data-v-85311978]{color:gray}",""])},EFqf:function(e,t,r){(function(t){!function(t){"use strict";function r(e){this.tokens=[],this.tokens.links={},this.options=e||d.defaults,this.rules=f.normal,this.options.pedantic?this.rules=f.pedantic:this.options.gfm&&(this.options.tables?this.rules=f.tables:this.rules=f.gfm)}function n(e,t){if(this.options=t||d.defaults,this.links=e,this.rules=m.normal,this.renderer=this.options.renderer||new i,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=m.pedantic:this.options.gfm&&(this.options.breaks?this.rules=m.breaks:this.rules=m.gfm)}function i(e){this.options=e||d.defaults}function s(){}function a(e){this.tokens=[],this.token=null,this.options=e||d.defaults,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options}function o(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function c(e,t){return e=e.source||e,t=t||"",{replace:function(t,r){return r=r.source||r,r=r.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,r),this},getRegex:function(){return new RegExp(e,t)}}}function p(e,t){return b[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?b[" "+e]=e+"/":b[" "+e]=e.replace(/[^\/]*$/,"")),e=b[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}function h(){}function u(e){for(var t,r,n=1;n<arguments.length;n++){t=arguments[n];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}function g(e,t){var r=e.replace(/([^\\])\|/g,"$1 |").split(/ +\| */),n=0;if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].replace(/\\\|/g,"|");return r}function d(e,t,n){if(void 0===e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null),t=u({},d.defaults,t||{});var i,s,l=t.highlight,c=0;try{i=r.lex(e,t)}catch(e){return n(e)}s=i.length;var p=function(e){if(e)return t.highlight=l,n(e);var r;try{r=a.parse(i,t)}catch(t){e=t}return t.highlight=l,e?n(e):n(null,r)};if(!l||l.length<3)return p();if(delete t.highlight,!s)return p();for(;c<i.length;c++)!function(e){"code"!==e.type?--s||p():l(e.text,e.lang,function(t,r){return t?p(t):null==r||r===e.text?--s||p():(e.text=r,e.escaped=!0,void(--s||p()))})}(i[c])}else try{return t&&(t=u({},d.defaults,t)),a.parse(r.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||d.defaults).silent)return"<p>An error occurred:</p><pre>"+o(e.message+"",!0)+"</pre>";throw e}}var f={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:h,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:h,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:h,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};f._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,f._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,f.def=c(f.def).replace("label",f._label).replace("title",f._title).getRegex(),f.bullet=/(?:[*+-]|\d+\.)/,f.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,f.item=c(f.item,"gm").replace(/bull/g,f.bullet).getRegex(),f.list=c(f.list).replace(/bull/g,f.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+f.def.source+")").getRegex(),f._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",f._comment=/<!--(?!-?>)[\s\S]*?-->/,f.html=c(f.html,"i").replace("comment",f._comment).replace("tag",f._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),f.paragraph=c(f.paragraph).replace("hr",f.hr).replace("heading",f.heading).replace("lheading",f.lheading).replace("tag",f._tag).getRegex(),f.blockquote=c(f.blockquote).replace("paragraph",f.paragraph).getRegex(),f.normal=u({},f),f.gfm=u({},f.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),f.gfm.paragraph=c(f.paragraph).replace("(?!","(?!"+f.gfm.fences.source.replace("\\1","\\2")+"|"+f.list.source.replace("\\1","\\3")+"|").getRegex(),f.tables=u({},f.gfm,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),f.pedantic=u({},f.normal,{html:c("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",f._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),r.rules=f,r.lex=function(e,t){return new r(t).lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,t){e=e.replace(/^ +$/gm,"");for(var r,n,i,s,a,o,l,c,p,h,u,d,m;e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))&&(o={type:"table",header:g(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]},o.header.length===o.align.length)){for(e=e.substring(i[0].length),c=0;c<o.align.length;c++)/^ *-+: *$/.test(o.align[c])?o.align[c]="right":/^ *:-+: *$/.test(o.align[c])?o.align[c]="center":/^ *:-+ *$/.test(o.align[c])?o.align[c]="left":o.align[c]=null;for(c=0;c<o.cells.length;c++)o.cells[c]=g(o.cells[c],o.header.length);this.tokens.push(o)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),s=i[2],u=s.length>1,this.tokens.push({type:"list_start",ordered:u,start:u?+s:""}),i=i[0].match(this.rules.item),r=!1,h=i.length,c=0;c<h;c++)o=i[c],l=o.length,o=o.replace(/^ *([*+-]|\d+\.) +/,""),~o.indexOf("\n ")&&(l-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+l+"}","gm"),"")),this.options.smartLists&&c!==h-1&&(a=f.bullet.exec(i[c+1])[0],s===a||s.length>1&&a.length>1||(e=i.slice(c+1).join("\n")+e,c=h-1)),n=r||/\n\n(?!\s*$)/.test(o),c!==h-1&&(r="\n"===o.charAt(o.length-1),n||(n=r)),d=/^\[[ xX]\] /.test(o),m=void 0,d&&(m=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,"")),this.tokens.push({type:n?"loose_item_start":"list_item_start",task:d,checked:m}),this.token(o,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),p=i[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[p]||(this.tokens.links[p]={href:i[2],title:i[3]});else if(t&&(i=this.rules.table.exec(e))&&(o={type:"table",header:g(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/(?: *\| *)?\n$/,"").split("\n"):[]},o.header.length===o.align.length)){for(e=e.substring(i[0].length),c=0;c<o.align.length;c++)/^ *-+: *$/.test(o.align[c])?o.align[c]="right":/^ *:-+: *$/.test(o.align[c])?o.align[c]="center":/^ *:-+ *$/.test(o.align[c])?o.align[c]="left":o.align[c]=null;for(c=0;c<o.cells.length;c++)o.cells[c]=g(o.cells[c].replace(/^ *\| *| *\| *$/g,""),o.header.length);this.tokens.push(o)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var m={escape:/^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:h,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)|^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)/,em:/^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*][\s\S]*?[^\s])\*(?!\*)|^_([^\s_])_(?!_)|^\*([^\s*])\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:h,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};m._escapes=/\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,m._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,m._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,m.autolink=c(m.autolink).replace("scheme",m._scheme).replace("email",m._email).getRegex(),m._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,m.tag=c(m.tag).replace("comment",f._comment).replace("attribute",m._attribute).getRegex(),m._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,m._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/,m._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,m.link=c(m.link).replace("label",m._label).replace("href",m._href).replace("title",m._title).getRegex(),m.reflink=c(m.reflink).replace("label",m._label).getRegex(),m.normal=u({},m),m.pedantic=u({},m.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:c(/^!?\[(label)\]\((.*?)\)/).replace("label",m._label).getRegex(),reflink:c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",m._label).getRegex()}),m.gfm=u({},m.normal,{escape:c(m.escape).replace("])","~|])").getRegex(),url:c(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",m._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:c(m.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),m.breaks=u({},m.gfm,{br:c(m.br).replace("{2,}","*").getRegex(),text:c(m.gfm.text).replace("{2,}","*").getRegex()}),n.rules=m,n.output=function(e,t,r){return new n(t,r).output(e)},n.prototype.output=function(e){for(var t,r,i,s,a,l="";e;)if(a=this.rules.escape.exec(e))e=e.substring(a[0].length),l+=a[1];else if(a=this.rules.autolink.exec(e))e=e.substring(a[0].length),"@"===a[2]?(r=o(this.mangle(a[1])),i="mailto:"+r):(r=o(a[1]),i=r),l+=this.renderer.link(i,null,r);else if(this.inLink||!(a=this.rules.url.exec(e))){if(a=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(a[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(a[0])&&(this.inLink=!1),e=e.substring(a[0].length),l+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):o(a[0]):a[0];else if(a=this.rules.link.exec(e))e=e.substring(a[0].length),this.inLink=!0,i=a[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i),t?(i=t[1],s=t[3]):s=""):s=a[3]?a[3].slice(1,-1):"",i=i.trim().replace(/^<([\s\S]*)>$/,"$1"),l+=this.outputLink(a,{href:n.escapes(i),title:n.escapes(s)}),this.inLink=!1;else if((a=this.rules.reflink.exec(e))||(a=this.rules.nolink.exec(e))){if(e=e.substring(a[0].length),t=(a[2]||a[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){l+=a[0].charAt(0),e=a[0].substring(1)+e;continue}this.inLink=!0,l+=this.outputLink(a,t),this.inLink=!1}else if(a=this.rules.strong.exec(e))e=e.substring(a[0].length),l+=this.renderer.strong(this.output(a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.em.exec(e))e=e.substring(a[0].length),l+=this.renderer.em(this.output(a[6]||a[5]||a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.code.exec(e))e=e.substring(a[0].length),l+=this.renderer.codespan(o(a[2].trim(),!0));else if(a=this.rules.br.exec(e))e=e.substring(a[0].length),l+=this.renderer.br();else if(a=this.rules.del.exec(e))e=e.substring(a[0].length),l+=this.renderer.del(this.output(a[1]));else if(a=this.rules.text.exec(e))e=e.substring(a[0].length),l+=this.renderer.text(o(this.smartypants(a[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else a[0]=this.rules._backpedal.exec(a[0])[0],e=e.substring(a[0].length),"@"===a[2]?(r=o(a[0]),i="mailto:"+r):(r=o(a[0]),i="www."===a[1]?"http://"+r:r),l+=this.renderer.link(i,null,r);return l},n.escapes=function(e){return e?e.replace(n.rules._escapes,"$1"):e},n.prototype.outputLink=function(e,t){var r=t.href,n=t.title?o(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(r,n,this.output(e[1])):this.renderer.image(r,n,o(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,r="",n=e.length,i=0;i<n;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r},i.prototype.code=function(e,t,r){if(this.options.highlight){var n=this.options.highlight(e,t);null!=n&&n!==e&&(r=!0,e=n)}return t?'<pre><code class="'+this.options.langPrefix+o(t,!0)+'">'+(r?e:o(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:o(e,!0))+"</code></pre>"},i.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},i.prototype.html=function(e){return e},i.prototype.heading=function(e,t,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},i.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},i.prototype.list=function(e,t,r){var n=t?"ol":"ul";return"<"+n+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+n+">\n"},i.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},i.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},i.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},i.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},i.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},i.prototype.tablecell=function(e,t){var r=t.header?"th":"td";return(t.align?"<"+r+' align="'+t.align+'">':"<"+r+">")+e+"</"+r+">\n"},i.prototype.strong=function(e){return"<strong>"+e+"</strong>"},i.prototype.em=function(e){return"<em>"+e+"</em>"},i.prototype.codespan=function(e){return"<code>"+e+"</code>"},i.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},i.prototype.del=function(e){return"<del>"+e+"</del>"},i.prototype.link=function(e,t,r){if(this.options.sanitize){try{var n=decodeURIComponent(l(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return r}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return r}this.options.baseUrl&&!x.test(e)&&(e=p(this.options.baseUrl,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch(e){return r}var i='<a href="'+o(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+r+"</a>"},i.prototype.image=function(e,t,r){this.options.baseUrl&&!x.test(e)&&(e=p(this.options.baseUrl,e));var n='<img src="'+e+'" alt="'+r+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">"},i.prototype.text=function(e){return e},s.prototype.strong=s.prototype.em=s.prototype.codespan=s.prototype.del=s.prototype.text=function(e){return e},s.prototype.link=s.prototype.image=function(e,t,r){return""+r},s.prototype.br=function(){return""},a.parse=function(e,t){return new a(t).parse(e)},a.prototype.parse=function(e){this.inline=new n(e.links,this.options),this.inlineText=new n(e.links,u({},this.options,{renderer:new s})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},a.prototype.next=function(){return this.token=this.tokens.pop()},a.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},a.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},a.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,l(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,r,n,i="",s="";for(r="",e=0;e<this.token.header.length;e++)r+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(r),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],r="",n=0;n<t.length;n++)r+=this.renderer.tablecell(this.inline.output(t[n]),{header:!1,align:this.token.align[n]});s+=this.renderer.tablerow(r)}return this.renderer.table(i,s);case"blockquote_start":for(s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":s="";for(var a=this.token.ordered,o=this.token.start;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,a,o);case"list_item_start":for(s="",this.token.task&&(s+=this.renderer.checkbox(this.token.checked));"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var b={},x=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;h.exec=h,d.options=d.setOptions=function(e){return u(d.defaults,e),d},d.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new i,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},d.defaults=d.getDefaults(),d.Parser=a,d.parser=a.parse,d.Renderer=i,d.TextRenderer=s,d.Lexer=r,d.lexer=r.lex,d.InlineLexer=n,d.inlineLexer=n.output,d.parse=d,e.exports=d}(this||"undefined"!=typeof window&&window)}).call(t,r("DuR2"))},GwPc:function(e,t,r){"use strict";var n=r("EFqf"),i=r.n(n);i.a.setOptions({renderer:new i.a.Renderer,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1});var s=new i.a.Renderer,a=function(e){return"<p>\n"+e+"</p>"},o=function(e,t,r){var n=e.includes("ruthub.com"),i=r.includes("<img");return('<a href="'+e+'" target="_blank"\n             title="'+(t||(i?e:r))+'" \n             '+(n?"":'rel="external nofollow noopener noreferrer"')+">\n             "+r+"</a>").replace(/\s+/g," ").replace("\n","")},l=function(e,t,r){return('<a href="'+e+'" \n             target="_blank" rel="nofollow noopener noreferrer">\n            <img src="'+e+'" \n                referrerPolicy="no-referrer" \n                title="'+(t||r||"RutHub")+'" \n                style="width:10%; height:15%"\n                alt="'+(r||t||e)+'"/>\n          </a>').replace(/\s+/g," ").replace("\n","")},c=function(e,t,r){var n=t+2;return"<h"+n+">"+e+"</h"+n+">\n"};s.link=o,s.image=l,s.paragraph=a,s.heading=c,t.a=function(e){return"string"!=typeof e?"":i()(e,{renderer:s})}},VNNG:function(e,t,r){"use strict";var n=r("P9l9"),i=r("6aq2"),s=r("dUqM");t.a={name:"create",title:"Create New",components:{MdTool:s.a},data:function(){return{createForm:{title:"",intro:"",rating:"All",credential:"",editable:"Creator"},rules:{title:[{required:!0,validator:i.trimValid,message:"Required",trigger:"change"},{max:255,message:"Max Length should be 255",trigger:"change"}],intro:[{required:!0,validator:i.trimValid,message:"Required",trigger:"change"}],credential:[{max:255,message:"Max Length should be 255",trigger:"change"}]},demandid:this.$route.params.id||"",demandBody:""}},methods:{onCreate:function(e,t){var r=this;this.$refs[e].validate(function(e){if(!e)return r.$message({showClose:!0,message:"error!! Please Check"}),!1;var i=r.$route.params.id||"",s={demandid:i,title:t.title.trim(),intro:t.intro.trim(),rating:t.rating,credential:t.credential.trim(),editable:"Creator"};Object(n._26)(s).then(function(e){var t=e.data.id;r.$router.push("/readlist/"+t),r.$message({showClose:!0,message:"New List Created, Now Add item to it"})})})},updateM:function(e){this.createForm.intro+=e},loadDemand:function(){var e=this,t=this.$route.params.id;if(t){var r=this.$store.getters.demandDetail;r.id===Number(t)?this.demandBody=r.body.slice(0,142):Object(n.X)(t).then(function(t){e.demandBody=t.data.body.slice(0,142)})}}},created:function(){this.loadDemand()}}},Yg2C:function(e,t,r){"use strict";function n(e){r("60Gc")}Object.defineProperty(t,"__esModule",{value:!0});var i=r("VNNG"),s=r("fWo6"),a=r("XyMi"),o=n,l=Object(a.a)(i.a,s.a,s.b,!1,o,"data-v-6a75e639",null);t.default=l.exports},dUqM:function(e,t,r){"use strict";function n(e){r("7WLp")}var i=r("3zmR"),s=r("hMLF"),a=r("XyMi"),o=n,l=Object(a.a)(i.a,s.a,s.b,!1,o,"data-v-85311978",null);t.a=l.exports},fWo6:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"create-page"},[r("h3",{staticClass:"title"},[e._v("Create New Read List")]),e._v(" "),r("p",{staticStyle:{color:"green","font-size":"0.8em","text-align":"center"}},[e._v("\n    Read List, collection of books, courses, etc., for sharing some items on a specific topic you have read up. \n  ")]),e._v(" "),e.demandid?r("p",[e._v(" As Answer To The \n    "),r("router-link",{attrs:{to:"/demand/"+e.demandid,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n      "+e._s("Request:  "+e.demandBody||"Request")+"\n    ")])],1):e._e(),e._v(" "),r("el-form",{ref:"createForm",staticClass:"create-form",attrs:{size:"mini",model:e.createForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"Title",prop:"title"}},[r("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.createForm.title,callback:function(t){e.$set(e.createForm,"title",t)},expression:"createForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Preface",prop:"intro"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:5},placeholder:"Can end with #hashtag"},model:{value:e.createForm.intro,callback:function(t){e.$set(e.createForm,"intro",t)},expression:"createForm.intro"}}),e._v(" "),r("md-tool",{attrs:{pretext:e.createForm.intro},on:{insertmd:e.updateM}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Credential",prop:"credential"}},[r("el-input",{attrs:{clearable:"",placeholder:"Help readers understand your experience"},model:{value:e.createForm.credential,callback:function(t){e.$set(e.createForm,"credential",t)},expression:"createForm.credential"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Who Can Edit?",prop:"editable"}},[r("el-radio-group",{model:{value:e.createForm.editable,callback:function(t){e.$set(e.createForm,"editable",t)},expression:"createForm.editable"}},[r("el-radio-button",{attrs:{label:"Creator"}}),e._v(" "),r("el-radio-button",{attrs:{label:"Everyone"}})],1)],1),e._v(" "),r("el-form-item",[r("el-button",{staticClass:"blockbtn",attrs:{type:"success",plain:"",size:"mini"},on:{click:function(t){e.onCreate("createForm",e.createForm)}}},[e._v("\n                 Create New List, Then Add Items\n      ")])],1)],1)],1)},i=[]},hMLF:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"md-editor"},[r("div",{staticClass:"md-tools"},[r("a",{attrs:{href:"",title:"Bold"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.insertContent("bold")}}},[r("b",{staticClass:"icon"},[e._v("B  ")])]),e._v(" "),r("a",{attrs:{href:"",title:"Image"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.insertContent("image")}}},[r("i",{staticClass:"el-icon-picture icon"})]),e._v(" \n    "),r("a",{attrs:{href:"",title:"Link"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.insertContent("link")}}},[r("i",{staticClass:"el-icon-plus icon"})]),e._v(" \n    "),r("a",{attrs:{href:"",title:"Code"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.insertContent("code")}}},[r("i",{staticClass:"el-icon-tickets icon"})]),e._v("  \n    "),r("a",{attrs:{href:"",title:"Preview"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.togglePreviewMode(t)}}},[r("i",{staticClass:"el-icon-view icon"})])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.previewMode,expression:"previewMode"}],domProps:{innerHTML:e._s(e.previewContent)}})])},i=[]}});