"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[945410],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>b});var a=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,b=d["".concat(s,".").concat(m)]||d[m]||g[m]||o;return t?a.createElement(b,r(r({ref:n},u),{},{components:t})):a.createElement(b,r({ref:n},u))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},479441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(58168),i=(t(296540),t(15680));const o={title:"Debug Point",language:"en"},r=void 0,l={unversionedId:"admin-manual/fe/debug-point-action",id:"version-2.1/admin-manual/fe/debug-point-action",title:"Debug Point",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/fe/debug-point-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/debug-point-action",permalink:"/docs/admin-manual/fe/debug-point-action",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Debug Point",language:"en"},sidebar:"docs",previous:{title:"Meta Info Action",permalink:"/docs/admin-manual/fe/meta-info-action-V2"},next:{title:"Statistic Action",permalink:"/docs/admin-manual/fe/statistic-action"}},s={},p=[{value:"Code Example",id:"code-example",level:2},{value:"Global Config",id:"global-config",level:2},{value:"Activate A Specified Debug Point",id:"activate-a-specified-debug-point",level:2},{value:"API",id:"api",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3},{value:"Pass Custom Parameters",id:"pass-custom-parameters",level:2},{value:"API",id:"api-1",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Use parameters in FE and BE code",id:"use-parameters-in-fe-and-be-code",level:3},{value:"Disable Debug Point",id:"disable-debug-point",level:2},{value:"API",id:"api-2",level:3},{value:"Query Parameters",id:"query-parameters-1",level:3},{value:"Request body",id:"request-body-2",level:3},{value:"Response",id:"response-2",level:3},{value:"Examples",id:"examples-2",level:3},{value:"Clear Debug Points",id:"clear-debug-points",level:2},{value:"API",id:"api-3",level:3},{value:"Request body",id:"request-body-3",level:3},{value:"Response",id:"response-3",level:3},{value:"Examples",id:"examples-3",level:3},{value:"Debug Points in Regression Test",id:"debug-points-in-regression-test",level:2},{value:"Concurrent Issue",id:"concurrent-issue",level:3},{value:"Examples",id:"examples-4",level:3}],u={toc:p},d="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"debug-point"},"Debug Point"),(0,i.yg)("p",null,"Debug point is a piece of code, inserted into FE or BE code, when program running into this code, "),(0,i.yg)("p",null,"it can change variables or behaviors of the program. "),(0,i.yg)("p",null,"It is mainly used for unit test or regression test when it is impossible to trigger some exceptions through normal means."),(0,i.yg)("p",null,"Each debug point has a name, the name can be whatever you want, there are swithes to enable and disable debug points, "),(0,i.yg)("p",null,"and you can also pass data to debug points."),(0,i.yg)("p",null,"Both FE and BE support debug point, and after inserting debug point code, recompilation of FE or BE is needed."),(0,i.yg)("h2",{id:"code-example"},"Code Example"),(0,i.yg)("p",null,"FE example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'private Status foo() {\n    // dbug_fe_foo_do_nothing is the debug point name\n    // when it\'s active, DebugPointUtil.isEnable("dbug_fe_foo_do_nothing") returns true\n    if (DebugPointUtil.isEnable("dbug_fe_foo_do_nothing")) {\n        return Status.Nothing;\n    }\n        \n    do_foo_action();\n    \n    return Status.Ok;\n}\n')),(0,i.yg)("p",null,"BE example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c++"},'void Status foo() {\n     // dbug_be_foo_do_nothing is the debug point name\n     // when it\'s active, DBUG_EXECUTE_IF will execute the code block\n     DBUG_EXECUTE_IF("dbug_be_foo_do_nothing",  { return Status.Nothing; });\n   \n     do_foo_action();\n     \n     return Status.Ok;\n}\n')),(0,i.yg)("h2",{id:"global-config"},"Global Config"),(0,i.yg)("p",null,"To enable debug points globally, we need to set ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_debug_points")," to true,"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"enable_debug_points")," is located in FE's fe.conf and BE's be.conf."),(0,i.yg)("h2",{id:"activate-a-specified-debug-point"},"Activate A Specified Debug Point"),(0,i.yg)("p",null,"After debug points are enabled globally, a http request with a debug point name should be send to FE or BE node, ",(0,i.yg)("br",null),"\nonly after that, when the program running into the specified debug point, related code can be executed."),(0,i.yg)("h3",{id:"api"},"API"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"POST /api/debug_point/add/{debug_point_name}[?timeout=<int>&execute=<int>]\n")),(0,i.yg)("h3",{id:"query-parameters"},"Query Parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"debug_point_name"),"\nDebug point name. Mandatory parameter.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"timeout"),"\nTimeout in seconds. When timeout, the debug point will be deactivated. Default is -1, never timeout. Optional.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"execute"),"\nAfter activating, the max times the debug point can be executed. Default is -1,  unlimited times. Optional.  "))),(0,i.yg)("h3",{id:"request-body"},"Request body"),(0,i.yg)("p",null,"None"),(0,i.yg)("h3",{id:"response"},"Response"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0\n}\n')),(0,i.yg)("h3",{id:"examples"},"Examples"),(0,i.yg)("p",null,"After activating debug point ",(0,i.yg)("inlineCode",{parentName:"p"},"foo"),", executed no more than five times."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8030/api/debug_point/add/foo?execute=5"\n\n')),(0,i.yg)("h2",{id:"pass-custom-parameters"},"Pass Custom Parameters"),(0,i.yg)("p",null,'When activating debug point, besides "timeout" and "execute" mentioned above, passing custom parameters is also allowed.',(0,i.yg)("br",null),"\nA parameter is a key-value pair in the form of \"key=value\" in url path, after debug point name glued by character '?'.",(0,i.yg)("br",null),"\nSee examples below."),(0,i.yg)("h3",{id:"api-1"},"API"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"POST /api/debug_point/add/{debug_point_name}[?k1=v1&k2=v2&k3=v3...]\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"k1=v1")," ",(0,i.yg)("br",null),"\nk1 is parameter name ",(0,i.yg)("br",null),"\nv1 is parameter value ",(0,i.yg)("br",null),"\nmultiple key-value pairs are concatenated by ",(0,i.yg)("inlineCode",{parentName:"li"},"&")," ",(0,i.yg)("br",null))),(0,i.yg)("h3",{id:"request-body-1"},"Request body"),(0,i.yg)("p",null,"None"),(0,i.yg)("h3",{id:"response-1"},"Response"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0\n}\n')),(0,i.yg)("h3",{id:"examples-1"},"Examples"),(0,i.yg)("p",null,"Assuming a FE node with configuration http_port=8030 in fe.conf, ",(0,i.yg)("br",null),"\nthe following http request activates a debug point named ",(0,i.yg)("inlineCode",{parentName:"p"},"foo")," in FE node and passe parameter ",(0,i.yg)("inlineCode",{parentName:"p"},"percent")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"duration"),":"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"NOTE: User name and password may be needed."),(0,i.yg)("pre",{parentName:"blockquote"},(0,i.yg)("code",{parentName:"pre"},'curl -u root: -X POST "http://127.0.0.1:8030/api/debug_point/add/foo?percent=0.5&duration=3"\n'))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"NOTE:\n1. Inside FE and BE code, names and values of parameters are taken as strings.\n2. Parameter names and values are case sensitive in http request and FE/BE code.\n3. FE and BE share same url paths of REST API, it's just their IPs and Ports are different.\n")),(0,i.yg)("h3",{id:"use-parameters-in-fe-and-be-code"},"Use parameters in FE and BE code"),(0,i.yg)("p",null,"Following request activates debug point ",(0,i.yg)("inlineCode",{parentName:"p"},"OlapTableSink.write_random_choose_sink")," in FE and passes parameter ",(0,i.yg)("inlineCode",{parentName:"p"},"needCatchUp")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"sinkNum"),": "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'curl -u root: -X POST "http://127.0.0.1:8030/api/debug_point/add/OlapTableSink.write_random_choose_sink?needCatchUp=true&sinkNum=3"\n')),(0,i.yg)("p",null,"The code in FE checks debug point ",(0,i.yg)("inlineCode",{parentName:"p"},"OlapTableSink.write_random_choose_sink")," and gets parameter values:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'private void debugWriteRandomChooseSink(Tablet tablet, long version, Multimap<Long, Long> bePathsMap) {\n    DebugPoint debugPoint = DebugPointUtil.getDebugPoint("OlapTableSink.write_random_choose_sink");\n    if (debugPoint == null) {\n        return;\n    }\n    boolean needCatchup = debugPoint.param("needCatchUp", false);\n    int sinkNum = debugPoint.param("sinkNum", 0);\n    ...\n}\n')),(0,i.yg)("p",null,"Following request activates debug point ",(0,i.yg)("inlineCode",{parentName:"p"},"TxnManager.prepare_txn.random_failed")," in BE and passes parameter ",(0,i.yg)("inlineCode",{parentName:"p"},"percent"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8040/api/debug_point/add/TxnManager.prepare_txn.random_failed?percent=0.7\n')),(0,i.yg)("p",null,"The code in BE checks debug point ",(0,i.yg)("inlineCode",{parentName:"p"},"TxnManager.prepare_txn.random_failed")," and gets parameter value:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c++"},'DBUG_EXECUTE_IF("TxnManager.prepare_txn.random_failed",\n        {if (rand() % 100 < (100 * dp->param("percent", 0.5))) {\n                LOG_WARNING("TxnManager.prepare_txn.random_failed random failed");\n                return Status::InternalError("debug prepare txn random failed");\n        }}\n);\n')),(0,i.yg)("h2",{id:"disable-debug-point"},"Disable Debug Point"),(0,i.yg)("h3",{id:"api-2"},"API"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"    POST /api/debug_point/remove/{debug_point_name}\n")),(0,i.yg)("h3",{id:"query-parameters-1"},"Query Parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"debug_point_name"),"\nDebug point name. Mandatory parameter.\n")),(0,i.yg)("h3",{id:"request-body-2"},"Request body"),(0,i.yg)("p",null,"None"),(0,i.yg)("h3",{id:"response-2"},"Response"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0\n}\n')),(0,i.yg)("h3",{id:"examples-2"},"Examples"),(0,i.yg)("p",null,"Disable debug point ",(0,i.yg)("inlineCode",{parentName:"p"},"foo"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8030/api/debug_point/remove/foo"\n\n')),(0,i.yg)("h2",{id:"clear-debug-points"},"Clear Debug Points"),(0,i.yg)("h3",{id:"api-3"},"API"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"POST /api/debug_point/clear\n")),(0,i.yg)("h3",{id:"request-body-3"},"Request body"),(0,i.yg)("p",null,"None"),(0,i.yg)("h3",{id:"response-3"},"Response"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'{\n    msg: "OK",\n    code: 0\n}\n')),(0,i.yg)("h3",{id:"examples-3"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8030/api/debug_point/clear"\n')),(0,i.yg)("h2",{id:"debug-points-in-regression-test"},"Debug Points in Regression Test"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"In community's CI system, ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_debug_points")," configuration of FE and BE are true by default.")),(0,i.yg)("p",null,"The Regression test framework also provides methods to activate and deactivate a particular debug point, ",(0,i.yg)("br",null),"\nthey are declared as below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-groovy"},'// "name" is the debug point to activate, "params" is a list of key-value pairs passed to debug point\ndef enableDebugPointForAllFEs(String name, Map<String, String> params = null);\ndef enableDebugPointForAllBEs(String name, Map<String, String> params = null);\n// "name" is the debug point to deactivate\ndef disableDebugPointForAllFEs(String name);\ndef disableDebugPointForAllFEs(String name);\n')),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"enableDebugPointForAllFEs()")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"enableDebugPointForAllBEs()")," needs to be called before the test actions you want to generate error, ",(0,i.yg)("br",null),"\nand ",(0,i.yg)("inlineCode",{parentName:"p"},"disableDebugPointForAllFEs()")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"disableDebugPointForAllBEs()")," needs to be called afterward."),(0,i.yg)("h3",{id:"concurrent-issue"},"Concurrent Issue"),(0,i.yg)("p",null,"Enabled debug points affects FE or BE globally, which could cause other concurrent tests to fail unexpectedly in your pull request. ",(0,i.yg)("br",null),"\nTo avoid this, there's a convention that regression tests using debug points must be in directory regression-test/suites/fault_injection_p0, ",(0,i.yg)("br",null),'\nand their group name must be "nonConcurrent", as these regression tests will be executed serially by pull request workflow. '),(0,i.yg)("h3",{id:"examples-4"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-groovy"},'// .groovy file of the test case must be in regression-test/suites/fault_injection_p0\n// and the group name must be \'nonConcurrent\'\nsuite(\'debugpoint_action\', \'nonConcurrent\') {\n    try {\n        // Activate debug point named "PublishVersionDaemon.stop_publish" in all FE\n        // and pass parameter "timeout"\n        // "execute" and "timeout" are pre-existing parameters, usage is mentioned above\n        GetDebugPoint().enableDebugPointForAllFEs(\'PublishVersionDaemon.stop_publish\', [timeout:1])\n\n        // Activate debug point named "Tablet.build_tablet_report_info.version_miss" in all BE\n        // and pass parameter "tablet_id", "version_miss" and "timeout"\n        GetDebugPoint().enableDebugPointForAllBEs(\'Tablet.build_tablet_report_info.version_miss\',\n                                                  [tablet_id:\'12345\', version_miss:true, timeout:1])\n\n        // Test actions which will run into debug point and generate error\n        sql """CREATE TABLE tbl_1 (k1 INT, k2 INT)\n               DUPLICATE KEY (k1)\n               DISTRIBUTED BY HASH(k1)\n               BUCKETS 3\n               PROPERTIES ("replication_allocation" = "tag.location.default: 1");\n            """\n        sql "INSERT INTO tbl_1 VALUES (1, 10)"\n        sql "INSERT INTO tbl_1 VALUES (2, 20)"\n        order_qt_select_1_1 \'SELECT * FROM tbl_1\'\n\n    } finally {\n        // Deactivate debug points\n        GetDebugPoint().disableDebugPointForAllFEs(\'PublishVersionDaemon.stop_publish\')\n        GetDebugPoint().disableDebugPointForAllBEs(\'Tablet.build_tablet_report_info.version_miss\')\n    }\n}\n')))}g.isMDXComponent=!0}}]);