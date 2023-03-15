/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PackageSummary = {
    description: `Summary information about a top-level package (which is formed from a boundary)`,
    properties: {
        boundary_name: {
            type: 'string',
            isRequired: true,
        },
        uri: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;
