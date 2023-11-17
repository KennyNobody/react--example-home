import webpack from "webpack";
import {BuildMode, BuildOptions} from "./types/config";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { paths } = options;

    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:4].css',
            chunkFilename: 'css/[name].[contenthash:4].css',
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.mode === BuildMode.DEV)
        })
    ]
}
