/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultiPolygon } from './MultiPolygon';
import type { Polygon } from './Polygon';

/**
 * Complete boundary information
 */
export type Boundary = {
    name: string;
    name_long: string;
    admin_level: string;
    geometry: MultiPolygon;
    envelope: Polygon;
};

