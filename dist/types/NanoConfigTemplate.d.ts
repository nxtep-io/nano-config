import { NanoConfigData, NanoConfig } from "./NanoConfig";
export declare abstract class NanoConfigTemplate<Data extends NanoConfigData> extends NanoConfig {
    protected abstract render(): Promise<Data>;
    dump(overrideName?: string, overridePath?: string): Promise<void>;
}
