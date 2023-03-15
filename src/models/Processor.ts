/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProcessorVersionMetadata } from './ProcessorVersionMetadata';

/**
 * Summary information about a Processor
 */
export type Processor = {
    name: string;
    versions: Array<ProcessorVersionMetadata>;
};

