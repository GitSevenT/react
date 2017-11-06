
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');//html生成
var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");//依赖单独打包
var CompressionWebpackPlugin = require('compression-webpack-plugin');//Gzip

// // var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry:  {
        main: __dirname + "/app.js",//已多次提及的唯一入口文件
        vendor: ['react','iscroll','jquery','react-bootstrap',
        'react-dom','react-router','react-router-dom']//这里是依赖的库文件配置，和CommonsChunkPlugin配合使用可以单独打包
    },
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        // publicPath: "",//生产
        publicPath: "/react-demo/build",//开发
        filename: "js/bundle.js"//打包后输出文件的文件名[name]-[chunkhash:6]
    },

    module: {
        loaders: [//loaders是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个
            {
                test: /\.json$/,
                loader: "json-loader"//在配置文件里添加JSON loader 处理json
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,//include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'//在webpack的module部分的loaders里进行配置即可
            },
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader'
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=/img/[name]-[hash].[ext]',
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?name=[name]-[hash].[ext]',
            }
            // {
            //     test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            //     loader: 'url-loader!file-loader?limit=50000&name=[path][name].[ext]'
            // }
        ]
    },
    plugins: [//plugins关键字部分添加该插件的一个实例（plugins是一个数组）
        new webpack.DefinePlugin({
            'process.env': {
                //注意一个单引号一个双引号…… 这里是要将 "production" 替换到文件里面
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];//调用autoprefixer插件,（需要possCss插件）补全css前缀
                },
                devServer: {
                    contentBase: "./build",//本地服务器所加载的页面所在的目录
                    colors: true,//终端中输出结果为彩色
                    // historyApiFallback: true,//不跳转
                    host: '172.27.186.1',
                    port: 8080,
                    inline: true,//实时刷新
                    hot: true,
                    open: true
                }
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery"
        }),
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),//版权声明插件,内置插件

        new webpack.HotModuleReplacementPlugin(),//热加载插件

        new webpack.optimize.UglifyJsPlugin({
            sourceMap:true,
            comments: false,        //去掉注释
            compress: {
                warnings: false    //忽略警告,要不然会有一大堆的黄色字体出现……
            }
        }),//压缩JS代码

        new ExtractTextPlugin('css/main.css'),//将css文件单独打包成main文件[name]-[contenthash]

        new CommonsChunkPlugin({//将react单独打包成vendor.js文件
            name: 'vendor',
            filename: 'js/vendor.js'
        }),

        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"//html模板
         }),

        new CompressionWebpackPlugin({ //gzip 压缩
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(js|css)$'    //压缩 js 与 css
            ),
            threshold: 10240,
            minRatio: 0.8
        })
        // new OpenBrowserPlugin({ url: '172.27.186.1:8080' }),



    ],
    // devtool: '#source-map'//配置生成Source Maps，选择合适的选项
};
