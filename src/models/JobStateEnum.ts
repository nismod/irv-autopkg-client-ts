/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Possible Job States
 */
export enum JobStateEnum {
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
    EXECUTING = 'EXECUTING',
    RETRY = 'RETRY',
    SKIPPED = 'SKIPPED',
    REVOKED = 'REVOKED',
}
