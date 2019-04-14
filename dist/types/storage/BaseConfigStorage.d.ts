import { LoggerInstance } from 'nano-errors';
import { BaseConfigData } from '../BaseConfig';
export interface BaseConfigStorageOptions {
    name: string;
    basePath: string;
    logger?: LoggerInstance;
}
export declare abstract class BaseConfigStorage {
    options: BaseConfigStorageOptions;
    logger: LoggerInstance;
    abstract readonly type: string;
    abstract readonly extension: string;
    constructor(options: BaseConfigStorageOptions);
    abstract loadSync(name?: string, path?: string): BaseConfigData;
    abstract dump(data: BaseConfigData, name?: string, path?: string): Promise<void>;
    protected readSync(overrideName?: string, overridePath?: string): string | undefined;
    protected write(raw: string, overrideName?: string, overridePath?: string): Promise<void>;
}
