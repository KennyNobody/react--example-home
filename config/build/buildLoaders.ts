import webpack from 'webpack';
import { BuildMode, BuildOptions } from './types/config';
import { buildStyleLoader } from './loaders/buildStyleLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const imageLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const styleLoader: webpack.RuleSetRule = buildStyleLoader(options.mode === BuildMode.DEV);

    const babelLoader: webpack.RuleSetRule = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    return [
        imageLoader,
        svgLoader,
        babelLoader,
        tsLoader,
        styleLoader,
    ];
}
