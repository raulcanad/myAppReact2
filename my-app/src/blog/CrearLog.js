import axios from 'axios'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { DialogContent, Typography } from "@mui/material";
import UserProfile from './UserProfile';



const CompCreateLog = (props) => {

    const URI = 'http://localhost:9000/blogs/login'
    /*const [name, setName] = useState('')
    const [password, setPassword] = useState('')*/

    const messages = {
        req: "Este campo es obligatorio",
        // name: "El formato introducido no es el correcto",
        //mail: "Debes introducir una dirección correcta",
        //phone: "Debes introducir un número correcto"
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
    /*const store = async (e) => {
        e.preventDefault()
       await  axios.post (URI,{name:name,password:password})
      /* navigate('/')*/
    //}


    return (
        <div>
            <h3>LOGIN</h3>
            <form onSubmit={handleSubmit(store)}>

                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input name='name'
                        {...register("name", { required: messages.req })}
                        //value={name}
                        //onChange={(e) => setName(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                    <Typography sx={{ color: 'red' }}>{errors.name && errors.name.message}</Typography>

                    <div className='mb-3'>
                        <label className='form-label'>Password</label>
                        <input name='password'
                            //value={password}
                            {...register("password", { required: messages.req })}
                            //  onChange={(e) => setPassword(e.target.value)}
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

export default CompCreateLog