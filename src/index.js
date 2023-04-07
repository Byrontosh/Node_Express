// const express = require('express')
// const app = express()
// app.use(express.json())
// app.post('/product',(req,res)=>{
//     const {nombre,edad} = req.body
//     res.send(`Los datos enviados son: ${nombre} - ${edad}`)
// })
// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000')





// const express = require('express')
// const app = express()
// app.get('/user/:data',(req,res)=>
// {
//     console.log(typeof(req.params.data));
//     res.send(`Bienvenido - ${req.params.data}`)
// })
// app.get('/operacion/:num1/:num2',(req,res)=>
// {
//     const {num1,num2}= req.params
//     res.send(`La suma es - ${Number(num1) + Number(num2) }`)
// })
// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000');





// const express = require('express')
// const app = express()
// app.get('/user/:profile/photo',(req,res)=>
// {
//     if(req.params.profile === "byron")
//     res.sendFile('./girlandboy.png',{
//         root:__dirname
//     })
//     else{
//         res.send("No es un usuario válido...")
//     }
// })
// app.get('/nombre/:nombre/edad/:edad',(req,res)=>{
//     res.send(`El nombre del usuario es: ${req.params.nombre} y su edad es: ${req.params.edad}`)
// })
// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000')






// const express = require('express')
// const app = express()

// app.get('/search',(req,res)=>{
//     console.log(req.query)
//     if(req.query.data === "js")
//     {
//         res.send("Libros de JS")
//     }
//     else{
//         res.send("Libros de dom")
//     }
// })

// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000');