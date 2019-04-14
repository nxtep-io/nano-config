import { NanoConfigData } from "../NanoConfig";
import { NanoConfigStorage } from "../NanoConfigStorage";

export class JsonConfigStorage extends NanoConfigStorage {
  readonly type = 'JSON';
  readonly extension = 'json';

  public loadSync(): NanoConfigData {
    const raw = this.readSync();
    return raw ? JSON.parse(raw) : {};
  }

  public async dump(data: NanoConfigData, overrideName?: string, overridePath?: string): Promise<void> {
    await this.write(JSON.stringify(data, null, 2), overrideName, overridePath);
  }
}