import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, 'src'),
        build: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
    };

    return buildWebpackConfig({
        paths,
        port: env.port || 3001,
        mode: env.mode || BuildMode.DEV,
        apiUrl: env.apiUrl || 'https://egor-badulin.ru/wp-json/wp/v2/',
        project: 'frontend',
    });
};
