/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Processor = {
    description: `Summary information about a Processor`,
    properties: {
        name: {
            type: 'string',
            isRequired: true,
        },
        versions: {
            type: 'array',
            contains: {
                type: 'ProcessorVersionMetadata',
            },
            isRequired: true,
        },
    },
} as const;
