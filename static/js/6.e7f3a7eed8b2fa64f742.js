webpackJsonp([6],{"+x39":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.submitor?n("div",{staticClass:"headline"},[n("el-button",{staticClass:"vote",attrs:{type:"text",title:"upvote"},on:{click:e.upheadline}},[n("i",{staticClass:"el-icon-caret-top",staticStyle:{color:"#ff6600"}})]),e._v(" "),n("div",{staticClass:"headline-main"},[n("div",{staticClass:"headline-title"},[e.headline.url?[n("a",{attrs:{href:e.headline.url,target:"_blank",rel:"nofollow noopener noreferrer"}},[n("b",[e._v(e._s(e.headline.title))])]),e._v(" "),n("span",{staticClass:"host"},[e._v(" ("+e._s(e._f("host")(e.headline.url))+")")])]:[n("router-link",{attrs:{to:"/headline/"+e.headline.id}},[n("h4",[e._v(e._s(e.headline.title))])])]],2),e._v(" "),e.showCon?n("div",{staticClass:"content",domProps:{innerHTML:e._s(e.headlineContent)}}):e._e(),e._v(" "),n("div",{staticClass:"headline-bar"},[e._v("\n      By\n      "),n("router-link",{attrs:{to:"/profile/"+e.submitor.id}},[e._v("\n        "+e._s(e.submitor.name)+"\n      ")]),e._v("\n      "+e._s(e._f("timeAgo")(e.headline.timestamp))+"\n      | "+e._s(e.vote)+"\n      "),n("el-button",{attrs:{type:"text"},on:{click:e.upheadline}},[e._v("vote")]),e._v("\n      | "),n("router-link",{attrs:{to:"/headline/"+e.headline.id}},[e._v("\n          "+e._s(e._f("pluralise")(e.headline.commentcount,"Comment"))+" \n        ")])],1)])],1):e._e()},i=[]},"0QAo":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".headline[data-v-7f594ebc]{padding:5px 5px 5px 10px;position:relative;background-color:#fbfaf8;border-bottom:1px dashed #ddd}.headline .vote[data-v-7f594ebc]{position:absolute;top:5px;left:2px;text-align:center}.headline .headline-main[data-v-7f594ebc]{padding:5px}.headline .headline-main .headline-title[data-v-7f594ebc]{padding:0 5px}.headline .headline-main .headline-title a[data-v-7f594ebc]:hover{color:#409eff}.headline .headline-main .content[data-v-7f594ebc]{padding:auto}.headline .headline-main .headline-bar[data-v-7f594ebc],.headline .headline-main .host[data-v-7f594ebc]{color:#828282;font-size:12px}",""])},"0dNR":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"reply"},[n("el-form",{ref:"commentForm",attrs:{model:e.commentForm,rules:e.rules}},[n("el-form-item",{staticStyle:{"margin-bottom":"4px"},attrs:{prop:"comment"}},[n("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"Post a Comment"},model:{value:e.commentForm.comment,callback:function(t){e.$set(e.commentForm,"comment",t)},expression:"commentForm.comment"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{size:"mini",disabled:!e.commentForm.comment.trim()},on:{click:function(t){e.reply("commentForm",e.commentForm)}}},[e._v("\n                 Submit\n      ")])],1)],1)],1)},i=[]},"1qOs":function(e,t,n){"use strict";function r(e){n("DkNJ")}var i=n("99Gs"),s=n("+x39"),o=n("XyMi"),a=r,l=Object(o.a)(i.a,s.a,s.b,!1,a,"data-v-7f594ebc",null);t.a=l.exports},"99Gs":function(e,t,n){"use strict";var r=n("P9l9"),i=n("iF09"),s=n("GwPc");t.a={name:"headline",props:["headline","showCon"],data:function(){return{vote:this.headline.vote}},computed:{submitor:function(){return this.headline.submitor},headlineContent:function(){var e=this.headline.content;return e?Object(s.a)(e):""}},methods:{upheadline:function(){var e=this;if(Object(i.a)()){var t=this.headline.id;Object(r._47)(t).then(function(t){e.vote=t.data})}}}}},"9M7u":function(e,t,n){var r=n("LxjF");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("rjj0").default;i("35d4b7e7",r,!0,{})},DkNJ:function(e,t,n){var r=n("0QAo");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("rjj0").default;i("5a981637",r,!0,{})},EFqf:function(e,t,n){(function(t){!function(t){"use strict";function n(e){this.tokens=[],this.tokens.links={},this.options=e||d.defaults,this.rules=m.normal,this.options.gfm&&(this.options.tables?this.rules=m.tables:this.rules=m.gfm)}function r(e,t){if(this.options=t||d.defaults,this.links=e,this.rules=f.normal,this.renderer=this.options.renderer||new i,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=f.breaks:this.rules=f.gfm:this.options.pedantic&&(this.rules=f.pedantic)}function i(e){this.options=e||{}}function s(){}function o(e){this.tokens=[],this.token=null,this.options=e||d.defaults,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options}function a(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function c(e,t){return e=e.source,t=t||"",{replace:function(t,n){return n=n.source||n,n=n.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function h(e,t){return g[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?g[" "+e]=e+"/":g[" "+e]=e.replace(/[^\/]*$/,"")),e=g[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}function p(){}function u(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function d(e,t,r){if(void 0===e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(r||"function"==typeof t){r||(r=t,t=null),t=u({},d.defaults,t||{});var i,s,l=t.highlight,c=0;try{i=n.lex(e,t)}catch(e){return r(e)}s=i.length;var h=function(e){if(e)return t.highlight=l,r(e);var n;try{n=o.parse(i,t)}catch(t){e=t}return t.highlight=l,e?r(e):r(null,n)};if(!l||l.length<3)return h();if(delete t.highlight,!s)return h();for(;c<i.length;c++)!function(e){"code"!==e.type?--s||h():l(e.text,e.lang,function(t,n){return t?h(t):null==n||n===e.text?--s||h():(e.text=n,e.escaped=!0,void(--s||h()))})}(i[c])}else try{return t&&(t=u({},d.defaults,t)),o.parse(n.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||d.defaults).silent)return"<p>An error occurred:</p><pre>"+a(e.message+"",!0)+"</pre>";throw e}}var m={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:p,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:p,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:p,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,text:/^[^\n]+/};m._label=/(?:\\[\[\]]|[^\[\]])+/,m._title=/(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/,m.def=c(m.def).replace("label",m._label).replace("title",m._title).getRegex(),m.bullet=/(?:[*+-]|\d+\.)/,m.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,m.item=c(m.item,"gm").replace(/bull/g,m.bullet).getRegex(),m.list=c(m.list).replace(/bull/g,m.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+m.def.source+")").getRegex(),m._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",m.html=c(m.html).replace("comment",/<!--[\s\S]*?-->/).replace("closed",/<(tag)[\s\S]+?<\/\1>/).replace("closing",/<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/).replace(/tag/g,m._tag).getRegex(),m.paragraph=c(m.paragraph).replace("hr",m.hr).replace("heading",m.heading).replace("lheading",m.lheading).replace("tag","<"+m._tag).getRegex(),m.blockquote=c(m.blockquote).replace("paragraph",m.paragraph).getRegex(),m.normal=u({},m),m.gfm=u({},m.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),m.gfm.paragraph=c(m.paragraph).replace("(?!","(?!"+m.gfm.fences.source.replace("\\1","\\2")+"|"+m.list.source.replace("\\1","\\3")+"|").getRegex(),m.tables=u({},m.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),n.rules=m,n.lex=function(e,t){return new n(t).lex(e)},n.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},n.prototype.token=function(e,t){e=e.replace(/^ +$/gm,"");for(var n,r,i,s,o,a,l,c,h,p;e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),a={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},c=0;c<a.align.length;c++)/^ *-+: *$/.test(a.align[c])?a.align[c]="right":/^ *:-+: *$/.test(a.align[c])?a.align[c]="center":/^ *:-+ *$/.test(a.align[c])?a.align[c]="left":a.align[c]=null;for(c=0;c<a.cells.length;c++)a.cells[c]=a.cells[c].split(/ *\| */);this.tokens.push(a)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),s=i[2],this.tokens.push({type:"list_start",ordered:s.length>1}),i=i[0].match(this.rules.item),n=!1,p=i.length,c=0;c<p;c++)a=i[c],l=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),~a.indexOf("\n ")&&(l-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+l+"}","gm"),"")),this.options.smartLists&&c!==p-1&&(o=m.bullet.exec(i[c+1])[0],s===o||s.length>1&&o.length>1||(e=i.slice(c+1).join("\n")+e,c=p-1)),r=n||/\n\n(?!\s*$)/.test(a),c!==p-1&&(n="\n"===a.charAt(a.length-1),r||(r=n)),this.tokens.push({type:r?"loose_item_start":"list_item_start"}),this.token(a,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),h=i[1].toLowerCase(),this.tokens.links[h]||(this.tokens.links[h]={href:i[2],title:i[3]});else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),a={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},c=0;c<a.align.length;c++)/^ *-+: *$/.test(a.align[c])?a.align[c]="right":/^ *:-+: *$/.test(a.align[c])?a.align[c]="center":/^ *:-+ *$/.test(a.align[c])?a.align[c]="left":a.align[c]=null;for(c=0;c<a.cells.length;c++)a.cells[c]=a.cells[c].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var f={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:p,tag:/^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:p,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};f._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,f._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,f.autolink=c(f.autolink).replace("scheme",f._scheme).replace("email",f._email).getRegex(),f._inside=/(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,f._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,f.link=c(f.link).replace("inside",f._inside).replace("href",f._href).getRegex(),f.reflink=c(f.reflink).replace("inside",f._inside).getRegex(),f.normal=u({},f),f.pedantic=u({},f.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),f.gfm=u({},f.normal,{escape:c(f.escape).replace("])","~|])").getRegex(),url:c(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",f._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:c(f.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),f.breaks=u({},f.gfm,{br:c(f.br).replace("{2,}","*").getRegex(),text:c(f.gfm.text).replace("{2,}","*").getRegex()}),r.rules=f,r.output=function(e,t,n){return new r(t,n).output(e)},r.prototype.output=function(e){for(var t,n,r,i,s="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),s+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=a(this.mangle(i[1])),r="mailto:"+n):(n=a(i[1]),r=n),s+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),s+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):a(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,s+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){s+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,s+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),s+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),s+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),s+=this.renderer.codespan(a(i[2].trim(),!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),s+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),s+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),s+=this.renderer.text(a(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else i[0]=this.rules._backpedal.exec(i[0])[0],e=e.substring(i[0].length),"@"===i[2]?(n=a(i[0]),r="mailto:"+n):(n=a(i[0]),r="www."===i[1]?"http://"+n:n),s+=this.renderer.link(r,null,n);return s},r.prototype.outputLink=function(e,t){var n=a(t.href),r=t.title?a(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,a(e[1]))},r.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},r.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},i.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+a(t,!0)+'">'+(n?e:a(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:a(e,!0))+"\n</code></pre>"},i.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},i.prototype.html=function(e){return e},i.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},i.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},i.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},i.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},i.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},i.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},i.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},i.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},i.prototype.strong=function(e){return"<strong>"+e+"</strong>"},i.prototype.em=function(e){return"<em>"+e+"</em>"},i.prototype.codespan=function(e){return"<code>"+e+"</code>"},i.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},i.prototype.del=function(e){return"<del>"+e+"</del>"},i.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(l(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}this.options.baseUrl&&!b.test(e)&&(e=h(this.options.baseUrl,e));var i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},i.prototype.image=function(e,t,n){this.options.baseUrl&&!b.test(e)&&(e=h(this.options.baseUrl,e));var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},i.prototype.text=function(e){return e},s.prototype.strong=s.prototype.em=s.prototype.codespan=s.prototype.del=s.prototype.text=function(e){return e},s.prototype.link=s.prototype.image=function(e,t,n){return""+n},s.prototype.br=function(){return""},o.parse=function(e,t){return new o(t).parse(e)},o.prototype.parse=function(e){this.inline=new r(e.links,this.options),this.inlineText=new r(e.links,u({},this.options,{renderer:new s})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},o.prototype.next=function(){return this.token=this.tokens.pop()},o.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},o.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},o.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,l(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,i="",s="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});s+=this.renderer.tablerow(n)}return this.renderer.table(i,s);case"blockquote_start":for(s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":s="";for(var o=this.token.ordered;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,o);case"list_item_start":for(s="";"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(a);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var g={},b=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;p.exec=p,d.options=d.setOptions=function(e){return u(d.defaults,e),d},d.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new i,xhtml:!1,baseUrl:null},d.Parser=o,d.parser=o.parse,d.Renderer=i,d.TextRenderer=s,d.Lexer=n,d.lexer=n.lex,d.InlineLexer=r,d.inlineLexer=r.output,d.parse=d,e.exports=d}(this||"undefined"!=typeof window&&window)}).call(t,n("DuR2"))},FMmt:function(e,t,n){var r=n("siIr");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("rjj0").default;i("5845a6fe",r,!0,{})},Fcuw:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"headline-comment"},[n("headline",{key:e.headline.id,attrs:{headline:e.headline,showCon:!0}}),e._v(" "),n("b",[e._v(e._s(e._f("pluralise")(e.commentCount,"comment")))]),e._v(" "),e._l(e.comments,function(e){return n("div",{key:e.id},[n("comment",{attrs:{comment:e}})],1)}),e._v(" "),e.hasMoreComment?n("div",[n("el-button",{staticClass:"blockbtn",attrs:{size:"mini",disabled:!e.hasMoreComment},on:{click:e.loadmoreComment}},[e._v("\n               Show More Comments\n    ")])],1):e._e(),e._v(" "),n("div",{staticClass:"comment"},[n("reply",{staticClass:"reply",attrs:{refer:e.refer,show:!0},on:{newreply:e.updateNew}})],1)],2)},i=[]},GwPc:function(e,t,n){"use strict";var r=n("EFqf"),i=n.n(r);i.a.setOptions({renderer:new i.a.Renderer,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1});var s=new i.a.Renderer,o=function(e){return"<p>\n"+e+"</p>"},a=function(e,t,n){var r=e.includes("readup.tips"),i=n.includes("<img");return('<a href="'+e+'" target="_blank"\n             title="'+(t||(i?e:n))+'" \n             '+(r?"":'rel="external nofollow noopener noreferrer"')+">\n             "+n+"</a>").replace(/\s+/g," ").replace("\n","")},l=function(e,t,n){return('<a href="'+e+'" \n             target="_blank" rel="nofollow noopener noreferrer">\n            <img src="'+e+'" \n                referrerPolicy="no-referrer" \n                title="'+(t||n||"readup.tips")+'" \n                style="width:10%; height:15%"\n                alt="'+(n||t||e)+'"/>\n          </a>').replace(/\s+/g," ").replace("\n","")},c=function(e,t,n){var r=t+2;return"<h"+r+">"+e+"</h"+r+">\n"};s.link=a,s.image=l,s.paragraph=o,s.heading=c,t.a=function(e){return"string"!=typeof e?"":i()(e,{renderer:s})}},HJfm:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return o}),n.d(t,"e",function(){return a});var r=/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[#@!~%^$&*-])[a-zA-Z\d#@!~%^$&*-]{6,18}$/,i=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,s=/^[a-z][0-9a-z_]{2,19}$/,o=/^\w{2,20}$/,a=/(?<=[\n|\r|\s])#(\w+)/g},JPqk:function(e,t,n){"use strict";var r=n("Gu7T"),i=n.n(r),s=n("P9l9"),o=n("reXA"),a=n("kRrK"),l=n("1qOs");t.a={name:"headline-comment",title:function(){return"Discuss: "+this.headline.title},components:{Headline:l.a,Comment:o.a,Reply:a.a},data:function(){return{headline:{},comments:[],commentCount:0,currentPage:1,refer:{re:"headline",id:this.$route.params.id}}},computed:{hasMoreComment:function(){return this.comments.length<this.commentCount},submitor:function(){return this.headline.submitor}},methods:{loadCommentData:function(){var e=this,t=this.$route.params.id;Object(s.Q)(t).then(function(t){var n=t.data;e.headline=n,e.comments=n.comments,e.commentCount=n.commentcount})},loadmoreComment:function(){var e=this,t=this.$route.params.id,n={page:this.currentPage};Object(s.Q)(t,n).then(function(t){var n;(n=e.comments).push.apply(n,i()(t.data.comments)),e.currentPage+=1})},updateNew:function(e){this.comments.unshift(e),this.commentCount+=1}},created:function(){this.loadCommentData()}}},LxjF:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".headline-comment[data-v-699fe501]{padding:5px 200px 10px 0;position:relative}.headline-comment .headline-main[data-v-699fe501]{padding:5px}.headline-comment .headline-main .meta[data-v-699fe501]{color:#828282;font-size:.8em}.headline-comment .circle-side[data-v-699fe501]{position:absolute;top:10px;right:0;width:300px}",""])},Mmy0:function(e,t,n){"use strict";function r(e){n("9M7u")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("JPqk"),s=n("Fcuw"),o=n("XyMi"),a=r,l=Object(o.a)(i.a,s.a,s.b,!1,a,"data-v-699fe501",null);t.default=l.exports},Nucc:function(e,t,n){"use strict";var r=n("kRrK"),i=n("GwPc"),s=n("iF09"),o=n("P9l9"),a=n("HJfm");t.a={name:"comment",props:["comment"],components:{Reply:r.a},data:function(){return{open:!1,showRe:!1,hasChild:this.comment.children.length>0,childComments:this.comment.children,commentid:this.comment.id,refer:{re:"comment",id:this.comment.id}}},computed:{creator:function(){return this.comment.creator},commentContent:function(){return Object(i.a)(this.comment.body).replace(a.e,' <a href="/tag/$1"><small>#$1</small></a>')}},methods:{upComment:function(){Object(s.a)()&&Object(o._45)(this.comment.id)},updateNew:function(e){this.open=!0,this.childComments.unshift(e)}}}},dn1P:function(e,t,n){"use strict";var r=n("P9l9"),i=n("iF09");t.a={name:"reply",props:{refer:Object,show:{default:!1}},data:function(){return{commentForm:{comment:""},rules:{comment:[{min:1,max:500,message:"Required, Max 500 Characters",trigger:"blur"}]}}},methods:{reply:function(e,t){var n=this;this.$refs[e].validate(function(s){if(s&&t.comment.trim()&&Object(i.a)()){var o={comment:t.comment.trim()},a=n.refer.re,l=n.refer.id;Object(r._24)(a,l,o).then(function(e){n.$emit("newreply",e.data)}),n.resetForm(e),n.$emit("update:show",!1)}else Object(i.a)()||(n.$message({showClose:!0,message:"Should Log in to post Comment"}),n.$router.push({path:"/login",query:{redirect:n.$route.fullPath}}))})},resetForm:function(e){this.$refs[e].resetFields()}}}},kRrK:function(e,t,n){"use strict";function r(e){n("FMmt")}var i=n("dn1P"),s=n("0dNR"),o=n("XyMi"),a=r,l=Object(o.a)(i.a,s.a,s.b,!1,a,"data-v-1f45d910",null);t.a=l.exports},nvVC:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".comment-view[data-v-459c1af4]{background-color:#fcfcfb;border-top:1px solid #eee;padding:5px 2px 5px 5px;position:relative}.comment-view .avatar[data-v-459c1af4]{position:absolute;top:20px;left:2px}.comment-view .comment[data-v-459c1af4]{padding:5px}.comment-view .comment .by[data-v-459c1af4],.comment-view .comment .toggle[data-v-459c1af4]{font-size:10px;margin:2px 0}.comment-view .comment .by[data-v-459c1af4]{color:#bbb}.comment-view .comment .by a[data-v-459c1af4]{color:#828282;text-decoration:underline}.comment-view .comment .content[data-v-459c1af4]{margin:.2em 0}.comment-view .comment .content a[data-v-459c1af4]:hover{color:#f60}.comment-view .comment .toggle[data-v-459c1af4]{background-color:#eef2f5;padding:.1em .5em;border-radius:4px}.comment-view .comment .toggle a[data-v-459c1af4]{color:#828282;cursor:pointer}.comment-view .comment .toggle.open[data-v-459c1af4]{padding:0;background-color:transparent;margin-bottom:-.5em}.comment-view .comment .comment-children[data-v-459c1af4]{margin-left:.5em}",""])},ozhQ:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comment-view"},[e.comment?n("div",{staticClass:"comment"},[n("div",{staticClass:"by",attrs:{id:"comment"+e.commentid}},[n("router-link",{attrs:{to:"/profile/"+e.creator.id}},[n("b",[e._v(e._s(e.creator.name))])]),e._v("\n        "+e._s(e._f("timeAgo")(e.comment.timestamp))+"\n    ")],1),e._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:e._s(e.commentContent)}}),e._v(" "),n("el-button",{attrs:{type:"text",size:"mini",title:"like"},on:{click:e.upComment}},[n("i",{staticClass:"el-icon-caret-top",staticStyle:{color:"grey"}})]),e._v(" "),n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){e.showRe=!e.showRe}}},[n("small",{staticStyle:{color:"#aaa"}},[e._v(e._s(e.showRe?"hide":"reply"))])]),e._v(" "),e.hasChild?n("span",{staticClass:"toggle",class:{open:e.open}},[n("a",{on:{click:function(t){e.open=!e.open}}},[e._v("\n        "+e._s(e.open?"[-] fold":"[+] "+e.childComments.length+" collapsed")+" \n      ")])]):e._e(),e._v(" "),n("reply",{staticClass:"reply",attrs:{refer:e.refer,show:e.showRe},on:{"update:show":function(t){e.showRe=t},newreply:e.updateNew}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"comment-children"},e._l(e.childComments,function(e){return n("comment",{key:e.id,attrs:{comment:e}})}))],1):e._e()])},i=[]},reXA:function(e,t,n){"use strict";function r(e){n("zb7Z")}var i=n("Nucc"),s=n("ozhQ"),o=n("XyMi"),a=r,l=Object(o.a)(i.a,s.a,s.b,!1,a,"data-v-459c1af4",null);t.a=l.exports},siIr:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".reply[data-v-1f45d910]{padding:5px 0}",""])},zb7Z:function(e,t,n){var r=n("nvVC");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("rjj0").default;i("1607e700",r,!0,{})}});