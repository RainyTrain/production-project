import babelRemovePropPlugin from "../../babel/babelRemovePropPlugin";
import { BuildOptions } from "../types/config";

interface BuildBabelLoader extends BuildOptions {
  isTsx?: boolean;
}

export const buildBabelLoader = ({ isTsx, isDev }: BuildBabelLoader) => {
  const babelLoader = {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            { locales: ["en", "ru"], keyAsDefaultValue: true },
          ],
          ["@babel/plugin-transform-runtime"],
          ["@babel/plugin-transform-typescript", { isTsx }],
          isTsx &&
            !isDev && [babelRemovePropPlugin, { props: ["data-testid"] }],
          isDev && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
      },
    },
  };
  return babelLoader;
};
