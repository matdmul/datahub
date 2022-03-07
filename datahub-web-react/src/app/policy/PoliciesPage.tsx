import React, { useMemo, useState } from 'react';
import { Button, Empty, message, Modal, Pagination, Tag, Typography } from 'antd';
import styled from 'styled-components';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

import { SearchablePage } from '../search/SearchablePage';
import PolicyBuilderModal from './PolicyBuilderModal';
import { Policy, PolicyUpdateInput, PolicyState, PolicyType, Maybe } from '../../types.generated';
import { useAppConfig } from '../useAppConfig';
import PolicyDetailsModal from './PolicyDetailsModal';
import {
    useCreatePolicyMutation,
    useDeletePolicyMutation,
    useListPoliciesQuery,
    useUpdatePolicyMutation,
} from '../../graphql/policy.generated';
import { Message } from '../shared/Message';
import { EMPTY_POLICY } from './policyUtils';
import TabToolbar from '../entity/shared/components/styled/TabToolbar';
import { StyledTable } from '../entity/shared/components/styled/StyledTable';
import AvatarsGroup from './AvatarsGroup';
import { useEntityRegistry } from '../useEntityRegistry';
import { ANTD_GRAY } from '../entity/shared/constants';

const PoliciesContainer = styled.div`
    padding-top: 20px;
`;

const PoliciesHeaderContainer = styled.div`
    && {
        padding-left: 24px;
    }
`;

const PoliciesTitle = styled(Typography.Title)`
    && {
        margin-bottom: 8px;
    }
`;

const SourceContainer = styled.div``;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const PolicyName = styled.span`
    cursor: pointer;
    font-weight: 700;
`;

const PoliciesType = styled(Tag)`
    && {
        border-radius: 2px !important;
        font-weight: 700;
    }
`;

const ActorTag = styled(Tag)`
    && {
        display: inline-block;
        text-align: center;
    }
`;

const ActionButtonContainer = styled.div`
    display: flex;
    justify-content: right;
`;

const EditPolicyButton = styled(Button)`
    margin-right: 16px;
`;

const DEFAULT_PAGE_SIZE = 10;

type PrivilegeOptionType = {
    type?: string;
    name?: Maybe<string>;
};

const toPolicyInput = (policy: Omit<Policy, 'urn'>): PolicyUpdateInput => {
    let policyInput: PolicyUpdateInput = {
        type: policy.type,
        name: policy.name,
        state: policy.state,
        description: policy.description,
        privileges: policy.privileges,
        actors: {
            users: policy.actors.users,
            groups: policy.actors.groups,
            allUsers: policy.actors.allUsers,
            allGroups: policy.actors.allGroups,
            resourceOwners: policy.actors.resourceOwners,
        },
    };
    if (policy.resources !== null && policy.resources !== undefined) {
        // Add the resource filters.
        policyInput = {
            ...policyInput,
            resources: {
                type: policy.resources.type,
                resources: policy.resources.resources,
                allResources: policy.resources.allResources,
            },
        };
    }
    return policyInput;
};

