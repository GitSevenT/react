var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');


//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        inline: true,//实时刷新
        hot: true,
        open: true
    },
});
server.listen(8080,'172.27.186.1', function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at http://172.27.186.1:8080');
});
