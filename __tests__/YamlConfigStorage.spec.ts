import { Logger } from 'nano-errors';
import * as path from 'path';
import { BaseConfig, YamlConfigStorage } from "../lib";

describe("lib.config.YamlConfigStorage", async () => {
  Logger.initialize();

  it("should load a YamlConfigStorage properly from env synchronously", () => {
    const configFile = {
      name: 'test',
      basePath: path.join(process.cwd(), '__tests__/files'),
    };

    const config = new BaseConfig({
      debug: true,
      ...configFile,
      storage: new YamlConfigStorage({ ...configFile })
    });

    config.loadSync();
    expect(config.get('TEST')).toBe('123456');
  });

  it("should dump a YamlConfigStorage properly from env and then reload it", async () => {
    const configFile = {
      name: 'test',
      basePath: path.join(process.cwd(), '__tests__/files'),
    };

    const config = new BaseConfig({
      debug: true,
      ...configFile,
      storage: new YamlConfigStorage({ ...configFile })
    });

    config.loadSync();
    expect(config.get('TEST')).toBe('123456');

    config.set('TEST', '654321');
    await config.dump('test_output', path.join(process.cwd(), './.env'));

    const loadedConfigFile = {
      name: 'test_output',
      basePath: path.join(process.cwd(), './.env'),
    };

    const loadedConfig = new BaseConfig({
      debug: true,
      ...loadedConfigFile,
      storage: new YamlConfigStorage({ ...loadedConfigFile })
    });

    loadedConfig.loadSync();
    expect(loadedConfig.get('TEST')).toBe('654321');
  });

});
