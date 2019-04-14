import { NanoConfigData } from "../NanoConfig";
import { NanoConfigStorage } from "../NanoConfigStorage";
export declare class EnvConfigStorage extends NanoConfigStorage {
    readonly type = "ENV";
    readonly extension = "env";
    loadSync(): NanoConfigData;
    dump(data: NanoConfigData, overrideName?: string, overridePath?: string): Promise<void>;
}
