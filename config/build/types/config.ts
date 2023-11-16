export enum BuildMode {
    DEV = 'development',
    PROD = 'production'
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildMode,
    port: number,
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    port: number,
}
