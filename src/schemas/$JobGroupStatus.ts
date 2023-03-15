/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $JobGroupStatus = {
    description: `Status of the Processor Group in a submited DAG`,
    properties: {
        job_group_status: {
            type: 'string',
            isRequired: true,
        },
        job_group_percent_complete: {
            type: 'number',
        },
        job_group_processors: {
            type: 'array',
            contains: {
                type: 'JobStatus',
            },
            isRequired: true,
        },
    },
} as const;
