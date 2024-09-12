"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[561280],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||l;return t?a.createElement(d,i(i({ref:n},c),{},{components:t})):a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},951473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(296540),t(15680));const l={title:"BE \u7684\u914d\u7f6e\u4fe1\u606f",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/be/config",id:"version-3.0/admin-manual/be/config",title:"BE \u7684\u914d\u7f6e\u4fe1\u606f",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/be/config.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/config",permalink:"/zh-CN/docs/3.0/admin-manual/be/config",draft:!1,tags:[],version:"3.0",frontMatter:{title:"BE \u7684\u914d\u7f6e\u4fe1\u606f",language:"zh-CN"},sidebar:"docs",previous:{title:"\u68c0\u67e5 tablet \u6587\u4ef6\u4e22\u5931",permalink:"/zh-CN/docs/3.0/admin-manual/be/check-tablet-segment"},next:{title:"metrics \u4fe1\u606f",permalink:"/zh-CN/docs/3.0/admin-manual/be/metrics"}},s={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:3},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:3},{value:"Examples",id:"examples",level:2}],c={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/show_config"),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"POST /api/update_config?{key}={val}")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"\u67e5\u8be2/\u66f4\u65b0 BE \u7684\u914d\u7f6e\u4fe1\u606f"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"persist"),"\n\u662f\u5426\u6301\u4e45\u5316\uff0c\u9009\u586b\uff0c\u9ed8\u8ba4",(0,r.yg)("inlineCode",{parentName:"p"},"false"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"key"),"\n\u914d\u7f6e\u9879\u540d\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"val"),"\n\u914d\u7f6e\u9879\u503c\u3002        "))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("h3",{id:"\u67e5\u8be2"},"\u67e5\u8be2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[["agent_task_trace_threshold_sec","int32_t","2","true"], ...]\n')),(0,r.yg)("h3",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "config_name": "agent_task_trace_threshold_sec",\n        "status": "OK",\n        "msg": ""\n    }\n]\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "config_name": "agent_task_trace_threshold_sec",\n        "status": "OK",\n        "msg": ""\n    },\n    {\n        "config_name": "enable_segcompaction",\n        "status": "BAD",\n        "msg": "set enable_segcompaction=false failed, reason: [NOT_IMPLEMENTED_ERROR]\'enable_segcompaction\' is not support to modify."\n    },\n    {\n        "config_name": "enable_time_lut",\n        "status": "BAD",\n        "msg": "set enable_time_lut=false failed, reason: [NOT_IMPLEMENTED_ERROR]\'enable_time_lut\' is not support to modify."\n    }\n]\n')),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:8040/api/show_config"\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST "http://127.0.0.1:8040/api/update_config?agent_task_trace_threshold_sec=2&persist=true"\n\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST "http://127.0.0.1:8040/api/update_config?agent_task_trace_threshold_sec=2&enable_merge_on_write_correctness_check=true&persist=true"\n')))}g.isMDXComponent=!0}}]);