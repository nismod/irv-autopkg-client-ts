/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $JobStatus = {
    description: `Status of a Submitted Job`,
    properties: {
        job_id: {
            type: 'string',
            isRequired: true,
        },
        processor_name: {
            type: 'ProcessorsEnum',
            isRequired: true,
        },
        job_status: {
            type: 'JobStateEnum',
            isRequired: true,
        },
        job_progress: {
            type: 'JobProgress',
        },
        job_result: {
            properties: {
            },
        },
    },
} as const;
