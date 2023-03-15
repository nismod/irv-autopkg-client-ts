/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Polygon = {
    properties: {
        type: {
            type: 'Enum',
            isRequired: true,
        },
        coordinates: {
            type: 'array',
            contains: {
                type: 'array',
                contains: {
                    type: 'array',
                    contains: {
                        type: 'number',
                    },
                },
            },
            isRequired: true,
        },
        bbox: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
    },
} as const;
