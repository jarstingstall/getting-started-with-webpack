module.exports = {
    entry: './src/index.js',
    output: {
        path: './public/',        
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public/'
    }
}