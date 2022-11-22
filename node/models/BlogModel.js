//importamos la conexión a la DB
import db from "../database/db.js";
 //importamos sequelize
 import { DataTypes } from "sequelize";

 const BlogModel= db.define('blogs',{
        dni: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
        last_name: { type: DataTypes.STRING },
        birthday:{ type: DataTypes.DATE},
        email: { type: DataTypes.STRING },
        phone: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
 })


 export default  BlogModel