webpackJsonp([26],{"3zmR":function(e,t,r){"use strict";var i=r("GwPc");t.a={name:"md-tool",data:function(){return{previewContent:"",previewMode:!1}},props:{pretext:{type:String,default:" "}},methods:{insertContent:function(e){var t={bold:"** **",image:"![](https://)",link:"[](https://)",code:"\n```python\n \n```"};this.$emit("insertmd",t[e])},togglePreviewMode:function(){this.previewContent=Object(i.a)(this.pretext),this.previewMode=!this.previewMode}}}},"7WLp":function(e,t,r){var i=r("DkT2");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("rjj0").default;n("5dbb9520",i,!0,{})},DkT2:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".icon[data-v-85311978]{color:gray}",""])},EFqf:function(e,t,r){(function(t){!function(t){"use strict";function r(e){this.tokens=[],this.tokens.links={},this.options=e||m.defaults,this.rules=d.normal,this.options.pedantic?this.rules=d.pedantic:this.options.gfm&&(this.options.tables?this.rules=d.tables:this.rules=d.gfm)}function i(e,t){if(this.options=t||m.defaults,this.links=e,this.rules=f.normal,this.renderer=this.options.renderer||new n,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=f.pedantic:this.options.gfm&&(this.options.breaks?this.rules=f.breaks:this.rules=f.gfm)}function n(e){this.options=e||m.defaults}function s(){}function l(e){this.tokens=[],this.token=null,this.options=e||m.defaults,this.options.renderer=this.options.renderer||new n,this.renderer=this.options.renderer,this.renderer.options=this.options}function a(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function p(e,t){return e=e.source||e,t=t||"",{replace:function(t,r){return r=r.source||r,r=r.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,r),this},getRegex:function(){return new RegExp(e,t)}}}function u(e,t){return b[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?b[" "+e]=e+"/":b[" "+e]=e.replace(/[^\/]*$/,"")),e=b[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}function c(){}function h(e){for(var t,r,i=1;i<arguments.length;i++){t=arguments[i];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}function g(e,t){var r=e.replace(/([^\\])\|/g,"$1 |").split(/ +\| */),i=0;if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;i<r.length;i++)r[i]=r[i].replace(/\\\|/g,"|");return r}function m(e,t,i){if(void 0===e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(i||"function"==typeof t){i||(i=t,t=null),t=h({},m.defaults,t||{});var n,s,o=t.highlight,p=0;try{n=r.lex(e,t)}catch(e){return i(e)}s=n.length;var u=function(e){if(e)return t.highlight=o,i(e);var r;try{r=l.parse(n,t)}catch(t){e=t}return t.highlight=o,e?i(e):i(null,r)};if(!o||o.length<3)return u();if(delete t.highlight,!s)return u();for(;p<n.length;p++)!function(e){"code"!==e.type?--s||u():o(e.text,e.lang,function(t,r){return t?u(t):null==r||r===e.text?--s||u():(e.text=r,e.escaped=!0,void(--s||u()))})}(n[p])}else try{return t&&(t=h({},m.defaults,t)),l.parse(r.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||m.defaults).silent)return"<p>An error occurred:</p><pre>"+a(e.message+"",!0)+"</pre>";throw e}}var d={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:c,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:c,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:c,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};d._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,d._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,d.def=p(d.def).replace("label",d._label).replace("title",d._title).getRegex(),d.bullet=/(?:[*+-]|\d+\.)/,d.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,d.item=p(d.item,"gm").replace(/bull/g,d.bullet).getRegex(),d.list=p(d.list).replace(/bull/g,d.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+d.def.source+")").getRegex(),d._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",d._comment=/<!--(?!-?>)[\s\S]*?-->/,d.html=p(d.html,"i").replace("comment",d._comment).replace("tag",d._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),d.paragraph=p(d.paragraph).replace("hr",d.hr).replace("heading",d.heading).replace("lheading",d.lheading).replace("tag",d._tag).getRegex(),d.blockquote=p(d.blockquote).replace("paragraph",d.paragraph).getRegex(),d.normal=h({},d),d.gfm=h({},d.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),d.gfm.paragraph=p(d.paragraph).replace("(?!","(?!"+d.gfm.fences.source.replace("\\1","\\2")+"|"+d.list.source.replace("\\1","\\3")+"|").getRegex(),d.tables=h({},d.gfm,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),d.pedantic=h({},d.normal,{html:p("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",d._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),r.rules=d,r.lex=function(e,t){return new r(t).lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,t){e=e.replace(/^ +$/gm,"");for(var r,i,n,s,l,a,o,p,u,c,h,m,f;e;)if((n=this.rules.newline.exec(e))&&(e=e.substring(n[0].length),n[0].length>1&&this.tokens.push({type:"space"})),n=this.rules.code.exec(e))e=e.substring(n[0].length),n=n[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?n:n.replace(/\n+$/,"")});else if(n=this.rules.fences.exec(e))e=e.substring(n[0].length),this.tokens.push({type:"code",lang:n[2],text:n[3]||""});else if(n=this.rules.heading.exec(e))e=e.substring(n[0].length),this.tokens.push({type:"heading",depth:n[1].length,text:n[2]});else if(t&&(n=this.rules.nptable.exec(e))&&(a={type:"table",header:g(n[1].replace(/^ *| *\| *$/g,"")),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:n[3]?n[3].replace(/\n$/,"").split("\n"):[]},a.header.length===a.align.length)){for(e=e.substring(n[0].length),p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=g(a.cells[p],a.header.length);this.tokens.push(a)}else if(n=this.rules.hr.exec(e))e=e.substring(n[0].length),this.tokens.push({type:"hr"});else if(n=this.rules.blockquote.exec(e))e=e.substring(n[0].length),this.tokens.push({type:"blockquote_start"}),n=n[0].replace(/^ *> ?/gm,""),this.token(n,t),this.tokens.push({type:"blockquote_end"});else if(n=this.rules.list.exec(e)){for(e=e.substring(n[0].length),s=n[2],h=s.length>1,this.tokens.push({type:"list_start",ordered:h,start:h?+s:""}),n=n[0].match(this.rules.item),r=!1,c=n.length,p=0;p<c;p++)a=n[p],o=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),~a.indexOf("\n ")&&(o-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+o+"}","gm"),"")),this.options.smartLists&&p!==c-1&&(l=d.bullet.exec(n[p+1])[0],s===l||s.length>1&&l.length>1||(e=n.slice(p+1).join("\n")+e,p=c-1)),i=r||/\n\n(?!\s*$)/.test(a),p!==c-1&&(r="\n"===a.charAt(a.length-1),i||(i=r)),m=/^\[[ xX]\] /.test(a),f=void 0,m&&(f=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),this.tokens.push({type:i?"loose_item_start":"list_item_start",task:m,checked:f}),this.token(a,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(n=this.rules.html.exec(e))e=e.substring(n[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===n[1]||"script"===n[1]||"style"===n[1]),text:n[0]});else if(t&&(n=this.rules.def.exec(e)))e=e.substring(n[0].length),n[3]&&(n[3]=n[3].substring(1,n[3].length-1)),u=n[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[u]||(this.tokens.links[u]={href:n[2],title:n[3]});else if(t&&(n=this.rules.table.exec(e))&&(a={type:"table",header:g(n[1].replace(/^ *| *\| *$/g,"")),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:n[3]?n[3].replace(/(?: *\| *)?\n$/,"").split("\n"):[]},a.header.length===a.align.length)){for(e=e.substring(n[0].length),p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=g(a.cells[p].replace(/^ *\| *| *\| *$/g,""),a.header.length);this.tokens.push(a)}else if(n=this.rules.lheading.exec(e))e=e.substring(n[0].length),this.tokens.push({type:"heading",depth:"="===n[2]?1:2,text:n[1]});else if(t&&(n=this.rules.paragraph.exec(e)))e=e.substring(n[0].length),this.tokens.push({type:"paragraph",text:"\n"===n[1].charAt(n[1].length-1)?n[1].slice(0,-1):n[1]});else if(n=this.rules.text.exec(e))e=e.substring(n[0].length),this.tokens.push({type:"text",text:n[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var f={escape:/^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:c,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)|^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)/,em:/^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*][\s\S]*?[^\s])\*(?!\*)|^_([^\s_])_(?!_)|^\*([^\s*])\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:c,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};f._escapes=/\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,f._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,f._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,f.autolink=p(f.autolink).replace("scheme",f._scheme).replace("email",f._email).getRegex(),f._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,f.tag=p(f.tag).replace("comment",d._comment).replace("attribute",f._attribute).getRegex(),f._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,f._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/,f._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,f.link=p(f.link).replace("label",f._label).replace("href",f._href).replace("title",f._title).getRegex(),f.reflink=p(f.reflink).replace("label",f._label).getRegex(),f.normal=h({},f),f.pedantic=h({},f.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:p(/^!?\[(label)\]\((.*?)\)/).replace("label",f._label).getRegex(),reflink:p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",f._label).getRegex()}),f.gfm=h({},f.normal,{escape:p(f.escape).replace("])","~|])").getRegex(),url:p(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",f._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:p(f.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),f.breaks=h({},f.gfm,{br:p(f.br).replace("{2,}","*").getRegex(),text:p(f.gfm.text).replace("{2,}","*").getRegex()}),i.rules=f,i.output=function(e,t,r){return new i(t,r).output(e)},i.prototype.output=function(e){for(var t,r,n,s,l,o="";e;)if(l=this.rules.escape.exec(e))e=e.substring(l[0].length),o+=l[1];else if(l=this.rules.autolink.exec(e))e=e.substring(l[0].length),"@"===l[2]?(r=a(this.mangle(l[1])),n="mailto:"+r):(r=a(l[1]),n=r),o+=this.renderer.link(n,null,r);else if(this.inLink||!(l=this.rules.url.exec(e))){if(l=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(l[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(l[0])&&(this.inLink=!1),e=e.substring(l[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):a(l[0]):l[0];else if(l=this.rules.link.exec(e))e=e.substring(l[0].length),this.inLink=!0,n=l[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n),t?(n=t[1],s=t[3]):s=""):s=l[3]?l[3].slice(1,-1):"",n=n.trim().replace(/^<([\s\S]*)>$/,"$1"),o+=this.outputLink(l,{href:i.escapes(n),title:i.escapes(s)}),this.inLink=!1;else if((l=this.rules.reflink.exec(e))||(l=this.rules.nolink.exec(e))){if(e=e.substring(l[0].length),t=(l[2]||l[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){o+=l[0].charAt(0),e=l[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(l,t),this.inLink=!1}else if(l=this.rules.strong.exec(e))e=e.substring(l[0].length),o+=this.renderer.strong(this.output(l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.em.exec(e))e=e.substring(l[0].length),o+=this.renderer.em(this.output(l[6]||l[5]||l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.code.exec(e))e=e.substring(l[0].length),o+=this.renderer.codespan(a(l[2].trim(),!0));else if(l=this.rules.br.exec(e))e=e.substring(l[0].length),o+=this.renderer.br();else if(l=this.rules.del.exec(e))e=e.substring(l[0].length),o+=this.renderer.del(this.output(l[1]));else if(l=this.rules.text.exec(e))e=e.substring(l[0].length),o+=this.renderer.text(a(this.smartypants(l[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else l[0]=this.rules._backpedal.exec(l[0])[0],e=e.substring(l[0].length),"@"===l[2]?(r=a(l[0]),n="mailto:"+r):(r=a(l[0]),n="www."===l[1]?"http://"+r:r),o+=this.renderer.link(n,null,r);return o},i.escapes=function(e){return e?e.replace(i.rules._escapes,"$1"):e},i.prototype.outputLink=function(e,t){var r=t.href,i=t.title?a(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(r,i,this.output(e[1])):this.renderer.image(r,i,a(e[1]))},i.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},i.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,r="",i=e.length,n=0;n<i;n++)t=e.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r},n.prototype.code=function(e,t,r){if(this.options.highlight){var i=this.options.highlight(e,t);null!=i&&i!==e&&(r=!0,e=i)}return t?'<pre><code class="'+this.options.langPrefix+a(t,!0)+'">'+(r?e:a(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:a(e,!0))+"</code></pre>"},n.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},n.prototype.html=function(e){return e},n.prototype.heading=function(e,t,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},n.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},n.prototype.list=function(e,t,r){var i=t?"ol":"ul";return"<"+i+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+i+">\n"},n.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},n.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},n.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},n.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},n.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},n.prototype.tablecell=function(e,t){var r=t.header?"th":"td";return(t.align?"<"+r+' align="'+t.align+'">':"<"+r+">")+e+"</"+r+">\n"},n.prototype.strong=function(e){return"<strong>"+e+"</strong>"},n.prototype.em=function(e){return"<em>"+e+"</em>"},n.prototype.codespan=function(e){return"<code>"+e+"</code>"},n.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},n.prototype.del=function(e){return"<del>"+e+"</del>"},n.prototype.link=function(e,t,r){if(this.options.sanitize){try{var i=decodeURIComponent(o(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return r}if(0===i.indexOf("javascript:")||0===i.indexOf("vbscript:")||0===i.indexOf("data:"))return r}this.options.baseUrl&&!x.test(e)&&(e=u(this.options.baseUrl,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch(e){return r}var n='<a href="'+a(e)+'"';return t&&(n+=' title="'+t+'"'),n+=">"+r+"</a>"},n.prototype.image=function(e,t,r){this.options.baseUrl&&!x.test(e)&&(e=u(this.options.baseUrl,e));var i='<img src="'+e+'" alt="'+r+'"';return t&&(i+=' title="'+t+'"'),i+=this.options.xhtml?"/>":">"},n.prototype.text=function(e){return e},s.prototype.strong=s.prototype.em=s.prototype.codespan=s.prototype.del=s.prototype.text=function(e){return e},s.prototype.link=s.prototype.image=function(e,t,r){return""+r},s.prototype.br=function(){return""},l.parse=function(e,t){return new l(t).parse(e)},l.prototype.parse=function(e){this.inline=new i(e.links,this.options),this.inlineText=new i(e.links,h({},this.options,{renderer:new s})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},l.prototype.next=function(){return this.token=this.tokens.pop()},l.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},l.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},l.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,o(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,r,i,n="",s="";for(r="",e=0;e<this.token.header.length;e++)r+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(n+=this.renderer.tablerow(r),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],r="",i=0;i<t.length;i++)r+=this.renderer.tablecell(this.inline.output(t[i]),{header:!1,align:this.token.align[i]});s+=this.renderer.tablerow(r)}return this.renderer.table(n,s);case"blockquote_start":for(s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":s="";for(var l=this.token.ordered,a=this.token.start;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,l,a);case"list_item_start":for(s="",this.token.task&&(s+=this.renderer.checkbox(this.token.checked));"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var b={},x=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;c.exec=c,m.options=m.setOptions=function(e){return h(m.defaults,e),m},m.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new n,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},m.defaults=m.getDefaults(),m.Parser=l,m.parser=l.parse,m.Renderer=n,m.TextRenderer=s,m.Lexer=r,m.lexer=r.lex,m.InlineLexer=i,m.inlineLexer=i.output,m.parse=m,e.exports=m}(this||"undefined"!=typeof window&&window)}).call(t,r("DuR2"))},GwPc:function(e,t,r){"use strict";var i=r("EFqf"),n=r.n(i);n.a.setOptions({renderer:new n.a.Renderer,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1});var s=new n.a.Renderer,l=function(e){return"<p>\n"+e+"</p>"},a=function(e,t,r){var i=e.includes("readup.tips"),n=r.includes("<img");return('<a href="'+e+'" target="_blank"\n             title="'+(t||(n?e:r))+'" \n             '+(i?"":'rel="external nofollow noopener noreferrer"')+">\n             "+r+"</a>").replace(/\s+/g," ").replace("\n","")},o=function(e,t,r){return('<a href="'+e+'" \n             target="_blank" rel="nofollow noopener noreferrer">\n            <img src="'+e+'" \n                referrerPolicy="no-referrer" \n                title="'+(t||r||"readup.tips")+'" \n                style="width:10%; height:15%"\n                alt="'+(r||t||e)+'"/>\n          </a>').replace(/\s+/g," ").replace("\n","")},p=function(e,t,r){var i=t+2;return"<h"+i+">"+e+"</h"+i+">\n"};s.link=a,s.image=o,s.paragraph=l,s.heading=p,t.a=function(e){return"string"!=typeof e?"":n()(e,{renderer:s})}},Ih4g:function(e,t,r){"use strict";var i=r("P9l9"),n=r("iF09"),s=r("6aq2"),l=r("dUqM");t.a={name:"edit-item",title:"Edit Item",components:{MdTool:l.a},data:function(){return{itemForm:{cate:"Book",title:"",uid:"",resUrl:"",byline:"",cover:"",tags:"",language:"",publisher:"",publishDate:"",level:"",binding:"",page:"",price:"",details:""},rules:{title:[{required:!0,validator:s.trimValid,message:"Please give a title",trigger:"blur"},{max:500,message:"Max Length should be 500",trigger:"blur"}],uid:[{required:!0,validator:s.trimValid,message:"Need an uid",trigger:"blur"},{max:128,message:"Max Length should be 128",trigger:"blur"}],resUrl:[{max:500,message:"Max Length should be 500",trigger:"blur"}],byline:[{max:500,message:"Max Length should be 500",trigger:"blur"}],cover:[{max:500,message:"Max Length should be 500",trigger:"blur"}],tags:[{max:120,message:"Max Length should be 120",trigger:"blur"}],language:[{max:128,message:"Max Length should be 128",trigger:"blur"}],publishDate:[{max:128,message:"Max Length should be 128",trigger:"blur"}],publisher:[{max:255,message:"Max Length should be 255",trigger:"blur"}],page:[{max:64,message:"Max Length should be 64",trigger:"blur"}],level:[{max:128,message:"Max Length should be 128",trigger:"blur"}],binding:[{max:128,message:"Max Length should be 128",trigger:"blur"}],price:[{max:128,message:"Max Length should be 128",trigger:"blur"}]},itemId:null,itemTitle:null}},methods:{onEditItem:function(e,t){var r=this;this.$refs[e].validate(function(e){if(e&&Object(n.a)()){var s={cate:t.cate,title:t.title.trim(),uid:t.uid.trim(),resUrl:t.resUrl.trim(),byline:t.byline.trim(),cover:t.cover.trim(),tags:t.tags.trim(),language:t.language.trim(),publisher:t.publisher.trim(),publishDate:t.publishDate.trim(),level:t.level.trim(),binding:t.binding.trim(),page:t.page.trim(),price:t.price.trim(),details:t.details.trim()};Object(i.s)(r.itemId,s).then(function(e){var t=r.itemId;Object(i._43)(t),r.$router.push("/item/"+t),r.$message({showClose:!0,message:e.data,type:"success"})})}else{if(Object(n.a)())return r.$message({showClose:!0,message:"error!! Please Check"}),!1;r.$message({showClose:!0,message:"Should Log in to Continue"}),r.$router.push({path:"/login",query:{redirect:r.$route.fullPath}})}})},cancelnBack:function(){var e=this.itemId;Object(i._43)(e),this.$router.push("/item/"+e)},setFormData:function(e){this.itemForm.cate=e.cate,this.itemForm.title=e.title,this.itemForm.uid=e.uid,this.itemForm.resUrl=e.resurl,this.itemForm.byline=e.byline,this.itemForm.cover=e.cover,this.itemForm.language=e.language,this.itemForm.publisher=e.publisher,this.itemForm.publishDate=e.pubdate,this.itemForm.level=e.level,this.itemForm.binding=e.binding,this.itemForm.price=e.price,this.itemForm.page=e.page,this.itemForm.details=e.details,this.itemId=e.id,this.itemTitle=e.title},loadItemData:function(){var e=this.$store.getters.currentItem,t=this.$route.params.id;if(e.id===Number(t)){var r=e;this.setFormData(r)}else Object(i._43)(t),this.$router.push("/item/"+t)},updateI:function(e){this.itemForm.details+=e}},created:function(){this.loadItemData()}}},Ls1q:function(e,t,r){"use strict";function i(e){r("awAh")}Object.defineProperty(t,"__esModule",{value:!0});var n=r("Ih4g"),s=r("u4Zk"),l=r("XyMi"),a=i,o=Object(l.a)(n.a,s.a,s.b,!1,a,"data-v-5867c1e1",null);t.default=o.exports},awAh:function(e,t,r){var i=r("ik2g");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("rjj0").default;n("67565a3f",i,!0,{})},dUqM:function(e,t,r){"use strict";function i(e){r("7WLp")}var n=r("3zmR"),s=r("hMLF"),l=r("XyMi"),a=i,o=Object(l.a)(n.a,s.a,s.b,!1,a,"data-v-85311978",null);t.a=o.exports},hMLF:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return n});var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"md-editor"},[r("div",{staticClass:"md-tools"},[r("a",{attrs:{href:"",title:"Bold"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.insertContent("bold")}}},[r("b",{staticClass:"icon"},[e._v("B  ")])]),e._v(" "),r("a",{attrs:{href:"",title:"Image"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.insertContent("image")}}},[r("i",{staticClass:"el-icon-picture icon"})]),e._v(" \n    "),r("a",{attrs:{href:"",title:"Link"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.insertContent("link")}}},[r("i",{staticClass:"el-icon-plus icon"})]),e._v(" \n    "),r("a",{attrs:{href:"",title:"Code"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.insertContent("code")}}},[r("i",{staticClass:"el-icon-tickets icon"})]),e._v("  \n    "),r("a",{attrs:{href:"",title:"Preview"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.togglePreviewMode(t)}}},[r("i",{staticClass:"el-icon-view icon"})])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.previewMode,expression:"previewMode"}],domProps:{innerHTML:e._s(e.previewContent)}})])},n=[]},ik2g:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".edit-page[data-v-5867c1e1]{padding:10px 100px 10px 80px;position:relative}.edit-page .edit-form[data-v-5867c1e1]{padding:20px;border:1px dotted #689f38}.edit-page .title[data-v-5867c1e1]{margin-bottom:20px}",""])},u4Zk:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return n});var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"edit-page"},[r("div",{staticClass:"title"},[r("b",[e._v("Edit Item:")]),e._v(" \n    "+e._s(e.itemTitle)+"\n    "),r("el-button",{attrs:{type:"text"},on:{click:e.cancelnBack}},[e._v("\n       ...Cancel Edit\n    ")])],1),e._v(" "),r("el-form",{ref:"itemForm",staticClass:"edit-form",attrs:{model:e.itemForm,rules:e.rules,"label-width":"130px",size:"mini"}},[r("el-form-item",{attrs:{label:"Type",prop:"cate"}},[r("el-radio-group",{model:{value:e.itemForm.cate,callback:function(t){e.$set(e.itemForm,"cate",t)},expression:"itemForm.cate"}},[r("el-radio-button",{attrs:{label:"Book"}}),e._v(" "),r("el-radio-button",{attrs:{label:"Course"}}),e._v(" "),r("el-radio-button",{attrs:{label:"Video"}}),e._v(" "),r("el-radio-button",{attrs:{label:"Online"}}),e._v(" "),r("el-radio-button",{attrs:{label:"Paper"}}),e._v(" "),r("el-radio-button",{attrs:{label:"Atlas"}}),e._v(" "),r("el-radio-button",{attrs:{label:"Album"}}),e._v(" "),r("el-radio-button",{attrs:{label:"Podcast"}}),e._v(" "),r("el-radio-button",{attrs:{label:"Other"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Title",prop:"title"}},[r("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.itemForm.title,callback:function(t){e.$set(e.itemForm,"title",t)},expression:"itemForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"UID",prop:"uid"}},[r("el-input",{attrs:{placeholder:"UID. e.g. ISBN, etc. "},model:{value:e.itemForm.uid,callback:function(t){e.$set(e.itemForm,"uid",t)},expression:"itemForm.uid"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Resource URL",prop:"resurl"}},[r("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"URL. e.g. a online course link, etc. "},model:{value:e.itemForm.resUrl,callback:function(t){e.$set(e.itemForm,"resUrl",t)},expression:"itemForm.resUrl"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Byline",prop:"byline"}},[r("el-input",{attrs:{placeholder:"Auther or Instructor, etc."},model:{value:e.itemForm.byline,callback:function(t){e.$set(e.itemForm,"byline",t)},expression:"itemForm.byline"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Cover / Logo",prop:"cover"}},[r("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"Image URL"},model:{value:e.itemForm.cover,callback:function(t){e.$set(e.itemForm,"cover",t)},expression:"itemForm.cover"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Topic Tags",prop:"tags"}},[r("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"Comma can be as Separator"},model:{value:e.itemForm.tags,callback:function(t){e.$set(e.itemForm,"tags",t)},expression:"itemForm.tags"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Language",prop:"language"}},[r("el-input",{model:{value:e.itemForm.language,callback:function(t){e.$set(e.itemForm,"language",t)},expression:"itemForm.language"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Publisher",prop:"publisher"}},[r("el-input",{model:{value:e.itemForm.publisher,callback:function(t){e.$set(e.itemForm,"publisher",t)},expression:"itemForm.publisher"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Publish Date",prop:"publishDate"}},[r("el-input",{attrs:{placeholder:"Book Publish date or Start date of a Course"},model:{value:e.itemForm.publishDate,callback:function(t){e.$set(e.itemForm,"publishDate",t)},expression:"itemForm.publishDate"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Page / Duration",prop:"page"}},[r("el-input",{attrs:{placeholder:"Pages of Book or Duration of video / course"},model:{value:e.itemForm.page,callback:function(t){e.$set(e.itemForm,"page",t)},expression:"itemForm.page"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Level",prop:"level"}},[r("el-input",{model:{value:e.itemForm.level,callback:function(t){e.$set(e.itemForm,"level",t)},expression:"itemForm.level"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Binding / Format",prop:"binding"}},[r("el-input",{model:{value:e.itemForm.binding,callback:function(t){e.$set(e.itemForm,"binding",t)},expression:"itemForm.binding"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Price",prop:"price"}},[r("el-input",{model:{value:e.itemForm.price,callback:function(t){e.$set(e.itemForm,"price",t)},expression:"itemForm.price"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"More Details",prop:"details"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:3}},model:{value:e.itemForm.details,callback:function(t){e.$set(e.itemForm,"details",t)},expression:"itemForm.details"}}),e._v(" "),r("md-tool",{attrs:{pretext:e.itemForm.details},on:{insertmd:e.updateI}})],1),e._v(" "),r("el-form-item",[r("el-button",{staticClass:"blockbtn",attrs:{type:"success",size:"mini"},on:{click:function(t){e.onEditItem("itemForm",e.itemForm)}}},[e._v("\n                 Edit and Submit\n       ")])],1)],1)],1)},n=[]}});