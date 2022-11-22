import express from 'express'
import { getAllGames, getGames, createGames, updateGames, deleteGames } from '../controller/GameController.js';


const routeso = express.Router()

routeso.get('/',getAllGames)
routeso.get('/:id',getGames)
routeso.post('/',createGames)
routeso.put('/:id',updateGames)
routeso.delete('/:id',deleteGames)
routeso.get 





export default  routeso;