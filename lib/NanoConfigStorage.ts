import * as fs from 'fs-extra';
import { Logger, LoggerInstance } from 'nano-errors';
import * as path from 'path';
import { NanoConfigData } from './NanoConfig';

export interface NanoConfigStorageOptions {
  name: string;
  basePath: string;
  logger?: LoggerInstance;
}

export abstract class NanoConfigStorage {
  public logger: LoggerInstance;
  public abstract readonly type: string;
  public abstract readonly extension: string;

  constructor(public options: NanoConfigStorageOptions) {
    this.logger = options.logger || Logger.getInstance();
  }

  public abstract loadSync(name?: string, path?: string): NanoConfigData;

  public abstract async dump(data: NanoConfigData, name?: string, path?: string): Promise<void>;

  protected readSync(overrideName?: string, overridePath?: string): string | undefined {
    const name = overrideName || this.options.name;
    const fileName = `${name}.${this.extension}`;
    const filePath = path.join(overridePath || this.options.basePath, fileName);

    if (fs.existsSync(filePath)) {
      const result = fs.readFileSync(filePath).toString('utf-8');
      this.logger.debug(`Config file loaded successfully from "${fileName}"`, {
        fileName,
        filePath,
      });
      return result;
    }

    this.logger.warn(`Could not locate config file at "${fileName}"`, {
      fileName,
      filePath,
    });
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