import express from 'express'
import { getAllTrophy, getTrophy, createTrophy, updateTrophy, deleteTrophy
 } from '../controller/TrophyController.js';


const routese = express.Router()

routese.get('/',getAllTrophy)
routese.get('/:id',getTrophy)
routese.post('/',createTrophy)
routese.put('/:id',updateTrophy)
routese.delete('/:id',deleteTrophy)



export default  routese;