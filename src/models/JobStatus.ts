/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobProgress } from './JobProgress';
import type { JobStateEnum } from './JobStateEnum';
import type { ProcessorsEnum } from './ProcessorsEnum';

/**
 * Status of a Submitted Job
 */
export type JobStatus = {
    job_id: string;
    processor_name: ProcessorsEnum;
    job_status: JobStateEnum;
    job_progress?: JobProgress;
    job_result?: any;
};

