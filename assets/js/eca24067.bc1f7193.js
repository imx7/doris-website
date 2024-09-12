"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[707771],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,y=u["".concat(o,".").concat(d)]||u[d]||g[d]||l;return n?a.createElement(y,s(s({ref:t},p),{},{components:n})):a.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},642586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"CCR (Cross Cluster Replication)",language:"en"},s=void 0,i={unversionedId:"admin-manual/data-admin/ccr",id:"admin-manual/data-admin/ccr",title:"CCR (Cross Cluster Replication)",description:"\x3c!--",source:"@site/docs/admin-manual/data-admin/ccr.md",sourceDirName:"admin-manual/data-admin",slug:"/admin-manual/data-admin/ccr",permalink:"/docs/dev/admin-manual/data-admin/ccr",draft:!1,tags:[],version:"current",frontMatter:{title:"CCR (Cross Cluster Replication)",language:"en"},sidebar:"docs",previous:{title:"Data Restore",permalink:"/docs/dev/admin-manual/data-admin/restore"},next:{title:"Recover from Recycle Bin",permalink:"/docs/dev/admin-manual/data-admin/recyclebin"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Design",id:"design",level:2},{value:"Concepts",id:"concepts",level:3},{value:"Architecture description",id:"architecture-description",level:3},{value:"Usage",id:"usage",level:3},{value:"Operation manual for syncer",id:"operation-manual-for-syncer",level:2},{value:"Start syncer",id:"start-syncer",level:3},{value:"Stop syncer",id:"stop-syncer",level:3},{value:"Syncer operations",id:"syncer-operations",level:3},{value:"Open binlog for all tables in the database",id:"open-binlog-for-all-tables-in-the-database",level:3},{value:"High availability of syncer",id:"high-availability-of-syncer",level:2},{value:"Privilege requirements",id:"privilege-requirements",level:3},{value:"Usage restrictions",id:"usage-restrictions",level:2},{value:"Network constraints",id:"network-constraints",level:3},{value:"ThriftPool constraints",id:"thriftpool-constraints",level:3},{value:"Version requirements",id:"version-requirements",level:3},{value:"Unsupported operations",id:"unsupported-operations",level:3},{value:"Feature",id:"feature",level:2},{value:"Rate limit",id:"rate-limit",level:3},{value:"IS_BEING_SYNCED",id:"is_being_synced",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Note",id:"note",level:3}],p={toc:c},u="wrapper";function g(e){let{components:t,...l}=e;return(0,r.yg)(u,(0,a.A)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"cross-cluster-replication-ccr"},"Cross Cluster Replication (CCR)"),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"Cross Cluster Replication (CCR) enables the synchronization of data changes from a source cluster to a target cluster at the database/table level. This feature can be used to ensure data availability for online services, isolate offline and online workloads, and build multiple data centers across various sites."),(0,r.yg)("p",null,"CCR is applicable to the following scenarios:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Disaster recovery: This involves backing up enterprise data to another cluster and data center. In the event of a sudden incident causing business interruption or data loss, companies can recover data from the backup or quickly switch to the backup cluster. Disaster recovery is typically a must-have feature in use cases with high SLA requirements, such as those in finance, healthcare, and e-commerce."),(0,r.yg)("li",{parentName:"ul"},"Read/write separation: This is to isolate querying and writing operations to reduce their mutual impact and improve resource utilization. For example, in cases of high writing pressure or high concurrency, read/write separation can distribute read and write operations to read-only and write-only database instances in various regions. This helps ensure high database performance and stability."),(0,r.yg)("li",{parentName:"ul"},"Data transfer between headquarters and branch offices: In order to have unified data control and analysis within a corporation, the headquarters usually requires timely data synchronization from branch offices located in different regions. This avoids management confusion and wrong decision-making based on inconsistent data."),(0,r.yg)("li",{parentName:"ul"},"Isolated upgrades: During system cluster upgrades, there might be a need to roll back to a previous version. Many traditional upgrade methods do not allow rolling back due to incompatible metadata. CCR in Doris can address this issue by building a standby cluster for upgrade and conducting dual-running verification. Users can ungrade the clusters one by one. CCR is not dependent on specific versions, making version rollback feasible.")),(0,r.yg)("h2",{id:"design"},"Design"),(0,r.yg)("h3",{id:"concepts"},"Concepts"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Source cluster: the cluster where business data is written and originates from, requiring Doris version 2.0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Target cluster: the destination cluster for cross cluster replication, requiring version 2.0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Binlog: the change log of the source cluster, including schema and data changes")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Syncer: a lightweight process"))),(0,r.yg)("h3",{id:"architecture-description"},"Architecture description"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"ccr-architecture-description",src:n(815225).A,width:"3488",height:"1064"})),(0,r.yg)("p",null,"CCR relies on a lightweight process called syncer. Syncers retrieve binlogs from the source cluster, directly apply the metadata to the target cluster, and notify the target cluster to pull data from the source cluster. CCR allows both full and incremental data migration."),(0,r.yg)("h3",{id:"usage"},"Usage"),(0,r.yg)("p",null,"The usage of CCR is straightforward. Simply start the syncer service and send a command, and the syncers will take care of the rest."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Deploy the source Doris cluster."),(0,r.yg)("li",{parentName:"ol"},"Deploy the target Doris cluster."),(0,r.yg)("li",{parentName:"ol"},"Both the source and target clusters need to enable binlog. Configure the following information in the fe.conf and be.conf files of the source and target clusters:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"enable_feature_binlog=true\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Deploy syncers")),(0,r.yg)("p",null,"\u200bBuild CCR syncer"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/selectdb/ccr-syncer\ncd ccr-syncer   \nbash build.sh <-j NUM_OF_THREAD> <--output SYNCER_OUTPUT_DIR>\ncd SYNCER_OUTPUT_DIR# Contact the Doris community for a free CCR binary package\n")),(0,r.yg)("p",null,"Start and stop syncer"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# Start\ncd bin && sh start_syncer.sh --daemon\n   \n# Stop\nsh stop_syncer.sh\n")),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Enable binlog in the source cluster.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'-- If you want to synchronize the entire database, you can execute the following script:\nvim shell/enable_db_binlog.sh\nModify host, port, user, password, and db in the source cluster\nOr ./enable_db_binlog.sh --host $host --port $port --user $user --password $password --db $db\n\n-- If you want to synchronize a single table, you can execute the following script and enable binlog for the target table:\nALTER TABLE enable_binlog SET ("binlog.enable" = "true");\n')),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"Launch a synchronization task to the syncer")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "ccr_test",\n    "src": {\n      "host": "localhost",\n      "port": "9030",\n      "thrift_port": "9020",\n      "user": "root",\n      "password": "",\n      "database": "your_db_name",\n      "table": "your_table_name"\n    },\n    "dest": {\n      "host": "localhost",\n      "port": "9030",\n      "thrift_port": "9020",\n      "user": "root",\n      "password": "",\n      "database": "your_db_name",\n      "table": "your_table_name"\n    }\n}\' http://127.0.0.1:9190/create_ccr\n')),(0,r.yg)("p",null,"Parameter description:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"name: name of the CCR synchronization task, should be unique\nhost, port: host and mysql(jdbc) port for the master FE for the corresponding cluster\nuser, password: the credentials used by the syncer to initiate transactions, fetch data, etc.\nIf it is synchronization at the database level, specify your_db_name and leave your_table_name empty\nIf it is synchronization at the table level, specify both your_db_name and your_table_name\nThe synchronization task name can only be used once.\n")),(0,r.yg)("h2",{id:"operation-manual-for-syncer"},"Operation manual for syncer"),(0,r.yg)("h3",{id:"start-syncer"},"Start syncer"),(0,r.yg)("p",null,"Start syncer according to the configurations and save a pid file in the default or specified path. The name of the pid file should follow ",(0,r.yg)("inlineCode",{parentName:"p"},"host_port.pid"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Output file structure")),(0,r.yg)("p",null,"The file structure can be seen under the output path after compilation:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"output_dir\n    bin\n        ccr_syncer\n        enable_db_binlog.sh\n        start_syncer.sh\n        stop_syncer.sh\n    db\n        [ccr.db] # Generated after running with the default configurations.\n    log\n        [ccr_syncer.log] # Generated after running with the default configurations.\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"The start_syncer.sh in the following text refers to the start_syncer.sh under its corresponding path.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Start options")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--daemon")," "),(0,r.yg)("p",null,"Run syncer in the background, set to false by default."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"bash bin/start_syncer.sh --daemon\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--db_type")," "),(0,r.yg)("p",null,"Syncer can currently use two databases to store its metadata, ",(0,r.yg)("inlineCode",{parentName:"p"},"sqlite3 "),"(for local storage) and ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql "),"(for local or remote storage)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"bash bin/start_syncer.sh --db_type mysql\n")),(0,r.yg)("p",null,"The default value is sqlite3."),(0,r.yg)("p",null,"When using MySQL to store metadata, syncer will use ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE IF NOT EXISTS "),"to create a database called ",(0,r.yg)("inlineCode",{parentName:"p"},"ccr"),", where the metadata table related to CCR will be saved."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--db_dir")," "),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"This option only works when db uses")," ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"sqlite3"),"**"),".**"),(0,r.yg)("p",null,"It allows you to specify the name and path of the db file generated by sqlite3."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"bash bin/start_syncer.sh --db_dir /path/to/ccr.db\n")),(0,r.yg)("p",null,"The default path is ",(0,r.yg)("inlineCode",{parentName:"p"},"SYNCER_OUTPUT_DIR/db")," and the default file name is ",(0,r.yg)("inlineCode",{parentName:"p"},"ccr.db"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--db_host & db_port & db_user & db_password")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"This option only works when db uses")," ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"mysql"),"**"),".**"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'bash bin/start_syncer.sh --db_host 127.0.0.1 --db_port 3306 --db_user root --db_password "qwe123456"\n')),(0,r.yg)("p",null,"The default values of db_host and db_port are shown in the example. The default values of db_user and db_password are empty."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--log_dir")," "),(0,r.yg)("p",null,"Output path of the logs: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"bash bin/start_syncer.sh --log_dir /path/to/ccr_syncer.log\n")),(0,r.yg)("p",null,"The default path is",(0,r.yg)("inlineCode",{parentName:"p"},"SYNCER_OUTPUT_DIR/log")," and the default file name is ",(0,r.yg)("inlineCode",{parentName:"p"},"ccr_syncer.log"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--log_level")," "),(0,r.yg)("p",null,"Used to specify the output level of syncer logs."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"bash bin/start_syncer.sh --log_level info\n")),(0,r.yg)("p",null,"The format of the log is as follows, where the hook will only be printed when ",(0,r.yg)("inlineCode",{parentName:"p"},"log_level > info "),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"#        time         level        msg                  hooks\n[2023-07-18 16:30:18] TRACE This is trace type. ccrName=xxx line=xxx\n[2023-07-18 16:30:18] DEBUG This is debug type. ccrName=xxx line=xxx\n[2023-07-18 16:30:18]  INFO This is info type. ccrName=xxx line=xxx\n[2023-07-18 16:30:18]  WARN This is warn type. ccrName=xxx line=xxx\n[2023-07-18 16:30:18] ERROR This is error type. ccrName=xxx line=xxx\n[2023-07-18 16:30:18] FATAL This is fatal type. ccrName=xxx line=xxx\n")),(0,r.yg)("p",null,"Under --daemon, the default value of log_level is ",(0,r.yg)("inlineCode",{parentName:"p"},"info"),"."),(0,r.yg)("p",null,"When running in the foreground, log_level defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"trace"),", and logs are saved to log_dir using the tee command."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--host && --port")," "),(0,r.yg)("p",null,"Used to specify the host and port of syncer, where host only plays the role of distinguishing itself in the cluster, which can be understood as the name of syncer, and the name of syncer in the cluster is ",(0,r.yg)("inlineCode",{parentName:"p"},"host: port"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"bash bin/start_syncer.sh --host 127.0.0.1 --port 9190\n")),(0,r.yg)("p",null,"The default value of host is 127.0.0.1, and the default value of port is 9190."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--pid_dir")," "),(0,r.yg)("p",null,"Used to specify the storage path of the pid file"),(0,r.yg)("p",null,"The pid file is the credentials for closing the syncer. It is used in the stop_syncer.sh script. It saves the corresponding syncer process number. In order to facilitate management of syncer, you can specify the storage path of the pid file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"bash bin/start_syncer.sh --pid_dir /path/to/pids\n")),(0,r.yg)("p",null,"The default value is ",(0,r.yg)("inlineCode",{parentName:"p"},"SYNCER_OUTPUT_DIR/bin"),"."),(0,r.yg)("h3",{id:"stop-syncer"},"Stop syncer"),(0,r.yg)("p",null,"Stop the syncer according to the process number in the pid file under the default or specified path. The name of the pid file should follow ",(0,r.yg)("inlineCode",{parentName:"p"},"host_port.pid"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Output file structure")),(0,r.yg)("p",null,"The file structure can be seen under the output path after compilation:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"output_dir\n    bin\n        ccr_syncer\n        enable_db_binlog.sh\n        start_syncer.sh\n        stop_syncer.sh\n    db\n        [ccr.db] # Generated after running with the default configurations.\n    log\n        [ccr_syncer.log] # Generated after running with the default configurations.\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"The start_syncer.sh in the following text refers to the start_syncer.sh under its corresponding path.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Stop options")),(0,r.yg)("p",null,"Syncers can be stopped in three ways: "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Stop a single syncer in the directory")),(0,r.yg)("p",null,"Specify the host and port of the syncer to be stopped. Be sure to keep it consistent with the host specified when start_syncer"),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Batch stop the specified syncers in the directory")),(0,r.yg)("p",null,"Specify the names of the pid files to be stopped, wrap the names in ",(0,r.yg)("inlineCode",{parentName:"p"},'""')," and separate them with spaces."),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Stop all syncers in the directory")),(0,r.yg)("p",null,"Follow the default configurations."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--pid_dir")," "),(0,r.yg)("p",null,"Specify the directory where the pid file is located. The above three stopping methods all depend on the directory where the pid file is located for execution."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bash bin/stop_syncer.sh --pid_dir /path/to/pids\n")),(0,r.yg)("p",null,"The effect of the above example is to close the syncers corresponding to all pid files under ",(0,r.yg)("inlineCode",{parentName:"p"},"/path/to/pids "),"( ",(0,r.yg)("strong",{parentName:"p"},"method 3")," ). ",(0,r.yg)("inlineCode",{parentName:"p"},"-- pid_dir "),"can be used in combination with the above three syncer stopping methods."),(0,r.yg)("p",null,"The default value is ",(0,r.yg)("inlineCode",{parentName:"p"},"SYNCER_OUTPUT_DIR/bin"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--host && --port")," "),(0,r.yg)("p",null,"Stop the syncer corresponding to host: port in the pid_dir path."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bash bin/stop_syncer.sh --host 127.0.0.1 --port 9190\n")),(0,r.yg)("p",null,"The default value of host is 127.0.0.1, and the default value of port is empty. That is, specifying the host alone will degrade ",(0,r.yg)("strong",{parentName:"p"},"method 1")," to ",(0,r.yg)("strong",{parentName:"p"},"method 3"),". ",(0,r.yg)("strong",{parentName:"p"},"Method 1")," will only take effect when neither the host nor the port is empty."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"--files")," "),(0,r.yg)("p",null,"Stop the syncer corresponding to the specified pid file name in the pid_dir path."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'bash bin/stop_syncer.sh --files "127.0.0.1_9190.pid 127.0.0.1_9191.pid"\n')),(0,r.yg)("p",null,"The file names should be wrapped in ",(0,r.yg)("inlineCode",{parentName:"p"},'" "')," and separated with spaces."),(0,r.yg)("h3",{id:"syncer-operations"},"Syncer operations"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Template for requests")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" -d {json_body} http://ccr_syncer_host:ccr_syncer_port/operator\n')),(0,r.yg)("p",null,"json_body: send operation information in JSON format"),(0,r.yg)("p",null,"operator: different operations for syncer"),(0,r.yg)("p",null,'The interface returns JSON. If successful, the "success" field will be true. Conversely, if there is an error, it will be false, and then there will be an ',(0,r.yg)("inlineCode",{parentName:"p"},"ErrMsgs")," field."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-JSON"},'{"success":true}\n\nor\n\n{"success":false,"error_msg":"job ccr_test not exist"}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Operators")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"create_ccr ")),(0,r.yg)("p",null,"Create CCR tasks"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "ccr_test",\n    "src": {\n    "host": "localhost",\n    "port": "9030",\n    "thrift_port": "9020",\n    "user": "root",\n    "password": "",\n    "database": "demo",\n    "table": "example_tbl"\n    },\n    "dest": {\n    "host": "localhost",\n    "port": "9030",\n    "thrift_port": "9020",\n    "user": "root",\n    "password": "",\n    "database": "ccrt",\n    "table": "copy"\n    }\n}\' http://127.0.0.1:9190/create_ccr\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"name: the name of the CCR synchronization task, should be unique")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"host, port: correspond to the host and mysql (jdbc) port of the cluster's master")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"thrift_port: corresponds to the rpc_port of the FE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"user, password: the credentials used by the syncer to initiate transactions, fetch data, etc.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"database, table:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"If it is a database-level synchronization, fill in the database name and leave the table name empty."),(0,r.yg)("li",{parentName:"ul"},"If it is a table-level synchronization, specify both the database name and the table name."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"get_lag"))),(0,r.yg)("p",null,"View the synchronization progress."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "job_name"\n}\' http://ccr_syncer_host:ccr_syncer_port/get_lag\n')),(0,r.yg)("p",null,"The job_name is the name specified when create_ccr."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"pause")),(0,r.yg)("p",null,"Pause synchronization task."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "job_name"\n}\' http://ccr_syncer_host:ccr_syncer_port/pause \n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"resume")),(0,r.yg)("p",null,"Resume synchronization task."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "job_name"\n}\' http://ccr_syncer_host:ccr_syncer_port/resume\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"delete")),(0,r.yg)("p",null,"Delete synchronization task."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "job_name"\n}\' http://ccr_syncer_host:ccr_syncer_port/delete\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"version")),(0,r.yg)("p",null,"View version information."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl http://ccr_syncer_host:ccr_syncer_port/version\n\n# > return\n{"version": "2.0.1"}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"job status")),(0,r.yg)("p",null,"View job status."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "job_name"\n}\' http://ccr_syncer_host:ccr_syncer_port/job_status\n\n{\n  "success": true,\n  "status": {\n    "name": "ccr_db_table_alias",\n    "state": "running",\n    "progress_state": "TableIncrementalSync"\n  }\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"desync job")),(0,r.yg)("p",null,"No sync. Users can swap the source and target clusters."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "job_name"\n}\' http://ccr_syncer_host:ccr_syncer_port/desync\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"list_jobs")),(0,r.yg)("p",null,"List all created tasks."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl http://ccr_syncer_host:ccr_syncer_port/list_jobs\n\n{"success":true,"jobs":["ccr_db_table_alias"]}\n')),(0,r.yg)("h3",{id:"open-binlog-for-all-tables-in-the-database"},"Open binlog for all tables in the database"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Output file structure")),(0,r.yg)("p",null,"The file structure can be seen under the output path after compilation:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"output_dir\n    bin\n        ccr_syncer\n        enable_db_binlog.sh\n        start_syncer.sh\n        stop_syncer.sh\n    db\n        [ccr.db] # Generated after running with the default configurations.\n    log\n        [ccr_syncer.log] # Generated after running with the default configurations.\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"The start_syncer.sh in the following text refers to the start_syncer.sh under its corresponding path.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Usage")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bash bin/enable_db_binlog.sh -h host -p port -u user -P password -d db\n")),(0,r.yg)("h2",{id:"high-availability-of-syncer"},"High availability of syncer"),(0,r.yg)("p",null,"The high availability of syncers relies on MySQL. If MySQL is used as the backend storage, the syncer can discover other syncers. If one syncer crashes, the others will take over its tasks."),(0,r.yg)("h3",{id:"privilege-requirements"},"Privilege requirements"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"select_priv"),": read-only privileges for databases and tables"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"load_priv"),": write privileges for databases and tables, including load, insert, delete, etc."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"alter_priv"),": privilege to modify databases and tables, including renaming databases/tables, adding/deleting/changing columns, adding/deleting partitions, etc."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"create_priv"),": privilege to create databases, tables, and views"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"drop_priv"),": privilege to drop databases, tables, and views")),(0,r.yg)("p",null,"Admin privileges are required (We are planning on removing this in future versions). This is used to check the ",(0,r.yg)("inlineCode",{parentName:"p"},"enable binlog config"),"."),(0,r.yg)("h2",{id:"usage-restrictions"},"Usage restrictions"),(0,r.yg)("h3",{id:"network-constraints"},"Network constraints"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Syncer needs to have connectivity to both the upstream and downstream FEs and BEs."),(0,r.yg)("li",{parentName:"ul"},"The downstream BE should have connectivity to the upstream BE."),(0,r.yg)("li",{parentName:"ul"},"The external IP and Doris internal IP should be the same. In other words, the IP address visible in the output of ",(0,r.yg)("inlineCode",{parentName:"li"},"show frontends/backends")," should be the same IP that can be directly connected to. It should not involve IP forwarding or NAT for direct connections.")),(0,r.yg)("h3",{id:"thriftpool-constraints"},"ThriftPool constraints"),(0,r.yg)("p",null,"It is recommended to increase the size of the Thrift thread pool to a number greater than the number of buckets involved in a single commit operation."),(0,r.yg)("h3",{id:"version-requirements"},"Version requirements"),(0,r.yg)("p",null,"Minimum required version: V2.0.3"),(0,r.yg)("h3",{id:"unsupported-operations"},"Unsupported operations"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Rename table"),(0,r.yg)("li",{parentName:"ul"},"Operations such as table drop-recovery"),(0,r.yg)("li",{parentName:"ul"},"Operations related to rename table, replace partition"),(0,r.yg)("li",{parentName:"ul"},"Concurrent backup/restore within the same database")),(0,r.yg)("h2",{id:"feature"},"Feature"),(0,r.yg)("h3",{id:"rate-limit"},"Rate limit"),(0,r.yg)("p",null,"BE-side configuration parameter"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"download_binlog_rate_limit_kbs=1024 # This configuration limits the size to 1MB. It applies to all binlogs, including local snapshots, in a single BE.\n")),(0,r.yg)("h2",{id:"is_being_synced"},"IS_BEING_SYNCED"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},'Doris v2.0 "is_being_synced" = "true" ')),(0,r.yg)("p",null,"During data synchronization using CCR, replica tables (referred to as target tables) are created in the target cluster for the tables within the synchronization scope of the source cluster (referred to as source tables). However, certain functionalities and attributes need to be disabled or cleared when creating replica tables to ensure the correctness of the synchronization process. For example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The source tables may contain information that is not synchronized to the target cluster, such as ",(0,r.yg)("inlineCode",{parentName:"li"},"storage_policy"),", which may cause the creation of the target table to fail or result in abnormal behavior."),(0,r.yg)("li",{parentName:"ul"},"The source tables may have dynamic functionalities, such as dynamic partitioning, which can lead to uncontrolled behavior in the target table and result in inconsistent partitions.")),(0,r.yg)("p",null,"The attributes that need to be cleared during replication are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"storage_policy")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"colocate_with"))),(0,r.yg)("p",null,"The functionalities that need to be disabled during synchronization are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Automatic bucketing"),(0,r.yg)("li",{parentName:"ul"},"Dynamic partitioning")),(0,r.yg)("h3",{id:"implementation"},"Implementation"),(0,r.yg)("p",null,"When creating the target table, the syncer controls the addition or deletion of the ",(0,r.yg)("inlineCode",{parentName:"p"},"is_being_synced")," property. In CCR, there are two approaches to creating a target table:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"During table synchronization, the syncer performs a full copy of the source table using backup/restore to obtain the target table."),(0,r.yg)("li",{parentName:"ol"},"During database synchronization, for existing tables, the syncer also uses backup/restore to obtain the target table. For incremental tables, the syncer creates the target table using the CreateTableRecord binlog.")),(0,r.yg)("p",null,"Therefore, there are two entry points for inserting the ",(0,r.yg)("inlineCode",{parentName:"p"},"is_being_synced")," property: the restore process during full synchronization and the getDdlStmt during incremental synchronization."),(0,r.yg)("p",null,"During the restoration process of full synchronization, the syncer initiates a restore operation of the snapshot from the source cluster via RPC. During this process, the ",(0,r.yg)("inlineCode",{parentName:"p"},"is_being_synced")," property is added to the RestoreStmt and takes effect in the final restoreJob, executing the relevant logic for ",(0,r.yg)("inlineCode",{parentName:"p"},"is_being_synced"),"."),(0,r.yg)("p",null,"During incremental synchronization, add the ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean getDdlForSync")," parameter to the getDdlStmt method to differentiate whether it is a controlled transformation to the target table DDL, and execute the relevant logic for isBeingSynced during the creation of the target table."),(0,r.yg)("p",null,"Regarding the disabling of the functionalities mentioned above:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Automatic bucketing: Automatic bucketing is enabled when creating a table. It calculates the appropriate number of buckets. This may result in a mismatch in the number of buckets between the source and target tables. Therefore, during synchronization, obtain the number of buckets from the source table, as well as the information about whether the source table is an automatic bucketing table in order to restore the functionality after synchronization. The current recommended approach is to default the autobucket attribute to false when retrieving distribution information. During table restoration, check the ",(0,r.yg)("inlineCode",{parentName:"li"},"_auto_bucket")," attribute to find out if the source table is an automatic bucketing table. If it is, set the target table's autobucket field to true to bypass the calculation of bucket numbers and directly apply the number of buckets from the source table to the target table."),(0,r.yg)("li",{parentName:"ul"},"Dynamic partitioning: This is implemented by adding ",(0,r.yg)("inlineCode",{parentName:"li"},"olapTable.isBeingSynced()")," to the condition for executing add/drop partition operations. This ensures that the target table does not perform periodic add/drop partition operations during synchronization.")),(0,r.yg)("h3",{id:"note"},"Note"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"is_being_synced")," property should be fully controlled by the syncer, and users should not modify this property manually unless there are exceptional circumstances."))}g.isMDXComponent=!0},815225:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/ccr-architecture-description-555f71e6eddcf0a744f55c0e0b12eb4a.png"}}]);