//importamos la conexión a la DB
import db from "../database/db.js";
 //importamos sequelize
 import { DataTypes } from "sequelize";

 const EntradaModel= db.define('entrada',{
        name: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
    
 })


 export default  EntradaModel