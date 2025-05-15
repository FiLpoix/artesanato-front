import '../css/login.css'
import {Link} from 'react-router-dom'

const Login = () => {
    return(
        <div className="loginContainer">
            <div className='loginCard'>
                <h1 className='title'> Login </h1>
                <input className='input' type='text' placeholder="digite seu nome" />
                <input className='input' type='password' placeholder='digite sua senha' />

                <button className='button'>Entrar</button>
                <p className='link'>Ainda não tem conta? <Link to='/Register'>Registro</Link> </p>
            </div>
        </div>
    )
}

export default Login;