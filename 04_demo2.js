// 利用superagent、express、cheerio等插件爬取cnode页面的一些数据

// superagent是nodejs中一个客户端请求代理插件，专门用来处理get、post、head。put等请求
// cheerio 为服务器特别定制的。快速、灵活、实施jq核心思想

// 安装依赖
const app = require('express')();
const superagent = require('superagent');
const cheerio = require('cheerio');

app.get('/', (req, res, next) => {
	// 用 superagent 去抓取 https:// cnodejs.org 的内容
	superagent.get('https://cnodejs.org').end((err, response) => {
		if (err) {
			return next(err);
		}
		console.log(response.text);
		const $ = cheerio.load(response.text);
		let contentList = [];
		$('#topic_list .topic_title').each((i, item) => {
			contentList.push({
				title: $(item).attr('title'),
				href: $(item).attr('href')
			})
		})
		console.log(contentList);
		res.send(contentList);
	}); 
}).listen('1002', () => {
	console.log('the server is running');
})