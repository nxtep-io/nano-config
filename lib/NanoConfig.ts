import * as convict from 'convict';
import * as dotenv from 'dotenv';
import * as fs from 'fs-extra';
import { Logger, LoggerInstance } from 'nano-errors';
import * as path from 'path';
import { NanoConfigStorage } from './NanoConfigStorage';
import { JsonConfigStorage } from './storage';

export type NanoConfigSchema<Data> = convict.Schema<Data>;

export interface NanoConfigData {
  env?: string;
  [key: string]: any;
}

export interface NanoEnvFile {
  debug?: boolean;
  envName?: string;
  envBasePath?: string
}

export interface NanoConfigOptions<Data extends NanoConfigData = { env?: string }> {
  name: string;
  basePath?: string;
  logger?: LoggerInstance;
  storage?: NanoConfigStorage;
  schema?: Partial<NanoConfigSchema<Data>>
}

export class NanoConfig<Data extends NanoConfigData = { env?: string }> {
  public logger: LoggerInstance;
  protected storage: NanoConfigStorage;
  protected convict: convict.Config<Data>;

  constructor(public options: NanoConfigOptions<Data>) {
    this.options.basePath = options.basePath || path.join(process.cwd(), './config/env');
    this.logger = options.logger || Logger.getInstance();

    // Prepare configuratino storage
    this.storage = options.storage || new JsonConfigStorage({
      logger: this.logger,
      name: this.options.name,
      basePath: this.options.basePath
    });

    // Prepare configuration convict
    this.convict = convict<Data>(this.options.schema as any || {
      env: {
        doc: '',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV'
      },
    });
  }

  public static environment<Data extends NanoConfigData = { env?: string }>
    (options: NanoConfigOptions<Data> & NanoEnvFile): NanoConfig<Data> {
    const envBasePath = options.envBasePath || options.basePath || process.cwd();
    const envName = `${options.envName || options.name}.env`;
    const envFullPath = path.join(envBasePath, envName);

    // Ensure file exists before trying to laod it
    if (fs.existsSync(envFullPath)) {
      const result = dotenv.config({ path: envFullPath, debug: options.debug });
      const config = new this(options);

      config.logger.debug(`Environment config loaded successfully from "${config.options.name}.env"`, {
        envName,
        envBasePath,
        env: result.parsed,
      });

      return config;
    };

    // Initialize an empty config
    const config = new this(options);
    config.logger.warn(`Could not locate environment file at "${config.options.name}.env"`);
    return config;
  }

  public get(key?: string): Data;
  public get<Type = any>(key: string): Type {
    return this.convict.get(key);
  }

  public set<Type = any>(key: string, data: Type): void {
    this.convict.set(key, data as any);
    this.convict.validate({ allowed: 'warn' })
  }

  public loadSync(): void {
    this.convict.load(this.storage.loadSync());
  }

  public async dump(overrideName?: string, overridePath?: string): Promise<void> {
    await this.storage.dump(this.convict.get(), overrideName, overridePath);
  }
}
