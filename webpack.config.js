const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { resourceUsage } = require('process');
const { options } = require('yargs');
const loader = require('sass-loader');

const isDev =  process.env.NODE_ENV === 'development';

const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/main.js',
    output:  {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app'),
    },
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, 'app'),
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/auth.html'),
            filename: 'auth.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/docs.html'),
            filename: 'docs.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/lk.html'),
            filename: 'lk.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/register-form.html'),
            filename: 'register-form.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'src/assets'), to:  path.resolve(__dirname, 'app/assets')}
            ]
        }),
        new MiniCssExtractPlugin()
    ],
    devtool: isProd ? false : 'source-map',
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            { 
                test: /\.html$/, 
                use: 'html-loader',
            },
            { 
                test: /\.css$/, 
                use: [ 
                    MiniCssExtractPlugin.loader,
                    {
                        loader:  'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions:{
                                ident: 'postcss',
                                plugins: [
                                    require('tailwindcss'),
                                    require('autoprefixer')
                                ]
                            }
                        }
                    } 
                ] 
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'fonts/[name][ext]'
                } 
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'img/[name][ext]'
                } 
            }
        ]
    }
}