export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
}

export interface BuildEnv {
  port: number;
  mode: BuildMode;
  apiUrl: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  apiUrl: string;
  port: number;
  project: "storybook" | "frontend" | "jest";
}
