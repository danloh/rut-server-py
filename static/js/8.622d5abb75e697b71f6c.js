webpackJsonp([8],{"+zX4":function(e,t,r){var n=r("d+20");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=r("rjj0").default;s("37e3e433",n,!0,{})},B88Q:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return s});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",[r("svg",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"spinner",class:{show:e.show},attrs:{width:"44px",height:"44px",viewBox:"0 0 44 44"}},[r("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"4","stroke-linecap":"round",cx:"22",cy:"22",r:"20"}})])])},s=[]},D3Jz:function(e,t,r){"use strict";var n=r("6aq2"),s=r("GwPc");t.a={name:"rut-sum",props:["rut"],computed:{cover:function(){return this.rut.cover},intro:function(){var e=Object(s.a)(this.rut.intro);return Object(n.showLess)(e)}}}},DkQ0:function(e,t,r){"use strict";var n=r("Dd8w"),s=r.n(n),i=r("haTO"),a=r("cgFa"),o=r("P9l9"),l=r("NYxO");t.a={name:"home",title:"Home",components:{RutSum:a.a,Spinner:i.a},data:function(){return{loading:!0}},computed:s()({},Object(l.b)(["indexRuts","showTags"])),methods:{loadIndex:function(){var e=this,t=this.$store.getters.indexRuts;this.loading=!0,0!==t.length?this.loading=!1:Object(o.R)().then(function(t){e.$store.commit("SET_INDEX",t.data),e.loading=!1})}},created:function(){this.loadIndex()}}},EFqf:function(e,t,r){(function(t){!function(t){"use strict";function r(e){this.tokens=[],this.tokens.links={},this.options=e||d.defaults,this.rules=g.normal,this.options.gfm&&(this.options.tables?this.rules=g.tables:this.rules=g.gfm)}function n(e,t){if(this.options=t||d.defaults,this.links=e,this.rules=f.normal,this.renderer=this.options.renderer||new s,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=f.breaks:this.rules=f.gfm:this.options.pedantic&&(this.rules=f.pedantic)}function s(e){this.options=e||{}}function i(){}function a(e){this.tokens=[],this.token=null,this.options=e||d.defaults,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options}function o(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function p(e,t){return e=e.source,t=t||"",{replace:function(t,r){return r=r.source||r,r=r.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,r),this},getRegex:function(){return new RegExp(e,t)}}}function h(e,t){return m[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?m[" "+e]=e+"/":m[" "+e]=e.replace(/[^\/]*$/,"")),e=m[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}function u(){}function c(e){for(var t,r,n=1;n<arguments.length;n++){t=arguments[n];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}function d(e,t,n){if(void 0===e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null),t=c({},d.defaults,t||{});var s,i,l=t.highlight,p=0;try{s=r.lex(e,t)}catch(e){return n(e)}i=s.length;var h=function(e){if(e)return t.highlight=l,n(e);var r;try{r=a.parse(s,t)}catch(t){e=t}return t.highlight=l,e?n(e):n(null,r)};if(!l||l.length<3)return h();if(delete t.highlight,!i)return h();for(;p<s.length;p++)!function(e){"code"!==e.type?--i||h():l(e.text,e.lang,function(t,r){return t?h(t):null==r||r===e.text?--i||h():(e.text=r,e.escaped=!0,void(--i||h()))})}(s[p])}else try{return t&&(t=c({},d.defaults,t)),a.parse(r.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||d.defaults).silent)return"<p>An error occurred:</p><pre>"+o(e.message+"",!0)+"</pre>";throw e}}var g={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:u,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:u,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:u,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,text:/^[^\n]+/};g._label=/(?:\\[\[\]]|[^\[\]])+/,g._title=/(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/,g.def=p(g.def).replace("label",g._label).replace("title",g._title).getRegex(),g.bullet=/(?:[*+-]|\d+\.)/,g.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,g.item=p(g.item,"gm").replace(/bull/g,g.bullet).getRegex(),g.list=p(g.list).replace(/bull/g,g.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+g.def.source+")").getRegex(),g._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",g.html=p(g.html).replace("comment",/<!--[\s\S]*?-->/).replace("closed",/<(tag)[\s\S]+?<\/\1>/).replace("closing",/<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/).replace(/tag/g,g._tag).getRegex(),g.paragraph=p(g.paragraph).replace("hr",g.hr).replace("heading",g.heading).replace("lheading",g.lheading).replace("tag","<"+g._tag).getRegex(),g.blockquote=p(g.blockquote).replace("paragraph",g.paragraph).getRegex(),g.normal=c({},g),g.gfm=c({},g.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),g.gfm.paragraph=p(g.paragraph).replace("(?!","(?!"+g.gfm.fences.source.replace("\\1","\\2")+"|"+g.list.source.replace("\\1","\\3")+"|").getRegex(),g.tables=c({},g.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),r.rules=g,r.lex=function(e,t){return new r(t).lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,t){e=e.replace(/^ +$/gm,"");for(var r,n,s,i,a,o,l,p,h,u;e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e))e=e.substring(s[0].length),s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?s:s.replace(/\n+$/,"")});else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if(t&&(s=this.rules.nptable.exec(e))){for(e=e.substring(s[0].length),o={type:"table",header:s[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3].replace(/\n$/,"").split("\n")},p=0;p<o.align.length;p++)/^ *-+: *$/.test(o.align[p])?o.align[p]="right":/^ *:-+: *$/.test(o.align[p])?o.align[p]="center":/^ *:-+ *$/.test(o.align[p])?o.align[p]="left":o.align[p]=null;for(p=0;p<o.cells.length;p++)o.cells[p]=o.cells[p].split(/ *\| */);this.tokens.push(o)}else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),i=s[2],this.tokens.push({type:"list_start",ordered:i.length>1}),s=s[0].match(this.rules.item),r=!1,u=s.length,p=0;p<u;p++)o=s[p],l=o.length,o=o.replace(/^ *([*+-]|\d+\.) +/,""),~o.indexOf("\n ")&&(l-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+l+"}","gm"),"")),this.options.smartLists&&p!==u-1&&(a=g.bullet.exec(s[p+1])[0],i===a||i.length>1&&a.length>1||(e=s.slice(p+1).join("\n")+e,p=u-1)),n=r||/\n\n(?!\s*$)/.test(o),p!==u-1&&(r="\n"===o.charAt(o.length-1),n||(n=r)),this.tokens.push({type:n?"loose_item_start":"list_item_start"}),this.token(o,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:s[0]});else if(t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),h=s[1].toLowerCase(),this.tokens.links[h]||(this.tokens.links[h]={href:s[2],title:s[3]});else if(t&&(s=this.rules.table.exec(e))){for(e=e.substring(s[0].length),o={type:"table",header:s[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3].replace(/(?: *\| *)?\n$/,"").split("\n")},p=0;p<o.align.length;p++)/^ *-+: *$/.test(o.align[p])?o.align[p]="right":/^ *:-+: *$/.test(o.align[p])?o.align[p]="center":/^ *:-+ *$/.test(o.align[p])?o.align[p]="left":o.align[p]=null;for(p=0;p<o.cells.length;p++)o.cells[p]=o.cells[p].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(o)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2]?1:2,text:s[1]});else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var f={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:u,tag:/^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:u,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};f._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,f._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,f.autolink=p(f.autolink).replace("scheme",f._scheme).replace("email",f._email).getRegex(),f._inside=/(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,f._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,f.link=p(f.link).replace("inside",f._inside).replace("href",f._href).getRegex(),f.reflink=p(f.reflink).replace("inside",f._inside).getRegex(),f.normal=c({},f),f.pedantic=c({},f.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),f.gfm=c({},f.normal,{escape:p(f.escape).replace("])","~|])").getRegex(),url:p(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",f._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:p(f.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),f.breaks=c({},f.gfm,{br:p(f.br).replace("{2,}","*").getRegex(),text:p(f.gfm.text).replace("{2,}","*").getRegex()}),n.rules=f,n.output=function(e,t,r){return new n(t,r).output(e)},n.prototype.output=function(e){for(var t,r,n,s,i="";e;)if(s=this.rules.escape.exec(e))e=e.substring(s[0].length),i+=s[1];else if(s=this.rules.autolink.exec(e))e=e.substring(s[0].length),"@"===s[2]?(r=o(this.mangle(s[1])),n="mailto:"+r):(r=o(s[1]),n=r),i+=this.renderer.link(n,null,r);else if(this.inLink||!(s=this.rules.url.exec(e))){if(s=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(s[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(s[0])&&(this.inLink=!1),e=e.substring(s[0].length),i+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):o(s[0]):s[0];else if(s=this.rules.link.exec(e))e=e.substring(s[0].length),this.inLink=!0,i+=this.outputLink(s,{href:s[2],title:s[3]}),this.inLink=!1;else if((s=this.rules.reflink.exec(e))||(s=this.rules.nolink.exec(e))){if(e=e.substring(s[0].length),t=(s[2]||s[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){i+=s[0].charAt(0),e=s[0].substring(1)+e;continue}this.inLink=!0,i+=this.outputLink(s,t),this.inLink=!1}else if(s=this.rules.strong.exec(e))e=e.substring(s[0].length),i+=this.renderer.strong(this.output(s[2]||s[1]));else if(s=this.rules.em.exec(e))e=e.substring(s[0].length),i+=this.renderer.em(this.output(s[2]||s[1]));else if(s=this.rules.code.exec(e))e=e.substring(s[0].length),i+=this.renderer.codespan(o(s[2].trim(),!0));else if(s=this.rules.br.exec(e))e=e.substring(s[0].length),i+=this.renderer.br();else if(s=this.rules.del.exec(e))e=e.substring(s[0].length),i+=this.renderer.del(this.output(s[1]));else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),i+=this.renderer.text(o(this.smartypants(s[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else s[0]=this.rules._backpedal.exec(s[0])[0],e=e.substring(s[0].length),"@"===s[2]?(r=o(s[0]),n="mailto:"+r):(r=o(s[0]),n="www."===s[1]?"http://"+r:r),i+=this.renderer.link(n,null,r);return i},n.prototype.outputLink=function(e,t){var r=o(t.href),n=t.title?o(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(r,n,this.output(e[1])):this.renderer.image(r,n,o(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,r="",n=e.length,s=0;s<n;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r},s.prototype.code=function(e,t,r){if(this.options.highlight){var n=this.options.highlight(e,t);null!=n&&n!==e&&(r=!0,e=n)}return t?'<pre><code class="'+this.options.langPrefix+o(t,!0)+'">'+(r?e:o(e,!0))+"\n</code></pre>\n":"<pre><code>"+(r?e:o(e,!0))+"\n</code></pre>"},s.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},s.prototype.html=function(e){return e},s.prototype.heading=function(e,t,r){return"<h"+t+' id="'+this.options.headerPrefix+r.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},s.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},s.prototype.list=function(e,t){var r=t?"ol":"ul";return"<"+r+">\n"+e+"</"+r+">\n"},s.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},s.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},s.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},s.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},s.prototype.tablecell=function(e,t){var r=t.header?"th":"td";return(t.align?"<"+r+' style="text-align:'+t.align+'">':"<"+r+">")+e+"</"+r+">\n"},s.prototype.strong=function(e){return"<strong>"+e+"</strong>"},s.prototype.em=function(e){return"<em>"+e+"</em>"},s.prototype.codespan=function(e){return"<code>"+e+"</code>"},s.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},s.prototype.del=function(e){return"<del>"+e+"</del>"},s.prototype.link=function(e,t,r){if(this.options.sanitize){try{var n=decodeURIComponent(l(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return r}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return r}this.options.baseUrl&&!k.test(e)&&(e=h(this.options.baseUrl,e));var s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+r+"</a>"},s.prototype.image=function(e,t,r){this.options.baseUrl&&!k.test(e)&&(e=h(this.options.baseUrl,e));var n='<img src="'+e+'" alt="'+r+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">"},s.prototype.text=function(e){return e},i.prototype.strong=i.prototype.em=i.prototype.codespan=i.prototype.del=i.prototype.text=function(e){return e},i.prototype.link=i.prototype.image=function(e,t,r){return""+r},i.prototype.br=function(){return""},a.parse=function(e,t){return new a(t).parse(e)},a.prototype.parse=function(e){this.inline=new n(e.links,this.options),this.inlineText=new n(e.links,c({},this.options,{renderer:new i})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},a.prototype.next=function(){return this.token=this.tokens.pop()},a.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},a.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},a.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,l(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,r,n,s="",i="";for(r="",e=0;e<this.token.header.length;e++)r+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(r),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],r="",n=0;n<t.length;n++)r+=this.renderer.tablecell(this.inline.output(t[n]),{header:!1,align:this.token.align[n]});i+=this.renderer.tablerow(r)}return this.renderer.table(s,i);case"blockquote_start":for(i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":i="";for(var a=this.token.ordered;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,a);case"list_item_start":for(i="";"list_item_end"!==this.next().type;)i+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(i);case"loose_item_start":for(i="";"list_item_end"!==this.next().type;)i+=this.tok();return this.renderer.listitem(i);case"html":var o=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(o);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var m={},k=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;u.exec=u,d.options=d.setOptions=function(e){return c(d.defaults,e),d},d.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new s,xhtml:!1,baseUrl:null},d.Parser=a,d.parser=a.parse,d.Renderer=s,d.TextRenderer=i,d.Lexer=r,d.lexer=r.lex,d.InlineLexer=n,d.inlineLexer=n.output,d.parse=d,e.exports=d}(this||"undefined"!=typeof window&&window)}).call(t,r("DuR2"))},GwPc:function(e,t,r){"use strict";var n=r("EFqf"),s=r.n(n);s.a.setOptions({renderer:new s.a.Renderer,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1});var i=new s.a.Renderer,a=function(e){return"<p>"+e+"</p>"},o=function(e,t,r){var n=e.includes("readup.tips"),s=r.includes("<img");return('<a href="'+e+'" target="_blank"\n             title="'+(t||(s?e:r))+'" \n             '+(n?"":'rel="external nofollow noopener noreferrer"')+">\n             "+r+"</a>").replace(/\s+/g," ").replace("\n","")},l=function(e,t,r){return('<a href="'+e+'" \n             target="_blank" rel="nofollow noopener noreferrer">\n            <img src="'+e+'" \n                referrerPolicy="no-referrer" \n                title="'+(t||r||"readup.tips")+'" \n                style="width:10%; height:15%"\n                alt="'+(r||t||e)+'"/>\n          </a>').replace(/\s+/g," ").replace("\n","")},p=function(e,t,r){var n=t+2;return"<h"+n+">"+e+"</h"+n+">\n"};i.link=o,i.image=l,i.paragraph=a,i.heading=p,t.a=function(e){return"string"!=typeof e?"":s()(e,{renderer:i})}},HTl0:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".spinner[data-v-4e64c895]{-webkit-transition:opacity .15s ease;transition:opacity .15s ease;-webkit-animation:rotator-data-v-4e64c895 1.4s linear infinite;animation:rotator-data-v-4e64c895 1.4s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused}.spinner.show[data-v-4e64c895]{-webkit-animation-play-state:running;animation-play-state:running}.spinner.v-enter[data-v-4e64c895],.spinner.v-leave-active[data-v-4e64c895]{opacity:0}.spinner.v-enter-active[data-v-4e64c895],.spinner.v-leave[data-v-4e64c895]{opacity:1}.spinner .path[data-v-4e64c895]{stroke:#f60;stroke-dasharray:126;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:dash-data-v-4e64c895 1.4s ease-in-out infinite;animation:dash-data-v-4e64c895 1.4s ease-in-out infinite}@-webkit-keyframes rotator-data-v-4e64c895{0%{-webkit-transform:scale(.5) rotate(0deg);transform:scale(.5) rotate(0deg)}to{-webkit-transform:scale(.5) rotate(270deg);transform:scale(.5) rotate(270deg)}}@keyframes rotator-data-v-4e64c895{0%{-webkit-transform:scale(.5) rotate(0deg);transform:scale(.5) rotate(0deg)}to{-webkit-transform:scale(.5) rotate(270deg);transform:scale(.5) rotate(270deg)}}@-webkit-keyframes dash-data-v-4e64c895{0%{stroke-dashoffset:126}50%{stroke-dashoffset:63;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:126;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash-data-v-4e64c895{0%{stroke-dashoffset:126}50%{stroke-dashoffset:63;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:126;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}",""])},"Irp/":function(e,t,r){"use strict";function n(e){r("sSCK")}Object.defineProperty(t,"__esModule",{value:!0});var s=r("DkQ0"),i=r("uxv4"),a=r("XyMi"),o=n,l=Object(a.a)(s.a,i.a,i.b,!1,o,"data-v-d33378e8",null);t.default=l.exports},YBlJ:function(e,t,r){var n=r("HTl0");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=r("rjj0").default;s("965f2890",n,!0,{})},YW6E:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".home-page[data-v-d33378e8]{padding:10px 230px 10px 0;position:relative}.home-page .rut-list[data-v-d33378e8]{padding:auto}.home-page .home-side[data-v-d33378e8]{position:absolute;top:10px;right:0;width:220px;background-color:#fafbfa}.home-page .home-side .right-title[data-v-d33378e8]{background-color:#e5ebe4;padding:10px 15px}.home-page .home-side .right-body[data-v-d33378e8]{padding:5px 20px}.home-page .home-side .right-body a[data-v-d33378e8]:hover{color:#f60}",""])},Yl6R:function(e,t,r){"use strict";t.a={name:"spinner",props:["show"]}},cgFa:function(e,t,r){"use strict";function n(e){r("+zX4")}var s=r("D3Jz"),i=r("iZyR"),a=r("XyMi"),o=n,l=Object(a.a)(s.a,i.a,i.b,!1,o,"data-v-06dd0c92",null);t.a=l.exports},"d+20":function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".rut-sum[data-v-06dd0c92]{background-color:#fcfdfc;min-height:120px;padding:10px 30px 10px 100px;border-bottom:1px dashed #ddd;position:relative}.rut-sum[data-v-06dd0c92]:hover{background-color:#fafaf8}.rut-sum .cover[data-v-06dd0c92]{position:absolute;top:10px;left:5px}.rut-sum .title[data-v-06dd0c92]{font-size:20px;font-weight:700;padding-top:10px}.rut-sum .title a[data-v-06dd0c92]:hover{color:#f60}.rut-sum .intro[data-v-06dd0c92]{color:#828282;font-size:16px}.rut-sum .meta[data-v-06dd0c92]{font-size:14px;color:#337ab7}",""])},haTO:function(e,t,r){"use strict";function n(e){r("YBlJ")}var s=r("Yl6R"),i=r("B88Q"),a=r("XyMi"),o=n,l=Object(a.a)(s.a,i.a,i.b,!1,o,"data-v-4e64c895",null);t.a=l.exports},iZyR:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return s});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rut-sum"},[r("router-link",{attrs:{to:"/readlist/"+e.rut.id}},[r("span",[r("img",{staticClass:"cover",staticStyle:{width:"80px",height:"100px"},attrs:{src:e.cover,referrerPolicy:"no-referrer",alt:"Cover"}})]),e._v(" "),r("span",{staticClass:"title"},[r("router-link",{attrs:{to:"/readlist/"+e.rut.id}},[e._v(" "+e._s(e.rut.title))])],1),e._v(" "),r("div",{staticClass:"intro",domProps:{innerHTML:e._s(e.intro)}})]),e._v(" "),r("span",{staticClass:"meta"},[r("span",[e._v("  including "+e._s(e._f("pluralise")(e.rut.itemcount,"item"))+"  \n            | "),r("router-link",{attrs:{to:"/readlist/"+e.rut.id}},[e._v("...See Detail")])],1)])],1)},s=[]},sSCK:function(e,t,r){var n=r("YW6E");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=r("rjj0").default;s("3d2a3235",n,!0,{})},uxv4:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return s});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"home-page"},[r("div",{staticClass:"rut-list"},e._l(e.indexRuts,function(e){return r("rut-sum",{key:e.id,attrs:{rut:e}})})),e._v(" "),r("spinner",{attrs:{show:e.loading}}),e._v(" "),r("div",{staticClass:"home-side"},[r("h4",{staticClass:"right-title"},[e._v("Explore Topics...")]),e._v(" "),e._l(e.showTags,function(t,n){return r("div",{key:n,staticClass:"right-body"},[r("router-link",{attrs:{to:"/tag/"+t.tagid,title:t.tagname}},[e._v("\n          "+e._s(t.tagname.slice(0,18))+"\n        ")])],1)})],2)],1)])},s=[]}});