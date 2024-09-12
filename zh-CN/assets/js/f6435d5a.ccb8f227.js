"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[923933],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,f=u["".concat(s,".").concat(y)]||u[y]||m[y]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},128537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const i={title:"BITMAP_FROM_ARRAY",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-from-array",id:"version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-from-array",title:"BITMAP_FROM_ARRAY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-from-array.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-from-array",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-from-array",draft:!1,tags:[],version:"2.1",frontMatter:{title:"BITMAP_FROM_ARRAY",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_TO_ARRAY",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-to-array"},next:{title:"BITMAP_EMPTY",permalink:"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/bitmap-empty"}},s={},c=[{value:"bitmap_from_array",id:"bitmap_from_array",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_from_array"},"bitmap_from_array"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_FROM_ARRAY(ARRAY input)")),(0,a.yg)("p",null,"\u5c06\u4e00\u4e2aTINYINT/SMALLINT/INT/BIGINT\u7c7b\u578b\u7684\u6570\u7ec4\u8f6c\u5316\u4e3a\u4e00\u4e2aBITMAP\n\u5f53\u8f93\u5165\u5b57\u6bb5\u4e0d\u5408\u6cd5\u65f6\uff0c\u7ed3\u679c\u8fd4\u56deNULL"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select *, bitmap_to_string(bitmap_from_array(c_array)) from array_test;\n+------+-----------------------+------------------------------------------------+\n| id   | c_array               | bitmap_to_string(bitmap_from_array(`c_array`)) |\n+------+-----------------------+------------------------------------------------+\n|    1 | [NULL]                | NULL                                           |\n|    2 | [1, 2, 3, NULL]       | NULL                                           |\n|    2 | [1, 2, 3, -10]        | NULL                                           |\n|    3 | [1, 2, 3, 4, 5, 6, 7] | 1,2,3,4,5,6,7                                  |\n|    4 | [100, 200, 300, 300]  | 100,200,300                                    |\n+------+-----------------------+------------------------------------------------+\n5 rows in set (0.02 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_FROM_ARRAY,BITMAP\n")))}m.isMDXComponent=!0}}]);