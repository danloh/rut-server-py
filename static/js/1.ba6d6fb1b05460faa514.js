webpackJsonp([1],{"12NI":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".comment[data-v-0e413581]{border-top:1px solid #eee;padding:.2em 1em;background-color:#fafaf8;position:relative}.comment .by[data-v-0e413581],.comment .toggle[data-v-0e413581]{font-size:.7em;margin:.2em 0}.comment .by[data-v-0e413581]{color:#828282}.comment .by a[data-v-0e413581]{color:#828282;text-decoration:underline}.comment .content[data-v-0e413581]{font-size:1.1em;margin:.2em 0}.comment .content a[data-v-0e413581]:hover{color:#f60}.comment .toggle[data-v-0e413581]{background-color:#eef2f5;padding:.1em .5em;border-radius:4px}.comment .toggle a[data-v-0e413581]{color:#828282;cursor:pointer}.comment .toggle.open[data-v-0e413581]{padding:0;background-color:transparent;margin-bottom:-.5em}.comment .comment-children[data-v-0e413581]{margin-left:1.5em}",""])},"2wXa":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-sum"},[n("div",[n("img",{staticClass:"thumb",attrs:{src:e.avatar,alt:"Avatar"}})]),e._v(" "),n("div",{staticClass:"info"},[n("span",{staticClass:"name"},[n("router-link",{attrs:{to:"/profile/"+e.user.id}},[e._v(e._s(e.user.name))])],1),e._v("  \n    "),n("span",{staticClass:"location"},[e._v(e._s(e.user.location||""))]),e._v(" "),n("br"),e._v(" "),n("span",[e._v(e._s(e.user.about?e.user.about.slice(0,255):"...")+" ")])]),e._v(" "),n("div",{staticClass:"operate"},[n("el-button",{attrs:{size:"mini"},on:{click:e.followTa}},[e._v(e._s(e.action))])],1)])},i=[]},"4MvR":function(e,t,n){var r=n("on+U");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("rjj0").default;i("2552e878",r,!0,{})},CnHd:function(e,t,n){var r=n("12NI");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("rjj0").default;i("8c41a5fe",r,!0,{})},"D+dB":function(e,t,n){"use strict";var r=n("Gu7T"),i=n.n(r),s=n("wscQ"),o=n("P9l9");t.a={name:"challenger-list",components:{UserSum:s.a},data:function(){return{challengers:[],challengerCount:0,currentPage:1}},computed:{hasMore:function(){return this.challengers.length<this.challengerCount}},methods:{loadChallengers:function(){var e=this,t=this.$route.params.id;Object(o.X)(t).then(function(t){var n=t.data;e.challengers=n.challengers,e.challengerCount=n.challengercount})},loadmoreChallengers:function(){var e=this,t=this.$route.params.id,n={page:this.currentPage};Object(o.X)(t,n).then(function(t){var n;(n=e.challengers).push.apply(n,i()(t.data.challengers)),e.currentPage+=1})}},created:function(){this.loadChallengers()}}},EFqf:function(e,t,n){(function(t){(function(){"use strict";function t(e){this.tokens=[],this.tokens.links={},this.options=e||p.defaults,this.rules=m.normal,this.options.gfm&&(this.options.tables?this.rules=m.tables:this.rules=m.gfm)}function n(e,t){if(this.options=t||p.defaults,this.links=e,this.rules=d.normal,this.renderer=this.options.renderer||new r,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=d.breaks:this.rules=d.gfm:this.options.pedantic&&(this.rules=d.pedantic)}function r(e){this.options=e||{}}function i(){}function s(e){this.tokens=[],this.token=null,this.options=e||p.defaults,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options}function o(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function a(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function l(e,t){return e=e.source,t=t||"",function n(r,i){return r?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,i),n):new RegExp(e,t)}}function c(e,t){return f[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?f[" "+e]=e+"/":f[" "+e]=e.replace(/[^\/]*$/,"")),e=f[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}function u(){}function h(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function p(e,n,r){if(void 0===e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(r||"function"==typeof n){r||(r=n,n=null),n=h({},p.defaults,n||{});var i,a,l=n.highlight,c=0;try{i=t.lex(e,n)}catch(e){return r(e)}a=i.length;var u=function(e){if(e)return n.highlight=l,r(e);var t;try{t=s.parse(i,n)}catch(t){e=t}return n.highlight=l,e?r(e):r(null,t)};if(!l||l.length<3)return u();if(delete n.highlight,!a)return u();for(;c<i.length;c++)!function(e){"code"!==e.type?--a||u():l(e.text,e.lang,function(t,n){return t?u(t):null==n||n===e.text?--a||u():(e.text=n,e.escaped=!0,void(--a||u()))})}(i[c])}else try{return n&&(n=h({},p.defaults,n)),s.parse(t.lex(e,n),n)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(n||p.defaults).silent)return"<p>An error occurred:</p><pre>"+o(e.message+"",!0)+"</pre>";throw e}}var m={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:u,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:u,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:u,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,text:/^[^\n]+/};m._label=/(?:\\[\[\]]|[^\[\]])+/,m._title=/(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/,m.def=l(m.def)("label",m._label)("title",m._title)(),m.bullet=/(?:[*+-]|\d+\.)/,m.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,m.item=l(m.item,"gm")(/bull/g,m.bullet)(),m.list=l(m.list)(/bull/g,m.bullet)("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))")("def","\\n+(?="+m.def.source+")")(),m._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",m.html=l(m.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>]*)*?\/?>/)(/tag/g,m._tag)(),m.paragraph=l(m.paragraph)("hr",m.hr)("heading",m.heading)("lheading",m.lheading)("tag","<"+m._tag)(),m.blockquote=l(m.blockquote)("paragraph",m.paragraph)(),m.normal=h({},m),m.gfm=h({},m.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),m.gfm.paragraph=l(m.paragraph)("(?!","(?!"+m.gfm.fences.source.replace("\\1","\\2")+"|"+m.list.source.replace("\\1","\\3")+"|")(),m.tables=h({},m.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=m,t.lex=function(e,n){return new t(n).lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t){for(var n,r,i,s,o,a,l,c,u,h,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),a={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},c=0;c<a.align.length;c++)/^ *-+: *$/.test(a.align[c])?a.align[c]="right":/^ *:-+: *$/.test(a.align[c])?a.align[c]="center":/^ *:-+ *$/.test(a.align[c])?a.align[c]="left":a.align[c]=null;for(c=0;c<a.cells.length;c++)a.cells[c]=a.cells[c].split(/ *\| */);this.tokens.push(a)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),s=i[2],this.tokens.push({type:"list_start",ordered:s.length>1}),i=i[0].match(this.rules.item),n=!1,h=i.length,c=0;c<h;c++)a=i[c],l=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),~a.indexOf("\n ")&&(l-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+l+"}","gm"),"")),this.options.smartLists&&c!==h-1&&(o=m.bullet.exec(i[c+1])[0],s===o||s.length>1&&o.length>1||(e=i.slice(c+1).join("\n")+e,c=h-1)),r=n||/\n\n(?!\s*$)/.test(a),c!==h-1&&(n="\n"===a.charAt(a.length-1),r||(r=n)),this.tokens.push({type:r?"loose_item_start":"list_item_start"}),this.token(a,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),u=i[1].toLowerCase(),this.tokens.links[u]||(this.tokens.links[u]={href:i[2],title:i[3]});else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),a={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},c=0;c<a.align.length;c++)/^ *-+: *$/.test(a.align[c])?a.align[c]="right":/^ *:-+: *$/.test(a.align[c])?a.align[c]="center":/^ *:-+ *$/.test(a.align[c])?a.align[c]="left":a.align[c]=null;for(c=0;c<a.cells.length;c++)a.cells[c]=a.cells[c].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var d={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:u,tag:/^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/]*)*?\/?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|\\[\[\]]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,code:/^(`+)(\s*)([\s\S]*?[^`]?)\2\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:u,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};d._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,d._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,d.autolink=l(d.autolink)("scheme",d._scheme)("email",d._email)(),d._inside=/(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,d._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,d.link=l(d.link)("inside",d._inside)("href",d._href)(),d.reflink=l(d.reflink)("inside",d._inside)(),d.normal=h({},d),d.pedantic=h({},d.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),d.gfm=h({},d.normal,{escape:l(d.escape)("])","~|])")(),url:l(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)("email",d._email)(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(d.text)("]|","~]|")("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|")()}),d.breaks=h({},d.gfm,{br:l(d.br)("{2,}","*")(),text:l(d.gfm.text)("{2,}","*")()}),n.rules=d,n.output=function(e,t,r){return new n(t,r).output(e)},n.prototype.output=function(e){for(var t,n,r,i,s="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),s+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=o(this.mangle(i[1])),r="mailto:"+n):(n=o(i[1]),r=n),s+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),s+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):o(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,s+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){s+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,s+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),s+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),s+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),s+=this.renderer.codespan(o(i[3].trim(),!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),s+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),s+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),s+=this.renderer.text(o(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else i[0]=this.rules._backpedal.exec(i[0])[0],e=e.substring(i[0].length),"@"===i[2]?(n=o(i[0]),r="mailto:"+n):(n=o(i[0]),r="www."===i[1]?"http://"+n:n),s+=this.renderer.link(r,null,n);return s},n.prototype.outputLink=function(e,t){var n=o(t.href),r=t.title?o(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,o(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},r.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+o(t,!0)+'">'+(n?e:o(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:o(e,!0))+"\n</code></pre>"},r.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.prototype.html=function(e){return e},r.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},r.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},r.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},r.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},r.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},r.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},r.prototype.strong=function(e){return"<strong>"+e+"</strong>"},r.prototype.em=function(e){return"<em>"+e+"</em>"},r.prototype.codespan=function(e){return"<code>"+e+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(e){return"<del>"+e+"</del>"},r.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(a(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}this.options.baseUrl&&!g.test(e)&&(e=c(this.options.baseUrl,e));var i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>"},r.prototype.image=function(e,t,n){this.options.baseUrl&&!g.test(e)&&(e=c(this.options.baseUrl,e));var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},r.prototype.text=function(e){return e},i.prototype.strong=i.prototype.em=i.prototype.codespan=i.prototype.del=i.prototype.text=function(e){return e},i.prototype.link=i.prototype.image=function(e,t,n){return""+n},i.prototype.br=function(){return""},s.parse=function(e,t){return new s(t).parse(e)},s.prototype.parse=function(e){this.inline=new n(e.links,this.options),this.inlineText=new n(e.links,h({},this.options,{renderer:new i})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},s.prototype.next=function(){return this.token=this.tokens.pop()},s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},s.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},s.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,a(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,i="",s="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});s+=this.renderer.tablerow(n)}return this.renderer.table(i,s);case"blockquote_start":for(var s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":for(var s="",o=this.token.ordered;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,o);case"list_item_start":for(var s="";"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(var s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":var l=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(l);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var f={},g=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;u.exec=u,p.options=p.setOptions=function(e){return h(p.defaults,e),p},p.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new r,xhtml:!1,baseUrl:null},p.Parser=s,p.parser=s.parse,p.Renderer=r,p.TextRenderer=i,p.Lexer=t,p.lexer=t.lex,p.InlineLexer=n,p.inlineLexer=n.output,p.parse=p,e.exports=p}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,n("DuR2"))},GwPc:function(e,t,n){"use strict";var r=n("EFqf"),i=n.n(r);i.a.setOptions({renderer:new i.a.Renderer,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1});var s=new i.a.Renderer,o=function(e){return"<p>"+e+"</p>"},a=function(e,t,n){var r=e.includes("readup.tips"),i=n.includes("<img");return('<a href="'+e+'" \n             target="_blank"\n             title="'+(t||(i?e:n))+'" \n             '+(r?"":'rel="external nofollow noopener noreferrer"')+">"+n+"\n          </a>").replace(/\s+/g," ").replace("\n","")},l=function(e,t,n){return('<a href="'+e+'" \n             target="_blank" rel="nofollow noopener noreferrer">\n            <img src="'+e+'" \n                title="'+(t||n||"readup.tips")+'" \n                style="width:10%; height:15%"\n                alt="'+(n||t||e)+'"/>\n          </a>').replace(/\s+/g," ").replace("\n","")};s.link=a,s.image=l,s.paragraph=o,t.a=function(e){return"string"!=typeof e?"":i()(e,{renderer:s})}},HmZV:function(e,t,n){"use strict";t.a={name:"circle-list",props:["circles"]}},K19p:function(e,t,n){var r=n("KvAC");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("rjj0").default;i("0b976e26",r,!0,{})},KvAC:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".circle-list[data-v-46dd75aa]{width:100%;border-top:2px solid #eee;padding:5px 0}.meta[data-v-46dd75aa]{font-size:.75em;color:green;margin:0}",""])},Nucc:function(e,t,n){"use strict";var r=n("kRrK"),i=n("GwPc");t.a={name:"comment",props:["comment"],components:{Reply:r.a},data:function(){return{open:!1,showRe:!1,hasChild:this.comment.children.length>0,childComments:this.comment.children,refer:{re:"comment",id:this.comment.id}}},computed:{creator:function(){return this.comment.creator},commentContent:function(){return Object(i.a)(this.comment.body)}},methods:{updateNew:function(e){this.open=!0,this.childComments.unshift(e)}}}},PWCy:function(e,t,n){"use strict";var r=n("P9l9"),i=n("iF09");t.a={name:"user-sum",props:["user"],data:function(){return{action:this.checkFollow()}},computed:{avatar:function(){return this.user.avatar}},methods:{checkFollow:function(){var e=this;if(!Object(i.a)())return"Follow";var t=this.user.id;Object(r.g)(t).then(function(t){e.action=t.data})},followTa:function(){var e=this;if(Object(i.a)()){var t=this.user.id;"Follow"===this.action?Object(r._6)("follow",t).then(function(){e.action="UnFollow"}):Object(r._6)("unfollow",t).then(function(){e.action="Follow"})}else this.$message({showClose:!0,message:"Should Log in to Continue"}),this.$router.push({path:"/login",query:{redirect:this.$route.fullPath}})}}}},UGwW:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".user-list[data-v-247019da]{width:100%}",""])},ZXMV:function(e,t,n){"use strict";function r(e){n("K19p")}var i=n("HmZV"),s=n("sHnT"),o=n("XyMi"),a=r,l=Object(o.a)(i.a,s.a,s.b,!1,a,"data-v-46dd75aa",null);t.a=l.exports},ZtSv:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".rut-comment[data-v-5ea79cdc]{padding:5px 315px 10px 0;position:relative}.rut-comment .comment-main[data-v-5ea79cdc]{padding:auto}.rut-comment .circle-side[data-v-5ea79cdc]{position:absolute;top:10px;right:0;width:300px}",""])},b2JC:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.comment?n("div",{staticClass:"comment"},[n("div",{staticClass:"by"},[n("router-link",{attrs:{to:"/profile/"+e.creator.id}},[e._v(e._s(e.creator.name))]),e._v("\n    ~ "+e._s(e._f("timeAgo")(e.comment.timestamp))+"\n  ")],1),e._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:e._s(e.commentContent)}}),e._v(" "),n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){e.showRe=!e.showRe}}},[e._v("\n    "+e._s(e.showRe?"Hide":"Reply")+"\n  ")]),e._v(" "),e.hasChild?n("span",{staticClass:"toggle",class:{open:e.open}},[n("a",{on:{click:function(t){e.open=!e.open}}},[e._v("\n      "+e._s(e.open?"[-]":"[+] "+e.childComments.length+" collapsed")+" \n    ")])]):e._e(),e._v(" "),n("reply",{staticClass:"reply",attrs:{refer:e.refer,show:e.showRe},on:{"update:show":function(t){e.showRe=t},newreply:e.updateNew}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"comment-children"},e._l(e.childComments,function(e){return n("comment",{key:e.id,attrs:{comment:e}})}))],1):e._e()},i=[]},b3vX:function(e,t,n){"use strict";function r(e){n("vERB")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("bew5"),s=n("qsjO"),o=n("XyMi"),a=r,l=Object(o.a)(i.a,s.a,s.b,!1,a,"data-v-5ea79cdc",null);t.default=l.exports},bew5:function(e,t,n){"use strict";var r=n("Gu7T"),i=n.n(r),s=n("P9l9"),o=n("reXA"),a=n("kRrK"),l=n("oHJM"),c=n("ZXMV"),u=n("iF09"),h=n("6aq2");t.a={name:"rut-comment",title:function(){return"Discuss: "+this.rut.title},components:{Comment:o.a,Reply:a.a,ChallengeList:l.a,CircleList:c.a},data:function(){return{rut:{},comments:[],commentCount:0,currentPage:1,circles:[],circleCount:0,currentC:1,refer:{re:"rut",id:this.$route.params.id},openDialog:!1,circleForm:{name:"",address:"",area:"",time:"",note:""},rules:{name:[{required:!0,validator:h.trimValid,message:"Required",trigger:"blur"},{max:64,message:"Max Length should be 64",trigger:"blur"}],address:[{required:!0,validator:h.trimValid,message:"Required",trigger:"blur"},{max:120,message:"Max Length should be 120",trigger:"blur"}],area:[{required:!0,validator:h.trimValid,message:"Required",trigger:"blur"},{max:64,message:"Max Length should be 64",trigger:"blur"}],time:[{required:!0,validator:h.trimValid,message:"Required",trigger:"blur"},{max:64,message:"Max Length should be 64",trigger:"blur"}],note:[{required:!0,validator:h.trimValid,message:"Required",trigger:"blur"},{max:120,message:"Max Length should be 200",trigger:"blur"}]}}},computed:{hasMoreComment:function(){return this.comments.length<this.commentCount},hasMoreCircle:function(){return this.circles.length<this.circleCount},hasChallenge:function(){return this.rut.challengecount>0}},methods:{loadCommentData:function(){var e=this,t=this.$route.params.id;Object(s.Z)(t).then(function(t){var n=t.data;e.rut=n,e.comments=n.comments,e.commentCount=n.commentcount})},loadmoreComment:function(){var e=this,t=this.$route.params.id,n={page:this.currentPage};Object(s.Z)(t,n).then(function(t){var n;(n=e.comments).push.apply(n,i()(t.data.comments)),e.currentPage+=1})},loadCircles:function(){var e=this,t=this.$route.params.id;Object(s.Y)(t).then(function(t){var n=t.data;e.circles=n.circles,e.circleCount=n.circlecount})},loadmoreCircle:function(){var e=this,t=this.$route.params.id,n={page:this.currentC};Object(s.Y)(t,n).then(function(t){var n;(n=e.circles).push.apply(n,i()(t.data.circles)),e.currentC+=1})},updateNew:function(e){this.comments.unshift(e),this.commentCount+=1},newCircle:function(e,t){var n=this;this.$refs[e].validate(function(e){if(e&&Object(u.a)()){var r={name:t.name.trim(),address:t.address.trim(),area:t.area.trim(),time:t.time.trim(),note:t.note.trim()},i=n.rut.id;Object(s._19)(i,r).then(function(e){n.openDialog=!1,n.circles.push(e.data)})}else Object(u.a)()||(n.$message({showClose:!0,message:"Please Log in to Continue"}),n.$router.push({path:"/login",query:{redirect:n.$route.fullPath}}))})}},created:function(){this.loadCommentData(),this.loadCircles()}}},byfZ:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b",[e._v("Who Challenging: ")]),n("br"),e._v(" "),n("div",{staticClass:"user-list"},e._l(e.challengers,function(e){return n("user-sum",{key:e.id,attrs:{user:e}})})),e._v(" "),e.hasMore?n("div",[n("el-button",{staticClass:"blockbtn",attrs:{size:"mini",disabled:!e.hasMore},on:{click:e.loadmoreChallengers}},[e._v("\n               Show More\n    ")])],1):e._e(),e._v(" "),n("br")])},i=[]},cyWQ:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"reply"},[n("el-form",{ref:"commentForm",attrs:{model:e.commentForm,rules:e.rules}},[n("el-form-item",{staticStyle:{"margin-bottom":"4px"},attrs:{prop:"comment"}},[n("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"Post a Comment"},model:{value:e.commentForm.comment,callback:function(t){e.$set(e.commentForm,"comment",t)},expression:"commentForm.comment"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{size:"mini",disabled:!e.commentForm.comment.trim()},on:{click:function(t){e.reply("commentForm",e.commentForm)}}},[e._v("\n                 Submit\n      ")])],1)],1)],1)},i=[]},dn1P:function(e,t,n){"use strict";var r=n("P9l9"),i=n("iF09");t.a={name:"reply",props:{refer:Object,show:{default:!1}},data:function(){return{commentForm:{comment:""},rules:{comment:[{min:1,max:500,message:"Required, Max 500 Characters",trigger:"blur"}]}}},methods:{reply:function(e,t){var n=this;this.$refs[e].validate(function(s){if(s&&t.comment.trim()&&Object(i.a)()){var o={comment:t.comment.trim()},a=n.refer.re,l=n.refer.id;Object(r._13)(a,l,o).then(function(e){n.$emit("newreply",e.data)}),n.resetForm(e),n.$emit("update:show",!1)}else Object(i.a)()||(n.$message({showClose:!0,message:"Should Log in to post Comment"}),n.$router.push({path:"/login",query:{redirect:n.$route.fullPath}}))})},resetForm:function(e){this.$refs[e].resetFields()}}}},"ieF/":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".reply[data-v-1f45d910]{padding:5px 0}",""])},kRrK:function(e,t,n){"use strict";function r(e){n("nWx4")}var i=n("dn1P"),s=n("cyWQ"),o=n("XyMi"),a=r,l=Object(o.a)(i.a,s.a,s.b,!1,a,"data-v-1f45d910",null);t.a=l.exports},nWx4:function(e,t,n){var r=n("ieF/");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("rjj0").default;i("6a953f9e",r,!0,{})},oHJM:function(e,t,n){"use strict";function r(e){n("zqM3")}var i=n("D+dB"),s=n("byfZ"),o=n("XyMi"),a=r,l=Object(o.a)(i.a,s.a,s.b,!1,a,"data-v-247019da",null);t.a=l.exports},"on+U":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".user-sum[data-v-a314255c]{background-color:#fff;min-height:65px;padding:10px 100px 10px 70px;border-bottom:1px solid #eee;position:relative}.user-sum .thumb[data-v-a314255c]{width:50px;height:60px;position:absolute;top:10px;left:10px}.user-sum .info[data-v-a314255c]{font-size:.9em}.user-sum .info .name[data-v-a314255c]{font-size:1.2em;font-weight:700}.user-sum .info .name a[data-v-a314255c]:hover{color:red}.user-sum .info .location[data-v-a314255c]{font-size:.95em;color:#9cce83}.user-sum .operate[data-v-a314255c]{position:absolute;top:10px;right:2px}",""])},qsjO:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rut-comment"},[n("div",{staticClass:"comment-main"},[n("b",{staticStyle:{"font-size":"1.2em"}},[e._v("Discuss List:   ")]),e._v(" "),n("router-link",{attrs:{to:"/readuplist/"+e.rut.id}},[e._v("\n      "+e._s(e.rut.title)+"\n    ")])],1),e._v(" "),n("b",[e._v(e._s(e._f("pluralise")(e.commentCount,"comment")))]),e._v(" "),e._l(e.comments,function(e){return n("div",{key:e.id},[n("comment",{attrs:{comment:e}})],1)}),e._v(" "),e.hasMoreComment?n("div",[n("el-button",{staticClass:"blockbtn",attrs:{size:"mini",disabled:!e.hasMoreComment},on:{click:e.loadmoreComment}},[e._v("\n               Show More Comments\n    ")])],1):e._e(),e._v(" "),n("div",{staticClass:"comment"},[n("reply",{staticClass:"reply",attrs:{refer:e.refer,show:!0},on:{newreply:e.updateNew}})],1),e._v(" "),e.hasChallenge?n("div",[n("challenge-list")],1):e._e(),e._v(" "),n("div",{staticClass:"circle-side"},[n("b",{staticStyle:{"font-size":"1.2em"}},[e._v("Circles")]),e._v(" "),n("circle-list",{attrs:{circles:e.circles}}),e._v(" "),e.hasMoreCircle?n("div",[n("el-button",{staticClass:"blockbtn",attrs:{size:"mini",disabled:!e.hasMoreCircle},on:{click:e.loadmoreCircle}},[e._v("\n                 Show More Circles\n      ")])],1):e._e(),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(t){e.openDialog=!0}}},[e._v("...Launch Circle")]),e._v(" "),n("el-dialog",{attrs:{title:"Launch Circle",visible:e.openDialog,width:"40%"},on:{"update:visible":function(t){e.openDialog=t}}},[n("el-form",{ref:"circleForm",attrs:{model:e.circleForm,rules:e.rules,size:"mini"}},[n("el-form-item",{attrs:{prop:"name"}},[n("el-input",{attrs:{placeholder:"Name"},model:{value:e.circleForm.name,callback:function(t){e.$set(e.circleForm,"name",t)},expression:"circleForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"address"}},[n("el-input",{attrs:{placeholder:"Detail Address"},model:{value:e.circleForm.address,callback:function(t){e.$set(e.circleForm,"address",t)},expression:"circleForm.address"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"area"}},[n("el-input",{attrs:{placeholder:"Area, like: BayArea SF"},model:{value:e.circleForm.area,callback:function(t){e.$set(e.circleForm,"area",t)},expression:"circleForm.area"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"time"}},[n("el-input",{attrs:{placeholder:"Time, like: Every Sat. 2PM - 4PM"},model:{value:e.circleForm.time,callback:function(t){e.$set(e.circleForm,"time",t)},expression:"circleForm.time"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"note"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:3},placeholder:"Can provide more info by linking to a detail page"},model:{value:e.circleForm.note,callback:function(t){e.$set(e.circleForm,"note",t)},expression:"circleForm.note"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.openDialog=!1}}},[e._v("Cancel")]),e._v(" "),n("el-button",{attrs:{type:"success"},on:{click:function(t){e.newCircle("circleForm",e.circleForm)}}},[e._v("\n                   Launch\n        ")])],1)],1)],1)],2)},i=[]},reXA:function(e,t,n){"use strict";function r(e){n("CnHd")}var i=n("Nucc"),s=n("b2JC"),o=n("XyMi"),a=r,l=Object(o.a)(i.a,s.a,s.b,!1,a,"data-v-0e413581",null);t.a=l.exports},sHnT:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.circles,function(t){return n("div",{key:t.id,staticClass:"circle-list"},[n("b",[e._v(e._s(t.name))]),e._v("  \n    "),n("router-link",{staticStyle:{"font-size":"0.85em"},attrs:{to:"/profile/"+t.facilitator.id}},[e._v("\n      "+e._s(t.facilitator.name.slice(0,12))+"\n    ")]),e._v(" "),n("p",[e._v(e._s(t.note))]),e._v(" "),n("p",{staticClass:"meta"},[n("i",{staticClass:"el-icon-location-outline"}),e._v(" "+e._s(t.area))]),e._v(" "),n("p",{staticClass:"meta"},[n("i",{staticClass:"el-icon-location"}),e._v(" "+e._s(t.address))]),e._v(" "),n("p",{staticClass:"meta"},[n("i",{staticClass:"el-icon-time"}),e._v(" "+e._s(t.time))])],1)}))},i=[]},vERB:function(e,t,n){var r=n("ZtSv");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("rjj0").default;i("6412253c",r,!0,{})},wscQ:function(e,t,n){"use strict";function r(e){n("4MvR")}var i=n("PWCy"),s=n("2wXa"),o=n("XyMi"),a=r,l=Object(o.a)(i.a,s.a,s.b,!1,a,"data-v-a314255c",null);t.a=l.exports},zqM3:function(e,t,n){var r=n("UGwW");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("rjj0").default;i("1a677e66",r,!0,{})}});