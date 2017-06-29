
var webpack = require('webpack');


module.exports = {
    entry:  __dirname + "/app.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        publicPath: "",
        filename: "bundle.js"//打包后输出文件的文件名
    },

    module: {
        loaders: [//loaders是在打包构建过程中用来处理源文件的（JSX，Scss，Less..），一次处理一个
            {
                test: /\.json$/,
                loader: "json"//在配置文件里添加JSON loader 处理json
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,//include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'//在webpack的module部分的loaders里进行配置即可
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules'//添加对样式表的处理 ?modules不同的css模块只对相应的模块起作用
            }
        ]
    },
    plugins: [//plugins关键字部分添加该插件的一个实例（plugins是一个数组）
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];//调用autoprefixer插件,（需要possCss插件）补全css前缀
                },
                devServer: {
                    contentBase: "./build",//本地服务器所加载的页面所在的目录
                    colors: true,//终端中输出结果为彩色
                    historyApiFallback: true,//不跳转
                    host: 'localhost',
                    port: 7000,
                    inline: true,//实时刷新
                    hot: true
                }
            }
        }),
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),//版权声明插件,内置插件

        new webpack.HotModuleReplacementPlugin(),//热加载插件

        new webpack.optimize.UglifyJsPlugin(),//压缩JS代码
    ],
    devtool: 'eval-source-map'//配置生成Source Maps，选择合适的选项
};
