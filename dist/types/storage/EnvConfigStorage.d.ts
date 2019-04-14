import { BaseConfigData } from "../BaseConfig";
import { BaseConfigStorage } from "./BaseConfigStorage";
export declare class EnvConfigStorage extends BaseConfigStorage {
    readonly type = "ENV";
    readonly extension = "env";
    loadSync(): BaseConfigData;
    dump(data: BaseConfigData, overrideName?: string, overridePath?: string): Promise<void>;
}
