import React, { useState } from "react";
import "../Styles/MainRegister.css";
import { Link } from "react-router-dom";
import InputStandart from "./InputStandart";

import api from '../Services/api';

function MainRegister() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registrationHandler(e){
    e.preventDefault();

    try {

      await api.post('users', {
        name,
        email,
        password
      });

      alert('Usuário cadastrado com sucesso!');

      setName('');
      setEmail('');
      setPassword('');
      
    } catch (err) {
      return console.log(err)
    }

  }

  return (
    <main className="main">
      <div className="containerRegister">
        <div className="itemCadastro">
          <form action="">
            <h1>Cadastre-se</h1>
            <InputStandart
              type="text"
              title="Nome"
              state={name}
              setState={(e) => setName(e.target.value)}
            />
            <InputStandart
              type="text"
              title="E-mail"
              state={email}
              setState={(e) => setEmail(e.target.value)}
            />
            <InputStandart 
              type="password" 
              title="Senha"
              state={password}
              setState={(e)=> setPassword(e.target.value)} 
            />
            <button className="buttonCadastro" onClick={registrationHandler}>Cadastrar</button>
            <Link to="/login" className="contaExist">
              Já possuo uma conta na Search Jobs!
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}

export default MainRegister;
