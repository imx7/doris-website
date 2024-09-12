"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[602031],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,y=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},495706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const i={title:"\u67e5\u8be2\u5143\u4fe1\u606f",language:"zh-CN"},l=void 0,o={unversionedId:"admin-manual/be/meta",id:"version-3.0/admin-manual/be/meta",title:"\u67e5\u8be2\u5143\u4fe1\u606f",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/be/meta.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/meta",permalink:"/zh-CN/docs/3.0/admin-manual/be/meta",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u67e5\u8be2\u5143\u4fe1\u606f",language:"zh-CN"},sidebar:"docs",previous:{title:"\u89e6\u53d1 Compaction",permalink:"/zh-CN/docs/3.0/admin-manual/be/compaction-run"},next:{title:"\u505a\u5feb\u7167",permalink:"/zh-CN/docs/3.0/admin-manual/be/snapshot"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/meta/header/{tablet_id}?byte_to_base64={bool}")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u67e5\u8be2 tablet \u5143\u4fe1\u606f"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"tablet_id"),"\ntable \u7684 id")),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"byte_to_base64"),"\n\u662f\u5426\u6309 base64 \u7f16\u7801\uff0c\u9009\u586b\uff0c\u9ed8\u8ba4",(0,a.yg)("inlineCode",{parentName:"li"},"false"),"\u3002")),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'```json\n{\n    "table_id": 148107,\n    "partition_id": 148104,\n    "tablet_id": 148193,\n    "schema_hash": 2090621954,\n    "shard_id": 38,\n    "creation_time": 1673253868,\n    "cumulative_layer_point": -1,\n    "tablet_state": "PB_RUNNING",\n    ...\n}\n```\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'```shell\ncurl "http://127.0.0.1:8040/api/meta/header/148193&byte_to_base64=true"\n\n```\n')))}m.isMDXComponent=!0}}]);