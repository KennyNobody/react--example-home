import webpack from 'webpack';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTSX?: boolean;
}

export function buildBabelLoader({ mode, isTSX }: BuildBabelLoaderProps): webpack.RuleSetRule {
    return {
        test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTSX,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                ],
            },
        },
    };
}
