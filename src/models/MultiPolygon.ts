/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MultiPolygon = {
    type: MultiPolygon.type;
    coordinates: Array<Array<Array<Array<number>>>>;
    bbox?: Array<number>;
};

export namespace MultiPolygon {

    export enum type {
        MULTI_POLYGON = 'MultiPolygon',
    }


}

