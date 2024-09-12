"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[523086],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>h});var n=r(296540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},352399:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(58168),o=(r(296540),r(15680));const a={title:"Apache Doris announced the official release of version 1.1.1",description:"Dear community, Apache Doris 1.1.1 is now available, with several enhancements and bug fixes based on 1.1.0\uff0cenabling smoother user experience.",date:"2022-09-13",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-notes.png"},i=void 0,l={permalink:"/zh-CN/blog/release-note-1.1.1",source:"@site/blog/release-note-1.1.1.md",title:"Apache Doris announced the official release of version 1.1.1",description:"Dear community, Apache Doris 1.1.1 is now available, with several enhancements and bug fixes based on 1.1.0\uff0cenabling smoother user experience.",date:"2022-09-13T00:00:00.000Z",formattedDate:"2022\u5e749\u670813\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.1.1",description:"Dear community, Apache Doris 1.1.1 is now available, with several enhancements and bug fixes based on 1.1.0\uff0cenabling smoother user experience.",date:"2022-09-13",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-notes.png"},prevItem:{title:"Apache Doris announced the official release of version 1.1.3",permalink:"/zh-CN/blog/release-note-1.1.3"},nextItem:{title:"Apache Doris announced the official release of version 1.1.2",permalink:"/zh-CN/blog/release-note-1.1.2"}},s={authorsImageUrls:[void 0]},c=[{value:"Features",id:"features",level:2},{value:"Support ODBC Sink in Vectorized Engine.",id:"support-odbc-sink-in-vectorized-engine",level:3},{value:"Simple Memtracker for Vectorized Engine.",id:"simple-memtracker-for-vectorized-engine",level:3},{value:"Improvements",id:"improvements",level:2},{value:"Cache decompressed data in page cache.",id:"cache-decompressed-data-in-page-cache",level:3},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Fix the problem that could not do rolling upgrade from 1.0.(Serious)",id:"fix-the-problem-that-could-not-do-rolling-upgrade-from-10serious",level:3},{value:"Fix the problem that some query not fall back to non-vectorized engine, and BE will core.",id:"fix-the-problem-that-some-query-not-fall-back-to-non-vectorized-engine-and-be-will-core",level:3},{value:"Compaction not work correctly and cause -235 Error.",id:"compaction-not-work-correctly-and-cause--235-error",level:3},{value:"Some segment fault cases during query.",id:"some-segment-fault-cases-during-query",level:3},{value:"Thanks",id:"thanks",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"features"},"Features"),(0,o.yg)("h3",{id:"support-odbc-sink-in-vectorized-engine"},"Support ODBC Sink in Vectorized Engine."),(0,o.yg)("p",null,"This feature is enabled in non-vectorized engine but it is missed in vectorized engine in 1.1. So that we add back this feature in 1.1.1."),(0,o.yg)("h3",{id:"simple-memtracker-for-vectorized-engine"},"Simple Memtracker for Vectorized Engine."),(0,o.yg)("p",null,"There is no memtracker in BE for vectorized engine in 1.1, so that the memory is out of control and cause OOM. In 1.1.1, a simple memtracker is added to BE and could control the memory and cancel the query when memory exceeded."),(0,o.yg)("h2",{id:"improvements"},"Improvements"),(0,o.yg)("h3",{id:"cache-decompressed-data-in-page-cache"},"Cache decompressed data in page cache."),(0,o.yg)("p",null,"Some data is compressed using bitshuffle and it costs a lot of time to decompress it during query. In 1.1.1, doris will decompress the data that encoded by bitshuffle to accelerate query and we find it could reduce 30% latency for some query in ssb-flat."),(0,o.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,o.yg)("h3",{id:"fix-the-problem-that-could-not-do-rolling-upgrade-from-10serious"},"Fix the problem that could not do rolling upgrade from 1.0.(Serious)"),(0,o.yg)("p",null,"This issue was introduced in version 1.1 and may cause BE core when upgrade BE but not upgrade FE."),(0,o.yg)("p",null,"If you encounter this problem, you can try to fix it with ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/10833"},"#10833"),"."),(0,o.yg)("h3",{id:"fix-the-problem-that-some-query-not-fall-back-to-non-vectorized-engine-and-be-will-core"},"Fix the problem that some query not fall back to non-vectorized engine, and BE will core."),(0,o.yg)("p",null,"Currently, vectorized engine could not deal with all sql queries and some queries (like left outer join) will use non-vectorized engine to run. But there are some cases not covered in 1.1. And it will cause be crash."),(0,o.yg)("h3",{id:"compaction-not-work-correctly-and-cause--235-error"},"Compaction not work correctly and cause -235 Error."),(0,o.yg)("p",null,"One rowset multi segments in uniq key compaction, segments rows will be merged in generic_iterator but merged_rows not increased. Compaction will failed in check_correctness, and make a tablet with too much versions which lead to -235 load error."),(0,o.yg)("h3",{id:"some-segment-fault-cases-during-query"},"Some segment fault cases during query."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/10961"},"#10961"),"\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/10954"},"#10954"),"\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/10962"},"#10962")),(0,o.yg)("h2",{id:"thanks"},"Thanks"),(0,o.yg)("p",null,"Thanks to everyone who has contributed to this release:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"@jacktengg\n@mrhhsg\n@xinyiZzz\n@yixiutt\n@starocean999\n@morrySnow\n@morningman\n@HappenLee\n")))}p.isMDXComponent=!0}}]);