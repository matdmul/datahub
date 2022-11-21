"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={title:"Adding Stateful Ingestion to a Source",slug:"/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source.md"},r="Adding Stateful Ingestion to a Source",s={unversionedId:"metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source",id:"metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source",title:"Adding Stateful Ingestion to a Source",description:"Currently, datahub supports the Stale Metadata Removal and",source:"@site/genDocs/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source.md",sourceDirName:"metadata-ingestion/docs/dev_guides",slug:"/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source",permalink:"/docs/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source.md",tags:[],version:"current",frontMatter:{title:"Adding Stateful Ingestion to a Source",slug:"/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source.md"},sidebar:"overviewSidebar",previous:{title:"Stateful Ingestion",permalink:"/docs/metadata-ingestion/docs/dev_guides/stateful"},next:{title:"SQL Profiling",permalink:"/docs/metadata-ingestion/docs/dev_guides/sql_profiles"}},l={},d=[{value:"Adding Stale Metadata Removal to a Source",id:"adding-stale-metadata-removal-to-a-source",level:2},{value:"1. Defining the checkpoint state for the source.",id:"1-defining-the-checkpoint-state-for-the-source",level:3},{value:"2. Modifying the SourceConfig",id:"2-modifying-the-sourceconfig",level:3},{value:"3. Modifying the SourceReport",id:"3-modifying-the-sourcereport",level:3},{value:"4. Modifying the Source",id:"4-modifying-the-source",level:3},{value:"4.1 Instantiate StaleEntityRemovalHandler in the <code>__init__</code> method of the source.",id:"41-instantiate-staleentityremovalhandler-in-the-__init__-method-of-the-source",level:4},{value:"4.2 Adding entities from current run to the state object.",id:"42-adding-entities-from-current-run-to-the-state-object",level:4},{value:"4.3 Emitting soft-delete workunits associated with the stale entities.",id:"43-emitting-soft-delete-workunits-associated-with-the-stale-entities",level:4},{value:"Adding Redundant Run Elimination to a Source",id:"adding-redundant-run-elimination-to-a-source",level:2},{value:"1. Modifying the SourceConfig",id:"1-modifying-the-sourceconfig",level:3},{value:"2. Modifying the SourceReport",id:"2-modifying-the-sourcereport",level:3},{value:"3. Modifying the Source",id:"3-modifying-the-source",level:3},{value:"3.1 Instantiate RedundantRunSkipHandler in the <code>__init__</code> method of the source.",id:"31-instantiate-redundantrunskiphandler-in-the-__init__-method-of-the-source",level:4},{value:"3.2 Checking if the current run should be skipped.",id:"32-checking-if-the-current-run-should-be-skipped",level:4},{value:"3.3 Updating the state for the current run.",id:"33-updating-the-state-for-the-current-run",level:4}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-stateful-ingestion-to-a-source"},"Adding Stateful Ingestion to a Source"),(0,i.kt)("p",null,"Currently, datahub supports the ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Stale Metadata Removal")," and\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/docs/dev_guides/stateful#redundant-run-elimination"},"Redunant Run Elimination")," use-cases on top of the more generic stateful ingestion\ncapability available for the sources. This document describes how to add support for these two use-cases to new sources."),(0,i.kt)("h2",{id:"adding-stale-metadata-removal-to-a-source"},"Adding Stale Metadata Removal to a Source"),(0,i.kt)("p",null,"Adding the stale metadata removal use-case to a new source involves"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Defining the new checkpoint state that stores the list of entities emitted from a specific ingestion run."),(0,i.kt)("li",{parentName:"ol"},"Modifying the ",(0,i.kt)("inlineCode",{parentName:"li"},"SourceConfig")," associated with the source to use a custom ",(0,i.kt)("inlineCode",{parentName:"li"},"stateful_ingestion")," config param."),(0,i.kt)("li",{parentName:"ol"},"Modifying the ",(0,i.kt)("inlineCode",{parentName:"li"},"SourceReport")," associated with the source to include soft-deleted entities in the report."),(0,i.kt)("li",{parentName:"ol"},"Modifying the ",(0,i.kt)("inlineCode",{parentName:"li"},"Source")," to",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Instantiate the StaleEntityRemovalHandler object"),(0,i.kt)("li",{parentName:"ol"},"Add entities from the current run to the state object"),(0,i.kt)("li",{parentName:"ol"},"Emit stale metadata removal workunits")))),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/state/stale_entity_removal_handler.py"},"datahub.ingestion.source.state.stale_entity_removal_handler")," module provides the supporting infrastructure for all the steps described\nabove and substantially simplifies the implementation on the source side. Below is a detailed explanation of each of these\nsteps along with examples."),(0,i.kt)("h3",{id:"1-defining-the-checkpoint-state-for-the-source"},"1. Defining the checkpoint state for the source."),(0,i.kt)("p",null,"The checkpoint state class is responsible for tracking the entities emitted from each ingestion run. If none of the existing states do not meet the needs of the new source, a new checkpoint state must be created. The state must\ninherit from the ",(0,i.kt)("inlineCode",{parentName:"p"},"StaleEntityCheckpointStateBase")," abstract class shown below, and implement each of the abstract methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class StaleEntityCheckpointStateBase(CheckpointStateBase, ABC, Generic[Derived]):\n    \"\"\"\n    Defines the abstract interface for the checkpoint states that are used for stale entity removal.\n    Examples include sql_common state for tracking table and & view urns,\n    dbt that tracks node & assertion urns, kafka state tracking topic urns.\n    \"\"\"\n\n    @classmethod\n    @abstractmethod\n    def get_supported_types(cls) -> List[str]:\n        pass\n\n    @abstractmethod\n    def add_checkpoint_urn(self, type: str, urn: str) -> None:\n        \"\"\"\n        Adds an urn into the list used for tracking the type.\n        :param type: The type of the urn such as a 'table', 'view',\n         'node', 'topic', 'assertion' that the concrete sub-class understands.\n        :param urn: The urn string\n        :return: None.\n        \"\"\"\n        pass\n\n    @abstractmethod\n    def get_urns_not_in(\n        self, type: str, other_checkpoint_state: Derived\n    ) -> Iterable[str]:\n        \"\"\"\n        Gets the urns present in this checkpoint but not the other_checkpoint for the given type.\n        :param type: The type of the urn such as a 'table', 'view',\n         'node', 'topic', 'assertion' that the concrete sub-class understands.\n        :param other_checkpoint_state: the checkpoint state to compute the urn set difference against.\n        :return: an iterable to the set of urns present in this checkpoing state but not in the other_checkpoint.\n        \"\"\"\n        pass\n")),(0,i.kt)("p",null,"Examples: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/state/kafka_state.py#L11"},"KafkaCheckpointState"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/state/dbt_state.py#L16"},"DbtCheckpointState")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/state/sql_common_state.py#L17"},"BaseSQLAlchemyCheckpointState"))),(0,i.kt)("h3",{id:"2-modifying-the-sourceconfig"},"2. Modifying the SourceConfig"),(0,i.kt)("p",null,"The source's config must inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulIngestionConfigBase"),", and should declare a field named ",(0,i.kt)("inlineCode",{parentName:"p"},"stateful_ingestion")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional[StatefulStaleMetadataRemovalConfig]"),"."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"KafkaSourceConfig"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from typing import List, Optional\nimport pydantic\nfrom datahub.ingestion.source.state.stale_entity_removal_handler import StatefulStaleMetadataRemovalConfig\nfrom datahub.ingestion.source.state.stateful_ingestion_base import (\n    StatefulIngestionConfigBase,\n)\n\nclass KafkaSourceConfig(StatefulIngestionConfigBase):\n    # ...<other config params>...\n\n    stateful_ingestion: Optional[StatefulStaleMetadataRemovalConfig] = None\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/dbt.py#L131"},"DBTStatefulIngestionConfig"),"\nand the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/dbt.py#L317"},"DBTConfig"),".")),(0,i.kt)("h3",{id:"3-modifying-the-sourcereport"},"3. Modifying the SourceReport"),(0,i.kt)("p",null,"The report class of the source should inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"StaleEntityRemovalSourceReport")," whose definition is shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from typing import List\nfrom dataclasses import dataclass, field\nfrom datahub.ingestion.source.state.stateful_ingestion_base import StatefulIngestionReport\n@dataclass\nclass StaleEntityRemovalSourceReport(StatefulIngestionReport):\n    soft_deleted_stale_entities: List[str] = field(default_factory=list)\n\n    def report_stale_entity_soft_deleted(self, urn: str) -> None:\n        self.soft_deleted_stale_entities.append(urn)\n")),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"KafkaSourceReport"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from dataclasses import dataclass\nfrom datahub.ingestion.source.state.stale_entity_removal_handler import StaleEntityRemovalSourceReport\n@dataclass\nclass KafkaSourceReport(StaleEntityRemovalSourceReport):\n    # <rest of kafka source report specific impl\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/dbt.py#L142"},"DBTSourceReport"))),(0,i.kt)("h3",{id:"4-modifying-the-source"},"4. Modifying the Source"),(0,i.kt)("p",null,"The source must inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulIngestionSourceBase"),"."),(0,i.kt)("h4",{id:"41-instantiate-staleentityremovalhandler-in-the-__init__-method-of-the-source"},"4.1 Instantiate StaleEntityRemovalHandler in the ",(0,i.kt)("inlineCode",{parentName:"h4"},"__init__")," method of the source."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"KafkaSource"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from datahub.ingestion.source.state.stateful_ingestion_base import StatefulIngestionSourceBase\nfrom datahub.ingestion.source.state.stale_entity_removal_handler import StaleEntityRemovalHandler\nclass KafkaSource(StatefulIngestionSourceBase):\n    def __init__(self, config: KafkaSourceConfig, ctx: PipelineContext):\n        # <Rest of KafkaSource initialization>\n        # Create and register the stateful ingestion stale entity removal handler.\n        self.stale_entity_removal_handler = StaleEntityRemovalHandler(\n            source=self,\n            config=self.source_config,\n            state_type_class=KafkaCheckpointState,\n            pipeline_name=self.ctx.pipeline_name,\n            run_id=self.ctx.run_id,\n        )\n")),(0,i.kt)("h4",{id:"42-adding-entities-from-current-run-to-the-state-object"},"4.2 Adding entities from current run to the state object."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"add_entity_to_state")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"StaleEntityRemovalHandler"),"."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Kafka\nself.stale_entity_removal_handler.add_entity_to_state(\n    type="topic",\n    urn=topic_urn,)\n\n# DBT\nself.stale_entity_removal_handler.add_entity_to_state(\n    type="dataset",\n    urn=node_datahub_urn\n)\nself.stale_entity_removal_handler.add_entity_to_state(\n    type="assertion",\n    urn=node_datahub_urn,\n)\n')),(0,i.kt)("h4",{id:"43-emitting-soft-delete-workunits-associated-with-the-stale-entities"},"4.3 Emitting soft-delete workunits associated with the stale entities."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def get_workunits(self) -> Iterable[MetadataWorkUnit]:\n    #\n    # Emit the rest of the workunits for the source.\n    # NOTE: Populating the current state happens during the execution of this code.\n    # ...\n    \n    # Clean up stale entities at the end\n    yield from self.stale_entity_removal_handler.gen_removed_entity_workunits()\n")),(0,i.kt)("h2",{id:"adding-redundant-run-elimination-to-a-source"},"Adding Redundant Run Elimination to a Source"),(0,i.kt)("p",null,"This use-case applies to the sources that drive ingestion by querying logs over a specified duration via the config(such\nas snowflake usage, bigquery usage etc.). It typically involves expensive and long-running queries. To add redundant\nrun elimination to a new source to prevent the expensive reruns for the same time range(potentially due to a user\nerror or a scheduler malfunction), the following steps\nare required."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"SourceConfig")),(0,i.kt)("li",{parentName:"ol"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"SourceReport")),(0,i.kt)("li",{parentName:"ol"},"Modify the ",(0,i.kt)("inlineCode",{parentName:"li"},"Source")," to ",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Instantiate the RedundantRunSkipHandler object."),(0,i.kt)("li",{parentName:"ol"},"Check if the current run should be skipped."),(0,i.kt)("li",{parentName:"ol"},"Update the state for the current run(start & end times).")))),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/state/redundant_run_skip_handler.py"},"datahub.ingestion.source.state.redundant_run_skip_handler"),"\nmodules provides the supporting infrastructure required for all the steps described above."),(0,i.kt)("p",null,"NOTE: The handler currently uses a simple state,\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/state/usage_common_state.py"},"BaseUsageCheckpointState"),",\nacross all sources it supports (unlike the StaleEntityRemovalHandler)."),(0,i.kt)("h3",{id:"1-modifying-the-sourceconfig"},"1. Modifying the SourceConfig"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SourceConfig")," must inherit from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/state/redundant_run_skip_handler.py#L23"},"StatefulRedundantRunSkipConfig")," class."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Snowflake Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from datahub.ingestion.source.state.redundant_run_skip_handler import (\n    StatefulRedundantRunSkipConfig,\n)\nclass SnowflakeStatefulIngestionConfig(StatefulRedundantRunSkipConfig):\n    pass\n")),(0,i.kt)("h3",{id:"2-modifying-the-sourcereport"},"2. Modifying the SourceReport"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SourceReport")," must inherit from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/state/stateful_ingestion_base.py#L102"},"StatefulIngestionReport")," class.\nExamples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Snowflake Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass\nclass SnowflakeUsageReport(BaseSnowflakeReport, StatefulIngestionReport):\n    # <members specific to snowflake usage report>\n")),(0,i.kt)("h3",{id:"3-modifying-the-source"},"3. Modifying the Source"),(0,i.kt)("p",null,"The source must inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulIngestionSourceBase"),"."),(0,i.kt)("h4",{id:"31-instantiate-redundantrunskiphandler-in-the-__init__-method-of-the-source"},"3.1 Instantiate RedundantRunSkipHandler in the ",(0,i.kt)("inlineCode",{parentName:"h4"},"__init__")," method of the source."),(0,i.kt)("p",null,"The source should instantiate an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"RedundantRunSkipHandler")," in its ",(0,i.kt)("inlineCode",{parentName:"p"},"__init__")," method.\nExamples:\nSnowflake Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from datahub.ingestion.source.state.redundant_run_skip_handler import (\n    RedundantRunSkipHandler,\n)\nclass SnowflakeUsageSource(StatefulIngestionSourceBase):\n    \n    def __init__(self, config: SnowflakeUsageConfig, ctx: PipelineContext):\n        super(SnowflakeUsageSource, self).__init__(config, ctx)\n        self.config: SnowflakeUsageConfig = config\n        self.report: SnowflakeUsageReport = SnowflakeUsageReport()\n        # Create and register the stateful ingestion use-case handlers.\n        self.redundant_run_skip_handler = RedundantRunSkipHandler(\n            source=self,\n            config=self.config,\n            pipeline_name=self.ctx.pipeline_name,\n            run_id=self.ctx.run_id,\n        )\n")),(0,i.kt)("h4",{id:"32-checking-if-the-current-run-should-be-skipped"},"3.2 Checking if the current run should be skipped."),(0,i.kt)("p",null,"The sources can query if the current run should be skipped using ",(0,i.kt)("inlineCode",{parentName:"p"},"should_skip_this_run")," method of ",(0,i.kt)("inlineCode",{parentName:"p"},"RedundantRunSkipHandler"),". This should done from the ",(0,i.kt)("inlineCode",{parentName:"p"},"get_workunits")," method, before doing any other work."),(0,i.kt)("p",null,"Example code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def get_workunits(self) -> Iterable[MetadataWorkUnit]:\n        # Skip a redundant run\n        if self.redundant_run_skip_handler.should_skip_this_run(\n            cur_start_time_millis=datetime_to_ts_millis(self.config.start_time)\n        ):\n            return\n        # Generate the workunits.\n")),(0,i.kt)("h4",{id:"33-updating-the-state-for-the-current-run"},"3.3 Updating the state for the current run."),(0,i.kt)("p",null,"The source should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"update_state")," method of ",(0,i.kt)("inlineCode",{parentName:"p"},"RedundantRunSkipHandler")," to update the current run's state if the run has not been skipped. This step can be performed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"get_workunits")," if the run has not been skipped."),(0,i.kt)("p",null,"Example code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"    def get_workunits(self) -> Iterable[MetadataWorkUnit]:\n        # Skip a redundant run\n        if self.redundant_run_skip_handler.should_skip_this_run(\n            cur_start_time_millis=datetime_to_ts_millis(self.config.start_time)\n        ):\n            return\n        \n        # Generate the workunits.\n        # <code for generating the workunits>\n        # Update checkpoint state for this run.\n        self.redundant_run_skip_handler.update_state(\n            start_time_millis=datetime_to_ts_millis(self.config.start_time),\n            end_time_millis=datetime_to_ts_millis(self.config.end_time),\n        )\n")))}c.isMDXComponent=!0}}]);