import { Logger } from 'nano-errors';
import * as path from 'path';
import { BaseConfig, BaseConfigData } from "../lib";

interface TestConfigData extends BaseConfigData { test: number }

describe("lib.config.Convict", async () => {
  Logger.initialize();

  it("should load a BaseConfig properly from env synchronously", () => {
    const config = new BaseConfig<TestConfigData>({
      debug: true,
      name: 'convict',
      basePath: path.join(process.cwd(), '__tests__/'),
      schema: {
        test: { format: 'int', default: '' as any }
      }
    });

    expect(() => config.set('test', 'a')).toThrow(/test\: must be an integer/ig);
    expect(() => config.set('test', 1)).not.toThrow();
  });

});
