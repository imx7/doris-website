"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[123467],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),y=o,d=p["".concat(s,".").concat(y)]||p[y]||f[y]||l;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=y;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},369842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=t(58168),o=(t(296540),t(15680));const l={title:"TO_IPV4_OR_NULL",language:"zh-CN"},i=void 0,a={unversionedId:"sql-manual/sql-functions/ip-functions/to-ipv4-or-null",id:"version-3.0/sql-manual/sql-functions/ip-functions/to-ipv4-or-null",title:"TO_IPV4_OR_NULL",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/ip-functions/to-ipv4-or-null.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/to-ipv4-or-null",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/ip-functions/to-ipv4-or-null",draft:!1,tags:[],version:"3.0",frontMatter:{title:"TO_IPV4_OR_NULL",language:"zh-CN"},sidebar:"docs",previous:{title:"TO_IPV4_OR_DEFAULT",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/ip-functions/to-ipv4-or-default"},next:{title:"TO_IPV6",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/ip-functions/to-ipv6"}},s={},u=[{value:"TO_IPV4_OR_NULL",id:"to_ipv4_or_null",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"to_ipv4_or_null"},"TO_IPV4_OR_NULL"),(0,o.yg)("p",null,"TO_IPV4_OR_NULL"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"IPV4 TO_IPV4_OR_NULL(STRING ipv4_str)")),(0,o.yg)("p",null,"\u4e0eto_ipv4\u51fd\u6570\u7c7b\u4f3c\uff0c\u4f46\u5982\u679cIPv4\u5730\u5740\u7684\u683c\u5f0f\u975e\u6cd5\uff0c\u5219\u8fd4\u56deNULL\u3002"),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select to_ipv4_or_null('.');\n+----------------------+\n| to_ipv4_or_null('.') |\n+----------------------+\n| NULL                 |\n+----------------------+\n\nmysql> select to_ipv4_or_null(NULL);\n+-----------------------+\n| to_ipv4_or_null(NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"Keywords"),(0,o.yg)("p",null,"TO_IPV4_OR_NULL, IP"))}f.isMDXComponent=!0}}]);