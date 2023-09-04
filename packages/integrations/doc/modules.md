[@redhat-cloud-services/integrations-client](README.md) / Exports

# @redhat-cloud-services/integrations-client

## Table of contents

### Enumerations

- [EmailSubscriptionType](enums/EmailSubscriptionType.md)
- [EndpointStatus](enums/EndpointStatus.md)
- [EndpointType](enums/EndpointType.md)
- [Environment](enums/Environment.md)
- [EventLogEntryActionStatus](enums/EventLogEntryActionStatus.md)
- [HttpType](enums/HttpType.md)
- [NotificationStatus](enums/NotificationStatus.md)
- [Status](enums/Status.md)

### Classes

- [BaseAPI](classes/BaseAPI.md)
- [Configuration](classes/Configuration.md)
- [RequiredError](classes/RequiredError.md)

### Interfaces

- [AddAccessRequest](interfaces/AddAccessRequest.md)
- [AddApplicationRequest](interfaces/AddApplicationRequest.md)
- [AggregationEmailTemplate](interfaces/AggregationEmailTemplate.md)
- [ApiConfig](interfaces/ApiConfig.md)
- [Application](interfaces/Application.md)
- [Application1](interfaces/Application1.md)
- [ApplicationSettingsValue](interfaces/ApplicationSettingsValue.md)
- [BasicAuthentication](interfaces/BasicAuthentication.md)
- [BehaviorGroup](interfaces/BehaviorGroup.md)
- [BehaviorGroupAction](interfaces/BehaviorGroupAction.md)
- [BehaviorGroupActionId](interfaces/BehaviorGroupActionId.md)
- [Bundle](interfaces/Bundle.md)
- [BundleSettingsValue](interfaces/BundleSettingsValue.md)
- [CamelProperties](interfaces/CamelProperties.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [CreateBehaviorGroupRequest](interfaces/CreateBehaviorGroupRequest.md)
- [CreateBehaviorGroupResponse](interfaces/CreateBehaviorGroupResponse.md)
- [CurrentStatus](interfaces/CurrentStatus.md)
- [DuplicateNameMigrationReport](interfaces/DuplicateNameMigrationReport.md)
- [Endpoint](interfaces/Endpoint.md)
- [EndpointPage](interfaces/EndpointPage.md)
- [EventLogEntry](interfaces/EventLogEntry.md)
- [EventLogEntryAction](interfaces/EventLogEntryAction.md)
- [EventType](interfaces/EventType.md)
- [EventTypeBehavior](interfaces/EventTypeBehavior.md)
- [EventTypeBehaviorId](interfaces/EventTypeBehaviorId.md)
- [Facet](interfaces/Facet.md)
- [InstantEmailTemplate](interfaces/InstantEmailTemplate.md)
- [InternalApplicationUserPermission](interfaces/InternalApplicationUserPermission.md)
- [InternalRoleAccess](interfaces/InternalRoleAccess.md)
- [InternalUserPermissions](interfaces/InternalUserPermissions.md)
- [MessageValidationResponse](interfaces/MessageValidationResponse.md)
- [Meta](interfaces/Meta.md)
- [NotificationHistory](interfaces/NotificationHistory.md)
- [PageBehaviorGroup](interfaces/PageBehaviorGroup.md)
- [PageEventLogEntry](interfaces/PageEventLogEntry.md)
- [PageEventType](interfaces/PageEventType.md)
- [PageNotificationHistory](interfaces/PageNotificationHistory.md)
- [RenderEmailTemplateRequest](interfaces/RenderEmailTemplateRequest.md)
- [RequestArgs](interfaces/RequestArgs.md)
- [RequestDefaultBehaviorGroupPropertyList](interfaces/RequestDefaultBehaviorGroupPropertyList.md)
- [RequestSystemSubscriptionProperties](interfaces/RequestSystemSubscriptionProperties.md)
- [ServerInfo](interfaces/ServerInfo.md)
- [SettingsValues](interfaces/SettingsValues.md)
- [SystemSubscriptionProperties](interfaces/SystemSubscriptionProperties.md)
- [Template](interfaces/Template.md)
- [TriggerDailyDigestRequest](interfaces/TriggerDailyDigestRequest.md)
- [UpdateBehaviorGroupRequest](interfaces/UpdateBehaviorGroupRequest.md)
- [UserConfigPreferences](interfaces/UserConfigPreferences.md)
- [WebhookProperties](interfaces/WebhookProperties.md)

### Type Aliases

- [ActionType](modules.md#actiontype)
- [AuthTypeEnum](modules.md#authtypeenum)

### Variables

- [AuthTypeEnum](modules.md#authtypeenum-1)
- [BASE\_PATH](modules.md#base_path)
- [COLLECTION\_FORMATS](modules.md#collection_formats)
- [DUMMY\_BASE\_URL](modules.md#dummy_base_url)

### Functions

- [APIFactory](modules.md#apifactory)
- [assertParamExists](modules.md#assertparamexists)
- [createRequestFunction](modules.md#createrequestfunction)
- [endpointResourceV1CreateEndpointParamCreator](modules.md#endpointresourcev1createendpointparamcreator)
- [endpointResourceV1DeleteEndpointParamCreator](modules.md#endpointresourcev1deleteendpointparamcreator)
- [endpointResourceV1DisableEndpointParamCreator](modules.md#endpointresourcev1disableendpointparamcreator)
- [endpointResourceV1EnableEndpointParamCreator](modules.md#endpointresourcev1enableendpointparamcreator)
- [endpointResourceV1GetDetailedEndpointHistoryParamCreator](modules.md#endpointresourcev1getdetailedendpointhistoryparamcreator)
- [endpointResourceV1GetEndpointHistoryParamCreator](modules.md#endpointresourcev1getendpointhistoryparamcreator)
- [endpointResourceV1GetEndpointParamCreator](modules.md#endpointresourcev1getendpointparamcreator)
- [endpointResourceV1GetEndpointsParamCreator](modules.md#endpointresourcev1getendpointsparamcreator)
- [endpointResourceV1GetOrCreateDrawerSubscriptionEndpointParamCreator](modules.md#endpointresourcev1getorcreatedrawersubscriptionendpointparamcreator)
- [endpointResourceV1GetOrCreateEmailSubscriptionEndpointParamCreator](modules.md#endpointresourcev1getorcreateemailsubscriptionendpointparamcreator)
- [endpointResourceV1SubscribeEmailParamCreator](modules.md#endpointresourcev1subscribeemailparamcreator)
- [endpointResourceV1TestEndpointParamCreator](modules.md#endpointresourcev1testendpointparamcreator)
- [endpointResourceV1UnsubscribeEmailParamCreator](modules.md#endpointresourcev1unsubscribeemailparamcreator)
- [endpointResourceV1UpdateEndpointParamCreator](modules.md#endpointresourcev1updateendpointparamcreator)
- [serializeDataIfNeeded](modules.md#serializedataifneeded)
- [setApiKeyToObject](modules.md#setapikeytoobject)
- [setBasicAuthToObject](modules.md#setbasicauthtoobject)
- [setBearerAuthToObject](modules.md#setbearerauthtoobject)
- [setOAuthToObject](modules.md#setoauthtoobject)
- [setSearchParams](modules.md#setsearchparams)
- [toPathString](modules.md#topathstring)

## Type Aliases

### ActionType

Ƭ **ActionType**: (...`config`: `any`) => `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Type declaration

▸ (...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...config` | `any` |

##### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/utils/base.ts:55](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/base.ts#L55)

___

### AuthTypeEnum

Ƭ **AuthTypeEnum**: typeof [`AuthTypeEnum`](modules.md#authtypeenum-1)[keyof typeof [`AuthTypeEnum`](modules.md#authtypeenum-1)]

#### Defined in

[packages/integrations/utils/base.ts:45](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/base.ts#L45)

[packages/integrations/utils/base.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/base.ts#L53)

## Variables

### AuthTypeEnum

• `Const` **AuthTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Basic` | ``"basic"`` |
| `Bearer` | ``"bearer"`` |
| `InHeader` | ``"inHeader"`` |
| `InQuery` | ``"inQuery"`` |
| `Oauth` | ``"oath"`` |

#### Defined in

[packages/integrations/utils/base.ts:45](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/base.ts#L45)

[packages/integrations/utils/base.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/base.ts#L53)

___

### BASE\_PATH

• `Const` **BASE\_PATH**: `string`

#### Defined in

[packages/integrations/utils/base.ts:12](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/base.ts#L12)

___

### COLLECTION\_FORMATS

• `Const` **COLLECTION\_FORMATS**: `Object`

**`Export`**

#### Type declaration

| Name | Type |
| :------ | :------ |
| `csv` | `string` |
| `pipes` | `string` |
| `ssv` | `string` |
| `tsv` | `string` |

#### Defined in

[packages/integrations/utils/base.ts:18](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/base.ts#L18)

___

### DUMMY\_BASE\_URL

• `Const` **DUMMY\_BASE\_URL**: ``"https://example.com"``

**`Export`**

#### Defined in

[packages/integrations/utils/common.ts:13](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/common.ts#L13)

## Functions

### APIFactory

▸ **APIFactory**<`T`\>(`basePath?`, `config?`, `actions`): [`BaseAPI`](classes/BaseAPI.md) & `T`

Factory for creating API with option to add enpoints to the API.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, [`ActionType`](modules.md#actiontype)\> |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `basePath` | `string` | `BASE_PATH` | basePath of api requests. |
| `config` | [`ApiConfig`](interfaces/ApiConfig.md) | `undefined` | to be passed down to axios. |
| `actions` | `T` | `undefined` | object with actions to send with axios. |

#### Returns

[`BaseAPI`](classes/BaseAPI.md) & `T`

created base API.

#### Defined in

[packages/integrations/utils/base.ts:145](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/base.ts#L145)

___

### assertParamExists

▸ **assertParamExists**(`functionName`, `paramName`, `paramValue`): `void`

**`Throws`**

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | `string` |
| `paramName` | `string` |
| `paramValue` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/integrations/utils/common.ts:20](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/common.ts#L20)

___

### createRequestFunction

▸ **createRequestFunction**(`axiosArgs`, `globalAxios`, `BASE_PATH`, `configuration?`): <T, R\>(`axios`: `AxiosInstance`, `basePath`: `string`) => `Promise`<`R`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `axiosArgs` | [`RequestArgs`](interfaces/RequestArgs.md) |
| `globalAxios` | `AxiosInstance` |
| `BASE_PATH` | `string` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`fn`

▸ <`T`, `R`\>(`axios?`, `basePath?`): `Promise`<`R`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `R` | `AxiosResponse`<`T`, `any`\> |

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `axios` | `AxiosInstance` | `globalAxios` |
| `basePath` | `string` | `BASE_PATH` |

##### Returns

`Promise`<`R`\>

#### Defined in

[packages/integrations/utils/common.ts:133](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/common.ts#L133)

___

### endpointResourceV1CreateEndpointParamCreator

▸ **endpointResourceV1CreateEndpointParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Create a new endpoint from the passed data

**`Summary`**

Create a new endpoint

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1CreateEndpointParams`] \| [[`Endpoint`](interfaces/Endpoint.md), `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1CreateEndpoint/index.ts:34](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1CreateEndpoint/index.ts#L34)

___

### endpointResourceV1DeleteEndpointParamCreator

▸ **endpointResourceV1DeleteEndpointParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1DeleteEndpointParams`] \| [`string`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1DeleteEndpoint/index.ts:33](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1DeleteEndpoint/index.ts#L33)

___

### endpointResourceV1DisableEndpointParamCreator

▸ **endpointResourceV1DisableEndpointParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`EndpointResourceV1DisableEndpointParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1DisableEndpoint/index.ts:33](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1DisableEndpoint/index.ts#L33)

___

### endpointResourceV1EnableEndpointParamCreator

▸ **endpointResourceV1EnableEndpointParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`EndpointResourceV1EnableEndpointParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1EnableEndpoint/index.ts:33](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1EnableEndpoint/index.ts#L33)

___

### endpointResourceV1GetDetailedEndpointHistoryParamCreator

▸ **endpointResourceV1GetDetailedEndpointHistoryParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1GetDetailedEndpointHistoryParams`] \| [`string`, `string`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1GetDetailedEndpointHistory/index.ts:39](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1GetDetailedEndpointHistory/index.ts#L39)

___

### endpointResourceV1GetEndpointHistoryParamCreator

▸ **endpointResourceV1GetEndpointHistoryParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1GetEndpointHistoryParams`] \| [`string`, `number`, `number`, `boolean`, `number`, `string`, `string`, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1GetEndpointHistory/index.ts:69](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1GetEndpointHistory/index.ts#L69)

___

### endpointResourceV1GetEndpointParamCreator

▸ **endpointResourceV1GetEndpointParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`EndpointResourceV1GetEndpointParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1GetEndpoint/index.ts:33](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1GetEndpoint/index.ts#L33)

___

### endpointResourceV1GetEndpointsParamCreator

▸ **endpointResourceV1GetEndpointsParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

Get a list of endpoints filtered down by the passed parameters.

**`Summary`**

List endpoints

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1GetEndpointsParams`] \| [`number`, `number`, `boolean`, `string`, `number`, `string`, `string`, `string`[], `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1GetEndpoints/index.ts:76](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1GetEndpoints/index.ts#L76)

___

### endpointResourceV1GetOrCreateDrawerSubscriptionEndpointParamCreator

▸ **endpointResourceV1GetOrCreateDrawerSubscriptionEndpointParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1GetOrCreateDrawerSubscriptionEndpointParams`] \| [[`RequestSystemSubscriptionProperties`](interfaces/RequestSystemSubscriptionProperties.md), `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint/index.ts:33](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1GetOrCreateDrawerSubscriptionEndpoint/index.ts#L33)

___

### endpointResourceV1GetOrCreateEmailSubscriptionEndpointParamCreator

▸ **endpointResourceV1GetOrCreateEmailSubscriptionEndpointParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [[`RequestSystemSubscriptionProperties`](interfaces/RequestSystemSubscriptionProperties.md), `AxiosRequestConfig`<`any`\>] \| [`EndpointResourceV1GetOrCreateEmailSubscriptionEndpointParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint/index.ts:33](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1GetOrCreateEmailSubscriptionEndpoint/index.ts#L33)

___

### endpointResourceV1SubscribeEmailParamCreator

▸ **endpointResourceV1SubscribeEmailParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Deprecated`**

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1SubscribeEmailParams`] \| [`string`, `string`, ``"DAILY"``, `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1SubscribeEmail/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1SubscribeEmail/index.ts#L46)

___

### endpointResourceV1TestEndpointParamCreator

▸ **endpointResourceV1TestEndpointParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `AxiosRequestConfig`<`any`\>] \| [`EndpointResourceV1TestEndpointParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1TestEndpoint/index.ts:33](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1TestEndpoint/index.ts#L33)

___

### endpointResourceV1UnsubscribeEmailParamCreator

▸ **endpointResourceV1UnsubscribeEmailParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Deprecated`**

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`string`, `string`, ``"DAILY"``, `AxiosRequestConfig`<`any`\>] \| [`EndpointResourceV1UnsubscribeEmailParams`] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1UnsubscribeEmail/index.ts:46](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1UnsubscribeEmail/index.ts#L46)

___

### endpointResourceV1UpdateEndpointParamCreator

▸ **endpointResourceV1UpdateEndpointParamCreator**(...`config`): `Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

**`Throws`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...config` | [`EndpointResourceV1UpdateEndpointParams`] \| [`string`, [`Endpoint`](interfaces/Endpoint.md), `AxiosRequestConfig`<`any`\>] | with all available params. |

#### Returns

`Promise`<[`RequestArgs`](interfaces/RequestArgs.md)\>

#### Defined in

[packages/integrations/EndpointResourceV1UpdateEndpoint/index.ts:39](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/EndpointResourceV1UpdateEndpoint/index.ts#L39)

___

### serializeDataIfNeeded

▸ **serializeDataIfNeeded**(`value`, `requestOptions`, `configuration?`): `any`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `requestOptions` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`any`

#### Defined in

[packages/integrations/utils/common.ts:111](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/common.ts#L111)

___

### setApiKeyToObject

▸ **setApiKeyToObject**(`object`, `keyParamName`, `configuration?`): `Promise`<`void`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `keyParamName` | `string` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/integrations/utils/common.ts:30](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/common.ts#L30)

___

### setBasicAuthToObject

▸ **setBasicAuthToObject**(`object`, `configuration?`): `void`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`void`

#### Defined in

[packages/integrations/utils/common.ts:43](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/common.ts#L43)

___

### setBearerAuthToObject

▸ **setBearerAuthToObject**(`object`, `configuration?`): `Promise`<`void`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/integrations/utils/common.ts:53](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/common.ts#L53)

___

### setOAuthToObject

▸ **setOAuthToObject**(`object`, `name`, `scopes`, `configuration?`): `Promise`<`void`\>

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `name` | `string` |
| `scopes` | `string`[] |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/integrations/utils/common.ts:66](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/common.ts#L66)

___

### setSearchParams

▸ **setSearchParams**(`url`, ...`objects`): `void`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `...objects` | `any`[] |

#### Returns

`void`

#### Defined in

[packages/integrations/utils/common.ts:101](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/common.ts#L101)

___

### toPathString

▸ **toPathString**(`url`): `string`

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`string`

#### Defined in

[packages/integrations/utils/common.ts:125](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/integrations/utils/common.ts#L125)