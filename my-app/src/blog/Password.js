import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompCreateLog from './CrearLog';

const Login = (props) => {

    return (
        <div className="App">
            <CompCreateLog/>
      { /* <BrowserRouter>
            <Routes>             
                <Route path='/create' element={<CompCreateLog/>}/>              
            </Routes>
    </BrowserRouter>*/}
        
      </div>
    );
}
 
export default Login;

//borrar más tarde