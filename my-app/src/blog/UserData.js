import React,{} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompCreateCuenta from './CrearCuenta';

const Formulario2 = () => {

    return (
        <div className="App">
            <CompCreateCuenta/>
        <BrowserRouter>
            <Routes>             
                <Route path='/create' element={<CompCreateCuenta/>}/>              
            </Routes>
        </BrowserRouter>
        
      </div>
    );
}
 
export default Formulario2;
