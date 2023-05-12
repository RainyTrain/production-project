import { BuildOptions } from './types/config';
import { Configuration as DevServeronfiguration } from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): DevServeronfiguration => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
};
