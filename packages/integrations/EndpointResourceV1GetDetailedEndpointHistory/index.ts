// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

// @ts-ignore
import type {  } from '../types';


export type EndpointResourceV1GetDetailedEndpointHistoryParams = {
  /**
  * 
  * @type { string }
  * @memberof EndpointResourceV1GetDetailedEndpointHistoryApi
  */
  historyId: string, 
  /**
  * 
  * @type { string }
  * @memberof EndpointResourceV1GetDetailedEndpointHistoryApi
  */
  id: string, 
  options?: AxiosRequestConfig
}

const isEndpointResourceV1GetDetailedEndpointHistoryObjectParams = (params: [EndpointResourceV1GetDetailedEndpointHistoryParams] | unknown[]): params is [EndpointResourceV1GetDetailedEndpointHistoryParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'historyId') && Object.prototype.hasOwnProperty.call(params, 'id')
}
/**
* Retrieves extended information about the outcome of an event notification related to the specified endpoint. Use this endpoint to learn why an event delivery failed.
* @summary Retrieve event notification detail
* @param {EndpointResourceV1GetDetailedEndpointHistoryParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const endpointResourceV1GetDetailedEndpointHistoryParamCreator = async (...config: ([EndpointResourceV1GetDetailedEndpointHistoryParams] | [string, string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isEndpointResourceV1GetDetailedEndpointHistoryObjectParams(config) ? config[0] : ['historyId', 'id', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as EndpointResourceV1GetDetailedEndpointHistoryParams;
    const { historyId, id, options = {} } = params;
    const localVarPath = `/endpoints/{id}/history/{history_id}/details`
        .replace(`{${"history_id"}}`, encodeURIComponent(String(historyId)))
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default endpointResourceV1GetDetailedEndpointHistoryParamCreator;
