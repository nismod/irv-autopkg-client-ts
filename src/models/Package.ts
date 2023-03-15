/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boundary } from './Boundary';
import type { DataPackage } from './DataPackage';
import type { Processor } from './Processor';

/**
 * Detailed information about a package
 */
export type Package = {
    boundary_name: string;
    uri: string;
    boundary: Boundary;
    processors: Array<Processor>;
    datapackage: DataPackage;
};

