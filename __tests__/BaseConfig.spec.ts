import * as path from 'path';
import { BaseConfig } from "../lib";
import { Logger } from 'nano-errors';

describe("lib.error.BaseConfig", async() => {
  Logger.initialize();

  it("should load a BaseConfig properly from env synchronously", () => {
    const config = new BaseConfig({
      debug: true,
      name: 'test',
      basePath: path.join(process.cwd(), '__tests__/'),
    });
    config.loadSync();
    expect(config.get('TEST')).toBe('123456');
    expect(process.env).toHaveProperty('TEST', '123456'); 
  });

  it("should dump a BaseConfig properly from env and then reload it", async () => {
    const config = new BaseConfig({
      debug: true,
      name: 'test',
      basePath: path.join(process.cwd(), '__tests__/'),
    });

    config.loadSync();
    expect(config.get('TEST')).toBe('123456');

    // TODO: Create a setter
    config['data']['TEST'] = '654321';

    await config.dump();
    config.loadSync();
    expect(config.get('TEST')).toBe('654321');
    // expect(process.env).toHaveProperty('TEST', '654321');
  });

});
