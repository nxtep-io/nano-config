import { Logger } from 'nano-errors';
import * as path from 'path';
import { BaseConfig } from "../lib";

describe("lib.config.BaseConfig", async () => {
  Logger.initialize();

  it("should load a BaseConfig properly from env synchronously", () => {
    const config = new BaseConfig({
      debug: true,
      name: 'test',
      basePath: path.join(process.cwd(), '__tests__/files'),
    });
    config.loadSync();
    expect(config.get('TEST')).toBe('123456');
    expect(process.env).toHaveProperty('TEST', '123456');
  });

  it("should dump a BaseConfig properly from env and then reload it", async () => {
    const config = new BaseConfig({
      debug: true,
      name: 'test',
      basePath: path.join(process.cwd(), '__tests__/files'),
    });

    config.loadSync();
    expect(config.get('TEST')).toBe('123456');

    config.set('TEST', '654321');
    await config.dump('test_output', path.join(process.cwd(), './.env'));
    
    const loadedConfig = new BaseConfig({
      debug: true,
      name: 'test_output',
      basePath: path.join(process.cwd(), './.env'),
    });

    loadedConfig.loadSync();
    expect(loadedConfig.get('TEST')).toBe('654321');
    // expect(process.env).toHaveProperty('TEST', '654321');
  });

});
