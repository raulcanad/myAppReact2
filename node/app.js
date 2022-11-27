import express from 'express'
import cors from 'cors'
//importamos la conexión a la DB

import db from './database/db.js'
import blogRoutes from './routes/routes.js'
import blogEntrada from './routes/routesa.js'
import blogGame from  './routes/routeso.js'
import blogTrophy from  './routes/routese.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)
app.use('/entrada',blogEntrada)
app.use('/game',blogGame)
app.use('/trophy',blogTrophy)


try {
     await  db.authenticate()
     console.log("Conexión exitosa a la DB")
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}
/*app.get('/',(req,res)=>{
        res.send('HOLA MUNDO, Raul Canada')

})*/

app.listen(9000, ()=>{

    console.log('Server UP running in http://localhost:9000/')
})