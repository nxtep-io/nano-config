import * as path from 'path';
import * as fs from 'fs-extra';
import * as dotenv from 'dotenv';
import { BaseConfigData } from "../BaseConfig";
import { BaseConfigStorage } from "./BaseConfigStorage";

export class EnvConfigStorage extends BaseConfigStorage {
  readonly type = 'ENV';
  readonly extension = 'env';

  public loadSync(): BaseConfigData {
    const envPath = path.join(this.options.basePath, `${this.options.name}.${this.extension}`);

    if (fs.existsSync(envPath)) {
      // TODO: Pass debug as constructor argument
      const result = dotenv.config({ path: envPath, debug: true });
      
      this.logger.debug(`Environment config loaded successfully from "${this.options.name}.${this.extension}"`, {
        basePath: this.options.basePath,
        result: result.parsed,
      });

      return { ...result.parsed } as BaseConfigData;
    }

    this.logger.warn(`Could not locate environment file at "${this.options.name}.${this.extension}"`);
    return {} as BaseConfigData;
  }

  public async dump(data: BaseConfigData, overrideName?: string, overridePath?: string): Promise<void> {
    const raw: string[] = [];

    for (const key in data) {
      raw.push(`${key}=${data[key]}`);
    }

    return this.write(raw.join('\n'), overrideName, overridePath);
  }
}