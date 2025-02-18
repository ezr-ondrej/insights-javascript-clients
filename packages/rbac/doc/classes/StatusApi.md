[@redhat-cloud-services/rbac-client](../README.md) / [Exports](../modules.md) / StatusApi

# Class: StatusApi

StatusApi - object-oriented interface

**`Export`**

StatusApi

## Hierarchy

- `BaseAPI`

  ↳ **`StatusApi`**

## Table of contents

### Constructors

- [constructor](StatusApi.md#constructor)

### Properties

- [axios](StatusApi.md#axios)
- [basePath](StatusApi.md#basepath)
- [configuration](StatusApi.md#configuration)

### Methods

- [getStatus](StatusApi.md#getstatus)

## Constructors

### constructor

• **new StatusApi**(`configuration?`, `basePath?`, `axios?`): [`StatusApi`](StatusApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`StatusApi`](StatusApi.md)

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

### getStatus

▸ **getStatus**(`options?`): `Promise`\<`AxiosResponse`\<[`Status`](../interfaces/Status.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Status`](../interfaces/Status.md), `any`\>\>

**`Summary`**

Obtain server status

**`Throws`**

**`Memberof`**

StatusApi

#### Defined in

[api.ts:6321](https://github.com/RedHatInsights/javascript-clients/blob/main/packages/rbac/api.ts#L6321)
