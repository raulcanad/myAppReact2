
import { Button, Container } from '@mui/material';
import Formulario2 from "./UserData";
import Login from "./Password";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';






const Cuestionarios = () => {
  return (

    <Container sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5%' }}>

      <Popup trigger={<Button /*onClick={sayHello}*/ sx={{ marginRight: '2%' }} variant="contained">Hazte jugador

      </Button>} position="bottom center" ><Formulario2 /></Popup>


      <Popup trigger={<Button /*onClick={sayHello}*/ sx={{ marginRight: '2%' }} variant="contained">Login

      </Button>} position="bottom center" ><Login/></Popup>


    </Container>


  )
}

export default Cuestionarios;