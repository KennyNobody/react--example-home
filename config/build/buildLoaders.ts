import webpack from "webpack";
import {BuildMode, BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const styleLoader = {
        test: /\.s[c]ss$/i,
        use: [
            options.mode === BuildMode.DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (path: string) => path.includes('.module'),
                        localIdentName: BuildMode.DEV ? '[path][name]__[local]-[hash:base64:5]' : '[hash:base64:5]'
                    },
                },
            },
            "sass-loader",
        ],
    };

    return [
        tsLoader,
        styleLoader
    ]
}
