import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container } from '@mui/system';
import Popup from 'reactjs-popup';



import smile from './1.png';
import leo from './2.png';
import frodo from './3.png';
import sira from './4.png';
import { DialogContent,Typography } from "@mui/material";

const SegundoCompoente = () => {

    const frutas = [smile, leo, sira, frodo];
    
    const [PrimerIndice,setPrimerIndice]= useState( Math.floor(Math.random() * 4))
    const [SegundoIndice,setSegundoIndice]= useState( Math.floor(Math.random() * 4))
    const [TercerIndice,setTercerIndice]= useState( Math.floor(Math.random() * 4))
    const Puntuacion = TercerIndice
   
   
    const runGame = () => {
        setPrimerIndice(Math.floor(Math.random() * 4))
        setSegundoIndice(Math.floor(Math.random() * 4))
        setTercerIndice(Math.floor(Math.random() * 4))    
    }
   
  
        
    


    return (
        <>

           {/*<Container sx={{ display: 'flex', justifyContent: 'space-between', width: '60%', marginBottom: '10%' }}>*/}
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
              
            {(PrimerIndice == SegundoIndice) && (TercerIndice == SegundoIndice) && <Typography sx={{marginTop:'5%'}}>{  'Has ganado'+"  "+Puntuacion+" Puntos" }</Typography> }
            </Container>

        </>



    )
}
export default SegundoCompoente