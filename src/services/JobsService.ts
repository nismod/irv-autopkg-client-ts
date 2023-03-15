/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Job } from '../models/Job';
import type { JobGroupStatus } from '../models/JobGroupStatus';
import type { SubmittedJob } from '../models/SubmittedJob';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class JobsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Status
     * Get status of a DAG associated with a given package
     * @returns JobGroupStatus Successful Response
     * @throws ApiError
     */
    public getStatusV1JobsJobIdGet({
        jobId,
    }: {
        jobId: string,
    }): CancelablePromise<JobGroupStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/jobs/{job_id}',
            path: {
                'job_id': jobId,
            },
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Submit Processing Job
     * Submit a job for a given package to run a list of dataset-processors
     * @returns SubmittedJob Successful Response
     * @throws ApiError
     */
    public submitProcessingJobV1JobsPost({
        requestBody,
        statusCode,
    }: {
        requestBody: Job,
        statusCode?: any,
    }): CancelablePromise<SubmittedJob> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/jobs',
            query: {
                'status_code': statusCode,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
