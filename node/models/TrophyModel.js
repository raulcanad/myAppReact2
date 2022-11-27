//importamos la conexión a la DB
import db from "../database/db.js";
 //importamos sequelize
 import { DataTypes } from "sequelize";



 const TrophyModel= db.define('trophy',{
       
        description: { type: DataTypes.STRING },
       
 })


 export default  TrophyModel