"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[631727],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,d=c["".concat(s,".").concat(m)]||c[m]||y[m]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},459843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"Overview",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-data-types/numeric/numeric-overview",id:"sql-manual/sql-data-types/numeric/numeric-overview",title:"Overview",description:"\x3c!--",source:"@site/docs/sql-manual/sql-data-types/numeric/numeric-overview.md",sourceDirName:"sql-manual/sql-data-types/numeric",slug:"/sql-manual/sql-data-types/numeric/numeric-overview",permalink:"/docs/dev/sql-manual/sql-data-types/numeric/numeric-overview",draft:!1,tags:[],version:"current",frontMatter:{title:"Overview",language:"en"},sidebar:"docs",previous:{title:"WIDTH_BUCKET",permalink:"/docs/dev/sql-manual/sql-functions/width-bucket"},next:{title:"BOOLEAN",permalink:"/docs/dev/sql-manual/sql-data-types/numeric/BOOLEAN"}},s={},p=[{value:"BOOLEAN",id:"boolean",level:2},{value:"Integer",id:"integer",level:2},{value:"Floating-point types",id:"floating-point-types",level:2},{value:"Fixed-point type",id:"fixed-point-type",level:2}],u={toc:p},c="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Doris supports the following numeric data types:"),(0,a.yg)("h2",{id:"boolean"},"BOOLEAN"),(0,a.yg)("p",null,"There are two possible values: 0 represents false, and 1 represents true."),(0,a.yg)("p",null,"For more info, please refer ",(0,a.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-data-types/numeric/BOOLEAN"},"BOOLEAN"),"\u3002"),(0,a.yg)("h2",{id:"integer"},"Integer"),(0,a.yg)("p",null,"All are signed integers. The differences among the INT types are the number of bytes occupied and the range of values they can represent:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/docs/dev/sql-manual/sql-data-types/numeric/TINYINT"},"TINYINT")),": 1 byte, ","[-128, 127]")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/docs/dev/sql-manual/sql-data-types/numeric/SMALLINT"},"SMALLINT")),": 2 bytes, ","[-32768, 32767]")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/docs/dev/sql-manual/sql-data-types/numeric/INT"},"INT")),": 4 bytes, ","[-2147483648, 2147483647]")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/docs/dev/sql-manual/sql-data-types/numeric/BIGINT"},"BIGINT")),": 8 bytes, ","[-9223372036854775808, 9223372036854775807]")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/docs/dev/sql-manual/sql-data-types/numeric/LARGEINT"},"LARGEINT")),": 16 bytes, ","[-2^127, 2^127 - 1]"))),(0,a.yg)("h2",{id:"floating-point-types"},"Floating-point types"),(0,a.yg)("p",null,"Including imprecise floating-point types ",(0,a.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-data-types/numeric/FLOAT"},"FLOAT")," and ",(0,a.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-data-types/numeric/DOUBLE"},"DOUBLE"),", corresponding to the ",(0,a.yg)("inlineCode",{parentName:"p"},"float")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"double")," in common programming languages"),(0,a.yg)("h2",{id:"fixed-point-type"},"Fixed-point type"),(0,a.yg)("p",null,"The precise fixed-point type ",(0,a.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-data-types/numeric/DECIMAL"},"DECIMAL"),", used in financial and other cases that require strict accuracy."))}y.isMDXComponent=!0}}]);