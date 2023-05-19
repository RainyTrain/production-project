import { Configuration as DevServeronfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions): DevServeronfiguration => ({
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  });
