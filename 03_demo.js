// 创建一个服务,输入http://localhost:1001?a=123将a的值返回到页面上
// 将返回的a的值用utility进行加密,他有两个很重要的方法。。md5和sha1.都是对字符串进行加密处理
// 获取字符串的值可用req.query方法进行获取

const app = require('express')();
const utility = require('utility');

app.get('/', (req, res) => {
	console.log(req.query); // { a : 123}
	const value = req.query.a;
	// res.send(utility.md5(value)); // md5方法
	res.send(utility.sha1(value)); // sha1方法
}).listen('1001', () => {
	console.log('the server is running');
})