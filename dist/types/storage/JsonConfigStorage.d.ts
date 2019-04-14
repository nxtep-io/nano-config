import { NanoConfigData } from "../NanoConfig";
import { NanoConfigStorage } from "../NanoConfigStorage";
export declare class JsonConfigStorage extends NanoConfigStorage {
    readonly type = "JSON";
    readonly extension = "json";
    loadSync(): NanoConfigData;
    dump(data: NanoConfigData, overrideName?: string, overridePath?: string): Promise<void>;
}
