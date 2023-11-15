import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildMode, BuildPaths} from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
}

const config: webpack.Configuration = buildWebpackConfig({
    mode: BuildMode.DEV,
    paths,
    port: 3001
})


export default config;
