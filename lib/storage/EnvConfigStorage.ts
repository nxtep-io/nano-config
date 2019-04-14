import * as dotenv from 'dotenv';
import { NanoConfigData } from "../NanoConfig";
import { NanoConfigStorage } from "../NanoConfigStorage";

export class EnvConfigStorage extends NanoConfigStorage {
  readonly type = 'ENV';
  readonly extension = 'env';

  public loadSync(): NanoConfigData {
    const raw = this.readSync();
    return raw ? dotenv.parse(raw) : {};
  }

  public async dump(data: NanoConfigData, overrideName?: string, overridePath?: string): Promise<void> {
    const result: string[] = []

    for (const key in data) {
      const line = `${key}=${String(data[key])}`
      result.push(line);
    }

    await this.write(result.join('\n'), overrideName, overridePath);
  }
}