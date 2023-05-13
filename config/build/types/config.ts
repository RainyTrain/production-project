export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
}

export interface BuildEnv {
  port: number;
  mode: BuildMode;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
