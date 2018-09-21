const express = require('express')
const app = express()
const http = require('http').Server(app)
const path = require('path')
var proxy = require('express-http-proxy')
const useProxy = function() {
    return function(req, res, next){
    req.headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`
    return proxy('https://api.github.com/')(req, res, next)
}}

app.use('/api', useProxy())


app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname, '../build/index.html'))
})
app.use('/', express.static(path.resolve('build')))

const PORT = 4500
http.listen(PORT, function(){
    console.log(`Server is running at PORT ${PORT}`)
    console.log(`GITHUB_TOKEN ${process.env.GITHUB_TOKEN}`)
})