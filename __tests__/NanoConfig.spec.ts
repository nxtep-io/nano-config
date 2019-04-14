import { Logger } from 'nano-errors';
import * as path from 'path';
import { NanoConfig, JsonConfigStorage } from "../lib";

describe("lib.config.JsonConfigStorage", async () => {
  Logger.initialize();
  const originalEnv = { ...process.env };

  afterEach(() => {
    // Reset process state
    process.env = { ...originalEnv };
  });

  it("should load a JsonConfigStorage properly from env synchronously", () => {
    const config = new NanoConfig({ name: 'simple_test' });
    config.loadSync();
    expect(config.get('env')).toBe('test');
  });

});
