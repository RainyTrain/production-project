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

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push(".ts", ".tsx");
  // eslint-disable-next-line no-param-reassign
  config.module.rules = config?.module?.rules?.map(
    (rule: RuleSetRule | "...") => {
      if (rule !== "..." && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    }
  );

  config.module.rules.push({
    test: /\.svg$/i,
    use: ["@svgr/webpack"],
  });

  config.module.rules.push(buildCssLoader(true));

  config.plugins.push(
    new webpack.DefinePlugin({
      __IS_DEV__: true,
    })
  );

  return config;
};
