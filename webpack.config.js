module.exports = {
    entry: './src/index.js',
    output: {
        path: './public/',        
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public/'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
        ]
    }
}