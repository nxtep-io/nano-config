import { NanoConfigData } from "../NanoConfig";
import { NanoConfigStorage } from "../NanoConfigStorage";
export declare class YamlConfigStorage extends NanoConfigStorage {
    readonly type = "YAML";
    readonly extension = "yaml";
    loadSync(): NanoConfigData;
    dump(data: NanoConfigData, overrideName?: string, overridePath?: string): Promise<void>;
}
