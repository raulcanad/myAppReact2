//importamos el Modelo
import TrophyModel from "../models/TrophyModel.js"

//Mostrar todos los registros
export const getAllTrophy = async (req, res) => {
    try {
       const trophy = await  TrophyModel.findAll()
       res.json(trophy)
    } catch (error) {
        res.json({message:error.message})
    }
}
//Mostrar un registro
export const getTrophy = async (req, res)=> {
    try {
       const trophy= await TrophyModel.findAll({
              where:{ id:req.params.id} 
        })
        res.json(trophy[0])
    } catch (error) {
        res.json({message: error.message})
    }

}
//Crear un registro
export const createTrophy = async (req, res) => {
try {
    
    await  TrophyModel.create(req.body)
    res.json({
        "message":"¡Registro creado correctamente!"
    })
} catch (error) {
    res.json({message: error.message})
}

}
//Actualizar un registro
export const updateTrophy = async (req,res)=>{
    try {
       await TrophyModel.update(req.body, {
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
export const deleteTrophy = async (req, res) => {
    try {
       await  TrophyModel.destroy({
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


