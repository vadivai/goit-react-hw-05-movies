"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[259],{111:function(n,e,r){r.d(e,{O:function(){return a}});var t=r(689),i=r(87),o=r(184),a=function(n){var e=n.movies,r=(0,t.TH)();return(0,o.jsx)("ul",{children:e.map((function(n){var e=n.id,t=n.title;return(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/movies/".concat(e),state:{from:r},children:t})},e)}))})}},259:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,i,o,a=r(791),c=r(439),u=r(87),s=r(168),d=r(867),l=d.ZP.form(t||(t=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  /* justify-content: space-evenly; */\n  /* width: 100%; */\n  /* max-width: 350px; */\n  /* background-color: grey; */\n  /* border-radius: 3px;\n  /* overflow: hidden; */\n  /* padding: 0 4px 2px; */\n"]))),p=d.ZP.input(i||(i=(0,s.Z)(["\n  display: inline-block;\n  width: 25%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  background-color: #ebeded;\n  border-radius: 6px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n    align-items: center;\n  }\n"]))),f=d.ZP.button(o||(o=(0,s.Z)(["\n  display: inline-block;\n  border: 0;\n  padding: 6px;\n  /* opacity: 0.6; */\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  padding: 10px 2px;\n  border-radius: 6px;\n  background-color: #ebeded;\n  margin-left: 15px;\n\n  &:hover {\n    opacity: 1;\n    color: white;\n    background-color: #474fed;\n  }\n"]))),h=r(184),x=function(){var n=(0,a.useState)(""),e=(0,c.Z)(n,2),r=e[0],t=e[1],i=(0,u.lr)(),o=(0,c.Z)(i,2)[1];return(0,h.jsxs)(l,{onSubmit:function(n){if(n.preventDefault(),""===r)return alert("PLEASE, ENTER MOVIE NAME!");o({query:r}),t("")},children:[(0,h.jsx)(p,{type:"text",name:"movieName",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:r,onChange:function(n){t(n.target.value)}}),(0,h.jsx)(f,{type:"submit",children:"Search"})]})},m=r(861),v=r(757),g=r.n(v),b=r(42),k=r(111),y=function(){var n=function(){var n,e=(0,a.useState)([]),r=(0,c.Z)(e,2),t=r[0],i=r[1],o=(0,a.useState)(!1),s=(0,c.Z)(o,2),d=s[0],l=s[1],p=(0,a.useState)(!1),f=(0,c.Z)(p,2),h=f[0],x=f[1],v=(0,u.lr)(),k=null!==(n=(0,c.Z)(v,1)[0].get("query"))&&void 0!==n?n:"";return(0,a.useEffect)((function(){if(k){l(!0),x(!1);var n=function(){var n=(0,m.Z)(g().mark((function n(){var e;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.bI)(k);case 3:e=n.sent,i(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),x(n.t0);case 10:return n.prev=10,l(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}}),[k]),{movies:t,isLoading:d,error:h}}(),e=n.movies,r=n.isLoading,t=n.error;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x,{}),r&&(0,h.jsx)("h3",{children:"Loading..."}),t&&(0,h.jsx)("h2",{children:"Something went wrong..."}),e.length>0&&(0,h.jsx)(k.O,{movies:e})]})}}}]);
//# sourceMappingURL=259.3231108e.chunk.js.map