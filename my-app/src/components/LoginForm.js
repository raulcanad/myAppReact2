import axios from 'axios'

import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import UserProfile from '../services/UserProfile';



const LoginForm = (props) => {

    const URI = 'http://localhost:9000/blogs/login'
   

    const messages = {
        req: "Este campo es obligatorio",
        
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const store = async (userInfo) => {


        try {
            const res = await axios.post(URI, { name: userInfo.name, password: userInfo.password })
            UserProfile.setUser(res.data)
            props.updateUserState()
        } catch (error) {
            alert(error.response.data)
        }


    }


    //procedimiento guardar
    


    return (
        <div>
            <h3>LOGIN</h3>
            <form onSubmit={handleSubmit(store)}>

                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input name='name'
                        {...register("name", { required: messages.req })}

                        type="text"
                        className='form-control'
                    />
                    <Typography sx={{ color: 'red' }}>{errors.name && errors.name.message}</Typography>

                    <div className='mb-3'>
                        <label className='form-label'>Password</label>
                        <input name='password'

                            {...register("password", { required: messages.req })}

                            type="text"
                            className='form-control'
                        />
                        <Typography sx={{ color: 'red' }}> {errors.password && errors.password.message}</Typography>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>LOGAR</button>
            </form>
        </div>
    )

}

export default LoginForm