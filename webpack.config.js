const path = require('path');

const config = {
    entry: './lib/percolation.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['preset-env']
                    }
                }
            }
        ]
    }
};

module.exports = config;