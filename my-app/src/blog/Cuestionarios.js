
import { Button, Container } from '@mui/material';
import Formulario2 from "./UserData";
import Login from "./Password";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import UserProfile from "./UserProfile";
import { useState } from 'react';
import CompCreateLog from './CrearLog';

const Cuestionarios = () => {

  const [user, setUser] = useState(UserProfile.getUser())

  const updateUserState= () => {
      setUser(UserProfile.getUser())

  }
  const logOut = ()=> {
    localStorage.clear();
    setUser(UserProfile.getUser())

  }


  return (

    <Container sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5%' }}>

      <Popup trigger={<Button /*onClick={sayHello}*/ sx={{ marginRight: '2%' }} variant="contained">Hazte jugador

      </Button>} position="bottom center" ><Formulario2 /></Popup>

      {
        (user == null) && (<Popup trigger={<Button /*onClick={sayHello}*/ sx={{ marginRight: '2%' }} variant="contained">Login

        </Button>} position="bottom center" ><CompCreateLog updateUserState = {updateUserState} /></Popup>)

      }

      {
        (user != null) && (<div>
          Hola, {user.name}
          <Button onClick={logOut}>Log Out</Button>
        </div>

        )

      }




    </Container>


  )
}

export default Cuestionarios;