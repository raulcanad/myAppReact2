import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container } from '@mui/system';

import UserProfile from '../services/UserProfile'
import axios from 'axios'

import smile from '../images/1.png';
import leo from '../images/2.png';
import frodo from '../images/3.png';
import sira from '../images/4.png';
import {Typography } from "@mui/material";

const GameContainer = () => {

    const frutas = [smile, leo, sira, frodo];
    
    const [PrimerIndice,setPrimerIndice]= useState( Math.floor(Math.random() * 4))
    const [SegundoIndice,setSegundoIndice]= useState( Math.floor(Math.random() * 4))
    const [TercerIndice,setTercerIndice]= useState( Math.floor(Math.random() * 4))
    
    const URI = 'http://localhost:9000/game'
    const URI2 = 'http://localhost:9000/trophy/'
   
    const runGame = async() => {
        setPrimerIndice(Math.floor(Math.random() * 4))
        setSegundoIndice(Math.floor(Math.random() * 4))
        setTercerIndice(Math.floor(Math.random() * 4))    
        if((PrimerIndice == SegundoIndice) && (TercerIndice == SegundoIndice)){
            const user = UserProfile.getUser()
            if(user==null){
                alert("Logeate para guardar los resultados")
            }else{
                const date= new Date().toISOString().split('T')[0]
                   await axios.post(URI, { userId:user.id, score:TercerIndice, date:date})
                   alert("Puntuacion guardada satisfactoriamente")
            }
        }
    }
   
    
        const [trophy, setTrophy]=useState([])
        useEffect(()=>{
            getTrophy()
        },[])
        //procedimiento para mostrar los trofeos
        const getTrophy= async () =>{
          const res2=  await axios.get(URI2)
          setTrophy(res2.data)
        }
    
        const  premio=  trophy.map(function(prefijo, indice) {
            return (indice == TercerIndice) ? prefijo.description : "";
         });
    


    return (
        <>


            <Container sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10%' }}>

                <Card sx={{ maxWidth: '30%', background: '#40CFFF' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={frutas[PrimerIndice]}
                        alt="primer slot" />
                </Card>
                <Card sx={{ maxWidth: '30%', background: '#40CFFF' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={frutas[SegundoIndice]}

                        alt="segundo slot" />
                </Card>
                <Card sx={{ maxWidth: '30%', background: '#40CFFF' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={frutas[TercerIndice]}
                        alt="tercer slot" />
                </Card>
                
            </Container>

            <Container sx={{display: 'flex', justifyContent: 'center', width:'100%'}}>
            <button onClick={runGame}>Clickéame</button>
            </Container>
            <Container sx={{display: 'flex', justifyContent: 'center', width:'100%', hight:'90%'}}>
              
            {(PrimerIndice == SegundoIndice) && (TercerIndice == SegundoIndice) && <Typography sx={{marginTop:'5%'}}>{  'Has ganado'+"  "+ TercerIndice+" Puntos y el premio es un : "+ premio}</Typography> }
            </Container>
        




        </>



    )
}
export default GameContainer