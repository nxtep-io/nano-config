import * as convict from 'convict';
import { LoggerInstance } from 'nano-errors';
import { BaseConfigStorage } from './storage';
export interface BaseConfigData {
    [key: string]: any;
}
export interface BaseConfigOptions<Data extends BaseConfigData> {
    name: string;
    basePath?: string;
    logger?: LoggerInstance;
    debug?: boolean;
    storage?: BaseConfigStorage;
    schema?: convict.Schema<Data>;
}
export declare class BaseConfig<Data extends BaseConfigData = {}> {
    options: BaseConfigOptions<Data>;
    protected logger: LoggerInstance;
    protected storage: BaseConfigStorage;
    protected convict: convict.Config<Data>;
    constructor(options: BaseConfigOptions<Data>);
    get<Type = any>(key: string): Type;
    set<Type = any>(key: string, data: Type): void;
    loadSync(): void;
    dump(overrideName?: string, overridePath?: string): Promise<void>;
}
