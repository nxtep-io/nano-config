import { Logger } from 'nano-errors';
import { NanoConfig } from '../../lib';

interface SimpleData {
  env: string;
  exampleEnv: string;
  exampleFile: string;
}

const logger = Logger.initialize();

const config = NanoConfig.environment<SimpleData>({
  name: 'simple',
  envName: 'simple',
  basePath: __dirname,
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

// This should output "simple_json_env"
logger.info('Config from env file', { value: config.get('exampleEnv') });

// This should output "simple_json"
logger.info('Config from json file', { value: config.get('exampleFile') });
