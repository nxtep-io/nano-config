import { LoggerInstance } from 'nano-errors';
import { BaseConfigStorage } from "./storage";
export interface BaseConfigData {
    [key: string]: any;
}
export interface BaseConfigOptions {
    name: string;
    basePath?: string;
    logger?: LoggerInstance;
    debug?: boolean;
    data?: BaseConfigData;
    storage?: BaseConfigStorage;
}
export declare class BaseConfig {
    options: BaseConfigOptions;
    protected logger: LoggerInstance;
    protected data: BaseConfigData;
    protected storage: BaseConfigStorage;
    constructor(options: BaseConfigOptions);
    get<Type = any>(key: string): Type;
    loadSync(): void;
    dump(overrideName?: string, overridePath?: string): Promise<void>;
}
