/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $JobProgress = {
    description: `Specifics about the progress of an individual Processors Job`,
    properties: {
        percent_complete: {
            type: 'number',
        },
        current_task: {
            type: 'string',
        },
    },
} as const;
