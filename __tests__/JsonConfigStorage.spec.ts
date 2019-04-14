import { Logger } from 'nano-errors';
import * as path from 'path';
import { BaseConfig, JsonConfigStorage } from "../lib";

describe("lib.config.BaseConfig", async () => {
  Logger.initialize();

  it("should load a BaseConfig properly from env synchronously", () => {
    const configFile = {
      name: 'test',
      basePath: path.join(process.cwd(), '__tests__/'),
    };

    const config = new BaseConfig({
      debug: true,
      ...configFile,
      storage: new JsonConfigStorage({ ...configFile })
    });

    config.loadSync();
    expect(config.get('TEST')).toBe('123456');
  });

  it("should dump a BaseConfig properly from env and then reload it", async () => {
    const configFile = {
      name: 'test',
      basePath: path.join(process.cwd(), '__tests__/'),
    };

    const config = new BaseConfig({
      debug: true,
      ...configFile,
      storage: new JsonConfigStorage({ ...configFile })
    });

    config.loadSync();
    expect(config.get('TEST')).toBe('123456');

    // TODO: Create a setter
    config['data']['TEST'] = '654321';

    await config.dump('test_output', path.join(process.cwd(), './.env'));

    const loadedConfigFile = {
      name: 'test_output',
      basePath: path.join(process.cwd(), './.env'),
    };

    const loadedConfig = new BaseConfig({
      debug: true,
      ...loadedConfigFile,
      storage: new JsonConfigStorage({ ...loadedConfigFile })
    });

    loadedConfig.loadSync();
    expect(loadedConfig.get('TEST')).toBe('654321');
  });

});
