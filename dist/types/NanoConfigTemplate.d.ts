import { NanoConfigData, NanoConfig, NanoConfigOptions } from "./NanoConfig";
export declare abstract class NanoConfigTemplate<Data extends NanoConfigData, Template = any> extends NanoConfig<Data> {
    options: NanoConfigOptions<Data>;
    protected abstract render(): Promise<Template>;
    dump(overrideName?: string, overridePath?: string): Promise<void>;
}
