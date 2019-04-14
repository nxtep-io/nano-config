import { LoggerInstance } from 'nano-errors';
import { NanoConfigData } from './NanoConfig';
export interface NanoConfigStorageOptions {
    name: string;
    basePath: string;
    logger?: LoggerInstance;
}
export declare abstract class NanoConfigStorage {
    options: NanoConfigStorageOptions;
    logger: LoggerInstance;
    abstract readonly type: string;
    abstract readonly extension: string;
    constructor(options: NanoConfigStorageOptions);
    abstract loadSync(name?: string, path?: string): NanoConfigData;
    abstract dump(data: NanoConfigData, name?: string, path?: string): Promise<void>;
    protected readSync(overrideName?: string, overridePath?: string): string | undefined;
    protected write(raw: string, overrideName?: string, overridePath?: string): Promise<void>;
}
