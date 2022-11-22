//importamos el Modelo
import GameModel from "../models/GameModel.js"

//Mostrar todos los registros
export const getAllGames = async (req, res) => {
    try {
       const game = await  GameModel.findAll()
       res.json(game)
    } catch (error) {
        res.json({message:error.message})
    }
}
//Mostrar un registro
export const getGames = async (req, res)=> {
    try {
       const game= await GameModel.findAll({
              where:{ id:req.params.id} 
        })
        res.json(game[0])
    } catch (error) {
        res.json({message: error.message})
    }

}
//Crear un registro
export const createGames = async (req, res) => {
try {
    await  GameModel.create(req.body)
    res.json({
        "message":"¡Registro creado correctamente!"
    })
} catch (error) {
    res.json({message: error.message})
}

}
//Actualizar un registro
export const updateGames = async (req,res)=>{
    try {
       await GameModel.update(req.body, {
            where: { id: req.params.id}
       })
       res.json({
        "message":"¡Registro actualizado correctamente!"
    })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Eliminar un registro
export const deleteGames = async (req, res) => {
    try {
       await  GameModel.destroy({
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


