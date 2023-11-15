import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins.";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            clean: true,
            filename: 'bundle.[contenthash].js',
            path: paths.build,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers() ,
    }
}
