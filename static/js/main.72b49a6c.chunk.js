(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{80:function(n,e,t){},81:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t.n(r),a=t(18),o=t.n(a),i=t(5),u=t(14),s=t(3),l=t(16),b=t(11),j=t(20),d=t(6),m=function(n){var e=Object(r.useState)(n),t=Object(l.a)(e,2),c=t[0],a=t[1];return[c,function(n){var e=n.target,t=e.name,r=e.value,o=e.checked,i="checkbox"===e.type?o:r;a(Object(d.a)(Object(d.a)({},c),{},Object(j.a)({},t,i)))}]},f=t(46);function h(n,e,t){var c=function(n,e){var t=Object(r.useRef)(n),c=Object(r.useRef)();Object(r.useEffect)((function(){t.current=n}),[n]);var a=Object(r.useCallback)((function(){c.current=setTimeout((function(){return t.current()}),e)}),[e]),o=Object(r.useCallback)((function(){c.current&&clearTimeout(c.current)}),[]);return Object(r.useEffect)((function(){return a(),o}),[e,a,o]),{reset:Object(r.useCallback)((function(){o(),a()}),[o,a]),clear:o}}(n,e),a=c.reset,o=c.clear;Object(r.useEffect)(a,[].concat(Object(f.a)(t),[a])),Object(r.useEffect)(o,[])}var O,p=t(40),g=t.n(p),x="SWAP_THEME",v="SEARCH",y="GET_DATA",k="SET_ERROR",C=t(4),w=t(1),N=C.b.section(O||(O=Object(i.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    input {\n        color: ",";\n        margin: 2rem;\n        padding: 1rem;\n        outline: none;\n    }\n    .search-bar {\n        width: 50%;\n    }\n    @media(max-width: 500px) {\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n    }\n"])),(function(n){return n.theme.fontColor})),E={name:"",region:""};var R,_,S=Object(b.b)(null,{search:function(n){return{type:v,payload:n}}})((function(n){var e=n.dark,t=n.search,r=m(E),c=Object(l.a)(r,2),a=c[0],o=c[1],i=a.country,u=a.region;return h((function(){return t(a)}),1e3,[a]),Object(w.jsxs)(N,{className:"search-section",children:[Object(w.jsx)("input",{"data-dark":e,onChange:o,value:i,className:"search-bar",type:"text",name:"name",placeholder:"Search for a country"}),Object(w.jsxs)("label",{htmlFor:"region",children:["Filter by Region",Object(w.jsx)("input",{"data-dark":e,onChange:o,value:u,list:"region-list",name:"region",id:"region"})]}),Object(w.jsxs)("datalist",{id:"region-list",children:[Object(w.jsx)("option",{value:"Africa"}),Object(w.jsx)("option",{value:"America"}),Object(w.jsx)("option",{value:"Asia"}),Object(w.jsx)("option",{value:"Europe"}),Object(w.jsx)("option",{value:"Oceania"})]})]})})),T=t(82),L=C.b.h3(R||(R=Object(i.a)(["\n    margin: 1rem 1rem 1rem 0;\n    span {\n        font-weight: 800;\n        margin-right: 1rem;\n    }\n"])));function A(n){var e=n.detail,t=n.value;return Object(w.jsxs)(L,{children:[Object(w.jsxs)("span",{className:"country-label",children:[e.replace("_"," "),":"]}),t]})}function D(n){var e=n.details,t=n.country;return Object(w.jsx)(w.Fragment,{children:e.map((function(n){return Object(w.jsx)(A,{detail:n,value:t[n]},Object(T.a)())}))})}var B,P=C.b.div(_||(_=Object(i.a)(["\n    width: 100%;\n    height: 100%;\n    img {\n        width: 100%;\n        height: 100%;\n    }\n"])));function F(n){var e=n.flag,t=n.name;return Object(w.jsx)(P,{className:"flag-container",children:Object(w.jsx)("img",{src:e,alt:"".concat(t,"-flag")})})}var M,H=C.b.div(B||(B=Object(i.a)(["\n    background-color: ",";\n    color: ",";\n    margin: 1rem .5rem;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    width: 300px;\n    height: 400px;\n    .text-container {\n        min-height: min-content;\n        padding: 2rem;\n        .country-name {\n            font-weight: 800;\n        }\n    }\n    .country-name {\n        margin-bottom: 2rem;\n    }\n"])),(function(n){return n.theme.panelColor}),(function(n){return n.theme.fontColor}));function J(n){var e=n.country,t=e.name,r=e.flag;return Object(w.jsx)(u.b,{to:"/countries/".concat(t),children:Object(w.jsxs)(H,{className:"country-card",children:[Object(w.jsx)(F,{flag:r,name:t}),Object(w.jsxs)("div",{className:"text-container",children:[Object(w.jsx)("h2",{className:"country-name",children:t}),Object(w.jsx)(D,{details:["Population","Region","Capital"],country:e})]})]})})}var W=C.b.section(M||(M=Object(i.a)(["\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n"])));var G,I=Object(b.b)((function(n){return{countries:n.shownCountries}}))((function(n){var e=n.countries;return Object(w.jsx)(W,{className:"country-list",children:e.map((function(n,e){return Object(w.jsx)(J,{country:n},e)}))})})),U=C.b.main(G||(G=Object(i.a)(["\n    background-color: ",";\n    color: ",";\n"])),(function(n){return n.theme.background}),(function(n){return n.theme.fontColor}));var q,z=function(){return Object(w.jsxs)(U,{children:[Object(w.jsx)(S,{}),Object(w.jsx)(I,{})]})},K=C.b.header(q||(q=Object(i.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    background-color: ",";\n    color: ",";\n    h1 {\n        font-weight: 800;\n        margin: 2rem;\n    }\n    button {\n        cursor: pointer;\n        background-color: ",";\n        color: ",";\n        border: 0;\n        margin: 2rem 5rem;\n        font-weight: 300;\n    }\n"])),(function(n){return n.theme.panelColor}),(function(n){return n.theme.fontColor}),(function(n){return n.theme.panelColor}),(function(n){return n.theme.fontColor}));var Q,V,X=Object(b.b)((function(n){return{dark:n.dark}}),{swapTheme:function(){return{type:x}}})((function(n){var e=n.dark,t=n.swapTheme;return Object(w.jsxs)(K,{children:[Object(w.jsx)("h1",{children:"Where in the world?"}),Object(w.jsxs)("button",{onClick:t,children:[e?"Light":"Dark"," Mode"]})]})})),Y=(t(80),{panelColor:"hsl(209, 23%, 22%)",fontColor:"hsl(0, 0%, 100%)",background:"hsl(207, 26%, 17%)"}),Z={panelColor:"hsl(0, 0%, 100%)",fontColor:"hsl(200, 15%, 8%)",background:"hsl(0, 0%, 94%)"},$=C.b.h3(Q||(Q=Object(i.a)(["\n    margin-bottom: 1rem;\n"])));function nn(n){var e=n.borders,t=n.dark,r=n.countries;if(0===e.length)return null;var c=e.map((function(n){return r.find((function(e){return e.alpha3Code===n})).name}));return Object(w.jsxs)($,{className:"country-borders",children:[Object(w.jsxs)("span",{className:"country-label",children:["Border Countries: ",Object(w.jsx)("br",{})]}),c.map((function(n){return Object(w.jsx)(u.b,{to:"/countries/".concat(n),"data-dark":t,className:"country-link",children:n},Object(T.a)())}))]})}var en=C.b.div(V||(V=Object(i.a)(["\n    width: 100%;\n    margin: 1rem;\n    gap: 3rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    background-color: ",";\n    color: ",";\n    .text-container {\n        display: flex;\n        flex-flow: column wrap;\n        justify-content: center;\n        align-items: flex-start;\n        .details-container {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 1rem;\n        }\n    }\n    @media(max-width: 900px) {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        \n    }\n"])),(function(n){return n.theme.panelColor}),(function(n){return n.theme.fontColor}));var tn,rn,cn=Object(b.b)((function(n){return{countries:n.allCountries}}))((function(n){var e=n.countries,t=Object(s.g)().countryName,c=Object(r.useState)(),a=Object(l.a)(c,2),o=a[0],i=a[1];if(Object(r.useEffect)((function(){i(e.find((function(n){return n.name===t})))}),[t,e]),!o)return null;var u=o.name,b=o.flag,j=o.borders;return Object(w.jsxs)(en,{className:"detailed-country-card",children:[Object(w.jsx)(F,{flag:b,name:u}),Object(w.jsxs)("div",{className:"text-container",children:[Object(w.jsx)("h2",{className:"country-name",children:u}),Object(w.jsxs)("div",{className:"details-container",children:[Object(w.jsx)(D,{details:["Population","Region","Capital","Native_Name","Sub_Region","Top_Level_Domain","Currency","Languages"],country:o}),Object(w.jsx)(nn,{borders:j,countries:e})]})]})]})})),an=C.b.main(tn||(tn=Object(i.a)(["\n    width: 100%;\n    margin-top: 2rem;\n    padding: 3rem;\n    background-color: ",";\n    color: ",";\n    .back-link, a {\n        background-color: ",";\n        color: ",";\n        cursor: pointer;\n        margin: .2rem;\n        font-weight: 300;\n        display: inline-block;\n        border-radius: 5px;\n        border: black 1px solid;\n        padding: .5rem 2rem;\n    }\n"])),(function(n){return n.theme.panelColor}),(function(n){return n.theme.fontColor}),(function(n){return n.theme.panelColor}),(function(n){return n.theme.fontColor}));function on(){var n=Object(s.f)().goBack;return Object(w.jsxs)(an,{className:"detailed-page",children:[Object(w.jsx)("button",{className:"back-link",onClick:n,children:"Back"}),Object(w.jsx)(cn,{})]})}var un=C.b.div(rn||(rn=Object(i.a)(["\n  background-color: ",";\n  min-height: 100vh;\n"])),(function(n){return n.theme.background}));var sn=Object(b.b)((function(n){return{dark:n.dark}}),{getData:function(){return function(n){g.a.get("https://restcountries.eu/rest/v2/all").then((function(e){return n({type:y,payload:e.data.map((function(n){return Object(d.a)(Object(d.a)({},n),{},{Population:n.population.toLocaleString("en-US"),Native_Name:n.nativeName,Sub_Region:n.subregion,Region:n.region,Capital:n.capital,Top_Level_Domain:n.topLevelDomain[0],Currency:n.currencies[0].name,Languages:n.languages.map((function(n){return n.name})).join(", ")})}))})})).catch((function(e){return n({type:k,payload:e})}))}}})((function(n){var e=n.getData,t=n.dark;return Object(r.useEffect)(e,[]),Object(w.jsx)(C.a,{theme:t?Y:Z,children:Object(w.jsxs)(un,{className:"App",children:[Object(w.jsx)(X,{}),Object(w.jsx)(u.a,{children:Object(w.jsxs)(s.c,{children:[Object(w.jsx)(s.a,{path:"/countries/:countryName",children:Object(w.jsx)(on,{})}),Object(w.jsx)(s.a,{path:"/countries/",children:Object(w.jsx)(z,{})})]})})]})})})),ln=t(27),bn=t(44),jn=t(45),dn=t.n(jn),mn={allCountries:[],shownCountries:[],err:"",dark:!0},fn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(d.a)(Object(d.a)({},n),{},{shownCountries:n.allCountries.filter((function(n){var t=e.payload;return Object.keys(t).reduce((function(e,r){if(""===t[r])return e;var c=n[r].toLowerCase(),a=t[r].toLowerCase();return!!c.includes(a)&&e}),!0)}))});case x:return Object(d.a)(Object(d.a)({},n),{},{dark:!n.dark});case y:return Object(d.a)(Object(d.a)({},n),{},{allCountries:e.payload,shownCountries:e.payload});case k:return Object(d.a)(Object(d.a)({},n),{},{err:e.payload});default:return n}},hn=Object(ln.b)(fn,Object(ln.a)(bn.a,dn.a));o.a.render(Object(w.jsx)(b.a,{store:hn,children:Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(sn,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.72b49a6c.chunk.js.map