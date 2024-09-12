"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[395343],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,g=u["".concat(i,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},88606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-GRANTS",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-GRANTS",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-GRANTS",title:"SHOW-GRANTS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-GRANTS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-GRANTS",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-GRANTS",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-GRANTS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-FILE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-FILE"},next:{title:"SHOW-LAST-INSERT",permalink:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-LAST-INSERT"}},i={},p=[{value:"SHOW-GRANTS",id:"show-grants",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-grants"},"SHOW-GRANTS"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW GRANTS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null," \u8be5\u8bed\u53e5\u7528\u4e8e\u67e5\u770b\u7528\u6237\u6743\u9650\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [ALL] GRANTS [FOR user_identity];\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"SHOW ALL GRANTS \u53ef\u4ee5\u67e5\u770b\u6240\u6709\u7528\u6237\u7684\u6743\u9650\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u6307\u5b9a user_identity\uff0c\u5219\u67e5\u770b\u8be5\u6307\u5b9a\u7528\u6237\u7684\u6743\u9650\u3002\u4e14\u8be5 user_identity \u5fc5\u987b\u4e3a\u901a\u8fc7 CREATE USER \u547d\u4ee4\u521b\u5efa\u7684\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u6307\u5b9a user_identity\uff0c\u5219\u67e5\u770b\u5f53\u524d\u7528\u6237\u7684\u6743\u9650\u3002")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u6240\u6709\u7528\u6237\u6743\u9650\u4fe1\u606f"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALL GRANTS;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u6307\u5b9a user \u7684\u6743\u9650"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW GRANTS FOR jack@'%';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u5f53\u524d\u7528\u6237\u7684\u6743\u9650"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW GRANTS;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, GRANTS\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);