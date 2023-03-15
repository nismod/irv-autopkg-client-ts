/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProbesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Liveness
     * API Liveness Route
     * @returns any Successful Response
     * @throws ApiError
     */
    public getLivenessV1LivenessGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/liveness',
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * Get Readiness
     * API Readiness Route, inc. DB check
     * @returns any Successful Response
     * @throws ApiError
     */
    public getReadinessV1ReadinessGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/readiness',
            errors: {
                404: `Not found`,
            },
        });
    }

}
