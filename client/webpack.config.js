const webpack = require('webpack');
const path = require('path');
const outputPath = path.resolve(__dirname, './dist');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
    entry:{
        app:[
            'react-hot-loader/patch',
            path.resolve(__dirname, './src/index.js')
        ]
    },
    output:{
        path: outputPath,
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                include: path.resolve(__dirname, './src/assets/'),
                use: 'url-loader?limit=1000&name=assets/[name]-[hash].[ext]'
            },
        ]
    },
    resolve:{
        alias:{
            'components': path.resolve(__dirname, './src/components'),
            'containers': path.resolve(__dirname, './src/containers'),
            'assets': path.resolve(__dirname, './src/assets'),
            'actions': path.resolve(__dirname, './src/actions'),
            'store': path.resolve(__dirname, './src/store'),
            'reducers': path.resolve(__dirname, './src/reducers'),
            'util': path.resolve(__dirname, './src/util')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/assets/index.html'),
            filename:'index.html',
            path: outputPath
        }),
        new webpack.NamedModulesPlugin,
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase: path.resolve(__dirname, './dist'),
        port: 8081,
        historyApiFallback: true,
        hot: true,
        host:'0.0.0.0'
    }
}

module.exports = webpackConfig;