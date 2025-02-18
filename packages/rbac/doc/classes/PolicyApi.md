[@redhat-cloud-services/rbac-client](../README.md) / [Exports](../modules.md) / PolicyApi

# Class: PolicyApi

PolicyApi - object-oriented interface

**`Export`**

PolicyApi

## Hierarchy

- `BaseAPI`

  ↳ **`PolicyApi`**

## Table of contents

### Constructors

- [constructor](PolicyApi.md#constructor)

### Properties

- [axios](PolicyApi.md#axios)
- [basePath](PolicyApi.md#basepath)
- [configuration](PolicyApi.md#configuration)

### Methods

- [createPolicies](PolicyApi.md#createpolicies)
- [deletePolicy](PolicyApi.md#deletepolicy)
- [getPolicy](PolicyApi.md#getpolicy)
- [listPolicies](PolicyApi.md#listpolicies)
- [updatePolicy](PolicyApi.md#updatepolicy)

## Constructors

### constructor

• **new PolicyApi**(`configuration?`, `basePath?`, `axios?`): [`PolicyApi`](PolicyApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`PolicyApi`](PolicyApi.md)

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/base.ts#L51)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/base.ts#L49)

## Methods

### createPolicies

▸ **createPolicies**(`policyIn`, `options?`): `Promise`\<`AxiosResponse`\<[`PolicyExtended`](../interfaces/PolicyExtended.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `policyIn` | [`PolicyIn`](../interfaces/PolicyIn.md) | Policy to create |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PolicyExtended`](../interfaces/PolicyExtended.md), `any`\>\>

**`Summary`**

Create a policy in a tenant

**`Throws`**

**`Memberof`**

PolicyApi

#### Defined in

[api.ts:5241](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/api.ts#L5241)

___

### deletePolicy

▸ **deletePolicy**(`uuid`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of policy to delete |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete a policy in the tenant

**`Throws`**

**`Memberof`**

PolicyApi

#### Defined in

[api.ts:5253](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/api.ts#L5253)

___

### getPolicy

▸ **getPolicy**(`uuid`, `options?`): `Promise`\<`AxiosResponse`\<[`PolicyExtended`](../interfaces/PolicyExtended.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of policy to get |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PolicyExtended`](../interfaces/PolicyExtended.md), `any`\>\>

**`Summary`**

Get a policy in the tenant

**`Throws`**

**`Memberof`**

PolicyApi

#### Defined in

[api.ts:5265](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/api.ts#L5265)

___

### listPolicies

▸ **listPolicies**(`limit?`, `offset?`, `name?`, `scope?`, `groupName?`, `groupUuid?`, `orderBy?`, `options?`): `Promise`\<`AxiosResponse`\<[`PolicyPagination`](../interfaces/PolicyPagination.md), `any`\>\>

By default, responses are sorted in ascending order by policy name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit?` | `number` | Parameter for selecting the amount of data returned. |
| `offset?` | `number` | Parameter for selecting the offset of data. |
| `name?` | `string` | Parameter for filtering resource by name using string contains search. |
| `scope?` | ``"account"`` \| ``"principal"`` | Parameter for filtering resource by scope. |
| `groupName?` | `string` | Parameter for filtering resource by group name using string contains search. |
| `groupUuid?` | `string` | Parameter for filtering resource by group uuid using UUID exact match. |
| `orderBy?` | ``"modified"`` \| ``"name"`` | Parameter for ordering policies by value. For inverse ordering, supply \&#39;-\&#39; before the param value, such as: ?order_by&#x3D;-name |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PolicyPagination`](../interfaces/PolicyPagination.md), `any`\>\>

**`Summary`**

List the policies in the tenant

**`Throws`**

**`Memberof`**

PolicyApi

#### Defined in

[api.ts:5283](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/api.ts#L5283)

___

### updatePolicy

▸ **updatePolicy**(`uuid`, `policyIn`, `options?`): `Promise`\<`AxiosResponse`\<[`PolicyExtended`](../interfaces/PolicyExtended.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | ID of policy to update |
| `policyIn` | [`PolicyIn`](../interfaces/PolicyIn.md) | Policy to update |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PolicyExtended`](../interfaces/PolicyExtended.md), `any`\>\>

**`Summary`**

Update a policy in the tenant

**`Throws`**

**`Memberof`**

PolicyApi

#### Defined in

[api.ts:5296](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/api.ts#L5296)
