import webpack from "webpack";
import {BuildMode, BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const imageLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const styleLoader: webpack.RuleSetRule = {
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
        svgLoader,
        imageLoader,
        styleLoader
    ]
}
