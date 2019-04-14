import { Logger } from 'nano-errors';
import * as path from 'path';
import { KubeConfigTemplate } from '../../lib';

interface KubeSimpleData {
  env: string;
  exampleEnv: string;
  exampleFile: string;
}

const logger = Logger.initialize();

const config = KubeConfigTemplate.environment<KubeSimpleData>({
  name: 'config.k8s',
  envName: 'kubernetes',
  basePath: path.join(__dirname, './files'),
  metadata: {
    name: 'config-k8s',
    labels: {
      name: 'config-k8s',
    },
  },
  schema: {
    exampleEnv: {
      format: String,
      env: 'EXAMPLE_ENV',
      default: null,
    }
  }
});

config.dump()
  .then(() => logger.info('Dumped kubernetes config map successfully'))
  .catch(error => logger.error('Could not dump kubernetes config map: ' + error.message, { error }));