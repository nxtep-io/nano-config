import * as dotProp from "dot-prop";
import * as dotenv from "dotenv";
import * as fs from 'fs-extra';
import { Logger, LoggerInstance } from 'nano-errors';
import * as path from 'path';

export interface BaseConfigData {
  [key: string]: any;
}

export interface BaseConfigOptions {
  name: string;
  basePath?: string;
  logger?: LoggerInstance;
  debug?: boolean;
  data?: BaseConfigData;
}

export class BaseConfig {
  protected logger: LoggerInstance;
  protected data: BaseConfigData = {};

  constructor(public options: BaseConfigOptions) {
    this.options.basePath = options.basePath || path.join(process.cwd(), './config/env');
    this.logger = options.logger || Logger.getInstance();
    this.data = options.data || this.data;
  }

  public get<Type = any>(key: string): Type {
    return dotProp.get(this.data, key);
  }

  public loadSync(): boolean {
    const envPath = path.join(this.options.basePath, `${this.options.name}.env`);

    if (fs.existsSync(envPath)) {
      const result = dotenv.config({ path: envPath, debug: !!this.options.debug });
      this.logger.debug(`Environment config loaded successfully from "${this.options.name}.env"`, {
        basePath: this.options.basePath,
        debug: this.options.debug,
        result: result.parsed,
      });
      this.data = { ...this.data, ...result.parsed };
      return true;
    }

    this.logger.warn(`Could not locate environment file at "${this.options.name}.env"`);
    return false;
  }

  public async dump(overrideName?: string) {
    const name = overrideName || this.options.name;
    const filePath = path.join(this.options.basePath, `${name}.env`);

    await fs.ensureDir(this.options.basePath);
    await fs.ensureFile(filePath);

    let raw = "";

    for (const key in this.data) {
      raw += `${key}=${this.data[key]}\n`;
    }

    this.logger.info(`Writing config file "${name}.env"`, { basePath: this.options.basePath });
    await fs.writeFile(filePath, raw);
  }
}
