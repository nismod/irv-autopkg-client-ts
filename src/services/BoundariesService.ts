/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Boundary } from '../models/Boundary';
import type { BoundarySummary } from '../models/BoundarySummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BoundariesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get All Boundary Summaries
     * Retrieve summary information on available boundaries
     * @returns BoundarySummary Successful Response
     * @throws ApiError
     */
    public getAllBoundarySummariesV1BoundariesGet(): CancelablePromise<Array<BoundarySummary>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/boundaries',
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * Search Boundary
     * Search for boundaries by name or coordinates.
     * @returns BoundarySummary Successful Response
     * @throws ApiError
     */
    public searchBoundaryV1BoundariesSearchGet({
        name,
        latitude,
        longitude,
    }: {
        name?: string,
        latitude?: number,
        longitude?: number,
    }): CancelablePromise<Array<BoundarySummary>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/boundaries/search',
            query: {
                'name': name,
                'latitude': latitude,
                'longitude': longitude,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Boundary By Name
     * Retrieved detailed information on a specific boundary
     * @returns Boundary Successful Response
     * @throws ApiError
     */
    public getBoundaryByNameV1BoundariesNameGet({
        name,
    }: {
        name: string,
    }): CancelablePromise<Boundary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/boundaries/{name}',
            path: {
                'name': name,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
