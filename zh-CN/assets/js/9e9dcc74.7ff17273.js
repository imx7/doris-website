"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[640397],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>_});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),f=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=f(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=f(t),d=i,_=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return t?r.createElement(_,o(o({ref:n},s),{},{components:t})):r.createElement(_,o({ref:n},s))}));function _(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var f=2;f<a;f++)o[f]=t[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},663885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>f});var r=t(58168),i=(t(296540),t(15680));const a={title:"IPV6_CIDR_TO_RANGE",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range",id:"version-3.0/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range",title:"IPV6_CIDR_TO_RANGE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range",draft:!1,tags:[],version:"3.0",frontMatter:{title:"IPV6_CIDR_TO_RANGE",language:"zh-CN"},sidebar:"docs",previous:{title:"IPV4_CIDR_TO_RANGE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range"},next:{title:"IS_IP_ADDRESS_IN_RANGE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/ip-functions/is-ip-address-in-range"}},c={},f=[{value:"IPV6_CIDR_TO_RANGE",id:"ipv6_cidr_to_range",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],s={toc:f},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv6_cidr_to_range"},"IPV6_CIDR_TO_RANGE"),(0,i.yg)("p",null,"IPV6_CIDR_TO_RANGE"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"STRUCT<IPV6, IPV6> IPV6_CIDR_TO_RANGE(IPV6 ip_v6, INT16 cidr)")),(0,i.yg)("p",null,"\u63a5\u6536\u4e00\u4e2aIPv6\u548c\u4e00\u4e2a\u5305\u542bCIDR\u7684Int16\u503c\u3002\u8fd4\u56de\u4e00\u4e2a\u7ed3\u6784\u4f53\uff0c\u5176\u4e2d\u5305\u542b\u4e24\u4e2aIPv6\u5b57\u6bb5\u5206\u522b\u8868\u793a\u5b50\u7f51\u7684\u8f83\u4f4e\u8303\u56f4\uff08min\uff09\u548c\u8f83\u9ad8\u8303\u56f4\uff08max\uff09\u3002"),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SELECT ipv6_cidr_to_range(ipv6_string_to_num(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32);\n+---------------------------------------------------------------------------------------+\n| ipv6_cidr_to_range(ipv6_string_to_num(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32) |\n+---------------------------------------------------------------------------------------+\n| {"min": "2001:db8::", "max": "2001:db8:ffff:ffff:ffff:ffff:ffff:ffff"}                |\n+---------------------------------------------------------------------------------------+\n\nmysql> SELECT ipv6_cidr_to_range(to_ipv6(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32);\n+----------------------------------------------------------------------------+\n| ipv6_cidr_to_range(to_ipv6(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32) |\n+----------------------------------------------------------------------------+\n| {"min": "2001:db8::", "max": "2001:db8:ffff:ffff:ffff:ffff:ffff:ffff"}     |\n+----------------------------------------------------------------------------+\n\nmysql> SELECT ipv6_cidr_to_range(NULL, NULL);\n+--------------------------------+\n| ipv6_cidr_to_range(NULL, NULL) |\n+--------------------------------+\n| NULL                           |\n+--------------------------------+\n')),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"IPV6_CIDR_TO_RANGE, IP"))}u.isMDXComponent=!0}}]);