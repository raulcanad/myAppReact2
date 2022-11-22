import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";



const URI = 'http://localhost:9000/blogs/'

const CompCreateCuenta = () => {
    const [dni, setDNI] = useState('')
    const [name, setName] = useState('')
    const [last_name, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
//Expresiones regulares
const dniRegex = RegExp(/[0-9] {8} [AZ] {1}/);
const emailRegex = RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ );

const [userInfo, setUserInfo] = useState({
    dni: "",
    email: "",
    
  });
  const handleChange = (event) => {
    const { dni, value } = event.target;
    setUserInfo({ ...userInfo, [dni]: value });
  };

  const { register, handleSubmit } = useForm();
    
const store = async (e) => {
    e.preventDefault()
  
    await axios.post (URI,{dni:dni,name:name,last_name:last_name,birthday:birthday,phone:phone,email:email,password:password})
   
  /* navigate('/')*/
}


        return(
            <div>
                <h3>CREAR REGISTRO</h3>
                <form onSubmit={store}>
                    <div className='mb-3'>
                    <label className='form-label'>DNI</label>
                    <input
                        {...register("dni")}
                        value={dni}
                        onChange={ (e)=> setDNI(e.target.value)}
                        type="text"
                        className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={name}
                        onChange={ (e)=> setName(e.target.value)}
                        type="text"
                        className='form-control'
                        />
                    <div className='mb-3'>
                    <label className='form-label'>Apellido</label>
                    <input
                        value={last_name}
                        onChange={ (e)=> setLastName(e.target.value)}
                        type="text"
                        className='form-control'
                        />
                    </div>    
                    <div className='mb-3'>
                    <label className='form-label'>Cumple</label>
                    <input
                        value={birthday}
                        onChange={ (e)=> setBirthday(e.target.value)}
                        type="date"
                        className='form-control'
                   />
                    
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>Telefono</label>
                    <input
                        value={phone}
                        onChange={ (e)=> setPhone(e.target.value)}
                        type="text"
                        className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>email</label>
                    <input
                        {...register("email")}
                        value={email}
                        onChange={ (e)=> setEmail(e.target.value)}
                        type="text"
                        className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                        value={password}
                        onChange={ (e)=> setPassword(e.target.value)}
                        type="text"
                        className='form-control'
                        />
                    </div>
                    </div>
                    <button type='submit' className='btn btn-primary'>Crear</button>
                </form>
                {/*!valid&&<span>Data no valido</span>*/}
            </div>
        )

}

export default CompCreateCuenta