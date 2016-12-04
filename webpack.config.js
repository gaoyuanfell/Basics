var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './index.js',
        main: './main.js',
        jquery: ["./jquery"],
        angular: ["./angular"],
        vue: ["./vue"]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        new webpack.BannerPlugin(`${Date.now()}`), //这个插件的作用是给输出的文件头部添加注释信息。
        new webpack.optimize.CommonsChunkPlugin({
            name: ["common","angular","jquery","vue","load"],
            minChunks:2
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            inject:'head',//true, body, head, false
            cache:false,//表示只有在内容变化时才生成一个新的文件。
            hash:true,
            minify:{},
            // chunks:["angular","jquery","vue","common","load","index"],
            excludeChunks:[],
            chunksSortMode:'dependency',//这个选项决定了 script 标签的引用顺序。默认有四个选项，'none', 'auto', 'dependency', '{function}'。
        }),

    ]
}