"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[576],{576:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(689),o=r(43),f=r(643),p=r(234),d="CastList_list__Lf7fl",l="CastList_image__M4-I4",v=r(184),h=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],h=(0,s.useState)(!1),m=(0,a.Z)(h,2),x=m[0],g=m[1],k=(0,s.useState)(!1),w=(0,a.Z)(k,2),_=w[0],b=w[1],Z=(0,i.UO)().movieId;return(0,s.useEffect)((function(){(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,o.bl(Z);case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(!0);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),[Z]),(0,v.jsxs)("div",{children:[x&&(0,v.jsx)(f.Bb,{}),!x&&!_&&(0,v.jsx)("ul",{className:d,children:r.map((function(e){var t=e.cast_id,r=e.character,n=e.name,a=e.profile_path;return(0,v.jsxs)("li",{children:[(0,v.jsx)("div",{className:l,children:a?(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(a),alt:n}):(0,v.jsx)("img",{src:p,alt:"Default-Pic"})}),(0,v.jsx)("div",{children:n}),(0,v.jsxs)("div",{children:["Character: ",r]})]},t)}))}),_&&(0,v.jsx)("h4",{children:"The resource you requested could not be found!"})]})}},43:function(e,t,r){r.d(t,{Fb:function(){return i},LP:function(){return s},bl:function(){return o},jX:function(){return f},z1:function(){return p}});var n=r(861),a=r(757),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/trending/all/day?api_key=95dd584af2ff777437c63600de03549c");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"?api_key=95dd584af2ff777437c63600de03549c&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=95dd584af2ff777437c63600de03549c&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=95dd584af2ff777437c63600de03549c&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=95dd584af2ff777437c63600de03549c&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},234:function(e,t,r){e.exports=r.p+"static/media/default-pic.a32588414ab343dc7425.jpg"}}]);
//# sourceMappingURL=576.479e02e5.chunk.js.map