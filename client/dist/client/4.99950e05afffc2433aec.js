(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{G6fN:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),r=function(){},e=t("pMnS"),o=t("ZYCi"),a=t("Ip0R"),i=t("xMyE"),c=t("t/Na"),s=function(){function n(n){this.http=n}return n.prototype.getLog=function(){return this.http.get("/api/log",{headers:{ignoreLoadingBar:""}})},n.prototype.clearLog=function(){var n=this;return this.http.delete("/api/log",{responseType:"blob"}).pipe(Object(i.a)(function(l){n.getLog().toPromise()}))},n.ngInjectableDef=u.Q({factory:function(){return new n(u.U(c.c))},token:n,providedIn:"root"}),n}(),p=t("psW0"),f=t("xXU7"),b=function(){function n(n,l){this.log=n,this.platformId=l,this.logs=[]}return n.prototype.ngOnInit=function(){var n=this;Object(a.t)(this.platformId)&&(this.timer$=Object(f.a)(2e3).pipe(Object(p.a)(function(){return n.log.getLog()})).subscribe(function(l){return n.logs=l}))},n.prototype.clearLog=function(){return n=this,void 0,t=function(){return function(n,l){var t,u,r,e,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return e={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function a(e){return function(a){return function(e){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,u&&(r=u[2&e[0]?"return":e[0]?"throw":"next"])&&!(r=r.call(u,e[1])).done)return r;switch(u=0,r&&(e=[0,r.value]),e[0]){case 0:case 1:r=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,u=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!r||e[1]>r[0]&&e[1]<r[3])){o.label=e[1];break}if(6===e[0]&&o.label<r[1]){o.label=r[1],r=e;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(e);break}r[2]&&o.ops.pop(),o.trys.pop();continue}e=l.call(n,o)}catch(n){e=[6,n],u=0}finally{t=r=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,a])}}}(this,function(n){switch(n.label){case 0:return[4,this.log.clearLog().toPromise()];case 1:return n.sent(),[2]}})},new((l=void 0)||(l=Promise))(function(u,r){function e(n){try{a(t.next(n))}catch(n){r(n)}}function o(n){try{a(t.throw(n))}catch(n){r(n)}}function a(n){n.done?u(n.value):new l(function(l){l(n.value)}).then(e,o)}a((t=t.apply(n,[])).next())});var n,l,t},n.prototype.ngOnDestroy=function(){this.timer$&&this.timer$.unsubscribe()},n}(),h=u.Ka({encapsulation:0,styles:[[".logger[_ngcontent-%COMP%]{height:200px;overflow-y:scroll}"]],data:{}});function m(n){return u.fb(0,[(n()(),u.Ma(0,0,null,null,4,"div",[["class","w-100 bg-light pl-2 m-1"]],null,null,null,null,null)),(n()(),u.db(1,null,[""," "," "])),u.Za(2,2),(n()(),u.Ma(3,0,null,null,1,"div",[["class","w-100 pl-4 small text-danger"]],null,null,null,null,null)),(n()(),u.db(4,null,["",""]))],null,function(n,l){n(l,1,0,u.eb(l,1,0,n(l,2,0,u.Va(l.parent,0),l.context.$implicit.timestamp,"(dd) HH:mm:ss")),l.context.$implicit.message),n(l,4,0,l.context.$implicit.error)})}function d(n){return u.fb(0,[u.Xa(0,a.e,[u.s]),(n()(),u.Ma(1,0,null,null,2,"div",[["class","text-right pr-2 bg-dark"]],null,null,null,null,null)),(n()(),u.Ma(2,0,null,null,1,"button",[["class","btn btn-sm py-0 m-1 btn-outline-warning "]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.clearLog()&&u),u},null,null)),(n()(),u.db(-1,null,["\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"])),(n()(),u.Ma(4,0,null,null,2,"div",[["class","row w-100 m-0 bg-secondary logger align-items-start align-content-start"]],null,null,null,null,null)),(n()(),u.Ea(16777216,null,null,1,null,m)),u.La(6,802816,null,0,a.k,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,6,0,l.component.logs)},null)}var g=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),y=u.Ka({encapsulation:0,styles:[[""]],data:{}});function v(n){return u.fb(0,[(n()(),u.Ma(0,0,null,null,23,"div",[["class","container bg-light p-0"]],null,null,null,null,null)),(n()(),u.Ma(1,0,null,null,22,"div",[["class","row m-0"]],null,null,null,null,null)),(n()(),u.Ma(2,0,null,null,16,"div",[["class","col-3 p-0"]],null,null,null,null,null)),(n()(),u.Ma(3,0,null,null,15,"div",[["class"," w-100"]],null,null,null,null,null)),(n()(),u.Ma(4,0,null,null,7,"a",[["class","btn btn-dark w-100 rounded-0"],["routerLink","/m2m"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var r=!0;return"click"===l&&(r=!1!==u.Va(n,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&r),r},null,null)),u.La(5,671744,[[2,4]],0,o.o,[o.m,o.a,a.i],{routerLink:[0,"routerLink"]},null),u.La(6,1720320,null,2,o.n,[o.m,u.k,u.B,u.h],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),u.bb(603979776,1,{links:1}),u.bb(603979776,2,{linksWithHrefs:1}),u.Ya(9,{exact:0}),u.Wa(10,1),(n()(),u.db(-1,null,["\u0413\u043b\u0430\u0432\u043d\u0430\u044f"])),(n()(),u.Ma(12,0,null,null,6,"a",[["class","btn btn-dark w-100 rounded-0"],["routerLink","/m2m/parser"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var r=!0;return"click"===l&&(r=!1!==u.Va(n,13).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&r),r},null,null)),u.La(13,671744,[[4,4]],0,o.o,[o.m,o.a,a.i],{routerLink:[0,"routerLink"]},null),u.La(14,1720320,null,2,o.n,[o.m,u.k,u.B,u.h],{routerLinkActive:[0,"routerLinkActive"]},null),u.bb(603979776,3,{links:1}),u.bb(603979776,4,{linksWithHrefs:1}),u.Wa(17,1),(n()(),u.db(-1,null,["\u041f\u0430\u0440\u0441\u0435\u0440"])),(n()(),u.Ma(19,0,null,null,4,"div",[["class","col-9 p-0"]],null,null,null,null,null)),(n()(),u.Ma(20,0,null,null,1,"my-logger",[],null,null,null,d,h)),u.La(21,245760,null,0,b,[s,u.z],null,null),(n()(),u.Ma(22,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.La(23,212992,null,0,o.q,[o.b,u.M,u.j,[8,null],u.h],null,null)],function(n,l){n(l,5,0,"/m2m"),n(l,6,0,n(l,9,0,!0),n(l,10,0,"active")),n(l,13,0,"/m2m/parser"),n(l,14,0,n(l,17,0,"active")),n(l,21,0),n(l,23,0)},function(n,l){n(l,4,0,u.Va(l,5).target,u.Va(l,5).href),n(l,12,0,u.Va(l,13).target,u.Va(l,13).href)})}var k=u.Ia("my-admin-layout",g,function(n){return u.fb(0,[(n()(),u.Ma(0,0,null,null,1,"my-admin-layout",[],null,null,null,v,y)),u.La(1,114688,null,0,g,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),L=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),w=u.Ka({encapsulation:0,styles:[[""]],data:{}});function M(n){return u.fb(0,[(n()(),u.Ma(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.db(-1,null,[" index-page-admin works!\n"]))],null,null)}var S=u.Ia("my-index-page-admin",L,function(n){return u.fb(0,[(n()(),u.Ma(0,0,null,null,1,"my-index-page-admin",[],null,null,null,M,w)),u.La(1,114688,null,0,L,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),P=function(){function n(n){this.http=n}return n.prototype.GetStatus=function(){return this.http.get("/api/parser/status",{headers:{ignoreLoadingBar:""}})},n.prototype.StartParser=function(){return this.http.get("/api/parser/start")},n.prototype.CanselParser=function(){return this.http.get("/api/parser/cancel")},n.prototype.StartParserLoop=function(){return this.http.get("/api/parser/startloop")},n.prototype.StopParserLoop=function(){return this.http.get("/api/parser/setloop")},n.ngInjectableDef=u.Q({factory:function(){return new n(u.U(c.c))},token:n,providedIn:"root"}),n}(),O=function(){function n(n,l){this.parsServ=n,this.platformId=l,this.status={}}return n.prototype.ngOnInit=function(){var n=this;Object(a.t)(this.platformId)&&(this.timer$=Object(f.a)(3e3).pipe(Object(p.a)(function(l){return n.parsServ.GetStatus()})).subscribe(function(l){return n.status=l}))},n.prototype.startParser=function(){this.parsServ.StartParser().toPromise(),this.parsServ.GetStatus().toPromise()},n.prototype.cancelParser=function(){this.parsServ.CanselParser().toPromise(),this.parsServ.GetStatus().toPromise()},n.prototype.loopStart=function(){this.parsServ.StartParserLoop().toPromise()},n.prototype.loopStop=function(){this.parsServ.StopParserLoop().toPromise()},n.prototype.ngOnDestroy=function(){this.timer$&&this.timer$.unsubscribe()},n}(),x=u.Ka({encapsulation:0,styles:[[""]],data:{}});function I(n){return u.fb(0,[(n()(),u.Ma(0,0,null,null,8,"div",[["class","row m-0"]],null,null,null,null,null)),(n()(),u.Ma(1,0,null,null,1,"button",[],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.startParser()&&u),u},null,null)),(n()(),u.db(-1,null,["\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0430\u0440\u0441\u0435\u0440"])),(n()(),u.Ma(3,0,null,null,1,"button",[],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.cancelParser()&&u),u},null,null)),(n()(),u.db(-1,null,["\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u0441\u0435\u0440"])),(n()(),u.Ma(5,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.loopStart()&&u),u},null,null)),(n()(),u.db(-1,null,["\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0446\u0438\u043a\u043b"])),(n()(),u.Ma(7,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.loopStop()&&u),u},null,null)),(n()(),u.db(-1,null,["\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0446\u0438\u043a\u043b"]))],null,function(n,l){var t=l.component;n(l,1,0,t.status.isWorks),n(l,3,0,t.status.isCancel||!t.status.isWorks)})}var j=u.Ia("my-parser-page-admin",O,function(n){return u.fb(0,[(n()(),u.Ma(0,0,null,null,1,"my-parser-page-admin",[],null,null,null,I,x)),u.La(1,245760,null,0,O,[P,u.z],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),T=t("gIcY");t.d(l,"AdminModuleNgFactory",function(){return K});var K=u.Ja(r,[],function(n){return u.Sa([u.Ta(512,u.j,u.Z,[[8,[e.a,k,S,j]],[3,u.j],u.v]),u.Ta(4608,a.n,a.m,[u.s,[2,a.w]]),u.Ta(4608,T.o,T.o,[]),u.Ta(1073742336,a.c,a.c,[]),u.Ta(1073742336,T.m,T.m,[]),u.Ta(1073742336,T.e,T.e,[]),u.Ta(1073742336,o.p,o.p,[[2,o.v],[2,o.m]]),u.Ta(1073742336,r,r,[]),u.Ta(1024,o.k,function(){return[[{path:"",component:g,children:[{path:"",component:L},{path:"parser",component:O}]}]]},[])])})}}]);