/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Package } from '../models/Package';
import type { PackageSummary } from '../models/PackageSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PackagesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Packages
     * Retrieve information on available top-level packages (which are created from boundaries)
     * @returns PackageSummary Successful Response
     * @throws ApiError
     */
    public getPackagesV1PackagesGet(): CancelablePromise<Array<PackageSummary>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/packages',
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * Get Package
     * Retrieve information about a specific package (which has been created from a given boundary)
     * @returns Package Successful Response
     * @throws ApiError
     */
    public getPackageV1PackagesBoundaryNameGet({
        boundaryName,
    }: {
        boundaryName: string,
    }): CancelablePromise<Package> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/packages/{boundary_name}',
            path: {
                'boundary_name': boundaryName,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
