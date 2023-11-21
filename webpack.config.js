const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['./src/js/app.js', './src/css/styles.css', './src/css/tailwind.css'],
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
            }
        ],
    },
    plugins: [
        new NodePolyfillPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {from: 'src/default.html', to: 'default.html'},
                {from: 'src/ticket-shop.html', to: 'ticket-shop.html'},
                {from: 'src/default.html', to: 'default.php'},
                {from: 'src/ticket-shop.html', to: 'ticket-shop.php'},
                {from: 'src/assets/favicon', to: 'assets/favicon'},
                {from: 'src/assets/png', to: 'assets/png'}
            ],
        }),
    ]

};