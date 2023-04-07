// const express = require('express')
// const app = express()
// app.use((req,res,next)=>{
//     console.log(`ruta invocada: ${req.path} - método: ${req.method}`);
//     next()
// })
// app.get('/profile',(req,res)=>{
//     res.send("Bienvenido al perfil del usuario")
// })
// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000');







// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//     res.send("Landing page")
// })
// app.use((req,res,next)=>{
//     console.log(`ruta invocada: ${req.path} - método: ${req.method}`);
//     next()
// })
// app.use((req,res,next)=>{
//     if(req.query.login==="byron@gmail.com"){
//         next()
//     }
//     else{
//         res.send("El usuario no se encuentra autenticado")
//     }
// })
// app.get('/dashboard',(req,res)=>{
//     res.send("Bienvenido usuario al sistema web")
// })
// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000');




// const express = require('express')
// const morgan = require('morgan')
// const app = express()
// app.use(morgan('dev'))
// app.get('/',(req,res)=>{
//     res.send("Probando el uso de un middleware")
// })
// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000');