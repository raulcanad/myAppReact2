//importamos la conexión a la DB
import db from "../database/db.js";
 //importamos sequelize
 import { DataTypes } from "sequelize";



 const GameModel= db.define('game',{
        user_name: { type: DataTypes.STRING },
        score: { type: DataTypes.INTEGER },
 })


 export default  GameModel