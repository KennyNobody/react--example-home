export enum BuildMode {
    DEV = 'development',
    PROD = 'production',
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
}

export enum BuildProject {
    FRONTEND = 'frontend',
    STORYBOOK = 'storybook',
    JEST = 'jest',
    SERVER = 'server',
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    port: number;
    apiUrl: string;
    project: BuildProject;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
    project: BuildProject;
}
