const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'img/[hash][ext][query]',
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|jpe?g|png|svg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
}