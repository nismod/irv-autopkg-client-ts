/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data Package is a simple specification for data access and delivery.
 */
export type DataPackage = {
    /**
     * The profile of this descriptor.
     */
    profile?: string;
    /**
     * An identifier string. Lower case characters with `.`, `_`, `-` and `/` are allowed.
     */
    name?: string;
    /**
     * A property reserved for globally unique identifiers. Examples of identifiers that are unique include UUIDs and DOIs.
     */
    id?: string;
    /**
     * A human-readable title.
     */
    title?: string;
    /**
     * A text description. Markdown is encouraged.
     */
    description?: string;
    /**
     * The home on the web that is related to this data package.
     */
    homepage?: string;
    /**
     * The datetime on which this descriptor was created.
     */
    created?: string;
    /**
     * The contributors to this descriptor.
     */
    contributors?: Array<any>;
    /**
     * A list of keywords that describe this package.
     */
    keywords?: Array<string>;
    /**
     * A image to represent this package.
     */
    image?: string;
    /**
     * The license(s) under which this package is published.
     */
    licenses?: Array<{
        /**
         * MUST be an Open Definition license identifier, see http://licenses.opendefinition.org/
         */
        name?: string;
        /**
         * A fully qualified URL, or a POSIX file path.
         */
        path?: string;
        /**
         * A human-readable title.
         */
        title?: string;
    }>;
    /**
     * An `array` of Data Resource objects, each compliant with the [Data Resource](/data-resource/) specification.
     */
    resources: Array<{
        /**
         * The profile of this descriptor.
         */
        profile?: string;
        /**
         * An identifier string. Lower case characters with `.`, `_`, `-` and `/` are allowed.
         */
        name?: string;
        /**
         * A reference to the data for this resource, as either a path as a string, or an array of paths as strings. of valid URIs.
         */
        path?: (string | Array<string>);
        /**
         * Inline data for this resource.
         */
        data?: any;
        /**
         * A schema for this resource.
         */
        schema?: string | any;
        /**
         * A human-readable title.
         */
        title?: string;
        /**
         * A text description. Markdown is encouraged.
         */
        description?: string;
        /**
         * The home on the web that is related to this data package.
         */
        homepage?: string;
        /**
         * The raw sources for this resource.
         */
        sources?: Array<{
            /**
             * A human-readable title.
             */
            title: string;
            /**
             * A fully qualified URL, or a POSIX file path.
             */
            path?: string;
            /**
             * An email address.
             */
            email?: string;
        }>;
        /**
         * The license(s) under which the resource is published.
         */
        licenses?: Array<{
            /**
             * MUST be an Open Definition license identifier, see http://licenses.opendefinition.org/
             */
            name?: string;
            /**
             * A fully qualified URL, or a POSIX file path.
             */
            path?: string;
            /**
             * A human-readable title.
             */
            title?: string;
        }>;
        /**
         * The file format of this resource.
         */
        format?: string;
        /**
         * The media type of this resource. Can be any valid media type listed with [IANA](https://www.iana.org/assignments/media-types/media-types.xhtml).
         */
        mediatype?: string;
        /**
         * The file encoding of this resource.
         */
        encoding?: string;
        /**
         * The size of this resource in bytes.
         */
        bytes?: number;
        /**
         * The MD5 hash of this resource. Indicate other hashing algorithms with the {algorithm}:{hash} format.
         */
        hash?: string;
    }>;
    /**
     * The raw sources for this resource.
     */
    sources?: Array<{
        /**
         * A human-readable title.
         */
        title: string;
        /**
         * A fully qualified URL, or a POSIX file path.
         */
        path?: string;
        /**
         * An email address.
         */
        email?: string;
    }>;
};

