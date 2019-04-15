import { NanoConfigData, NanoConfigOptions, NanoEnvFile } from "../NanoConfig";
import { NanoConfigTemplate } from "../NanoConfigTemplate";
export interface KubeConfigMapTemplate {
    apiVersion: 'v1';
    kind: 'ConfigMap' | 'Secret';
    metadata?: {
        name?: string;
        labels?: any;
    };
    data: {
        [key: string]: string;
    };
}
export interface KubeConfigTemplateOptions<Data extends NanoConfigData> extends NanoConfigOptions<Data> {
    apiVersion?: KubeConfigMapTemplate['apiVersion'];
    kind?: KubeConfigMapTemplate['kind'];
    metadata?: KubeConfigMapTemplate['metadata'];
}
export declare class KubeConfigTemplate<Data extends NanoConfigData> extends NanoConfigTemplate<Data, KubeConfigMapTemplate> {
    options: KubeConfigTemplateOptions<Data>;
    constructor(options: KubeConfigTemplateOptions<Data>);
    static environment<Data extends NanoConfigData = {
        env: string;
    }>(options: KubeConfigTemplateOptions<Data> & NanoEnvFile): KubeConfigTemplate<Data>;
    protected render(): Promise<KubeConfigMapTemplate>;
}
