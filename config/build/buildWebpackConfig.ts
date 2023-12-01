import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths?.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    output: {
      filename: "[name].[contenthash].js",
      path: paths?.output,
      clean: true,
      publicPath: "/",
    },
    devtool: isDev ? "eval-cheap-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
