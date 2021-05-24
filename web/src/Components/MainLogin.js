import React from "react";

import {Link} from 'react-router-dom';
import "../Styles/MainLogin.css";

export default function MainLogin() {
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
            <h1>Login do cliete</h1>
            <p>Digite seus dados para entrar e acessar.</p>

            <form action="">
              <input type="email" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />
              <Link className="enter">Entrar</Link>
              <Link className="cadastra">
                Ainda não tem conta? Cadastre-se!
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
