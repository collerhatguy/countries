(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{32:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(16),s=t.n(r),i=t(7),l=t(8),o=t(2),u=t(0);function j(e){var a=e.dark,t=e.setRegionSearch,n=e.setCountrySearch;return Object(u.jsxs)("section",{className:"search-section",children:[Object(u.jsx)("input",{"data-dark":a,onChange:function(e){return n(e.target.value)},className:"search-bar",type:"text",placeholder:"Search for a country"}),Object(u.jsxs)("label",{style:a?{color:"white"}:{},for:"region",children:["Filter by Region",Object(u.jsx)("input",{"data-dark":a,onChange:function(e){return t(e.target.value)},list:"region-list",name:"region",id:"region"})]}),Object(u.jsxs)("datalist",{id:"region-list",children:[Object(u.jsx)("option",{value:"Africa"}),Object(u.jsx)("option",{value:"America"}),Object(u.jsx)("option",{value:"Asia"}),Object(u.jsx)("option",{value:"Europe"}),Object(u.jsx)("option",{value:"Oceania"})]})]})}function d(e){var a=e.dark,t=e.country;e.moreDetail;return Object(u.jsx)(l.b,{to:"/countries/".concat(t.name),children:Object(u.jsxs)("div",{className:"country-card",children:[Object(u.jsx)("div",{className:"flag-container",children:Object(u.jsx)("img",{src:t.flag,alt:"".concat(t.name,"-flag")})}),Object(u.jsxs)("div",{"data-dark":a,className:"text-container",children:[Object(u.jsx)("h2",{className:"country-name",children:t.name}),Object(u.jsxs)("h3",{className:"country-population",children:[Object(u.jsx)("span",{className:"country-label",children:"Population: "}),t.population.toLocaleString("en-US")]}),Object(u.jsxs)("h3",{className:"country-region",children:[Object(u.jsx)("span",{className:"country-label",children:"Region: "}),t.region]}),Object(u.jsxs)("h3",{className:"country-capital",children:[Object(u.jsx)("span",{className:"country-label",children:"Capital: "}),t.capital]})]})]})})}function b(e){var a=e.dark,t=e.countries;return Object(u.jsx)("section",{className:"country-list",children:t.map((function(e,t){return Object(u.jsx)(d,{dark:a,country:e},t)}))})}function h(e){var a=e.dark,t=e.setRegionSearch,n=e.setCountrySearch,c=e.data;return Object(u.jsxs)("main",{"data-dark":a,children:[Object(u.jsx)(j,{dark:a,setRegionSearch:t,setCountrySearch:n}),Object(u.jsx)(b,{dark:a,countries:c})]})}function O(e){var a=e.dark,t=e.setDark;return Object(u.jsxs)("header",{"data-dark":a,children:[Object(u.jsx)("h1",{children:"Where in the world?"}),Object(u.jsxs)("button",{"data-dark":a,onClick:function(){return t(!a)},children:[a?"Light":"Dark"," Mode"]})]})}function m(e){var a=e.dark,t=e.initialData,c=Object(o.f)().countryName,r=Object(n.useState)(),s=Object(i.a)(r,2),j=s[0],d=s[1];return Object(n.useEffect)((function(){d(t.find((function(e){return e.name===c})))}),[c]),Object(u.jsxs)("main",{"data-dark":a,className:"detailed-page",children:[Object(u.jsx)(l.b,{className:"back-link","data-dark":a,to:"/countries/",children:"Back"}),Object(u.jsxs)("div",{className:"detailed-country-card",children:[Object(u.jsx)("div",{className:"flag-container",children:Object(u.jsx)("img",{src:null===j||void 0===j?void 0:j.flag,alt:"".concat(null===j||void 0===j?void 0:j.name,"-flag")})}),Object(u.jsxs)("div",{"data-dark":a,className:"text-container",children:[Object(u.jsx)("h2",{className:"country-name",children:null===j||void 0===j?void 0:j.name}),Object(u.jsxs)("div",{className:"details-container",children:[Object(u.jsxs)("h3",{className:"country-native-name",children:[Object(u.jsx)("span",{className:"country-label",children:"Native Name: "}),null===j||void 0===j?void 0:j.nativeName]}),Object(u.jsxs)("h3",{className:"country-population",children:[Object(u.jsx)("span",{className:"country-label",children:"Population: "}),null===j||void 0===j?void 0:j.population.toLocaleString("en-US")]}),Object(u.jsxs)("h3",{className:"country-region",children:[Object(u.jsx)("span",{className:"country-label",children:"Region: "}),null===j||void 0===j?void 0:j.region]}),Object(u.jsxs)("h3",{className:"country-sub-region",children:[Object(u.jsx)("span",{className:"country-label",children:"Sub Region: "}),null===j||void 0===j?void 0:j.subregion]}),Object(u.jsxs)("h3",{className:"country-capital",children:[Object(u.jsx)("span",{className:"country-label",children:"Capital: "}),null===j||void 0===j?void 0:j.capital]}),Object(u.jsxs)("h3",{className:"country-top-level-domain",children:[Object(u.jsx)("span",{className:"country-label",children:"Top Level Domain: "}),null===j||void 0===j?void 0:j.topLevelDomain[0]]}),Object(u.jsxs)("h3",{className:"country-currency",children:[Object(u.jsx)("span",{className:"country-label",children:"Currency: "}),null===j||void 0===j?void 0:j.currencies[0].name]}),Object(u.jsxs)("h3",{className:"country-languages",children:[Object(u.jsx)("span",{className:"country-label",children:"Languages: "}),null===j||void 0===j?void 0:j.languages.map((function(e,a){return"".concat(e.name).concat(a===j.languages.length-1?"":","," ")}))]}),0===(null===j||void 0===j?void 0:j.borders.length)?null:Object(u.jsxs)("h3",{className:"country-borders",children:[Object(u.jsx)("span",{className:"country-label",children:"Border Countries: "}),null===j||void 0===j?void 0:j.borders.map((function(e,n){var c=t.find((function(a){return a.alpha3Code===e}));return Object(u.jsx)(l.b,{to:"/countries/".concat(c.name),"data-dark":a,className:"country-link",children:"".concat(c.name)})}))]})]})]})]})]})}t(32);var x=t(15),p=t.n(x),v=t(18);function g(){var e="https://restcountries.eu/rest/v2/all",a=Object(n.useState)([]),t=Object(i.a)(a,2),c=t[0],r=t[1],s=Object(n.useState)([]),l=Object(i.a)(s,2),o=l[0],u=l[1];function j(){return(j=Object(v.a)(p.a.mark((function a(){var t,n;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(e);case 3:return t=a.sent,a.next=6,t.json();case 6:n=a.sent,u(n),r(n),console.log(n),a.next=15;break;case 12:throw a.prev=12,a.t0=a.catch(0),a.t0;case 15:case"end":return a.stop()}}),a,null,[[0,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),[c,r,o]}function f(e){var a=e.searchQuery,t=e.initialData,c=e.setData,r=e.searchTarget;Object(n.useEffect)((function(){c(t.filter((function(e){return""===a||e[r].includes(a)})))}),[a])}var y=function(){var e=g(),a=Object(i.a)(e,3),t=a[0],c=a[1],r=a[2],s=Object(n.useState)(""),j=Object(i.a)(s,2),d=j[0],b=j[1];f({searchQuery:d,initialData:r,setData:c,searchTarget:"region"});var x=Object(n.useState)(""),p=Object(i.a)(x,2),v=p[0],y=p[1];f({searchQuery:v,initialData:r,setData:c,searchTarget:"name"});var N=Object(n.useState)(!1),k=Object(i.a)(N,2),S=k[0],D=k[1];return Object(u.jsxs)("div",{"data-dark":S,className:"App",children:[Object(u.jsx)(O,{dark:S,setDark:D}),Object(u.jsx)(l.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/countries/",exact:!0,component:function(){return Object(u.jsx)(h,{dark:S,setRegionSearch:b,setCountrySearch:y,data:t})}}),Object(u.jsx)(o.a,{path:"/countries/:countryName",component:function(){return Object(u.jsx)(m,{dark:S,initialData:r})}})]})})]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.845f2fed.chunk.js.map