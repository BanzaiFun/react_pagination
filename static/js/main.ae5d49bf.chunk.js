(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c.n(a),r=c(4),i=c(1);c(10);var l=c(2),s=c.n(l),o=c(0),j=function(e){for(var t=e.currentPage,c=e.setCurrentPage,a=e.total,n=e.perPage,r=[],l=1;l<=Math.ceil(a/n);l+=1)r.push(l);Object(i.useEffect)((function(){var e=t;t<1&&(e=1),t>r.length&&(e=r.length),c(e)}),[t]);var j=function(e){c((function(t){return"next"===e?t+1:t-1}))};return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:1===t}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){return j("prev")},children:"\xab"})}),r.map((function(e){return Object(o.jsx)("li",{className:s()("page-item",t===e?"active":""),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){c(e)},children:e})},e)})),Object(o.jsx)("li",{className:s()("page-item",{disabled:t===r.length}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===r.length,onClick:function(){return j("next")},children:"\xbb"})})]})},u=function(){var e,t=Object(i.useState)(5),c=Object(r.a)(t,2),a=c[0],n=c[1],l=Object(i.useState)(1),s=Object(r.a)(l,2),u=s[0],d=s[1],h=function(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}(1,42).map((function(e){return"Item ".concat(e)})),p=a*u,b=p-a,g=h.slice(b,p),m=null===(e=g[g.length-1])||void 0===e?void 0:e.split(" ")[1];return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(u," (items ").concat(b+1," - ").concat(m," of 42)")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:a,onChange:function(e){n(+e.currentTarget.value),d(1)},children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{setCurrentPage:d,total:h.length,perPage:a,currentPage:u}),Object(o.jsx)("ul",{children:g.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ae5d49bf.chunk.js.map