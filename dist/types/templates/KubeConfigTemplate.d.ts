import { NanoConfigTemplate } from "../NanoConfigTemplate";
export interface KubeConfigData {
    apiVersion: 'v1';
    kind: 'ConfigMap';
    metadata: {
        name: string;
        labels: any;
    };
    data: {
        [key: string]: string;
    };
}
export declare class KubeConfigTemplate extends NanoConfigTemplate<KubeConfigData> {
    protected render(): Promise<KubeConfigData>;
}
