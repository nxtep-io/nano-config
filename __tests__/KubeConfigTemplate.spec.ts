import { Logger } from 'nano-errors';
import * as path from 'path';
import { KubeConfigMapTemplate, KubeConfigTemplate } from "../lib";

interface TestKubeConfigData extends KubeConfigMapTemplate { test: number }

describe("lib.config.KubeConfigTemplate", async () => {
  Logger.initialize();
  const originalEnv = { ...process.env };

  afterEach(() => {
    // Reset process state
    process.env = { ...originalEnv };
  });

  it("should load a KubeConfigTemplate properly from env synchronously and dump a config map", () => {
    const config = KubeConfigTemplate.environment<TestKubeConfigData>({
      name: 'k8s-config',
      envName: 'k8s',
      basePath: path.join(process.cwd(), '.env/'),
      envBasePath: path.join(process.cwd(), '__tests__/files'),
      schema: {
        test: {
          format: 'int',
          default: null,
          env: 'TEST_ENV',
        },
      }
    });

    expect(config.get('test')).toBe(67106410);
    expect(config.dump()).resolves.not.toThrow();
  });

  it("should load a KubeConfigTemplate properly from env synchronously and dump a secret map", () => {
    const config = KubeConfigTemplate.environment<TestKubeConfigData>({
      name: 'k8s-secret',
      envName: 'k8s',
      kind: 'Secret',
      basePath: path.join(process.cwd(), '.env/'),
      envBasePath: path.join(process.cwd(), '__tests__/files'),
      metadata: {

      },
      schema: {
        test: {
          format: 'int',
          default: null,
          env: 'TEST_ENV',
        },
      }
    });

    expect(config.get('test')).toBe(67106410);
    expect(config.dump()).resolves.not.toThrow();
  });
});
