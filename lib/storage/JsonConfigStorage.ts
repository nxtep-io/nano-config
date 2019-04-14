import { BaseConfigData } from "../BaseConfig";
import { BaseConfigStorage } from "./BaseConfigStorage";

export class JsonConfigStorage extends BaseConfigStorage {
  type = 'JSON';
  extension = 'json';

  public loadSync(): BaseConfigData {
    const raw = this.readSync();
    return raw ? JSON.parse(raw) : {};
  }

  public async dump(data: BaseConfigData, overrideName?: string, overridePath?: string): Promise<void> {
    await this.write(JSON.stringify(data, null, 2), overrideName, overridePath);
  }
}