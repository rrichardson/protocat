(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{52:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(6),o=(t(0),t(76)),i={title:"Basic middleware"},c={unversionedId:"wiki/basic-middleware",id:"wiki/basic-middleware",isDocsHomePage:!1,title:"Basic middleware",description:"`typescript",source:"@site/docs/wiki/basic-middleware.md",slug:"/wiki/basic-middleware",permalink:"/docs/wiki/basic-middleware",version:"current",sidebar:"wikiSidebar",previous:{title:"Starting a server",permalink:"/docs/wiki/starting-server"},next:{title:"Middlewares",permalink:"/docs/wiki/middlewares"}},l=[],p={rightToc:l};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { ProtoCat } from 'protocat'\n\nconst app = new ProtoCat()\n\napp.addService(/* ... */)\napp.use(call => {\n  console.log(`[${call.type}] ${call.path}`)\n  return next()\n})\n")),Object(o.b)("p",null,"Before or after adding a service, you can add middlewares that get invoked on each request for all call types."),Object(o.b)("p",null,"There is more to do with middlewares and more to know about them, see advanced guides!"))}u.isMDXComponent=!0},76:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=n,m=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return t?a.a.createElement(m,c(c({ref:r},p),{},{components:t})):a.a.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);