import express from 'express'

import { getAllEntrada, getEntrada, createEntrada, updateEntrada, deleteEntrada
 } from '../controller/EntradaController.js'

const routesa = express.Router()

routesa.get('/',getAllEntrada)
routesa.get('/:id',getEntrada)
routesa.post('/',createEntrada)
routesa.put('/:id',updateEntrada)
routesa.delete('/:id',deleteEntrada) 





export default  routesa;
