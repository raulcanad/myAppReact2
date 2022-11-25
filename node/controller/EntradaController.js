//importamos el Modelo
import EntradaModel from "../models/EntradaModel.js"

//Mostrar todos los registros
export const getAllEntrada = async (req, res) => {
    try {
       const entrada = await  EntradaModel.findAll()
       res.json(entrada)
    } catch (error) {
        res.json({message:error.message})
    }
}
//Mostrar un registro
export const getEntrada = async (req, res)=> {
    try {
       const entrada= await EntradaModel.findAll({
              where:{ id_user:req.params.id} 
        })
        res.json(entrada[0])
    } catch (error) {
        res.json({message: error.message})
    }

}
//Crear un registro
export const createEntrada = async (req, res) => {
try {
    await  EntradaModel.create(req.body)
    res.json({
        "message":"¡Registro creado correctamente!"
    })
} catch (error) {
    res.json({message: error.message})
}

}
//Actualizar un registro
export const updateEntrada = async (req,res)=>{
    try {
       await EntradaModel.update(req.body, {
            where: { id_user: req.params.id}
       })
       res.json({
        "message":"¡Registro actualizado correctamente!"
    })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Eliminar un registro
export const deleteEntrada = async (req, res) => {
    try {
       await  EntradaModel.destroy({
            where: { id_user: req.params.id}
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


