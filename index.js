const http = require('http')

const server = http.createServer((req,res)=>{
    res.write('Hello World!');
    res.end()
})

server.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');