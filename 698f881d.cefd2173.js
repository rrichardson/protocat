(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{62:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return o}));var n=r(2),a=r(6),c=(r(0),r(76)),i={id:"calltype",title:"CallType",sidebar_label:"CallType"},l={unversionedId:"api/enums/calltype",id:"api/enums/calltype",isDocsHomePage:!1,title:"CallType",description:"protocat \u203a CallType",source:"@site/docs/api/enums/calltype.md",slug:"/api/enums/calltype",permalink:"/docs/api/enums/calltype",version:"current",sidebar_label:"CallType",sidebar:"apiSidebar",previous:{title:"ProtoCat",permalink:"/docs/api/classes/protocat"},next:{title:"CacheImplementation",permalink:"/docs/api/interfaces/cacheimplementation"}},b=[{value:"Index",id:"index",children:[{value:"Enumeration members",id:"enumeration-members",children:[]}]},{value:"Enumeration members",id:"enumeration-members-1",children:[{value:"Bidi",id:"bidi",children:[]},{value:"ClientStream",id:"clientstream",children:[]},{value:"ServerStream",id:"serverstream",children:[]},{value:"Unary",id:"unary",children:[]}]}],p={rightToc:b};function o(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/index"}),"protocat")," \u203a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/enums/calltype"}),"CallType")),Object(c.b)("p",null,"Call types aligned with grpc core library"),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"enumeration-members"},"Enumeration members"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/enums/calltype#bidi"}),"Bidi")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/enums/calltype#clientstream"}),"ClientStream")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/enums/calltype#serverstream"}),"ServerStream")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/enums/calltype#unary"}),"Unary"))),Object(c.b)("h2",{id:"enumeration-members-1"},"Enumeration members"),Object(c.b)("h3",{id:"bidi"},"Bidi"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"Bidi"),': = "bidi"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/grissius/protocat/blob/18d8ab8/src/lib/call-types.ts#L3"}),"call-types.ts:3"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"clientstream"},"ClientStream"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ClientStream"),': = "clientStream"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/grissius/protocat/blob/18d8ab8/src/lib/call-types.ts#L5"}),"call-types.ts:5"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"serverstream"},"ServerStream"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"ServerStream"),': = "serverStream"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/grissius/protocat/blob/18d8ab8/src/lib/call-types.ts#L4"}),"call-types.ts:4"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"unary"},"Unary"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"Unary"),': = "unary"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/grissius/protocat/blob/18d8ab8/src/lib/call-types.ts#L6"}),"call-types.ts:6"))))}o.isMDXComponent=!0},76:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),o=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=o(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=o(r),u=n,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||c;return r?a.a.createElement(d,l(l({ref:t},p),{},{components:r})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<c;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);