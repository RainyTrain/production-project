import path from "path";
import webpack, { RuleSetRule } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: "",
    html: "",
    output: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push(".ts", ".tsx");

  const rules = config.module!.rules as RuleSetRule[];
  config.module!.rules = rules.map((rule) =>
    /svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg$/i } : rule
  );

  config!.module!.rules!.push({
    test: /\.svg$/i,
    use: ["@svgr/webpack"],
  });

  config!.module!.rules!.push(buildCssLoader(true));

  config!.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(""),
      __PROJECT__: JSON.stringify("storybook"),
    })
  );

  return config;
};
