"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[584],{111:function(r,t,n){n.d(t,{O:function(){return c}});var e=n(689),a=n(87),u=n(184),c=function(r){var t=r.movies,n=(0,e.TH)();return(0,u.jsx)("ul",{children:t.map((function(r){var t=r.id,e=r.title,c=r.name,s=r.original_title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:n},children:e||c||s})},t)}))})}},584:function(r,t,n){n.r(t),n.d(t,{default:function(){return p}});var e=n(791),a=n(861),u=n(439),c=n(757),s=n.n(c),i=n(690),o=n(111),f=n(184),p=function(){var r=function(){var r=(0,e.useState)([]),t=(0,u.Z)(r,2),n=t[0],c=t[1],o=(0,e.useState)(!1),f=(0,u.Z)(o,2),p=f[0],v=f[1],d=(0,e.useState)(!1),h=(0,u.Z)(d,2),l=h[0],m=h[1];return(0,e.useEffect)((function(){v(!0),m(!1);var r=function(){var r=(0,a.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i._k)();case 3:t=r.sent,c(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),m(r.t0);case 10:return r.prev=10,v(!1),r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[0,7,10,13]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),{isLoading:p,error:l,movies:n}}(),t=r.movies,n=r.isLoading,c=r.error;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"Trending today"}),n&&(0,f.jsx)("h3",{children:"Loading..."}),c&&(0,f.jsx)("h2",{children:"Something went wrong..."}),t.length>0&&(0,f.jsx)(o.O,{movies:t})]})}},690:function(r,t,n){n.d(t,{Hx:function(){return p},PQ:function(){return f},Y5:function(){return o},_k:function(){return s},bI:function(){return i}});var e=n(861),a=n(757),u=n.n(a),c=n(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"2538fce76e0bd4d5dc25f5ba463caaa5",language:"en-US"};var s=function(){var r=(0,e.Z)(u().mark((function r(){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day");case 2:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("search/movie?query=".concat(t));case 2:return n=r.sent,e=n.data,r.abrupt("return",e.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/credits"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e.cast);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(t,"/reviews"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=584.1886ee80.chunk.js.map