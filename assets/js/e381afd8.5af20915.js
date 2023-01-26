"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2387],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=l,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),r=a(86010),o=a(51048),i=a(33609),s=a(1943),d=a(72957);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:o,values:c,groupId:m,className:g}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,i.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[_,v]=(0,l.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:S}=(0,d.o5)();if(null!=m){const e=y[m];null!=e&&e!==_&&f.some((t=>t.value===e))&&v(e)}const C=e=>{const t=e.currentTarget,a=w.indexOf(t),n=f[a].value;n!==_&&(S(t),v(n),null!=m&&N(m,String(n)))},A=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},g)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>w.push(e),onKeyDown:A,onClick:C},o,{className:(0,r.Z)("tabs__item",u,o?.className,{"tabs__item--active":_===t})}),a??t)}))),t?(0,l.cloneElement)(k.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function m(e){const t=(0,o.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},38356:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=a(87462),l=(a(67294),a(3905)),r=a(34259),o=a(18679);const i={title:"Delta Lake",slug:"/generated/ingestion/sources/delta-lake",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/delta-lake.md"},s="Delta Lake",d={unversionedId:"docs/generated/ingestion/sources/delta-lake",id:"docs/generated/ingestion/sources/delta-lake",title:"Delta Lake",description:"Module delta-lake",source:"@site/genDocs/docs/generated/ingestion/sources/delta-lake.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/delta-lake",permalink:"/docs/generated/ingestion/sources/delta-lake",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/delta-lake.md",tags:[],version:"current",frontMatter:{title:"Delta Lake",slug:"/generated/ingestion/sources/delta-lake",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/delta-lake.md"},sidebar:"overviewSidebar",previous:{title:"dbt",permalink:"/docs/generated/ingestion/sources/dbt"},next:{title:"Demo Data",permalink:"/docs/generated/ingestion/sources/demo-data"}},p={},u=[{value:"Module <code>delta-lake</code>",id:"module-delta-lake",level:2},{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Usage Guide",id:"usage-guide",level:2},{value:"Delta Table on Local File System",id:"delta-table-on-local-file-system",level:3},{value:"Step 1",id:"step-1",level:4},{value:"Step 2",id:"step-2",level:4},{value:"Step 3",id:"step-3",level:4},{value:"Delta Table on S3",id:"delta-table-on-s3",level:3},{value:"Step 1",id:"step-1-1",level:4},{value:"Step 3",id:"step-3-1",level:4},{value:"Step 4",id:"step-4",level:4},{value:"Note",id:"note",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3},{value:"Questions",id:"questions",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"delta-lake"},"Delta Lake"),(0,l.kt)("h2",{id:"module-delta-lake"},"Module ",(0,l.kt)("inlineCode",{parentName:"h2"},"delta-lake")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"})),(0,l.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Capability"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extract Tags"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Can extract S3 object/bucket tags if enabled")))),(0,l.kt)("p",null,"This plugin extracts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Column types and schema associated with each delta table"),(0,l.kt)("li",{parentName:"ul"},"Custom properties: number_of_files, partition_columns, table_creation_time, location, version etc.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"If you are ingesting datasets from AWS S3, we recommend running the ingestion on a server in the same region to avoid high egress costs.")),(0,l.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,l.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[delta-lake]'\n")),(0,l.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: delta-lake\n  config:\n    env: "PROD"\n    platform_instance: "my-delta-lake"\n    base_path: "/path/to/data/folder"\n\nsink:\n  # sink configs\n')),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("details",{open:!0},(0,l.kt)("summary",null,"View All Configuration Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,l.kt)("td",{parentName:"tr",align:null},"PROD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"platform"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The platform that this source connects to"),(0,l.kt)("td",{parentName:"tr",align:null},"delta-lake")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"platform_instance"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of the platform that all assets produced by this recipe belong to"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base_path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to table (s3 or local file system). If path is not a delta table path then all subfolders will be scanned to detect and ingest delta tables."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relative_path"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"If set, delta-tables will be searched at location '<base_path>/<relative_path>' and URNs will be created using relative_path only."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version_history_lookback"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of previous version histories to be ingested. Defaults to 1. If set to -1 all version history will be ingested."),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"require_files"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether DeltaTable should track files. Consider setting this to ",(0,l.kt)("inlineCode",{parentName:"td"},"False")," for large delta tables, resulting in significant memory reduction for ingestion process.When set to ",(0,l.kt)("inlineCode",{parentName:"td"},"False"),", number_of_files in delta table can not be reported."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null},"regex patterns for tables to filter in ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.allow"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,l.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.deny"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.ignoreCase"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"S3 (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3.aws_config"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AwsConnectionConfig (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null},"AWS configuration"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3.aws_config.aws_access_key_id"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"AWS access key ID. Can be auto-detected, see ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html")," for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3.aws_config.aws_secret_access_key"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"AWS secret access key. Can be auto-detected, see ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html")," for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3.aws_config.aws_session_token"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"AWS session token. Can be auto-detected, see ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html")," for details."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3.aws_config.aws_role"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Generic dict"),(0,l.kt)("td",{parentName:"tr",align:null},"AWS roles to assume. If using the string format, the role ARN can be specified directly. If using the object format, the role can be specified in the RoleArn field and additional available arguments are documented at ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sts.html?highlight=assume_role#STS.Client.assume_role"},"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sts.html?highlight=assume_role#STS.Client.assume_role")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3.aws_config.aws_profile"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Named AWS profile to use. Only used if access key / secret are unset. If not set the default will be used"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3.aws_config.aws_region"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2753 (required if s3.aws_config is set)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"AWS region code."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3.aws_config.aws_endpoint_url"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3.aws_config.aws_proxy"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Dict","[str,string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3.use_s3_bucket_tags"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to create tags in datahub from the s3 bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3.use_s3_object_tags"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"# Whether or not to create tags in datahub from the s3 object"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))))),(0,l.kt)(o.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "DeltaLakeSourceConfig",\n  "description": "Any source that connects to a platform should inherit this class",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform": {\n      "title": "Platform",\n      "description": "The platform that this source connects to",\n      "default": "delta-lake",\n      "const": "delta-lake",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "base_path": {\n      "title": "Base Path",\n      "description": "Path to table (s3 or local file system). If path is not a delta table path then all subfolders will be scanned to detect and ingest delta tables.",\n      "type": "string"\n    },\n    "relative_path": {\n      "title": "Relative Path",\n      "description": "If set, delta-tables will be searched at location \'<base_path>/<relative_path>\' and URNs will be created using relative_path only.",\n      "type": "string"\n    },\n    "table_pattern": {\n      "title": "Table Pattern",\n      "description": "regex patterns for tables to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "version_history_lookback": {\n      "title": "Version History Lookback",\n      "description": "Number of previous version histories to be ingested. Defaults to 1. If set to -1 all version history will be ingested.",\n      "default": 1,\n      "type": "integer"\n    },\n    "require_files": {\n      "title": "Require Files",\n      "description": "Whether DeltaTable should track files. Consider setting this to `False` for large delta tables, resulting in significant memory reduction for ingestion process.When set to `False`, number_of_files in delta table can not be reported.",\n      "default": true,\n      "type": "boolean"\n    },\n    "s3": {\n      "$ref": "#/definitions/S3"\n    }\n  },\n  "required": [\n    "base_path"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "AwsAssumeRoleConfig": {\n      "title": "AwsAssumeRoleConfig",\n      "type": "object",\n      "properties": {\n        "RoleArn": {\n          "title": "Rolearn",\n          "description": "ARN of the role to assume.",\n          "type": "string"\n        },\n        "ExternalId": {\n          "title": "Externalid",\n          "description": "External ID to use when assuming the role.",\n          "type": "string"\n        }\n      },\n      "required": [\n        "RoleArn"\n      ]\n    },\n    "AwsConnectionConfig": {\n      "title": "AwsConnectionConfig",\n      "description": "Common AWS credentials config.\\n\\nCurrently used by:\\n    - Glue source\\n    - SageMaker source\\n    - dbt source",\n      "type": "object",\n      "properties": {\n        "aws_access_key_id": {\n          "title": "Aws Access Key Id",\n          "description": "AWS access key ID. Can be auto-detected, see https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html for details.",\n          "type": "string"\n        },\n        "aws_secret_access_key": {\n          "title": "Aws Secret Access Key",\n          "description": "AWS secret access key. Can be auto-detected, see https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html for details.",\n          "type": "string"\n        },\n        "aws_session_token": {\n          "title": "Aws Session Token",\n          "description": "AWS session token. Can be auto-detected, see https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html for details.",\n          "type": "string"\n        },\n        "aws_role": {\n          "title": "Aws Role",\n          "description": "AWS roles to assume. If using the string format, the role ARN can be specified directly. If using the object format, the role can be specified in the RoleArn field and additional available arguments are documented at https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sts.html?highlight=assume_role#STS.Client.assume_role",\n          "anyOf": [\n            {\n              "type": "string"\n            },\n            {\n              "type": "array",\n              "items": {\n                "anyOf": [\n                  {\n                    "type": "string"\n                  },\n                  {\n                    "$ref": "#/definitions/AwsAssumeRoleConfig"\n                  }\n                ]\n              }\n            }\n          ]\n        },\n        "aws_profile": {\n          "title": "Aws Profile",\n          "description": "Named AWS profile to use. Only used if access key / secret are unset. If not set the default will be used",\n          "type": "string"\n        },\n        "aws_region": {\n          "title": "Aws Region",\n          "description": "AWS region code.",\n          "type": "string"\n        },\n        "aws_endpoint_url": {\n          "title": "Aws Endpoint Url",\n          "description": "Autodetected. See https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html",\n          "type": "string"\n        },\n        "aws_proxy": {\n          "title": "Aws Proxy",\n          "description": "Autodetected. See https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html",\n          "type": "object",\n          "additionalProperties": {\n            "type": "string"\n          }\n        }\n      },\n      "required": [\n        "aws_region"\n      ],\n      "additionalProperties": false\n    },\n    "S3": {\n      "title": "S3",\n      "type": "object",\n      "properties": {\n        "aws_config": {\n          "title": "Aws Config",\n          "description": "AWS configuration",\n          "allOf": [\n            {\n              "$ref": "#/definitions/AwsConnectionConfig"\n            }\n          ]\n        },\n        "use_s3_bucket_tags": {\n          "title": "Use S3 Bucket Tags",\n          "description": "Whether or not to create tags in datahub from the s3 bucket",\n          "default": false,\n          "type": "boolean"\n        },\n        "use_s3_object_tags": {\n          "title": "Use S3 Object Tags",\n          "description": "# Whether or not to create tags in datahub from the s3 object",\n          "default": false,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,l.kt)("h2",{id:"usage-guide"},"Usage Guide"),(0,l.kt)("p",null,"If you are new to ",(0,l.kt)("a",{parentName:"p",href:"https://delta.io/"},"Delta Lake")," and want to test out a simple integration with Delta Lake and DataHub, you can follow this guide. "),(0,l.kt)("h3",{id:"delta-table-on-local-file-system"},"Delta Table on Local File System"),(0,l.kt)("h4",{id:"step-1"},"Step 1"),(0,l.kt)("p",null,"Create a delta table using the sample PySpark code below if you don't have a delta table you can point to."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import uuid\nimport random\nfrom pyspark.sql import SparkSession\nfrom delta.tables import DeltaTable\n\ndef generate_data():\n    return [(y, m, d, str(uuid.uuid4()), str(random.randrange(10000) % 26 + 65) * 3, random.random()*10000)\n    for d in range(1, 29)\n    for m in range(1, 13)\n    for y in range(2000, 2021)]\n\njar_packages = ["org.apache.hadoop:hadoop-aws:3.2.3", "io.delta:delta-core_2.12:1.2.1"]\nspark = SparkSession.builder \\\n    .appName("quickstart") \\\n    .master("local[*]") \\\n    .config("spark.jars.packages", ",".join(jar_packages)) \\\n    .config("spark.sql.extensions", "io.delta.sql.DeltaSparkSessionExtension") \\\n    .config("spark.sql.catalog.spark_catalog", "org.apache.spark.sql.delta.catalog.DeltaCatalog") \\\n    .getOrCreate()\n\ntable_path = "quickstart/my-table"\ncolumns = ["year", "month", "day", "sale_id", "customer", "total_cost"]\nspark.sparkContext.parallelize(generate_data()).toDF(columns).repartition(1).write.format("delta").save(table_path)\n\ndf = spark.read.format("delta").load(table_path)\ndf.show()\n\n')),(0,l.kt)("h4",{id:"step-2"},"Step 2"),(0,l.kt)("p",null,"Create a datahub ingestion yaml file (delta.dhub.yaml) to ingest metadata from the delta table you just created."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "delta-lake"\n  config:\n    base_path:  "quickstart/my-table"\n    \nsink:\n  type: "datahub-rest"\n  config:\n    server: "http://localhost:8080"\n')),(0,l.kt)("p",null,"Note: Make sure you run the Spark code as well as recipe from same folder otherwise use absolute paths."),(0,l.kt)("h4",{id:"step-3"},"Step 3"),(0,l.kt)("p",null,"Execute the ingestion recipe:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"datahub ingest -c delta.dhub.yaml\n")),(0,l.kt)("h3",{id:"delta-table-on-s3"},"Delta Table on S3"),(0,l.kt)("h4",{id:"step-1-1"},"Step 1"),(0,l.kt)("p",null,"Set up your AWS credentials by creating an AWS credentials config file; typically in '$HOME/.aws/credentials'."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[my-creds]\naws_access_key_id: ######\naws_secret_access_key: ######\n")),(0,l.kt)("p",null,"Step 2: Create a Delta Table using the PySpark sample code below unless you already have Delta Tables on your S3. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql import SparkSession\nfrom delta.tables import DeltaTable\nfrom configparser import ConfigParser\nimport uuid\nimport random\ndef generate_data():\n    return [(y, m, d, str(uuid.uuid4()), str(random.randrange(10000) % 26 + 65) * 3, random.random()*10000)\n    for d in range(1, 29)\n    for m in range(1, 13)\n    for y in range(2000, 2021)]\n\njar_packages = ["org.apache.hadoop:hadoop-aws:3.2.3", "io.delta:delta-core_2.12:1.2.1"]\nspark = SparkSession.builder \\\n    .appName("quickstart") \\\n    .master("local[*]") \\\n    .config("spark.jars.packages", ",".join(jar_packages)) \\\n    .config("spark.sql.extensions", "io.delta.sql.DeltaSparkSessionExtension") \\\n    .config("spark.sql.catalog.spark_catalog", "org.apache.spark.sql.delta.catalog.DeltaCatalog") \\\n    .getOrCreate()\n\n\nconfig_object = ConfigParser()\nconfig_object.read("$HOME/.aws/credentials")\nprofile_info = config_object["my-creds"]\naccess_id = profile_info["aws_access_key_id"]\naccess_key = profile_info["aws_secret_access_key"]\n\nhadoop_conf = spark._jsc.hadoopConfiguration()\nhadoop_conf.set("fs.s3a.impl", "org.apache.hadoop.fs.s3a.S3AFileSystem")\nhadoop_conf.set("fs.s3a.aws.credentials.provider", "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider")\nhadoop_conf.set("fs.s3a.access.key", access_id)\nhadoop_conf.set("fs.s3a.secret.key", access_key)\n\ntable_path = "s3a://my-bucket/my-folder/sales-table"\ncolumns = ["year", "month", "day", "sale_id", "customer", "total_cost"]\nspark.sparkContext.parallelize(generate_data()).toDF(columns).repartition(1).write.format("delta").save(table_path)\ndf = spark.read.format("delta").load(table_path)\ndf.show()\n\n')),(0,l.kt)("h4",{id:"step-3-1"},"Step 3"),(0,l.kt)("p",null,"Create a datahub ingestion yaml file (delta.s3.dhub.yaml) to ingest metadata from the delta table you just created."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: "delta-lake"\n  config:\n    base_path:  "s3://my-bucket/my-folder/sales-table"\n    s3:\n      aws_config:\n        aws_access_key_id: <<Access key>>\n        aws_secret_access_key: <<secret key>>\n    \nsink:\n  type: "datahub-rest"\n  config:\n    server: "http://localhost:8080"\n')),(0,l.kt)("h4",{id:"step-4"},"Step 4"),(0,l.kt)("p",null,"Execute the ingestion recipe:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"datahub ingest -c delta.s3.dhub.yaml\n")),(0,l.kt)("h3",{id:"note"},"Note"),(0,l.kt)("p",null,"The above recipes are minimal recipes. Please refer to ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"Config Details")," section for the full configuration."),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.delta_lake.source.DeltaLakeSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/delta_lake/source.py"},"GitHub"))),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for Delta Lake, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}m.isMDXComponent=!0}}]);