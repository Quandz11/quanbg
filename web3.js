const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000
const { Console } = require('console')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        fs.readFile('index.html', (err, data) =>{
            if(err) {
                console.error(err)
            }else{
                res.write(data)
            }
        })
    }else if(req.url === '/login'){
        fs.readFile('login.html', (err, dt) =>{
            if(err) {
                console.error(err)
            }else{
                res.write(dt)
            }
        })

    }else{
        res.write("404 Not Found")
        res.end()
    }

})
server.listen(port, () => {
    console.log("http://localhost:3000")
})