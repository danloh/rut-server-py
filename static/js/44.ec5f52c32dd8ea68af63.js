webpackJsonp([44],{W4mg:function(t,e,i){"use strict";function a(t){i("XrO/")}Object.defineProperty(e,"__esModule",{value:!0});var c=i("uw/v"),n=i("eOau"),r=i("XyMi"),o=a,s=Object(r.a)(c.a,n.a,n.b,!1,o,"data-v-2168c33c",null);e.default=s.exports},"XrO/":function(t,e,i){var a=i("xpKj");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var c=i("rjj0").default;c("289dc7fc",a,!0,{})},eOau:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return c});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b",[t._v("What's Happening")]),t._v(" "),t._l(t.activity,function(e,a){return e.event.type?i("div",{key:a,staticClass:"activity-list"},[i("span",[t._v(t._s(e.action)+" "+t._s(e.event.type))]),t._v(" "),i("router-link",{attrs:{to:"/"+e.event.type+"/"+e.event.id}},[t._v("\n      "+t._s(e.event.content)+"\n    ")]),t._v(" "),i("br"),i("span",{staticClass:"act-time"},[t._v(t._s(t._f("timeAgo")(e.timestamp)))]),t._v(" "),e.event.cover?i("img",{staticClass:"act-cover",staticStyle:{width:"50px",height:"60px"},attrs:{src:e.event.cover,referrerPolicy:"no-referrer"}}):t._e()],1):t._e()}),t._v(" "),0===t.activity.length?i("div",[t._v("Nothing Happened")]):t._e()],2)},c=[]},"uw/v":function(t,e,i){"use strict";var a=i("P9l9");e.a={name:"profile-activity",data:function(){return{activity:[]}},methods:{loadActivity:function(){var t=this,e=this.$route.params.id;Object(a.U)(e).then(function(e){t.activity=e.data})}},watch:{"$route.params.id":"loadActivity"},created:function(){this.loadActivity()}}},xpKj:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,".activity-list[data-v-2168c33c]{min-height:60px;margin-top:5px;border-top:1px solid #eee;background-color:#eceff1;padding:10px 10px 10px 65px;position:relative}.activity-list .act-cover[data-v-2168c33c]{position:absolute;top:10px;left:5px}.activity-list .act-time[data-v-2168c33c]{font-size:.8em;color:green}",""])}});