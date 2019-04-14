import * as convict from 'convict';
import { LoggerInstance } from 'nano-errors';
import { NanoConfigStorage } from './NanoConfigStorage';
export declare type NanoConfigSchema<Data> = convict.Schema<Data>;
export interface NanoConfigData {
    env?: string;
    [key: string]: any;
}
export interface NanoEnvFile {
    debug?: boolean;
    envName?: string;
    envBasePath?: string;
}
export interface NanoConfigOptions<Data extends NanoConfigData = {
    env?: string;
}> {
    name: string;
    basePath?: string;
    logger?: LoggerInstance;
    storage?: NanoConfigStorage;
    schema?: Partial<NanoConfigSchema<Data>>;
}
export declare class NanoConfig<Data extends NanoConfigData = {
    env?: string;
}> {
    options: NanoConfigOptions<Data>;
    logger: LoggerInstance;
    protected storage: NanoConfigStorage;
    protected convict: convict.Config<Data>;
    constructor(options: NanoConfigOptions<Data>);
    static environment<Data extends NanoConfigData = {
        env?: string;
    }>(options: NanoConfigOptions<Data> & NanoEnvFile): NanoConfig<Data>;
    get(key?: string): Data;
    set<Type = any>(key: string, data: Type): void;
    loadSync(): void;
    dump(overrideName?: string, overridePath?: string): Promise<void>;
}
