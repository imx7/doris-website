"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[306384],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>y});var t=r(296540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,y=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?t.createElement(y,a(a({ref:n},u),{},{components:r})):t.createElement(y,a({ref:n},u))}));function y(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},491027:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(58168),i=(r(296540),r(15680));const o={title:"rtrim",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/rtrim",id:"version-1.2/sql-manual/sql-functions/string-functions/rtrim",title:"rtrim",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/rtrim.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/rtrim",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/rtrim",draft:!1,tags:[],version:"1.2",frontMatter:{title:"rtrim",language:"zh-CN"},sidebar:"docs",previous:{title:"ltrim",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/ltrim"},next:{title:"null_or_empty",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/null_or_empty"}},s={},c=[{value:"rtrim",id:"rtrim",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...r}=e;return(0,i.yg)(p,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"rtrim"},"rtrim"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR rtrim(VARCHAR str[, VARCHAR rhs])")),(0,i.yg)("p",null,"\u5f53\u6ca1\u6709rhs\u53c2\u6570\u65f6\uff0c\u5c06\u53c2\u6570 str \u4e2d\u4ece\u53f3\u4fa7\u90e8\u5206\u5f00\u59cb\u90e8\u5206\u8fde\u7eed\u51fa\u73b0\u7684\u7a7a\u683c\u53bb\u6389\uff0c\u5426\u5219\u53bb\u6389rhs"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> SELECT rtrim('ab d   ') str;\n+------+\n| str  |\n+------+\n| ab d |\n+------+\n\nmysql> SELECT rtrim('ababccaab','ab') str;\n+---------+\n| str     |\n+---------+\n| ababcca |\n+---------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"RTRIM\n")))}m.isMDXComponent=!0}}]);