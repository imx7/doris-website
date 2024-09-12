"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[541768],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>d});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return t?n.createElement(d,o(o({ref:a},c),{},{components:t})):n.createElement(d,o({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},632111:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(58168),r=(t(296540),t(15680));const i={title:"Apache Doris announced the official release of version 1.2.4",description:"Dear community, Apache Doris 1.2.4 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-06-05",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.4-release.png"},o=void 0,l={permalink:"/zh-CN/blog/release-note-1.2.4",source:"@site/blog/release-note-1.2.4.md",title:"Apache Doris announced the official release of version 1.2.4",description:"Dear community, Apache Doris 1.2.4 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-06-05T00:00:00.000Z",formattedDate:"2023\u5e746\u67085\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.2.4",description:"Dear community, Apache Doris 1.2.4 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-06-05",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.4-release.png"},prevItem:{title:"Understanding data compaction in 3 minutes",permalink:"/zh-CN/blog/Understanding-Data-Compaction-in-3-Minutes"},nextItem:{title:"A/B Testing was a handful, until we found the replacement for Druid",permalink:"/zh-CN/blog/AB-Testing-was-a-Handful-Until-we-Found-the-Replacement-for-Druid"}},s={authorsImageUrls:[void 0]},p=[{value:"Behavior Changed",id:"behavior-changed",level:2},{value:"Improvements",id:"improvements",level:2},{value:"JDBC Catalog",id:"jdbc-catalog",level:3},{value:"Spark Load",id:"spark-load",level:3},{value:"Bug Fixes",id:"bug-fixes",level:2}],c={toc:p},u="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"behavior-changed"},"Behavior Changed"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For ",(0,r.yg)("inlineCode",{parentName:"p"},"DateV2"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"DatetimeV2")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"DecimalV3")," type, in the results of ",(0,r.yg)("inlineCode",{parentName:"p"},"DESCRIBLE")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE")," statements, they will no longer be displayed as ",(0,r.yg)("inlineCode",{parentName:"p"},"DateV2"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"DatetimeV2")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"DecimalV3"),", but directly displayed as ",(0,r.yg)("inlineCode",{parentName:"p"},"Date"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"Datetime")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Decimal"),"."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This change is for compatibility with some BI tools. If you want to see the actual type of the column, you can check it with the ",(0,r.yg)("inlineCode",{parentName:"li"},"DESCRIBE ALL")," statement."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When querying tables in the ",(0,r.yg)("inlineCode",{parentName:"p"},"information_schema")," database, the meta information(database, table, column, etc.) in the external catalog is no longer returned by default."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This change avoids the problem that the ",(0,r.yg)("inlineCode",{parentName:"li"},"information_schema")," database cannot be queried due to the connection problem of some external catalog, so as to solve the problem of using some BI tools with Doris. It can be controlled by the FE configuration  ",(0,r.yg)("inlineCode",{parentName:"li"},"infodb_support_ext_catalog"),", and the default value is ",(0,r.yg)("inlineCode",{parentName:"li"},"false"),", that is, the meta information of external catalog will not be returned.")))),(0,r.yg)("h2",{id:"improvements"},"Improvements"),(0,r.yg)("h3",{id:"jdbc-catalog"},"JDBC Catalog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Supports connecting to Trino/Presto via JDBC Catalog")),(0,r.yg)("p",null,"\u200b        Refer to: ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc#trino"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc#trino")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"JDBC Catalog connects to Clickhouse data source and supports Array type mapping")),(0,r.yg)("p",null,"\u200b        Refer to: ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc#clickhouse"},"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc#clickhouse")),(0,r.yg)("h3",{id:"spark-load"},"Spark Load"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Spark Load supports Resource Manager HA related configuration")),(0,r.yg)("p",null,"\u200b        Refer to: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/15000"},"https://github.com/apache/doris/pull/15000")),(0,r.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed several connectivity issues with Hive Catalog.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed ClassNotFound issues with Hudi Catalog.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Optimize the connection pool of JDBC Catalog to avoid too many connections.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fix the problem that OOM will occur when importing data from another Doris cluster through JDBC Catalog.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed serveral queries and imports planning issues.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed several issues with Unique Key Merge-On-Write data model.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fix several BDBJE issues and solve the problem of abnormal FE metadata in some cases.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fix the problem that the ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE VIEW")," statement does not support Table Valued Function.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed several memory statistics issues.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed several issues reading Parquet/ORC format.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed several issues with DecimalV3.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fixed several issues with SHOW QUERY/LOAD PROFILE."))))}m.isMDXComponent=!0}}]);