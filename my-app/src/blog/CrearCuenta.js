import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";



const URI = 'http://localhost:9000/blogs/'

const CompCreateCuenta = () => {
  
//Expresiones regulares
const dniRegex = RegExp(/[0-9] {8} [AZ] {1}/);
const emailRegex = RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ );


  const { register, handleSubmit } = useForm();
    
const store = async (userInfo) => {

  
    await axios.post (URI,{dni:userInfo.dni,name:userInfo.name,last_name:userInfo.last_name,birthday:userInfo.birthday,phone:userInfo.phone,email:userInfo.email,password:userInfo.password})
   
 
}


        return(
            <div>
                <h3>CREAR REGISTRO</h3>
                <form onSubmit={handleSubmit(store)}>
                    <div className='mb-3'>
                    <label className='form-label'>DNI</label>
                    <input name='dni'
                        {...register("dni")}
                       
                        type="text"
                        className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input name='name'
                       {...register("name")}
                      
                        type="text"
                        className='form-control'
                        />
                    <div className='mb-3'>
                    <label className='form-label'>Apellido</label>
                    <input name='last_name'
                     {...register("last_name")}
                     
                        type="text"
                        className='form-control'
                        />
                    </div>    
                    <div className='mb-3'>
                    <label className='form-label'>Cumple</label>
                    <input name='birthday'
                     {...register("birthday")}
                     
                        type="date"
                        className='form-control'
                   />
                    
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>Telefono</label>
                    <input name='phone'
                     {...register("phone")}                    
                        type="text"
                        className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>email</label>
                    <input name='email'
                        {...register("email")}
                      
                        type="text"
                        className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input name='password'
                     {...register("password")}
                      
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