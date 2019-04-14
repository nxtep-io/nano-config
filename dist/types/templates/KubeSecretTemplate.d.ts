import { NanoConfigTemplate } from "../NanoConfigTemplate";
export interface KubeSecretData {
    apiVersion: 'v1';
    kind: 'Secret';
    metadata: {
        name: string;
        labels: any;
    };
    data: {
        [key: string]: string;
    };
}
export declare class KubeSecretTemplate extends NanoConfigTemplate<KubeSecretData> {
    protected render(): Promise<KubeSecretData>;
}
