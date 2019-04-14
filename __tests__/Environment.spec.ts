import { Logger } from 'nano-errors';
import * as path from 'path';
import { NanoConfig, NanoConfigData } from "../lib";

interface TestConfigData extends NanoConfigData { test: number }

describe("lib.config.Environment", async () => {
  Logger.initialize();
  const originalEnv = { ...process.env };

  afterEach(() => {
    // Reset process state
    process.env = { ...originalEnv };
  });

  it("should load a simple NanoConfig properly without an env synchronously", () => {
    const config = NanoConfig.environment<TestConfigData>({ name: 'unknown_file_123' });
    expect(config.get('env')).toBe('test');
  });

  it("should load a NanoConfig properly from env synchronously", () => {
    const config = NanoConfig.environment<TestConfigData>({
      name: 'convict',
      envName: 'test',
      basePath: path.join(process.cwd(), '__tests__/files'),
      schema: {
        test: {
          format: 'int',
          default: null,
          env: 'TEST_ENV',
        }
      }
    });

    expect(config.get('test')).toBe(123456);
    expect(() => config.set('test', 'a')).toThrow(/test\: must be an integer/ig);
    expect(() => config.set('test', 1)).not.toThrow();
  });

  it("should not fail a NanoConfig without a proper env file synchronously", () => {
    const config = NanoConfig.environment<TestConfigData>({
      name: 'convict',
      envName: 'unknown_file_123',
      basePath: path.join(process.cwd(), '__tests__/files'),
      schema: {
        test: {
          format: 'int',
          default: null,
          env: 'TEST_ENV',
        }
      }
    });

    expect(config.get('test')).toBeFalsy();
    expect(() => config.set('test', 'a')).toThrow(/test\: must be an integer/ig);
    expect(() => config.set('test', 1)).not.toThrow();
  });


});
