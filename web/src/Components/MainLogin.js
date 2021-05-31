import React, { useState } from "react";

import {Link} from 'react-router-dom';
import "../Styles/MainLogin.css";

import InputStandart from "./InputStandart";

export default function MainLogin() {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <main className="main">
      <div className="container">
        <div className="items">
          <div className="itemsText">
            <img src="" alt="" />
            <h1>Search Jobs</h1>
            <p>
              O emprego que você procura está no SearchJobs!
              <br />
              Acredite, é verdade! Tornar uma vaga boa para os talentos, pode
              fazer com que eles se inscrevam mesmo sem estarem pensando em
              mudar de emprego.
            </p>
          </div>
          <div className="itemsForm">
            <h1>Login do cliente</h1>
            <p>Digite seus dados para entrar e acessar.</p>

            <form action="">
              <InputStandart
                type="text" 
                title="Usuário"
                state={username}
                setState={e=>setUsername(e.target.value)} 
              />
              <InputStandart
                type="password" 
                title="Senha"
                state={password}
                setState={e=>setPassword(e.target.value)} 
              />
              
              <Link className="enter">Entrar</Link>
              <Link to="/register" className="cadastra">
                Ainda não tem conta? Cadastre-se!
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
