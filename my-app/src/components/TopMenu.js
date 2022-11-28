
import { Button, Container } from '@mui/material';
import CreateAccountForm from './CreateAccountForm';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import UserProfile from "../services/UserProfile";
import { useState } from 'react';
import LoginForm from './LoginForm';

const TopMenu = () => {

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

      <Popup trigger={<Button  sx={{ marginRight: '2%' }} variant="contained">Hazte jugador

      </Button>} position="bottom center" ><CreateAccountForm/></Popup>

      {
        (user == null) && (<Popup trigger={<Button  sx={{ marginRight: '2%' }} variant="contained">Login

        </Button>} position="bottom center" ><LoginForm updateUserState = {updateUserState} /></Popup>)

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

export default TopMenu;