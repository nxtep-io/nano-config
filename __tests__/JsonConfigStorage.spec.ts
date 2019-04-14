import { Logger } from 'nano-errors';
import * as path from 'path';
import { JsonConfigStorage, NanoConfig } from "../lib";

describe("lib.config.JsonConfigStorage", async () => {
  Logger.initialize();
  const originalEnv = { ...process.env };

  afterEach(() => {
    // Reset process state
    process.env = { ...originalEnv };
  });

  it("should load a JsonConfigStorage properly from env synchronously", () => {
    const configFile = {
      name: 'test',
      basePath: path.join(process.cwd(), '__tests__/files'),
    };

    const config = new NanoConfig({
      ...configFile,
      storage: new JsonConfigStorage({ ...configFile }),
      schema: {
        TEST: {
          format: String,
          default: null,
        }
      }
    });

    config.loadSync();
    expect(config.get('TEST')).toBe('123456');
  });

  it("should not fail a JsonConfigStorage without a source file", () => {
    const configFile = {
      name: 'unknown_file_123',
      basePath: path.join(process.cwd(), '__tests__/files'),
    };

    const config = new NanoConfig({
      ...configFile,
      storage: new JsonConfigStorage({ ...configFile }),
      schema: {
        TEST: {
          format: String,
          default: null,
        }
      }
    });

    config.loadSync();
    expect(config.get('TEST')).toBeFalsy();
  });

  it("should dump a JsonConfigStorage properly from env and then reload it", async () => {
    const configFile = {
      name: 'test',
      basePath: path.join(process.cwd(), '__tests__/files'),
    };

    const config = new NanoConfig({
      ...configFile,
      storage: new JsonConfigStorage({ ...configFile }),
      schema: {
        TEST: {
          format: String,
          default: null,
        }
      }
    });

    config.loadSync();
    expect(config.get('TEST')).toBe('123456');

    config.set('TEST', '654321');
    await config.dump('test_output', path.join(process.cwd(), './.env'));

    const loadedConfigFile = {
      name: 'test_output',
      basePath: path.join(process.cwd(), './.env'),
    };

    const loadedConfig = new NanoConfig({
      ...loadedConfigFile,
      storage: new JsonConfigStorage({ ...loadedConfigFile }),
      schema: {
        TEST: {
          format: String,
          default: null,
        }
      }
    });

    loadedConfig.loadSync();
    expect(loadedConfig.get('TEST')).toBe('654321');
  });

});
