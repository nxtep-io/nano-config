import * as dotProp from "dot-prop";
import * as dotenv from "dotenv";
import { Logger, LoggerInstance } from 'nano-errors';
import * as fs from 'fs-extra';
import * as path from 'path';
import { BaseConfigStorage, EnvConfigStorage } from "./storage";

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

export class BaseConfig {
  protected logger: LoggerInstance;
  protected data: BaseConfigData = {};
  protected storage: BaseConfigStorage;

  constructor(public options: BaseConfigOptions) {
    this.options.basePath = options.basePath || path.join(process.cwd(), './config/env');
    this.logger = options.logger || Logger.getInstance();
    this.data = options.data || this.data;
    this.storage = options.storage || new EnvConfigStorage({ 
      logger: this.logger,
      name: this.options.name,
      basePath: this.options.basePath 
    });
  }

  public get<Type = any>(key: string): Type {
    return dotProp.get(this.data, key);
  }

  public loadSync(): void {
    this.data = this.storage.loadSync();
  }

  public async dump(overrideName?: string, overridePath?: string): Promise<void> {
    await this.storage.dump(this.data, overrideName, overridePath);
  }
}
