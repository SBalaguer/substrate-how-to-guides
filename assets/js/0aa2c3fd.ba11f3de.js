(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),m=function(e){return function(t){var n=d(t.components);return i.a.createElement(e,o({},t,{components:n}))}},d=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,p=u["".concat(o,".").concat(m)]||u[m]||g[m]||a;return n?i.a.createElement(p,c(c({ref:t},s),{},{components:n})):i.a.createElement(p,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),a=(n(0),n(166)),o={sidebar_position:2,keywords:"storage migration, testing, runtime"},s={unversionedId:"storage-migrations/migration-tests",id:"storage-migrations/migration-tests",isDocsHomePage:!1,title:"Migration tests",description:"Verify first, write last ... and always test!",source:"@site/docs/05-storage-migrations/migration-tests.md",sourceDirName:"05-storage-migrations",slug:"/storage-migrations/migration-tests",permalink:"/substrate-how-to-guides/docs/storage-migrations/migration-tests",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/how-to-substrate/docs/05-storage-migrations/migration-tests.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:"storage migration, testing, runtime"},sidebar:"tutorialSidebar",previous:{title:"Trigger a storage migration",permalink:"/substrate-how-to-guides/docs/storage-migrations/migration-steps-polkadotjs"},next:{title:"Ringbuffer queue",permalink:"/substrate-how-to-guides/docs/storage-migrations/ringbuffer"}},c=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Write mock runtime",id:"1-write-mock-runtime",children:[]},{value:"2. Specify unit tests",id:"2-specify-unit-tests",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Resources",id:"resources",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(i.default)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,Object(a.mdx)("em",{parentName:"p"},"Verify first, write last ... and always test!")),Object(a.mdx)("h2",{id:"goal"},"Goal"),Object(a.mdx)("p",null,"Write tests for a simple storage migration."),Object(a.mdx)("h2",{id:"use-cases"},"Use cases"),Object(a.mdx)("p",null,"Testing a migration module inside a pallet."),Object(a.mdx)("h2",{id:"overview"},"Overview"),Object(a.mdx)("p",null,"When writing a runtime migration module it is important to test it to avoid any critical issues caused by mangling storage items. This\nguide provides a walk through of the tests to include for a simple storage migration of a single pallet, using the Nicks pallet\nmigration from the ",Object(a.mdx)("a",{parentName:"p",href:"./nicks-migration"},"Basic Storage Migration")," guide as a reference."),Object(a.mdx)("h2",{id:"steps"},"Steps"),Object(a.mdx)("h3",{id:"1-write-mock-runtime"},"1. Write mock runtime"),Object(a.mdx)("p",null,"Refer to ",Object(a.mdx)("a",{parentName:"p",href:"../testing/basic-pallet-testing"},"this guide")," to learn how to set up the dependencies for your test environment."),Object(a.mdx)("h3",{id:"2-specify-unit-tests"},"2. Specify unit tests"),Object(a.mdx)("p",null,"Derive the different tests that need to be included based on your pallet's functions. "),Object(a.mdx)("p",null,"For the Nicks pallet migration we need:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"fn kill_name_should_work()")," "),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"fn force_name_should_work()")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"fn normal_operation_should_work()")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"fn error_catching_should_work()")," ")),Object(a.mdx)("p",null,"Using ",Object(a.mdx)("inlineCode",{parentName:"p"},"asset_noop!(...)"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"assert_ok!(...)")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"assert_eq!(...)"),", constructing one of these tests looks like this:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-rust"},'#[test]\n    fn normal_operation_should_work() {\n        new_test_ext().execute_with(|| {\n            assert_ok!(Nicks::set_name(Origin::signed(1), b"Gav".to_vec(), None));\n            assert_eq!(Balances::reserved_balance(1), 2);\n            assert_eq!(Balances::free_balance(1), 8);\n            assert_eq!(<NameOf<Test>>::get(1).unwrap().0.first, b"Gav".to_vec());\n\n            assert_ok!(Nicks::set_name(Origin::signed(1), b"Gavin".to_vec(), None));\n            assert_eq!(Balances::reserved_balance(1), 2);\n            assert_eq!(Balances::free_balance(1), 8);\n            assert_eq!(<NameOf<Test>>::get(1).unwrap().0.first, b"Gavin".to_vec());\n\n            assert_ok!(Nicks::clear_name(Origin::signed(1)));\n            assert_eq!(Balances::reserved_balance(1), 0);\n            assert_eq!(Balances::free_balance(1), 10);\n        });\n    }\n')),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Migrating the Nicks pallet")),Object(a.mdx)("h2",{id:"resources"},"Resources"),Object(a.mdx)("h4",{id:"how-to-guides"},"How-to guides"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"/migration-steps-polkadotjs"},"Migration steps")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"/nicks-migration"},"Nicks migration"))),Object(a.mdx)("h4",{id:"other"},"Other"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://github.com/maxsam4/fork-off-substrate"},"Fork-off Substrate tool"))))}u.isMDXComponent=!0}}]);