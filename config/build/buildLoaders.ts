import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [{ loader: "file-loader" }],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const cssLoader = buildCssLoader(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [
    svgLoader,
    fileLoader,
    codeBabelLoader,
    tsxBabelLoader,
    // typescriptLoader,
    cssLoader,
  ];
};
