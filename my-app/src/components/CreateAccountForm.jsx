import axios from 'axios'

import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";


const URI = 'http://localhost:9000/blogs/'

const CreateAccountForm = () => {

    //Expresiones regulares
    
    const patterns = { dni: /^\d{8}[a-zA-Z]$/};
    
    const messages = {
        req: "Este campo es obligatorio",
        dni: "El formato introducido no es el correcto",

    };


    const { register, handleSubmit, formState: { errors } } = useForm();

    const store = async (userInfo) => {


        await axios.post(URI, { dni: userInfo.dni, name: userInfo.name, last_name: userInfo.last_name, birthday: userInfo.birthday, phone: userInfo.phone, email: userInfo.email, password: userInfo.password })


    }


    return (
        <div>
            <h3>CREAR REGISTRO</h3>
            <form onSubmit={handleSubmit(store)}>
                <div className='mb-3' >
                    <label className='form-label'>DNI</label>
                    <input name='dni'
                        {...register("dni", { required: messages.req ,
                            pattern: {
                            value: patterns.dni,
                            message: messages.dni}
                          })}

                        type="text"
                        className='form-control'
                    />
                   
                   <Typography sx={{color:'red'}}> {errors.dni && errors.dni.message}</Typography>
                   
                    
                    
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input name='name'
                        {...register("name", { required: messages.req })}

                        type="text"
                        className='form-control'
                    />
                   <Typography sx={{color:'red'}}>{errors.name && errors.name.message}</Typography>

                    <div className='mb-3'>
                        <label className='form-label'>Apellido</label>
                        <input name='last_name'
                            {...register("last_name", { required: messages.req })}

                            type="text"
                            className='form-control'
                        />
                        <Typography sx={{color:'red'}}>{errors.last_name && errors.last_name.message }</Typography>

                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Cumple</label>
                        <input name='birthday'
                            {...register("birthday", { required: messages.req })}

                            type="date"
                            className='form-control'
                        />
                       <Typography sx={{color:'red'}}> {errors.birthday && errors.birthday.message}</Typography>

                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Telefono</label>
                        <input name='phone'
                            {...register("phone", { required: messages.req })}
                            type="text"
                            className='form-control'
                        />
                       <Typography sx={{color:'red'}}> {errors.phone && errors.phone.message}</Typography>

                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>email</label>
                        <input name='email'
                            {...register("email", { required: messages.req })}

                            type="email"
                            className='form-control'
                        />
                        <Typography sx={{color:'red'}}>{errors.email && errors.email.message }</Typography>

                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Password</label>
                        <input name='password'
                            {...register("password", { required: messages.req })}

                            type="password"
                            className='form-control'
                        />
                      <Typography sx={{color:'red'}}> {errors.password && errors.password.message}</Typography> 
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>Crear</button>
            </form>
            {/*!valid&&<span>Data no valido</span>*/}
        </div>
    )

}

export default CreateAccountForm