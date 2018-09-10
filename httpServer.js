// 使用node搭建一个原生的http服务
const http = require('http'); // 引入http服务模块
const chalk = require('chalk'); // 控制台输出颜色语句的插件
// 使用http创建一个服务
const app = http.createServer((req, res) => {
	console.log(req);
	res.end('hello httpServer');
});

// 服务监听端口
app.listen('8865', () => {
	console.log(chalk.rgb(215, 225, 13)('the server is running'));
})
