webpackJsonp([23],{"+SxW":function(t,e,n){"use strict";function r(t){n("EIGv")}var i=n("ByB/"),s=n("Y/D9"),o=n("XyMi"),l=r,a=Object(o.a)(i.a,s.a,s.b,!1,l,"data-v-59f81342",null);e.a=a.exports},"8fMu":function(t,e,n){"use strict";var r=n("i6y7"),i=n("rSTS"),s=n("XyMi"),o=Object(s.a)(r.a,i.a,i.b,!1,null,null,null);e.a=o.exports},"ByB/":function(t,e,n){"use strict";var r=n("P9l9"),i=n("iF09"),s=n("GwPc");e.a={name:"clip",props:["clip"],data:function(){return{vote:this.clip.vote}},computed:{creator:function(){return this.clip.creator},fromitem:function(){return this.clip.fromitem},clipContent:function(){return Object(s.a)(this.clip.body)}},methods:{upClip:function(){var t=this;if(Object(i.a)()){var e=this.clip.id;Object(r._32)(e).then(function(e){t.vote=e.data})}}}}},EFqf:function(t,e,n){(function(e){(function(){"use strict";function e(t){this.tokens=[],this.tokens.links={},this.options=t||c.defaults,this.rules=g.normal,this.options.gfm&&(this.options.tables?this.rules=g.tables:this.rules=g.gfm)}function n(t,e){if(this.options=e||c.defaults,this.links=t,this.rules=f.normal,this.renderer=this.options.renderer||new r,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=f.breaks:this.rules=f.gfm:this.options.pedantic&&(this.rules=f.pedantic)}function r(t){this.options=t||{}}function i(){}function s(t){this.tokens=[],this.token=null,this.options=t||c.defaults,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options}function o(t,e){return t.replace(e?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(t){return t.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(t,e){return e=e.toLowerCase(),"colon"===e?":":"#"===e.charAt(0)?"x"===e.charAt(1)?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""})}function a(t,e){return t=t.source,e=e||"",function n(r,i){return r?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),t=t.replace(r,i),n):new RegExp(t,e)}}function p(t,e){return d[" "+t]||(/^[^:]+:\/*[^\/]*$/.test(t)?d[" "+t]=t+"/":d[" "+t]=t.replace(/[^\/]*$/,"")),t=d[" "+t],"//"===e.slice(0,2)?t.replace(/:[\s\S]*/,":")+e:"/"===e.charAt(0)?t.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+e:t+e}function h(){}function u(t){for(var e,n,r=1;r<arguments.length;r++){e=arguments[r];for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}function c(t,n,r){if(void 0===t||null===t)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof t)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(r||"function"==typeof n){r||(r=n,n=null),n=u({},c.defaults,n||{});var i,l,a=n.highlight,p=0;try{i=e.lex(t,n)}catch(t){return r(t)}l=i.length;var h=function(t){if(t)return n.highlight=a,r(t);var e;try{e=s.parse(i,n)}catch(e){t=e}return n.highlight=a,t?r(t):r(null,e)};if(!a||a.length<3)return h();if(delete n.highlight,!l)return h();for(;p<i.length;p++)!function(t){"code"!==t.type?--l||h():a(t.text,t.lang,function(e,n){return e?h(e):null==n||n===t.text?--l||h():(t.text=n,t.escaped=!0,void(--l||h()))})}(i[p])}else try{return n&&(n=u({},c.defaults,n)),s.parse(e.lex(t,n),n)}catch(t){if(t.message+="\nPlease report this to https://github.com/chjj/marked.",(n||c.defaults).silent)return"<p>An error occurred:</p><pre>"+o(t.message+"",!0)+"</pre>";throw t}}var g={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:h,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:h,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:h,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,text:/^[^\n]+/};g._label=/(?:\\[\[\]]|[^\[\]])+/,g._title=/(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/,g.def=a(g.def)("label",g._label)("title",g._title)(),g.bullet=/(?:[*+-]|\d+\.)/,g.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,g.item=a(g.item,"gm")(/bull/g,g.bullet)(),g.list=a(g.list)(/bull/g,g.bullet)("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))")("def","\\n+(?="+g.def.source+")")(),g._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",g.html=a(g.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>]*)*?\/?>/)(/tag/g,g._tag)(),g.paragraph=a(g.paragraph)("hr",g.hr)("heading",g.heading)("lheading",g.lheading)("tag","<"+g._tag)(),g.blockquote=a(g.blockquote)("paragraph",g.paragraph)(),g.normal=u({},g),g.gfm=u({},g.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),g.gfm.paragraph=a(g.paragraph)("(?!","(?!"+g.gfm.fences.source.replace("\\1","\\2")+"|"+g.list.source.replace("\\1","\\3")+"|")(),g.tables=u({},g.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),e.rules=g,e.lex=function(t,n){return new e(n).lex(t)},e.prototype.lex=function(t){return t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(t,!0)},e.prototype.token=function(t,e){for(var n,r,i,s,o,l,a,p,h,u,t=t.replace(/^ +$/gm,"");t;)if((i=this.rules.newline.exec(t))&&(t=t.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(t))t=t.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(t))t=t.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(t))t=t.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(e&&(i=this.rules.nptable.exec(t))){for(t=t.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},p=0;p<l.align.length;p++)/^ *-+: *$/.test(l.align[p])?l.align[p]="right":/^ *:-+: *$/.test(l.align[p])?l.align[p]="center":/^ *:-+ *$/.test(l.align[p])?l.align[p]="left":l.align[p]=null;for(p=0;p<l.cells.length;p++)l.cells[p]=l.cells[p].split(/ *\| */);this.tokens.push(l)}else if(i=this.rules.hr.exec(t))t=t.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(t))t=t.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,e),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(t)){for(t=t.substring(i[0].length),s=i[2],this.tokens.push({type:"list_start",ordered:s.length>1}),i=i[0].match(this.rules.item),n=!1,u=i.length,p=0;p<u;p++)l=i[p],a=l.length,l=l.replace(/^ *([*+-]|\d+\.) +/,""),~l.indexOf("\n ")&&(a-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+a+"}","gm"),"")),this.options.smartLists&&p!==u-1&&(o=g.bullet.exec(i[p+1])[0],s===o||s.length>1&&o.length>1||(t=i.slice(p+1).join("\n")+t,p=u-1)),r=n||/\n\n(?!\s*$)/.test(l),p!==u-1&&(n="\n"===l.charAt(l.length-1),r||(r=n)),this.tokens.push({type:r?"loose_item_start":"list_item_start"}),this.token(l,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(t))t=t.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(e&&(i=this.rules.def.exec(t)))t=t.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),h=i[1].toLowerCase(),this.tokens.links[h]||(this.tokens.links[h]={href:i[2],title:i[3]});else if(e&&(i=this.rules.table.exec(t))){for(t=t.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},p=0;p<l.align.length;p++)/^ *-+: *$/.test(l.align[p])?l.align[p]="right":/^ *:-+: *$/.test(l.align[p])?l.align[p]="center":/^ *:-+ *$/.test(l.align[p])?l.align[p]="left":l.align[p]=null;for(p=0;p<l.cells.length;p++)l.cells[p]=l.cells[p].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(l)}else if(i=this.rules.lheading.exec(t))t=t.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(e&&(i=this.rules.paragraph.exec(t)))t=t.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(t))t=t.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0));return this.tokens};var f={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:h,tag:/^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/]*)*?\/?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|\\[\[\]]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,code:/^(`+)(\s*)([\s\S]*?[^`]?)\2\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:h,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};f._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,f._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,f.autolink=a(f.autolink)("scheme",f._scheme)("email",f._email)(),f._inside=/(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,f._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,f.link=a(f.link)("inside",f._inside)("href",f._href)(),f.reflink=a(f.reflink)("inside",f._inside)(),f.normal=u({},f),f.pedantic=u({},f.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),f.gfm=u({},f.normal,{escape:a(f.escape)("])","~|])")(),url:a(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)("email",f._email)(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:a(f.text)("]|","~]|")("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|")()}),f.breaks=u({},f.gfm,{br:a(f.br)("{2,}","*")(),text:a(f.gfm.text)("{2,}","*")()}),n.rules=f,n.output=function(t,e,r){return new n(e,r).output(t)},n.prototype.output=function(t){for(var e,n,r,i,s="";t;)if(i=this.rules.escape.exec(t))t=t.substring(i[0].length),s+=i[1];else if(i=this.rules.autolink.exec(t))t=t.substring(i[0].length),"@"===i[2]?(n=o(this.mangle(i[1])),r="mailto:"+n):(n=o(i[1]),r=n),s+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(t))){if(i=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),t=t.substring(i[0].length),s+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):o(i[0]):i[0];else if(i=this.rules.link.exec(t))t=t.substring(i[0].length),this.inLink=!0,s+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(t))||(i=this.rules.nolink.exec(t))){if(t=t.substring(i[0].length),e=(i[2]||i[1]).replace(/\s+/g," "),!(e=this.links[e.toLowerCase()])||!e.href){s+=i[0].charAt(0),t=i[0].substring(1)+t;continue}this.inLink=!0,s+=this.outputLink(i,e),this.inLink=!1}else if(i=this.rules.strong.exec(t))t=t.substring(i[0].length),s+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(t))t=t.substring(i[0].length),s+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(t))t=t.substring(i[0].length),s+=this.renderer.codespan(o(i[3].trim(),!0));else if(i=this.rules.br.exec(t))t=t.substring(i[0].length),s+=this.renderer.br();else if(i=this.rules.del.exec(t))t=t.substring(i[0].length),s+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(t))t=t.substring(i[0].length),s+=this.renderer.text(o(this.smartypants(i[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else i[0]=this.rules._backpedal.exec(i[0])[0],t=t.substring(i[0].length),"@"===i[2]?(n=o(i[0]),r="mailto:"+n):(n=o(i[0]),r="www."===i[1]?"http://"+n:n),s+=this.renderer.link(r,null,n);return s},n.prototype.outputLink=function(t,e){var n=o(e.href),r=e.title?o(e.title):null;return"!"!==t[0].charAt(0)?this.renderer.link(n,r,this.output(t[1])):this.renderer.image(n,r,o(t[1]))},n.prototype.smartypants=function(t){return this.options.smartypants?t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):t},n.prototype.mangle=function(t){if(!this.options.mangle)return t;for(var e,n="",r=t.length,i=0;i<r;i++)e=t.charCodeAt(i),Math.random()>.5&&(e="x"+e.toString(16)),n+="&#"+e+";";return n},r.prototype.code=function(t,e,n){if(this.options.highlight){var r=this.options.highlight(t,e);null!=r&&r!==t&&(n=!0,t=r)}return e?'<pre><code class="'+this.options.langPrefix+o(e,!0)+'">'+(n?t:o(t,!0))+"\n</code></pre>\n":"<pre><code>"+(n?t:o(t,!0))+"\n</code></pre>"},r.prototype.blockquote=function(t){return"<blockquote>\n"+t+"</blockquote>\n"},r.prototype.html=function(t){return t},r.prototype.heading=function(t,e,n){return"<h"+e+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+t+"</h"+e+">\n"},r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.prototype.list=function(t,e){var n=e?"ol":"ul";return"<"+n+">\n"+t+"</"+n+">\n"},r.prototype.listitem=function(t){return"<li>"+t+"</li>\n"},r.prototype.paragraph=function(t){return"<p>"+t+"</p>\n"},r.prototype.table=function(t,e){return"<table>\n<thead>\n"+t+"</thead>\n<tbody>\n"+e+"</tbody>\n</table>\n"},r.prototype.tablerow=function(t){return"<tr>\n"+t+"</tr>\n"},r.prototype.tablecell=function(t,e){var n=e.header?"th":"td";return(e.align?"<"+n+' style="text-align:'+e.align+'">':"<"+n+">")+t+"</"+n+">\n"},r.prototype.strong=function(t){return"<strong>"+t+"</strong>"},r.prototype.em=function(t){return"<em>"+t+"</em>"},r.prototype.codespan=function(t){return"<code>"+t+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(t){return"<del>"+t+"</del>"},r.prototype.link=function(t,e,n){if(this.options.sanitize){try{var r=decodeURIComponent(l(t)).replace(/[^\w:]/g,"").toLowerCase()}catch(t){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}this.options.baseUrl&&!m.test(t)&&(t=p(this.options.baseUrl,t));var i='<a href="'+t+'"';return e&&(i+=' title="'+e+'"'),i+=">"+n+"</a>"},r.prototype.image=function(t,e,n){this.options.baseUrl&&!m.test(t)&&(t=p(this.options.baseUrl,t));var r='<img src="'+t+'" alt="'+n+'"';return e&&(r+=' title="'+e+'"'),r+=this.options.xhtml?"/>":">"},r.prototype.text=function(t){return t},i.prototype.strong=i.prototype.em=i.prototype.codespan=i.prototype.del=i.prototype.text=function(t){return t},i.prototype.link=i.prototype.image=function(t,e,n){return""+n},i.prototype.br=function(){return""},s.parse=function(t,e){return new s(e).parse(t)},s.prototype.parse=function(t){this.inline=new n(t.links,this.options),this.inlineText=new n(t.links,u({},this.options,{renderer:new i})),this.tokens=t.reverse();for(var e="";this.next();)e+=this.tok();return e},s.prototype.next=function(){return this.token=this.tokens.pop()},s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},s.prototype.parseText=function(){for(var t=this.token.text;"text"===this.peek().type;)t+="\n"+this.next().text;return this.inline.output(t)},s.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,l(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var t,e,n,r,i="",s="";for(n="",t=0;t<this.token.header.length;t++)n+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(i+=this.renderer.tablerow(n),t=0;t<this.token.cells.length;t++){for(e=this.token.cells[t],n="",r=0;r<e.length;r++)n+=this.renderer.tablecell(this.inline.output(e[r]),{header:!1,align:this.token.align[r]});s+=this.renderer.tablerow(n)}return this.renderer.table(i,s);case"blockquote_start":for(var s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":for(var s="",o=this.token.ordered;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,o);case"list_item_start":for(var s="";"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(var s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(a);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var d={},m=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;h.exec=h,c.options=c.setOptions=function(t){return u(c.defaults,t),c},c.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new r,xhtml:!1,baseUrl:null},c.Parser=s,c.parser=s.parse,c.Renderer=r,c.TextRenderer=i,c.Lexer=e,c.lexer=e.lex,c.InlineLexer=n,c.inlineLexer=n.output,c.parse=c,t.exports=c}).call(function(){return this||("undefined"!=typeof window?window:e)}())}).call(e,n("DuR2"))},EIGv:function(t,e,n){var r=n("glwu");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("rjj0").default;i("409e1b6e",r,!0,{})},GwPc:function(t,e,n){"use strict";var r=n("EFqf"),i=n.n(r);i.a.setOptions({renderer:new i.a.Renderer,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1});var s=new i.a.Renderer,o=function(t){return"<p>"+t+"</p>"},l=function(t,e,n){var r=t.includes("readup.tips"),i=n.includes("<img");return('<a href="'+t+'" \n             target="_blank"\n             title="'+(e||(i?t:n))+'" \n             '+(r?"":'rel="external nofollow noopener noreferrer"')+">"+n+"\n          </a>").replace(/\s+/g," ").replace("\n","")},a=function(t,e,n){return('<a href="'+t+'" \n             target="_blank" rel="nofollow noopener noreferrer">\n            <img src="'+t+'" \n                title="'+(e||n||"readup.tips")+'" \n                style="width:10%; height:15%"\n                alt="'+(n||e||t)+'"/>\n          </a>').replace(/\s+/g," ").replace("\n","")};s.link=l,s.image=a,s.paragraph=o,e.a=function(t){return"string"!=typeof t?"":i()(t,{renderer:s})}},"Y/D9":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clip-main"},[n("div",{staticClass:"clipbody"},[n("span",{staticClass:"quoteleft"},[t._v("“")]),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.clipContent)}})]),t._v(" "),n("div",{staticClass:"meta"},[t._v("\n    From \n    "),n("router-link",{attrs:{to:"/item/"+t.fromitem.id,title:t.fromitem.title}},[t._v("\n      "+t._s(t.fromitem.title.slice(0,42))+"...\n    ")]),t._v("\n    via \n    "),n("router-link",{attrs:{to:"/profile/"+t.creator.id}},[t._v("\n      "+t._s(t.creator.name.slice(0,15))+"\n    ")]),t._v("\n    | "+t._s(t._f("toMDY")(t.clip.timestamp))+"\n    | "+t._s(t.vote)+" "),n("el-button",{attrs:{type:"text"},on:{click:t.upClip}},[t._v("Like")])],1)])},i=[]},glwu:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".clip-main[data-v-59f81342]{background-color:#fbfbf9;padding:5px;border-bottom:1px solid #eee;position:relative}.clip-main .meta[data-v-59f81342]{font-size:.75em;text-align:right}.clip-main .meta a[data-v-59f81342]:hover{color:red}.clip-main .clipbody[data-v-59f81342]{background-color:#f6f6f1;padding:8px;font-size:1.05em;color:#2b2117;position:relative}.clip-main .clipbody .quoteleft[data-v-59f81342]{position:absolute;top:10px;left:0;color:gray}",""])},i6y7:function(t,e,n){"use strict";var r=n("woOf"),i=n.n(r),s=n("Dd8w"),o=n.n(s),l=n("+SxW"),a=n("NYxO");e.a={name:"clip-list",props:{param:Object},components:{Clip:l.a},computed:o()({},Object(a.b)(["currentClips","currentP","maxP"]),{hasMore:function(){return this.currentP<this.maxP}}),methods:{loadClips:function(){var t=this.param;if("My"===this.param.ref){var e=this.$store.getters.currentUserID;if(!e)return;var n={userid:e};t=i()(n,this.param)}this.$store.dispatch("getClips",t)},loadmoreClip:function(){var t={page:this.currentP},e=i()(t,this.param);this.$store.dispatch("moreClips",e)}},created:function(){this.loadClips()}}},oTxi:function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{name:(t.ref||"someclips")+"-list",render:function(e){return e(i.a,{props:{param:t}})}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=n("8fMu")},rSTS:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-view"},[n("div",{staticClass:"clip-list"},t._l(t.currentClips,function(t){return n("clip",{key:t.id,attrs:{clip:t}})})),t._v(" "),t.hasMore?n("div",[n("el-button",{staticClass:"blockbtn",attrs:{size:"mini",disabled:!t.hasMore},on:{click:t.loadmoreClip}},[t._v("\n               Show More\n    ")])],1):t._e()])},i=[]}});