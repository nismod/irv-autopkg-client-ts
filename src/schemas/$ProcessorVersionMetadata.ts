/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ProcessorVersionMetadata = {
    description: `Detail about a Data Processor`,
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        description: {
            type: 'string',
            isRequired: true,
        },
        version: {
            type: 'string',
            isRequired: true,
        },
        status: {
            type: 'string',
        },
        uri: {
            type: 'string',
        },
        data_author: {
            type: 'string',
            isRequired: true,
        },
        data_title: {
            type: 'string',
            isRequired: true,
        },
        data_title_long: {
            type: 'string',
            isRequired: true,
        },
        data_summary: {
            type: 'string',
            isRequired: true,
        },
        data_citation: {
            type: 'string',
            isRequired: true,
        },
        data_license: {
            properties: {
            },
            isRequired: true,
        },
        data_origin_url: {
            type: 'string',
            isRequired: true,
        },
        data_formats: {
            type: 'array',
            contains: {
                type: 'string',
            },
            isRequired: true,
        },
    },
} as const;
