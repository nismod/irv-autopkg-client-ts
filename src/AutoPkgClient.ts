/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { BoundariesService } from './services/BoundariesService';
import { JobsService } from './services/JobsService';
import { PackagesService } from './services/PackagesService';
import { ProbesService } from './services/ProbesService';
import { ProcessorsService } from './services/ProcessorsService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class AutoPkgClient {

    public readonly boundaries: BoundariesService;
    public readonly jobs: JobsService;
    public readonly packages: PackagesService;
    public readonly probes: ProbesService;
    public readonly processors: ProcessorsService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '/extract',
            VERSION: config?.VERSION ?? '0.1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.boundaries = new BoundariesService(this.request);
        this.jobs = new JobsService(this.request);
        this.packages = new PackagesService(this.request);
        this.probes = new ProbesService(this.request);
        this.processors = new ProcessorsService(this.request);
    }
}

