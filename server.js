const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200)
    res.end('hello world')
}).listen(8888)
console.log('Server running at http://127.0.0.1:8888/')

//读取文件
const fs=require('fs')
const data=fs.readFileSync('./resource/input.txt')
console.log(data.toString())
fs.readFile('./resource/input.txt',function (err, data){
    if(err){
        return console.error(err)
    }
    console.log(data.toString())
})