import axios from 'axios'
import {useState} from 'react'

const URI = 'http://localhost:9000/entrada/'

const CompCreateLog = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    //procedimiento guardar
const store = async (e) => {
    e.preventDefault()
   await  axios.post (URI,{name:name,password:password})
  /* navigate('/')*/
}


        return(
            <div>
                <h3>LOGIN</h3>
                <form onSubmit={store}>
                   
                    <div className='mb-3'>
                    <label  className='form-label'>Nombre</label>
                    <input
                        value={name}
                        onChange={ (e)=> setName(e.target.value)}
                        type="text"
                        className='form-control'
                        />   
                   
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
                    <button type='submit' className='btn btn-primary'>LOGAR</button>
                </form>
            </div>
        )

}

export default CompCreateLog