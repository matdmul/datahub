"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9944],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},89334:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"Using Airflow",slug:"/metadata-ingestion/schedule_docs/airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/airflow.md"},o="Using Airflow",l={unversionedId:"metadata-ingestion/schedule_docs/airflow",id:"metadata-ingestion/schedule_docs/airflow",title:"Using Airflow",description:"If you are using Apache Airflow for your scheduling then you might want to also use it for scheduling your ingestion recipes. For any Airflow specific questions you can go through Airflow docs for more details.",source:"@site/genDocs/metadata-ingestion/schedule_docs/airflow.md",sourceDirName:"metadata-ingestion/schedule_docs",slug:"/metadata-ingestion/schedule_docs/airflow",permalink:"/docs/metadata-ingestion/schedule_docs/airflow",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/airflow.md",tags:[],version:"current",frontMatter:{title:"Using Airflow",slug:"/metadata-ingestion/schedule_docs/airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/airflow.md"},sidebar:"overviewSidebar",previous:{title:"Using Cron",permalink:"/docs/metadata-ingestion/schedule_docs/cron"},next:{title:"Using Kubernetes",permalink:"/docs/metadata-ingestion/schedule_docs/kubernetes"}},s={},c=[],u={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-airflow"},"Using Airflow"),(0,n.kt)("p",null,"If you are using Apache Airflow for your scheduling then you might want to also use it for scheduling your ingestion recipes. For any Airflow specific questions you can go through ",(0,n.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/"},"Airflow docs")," for more details."),(0,n.kt)("p",null,"To schedule your recipe through Airflow you can follow these steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a recipe file e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"recipe.yml")),(0,n.kt)("li",{parentName:"ul"},"Ensure the receipe file is in a folder accessible to your airflow workers. You can either specify absolute path on the machines where Airflow is installed or a path relative to ",(0,n.kt)("inlineCode",{parentName:"li"},"AIRFLOW_HOME"),"."),(0,n.kt)("li",{parentName:"ul"},"Ensure ",(0,n.kt)("a",{parentName:"li",href:"/docs/cli"},"DataHub CLI")," is installed in your airflow environment"),(0,n.kt)("li",{parentName:"ul"},"Create a sample DAG file like ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/generic_recipe_sample_dag.py"},(0,n.kt)("inlineCode",{parentName:"a"},"generic_recipe_sample_dag.py")),". This will read your DataHub ingestion recipe file and run it."),(0,n.kt)("li",{parentName:"ul"},"Deploy the DAG file into airflow for scheduling. Typically this involves checking in the DAG file into your dags folder which is accessible to your Airflow instance.")),(0,n.kt)("p",null,"Alternatively you can have an inline recipe as given in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/mysql_sample_dag.py"},(0,n.kt)("inlineCode",{parentName:"a"},"mysql_sample_dag.py")),". This runs a MySQL metadata ingestion pipeline using an inlined configuration."))}d.isMDXComponent=!0}}]);