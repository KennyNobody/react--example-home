export enum BuildMode {
    DEV = 'development',
    PROD = 'production'
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    port: number,
}
