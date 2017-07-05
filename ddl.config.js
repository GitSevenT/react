const webpack = require('webpack');

const vendors = [
    "bootstrap",
    "jquery",
    "react",
    "react-dom",
    "react-router",
    "react-router-dom"
];

module.exports = {
    output: {
        path: __dirname + 'build',
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        "lib": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
};
new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require('./manifest.json'),
})