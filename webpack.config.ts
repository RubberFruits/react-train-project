// @ts-ignore
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const isDev = env.mode === 'development';
    const PORT = env.port || 3000;
    const analyze = env.analyze || false;
    const apiUrl = env.apiUrl || 'http://127.0.0.1:8000';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        analyze,
        apiUrl,
    });
};
