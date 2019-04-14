import { BaseConfigData } from "../BaseConfig";
import { BaseConfigStorage } from "./BaseConfigStorage";
export declare class JsonConfigStorage extends BaseConfigStorage {
    type: string;
    extension: string;
    loadSync(): BaseConfigData;
    dump(data: BaseConfigData, overrideName?: string, overridePath?: string): Promise<void>;
}
