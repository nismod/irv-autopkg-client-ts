/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Polygon = {
    type: Polygon.type;
    coordinates: Array<Array<Array<number>>>;
    bbox?: Array<number>;
};

export namespace Polygon {

    export enum type {
        POLYGON = 'Polygon',
    }


}

