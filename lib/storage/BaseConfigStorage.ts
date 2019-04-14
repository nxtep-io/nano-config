import * as fs from 'fs-extra';
import { Logger, LoggerInstance } from 'nano-errors';
import * as path from 'path';
import { BaseConfigData } from '../BaseConfig';

export interface BaseConfigStorageOptions {
  name: string;
  basePath: string;
  logger?: LoggerInstance;
}

export abstract class BaseConfigStorage {
  public logger: LoggerInstance;
  public abstract type: string;
  public abstract extension: string;

  constructor(public options: BaseConfigStorageOptions) {
    this.logger = options.logger || Logger.getInstance();
  }

  public abstract loadSync(name?: string, path?: string): BaseConfigData;

  public abstract async dump(data: BaseConfigData, name?: string, path?: string): Promise<void>;

  protected readSync(overrideName?: string, overridePath?: string): string | undefined {
    const name = overrideName || this.options.name;
    const fileName = `${name}.${this.extension}`;
    const filePath = path.join(overridePath || this.options.basePath, fileName);

    if (fs.existsSync(filePath)) {
      const result = fs.readFileSync(filePath).toString('utf-8');
      this.logger.debug(`Environment config loaded successfully from "${this.options.name}.env"`, {
        result,
        basePath: this.options.basePath,
      });
      return result;
    }

    this.logger.warn(`Could not locate environment file at "${fileName}"`);
    return undefined;
  }

  protected async write(raw: string, overrideName?: string, overridePath?: string): Promise<void> {
    const name = overrideName || this.options.name;
    const fileName = `${name}.${this.extension}`;
    const filePath = path.join(overridePath || this.options.basePath, fileName);

    await fs.ensureDir(this.options.basePath);
    await fs.ensureFile(filePath);

    this.logger.info(`Writing config file '${name}.${this.extension}'`, { 
      fileName,
      basePath: this.options.basePath 
    });
    
    await fs.writeFile(filePath, raw);
  }
}