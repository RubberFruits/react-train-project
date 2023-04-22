import * as HTMLWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
    analyze,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.[contenthash:8].css',
            chunkFilename: 'css/bundle.[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: analyze ? 'server' : 'disabled',
        }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}
