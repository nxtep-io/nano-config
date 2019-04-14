import { NanoConfigData, NanoConfigOptions, NanoEnvFile } from "../NanoConfig";
import { NanoConfigTemplate } from "../NanoConfigTemplate";

export interface KubeConfigMapTemplate {
  apiVersion: 'v1';
  kind: 'ConfigMap' | 'Secret';
  metadata?: {
    name?: string;
    labels?: any;
  };
  data: { [key: string]: string };
}

export interface KubeConfigTemplateOptions<Data extends NanoConfigData> extends NanoConfigOptions<Data> {
  apiVersion?: KubeConfigMapTemplate['apiVersion'];
  kind?: KubeConfigMapTemplate['kind'];
  metadata?: KubeConfigMapTemplate['metadata'];
}

export class KubeConfigTemplate<Data extends NanoConfigData> extends NanoConfigTemplate<Data, KubeConfigMapTemplate> {
  public options: KubeConfigTemplateOptions<Data>;

  public static environment<Data extends NanoConfigData = { env: string }>
    (options: KubeConfigTemplateOptions<Data> & NanoEnvFile): KubeConfigTemplate<Data> {
    return super.environment(options) as any;
  }

  protected async render(): Promise<KubeConfigMapTemplate> {
    const {
      kind = 'ConfigMap',
      apiVersion = 'v1',
      metadata: { labels, ...otherMetadata } = {} as any
    } = this.options;

    return {
      apiVersion,
      kind,
      metadata: {
        name: this.options.name,
        labels: {
          name: this.options.name,
          ...labels,
        },
        ...otherMetadata,
      },
      data: this.get(),
    }
  }
}
