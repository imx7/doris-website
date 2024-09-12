"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[382412],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,y=u["".concat(i,".").concat(g)]||u[g]||m[g]||l;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},565071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"CANCEL-ALTER-SYSTEM",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM",id:"version-3.0/sql-manual/sql-statements/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM",title:"CANCEL-ALTER-SYSTEM",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM.md",sourceDirName:"sql-manual/sql-statements/Cluster-Management-Statements",slug:"/sql-manual/sql-statements/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM",draft:!1,tags:[],version:"3.0",frontMatter:{title:"CANCEL-ALTER-SYSTEM",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-DROP-BROKER",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER"},next:{title:"CREATE-ROLE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Account-Management-Statements/CREATE-ROLE"}},i={},c=[{value:"CANCEL-ALTER-SYSTEM",id:"cancel-alter-system",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"cancel-alter-system"},"CANCEL-ALTER-SYSTEM"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"CANCEL DECOMMISSION"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u64a4\u9500\u4e00\u4e2a\u8282\u70b9\u4e0b\u7ebf\u64cd\u4f5c\u3002\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff01\uff09"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u901a\u8fc7 host \u548c port \u67e5\u627e backend")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL DECOMMISSION BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...];\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u901a\u8fc7 backend_id \u67e5\u627e backend")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL DECOMMISSION BACKEND "id1","id2","id3...";\n')),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u53d6\u6d88\u4e24\u4e2a\u8282\u70b9\u7684\u4e0b\u7ebf\u64cd\u4f5c\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},' CANCEL DECOMMISSION BACKEND "host1:port", "host2:port";\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u53d6\u6d88 backend_id \u4e3a 1 \u7684\u8282\u70b9\u7684\u4e0b\u7ebf\u64cd\u4f5c\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CANCEL DECOMMISSION BACKEND "1","2";\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CANCEL, DECOMMISSION, CANCEL ALTER\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);