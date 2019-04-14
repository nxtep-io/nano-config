import * as YAML from 'yaml';
import { BaseConfigData } from "../BaseConfig";
import { BaseConfigStorage } from "./BaseConfigStorage";

export class YamlConfigStorage extends BaseConfigStorage {
  readonly type = 'YAML';
  readonly extension = 'yaml';

  public loadSync(): BaseConfigData {
    const raw = this.readSync();
    return raw ? YAML.parse(raw) : {};
  }

  public async dump(data: BaseConfigData, overrideName?: string, overridePath?: string): Promise<void> {
    await this.write(YAML.stringify(data), overrideName, overridePath);
  }
}