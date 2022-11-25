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
    const generarFrutas = () => frutas[Math.floor(Math.random() * 4)]
    const PrimerIndice = Math.floor(Math.random() * 4)
    const SegundoIndice = Math.floor(Math.random() * 4)
    const TercerIndice = (Math.floor(Math.random() * 3) + 1)
    const Contenido1 = frutas[PrimerIndice]
    const Contenido2 = frutas[SegundoIndice]
    const Contenido3 = frutas[TercerIndice]
    const Puntuacion = TercerIndice

    const [nombre, setNombre] = useState(smile)
    const runGame = () => {
        setNombre(generarFrutas());
    }
   
  
        
    


    return (
        <>

           {/*<Container sx={{ display: 'flex', justifyContent: 'space-between', width: '60%', marginBottom: '10%' }}>*/}
            <Container sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10%' }}>

                <Card sx={{ maxWidth: '30%', background: '#40CFFF' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Contenido1}
                        alt="primer slot" />
                </Card>
                <Card sx={{ maxWidth: '30%', background: '#40CFFF' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Contenido2}

                        alt="segundo slot" />
                </Card>
                <Card sx={{ maxWidth: '30%', background: '#40CFFF' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Contenido3}
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