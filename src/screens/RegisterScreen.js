import '../css/login.css'
import {Link} from 'react-router-dom'

const Register = () => {
    const options = [
        {label: 'selecione o tipo de conta', value: ''},
        {label: 'artesão', value: 'artesão'},
        {label: 'cliente', value: 'cliente'},
    ]
    return(
        <div className="loginContainer">
            <div className='loginCard'>
                <h1 className='title'> Cadastro </h1>
                <input className='input' type='text' placeholder="digite seu nome" />
                <input className='input' type='text' placeholder="digite seu email" />
                <select className='input'>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <input className='input' type='password' placeholder="digite seu nome" />
                <input className='input' type='password' placeholder="confirme sua senha" />

                <button className='button'>Cadastrar</button>
                <p className='link'>Ja possui conta? <Link to='/Login'>Login</Link> </p>
            </div>
        </div>
    )
}

export default Register;