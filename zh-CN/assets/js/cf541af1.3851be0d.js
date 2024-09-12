"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[665274],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),y=s,d=p["".concat(l,".").concat(y)]||p[y]||f[y]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},154663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),s=(t(296540),t(15680));const o={title:"JSON_EXISTS_PATH",language:"zh-CN"},a=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/json-exists-path",id:"version-2.1/sql-manual/sql-functions/json-functions/json-exists-path",title:"JSON_EXISTS_PATH",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/json-functions/json-exists-path.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-exists-path",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-exists-path",draft:!1,tags:[],version:"2.1",frontMatter:{title:"JSON_EXISTS_PATH",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON_EXTRACT",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-extract"},next:{title:"JSON_TYPE",permalink:"/zh-CN/docs/sql-manual/sql-functions/json-functions/json-type"}},l={},c=[{value:"json_exists_path",id:"json_exists_path",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,s.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"json_exists_path"},"json_exists_path"),(0,s.yg)("h3",{id:"description"},"description"),(0,s.yg)("p",null,"\u7528\u6765\u5224\u65adjson_path\u6307\u5b9a\u7684\u5b57\u6bb5\u5728JSON\u6570\u636e\u4e2d\u662f\u5426\u5b58\u5728\uff0c\u5982\u679c\u5b58\u5728\u8fd4\u56deTRUE\uff0c\u4e0d\u5b58\u5728\u8fd4\u56deFALSE"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},"BOOLEAN json_exists_path(JSON j, VARCHAR json_path)\n")),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("p",null,"\u53c2\u8003 ",(0,s.yg)("a",{parentName:"p",href:"../../sql-reference/Data-Types/JSON.md"},"json tutorial")," \u4e2d\u7684\u793a\u4f8b"),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("p",null,"json_exists_path"))}f.isMDXComponent=!0}}]);