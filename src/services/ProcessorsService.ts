/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Processor } from '../models/Processor';
import type { ProcessorVersionMetadata } from '../models/ProcessorVersionMetadata';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProcessorsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Processors
     * Metadata for all available data processors
     * @returns Processor Successful Response
     * @throws ApiError
     */
    public getProcessorsV1ProcessorsGet(): CancelablePromise<Array<Processor>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/processors',
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * Get Processor
     * Metadata for all versions of a single processor
     * @returns Processor Successful Response
     * @throws ApiError
     */
    public getProcessorV1ProcessorsNameGet({
        name,
    }: {
        name: string,
    }): CancelablePromise<Processor> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/processors/{name}',
            path: {
                'name': name,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Processor Version
     * Metadata for a single version of a processor
     * @returns ProcessorVersionMetadata Successful Response
     * @throws ApiError
     */
    public getProcessorVersionV1ProcessorsNameVersionGet({
        name,
        version,
    }: {
        name: string,
        version: string,
    }): CancelablePromise<ProcessorVersionMetadata> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/processors/{name}/{version}',
            path: {
                'name': name,
                'version': version,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
