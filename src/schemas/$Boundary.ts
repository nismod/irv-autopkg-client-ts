/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Boundary = {
    description: `Complete boundary information`,
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        name_long: {
            type: 'string',
            isRequired: true,
        },
        admin_level: {
            type: 'string',
            isRequired: true,
        },
        geometry: {
            type: 'MultiPolygon',
            isRequired: true,
        },
        envelope: {
            type: 'Polygon',
            isRequired: true,
        },
    },
} as const;
