"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9608],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(r),p=a,m=u["".concat(s,".").concat(p)]||u[p]||h[p]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={title:"What is GMA search index?",slug:"/what/search-index",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/search-index.md"},i="What is GMA search index?",c={unversionedId:"docs/what/search-index",id:"docs/what/search-index",title:"What is GMA search index?",description:"Each search document type (or entity type) will be mapped to an independent search index in Elasticsearch.",source:"@site/genDocs/docs/what/search-index.md",sourceDirName:"docs/what",slug:"/what/search-index",permalink:"/docs/what/search-index",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what/search-index.md",tags:[],version:"current",frontMatter:{title:"What is GMA search index?",slug:"/what/search-index",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/search-index.md"}},s={},d=[{value:"Search Automation (TBD)",id:"search-automation-tbd",level:2}],l={toc:d};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-gma-search-index"},"What is GMA search index?"),(0,a.kt)("p",null,"Each ",(0,a.kt)("a",{parentName:"p",href:"/docs/what/search-document"},"search document")," type (or ",(0,a.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entity")," type) will be mapped to an independent search index in Elasticsearch.\nBeyond the standard search engine features (analyzer, tokenizer, filter queries, faceting, sharding, etc),\nGMA also supports the following specific features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Partial update of indexed documents"),(0,a.kt)("li",{parentName:"ul"},"Membership testing on multi-value fields"),(0,a.kt)("li",{parentName:"ul"},"Zero downtime switch between indices")),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"/docs/architecture/metadata-serving#search-dao"},"Search DAO")," for search query abstraction in GMA."),(0,a.kt)("h2",{id:"search-automation-tbd"},"Search Automation (TBD)"),(0,a.kt)("p",null,"We aim to automate the index creation, schema evolution, and reindexing such that the team will only need to focus on the search document model and their custom ",(0,a.kt)("a",{parentName:"p",href:"/docs/architecture/metadata-ingestion#search-index-builders"},"Index Builder")," logic.\nAs the logic changes, a new version of the index will be created and populated from historic MAEs.\nOnce it\u2019s fully populated, the team can switch to the new version through a simple config change from their ",(0,a.kt)("a",{parentName:"p",href:"/docs/what/gms"},"GMS"),".\nThey can also rollback to an older version of index whenever needed."))}h.isMDXComponent=!0}}]);