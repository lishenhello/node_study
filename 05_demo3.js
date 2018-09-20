// 运行这个js，输出http:// cnodejs.org网页的标题、连接和第一条评论。
// 运用到的插件 express、superagent、cheerio、eventproxy

const app = require('express')();
const cheerio = require('cheerio');
const superagent = require('superagent');
const url = require('url');
// 解决回调地狱，功能类似于promise插件
const EventProxy = require('eventproxy');

const commonPath = 'https://cnodejs.org';
app.get('/', (req, res, next) => {
	superagent.get(commonPath).end((err, response) => {
		if (err) {
			return next(err);
		}
		// console.log(response.text);
		// response.text就是所爬取到html字符串
		// 用cheerio插件转化成可用jq形式来获取相对应内容
		const $ = cheerio.load(response.text);
		let pathUrlList = [];
		$('#topic_list .topic_title').each((i, item) => {
			// console.log(item, i);
			const pathUrl = url.resolve(commonPath, $(item).attr('href'));
			pathUrlList.push(pathUrl);
			});
		// console.log(pathUrlList);
		const ep = new EventProxy();
		for(let i = 0; i < pathUrlList.length; i++) {
			superagent.get(pathUrlList[i]).end((err, ress) => {
				if (err) {
					return console.log(err);
				}
				console.log(pathUrlList[i]);
				console.log(ress.text);
				ep.emit('result', [pathUrlList[i], ress.text]);
			})
		}
		const resultList = [];
		ep.after('result', pathUrlList.length, (list) => {
			list.forEach((item) => {
				const urlItem = item[0];
				const $text = cheerio.load(item[1]);
				resultList.push({
					title: $('.topic_full_title').text().trim(),
					href: urlItem,
					comment1: $('.reply_content').eq(0).text().trim()
				});
			});
			res.send(resultList);
		});
		});
	}).listen('1003', () => {
	console.log('the server is running');
})