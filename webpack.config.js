'use strict' //Webpack을 어떻게 사용할건지 명시하는 과정
const path = require('path'); //path 라이브러리 사용

module.exports = {
    entry: {
        main: ['./src/main.js'] //src 폴더 안의 main.js가 entry 포인트가 되도록 설정
    },
    output: {
        path: path.resolve(__dirname, './build'), //build 폴더를 output으로 설정
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, './src'),
            //모든 js 소스코드를 src 폴더 안에 넣도록 설정
            loaders: 'babel-loader'
            //babel을 이용해 작성하는 js 소스코드가 낮은 버전의 js에서도 동작하게끔 설정
        }]
    },
    plugins: [],
    devServer: {
        contentBase: './public',
        host: 'localhost',
        port: 8080
        /*개발시, localhost 8080포트를 열어, 코딩하는 내용을 확인하며 프로그램을
        만들 수 있도록 설정*/
    }
}