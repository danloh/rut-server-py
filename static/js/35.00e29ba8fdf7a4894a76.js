webpackJsonp([35],{"1LFC":function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".tag-page[data-v-0fec11c6]{padding:10px 230px 10px 0;position:relative}.tag-page .tag-side[data-v-0fec11c6]{position:absolute;right:0;width:220px;background-color:#fafbfa}.tag-page .tag-side .sidetitle[data-v-0fec11c6]{background-color:#e5ebe4;padding:5px 10px}.tag-page .tag-side .sidebody[data-v-0fec11c6]{padding:5px 10px}.tag-page .tag-side .sidebody a[data-v-0fec11c6]:hover{color:#f60}.tag-page .tagmeta[data-v-0fec11c6]{background-color:#fff;min-height:120px;padding:5px 75px 5px 10px;margin-bottom:5px;position:relative}.tag-page .tagmeta .fobtn[data-v-0fec11c6]{position:absolute;top:15px;right:5px;text-align:right}.tag-page .submenu[data-v-0fec11c6]{margin-bottom:10px;border-bottom:1px solid #eee}.tag-page .submenu a[data-v-0fec11c6]{color:gray;margin-right:.85em}.tag-page .submenu a[data-v-0fec11c6]:hover{color:#006400}.tag-page .submenu a.router-link-active[data-v-0fec11c6]{color:orange;font-weight:800}",""])},EFqf:function(e,t,r){(function(t){!function(t){"use strict";function r(e){this.tokens=[],this.tokens.links={},this.options=e||d.defaults,this.rules=f.normal,this.options.pedantic?this.rules=f.pedantic:this.options.gfm&&(this.options.tables?this.rules=f.tables:this.rules=f.gfm)}function n(e,t){if(this.options=t||d.defaults,this.links=e,this.rules=m.normal,this.renderer=this.options.renderer||new s,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=m.pedantic:this.options.gfm&&(this.options.breaks?this.rules=m.breaks:this.rules=m.gfm)}function s(e){this.options=e||d.defaults}function i(){}function a(e){this.tokens=[],this.token=null,this.options=e||d.defaults,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options}function o(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function c(e,t){return e=e.source||e,t=t||"",{replace:function(t,r){return r=r.source||r,r=r.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,r),this},getRegex:function(){return new RegExp(e,t)}}}function h(e,t){return b[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?b[" "+e]=e+"/":b[" "+e]=e.replace(/[^\/]*$/,"")),e=b[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}function p(){}function g(e){for(var t,r,n=1;n<arguments.length;n++){t=arguments[n];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}function u(e,t){var r=e.replace(/([^\\])\|/g,"$1 |").split(/ +\| */),n=0;if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].replace(/\\\|/g,"|");return r}function d(e,t,n){if(void 0===e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null),t=g({},d.defaults,t||{});var s,i,l=t.highlight,c=0;try{s=r.lex(e,t)}catch(e){return n(e)}i=s.length;var h=function(e){if(e)return t.highlight=l,n(e);var r;try{r=a.parse(s,t)}catch(t){e=t}return t.highlight=l,e?n(e):n(null,r)};if(!l||l.length<3)return h();if(delete t.highlight,!i)return h();for(;c<s.length;c++)!function(e){"code"!==e.type?--i||h():l(e.text,e.lang,function(t,r){return t?h(t):null==r||r===e.text?--i||h():(e.text=r,e.escaped=!0,void(--i||h()))})}(s[c])}else try{return t&&(t=g({},d.defaults,t)),a.parse(r.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||d.defaults).silent)return"<p>An error occurred:</p><pre>"+o(e.message+"",!0)+"</pre>";throw e}}var f={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:p,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:p,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:p,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};f._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,f._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,f.def=c(f.def).replace("label",f._label).replace("title",f._title).getRegex(),f.bullet=/(?:[*+-]|\d+\.)/,f.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,f.item=c(f.item,"gm").replace(/bull/g,f.bullet).getRegex(),f.list=c(f.list).replace(/bull/g,f.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+f.def.source+")").getRegex(),f._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",f._comment=/<!--(?!-?>)[\s\S]*?-->/,f.html=c(f.html,"i").replace("comment",f._comment).replace("tag",f._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),f.paragraph=c(f.paragraph).replace("hr",f.hr).replace("heading",f.heading).replace("lheading",f.lheading).replace("tag",f._tag).getRegex(),f.blockquote=c(f.blockquote).replace("paragraph",f.paragraph).getRegex(),f.normal=g({},f),f.gfm=g({},f.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),f.gfm.paragraph=c(f.paragraph).replace("(?!","(?!"+f.gfm.fences.source.replace("\\1","\\2")+"|"+f.list.source.replace("\\1","\\3")+"|").getRegex(),f.tables=g({},f.gfm,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),f.pedantic=g({},f.normal,{html:c("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",f._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),r.rules=f,r.lex=function(e,t){return new r(t).lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,t){e=e.replace(/^ +$/gm,"");for(var r,n,s,i,a,o,l,c,h,p,g,d,m;e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e))e=e.substring(s[0].length),s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?s:s.replace(/\n+$/,"")});else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if(t&&(s=this.rules.nptable.exec(e))&&(o={type:"table",header:u(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]},o.header.length===o.align.length)){for(e=e.substring(s[0].length),c=0;c<o.align.length;c++)/^ *-+: *$/.test(o.align[c])?o.align[c]="right":/^ *:-+: *$/.test(o.align[c])?o.align[c]="center":/^ *:-+ *$/.test(o.align[c])?o.align[c]="left":o.align[c]=null;for(c=0;c<o.cells.length;c++)o.cells[c]=u(o.cells[c],o.header.length);this.tokens.push(o)}else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),i=s[2],g=i.length>1,this.tokens.push({type:"list_start",ordered:g,start:g?+i:""}),s=s[0].match(this.rules.item),r=!1,p=s.length,c=0;c<p;c++)o=s[c],l=o.length,o=o.replace(/^ *([*+-]|\d+\.) +/,""),~o.indexOf("\n ")&&(l-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+l+"}","gm"),"")),this.options.smartLists&&c!==p-1&&(a=f.bullet.exec(s[c+1])[0],i===a||i.length>1&&a.length>1||(e=s.slice(c+1).join("\n")+e,c=p-1)),n=r||/\n\n(?!\s*$)/.test(o),c!==p-1&&(r="\n"===o.charAt(o.length-1),n||(n=r)),d=/^\[[ xX]\] /.test(o),m=void 0,d&&(m=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,"")),this.tokens.push({type:n?"loose_item_start":"list_item_start",task:d,checked:m}),this.token(o,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:s[0]});else if(t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),h=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[h]||(this.tokens.links[h]={href:s[2],title:s[3]});else if(t&&(s=this.rules.table.exec(e))&&(o={type:"table",header:u(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/(?: *\| *)?\n$/,"").split("\n"):[]},o.header.length===o.align.length)){for(e=e.substring(s[0].length),c=0;c<o.align.length;c++)/^ *-+: *$/.test(o.align[c])?o.align[c]="right":/^ *:-+: *$/.test(o.align[c])?o.align[c]="center":/^ *:-+ *$/.test(o.align[c])?o.align[c]="left":o.align[c]=null;for(c=0;c<o.cells.length;c++)o.cells[c]=u(o.cells[c].replace(/^ *\| *| *\| *$/g,""),o.header.length);this.tokens.push(o)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2]?1:2,text:s[1]});else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var m={escape:/^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:p,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)|^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)/,em:/^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*][\s\S]*?[^\s])\*(?!\*)|^_([^\s_])_(?!_)|^\*([^\s*])\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:p,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};m._escapes=/\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,m._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,m._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,m.autolink=c(m.autolink).replace("scheme",m._scheme).replace("email",m._email).getRegex(),m._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,m.tag=c(m.tag).replace("comment",f._comment).replace("attribute",m._attribute).getRegex(),m._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,m._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/,m._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,m.link=c(m.link).replace("label",m._label).replace("href",m._href).replace("title",m._title).getRegex(),m.reflink=c(m.reflink).replace("label",m._label).getRegex(),m.normal=g({},m),m.pedantic=g({},m.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:c(/^!?\[(label)\]\((.*?)\)/).replace("label",m._label).getRegex(),reflink:c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",m._label).getRegex()}),m.gfm=g({},m.normal,{escape:c(m.escape).replace("])","~|])").getRegex(),url:c(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",m._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:c(m.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),m.breaks=g({},m.gfm,{br:c(m.br).replace("{2,}","*").getRegex(),text:c(m.gfm.text).replace("{2,}","*").getRegex()}),n.rules=m,n.output=function(e,t,r){return new n(t,r).output(e)},n.prototype.output=function(e){for(var t,r,s,i,a,l="";e;)if(a=this.rules.escape.exec(e))e=e.substring(a[0].length),l+=a[1];else if(a=this.rules.autolink.exec(e))e=e.substring(a[0].length),"@"===a[2]?(r=o(this.mangle(a[1])),s="mailto:"+r):(r=o(a[1]),s=r),l+=this.renderer.link(s,null,r);else if(this.inLink||!(a=this.rules.url.exec(e))){if(a=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(a[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(a[0])&&(this.inLink=!1),e=e.substring(a[0].length),l+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):o(a[0]):a[0];else if(a=this.rules.link.exec(e))e=e.substring(a[0].length),this.inLink=!0,s=a[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s),t?(s=t[1],i=t[3]):i=""):i=a[3]?a[3].slice(1,-1):"",s=s.trim().replace(/^<([\s\S]*)>$/,"$1"),l+=this.outputLink(a,{href:n.escapes(s),title:n.escapes(i)}),this.inLink=!1;else if((a=this.rules.reflink.exec(e))||(a=this.rules.nolink.exec(e))){if(e=e.substring(a[0].length),t=(a[2]||a[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){l+=a[0].charAt(0),e=a[0].substring(1)+e;continue}this.inLink=!0,l+=this.outputLink(a,t),this.inLink=!1}else if(a=this.rules.strong.exec(e))e=e.substring(a[0].length),l+=this.renderer.strong(this.output(a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.em.exec(e))e=e.substring(a[0].length),l+=this.renderer.em(this.output(a[6]||a[5]||a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.code.exec(e))e=e.substring(a[0].length),l+=this.renderer.codespan(o(a[2].trim(),!0));else if(a=this.rules.br.exec(e))e=e.substring(a[0].length),l+=this.renderer.br();else if(a=this.rules.del.exec(e))e=e.substring(a[0].length),l+=this.renderer.del(this.output(a[1]));else if(a=this.rules.text.exec(e))e=e.substring(a[0].length),l+=this.renderer.text(o(this.smartypants(a[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else a[0]=this.rules._backpedal.exec(a[0])[0],e=e.substring(a[0].length),"@"===a[2]?(r=o(a[0]),s="mailto:"+r):(r=o(a[0]),s="www."===a[1]?"http://"+r:r),l+=this.renderer.link(s,null,r);return l},n.escapes=function(e){return e?e.replace(n.rules._escapes,"$1"):e},n.prototype.outputLink=function(e,t){var r=t.href,n=t.title?o(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(r,n,this.output(e[1])):this.renderer.image(r,n,o(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,r="",n=e.length,s=0;s<n;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r},s.prototype.code=function(e,t,r){if(this.options.highlight){var n=this.options.highlight(e,t);null!=n&&n!==e&&(r=!0,e=n)}return t?'<pre><code class="'+this.options.langPrefix+o(t,!0)+'">'+(r?e:o(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:o(e,!0))+"</code></pre>"},s.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},s.prototype.html=function(e){return e},s.prototype.heading=function(e,t,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},s.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},s.prototype.list=function(e,t,r){var n=t?"ol":"ul";return"<"+n+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+n+">\n"},s.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},s.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},s.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},s.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},s.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},s.prototype.tablecell=function(e,t){var r=t.header?"th":"td";return(t.align?"<"+r+' align="'+t.align+'">':"<"+r+">")+e+"</"+r+">\n"},s.prototype.strong=function(e){return"<strong>"+e+"</strong>"},s.prototype.em=function(e){return"<em>"+e+"</em>"},s.prototype.codespan=function(e){return"<code>"+e+"</code>"},s.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},s.prototype.del=function(e){return"<del>"+e+"</del>"},s.prototype.link=function(e,t,r){if(this.options.sanitize){try{var n=decodeURIComponent(l(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return r}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return r}this.options.baseUrl&&!x.test(e)&&(e=h(this.options.baseUrl,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch(e){return r}var s='<a href="'+o(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+r+"</a>"},s.prototype.image=function(e,t,r){this.options.baseUrl&&!x.test(e)&&(e=h(this.options.baseUrl,e));var n='<img src="'+e+'" alt="'+r+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">"},s.prototype.text=function(e){return e},i.prototype.strong=i.prototype.em=i.prototype.codespan=i.prototype.del=i.prototype.text=function(e){return e},i.prototype.link=i.prototype.image=function(e,t,r){return""+r},i.prototype.br=function(){return""},a.parse=function(e,t){return new a(t).parse(e)},a.prototype.parse=function(e){this.inline=new n(e.links,this.options),this.inlineText=new n(e.links,g({},this.options,{renderer:new i})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},a.prototype.next=function(){return this.token=this.tokens.pop()},a.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},a.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},a.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,l(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,r,n,s="",i="";for(r="",e=0;e<this.token.header.length;e++)r+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(r),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],r="",n=0;n<t.length;n++)r+=this.renderer.tablecell(this.inline.output(t[n]),{header:!1,align:this.token.align[n]});i+=this.renderer.tablerow(r)}return this.renderer.table(s,i);case"blockquote_start":for(i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":i="";for(var a=this.token.ordered,o=this.token.start;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,a,o);case"list_item_start":for(i="",this.token.task&&(i+=this.renderer.checkbox(this.token.checked));"list_item_end"!==this.next().type;)i+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(i);case"loose_item_start":for(i="";"list_item_end"!==this.next().type;)i+=this.tok();return this.renderer.listitem(i);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var b={},x=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;p.exec=p,d.options=d.setOptions=function(e){return g(d.defaults,e),d},d.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new s,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},d.defaults=d.getDefaults(),d.Parser=a,d.parser=a.parse,d.Renderer=s,d.TextRenderer=i,d.Lexer=r,d.lexer=r.lex,d.InlineLexer=n,d.inlineLexer=n.output,d.parse=d,e.exports=d}(this||"undefined"!=typeof window&&window)}).call(t,r("DuR2"))},GwPc:function(e,t,r){"use strict";var n=r("EFqf"),s=r.n(n);s.a.setOptions({renderer:new s.a.Renderer,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1});var i=new s.a.Renderer,a=function(e){return"<p>\n"+e+"</p>"},o=function(e,t,r){var n=e.includes("ruthub.com"),s=r.includes("<img");return('<a href="'+e+'" target="_blank"\n             title="'+(t||(s?e:r))+'" \n             '+(n?"":'rel="external nofollow noopener noreferrer"')+">\n             "+r+"</a>").replace(/\s+/g," ").replace("\n","")},l=function(e,t,r){return('<a href="'+e+'" \n             target="_blank" rel="nofollow noopener noreferrer">\n            <img src="'+e+'" \n                referrerPolicy="no-referrer" \n                title="'+(t||r||"RutHub")+'" \n                style="width:10%; height:15%"\n                alt="'+(r||t||e)+'"/>\n          </a>').replace(/\s+/g," ").replace("\n","")},c=function(e,t,r){var n=t+2;return"<h"+n+">"+e+"</h"+n+">\n"};i.link=o,i.image=l,i.paragraph=a,i.heading=c,t.a=function(e){return"string"!=typeof e?"":s()(e,{renderer:i})}},KelN:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return s});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tag-page"},[r("div",{staticClass:"tag-side"},[r("h4",{staticClass:"sidetitle"},[e._v("Related Tags")]),e._v(" "),e._l(e.relatedTags,function(t,n){return r("div",{key:n,staticClass:"sidebody"},[r("router-link",{attrs:{to:"/tag/"+t.tagname}},[e._v(e._s(t.tagname))])],1)})],2),e._v(" "),r("div",{staticClass:"tagmeta",style:{color:e.ftcolor,"background-color":e.bgcolor}},[r("h4",[r("b",{staticStyle:{"font-size":"1.6em"}},[e._v(e._s(e.tagDetail.tagname))]),e._v(" "),r("el-button",{attrs:{type:"text"},on:{click:e.toEditTag}},[r("small",{staticStyle:{"font-size":"0.65em"}},[e._v("...Edit")])])],1),e._v(" "),r("div",[r("div",{domProps:{innerHTML:e._s(e.detailContent||"...")}}),e._v(" "),e.less?r("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){e.short=!1}}},[e._v("\n        ...More\n      ")]):e._e(),e._v(" "),e.short?e._e():r("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){e.short=!0}}},[e._v("\n        ...Less\n      ")])],1),e._v(" "),r("div",{staticClass:"fobtn"},[r("el-button",{attrs:{type:"success",size:"mini",plain:""},on:{click:e.favTag}},[e._v(e._s(e.action)+" "+e._s(e.favCount)+"\n      ")]),r("br"),e._v(" "),e.tagLogo?r("img",{staticStyle:{"max-width":"65px","max-height":"65px","margin-top":"10px"},attrs:{src:e.tagLogo,alt:"Logo",referrerPolicy:"no-referrer"}}):e._e()],1)]),e._v(" "),r("div",{staticClass:"submenu"},[r("router-link",{attrs:{to:"/tag/"+e.tagname+"/readlist"}},[e._v("List")]),e._v(" "),r("router-link",{attrs:{to:"/tag/"+e.tagname+"/demand"}},[e._v("Request")]),e._v(" "),r("router-link",{attrs:{to:"/tag/"+e.tagname+"/item"}},[e._v("Item")]),e._v(" "),r("router-link",{attrs:{to:"/tag/"+e.tagname+"/comment"}},[e._v("Discuss")])],1),e._v(" "),r("div",{staticClass:"tag-view"},[r("router-view")],1),e._v(" "),r("el-dialog",{attrs:{title:"Edit Tag Description",width:"640px",visible:e.openDialog,"before-close":e.cancelOnClose},on:{"update:visible":function(t){e.openDialog=t}}},[r("el-form",{ref:"tagForm",attrs:{model:e.tagForm,rules:e.rules,size:"mini"}},[r("el-form-item",{attrs:{label:"Tag Name",prop:"name"}},[r("el-input",{model:{value:e.tagForm.name,callback:function(t){e.$set(e.tagForm,"name",t)},expression:"tagForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Parent Tag",prop:"parent"}},[r("el-input",{model:{value:e.tagForm.parent,callback:function(t){e.$set(e.tagForm,"parent",t)},expression:"tagForm.parent"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Logo",prop:"logo"}},[r("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.tagForm.logo,callback:function(t){e.$set(e.tagForm,"logo",t)},expression:"tagForm.logo"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Description",prop:"description"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:3}},model:{value:e.tagForm.description,callback:function(t){e.$set(e.tagForm,"description",t)},expression:"tagForm.description"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Background Color",prop:"bgcolor"}},[r("el-input",{attrs:{placeholder:"like: #3e7cae"},model:{value:e.tagForm.bgcolor,callback:function(t){e.$set(e.tagForm,"bgcolor",t)},expression:"tagForm.bgcolor"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Font Color",prop:"ftcolor"}},[r("el-input",{attrs:{placeholder:"like: #ffdf58"},model:{value:e.tagForm.ftcolor,callback:function(t){e.$set(e.tagForm,"ftcolor",t)},expression:"tagForm.ftcolor"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"success"},on:{click:function(t){e.onEditTag("tagForm",e.tagForm)}}},[e._v("\n        Submit\n      ")])],1)],1)],1)},s=[]},emn9:function(e,t,r){"use strict";var n=r("P9l9"),s=r("iF09"),i=r("6aq2"),a=r("GwPc");t.a={name:"tag-view",title:function(){return"#"+this.tagname},data:function(){return{action:"Follow",favCount:0,openDialog:!1,tagDetail:{},short:!0,less:!0,tagid:null,tagname:"",tagLogo:"",ftcolor:"",bgcolor:"",tagForm:{name:"",parent:"",logo:"",ftcolor:"",bgcolor:"",description:""},rules:{name:[{required:!0,validator:i.trimValid,message:"Required",trigger:"change"},{max:120,message:"Max Length should be 120",trigger:"change"}],parent:[{max:120,message:"Max Length should be 120",trigger:"change"}],logo:[{max:500,message:"Max Length should be 500",trigger:"change"}],ftcolor:[{max:60,message:"Max Length should be 60",trigger:"change"}],bgcolor:[{max:60,message:"Max Length should be 60",trigger:"change"}],description:[{required:!0,validator:i.trimValid,message:"Required",trigger:"change"}]},relatedTags:[]}},computed:{detailContent:function(){var e=Object(a.a)(this.tagDetail.descript);return this.less=e.length>128&&this.short,this.less?Object(i.showLess)(e,128):e}},methods:{loadData:function(){var e=this,t=this.$route.params.name;Object(n._10)(t).then(function(t){e.setData(t.data),e.relatedTags=t.data.tags.slice(0,16),e.action=e.checkFavor()})},setData:function(e){this.tagDetail=e,this.tagid=e.id,this.tagname=this.tagForm.name=e.tagname,this.tagLogo=this.tagForm.logo=e.logo,this.ftcolor=this.tagForm.ftcolor=e.ftcolor,this.bgcolor=this.tagForm.bgcolor=e.bgcolor,this.tagForm.description=e.descript,this.favCount=e.favcount},toEditTag:function(){var e=this,t=this.$store.getters.currentUserID;t&&Object(s.a)()?Object(n.m)(t,this.tagid).then(function(t){t.data?e.$message("in Editing...Please Try Later"):(e.openDialog=!0,Object(n._22)(e.tagid))}):(this.openDialog=!1,this.$message("Please Log in to Continue"),this.$router.push({path:"/login",query:{redirect:this.$route.fullPath}}))},cancelEditTag:function(){this.openDialog=!1,Object(n._45)(this.tagid)},cancelOnClose:function(e){this.cancelEditTag(),e()},onEditTag:function(e,t){var r=this;this.$refs[e].validate(function(e){if(e&&Object(s.a)()){var i={name:t.name.trim(),parent:t.parent.trim(),logo:t.logo.trim(),ftcolor:t.ftcolor.trim(),bgcolor:t.bgcolor.trim(),description:t.description.trim()};Object(n.z)(r.tagid,i).then(function(e){r.openDialog=!1,Object(n._45)(r.tagid),r.setData(e.data),r.$message({showClose:!0,message:"Tag Info Updated, Thanks",type:"success"})})}else Object(s.a)()||(r.$message({showClose:!0,message:"Please Log in to Continue"}),r.$router.push({path:"/login",query:{redirect:r.$route.fullPath}}))})},checkFavor:function(){var e=this;if(!Object(s.a)())return"Follow";Object(n.f)(this.tagid).then(function(t){e.action=t.data})},favTag:function(){var e=this;if(Object(s.a)()){var t=this.tagid;"Follow"===this.action?Object(n.C)("fav",t).then(function(){e.action="UnFollow",e.favCount+=1}):Object(n.C)("unfav",t).then(function(){e.action="Follow",e.favCount-=1})}else this.$message({showClose:!0,message:"Should Log in to Continue"}),this.$router.push({path:"/login",query:{redirect:this.$route.fullPath}})}},watch:{"$route.params.name":"loadData"},created:function(){this.loadData()}}},gS7q:function(e,t,r){var n=r("1LFC");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=r("rjj0").default;s("6e4f109e",n,!0,{})},ma6q:function(e,t,r){"use strict";function n(e){r("gS7q")}Object.defineProperty(t,"__esModule",{value:!0});var s=r("emn9"),i=r("KelN"),a=r("XyMi"),o=n,l=Object(a.a)(s.a,i.a,i.b,!1,o,"data-v-0fec11c6",null);t.default=l.exports}});