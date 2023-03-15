/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataPackage = {
    description: `Data Package is a simple specification for data access and delivery.`,
    properties: {
        profile: {
            type: 'string',
            description: `The profile of this descriptor.`,
        },
        name: {
            type: 'string',
            description: `An identifier string. Lower case characters with \`.\`, \`_\`, \`-\` and \`/\` are allowed.`,
            pattern: '^([-a-z0-9._/])+$',
        },
        id: {
            type: 'string',
            description: `A property reserved for globally unique identifiers. Examples of identifiers that are unique include UUIDs and DOIs.`,
        },
        title: {
            type: 'string',
            description: `A human-readable title.`,
        },
        description: {
            type: 'string',
            description: `A text description. Markdown is encouraged.`,
            format: 'textarea',
        },
        homepage: {
            type: 'string',
            description: `The home on the web that is related to this data package.`,
            format: 'uri',
        },
        created: {
            type: 'string',
            description: `The datetime on which this descriptor was created.`,
            format: 'date-time',
        },
        contributors: {
            type: 'array',
            contains: {
                description: `A contributor to this descriptor.`,
                properties: {
                },
            },
        },
        keywords: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        image: {
            type: 'string',
            description: `A image to represent this package.`,
        },
        licenses: {
            type: 'array',
            contains: {
                type: 'any-of',
                description: `A license for this descriptor.`,
                contains: [{
                    properties: {
                        name: {
                            type: 'string',
                            description: `MUST be an Open Definition license identifier, see http://licenses.opendefinition.org/`,
                            pattern: '^([-a-zA-Z0-9._])+$',
                        },
                        path: {
                            type: 'string',
                            description: `A fully qualified URL, or a POSIX file path.`,
                            pattern: '^(?=^[^./~])(^((?!\\.{2}).)*$).*$',
                        },
                        title: {
                            type: 'string',
                            description: `A human-readable title.`,
                        },
                    },
                }],
            },
        },
        resources: {
            type: 'array',
            contains: {
                type: 'one-of',
                description: `Data Resource.`,
                contains: [{
                    properties: {
                        profile: {
                            type: 'string',
                            description: `The profile of this descriptor.`,
                        },
                        name: {
                            type: 'string',
                            description: `An identifier string. Lower case characters with \`.\`, \`_\`, \`-\` and \`/\` are allowed.`,
                            pattern: '^([-a-z0-9._/])+$',
                        },
                        path: {
                            type: 'one-of',
                            description: `A reference to the data for this resource, as either a path as a string, or an array of paths as strings. of valid URIs.`,
                            contains: [{
                                type: 'string',
                                description: `A fully qualified URL, or a POSIX file path.`,
                                pattern: '^(?=^[^./~])(^((?!\\.{2}).)*$).*$',
                            }, {
                                type: 'array',
                                contains: {
                                    type: 'string',
                                    description: `A fully qualified URL, or a POSIX file path.`,
                                    pattern: '^(?=^[^./~])(^((?!\\.{2}).)*$).*$',
                                },
                            }],
                        },
                        data: {
                            description: `Inline data for this resource.`,
                            properties: {
                            },
                        },
                        schema: {
                            type: 'string | any',
                            description: `A schema for this resource.`,
                        },
                        title: {
                            type: 'string',
                            description: `A human-readable title.`,
                        },
                        description: {
                            type: 'string',
                            description: `A text description. Markdown is encouraged.`,
                            format: 'textarea',
                        },
                        homepage: {
                            type: 'string',
                            description: `The home on the web that is related to this data package.`,
                            format: 'uri',
                        },
                        sources: {
                            type: 'array',
                            contains: {
                                description: `A source file.`,
                                properties: {
                                    title: {
                                        type: 'string',
                                        description: `A human-readable title.`,
                                        isRequired: true,
                                    },
                                    path: {
                                        type: 'string',
                                        description: `A fully qualified URL, or a POSIX file path.`,
                                        pattern: '^(?=^[^./~])(^((?!\\.{2}).)*$).*$',
                                    },
                                    email: {
                                        type: 'string',
                                        description: `An email address.`,
                                        format: 'email',
                                    },
                                },
                            },
                        },
                        licenses: {
                            type: 'array',
                            contains: {
                                type: 'any-of',
                                description: `A license for this descriptor.`,
                                contains: [{
                                    properties: {
                                        name: {
                                            type: 'string',
                                            description: `MUST be an Open Definition license identifier, see http://licenses.opendefinition.org/`,
                                            pattern: '^([-a-zA-Z0-9._])+$',
                                        },
                                        path: {
                                            type: 'string',
                                            description: `A fully qualified URL, or a POSIX file path.`,
                                            pattern: '^(?=^[^./~])(^((?!\\.{2}).)*$).*$',
                                        },
                                        title: {
                                            type: 'string',
                                            description: `A human-readable title.`,
                                        },
                                    },
                                }],
                            },
                        },
                        format: {
                            type: 'string',
                            description: `The file format of this resource.`,
                        },
                        mediatype: {
                            type: 'string',
                            description: `The media type of this resource. Can be any valid media type listed with [IANA](https://www.iana.org/assignments/media-types/media-types.xhtml).`,
                            pattern: '^(.+)/(.+)$',
                        },
                        encoding: {
                            type: 'string',
                            description: `The file encoding of this resource.`,
                        },
                        bytes: {
                            type: 'number',
                            description: `The size of this resource in bytes.`,
                        },
                        hash: {
                            type: 'string',
                            description: `The MD5 hash of this resource. Indicate other hashing algorithms with the {algorithm}:{hash} format.`,
                            pattern: '^([^:]+:[a-fA-F0-9]+|[a-fA-F0-9]{32}|)$',
                        },
                    },
                }],
            },
            isRequired: true,
        },
        sources: {
            type: 'array',
            contains: {
                description: `A source file.`,
                properties: {
                    title: {
                        type: 'string',
                        description: `A human-readable title.`,
                        isRequired: true,
                    },
                    path: {
                        type: 'string',
                        description: `A fully qualified URL, or a POSIX file path.`,
                        pattern: '^(?=^[^./~])(^((?!\\.{2}).)*$).*$',
                    },
                    email: {
                        type: 'string',
                        description: `An email address.`,
                        format: 'email',
                    },
                },
            },
        },
    },
} as const;
