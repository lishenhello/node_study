# Node知识笔记
### Node.js 特点：
- event driven: 事件驱动
- none blocking I/O： 非阻塞IO模型
- lightweight and efficient： 轻量、高效
- Node 本身只提供了系统级别的操作API
- single thread：单线程
---
### Node中的JavaScript
- REPL运行环境
 + R: read （读取）
 + E: Eval （执行）
 + P: print （输出）
 + L: loop （循环）
 - ECMAScript
    - Node 对最新的ECMAScript支持非常好
    - es6支持了将近96%的语法
    - console/定时器也移植到Node中

- 全局对象
 - Global
 - Console
 - Process
 - Buffer(二进制的数组)

- 核心模块
 - const fs = require('fs') // 文件操作
 - const http = require('http') // 服务操作
 - const os = require('os') // os 操作系统
 - const path = require('path') // 处理路径的模块
 - const net = require('net') // socket网络编程
 - const queryString = require('') // 查询字符串操作
 - const url = require('url') // 解析url地址
 - const util = require('util') // 工具函数模块

- 第三方模块
 - 通过npm install 安装的第三方模块。。
 
- 文件操作常用API
 - fs.writeFile(file, data, callback) // 文件写入
 - fs.readFile(file, callback) // 文件读取
 - fs.appendFile(file, data, callback) // 文件追加
 - fs.unlink(path, callback) // 删除文件
 - fs.stat(path, callback) // 获取文件信息
 - fs.access(path, callback) // 验证文件路径是否存在
 - fs.rename(oldPath, newPath, callback) // 重命名或移动文件

- 目录操作常用API
 - fs.mkdir(path, callback) // 创建一个目录
 - fs.rmdir(path, callback) // 删除一个目录
 - fs.readdir(path, callback) // 读取一个目录
 - fs.rename(oldPath, newPath, callback) // 重命名或移动目录

- path操作
 - path.baseName(path[, ext]) // 获取文件名部分
 - path.dirname(path) // 获取目录部分
 - path.extname(path) // 获取扩展名部分
 - path.isAbsolute(path) // 判断是否是绝对路径
 - path.join([...paths]) // 将多个路径拼成一个路径

- 监视
 - fs.watchFile(fileName[, options], listener) 
 - fs.watch(fileName[, options], [, listener])

- 文件流
 - 文件复制 fs.createReadStream() 、fs.createWriteStream();
 - 调用可读流的pipe方法，传入一个可写流对象。rs.pipe(ws);
 
---


