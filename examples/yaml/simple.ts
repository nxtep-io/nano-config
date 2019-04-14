import { Logger } from 'nano-errors';
import { NanoConfig, YamlConfigStorage } from '../../lib';

interface SimpleData {
  env: string;
  exampleEnv: string;
  exampleFile: string;
}

const logger = Logger.initialize();

const configFile = {
  name: 'simple',
  basePath: __dirname,
}

const config = NanoConfig.environment<SimpleData>({
  ...configFile,
  envName: 'simple',
  storage: new YamlConfigStorage({ ...configFile }),
  schema: {
    exampleEnv: {
      format: String,
      env: 'EXAMPLE_ENV',
      default: null,
    },
    exampleFile: {
      format: String,
      default: null,
    }
  }
});

config.loadSync();

// This should output "simple_yaml_env"
logger.info('Config from env file', { value: config.get('exampleEnv') });

// This should output "simple_yaml"
logger.info('Config from json file', { value: config.get('exampleFile') });
