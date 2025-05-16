import '../css/login.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        
        if (!username || !password) {
            alert("Erro: Por favor, preencha todos os campos.");
            return;
        }

        setLoading(true);
        try {
            const response = await api.post(`/api/token/`, {
                username,
                email,
                password,
            });
            
            if (response.status === 200) {
                const { access, refresh } = response.data;
                console.log("Token recebido:", access);

                if (!access) {
                    throw new Error("Token de acesso não recebido");
                }

                localStorage.setItem('access_token', access);
                localStorage.setItem('refresh_token', refresh);
                localStorage.setItem('username', username);

                navigate("/");
            } else {
                alert(response.data?.detail || "Login falhou. Verifique suas credenciais.");
            }
        } catch (error) {
            console.error("Erro no login:", error);
            alert(
                error.response?.data?.detail || 
                error.message || 
                "Ocorreu um erro ao tentar fazer login."
            );
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className="loginContainer">
            <div className='loginCard'>
                <h1 className='title'> Login </h1>
                <form onSubmit={handleLogin} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input className='loginInput' type='text' placeholder="digite seu nome" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                <input
                        className="loginInput"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="digite seu email"
                    />
                <input className='loginInput' type='password' placeholder='digite sua senha' value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />

                <button type='submit' className='button'>Entrar</button>
                <p className='link'>Ainda não tem conta? <Link to='/Register'>Registro</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default Login;