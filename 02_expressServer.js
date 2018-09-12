// 使用express搭建一个简单的node服务。
// 访问localhost：1000时输出‘hello express!’

// 引入express框架 颜色chalk插件
const app = require('express')();
const chalk = require('chalk');

// 发送请求并响应
// 严格按照格式语法书写，这里不能省略req。。否则报错
app.get('/', (req, res) => {
	res.writeHead('200', {'Content-Type': 'text/plain;charset=utf-8;'});
	res.end('hello express!');
});

// 监听端口
app.listen('1000', () => {
	console.log(chalk.rgb(255, 26, 28)('thr server is running'));
});