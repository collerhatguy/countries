(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(16),s=a.n(r),i=a(12),l=a(3),o=a(11),u=a(9),j=a(18),b=a(4),d=function(e){var t=Object(c.useState)(e),a=Object(o.a)(t,2),n=a[0],r=a[1];return[n,function(e){var t=e.target,a=t.name,c=t.value,s=t.checked,i="checkbox"===t.type?s:c;r(Object(b.a)(Object(b.a)({},n),{},Object(j.a)({},a,i)))}]},O=a(38);function h(e,t,a){var n=function(e,t){var a=Object(c.useRef)(e),n=Object(c.useRef)();Object(c.useEffect)((function(){a.current=e}),[e]);var r=Object(c.useCallback)((function(){n.current=setTimeout((function(){return a.current()}),t)}),[t]),s=Object(c.useCallback)((function(){n.current&&clearTimeout(n.current)}),[]);return Object(c.useEffect)((function(){return r(),s}),[t,r,s]),{reset:Object(c.useCallback)((function(){s(),r()}),[s,r]),clear:s}}(e,t),r=n.reset,s=n.clear;Object(c.useEffect)(r,[].concat(Object(O.a)(a),[r])),Object(c.useEffect)(s,[])}var x=a(35),f=a.n(x),m="SWAP_THEME",p="SEARCH",v="GET_DATA",g="SET_ERROR",k=a(1),y={name:"",region:""};var N=Object(u.b)(null,{search:function(e){return{type:p,payload:e}}})((function(e){var t=e.dark,a=e.search,c=d(y),n=Object(o.a)(c,2),r=n[0],s=n[1],i=r.country,l=r.region;return h((function(){return a(r)}),1e3,[r]),Object(k.jsxs)("section",{className:"search-section",children:[Object(k.jsx)("input",{"data-dark":t,onChange:s,value:i,className:"search-bar",type:"text",name:"name",placeholder:"Search for a country"}),Object(k.jsxs)("label",{htmlFor:"region",children:["Filter by Region",Object(k.jsx)("input",{"data-dark":t,onChange:s,value:l,list:"region-list",name:"region",id:"region"})]}),Object(k.jsxs)("datalist",{id:"region-list",children:[Object(k.jsx)("option",{value:"Africa"}),Object(k.jsx)("option",{value:"America"}),Object(k.jsx)("option",{value:"Asia"}),Object(k.jsx)("option",{value:"Europe"}),Object(k.jsx)("option",{value:"Oceania"})]})]})}));function C(e){var t=e.dark,a=e.country,c=a.name,n=a.flag,r=a.population,s=a.region,l=a.capital;return Object(k.jsx)(i.b,{to:"/countries/".concat(c),children:Object(k.jsxs)("div",{className:"country-card",children:[Object(k.jsx)("div",{className:"flag-container",children:Object(k.jsx)("img",{src:n,alt:"".concat(c,"-flag")})}),Object(k.jsxs)("div",{"data-dark":t,className:"text-container",children:[Object(k.jsx)("h2",{className:"country-name",children:c}),Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{className:"country-label",children:"Population: "}),r.toLocaleString("en-US")]}),Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{className:"country-label",children:"Region: "}),s]}),Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{className:"country-label",children:"Capital: "}),l]})]})]})})}var E=Object(u.b)((function(e){return{countries:e.shownCountries}}))((function(e){var t=e.dark,a=e.countries;return Object(k.jsx)("section",{className:"country-list",children:a.map((function(e,a){return Object(k.jsx)(C,{dark:t,country:e},a)}))})}));var w=function(e){var t=e.dark;return Object(k.jsxs)("main",{"data-dark":t,children:[Object(k.jsx)(N,{dark:t}),Object(k.jsx)(E,{dark:t})]})};var S=Object(u.b)((function(e){return{dark:e.dark}}),{swapTheme:function(){return{type:m}}})((function(e){var t=e.dark,a=e.swapTheme;return Object(k.jsxs)("header",{"data-dark":t,children:[Object(k.jsx)("h1",{children:"Where in the world?"}),Object(k.jsxs)("button",{"data-dark":t,onClick:a,children:[t?"Light":"Dark"," Mode"]})]})}));function R(e){var t=e.borders,a=e.dark,c=e.countries;return 0===t.length?null:Object(k.jsxs)("h3",{className:"country-borders",children:[Object(k.jsx)("span",{className:"country-label",children:"Border Countries: "}),t.map((function(e){var t=c.find((function(t){return t.alpha3Code===e}));return Object(k.jsx)(i.b,{to:"/countries/".concat(t.name),"data-dark":a,className:"country-link",children:"".concat(t.name)})}))]})}var L={name:"",flag:"",nativeName:"",population:"",region:"",subregion:"",capital:"",topLevelDomain:[],currencies:[{name:""}],languages:[],borders:[]};var T=Object(u.b)((function(e){return{countries:e.allCountries}}))((function(e){var t=e.dark,a=e.countries,n=Object(l.g)().countryName,r=Object(c.useState)(L),s=Object(o.a)(r,2),i=s[0],u=s[1],j=Object(l.f)().goBack;Object(c.useEffect)((function(){u(a.find((function(e){return e.name===n})))}),[n,a]);var b=i.name,d=i.flag,O=i.nativeName,h=i.population,x=i.region,f=i.subregion,m=i.capital,p=Object(o.a)(i.topLevelDomain,1)[0],v=Object(o.a)(i.currencies,1)[0].name,g=i.languages,y=i.borders;return Object(k.jsxs)("main",{"data-dark":t,className:"detailed-page",children:[Object(k.jsx)("button",{className:"back-link","data-dark":t,onClick:j,children:"Back"}),Object(k.jsxs)("div",{className:"detailed-country-card",children:[Object(k.jsx)("div",{className:"flag-container",children:Object(k.jsx)("img",{src:d,alt:"".concat(b,"-flag")})}),Object(k.jsxs)("div",{"data-dark":t,className:"text-container",children:[Object(k.jsx)("h2",{className:"country-name",children:b}),Object(k.jsxs)("div",{className:"details-container",children:[Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{className:"country-label",children:"Native Name: "}),O]}),Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{className:"country-label",children:"Population: "}),h.toLocaleString("en-US")]}),Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{className:"country-label",children:"Region: "}),x]}),Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{className:"country-label",children:"Sub Region: "}),f]}),Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{className:"country-label",children:"Capital: "}),m]}),Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{className:"country-label",children:"Top Level Domain: "}),p]}),Object(k.jsxs)("h3",{children:[Object(k.jsx)("span",{className:"country-label",children:"Currency: "}),v]}),Object(k.jsxs)("h3",{className:"country-languages",children:[Object(k.jsx)("span",{className:"country-label",children:"Languages: "}),g.map((function(e){return e.name})).join(", ")]}),Object(k.jsx)(R,{borders:y,dark:t,countries:a})]})]})]})]})}));a(71);var A=Object(u.b)((function(e){return{dark:e.dark}}),{getData:function(){return function(e){f.a.get("https://restcountries.eu/rest/v2/all").then((function(t){return e({type:v,payload:t.data})})).catch((function(t){return e({type:g,payload:t})}))}}})((function(e){var t=e.getData,a=e.dark;return Object(c.useEffect)(t,[]),Object(k.jsxs)("div",{"data-dark":a,className:"App",children:[Object(k.jsx)(S,{}),Object(k.jsx)(i.a,{children:Object(k.jsxs)(l.c,{children:[Object(k.jsx)(l.a,{path:"/countries/:countryName",children:Object(k.jsx)(T,{dark:a})}),Object(k.jsx)(l.a,{path:"/countries/",children:Object(k.jsx)(w,{dark:a})})]})})]})})),D=a(24),B=a(36),M=a(37),P=a.n(M),_={allCountries:[],shownCountries:[],err:"",dark:!0},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(b.a)(Object(b.a)({},e),{},{shownCountries:e.allCountries.filter((function(e){var a=t.payload;return Object.keys(a).reduce((function(t,c){if(""===a[c])return t;var n=e[c].toLowerCase(),r=a[c].toLowerCase();return!!n.includes(r)&&t}),!0)}))});case m:return Object(b.a)(Object(b.a)({},e),{},{dark:!e.dark});case v:return Object(b.a)(Object(b.a)({},e),{},{allCountries:t.payload,shownCountries:t.payload});case g:return Object(b.a)(Object(b.a)({},e),{},{err:t.payload});default:return e}},H=Object(D.b)(F,Object(D.a)(B.a,P.a));s.a.render(Object(k.jsx)(u.a,{store:H,children:Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(A,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.d3a2d2a3.chunk.js.map