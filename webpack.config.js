const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {
                            modules: false,
                            useBuiltIns: true,
                            targets: {

                                // browsers: [
                                //     '> 1%',
                                //     'last 2 versions',
                                //     'Firefox ESR',
                                // ],

                                browsers: [
                                    ">1%",
                                    "not ie 11",
                                    "not op_mini all"
                                ],

                                // browsers: [
                                //     'Chrome >= 60',
                                //     'Safari >= 10.1',
                                //     'iOS >= 10.3',
                                //     'Firefox >= 54',
                                //     'Edge >= 15',
                                // ],
                            },
                        }],
                    ],
                },
            },
        }],
    },
    stats: {
        colors: true
    },
    watch: false,
    watchOptions: {
        aggregateTimeout: 300,
        ignored: "/node_modules/"
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    },
    mode: 'development'
};
