"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3484],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,v=u["".concat(d,".").concat(c)]||u[c]||p[c]||l;return n?a.createElement(v,i(i({ref:t},s),{},{components:n})):a.createElement(v,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57600:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Entity Change Event V1",slug:"/actions/events/entity-change-event",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/events/entity-change-event.md"},d="Entity Change Event V1",m={unversionedId:"docs/actions/events/entity-change-event",id:"docs/actions/events/entity-change-event",isDocsHomePage:!1,title:"Entity Change Event V1",description:"Event Type",source:"@site/genDocs/docs/actions/events/entity-change-event.md",sourceDirName:"docs/actions/events",slug:"/actions/events/entity-change-event",permalink:"/docs/actions/events/entity-change-event",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/actions/events/entity-change-event.md",tags:[],version:"current",frontMatter:{title:"Entity Change Event V1",slug:"/actions/events/entity-change-event",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/events/entity-change-event.md"},sidebar:"overviewSidebar",previous:{title:"Kafka Event Source",permalink:"/docs/actions/sources/kafka-event-source"},next:{title:"Metadata Change Log Event V1",permalink:"/docs/actions/events/metadata-change-log-event"}},s=[{value:"Event Type",id:"event-type",children:[],level:2},{value:"Overview",id:"overview",children:[],level:2},{value:"Event Structure",id:"event-structure",children:[{value:"Common Fields",id:"common-fields",children:[],level:3},{value:"Add Tag Event",id:"add-tag-event",children:[{value:"Sample Event",id:"sample-event",children:[],level:4}],level:3},{value:"Remove Tag Event",id:"remove-tag-event",children:[{value:"Sample Event",id:"sample-event-1",children:[],level:4}],level:3},{value:"Add Glossary Term Event",id:"add-glossary-term-event",children:[{value:"Sample Event",id:"sample-event-2",children:[],level:4}],level:3},{value:"Remove Glossary Term Event",id:"remove-glossary-term-event",children:[{value:"Sample Event",id:"sample-event-3",children:[],level:4}],level:3},{value:"Add Domain Event",id:"add-domain-event",children:[{value:"Sample Event",id:"sample-event-4",children:[],level:4}],level:3},{value:"Remove Domain Event",id:"remove-domain-event",children:[{value:"Sample Event",id:"sample-event-5",children:[],level:4}],level:3},{value:"Add Owner Event",id:"add-owner-event",children:[{value:"Sample Event",id:"sample-event-6",children:[],level:4}],level:3},{value:"Remove Owner Event",id:"remove-owner-event",children:[{value:"Sample Event",id:"sample-event-7",children:[],level:4}],level:3},{value:"Modify Deprecation Event",id:"modify-deprecation-event",children:[{value:"Sample Event",id:"sample-event-8",children:[],level:4}],level:3},{value:"Add Dataset Schema Field Event",id:"add-dataset-schema-field-event",children:[{value:"Sample Event",id:"sample-event-9",children:[],level:4}],level:3},{value:"Remove Dataset Schema Field Event",id:"remove-dataset-schema-field-event",children:[{value:"Sample Event",id:"sample-event-10",children:[],level:4}],level:3},{value:"Entity Create Event",id:"entity-create-event",children:[{value:"Sample Event",id:"sample-event-11",children:[],level:4}],level:3},{value:"Entity Soft-Delete Event",id:"entity-soft-delete-event",children:[{value:"Sample Event",id:"sample-event-12",children:[],level:4}],level:3},{value:"Entity Hard-Delete Event",id:"entity-hard-delete-event",children:[{value:"Sample Event",id:"sample-event-13",children:[],level:4}],level:3}],level:2}],p={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"entity-change-event-v1"},"Entity Change Event V1"),(0,l.kt)("h2",{id:"event-type"},"Event Type"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"EntityChangeEvent_v1")),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"This Event is emitted when certain changes are made to an entity (dataset, dashboard, chart, etc) on DataHub."),(0,l.kt)("h2",{id:"event-structure"},"Event Structure"),(0,l.kt)("p",null,"Entity Change Events are generated in a variety of circumstances, but share a common set of fields. "),(0,l.kt)("h3",{id:"common-fields"},"Common Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"entityUrn"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The unique identifier for the Entity being changed. For example, a Dataset's urn."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"entityType"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of the entity being changed. Supported values include dataset, chart, dashboard, dataFlow (Pipeline), dataJob (Task), domain, tag, glossaryTerm, corpGroup, & corpUser."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"category"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The category of the change, related to the kind of operation that was performed. Examples include TAG, GLOSSARY_TERM, DOMAIN, LIFECYCLE, and more."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operation"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The operation being performed on the entity given the category. For example, ADD ,REMOVE, MODIFY. For the set of valid operations, see the full catalog below."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"modifier"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The modifier that has been applied to the entity. The value depends on the category. An example includes the URN of a tag being applied to a Dataset or Schema Field."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parameters"),(0,l.kt)("td",{parentName:"tr",align:null},"Dict"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional key-value parameters used to provide specific context. The precise contents depends on the category + operation of the event. See the catalog below for a full summary of the combinations."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auditStamp.actor"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The urn of the actor who triggered the change."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auditStamp.time"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"The timestamp in milliseconds corresponding to the event."),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("p",null,"In following sections, we will provide sample events for each scenario in which Entity Change Events are fired."),(0,l.kt)("h3",{id:"add-tag-event"},"Add Tag Event"),(0,l.kt)("p",null,"This event is emitted when a Tag has been added to an entity on DataHub."),(0,l.kt)("h4",{id:"sample-event"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "TAG",\n  "operation": "ADD",\n  "modifier": "urn:li:tag:PII",\n  "parameters": {\n    "tagUrn": "urn:li:tag:PII"\n  },\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')),(0,l.kt)("h3",{id:"remove-tag-event"},"Remove Tag Event"),(0,l.kt)("p",null,"This event is emitted when a Tag has been removed from an entity on DataHub.\nHeader"),(0,l.kt)("h4",{id:"sample-event-1"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "TAG",\n  "operation": "REMOVE",\n  "modifier": "urn:li:tag:PII",\n  "parameters": {\n    "tagUrn": "urn:li:tag:PII"\n  },\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')),(0,l.kt)("h3",{id:"add-glossary-term-event"},"Add Glossary Term Event"),(0,l.kt)("p",null,"This event is emitted when a Glossary Term has been added to an entity on DataHub.\nHeader"),(0,l.kt)("h4",{id:"sample-event-2"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "GLOSSARY_TERM",\n  "operation": "ADD",\n  "modifier": "urn:li:glossaryTerm:ExampleNode.ExampleTerm",\n  "parameters": {\n    "termUrn": "urn:li:glossaryTerm:ExampleNode.ExampleTerm"\n  },\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')),(0,l.kt)("h3",{id:"remove-glossary-term-event"},"Remove Glossary Term Event"),(0,l.kt)("p",null,"This event is emitted when a Glossary Term has been removed from an entity on DataHub."),(0,l.kt)("h4",{id:"sample-event-3"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "GLOSSARY_TERM",\n  "operation": "REMOVE",\n  "modifier": "urn:li:glossaryTerm:ExampleNode.ExampleTerm",\n  "parameters": {\n    "termUrn": "urn:li:glossaryTerm:ExampleNode.ExampleTerm"\n  },\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')),(0,l.kt)("h3",{id:"add-domain-event"},"Add Domain Event"),(0,l.kt)("p",null,"This event is emitted when Domain has been added to an entity on DataHub."),(0,l.kt)("h4",{id:"sample-event-4"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "DOMAIN",\n  "operation": "ADD",\n  "modifier": "urn:li:domain:ExampleDomain",\n  "parameters": {\n    "domainUrn": "urn:li:domain:ExampleDomain"\n  },\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')),(0,l.kt)("h3",{id:"remove-domain-event"},"Remove Domain Event"),(0,l.kt)("p",null,"This event is emitted when Domain has been removed from an entity on DataHub.\nHeader"),(0,l.kt)("h4",{id:"sample-event-5"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "DOMAIN",\n  "operation": "REMOVE",\n  "modifier": "urn:li:domain:ExampleDomain",\n  "parameters": {\n     "domainUrn": "urn:li:domain:ExampleDomain"\n  },\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')),(0,l.kt)("h3",{id:"add-owner-event"},"Add Owner Event"),(0,l.kt)("p",null,"This event is emitted when a new owner has been assigned to an entity on DataHub."),(0,l.kt)("h4",{id:"sample-event-6"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "OWNER",\n  "operation": "ADD",\n  "modifier": "urn:li:corpuser:jdoe",\n  "parameters": {\n     "ownerUrn": "urn:li:corpuser:jdoe",\n     "ownerType": "BUSINESS_OWNER"\n  },\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')),(0,l.kt)("h3",{id:"remove-owner-event"},"Remove Owner Event"),(0,l.kt)("p",null,"This event is emitted when an existing owner has been removed from an entity on DataHub."),(0,l.kt)("h4",{id:"sample-event-7"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "OWNER",\n  "operation": "REMOVE",\n  "modifier": "urn:li:corpuser:jdoe",\n  "parameters": {\n    "ownerUrn": "urn:li:corpuser:jdoe",\n    "ownerType": "BUSINESS_OWNER"\n  },\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')),(0,l.kt)("h3",{id:"modify-deprecation-event"},"Modify Deprecation Event"),(0,l.kt)("p",null,"This event is emitted when the deprecation status of an entity has been modified on DataHub."),(0,l.kt)("h4",{id:"sample-event-8"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "DEPRECATION",\n  "operation": "MODIFY",\n  "modifier": "DEPRECATED",\n  "parameters": {\n    "status": "DEPRECATED"\n  },\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')),(0,l.kt)("h3",{id:"add-dataset-schema-field-event"},"Add Dataset Schema Field Event"),(0,l.kt)("p",null,"This event is emitted when a new field has been added to a Dataset Schema. "),(0,l.kt)("h4",{id:"sample-event-9"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "TECHNICAL_SCHEMA",\n  "operation": "ADD",\n  "modifier": "urn:li:schemaField:(urn:li:dataset:abc,newFieldName)",\n  "parameters": {\n    "fieldUrn": "urn:li:schemaField:(urn:li:dataset:abc,newFieldName)",\n    "fieldPath": "newFieldName",\n    "nullable": false\n  },\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')),(0,l.kt)("h3",{id:"remove-dataset-schema-field-event"},"Remove Dataset Schema Field Event"),(0,l.kt)("p",null,"This event is emitted when a new field has been remove from a Dataset Schema. "),(0,l.kt)("h4",{id:"sample-event-10"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "TECHNICAL_SCHEMA",\n  "operation": "REMOVE",\n  "modifier": "urn:li:schemaField:(urn:li:dataset:abc,newFieldName)",\n  "parameters": {\n    "fieldUrn": "urn:li:schemaField:(urn:li:dataset:abc,newFieldName)",\n    "fieldPath": "newFieldName",\n    "nullable": false\n  },\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')),(0,l.kt)("h3",{id:"entity-create-event"},"Entity Create Event"),(0,l.kt)("p",null,"This event is emitted when a new entity has been created on DataHub.\nHeader"),(0,l.kt)("h4",{id:"sample-event-11"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "LIFECYCLE",\n  "operation": "CREATE",\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')),(0,l.kt)("h3",{id:"entity-soft-delete-event"},"Entity Soft-Delete Event"),(0,l.kt)("p",null,"This event is emitted when a new entity has been soft-deleted on DataHub."),(0,l.kt)("h4",{id:"sample-event-12"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "LIFECYCLE",\n  "operation": "SOFT_DELETE",\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')),(0,l.kt)("h3",{id:"entity-hard-delete-event"},"Entity Hard-Delete Event"),(0,l.kt)("p",null,"This event is emitted when a new entity has been hard-deleted on DataHub."),(0,l.kt)("h4",{id:"sample-event-13"},"Sample Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "entityUrn": "urn:li:dataset:abc",\n  "entityType": "dataset",\n  "category": "LIFECYCLE",\n  "operation": "HARD_DELETE",\n  "auditStamp": {\n    "actor": "urn:li:corpuser:jdoe",\n    "time": 1649953100653   \n  }\n}\n')))}u.isMDXComponent=!0}}]);