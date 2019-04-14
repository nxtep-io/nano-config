import { BaseConfigData } from "../BaseConfig";
import { BaseConfigStorage } from "./BaseConfigStorage";
export declare class YamlConfigStorage extends BaseConfigStorage {
    readonly type = "YAML";
    readonly extension = "yaml";
    loadSync(): BaseConfigData;
    dump(data: BaseConfigData, overrideName?: string, overridePath?: string): Promise<void>;
}
