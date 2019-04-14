import * as YAML from 'yaml';
import { NanoConfigData } from "../NanoConfig";
import { NanoConfigStorage } from "../NanoConfigStorage";

export class YamlConfigStorage extends NanoConfigStorage {
  readonly type = 'YAML';
  readonly extension = 'yaml';

  public loadSync(): NanoConfigData {
    const raw = this.readSync();
    return raw ? YAML.parse(raw) : {};
  }

  public async dump(data: NanoConfigData, overrideName?: string, overridePath?: string): Promise<void> {
    await this.write(YAML.stringify(data), overrideName, overridePath);
  }
}