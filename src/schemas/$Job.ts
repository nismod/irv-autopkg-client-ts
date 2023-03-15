/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Job = {
    properties: {
        boundary_name: {
            type: 'string',
            isRequired: true,
        },
        processors: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isRequired: true,
        },
    },
} as const;
