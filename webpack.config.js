const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
    entry: ['./src/js/app.js', './src/css/styles.css'],
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader', // postcss.config.js
                ],
            },
            // {
            //     test: /\.(ttf|eot|woff2?|otf)$/,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             name: '/dist/[name].[hash].[ext]',
            //             limit: 10000
            //         }
            //     }
            // },
        ],
    },
    plugins: [
        new NodePolyfillPlugin()
    ]

};