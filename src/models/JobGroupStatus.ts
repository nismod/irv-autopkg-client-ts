/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobStatus } from './JobStatus';

/**
 * Status of the Processor Group in a submited DAG
 */
export type JobGroupStatus = {
    job_group_status: string;
    job_group_percent_complete?: number;
    job_group_processors: Array<JobStatus>;
};

