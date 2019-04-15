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

  constructor(options: KubeConfigTemplateOptions<Data>) {
    super(options);
  }

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

    const data = {} as any;
    const raw = this.get();

    for (const key in raw) {
      if (kind === 'Secret') {
        data[key] = Buffer.from(raw[key]).toString('base64');
      } else {
        data[key] = raw[key];
      }
    }

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
      // tslint:disable-next-line:object-shorthand-properties-first
      data,
    }
  }
}
