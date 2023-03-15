/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobProgress } from './JobProgress';

/**
 * Status of a Submitted Job
 */
export type JobStatus = {
    job_id: string;
    processor_name: string;
    job_status: string;
    job_progress?: JobProgress;
    job_result?: any;
};

