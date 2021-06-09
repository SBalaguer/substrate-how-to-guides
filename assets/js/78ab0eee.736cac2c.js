(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return p}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){return function(t){var n=d(t.components);return a.a.createElement(e,o({},t,{components:n}))}},d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(166)),o={sidebar_position:1,keywords:"basics, beginner, runtime"},l={unversionedId:"basics/basic-pallet-integration",id:"basics/basic-pallet-integration",isDocsHomePage:!1,title:"Basic pallet integration",description:"\"I haven't quite yet internalized the basic process of integrating a pallet in my runtime...Ugh!\" Totally get it, it's OK, you won't even need this way sooner than you know.",source:"@site/docs/01-basics/basic-pallet-integration.md",sourceDirName:"01-basics",slug:"/basics/basic-pallet-integration",permalink:"/substrate-how-to-guides/docs/basics/basic-pallet-integration",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/01-basics/basic-pallet-integration.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,keywords:"basics, beginner, runtime"},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/substrate-how-to-guides/docs/intro"},next:{title:"Primitive token mint",permalink:"/substrate-how-to-guides/docs/basics/mint-token"}},s=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Import your pallet",id:"1-import-your-pallet",children:[]},{value:"2. Include it in your runtime",id:"2-include-it-in-your-runtime",children:[]},{value:"3. Update <code>Cargo.toml</code>",id:"3-update-cargotoml",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Related material",id:"related-material",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"\"I haven't quite yet internalized the basic process of integrating a pallet in my runtime...Ugh!\" Totally get it, it's OK, you won't even need this way sooner than you know.")),Object(i.mdx)("p",null,Object(i.mdx)("a",{parentName:"p",href:"https://playground.substrate.dev/?deploy=node-template"},Object(i.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/Playground-Node_Template-brightgreen?logo=Parity%20Substrate",alt:"Try on playground"}))),Object(i.mdx)("h2",{id:"goal"},"Goal"),Object(i.mdx)("p",null,"Learn the steps for integrating a pallet to your runtime."),Object(i.mdx)("h2",{id:"use-cases"},"Use cases"),Object(i.mdx)("p",null,"Including a pallet that implements an event and a call for runtime."),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,"This guide is an extension to the ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/docs/en/tutorials/add-a-pallet/import-a-pallet"},'"Add a Pallet to Your Runtime" tutorial'),", intended as a ressource\nfor developers new to Substrate looking to quickly integrate a pallet to their runtime."),Object(i.mdx)("h2",{id:"steps"},"Steps"),Object(i.mdx)("h3",{id:"1-import-your-pallet"},"1. Import your pallet"),Object(i.mdx)("p",null,"Assuming a pallet called ",Object(i.mdx)("inlineCode",{parentName:"p"},"pallet_something")," is created, the first step is to import it in ",Object(i.mdx)("inlineCode",{parentName:"p"},"runtime/lib.rs"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"// Import your pallet.\npub use pallet_something;\n")),Object(i.mdx)("h3",{id:"2-include-it-in-your-runtime"},"2. Include it in your runtime"),Object(i.mdx)("p",null,"Now, configure its runtime implementation. Our pallet only has ",Object(i.mdx)("inlineCode",{parentName:"p"},"Event")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"Call")," types exposed to the runtime:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"// Configure your pallet.\nimpl pallet_something::Config for Runtime {\n    type Event = Event;\n    type Call = Call;\n}\n")),Object(i.mdx)("p",null,"Then, declare your pallet and the items it exposes in ",Object(i.mdx)("inlineCode",{parentName:"p"},"construct_runtime!"),", including the additional ",Object(i.mdx)("inlineCode",{parentName:"p"},"Module")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"Storage"),"\ntypes for the runtime macro: "),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"construct_runtime!(\n    pub enum Runtime where\n        Block = Block,\n        NodeBlock = opaque::Block,\n        UncheckedExtrinsic = UncheckedExtrinsic\n    {\n/* --snip-- */\n        Something: pallet_something::{Module, Call, Storage, Event<T>}, \n/* --snip-- */\n    }\n);\n")),Object(i.mdx)("h3",{id:"3-update-cargotoml"},"3. Update ",Object(i.mdx)("inlineCode",{parentName:"h3"},"Cargo.toml")),Object(i.mdx)("p",null,"In ",Object(i.mdx)("inlineCode",{parentName:"p"},"/runtime/Cargo.toml"),", include your pallet as a local dependency and include it in ",Object(i.mdx)("inlineCode",{parentName:"p"},"std"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"/* --snip-- */\n# local dependencies\npallet-something = { path = '../pallets/pallet-something', default-features = false, version = '3.0.0' }\n/* --snip-- */\nstd = [\n'pallet-something/std',\n/* --snip-- */\n]\n")),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://github.com/substrate-developer-hub/substrate-node-template/blob/master/pallets/template/src/lib.rs#L1-L107"},"Template pallet")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"playground.substrate.dev"},"Substrate node template"))),Object(i.mdx)("h2",{id:"related-material"},"Related material"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/runtime/tests#mock-runtime-environment"},"Mock runtime")," ")))}u.isMDXComponent=!0}}]);