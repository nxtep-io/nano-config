import { NanoConfigData, NanoConfig, NanoConfigOptions } from "./NanoConfig";

export abstract class NanoConfigTemplate<Data extends NanoConfigData, Template = any> extends NanoConfig<Data> {
  public options: NanoConfigOptions<Data>;

  protected abstract async render(): Promise<Template>;

  public async dump(overrideName?: string, overridePath?: string): Promise<void> {
    const rendered = await this.render();
    await this.storage.dump(rendered, overrideName, overridePath);
  }
}