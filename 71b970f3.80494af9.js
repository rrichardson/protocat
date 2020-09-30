(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(76)),c={title:"Client"},o={unversionedId:"wiki/client",id:"wiki/client",isDocsHomePage:!1,title:"Client",description:"For doing a server abstraction, there was a simple reason: lack of middlewares which are (almost) an essential concept to backend server development. With the client, there are no missing features per se, but the interface is a bit basic, extremely verbose and somewhat painful to work with. ProtoCat's client aims at providing a modern familiar interface, that does not take any power of the underlying layer away and preserves (or improves at some points) type safety.",source:"@site/docs/wiki/client.md",slug:"/wiki/client",permalink:"/docs/wiki/client",version:"current",sidebar:"wikiSidebar",previous:{title:"Caching",permalink:"/docs/wiki/caching"}},s=[{value:"Getting started - Unary call",id:"getting-started---unary-call",children:[]},{value:"Call types",id:"call-types",children:[{value:"Server stream",id:"server-stream",children:[]},{value:"Client stream",id:"client-stream",children:[]},{value:"Bidi",id:"bidi",children:[]}]},{value:"Client initialization",id:"client-initialization",children:[]},{value:"Interceptors",id:"interceptors",children:[{value:"Access log interceptor",id:"access-log-interceptor",children:[]},{value:"Metadata interceptor",id:"metadata-interceptor",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For doing a server abstraction, there was a simple reason: lack of middlewares which are (almost) an essential concept to backend server development. With the client, there are no missing features per se, but the interface is a bit basic, extremely verbose and somewhat painful to work with. ProtoCat's client aims at providing a modern familiar interface, that does not take any power of the underlying layer away and preserves (or improves at some points) type safety."),Object(i.b)("h2",{id:"getting-started---unary-call"},"Getting started - Unary call"),Object(i.b)("p",null,"Compare the following implementations that achieve the same goal with native grpc interface for node, and ProtoCat's client abstraction with ",Object(i.b)("inlineCode",{parentName:"p"},"createClient"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Initialize client"),Object(i.b)("li",{parentName:"ol"},"Setup request message and set client metadata"),Object(i.b)("li",{parentName:"ol"},"Obtain server's response, initial and trailing metadata")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const client = createClient(CatService, ADDR)\nconst { status, metadata, response } = await client.getCat((req, metadata) => {\n  req.setName('Meow')\n  metadata.set('authorization', 'cat-permit')\n})\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const client = new CatService(ADDR, ChannelCredentials.createInsecure())\nlet metadata: Promise<Metadata> = null as any\nlet status: Promise<StatusObject> = null as any\nconst clientMeta = new Metadata()\nclientMeta.set('authorization', 'cat-permit')\nconst hello = await new Promise<GetCatResponse>((resolve, reject) => {\n  const call = client.getCat(\n    new GetCatRequest().setName('Meow'),\n    clientMeta,\n    (err, res) => (err ? reject(err) : resolve(res))\n  )\n  metadata = new Promise(resolve => call.on('metadata', resolve))\n  status = new Promise(resolve => call.on('status', resolve))\n})\n")),Object(i.b)("h2",{id:"call-types"},"Call types"),Object(i.b)("p",null,"While the ProtoCat's client really shines on unary calls, it does support all gRPC call types. Following the premise of keeping the power of underlying implementation, we must tamper with the stream API."),Object(i.b)("h3",{id:"server-stream"},"Server stream"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const { status, metadata, call } = client.watchCats(req =>\n  req.onlyWithPointyEars(true)\n)\nconst acc: string[] = []\ncall.on('data', res => acc.push(res.getName()))\nawait new Promise(resolve => call.on('end', resolve))\n")),Object(i.b)("h3",{id:"client-stream"},"Client stream"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const { status, metadata, call, response } = client.shareLocation()\n'meeoaw!'.split('').forEach(c => {\n  call.write(\n    new ShareLocationRequest()\n      .setLng(c.charCodeAt())\n      .setLat(Math.random() * c.charCodeAt())\n  )\n})\ncall.end()\nawait response\n")),Object(i.b)("h3",{id:"bidi"},"Bidi"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const { status, metadata, call } = await client.feedCats()\nconst acc: string[] = []\ncall.on('data', res => acc.push(res.getName()))\n;['lasagne', 'cake', 'fish'].forEach(dish => {\n  call.write(new FeedCatsRequest().setFood(dish))\n})\ncall.end()\nawait new Promise(resolve => call.on('end', resolve))\n")),Object(i.b)("h2",{id:"client-initialization"},"Client initialization"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"createClient")," accepts the same arguments as the native client, with additional first argument being a ",Object(i.b)("em",{parentName:"p"},"client definition"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Address is mandatory"),Object(i.b)("li",{parentName:"ol"},"Credentials are mandatory on the underlying implementation, when not supplied insecure channel credentials are provided"),Object(i.b)("li",{parentName:"ol"},"Client options")),Object(i.b)("p",null,"The helper creates an instance in a closure and provides stub with the updated API."),Object(i.b)("p",null,"Each call instead of getting arguments for ",Object(i.b)("inlineCode",{parentName:"p"},"request")," (some types), ",Object(i.b)("inlineCode",{parentName:"p"},"metadata")," and ",Object(i.b)("inlineCode",{parentName:"p"},"options"),", is provided a setup function, in which user can set the prepared objects."),Object(i.b)("p",null,"The client definition is either a client class, or object of client classes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const client = createClient({ cat: CatService, dog: DogService }, ADDR)\nawait client.cat.getCat()\nawait client.dog.getDog()\n")),Object(i.b)("p",null,"This way you can have a single client to access multiple services of a single API, with sharing the connection configuration. In this case, there are several client instances created under the hood with the same configuration and the types are joyfully inferred from the definition!"),Object(i.b)("h2",{id:"interceptors"},"Interceptors"),Object(i.b)("p",null,"Exciting feature of gRPC clients are interceptors. They are like middlewares for clients, allowing you to add hooks for your client actions. It's a powerful concept that allows for uniform caching, logging or retry mechanisms."),Object(i.b)("p",null,"The native API is as always basic, verbose and powerful. For many simple use-cases too overwhelming. But since ProtoCat aims to support potentially existing intereceptors and yet provide an elegant way to define custom ones, it proves some basic creators to handle the basic use cases."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Need more? You can create your custom interceptor that ones just the thing you need. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/grpc/proposal/blob/master/L5-node-client-interceptors.md"}),"gRFC for NodeJS Client Interceptors")," that has detailed overview of the specs the implementation follows."))),Object(i.b)("h3",{id:"access-log-interceptor"},"Access log interceptor"),Object(i.b)("p",null,"Middleware-like interface for convenient logging"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const client = createClient(\n  CatService,\n  ADDR,\n  ChannelCredentials.createInsecure(),\n  {\n    interceptors: [\n      accessLogInterceptor(async (ctx, next) => {\n        console.log(`${ctx.options.method_definition.path} --\x3e`)\n        const st = await next()\n        console.log(`${ctx.options.method_definition.path} <-- (${st.details})`)\n      }),\n    ],\n  }\n)\n")),Object(i.b)("h3",{id:"metadata-interceptor"},"Metadata interceptor"),Object(i.b)("p",null,"If you are required to set client metadata on each request (for example to authenticate), you can let this interceptor take care of that"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const client = createClient(\n  CatService,\n  ADDR,\n  ChannelCredentials.createInsecure(),\n  {\n    interceptors: [\n      metadataInterceptor(async (meta, opts) => {\n        const bearer = getTokenForPath(opts.method_definition.path)\n        meta.set('authorization', `Bearer ${bearer}`)\n      }),\n    ],\n  }\n)\n")))}p.isMDXComponent=!0},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(c,".").concat(m)]||d[m]||b[m]||i;return n?r.a.createElement(u,o(o({ref:t},l),{},{components:n})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);