// TODO: Cleanup the styling.
export const PoliciesPage = () => {
    const entityRegistry = useEntityRegistry();
    const {
        config: { policiesConfig },
    } = useAppConfig();

    // Policy list paging.
    const [page, setPage] = useState(1);
    const pageSize = DEFAULT_PAGE_SIZE;
    const start = (page - 1) * pageSize;

    // Controls whether the editing and details view modals are active.
    const [showPolicyBuilderModal, setShowPolicyBuilderModal] = useState(false);
    const [showViewPolicyModal, setShowViewPolicyModal] = useState(false);

    // Focused policy represents a policy being actively viewed, edited, created via a popup modal.
    const [focusPolicyUrn, setFocusPolicyUrn] = useState<undefined | string>(undefined);
    const [focusPolicy, setFocusPolicy] = useState<Omit<Policy, 'urn'>>(EMPTY_POLICY);

    // Construct privileges
    const platformPrivileges = policiesConfig?.platformPrivileges || [];
    const resourcePrivileges = policiesConfig?.resourcePrivileges || [];

    const {
        loading: policiesLoading,
        error: policiesError,
        data: policiesData,
    } = useListPoliciesQuery({
        fetchPolicy: 'no-cache',
        variables: { input: { start, count: pageSize } },
    });

    const listPoliciesQuery = 'listPolicies';

    // Any time a policy is removed, edited, or created, refetch the list.
    const [createPolicy, { error: createPolicyError }] = useCreatePolicyMutation({
        refetchQueries: () => [listPoliciesQuery],
    });

    const [updatePolicy, { error: updatePolicyError }] = useUpdatePolicyMutation({
        refetchQueries: () => [listPoliciesQuery],
    });

    const [deletePolicy, { error: deletePolicyError }] = useDeletePolicyMutation({
        refetchQueries: () => [listPoliciesQuery],
    });

    const updateError = createPolicyError || updatePolicyError || deletePolicyError;

    const totalPolicies = policiesData?.listPolicies?.total || 0;
    const policies = useMemo(() => policiesData?.listPolicies?.policies || [], [policiesData]);

    const onChangePage = (newPage: number) => {
        setPage(newPage);
    };

    const onClickNewPolicy = () => {
        setFocusPolicyUrn(undefined);
        setFocusPolicy(EMPTY_POLICY);
        setShowPolicyBuilderModal(true);
    };

    const onClosePolicyBuilder = () => {
        setFocusPolicyUrn(undefined);
        setFocusPolicy(EMPTY_POLICY);
        setShowPolicyBuilderModal(false);
    };

    const getPrivilegeNames = (policy: Omit<Policy, 'urn'>) => {
        let privilegeOptions: PrivilegeOptionType[] = [];
        if (policy?.type === PolicyType.Platform) {
            privilegeOptions = platformPrivileges.map((platformPrivilege) => {
                return { type: platformPrivilege.type, name: platformPrivilege.displayName };
            });
        } else {
            const privilegeData = resourcePrivileges.filter(
                (resourcePrivilege) => resourcePrivilege.resourceType === policy?.resources?.type,
            );
            privilegeOptions =
                privilegeData &&
                privilegeData[0]?.privileges.map((b) => {
                    return { type: b.type, name: b.displayName };
                });
        }
        return privilegeOptions;
    };

    const onViewPolicy = (policy: Policy) => {
        setShowViewPolicyModal(true);
        setFocusPolicyUrn(policy?.urn);
        setFocusPolicy({ ...policy });
    };

    const onCancelViewPolicy = () => {
        setShowViewPolicyModal(false);
        setFocusPolicy(EMPTY_POLICY);
        setFocusPolicyUrn(undefined);
    };

    const onRemovePolicy = (policy: Policy) => {
        Modal.confirm({
            title: `Delete ${policy?.name}`,
            content: `Are you sure you want to remove policy?`,
            onOk() {
                deletePolicy({ variables: { urn: policy?.urn as string } }); // There must be a focus policy urn.
                onCancelViewPolicy();
            },
            onCancel() {},
            okText: 'Yes',
            maskClosable: true,
            closable: true,
        });
    };

    const onEditPolicy = (policy: Policy) => {
        setShowPolicyBuilderModal(true);
        setFocusPolicyUrn(policy?.urn);
        setFocusPolicy({ ...policy });
    };

    const onToggleActiveDuplicate = (policy: Policy) => {
        const newPolicy = {
            ...policy,
            state: policy?.state === PolicyState.Active ? PolicyState.Inactive : PolicyState.Active,
        };
        updatePolicy({
            variables: {
                urn: policy?.urn as string, // There must be a focus policy urn.
                input: toPolicyInput(newPolicy),
            },
        });
        setShowViewPolicyModal(false);
    };

    const onSavePolicy = (savePolicy: Omit<Policy, 'urn'>) => {
        if (focusPolicyUrn) {
            // If there's an URN associated with the focused policy, then we are editing an existing policy.
            updatePolicy({ variables: { urn: focusPolicyUrn, input: toPolicyInput(savePolicy) } });
        } else {
            // If there's no URN associated with the focused policy, then we are creating.
            createPolicy({ variables: { input: toPolicyInput(savePolicy) } });
        }
        message.success('Successfully saved policy.');
        onClosePolicyBuilder();
    };

    const tableColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, record: any) => {
                return (
                    <PolicyName
                        onClick={() => onViewPolicy(record.policy)}
                        style={{ color: record?.editable ? '#000000' : '#8C8C8C' }}
                    >
                        {record?.name}
                    </PolicyName>
                );
            },
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (type: string) => {
                const policyType = type?.charAt(0)?.toUpperCase() + type?.slice(1)?.toLowerCase();
                return <PoliciesType>{policyType}</PoliciesType>;
            },
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (description: string) => description || '',
        },
        {
            title: 'Actors',
            dataIndex: 'actors',
            key: 'actors',
            render: (_, record: any) => {
                return (
                    <>
                        <AvatarsGroup
                            users={record?.resolvedUsers}
                            groups={record?.resolvedGroups}
                            entityRegistry={entityRegistry}
                            maxCount={3}
                            size={28}
                        />
                        {record?.allUsers ? <ActorTag>All Users</ActorTag> : null}
                        {record?.allGroups ? <ActorTag>All Groups</ActorTag> : null}
                    </>
                );
            },
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            render: (state: string) => {
                const isActive = state === PolicyState.Active;
                return <Tag color={isActive ? 'green' : 'red'}>{state}</Tag>;
            },
        },
        {
            title: '',
            dataIndex: '',
            key: 'x',
            render: (_, record: any) => (
                <ActionButtonContainer>
                    <EditPolicyButton disabled={!record?.editable} onClick={() => onEditPolicy(record?.policy)}>
                        EDIT
                    </EditPolicyButton>
                    {record?.state === PolicyState.Active ? (
                        <Button
                            disabled={!record?.editable}
                            onClick={() => onToggleActiveDuplicate(record?.policy)}
                            style={{ color: record?.editable ? 'red' : ANTD_GRAY[6], width: 100 }}
                        >
                            DEACTIVATE
                        </Button>
                    ) : (
                        <Button
                            disabled={!record?.editable}
                            onClick={() => onToggleActiveDuplicate(record?.policy)}
                            style={{ color: record?.editable ? 'green' : ANTD_GRAY[6], width: 100 }}
                        >
                            ACTIVATE
                        </Button>
                    )}
                    <Button
                        disabled={!record?.editable}
                        onClick={() => onRemovePolicy(record?.policy)}
                        type="text"
                        shape="circle"
                        danger
                    >
                        <DeleteOutlined />
                    </Button>
                </ActionButtonContainer>
            ),
        },
    ];

    const tableData = policies?.map((policy) => ({
        allGroups: policy?.actors?.allGroups,
        allUsers: policy?.actors?.allUsers,
        description: policy?.description,
        editable: policy?.editable,
        name: policy?.name,
        privileges: policy?.privileges,
        policy,
        resolvedGroups: policy?.actors?.resolvedGroups,
        resolvedUsers: policy?.actors?.resolvedUsers,
        resources: policy?.resources,
        state: policy?.state,
        type: policy?.type,
        urn: policy?.urn,
    }));

    return (
        <SearchablePage>
            {policiesLoading && <Message type="loading" content="Loading policies..." />}
            {policiesError && message.error('Failed to load policies :(')}
            {updateError && message.error('Failed to update the Policy :(')}
            <PoliciesContainer>
                <PoliciesHeaderContainer>
                    <PoliciesTitle level={2}>Manage Policies</PoliciesTitle>
                    <Typography.Paragraph type="secondary">
                        Manage access for DataHub Users & Groups using Policies.
                    </Typography.Paragraph>
                </PoliciesHeaderContainer>
            </PoliciesContainer>
            <SourceContainer>
                <TabToolbar>
                    <div>
                        <Button type="text" onClick={onClickNewPolicy} data-testid="add-policy-button">
                            <PlusOutlined /> Create new policy
                        </Button>
                    </div>
                </TabToolbar>
                <StyledTable
                    columns={tableColumns}
                    dataSource={tableData}
                    rowKey="urn"
                    locale={{
                        emptyText: <Empty description="No Ingestion Sources!" image={Empty.PRESENTED_IMAGE_SIMPLE} />,
                    }}
                    pagination={false}
                />
            </SourceContainer>
            <PaginationContainer>
                <Pagination
                    style={{ margin: 40 }}
                    current={page}
                    pageSize={pageSize}
                    total={totalPolicies}
                    showLessItems
                    onChange={onChangePage}
                    showSizeChanger={false}
                />
            </PaginationContainer>
            {showPolicyBuilderModal && (
                <PolicyBuilderModal
                    policy={focusPolicy || EMPTY_POLICY}
                    setPolicy={setFocusPolicy}
                    visible={showPolicyBuilderModal}
                    onClose={onClosePolicyBuilder}
                    onSave={onSavePolicy}
                />
            )}
            {showViewPolicyModal && (
                <PolicyDetailsModal
                    policy={focusPolicy}
                    visible={showViewPolicyModal}
                    onClose={onCancelViewPolicy}
                    privileges={getPrivilegeNames(focusPolicy)}
                />
            )}
        </SearchablePage>
    );
};