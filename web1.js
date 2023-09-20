const http = require('http')
const fs = require('fs')
const { Console } = require('console')
const server = http.createServer((req, res) =>{
 fs.readFile('index.html', (err, data) =>{
    if(err){
        console.error(err)
    }else {
        res.write(data)
        res.end()
    }
 } )
})

server.listen(3000, () => {
    console.log("http://localhost:3000")
})