/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Package = {
    description: `Detailed information about a package`,
    properties: {
        boundary_name: {
            type: 'string',
            isRequired: true,
        },
        uri: {
            type: 'string',
            isRequired: true,
        },
        boundary: {
            type: 'Boundary',
            isRequired: true,
        },
        processors: {
            type: 'array',
            contains: {
                type: 'Processor',
            },
            isRequired: true,
        },
        datapackage: {
            type: 'DataPackage',
            isRequired: true,
        },
    },
} as const;
