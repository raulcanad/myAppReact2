//importamos la conexión a la DB
import db from "../database/db.js";
 //importamos sequelize
 import { DataTypes } from "sequelize";



 const GameModel= db.define('game',{
        score: { type: DataTypes.INTEGER },
        userId: { type: DataTypes.INTEGER },
        date: {type: DataTypes.DATE}
 })


 export default  GameModel