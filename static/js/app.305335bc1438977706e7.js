webpackJsonp([52],{"6/qA":function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return u});var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h3",{staticClass:"title"},[t._v("Please Log in")]),t._v(" "),e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.rules}},[e("el-form-item",{attrs:{prop:"username"}},[e("el-input",{attrs:{placeholder:"Username"},model:{value:t.loginForm.username,callback:function(n){t.$set(t.loginForm,"username",n)},expression:"loginForm.username"}})],1),t._v(" "),e("el-form-item",{attrs:{prop:"password"}},[e("el-input",{attrs:{type:t.pwdType,placeholder:"Password"},model:{value:t.loginForm.password,callback:function(n){t.$set(t.loginForm,"password",n)},expression:"loginForm.password"}})],1),t._v(" "),e("p",{staticStyle:{"font-size":"0.75em"}},[t._v("\n      Notice: Just Use Cookies Here to keep you logged in for a limited period, \n      Never collect any Private Information. \n      The service may not function properly if disable cookies.\n    ")]),t._v(" "),e("el-form-item",[e("el-button",{staticClass:"blockbtn",attrs:{type:"primary"},on:{click:function(n){t.onLogin("loginForm",t.loginForm)}}},[t._v("\n                  Log in\n      ")])],1),t._v(" "),e("el-button",{attrs:{type:"text"},on:{click:function(n){t.toNext("/register")}}},[t._v("\n      No Account? Sign Up\n    ")]),t._v("\n              \n    "),e("el-button",{attrs:{type:"text"},on:{click:function(n){t.toNext("/forget")}}},[t._v("\n       Forget Password?\n    ")])],1)],1)},u=[]},"62IG":function(t,n,e){"use strict";function r(t){e("CMkM")}var u=e("QsGi"),i=e("IuS6"),o=e("XyMi"),a=r,c=Object(o.a)(u.a,i.a,i.b,!1,a,"data-v-49b86df0",null);n.a=c.exports},"6aq2":function(t,n,e){"use strict";function r(t,n){return t+" "+n+(t<=1?"":"s")}function u(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=n?t.replace(/\s+/g,"T").concat("Z"):t,u=new Date(e),i=u.getTime(),o=Number(Date.now())/1e3+0-Number(i)/1e3;return o<3600?p()(~~(o/60),0)?"just now":r(~~(o/60),"minute")+" ago":o<86400?r(~~(o/3600),"hour")+" ago":o<2592e3?r(~~(o/86400),"day")+" ago":o<31104e3?r(~~(o/2592e3),"month")+" ago":r(~~(o/31104e3),"year")+" ago"}function i(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=n?t.replace(/\s+/g,"T").concat("Z"):t,u=new Date(e),i=u.getTime(),o=Number(Date.now())/1e3-Number(i)/1e3,a=r(~~(Math.abs(o)/86400),"day");return o<0?a+" Left":"⚠ "+a+" Past"}function o(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=n?t.replace(/\s+/g,"T").concat("Z"):t;return t?new Date(e).toLocaleString():t}function a(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)return t;var e=n?t.replace(/\s+/g,"T").concat("Z"):t;return t=new Date(e),m[t.getMonth()+1]+" "+t.getDate()+","+t.getFullYear()}function c(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:155,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!t)return"";if(t.length>n&&e){var r=t.substring(0,n),u=r.lastIndexOf("<a"),i=r.lastIndexOf("</a>"),o=u>i?u:n;return r=r.substring(0,o)+" ..."}return t}function s(t,n,e){""===n.trim()?e(new Error("Blank Value")):e()}function d(t){var n=t.replace(/^https?:\/\//,"").replace(/\/.*$/,""),e=n.split(".").slice(-3);return"www"===e[0]&&e.shift(),e.join(".")}function f(t){for(var n={},e=[],r=0;r<t.length;r++)n[t[r].id]=t[r];for(var u in n)e.push(n[u]);return e}Object.defineProperty(n,"__esModule",{value:!0}),n.pluralise=r,n.timeAgo=u,n.timeGap=i,n.toLocal=o,n.toMDY=a,n.showLess=c,n.trimValid=s,n.host=d,n.uniq=f;var l=e("g4PW"),p=e.n(l),m={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}},AJVI:function(t,n){},ATBM:function(t,n,e){"use strict";var r=e("Gu7T"),u=e.n(r),i=e("6aq2"),o={createdRuts:[],onRoads:[],seItems:[]},a={SET_RUTS:function(t,n){t.createdRuts=n},SET_ROADS:function(t,n){t.onRoads=n},ADD_ITEMS:function(t,n){var e;(e=t.seItems).unshift.apply(e,u()(n)),t.seItems=Object(i.uniq)(t.seItems)}};n.a={state:o,mutations:a}},CMkM:function(t,n){},EnNo:function(t,n,e){"use strict";var r=e("Gu7T"),u=e.n(r),i=e("//Fk"),o=e.n(i),a=e("P9l9"),c={totalDemands:0,currentD:0,maxD:0,currentDemands:[],demandDetail:{}},s={getDemands:function(t,n){var e=t.commit;Object(a.L)(n).then(function(t){e("SET_DEMANDS",t.data)})},getDemand:function(t,n){var e=t.commit;return new o.a(function(t,r){Object(a.I)(n).then(function(n){e("SET_DEMAND",n.data),t(n)}).catch(function(t){r(t)})})},postDemand:function(t,n){var e=t.commit;Object(a._25)(n).then(function(t){e("ADD_DEMAND",t.data)})},moreDemands:function(t,n){var e=t.commit;Object(a.L)(n).then(function(t){e("MORE_DEMANDS",t.data.demands)})}},d={SET_DEMANDS:function(t,n){t.totalDemands=n.total,t.currentD=1,t.maxD=Math.ceil(n.total/20),t.currentDemands=n.demands},MORE_DEMANDS:function(t,n){var e;t.currentD+=1,(e=t.currentDemands).push.apply(e,u()(n))},ADD_DEMAND:function(t,n){t.currentDemands.unshift(n)},SET_DEMAND:function(t,n){t.demandDetail=n}};n.a={state:c,actions:s,mutations:d}},IcnI:function(t,n,e){"use strict";var r=e("//Fk"),u=e.n(r),i=e("7+uW"),o=e("NYxO"),a=e("iF09"),c=e("UjVw"),s=e("XMX0"),d=e("hTt+"),f=e("SPCp"),l=e("EnNo"),p=e("yYt1"),m=e("ATBM"),h=e("P9l9");i.default.use(o.a);var v={currentUserID:Number(Object(a.b)()),authed:Boolean(Object(a.b)())&&Boolean(Object(a.c)()),token:Object(a.c)(),currentUser:{},whoEdit:{}},g={SET_USER:function(t,n){var e=n.userid;t.currentUserID=e,t.authed=Boolean(e),Object(a.f)(e,n.exp)},SET_TOKEN:function(t,n){var e=n.token;t.token=e,Object(a.g)(e,n.exp)},SET_INFO:function(t,n){t.currentUser=n},DEL_TOKEN:function(t){t.token="",t.currentUserID="",t.currentUser={},t.authed=!1,Object(a.e)(),Object(a.d)()},SET_WHOEDIT:function(t,n){t.whoEdit=n}},_={getCurrentUser:function(t){var n=t.commit;return new u.a(function(t,e){Object(h.H)().then(function(e){n("SET_INFO",e.data),t(e)}).catch(function(t){e(t)})})},registerUser:function(t,n){var e=t.commit;return new u.a(function(t,r){Object(h._33)(n).then(function(n){var r=n.data;e("SET_TOKEN",r),e("SET_USER",r),t(n)}).catch(function(t){r(t)})})},loginUser:function(t,n){var e=t.commit;return new u.a(function(t,r){Object(h._21)(n).then(function(n){var r=n.data;e("SET_TOKEN",r),e("SET_USER",r),t(n)}).catch(function(t){r(t)})})}},b=new o.a.Store({state:v,actions:_,mutations:g,getters:c.a,modules:{rut:s.a,item:d.a,clip:f.a,demand:l.a,headline:p.a,preload:m.a}});n.a=b},IoXI:function(t,n,e){"use strict";function r(t){var n=t.$options.title;if(n)return"function"==typeof n?n.call(t):n}function u(t){var n=r(t);n&&(document.title=n+" @ReadupTips")}var i={beforeUpdate:function(){u(this)},mounted:function(){u(this)}};n.a=i},IuS6:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return u});var r=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},u=[]},M93x:function(t,n,e){"use strict";function r(t){e("VRPm")}var u=e("xJD8"),i=e("fFh9"),o=e("XyMi"),a=r,c=Object(o.a)(u.a,i.a,i.b,!1,a,null,null);n.a=c.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("//Fk"),u=e.n(r),i=e("fZjL"),o=e.n(i),a=e("MU8w"),c=(e.n(a),e("7+uW")),s=e("mtWM"),d=e.n(s),f=e("tvR6"),l=(e.n(f),e("wUZ8")),p=e.n(l),m=e("urW8"),h=e.n(m),v=e("62IG"),g=e("IoXI"),_=e("6aq2"),b=e("iF09"),w=e("M93x"),E=e("YaEn"),D=e("IcnI"),I=e("zL8q");e.n(I);c.default.config.productionTip=!1,h.a.use(p.a),c.default.use(I.Dialog),c.default.use(I.Dropdown),c.default.use(I.DropdownMenu),c.default.use(I.DropdownItem),c.default.use(I.Input),c.default.use(I.Radio),c.default.use(I.RadioGroup),c.default.use(I.RadioButton),c.default.use(I.Select),c.default.use(I.Option),c.default.use(I.OptionGroup),c.default.use(I.Button),c.default.use(I.ButtonGroup),c.default.use(I.DatePicker),c.default.use(I.Form),c.default.use(I.FormItem),c.default.use(I.Icon),c.default.prototype.$message=I.Message;var T=c.default.prototype.$bar=new c.default(v.a).$mount();document.body.appendChild(T.$el),c.default.mixin(g.a),o()(_).forEach(function(t){c.default.filter(t,_[t])}),d.a.interceptors.response.use(function(t){return t},function(t){if(t.response)switch(t.response.status){case 401:D.a.commit("DEL_TOKEN"),"/login"!==E.a.currentRoute.path&&(E.a.push({path:"/login",query:{redirect:E.a.currentRoute.fullPath}}),(new c.default).$message("Oops...Access Denied, Need To Log in"));break;case 403:(new c.default).$message("Oops...Forbidden");break;case 404:(new c.default).$message("The Resource Was Not Found"),E.a.replace({path:"/404"});break;case 418:(new c.default).$message("Eureka! 42");break;case 500:(new c.default).$message("Oops...Error"),E.a.replace({path:"/"});break;default:(new c.default).$message("Oops...Something Failed: "+t.response.statusText)}return u.a.reject(t)}),E.a.beforeEach(function(t,n,e){if(T.start(),t.meta.auth){var r=Object(b.c)();d.a.defaults.auth={username:r,password:r},r?e():e({path:"/login",query:{redirect:t.fullPath}})}else e()}),E.a.afterEach(function(){T.finish()}),c.default.prototype.$axios=d.a,n.default=d.a,new c.default({router:E.a,store:D.a,render:function(t){return t(w.a)}}).$mount("#app")},P9l9:function(t,n,e){"use strict";e.d(n,"_33",function(){return s}),e.d(n,"j",function(){return d}),e.d(n,"d",function(){return f}),e.d(n,"n",function(){return l}),e.d(n,"b",function(){return m}),e.d(n,"_34",function(){return h}),e.d(n,"_35",function(){return v}),e.d(n,"e",function(){return g}),e.d(n,"_21",function(){return _}),e.d(n,"_32",function(){return p}),e.d(n,"H",function(){return b}),e.d(n,"_13",function(){return w}),e.d(n,"O",function(){return E}),e.d(n,"V",function(){return D}),e.d(n,"N",function(){return I}),e.d(n,"u",function(){return T}),e.d(n,"h",function(){return S}),e.d(n,"_15",function(){return k}),e.d(n,"_30",function(){return y}),e.d(n,"S",function(){return R}),e.d(n,"E",function(){return O}),e.d(n,"_1",function(){return M}),e.d(n,"_39",function(){return C}),e.d(n,"_6",function(){return x}),e.d(n,"_7",function(){return Bt}),e.d(n,"F",function(){return Yt}),e.d(n,"_31",function(){return Jt}),e.d(n,"r",function(){return Xt}),e.d(n,"o",function(){return zt}),e.d(n,"l",function(){return P}),e.d(n,"_40",function(){return N}),e.d(n,"k",function(){return H}),e.d(n,"c",function(){return A}),e.d(n,"_19",function(){return j}),e.d(n,"_42",function(){return L}),e.d(n,"x",function(){return F}),e.d(n,"y",function(){return $}),e.d(n,"A",function(){return U}),e.d(n,"_17",function(){return q}),e.d(n,"B",function(){return G}),e.d(n,"q",function(){return W}),e.d(n,"_29",function(){return K}),e.d(n,"w",function(){return V}),e.d(n,"t",function(){return B}),e.d(n,"p",function(){return Y}),e.d(n,"_16",function(){return J}),e.d(n,"_4",function(){return z}),e.d(n,"_5",function(){return Z}),e.d(n,"D",function(){return nt}),e.d(n,"W",function(){return Q}),e.d(n,"_22",function(){return tt}),e.d(n,"_36",function(){return X}),e.d(n,"M",function(){return et}),e.d(n,"_9",function(){return rt}),e.d(n,"_12",function(){return ut}),e.d(n,"_10",function(){return it}),e.d(n,"_11",function(){return ot}),e.d(n,"_20",function(){return at}),e.d(n,"_43",function(){return ct}),e.d(n,"m",function(){return st}),e.d(n,"z",function(){return dt}),e.d(n,"f",function(){return ft}),e.d(n,"C",function(){return lt}),e.d(n,"T",function(){return pt}),e.d(n,"U",function(){return mt}),e.d(n,"R",function(){return ht}),e.d(n,"g",function(){return St}),e.d(n,"_14",function(){return kt}),e.d(n,"_38",function(){return vt}),e.d(n,"_18",function(){return gt}),e.d(n,"_41",function(){return _t}),e.d(n,"i",function(){return bt}),e.d(n,"_8",function(){return wt}),e.d(n,"_27",function(){return Et}),e.d(n,"s",function(){return Dt}),e.d(n,"a",function(){return It}),e.d(n,"Z",function(){return Tt}),e.d(n,"G",function(){return yt}),e.d(n,"_28",function(){return Mt}),e.d(n,"_2",function(){return Ct}),e.d(n,"_3",function(){return xt}),e.d(n,"v",function(){return Pt}),e.d(n,"_48",function(){return Nt}),e.d(n,"_0",function(){return Ht}),e.d(n,"Y",function(){return At}),e.d(n,"L",function(){return jt}),e.d(n,"X",function(){return Lt}),e.d(n,"I",function(){return Ft}),e.d(n,"K",function(){return $t}),e.d(n,"J",function(){return Ut}),e.d(n,"_23",function(){return Rt}),e.d(n,"_44",function(){return Ot}),e.d(n,"_25",function(){return qt}),e.d(n,"_46",function(){return Gt}),e.d(n,"_37",function(){return Wt}),e.d(n,"_24",function(){return Kt}),e.d(n,"_45",function(){return Vt}),e.d(n,"P",function(){return Zt}),e.d(n,"Q",function(){return Qt}),e.d(n,"_26",function(){return tn}),e.d(n,"_47",function(){return nn});var r=e("bOdI"),u=e.n(r),i=e("woOf"),o=e.n(i),a=e("NHnr"),c=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",r=~["delete","get","head"].indexOf(e)?"params":"data";return Object(a.default)(o()({url:t,method:e},u()({},r,n))).then(function(t){return t})},s=function(t){return c("/api/register",t,"post")},d=function(t){return c("/api/checkname/"+t)},f=function(t){return c("/api/checkemail/"+t)},l=function(t){return c("/api/confirm/"+t)},p=function(){return c("/api/confirm")},m=function(t){return c("/api/changepassword",t,"post")},h=function(t){return c("/api/reset",t,"post")},v=function(t,n){return c("/api/reset/"+t,n,"post")},g=function(t,n){return c("/api/checkifexpired/"+t,n)},_=function(t){return c("/api/login",t)},b=function(t){return c("/api/currentuser",t)},w=function(t,n){return c("/api/user/"+t,n)},E=function(t,n,e){return c("/api/user/"+t+"/"+n,e)},D=function(t,n){return c("/api/"+t+"/myactivity",n)},I=function(t){return c("/api/feeds",t)},T=function(t){return c("/api/editprofile",t,"post")},S=function(t,n){return c("/api/checkfollow/"+t,n)},k=function(t,n,e){return c("/api/"+t+"/user/"+n,e)},y=function(t,n){return c("/api/create/"+n,t,"post")},R=function(t){return c("/api/index/ruts",t)},O=function(t){return c("/api/challengeitems",t)},M=function(t,n,e){return c("/api/"+n+"/"+t+"/ruts",e)},C=function(t){return c("/api/searchruts",t)},x=function(t,n){return c("/api/rut/"+t,n)},P=function(t,n,e){return c("/api/check"+n+"/rut/"+t,e)},N=function(t,n,e){return c("/api/"+t+"/rut/"+n,e)},H=function(t,n,e){return c("/api/checkifrut/"+n+"/lockedto/"+t,e)},A=function(t,n,e){return c("/api/checkif/"+t+"/caneditrut/"+n,e)},j=function(t,n){return c("/api/lockrut/"+t,n)},L=function(t,n){return c("/api/unlockrut/"+t,n)},F=function(t,n){return c("/api/editrut/"+t,n,"post")},$=function(t,n){return c("/api/editrutce/"+t,n,"post")},U=function(t,n){return c("/api/edittags/"+t,n,"post")},q=function(t,n,e){return c("/api/item/"+t+"/torut/"+n,e,"post")},G=function(t,n){return c("/api/edittips/"+t,n,"post")},W=function(t,n){return c("/api/del/tips/"+t,n)},K=function(t){return c("/api/newroad",t,"post")},V=function(t,n){return c("/api/editroad/"+t,n,"post")},B=function(t,n){return c("/api/editmark/"+t,n,"post")},Y=function(t,n){return c("/api/delmark/"+t,n)},J=function(t,n,e){return c("/api/item/"+t+"/toroad/"+n,e,"post")},X=function(t,n){return c("/api/convertroad/"+t+"/torut",n)},z=function(t,n){return c("/api/road/"+t,n)},Z=function(t,n){return c("/api/"+t+"/roads",n)},Q=function(t){return c("/api/getonroad",t)},tt=function(t,n){return c("/api/markasdone/"+t,n)},nt=function(t,n){return c("/api/"+t+"/allroads",n)},et=function(t,n){return c("/api/"+t+"/fav/tags",n)},rt=function(t,n){return c("/api/tag/"+t,n)},ut=function(t,n){return c("/api/tag/"+t+"/ruts",n)},it=function(t,n){return c("/api/tag/"+t+"/demands",n)},ot=function(t,n){return c("/api/tag/"+t+"/items",n)},at=function(t,n){return c("/api/locktag/"+t,n)},ct=function(t,n){return c("/api/unlocktag/"+t,n)},st=function(t,n,e){return c("/api/checkiftag/"+n+"/lockedto/"+t,e)},dt=function(t,n){return c("/api/edittag/"+t,n,"post")},ft=function(t,n){return c("/api/checkfavtag/"+t,n)},lt=function(t,n,e){return c("/api/"+t+"/tag/"+n,e)},pt=function(t,n){return c("/api/item/"+t,n)},mt=function(t,n){return c("/api/item/"+t+"/reviews",n)},ht=function(t,n){return c("/api/item/"+t+"/inruts",n)},vt=function(t,n){return c("/api/search/"+t+"/items",n)},gt=function(t,n){return c("/api/lockitem/"+t,n)},_t=function(t,n){return c("/api/unlockitem/"+t,n)},bt=function(t,n,e){return c("/api/checkifitem/"+n+"/lockedto/"+t,e)},wt=function(t){return c("/api/getsubmitteditems",t)},Et=function(t){return c("/api/newitem",t,"post")},Dt=function(t,n){return c("/api/edititem/"+t,n,"post")},It=function(t,n){return c("/api/additemtag/"+t,n,"post")},Tt=function(t,n,e){return c("/api/"+n+"/"+t+"/items",e)},St=function(t,n){return c("/api/checkflag/item/"+t,n)},kt=function(t,n,e){return c("/api/flag"+t+"/item/"+n,e)},yt=function(t){return c("/api/clips",t)},Rt=function(t){return c("/api/newclip",t,"post")},Ot=function(t,n){return c("/api/upvoteclip/"+t,n)},Mt=function(t,n){return c("/api/newreview/"+t,n,"post")},Ct=function(t,n){return c("/api/review/"+t,n)},xt=function(t,n){return c("/api/review/"+t+"/comments",n)},Pt=function(t,n){return c("/api/editreview/"+t,n,"post")},Nt=function(t,n){return c("/api/upvotereview/"+t,n)},Ht=function(t,n){return c("/api/user/"+t+"/reviews",n)},At=function(t,n){return c("/api/user/"+t+"/demands",n)},jt=function(t){return c("/api/demands",t)},Lt=function(t,n){return c("/api/onlydemand/"+t,n)},Ft=function(t,n){return c("/api/demand/"+t,n)},$t=function(t,n){return c("/api/demand/"+t+"/comments",n)},Ut=function(t,n){return c("/api/demand/"+t+"/answers",n)},qt=function(t){return c("/api/newdemand",t,"post")},Gt=function(t,n){return c("/api/upvotedemand/"+t,n)},Wt=function(t,n,e){return c("/api/rut/"+t+"/answerdemand/"+n,e)},Kt=function(t,n,e){return c("/api/comment/"+t+"/"+n,e,"post")},Vt=function(t,n){return c("/api/upvotecomment/"+t,n)},Bt=function(t,n){return c("/api/commentsonrut/"+t,n)},Yt=function(t){return c("/api/circles",t)},Jt=function(t){return c("/api/newcircle",t,"post")},Xt=function(t,n){return c("/api/editcircle/"+t,n,"post")},zt=function(t,n){return c("/api/delcircle/"+t,n)},Zt=function(t){return c("/api/headlines",t)},Qt=function(t,n){return c("/api/headline/"+t+"/comments",n)},tn=function(t){return c("/api/newheadline",t,"post")},nn=function(t,n){return c("/api/upvoteheadline/"+t,n)}},QsGi:function(t,n,e){"use strict";n.a={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"3px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},SPCp:function(t,n,e){"use strict";var r=e("Gu7T"),u=e.n(r),i=e("P9l9"),o={totalClips:0,currentClips:[],currentP:0,maxP:0},a={getClips:function(t,n){var e=t.commit;Object(i.G)(n).then(function(t){e("SET_CLIPS",t.data)})},postClip:function(t,n){var e=t.commit;Object(i._23)(n).then(function(t){e("ADD_CLIP",t.data)})},moreClips:function(t,n){var e=t.commit;Object(i.G)(n).then(function(t){e("MORE_CLIPS",t.data.clips)})}},c={SET_CLIPS:function(t,n){t.totalClips=n.total,t.currentP=1,t.maxP=Math.ceil(n.total/20),t.currentClips=n.clips},MORE_CLIPS:function(t,n){var e;t.currentP+=1,(e=t.currentClips).push.apply(e,u()(n))},ADD_CLIP:function(t,n){t.currentClips.unshift(n)}};n.a={state:o,actions:a,mutations:c}},UjVw:function(t,n,e){"use strict";var r={currentUserID:function(t){return t.currentUserID},authed:function(t){return t.authed},currentUser:function(t){return t.currentUser},whoEdit:function(t){return t.whoEdit},indexRuts:function(t){return t.rut.indexRuts},showTags:function(t){return t.rut.showTags},rutDetail:function(t){return t.rut.rutDetail},totalClips:function(t){return t.clip.totalClips},currentP:function(t){return t.clip.currentP},maxP:function(t){return t.clip.maxP},currentClips:function(t){return t.clip.currentClips},totalDemands:function(t){return t.demand.totalDemands},currentD:function(t){return t.demand.currentD},maxD:function(t){return t.demand.maxD},currentDemands:function(t){return t.demand.currentDemands},demandDetail:function(t){return t.demand.demandDetail},currentItem:function(t){return t.item.currentItem},reviewDetail:function(t){return t.item.reviewDetail},searchItems:function(t){return t.item.searchItems},itemKeyword:function(t){return t.item.itemKeyword},createdRuts:function(t){return t.preload.createdRuts},onRoads:function(t){return t.preload.onRoads},seItems:function(t){return t.preload.seItems},totalHeadlines:function(t){return t.headline.totalHeadlines},currentH:function(t){return t.headline.currentH},maxH:function(t){return t.headline.maxH},currentHeadlines:function(t){return t.headline.currentHeadlines}};n.a=r},VRPm:function(t,n){},XMX0:function(t,n,e){"use strict";var r=e("//Fk"),u=e.n(r),i=e("P9l9"),o={indexRuts:[],showTags:[],rutDetail:{}},a={getRut:function(t,n){var e=t.commit;return new u.a(function(t,r){Object(i._6)(n).then(function(n){e("SET_RUT",n.data),t(n)}).catch(function(t){r(t)})})}},c={SET_INDEX:function(t,n){t.indexRuts=n.ruts,t.showTags=n.tags.slice(0,20)},SET_RUT:function(t,n){t.rutDetail=n},NEW_TAGS:function(t,n){t.rutDetail.tags=n}};n.a={state:o,actions:a,mutations:c}},YaEn:function(t,n,e){"use strict";var r=e("7+uW"),u=e("/ocq"),i=e("IcnI"),o=e("P9l9");r.default.use(u.a);var a=function(){return e.e(9).then(e.bind(null,"Irp/"))},c=function(){return e.e(42).then(e.bind(null,"pEKy"))},s=function(){return e.e(44).then(e.bind(null,"epzP"))},d=function(){return e.e(43).then(e.bind(null,"Jt/w"))},f=function(){return e.e(3).then(e.bind(null,"Yhyb"))},l=function(){return e.e(41).then(e.bind(null,"jXjW"))},p=function(){return e.e(6).then(e.bind(null,"Mmy0"))},m=function(){return e.e(13).then(e.bind(null,"sGcK"))},h=function(){return e.e(40).then(e.bind(null,"Ky3J"))},v=function(){return e.e(1).then(e.bind(null,"ifRc"))},g=function(){return e.e(21).then(e.bind(null,"c0HR"))},_=function(){return e.e(5).then(e.bind(null,"ZM+T"))},b=function(){return e.e(7).then(e.bind(null,"b3vX"))},w=function(){return e.e(0).then(e.bind(null,"k4/l"))},E=function(){return e.e(2).then(e.bind(null,"z57P"))},D=function(){return e.e(32).then(e.bind(null,"ma6q"))},I=function(){return e.e(17).then(e.bind(null,"WdbQ"))},T=function(){return e.e(30).then(e.bind(null,"Hm7W"))},S=function(){return e.e(12).then(e.bind(null,"BnCd"))},k=function(){return e.e(39).then(e.bind(null,"2Jx5"))},y=function(){return e.e(46).then(e.bind(null,"3c8H"))},R=function(){return e.e(50).then(e.bind(null,"otog"))},O=function(){return e.e(37).then(e.bind(null,"kTq1"))},M=function(){return e.e(49).then(e.bind(null,"I7sH"))},C=function(){return e.e(48).then(e.bind(null,"7Vuz"))},x=function(){return e.e(36).then(e.bind(null,"RrFR"))},P=function(){return e.e(38).then(e.bind(null,"X6Vi"))},N=function(){return e.e(47).then(e.bind(null,"LoBU"))},H=function(){return e.e(20).then(e.bind(null,"Yg2C"))},A=function(){return e.e(33).then(e.bind(null,"zOFa"))},j=function(){return e.e(19).then(e.bind(null,"/BCD"))},L=function(){return e.e(10).then(e.bind(null,"tpqG"))},F=function(){return e.e(18).then(e.bind(null,"dWBv"))},$=function(){return e.e(11).then(e.bind(null,"hTVM"))},U=function(){return e.e(24).then(e.bind(null,"Ls1q"))},q=function(){return e.e(22).then(e.bind(null,"JLnY"))},G=function(){return e.e(23).then(e.bind(null,"TIKV"))},W=function(){return e.e(4).then(e.bind(null,"UZPP"))},K=function(t){return function(){return e.e(27).then(e.bind(null,"oTxi")).then(function(n){return n.default(t)})}},V=function(t){return function(){return e.e(26).then(e.bind(null,"tQu9")).then(function(n){return n.default(t)})}},B=function(t){return function(){return e.e(16).then(e.bind(null,"Ahar")).then(function(n){return n.default(t)})}},Y=function(t){return function(){return e.e(15).then(e.bind(null,"j6oK")).then(function(n){return n.default(t)})}},J=function(t){return function(){return e.e(8).then(e.bind(null,"G/o+")).then(function(n){return n.default(t)})}},X=function(){return e.e(34).then(e.bind(null,"E6uC"))},z=function(){return e.e(14).then(e.bind(null,"dbCm"))},Z=function(){return e.e(31).then(e.bind(null,"AORQ"))},Q=function(){return e.e(25).then(e.bind(null,"Ti2K"))},tt=function(){return e.e(45).then(e.bind(null,"W4mg"))},nt=function(){return e.e(29).then(e.bind(null,"Y9vY"))},et=function(){return e.e(35).then(e.bind(null,"6j0K"))},rt=function(){return e.e(28).then(e.bind(null,"2wh8"))},ut=function(t,n,e){return e||{x:0,y:0}},it=function(t,n,e){var u=i.a.getters.currentUserID,a=i.a.getters.rutDetail.id;u&&a?Object(o.c)(u,a).then(function(t){t.data.canedit?e():(i.a.commit("SET_WHOEDIT",t.data),(new r.default).$message("In Editing...Please Try Later"))}):(new r.default).$message("In Editing...Please Go back")},ot=function(t,n,e){var r=i.a.getters.currentUserID,u=t.params.id;r===Number(u)&&e()},at=new u.a({mode:"history",fallback:!1,scrollBehavior:ut,routes:[{path:"/",component:a,name:"Home"},{path:"/feeds",component:c,name:"Feeds",meta:{auth:!0}},{path:"/register",component:O,name:"Register"},{path:"/confirm/:token",component:M,name:"Confirm",meta:{auth:!0}},{path:"/forget",component:C,name:"Forget"},{path:"/reset/:token",component:x,name:"ResetPsw"},{path:"/login",component:N,name:"Login"},{path:"/create/:id(\\d+)?",component:H,name:"CreateRut",meta:{auth:!0}},{path:"/readlist/:id",component:_,name:"Rutview"},{path:"/readlist/:id/readmode",component:A,name:"ReadMode"},{path:"/edit/readlist/:id",component:j,name:"EditRut",meta:{auth:!0},beforeEnter:it},{path:"/additemto/readlist/:id",component:L,name:"AddItem",meta:{auth:!0},beforeEnter:it},{path:"/edit/readuptips/:id",component:F,name:"EditTips",meta:{auth:!0},beforeEnter:it},{path:"/commenton/rut/:id",component:b,name:"RutComment",meta:{auth:!0}},{path:"/item/:id",component:w,name:"Item"},{path:"/myrc/item/:itemid",component:W,name:"MyRc",props:!0,meta:{auth:!0}},{path:"/edit/item/:id",component:U,name:"EditItem",meta:{auth:!0}},{path:"/review/item/:id",component:q,name:"NewReview",meta:{auth:!0}},{path:"/editreview/:id",component:G,name:"EditReview",meta:{auth:!0}},{path:"/review/:id",component:E,name:"ReviewView"},{path:"/tag/:name",component:D,children:[{path:"",name:"defaultTag",redirect:"readlist"},{path:"readlist",name:"TagReadlist",component:I,meta:{auth:!0}},{path:"demand",name:"TagDemand",component:T,meta:{auth:!0}},{path:"item",name:"TagItem",component:S,meta:{auth:!0}}]},{path:"/demands",component:d,children:[{path:"",name:"defaultdemand",redirect:"popular"},{path:"popular",name:"Populardemand",component:V("popular"),meta:{auth:!0}},{path:"new",name:"Newdemand",component:V("new"),meta:{auth:!0}}]},{path:"/demand/:id",name:"demand",component:f,meta:{auth:!0}},{path:"/challenge",component:s,children:[{path:"",name:"defaultclip",redirect:"myclip"},{path:"myclip",name:"Myclip",component:K({ref:"My"}),meta:{auth:!0}},{path:"hotclip",name:"Hotclip",component:K({ref:"Hot"}),meta:{auth:!0}},{path:"allclip",name:"Allclip",component:K({ref:"All"}),meta:{auth:!0}}]},{path:"/headline/:id",name:"Headline",component:p,meta:{auth:!0}},{path:"/headlines",component:l,children:[{path:"",name:"defaultheadline",redirect:"top"},{path:"top",name:"TopHeadline",component:B("top")},{path:"new",name:"NewHeadline",component:B("new")}]},{path:"/circles",name:"Circles",component:m,meta:{auth:!0}},{path:"/profile/:id",component:h,children:[{path:"",name:"defaultProfile",redirect:"activity"},{path:"activity",name:"Activity",component:tt,meta:{auth:!0}},{path:"roadmaps",name:"Roadmaps",component:X,meta:{auth:!0}},{path:"created",name:"CreatedRuts",component:Y("created"),meta:{auth:!0}},{path:"star",name:"StarRuts",component:Y("star"),meta:{auth:!0}},{path:"working",name:"WorkingItems",component:J("doing"),meta:{auth:!0}},{path:"scheduled",name:"ScheduledItems",component:J("todo"),meta:{auth:!0}},{path:"havedone",name:"DoneItems",component:J("done"),meta:{auth:!0}},{path:"reviews",name:"Reviews",component:z,meta:{auth:!0}},{path:"demands",name:"Demands",component:Z,meta:{auth:!0}},{path:"clips",name:"Clips",component:Q,meta:{auth:!0}},{path:"followeds",name:"Followeds",component:rt,meta:{auth:!0}}]},{path:"/newroad",component:g,name:"NewRoad",meta:{auth:!0}},{path:"/roadmap/:id",component:v,name:"RoadView"},{path:"/setting/:id",component:nt,children:[{path:"",name:"defaultSetting",redirect:"setting"},{path:"setting",name:"Setting",component:et,beforeEnter:ot,meta:{auth:!0}},{path:"change",name:"Change",component:P,beforeEnter:ot,meta:{auth:!0}}]},{path:"/newitem",component:$,name:"NewItem",meta:{auth:!0}},{path:"/searchresult/:type",component:k,name:"SearchResult",props:!0},{path:"/about",component:y,name:"About"},{path:"/404",component:R,name:"NotFound",hidden:!0},{path:"*",hidden:!0,redirect:{path:"/404"}}]});n.a=at},fFh9:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return u});var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("header",{staticClass:"header"},[e("nav",{staticClass:"nav-menu"},[e("router-link",{attrs:{to:"/"}},[e("b",{staticStyle:{color:"darkorange","font-family":"serif","font-size":"1.2em","letter-spacing":"0.0005em"}},[t._v("\n            Readup.Tips"),e("sup",{staticStyle:{"font-size":"0.5em",color:"grey"}},[t._v(" alpha")])])]),t._v(" "),t.authed?e("router-link",{attrs:{to:"/feeds"}},[e("b",[t._v("Feed")])]):t._e(),t._v(" "),e("router-link",{attrs:{to:"/headlines"}},[e("b",[t._v("Headline")])]),t._v(" "),e("router-link",{attrs:{to:"/demands"}},[e("b",[t._v("Request")])]),t._v(" "),e("router-link",{attrs:{to:"/challenge"}},[e("b",[t._v("Challenge")])]),t._v(" "),e("div",{staticClass:"right-menu"},[t.authed?e("div",[e("el-dropdown",[e("el-button",{attrs:{type:"success",size:"small"}},[e("i",{staticClass:"el-icon-menu"}),t._v(" "),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[e("router-link",{attrs:{to:"/newroad"}},[e("b",{staticStyle:{color:"orange"}},[t._v("+ RoadMap")])])],1),t._v(" "),e("el-dropdown-item",[e("router-link",{attrs:{to:"/profile/"+t.currentUserID}},[t._v("> My Profile")])],1),t._v(" "),e("el-dropdown-item",{attrs:{divided:""}},[e("el-button",{attrs:{type:"text"},on:{click:t.onLogout}},[t._v("Log out")])],1)],1)],1)],1):e("div",[e("el-button",{attrs:{type:"text"},on:{click:function(n){t.toLogin=!0}}},[e("b",[t._v("Log in")])])],1)])],1)]),t._v(" "),e("div",{staticClass:"view"},[e("router-view"),t._v(" "),e("el-dialog",{staticClass:"loginDialog",attrs:{visible:t.toLogin,width:"450px"},on:{"update:visible":function(n){t.toLogin=n}}},[e("login-form",{attrs:{next:"current"},on:{close:function(n){t.toLogin=!1}}})],1)],1),t._v(" "),t._m(0)])},u=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"bottom"},[t._v("\n      ©Readup.Tips - since 2018\n      | "),e("a",{attrs:{href:"/newitem"}},[t._v("submit")]),t._v("\n      | "),e("a",{attrs:{href:"/about"}},[t._v("About")]),t._v("\n      | "),e("a",{attrs:{href:"/about"}},[t._v("Terms")]),t._v(" "),t._v("   \n      ")])])}]},"hTt+":function(t,n,e){"use strict";var r=e("Gu7T"),u=e.n(r),i=e("//Fk"),o=e.n(i),a=e("P9l9"),c={currentItem:{},reviewDetail:{},searchItems:[],itemKeyword:""},s={getItem:function(t,n){var e=t.commit;return new o.a(function(t,r){Object(a.T)(n).then(function(n){e("SET_ITEM",n.data),t(n)}).catch(function(t){r(t)})})},getReview:function(t,n){var e=t.commit;return new o.a(function(t,r){Object(a._2)(n).then(function(n){e("SET_REVIEW",n.data),t(n)}).catch(function(t){r(t)})})}},d={SET_ITEM:function(t,n){t.currentItem=n},SET_REVIEW:function(t,n){t.reviewDetail=n},SET_SEARCH_ITEMS:function(t,n){t.searchItems=n.items,t.itemKeyword=n.keyword},MORE_SEARCH_ITEMS:function(t,n){var e;(e=t.searchItems).push.apply(e,u()(n.items))}};n.a={state:c,actions:s,mutations:d}},iF09:function(t,n,e){"use strict";function r(){return f.a.get(p)}function u(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return f.a.set(p,t,{expires:n})}function i(){return f.a.remove(p)}function o(){return f.a.get(m)}function a(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return f.a.set(m,t,{expires:n})}function c(){return f.a.remove(m)}function s(){var t=r();return l.default.defaults.auth={username:t,password:t},!!t}n.c=r,n.g=u,n.e=i,n.b=o,n.f=a,n.d=c,n.a=s;var d=e("lbHh"),f=e.n(d),l=e("NHnr"),p="NoIsSeSNekoTr",m="YtITnEdIr"},l3im:function(t,n,e){"use strict";function r(t){e("AJVI")}var u=e("zf/q"),i=e("6/qA"),o=e("XyMi"),a=r,c=Object(o.a)(u.a,i.a,i.b,!1,a,"data-v-5ff18016",null);n.a=c.exports},tvR6:function(t,n){},xJD8:function(t,n,e){"use strict";var r=e("Dd8w"),u=e.n(r),i=e("NYxO"),o=e("l3im");n.a={name:"app",components:{LoginForm:o.a},data:function(){return{searchWord:"",toLogin:!1}},computed:u()({},Object(i.b)(["currentUserID","authed"])),methods:{onLogout:function(){this.$store.commit("DEL_TOKEN"),this.$router.push("/")},siteSearch:function(){var t=this.searchWord;return""!==t&&(window.open("https://www.google.com/search?q=site:readup.tips/%20"+t,"_blank"),!1)}}}},yYt1:function(t,n,e){"use strict";var r=e("Gu7T"),u=e.n(r),i=e("P9l9"),o={totalHeadlines:0,currentHeadlines:[],currentH:0,maxH:0},a={getHeadlines:function(t,n){var e=t.commit;Object(i.P)(n).then(function(t){e("SET_HEADLINES",t.data)})},postHeadline:function(t,n){var e=t.commit;Object(i._26)(n).then(function(t){e("ADD_HEADLINE",t.data)})},moreHeadlines:function(t,n){var e=t.commit;Object(i.P)(n).then(function(t){e("MORE_HEADLINES",t.data.headlines)})}},c={SET_HEADLINES:function(t,n){t.totalHeadlines=n.total,t.currentH=1,t.maxH=Math.ceil(n.total/20),t.currentHeadlines=n.headlines},MORE_HEADLINES:function(t,n){var e;t.currentH+=1,(e=t.currentHeadlines).push.apply(e,u()(n))},ADD_HEADLINE:function(t,n){t.currentHeadlines.unshift(n)}};n.a={state:o,actions:a,mutations:c}},"zf/q":function(t,n,e){"use strict";n.a={name:"login-form",props:["next"],data:function(){return{loginForm:{username:"",password:""},rules:{username:[{required:!0,message:"Please enter username",trigger:"blur"}],password:[{required:!0,message:"Please enter password",trigger:"blur"}]},pwdType:"password"}},methods:{onLogin:function(t,n){var e=this;this.$refs[t].validate(function(r){if(!r)return e.$message("error!! Please Check"),!1;e.$axios.defaults.auth={username:n.username,password:n.password},e.$store.dispatch("loginUser").then(function(){var t=e.$route.path,n="current"===e.next&&"/login"!==t?e.$route.fullPath:e.$route.query.redirect||"/challenge";e.$router.push(n),e.$emit("close")}).catch(function(){e.$message({showClose:!0,duration:0,message:"oops...Please Check Account or Password",type:"error"})}),e.resetForm(t)})},toNext:function(t){this.$router.push(t),this.$emit("close")},resetForm:function(t){this.$refs[t].resetFields()}}}}},["NHnr"]);