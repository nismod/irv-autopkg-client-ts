/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Detail about a Data Processor
 */
export type ProcessorVersionMetadata = {
    name: string;
    description: string;
    version: string;
    status?: string;
    uri?: string;
    data_author: string;
    data_title: string;
    data_title_long: string;
    data_summary: string;
    data_citation: string;
    data_license: any;
    data_origin_url: string;
    data_formats: Array<string>;
};

