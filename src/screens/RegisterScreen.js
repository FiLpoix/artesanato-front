import "../css/login.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import api from "../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Erro: Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Erro: As senhas não coincidem.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/register/", {
        username: name,
        email,
        password,
      });

      if (response.status === 201) {
        console.log("Conta criada com sucesso:", response.data);
        alert("Sucesso: Conta criada com sucesso!");
        window.location.href = "/login";
      } else {
        alert("Erro: Falha ao criar conta. Tente novamente.");
      }
    } catch (error) {
      alert("Erro: Ocorreu um erro ao tentar criar a conta.");
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }
  };

  const options = [
    { label: "selecione o tipo de conta", value: "" },
    { label: "artesão", value: "artesão" },
    { label: "cliente", value: "cliente" },
  ];
  return (
    <div className="loginContainer">
      <div className="loginCard">
        <h1 className="title"> Cadastro </h1>
        <form onSubmit={handleRegister} className="register-form">
          <input
            className="loginInput"
            type="text"
            placeholder="digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="loginInput"
            type="text"
            placeholder="digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <select className="loginInput">
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <input
            className="loginInput"
            type="password"
            placeholder="digite seu nome"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className="loginInput"
            type="password"
            placeholder="confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button className="button">Cadastrar</button>
          <p className="link">
            Ja possui conta? <Link to="/Login">Login</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
