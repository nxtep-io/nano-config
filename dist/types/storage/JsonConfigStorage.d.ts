import { BaseConfigData } from "../BaseConfig";
import { BaseConfigStorage } from "./BaseConfigStorage";
export declare class JsonConfigStorage extends BaseConfigStorage {
    readonly type = "JSON";
    readonly extension = "json";
    loadSync(): BaseConfigData;
    dump(data: BaseConfigData, overrideName?: string, overridePath?: string): Promise<void>;
}
