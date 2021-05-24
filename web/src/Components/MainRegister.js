import React from "react";
import '../Styles/MainRegister.css'
import {Link} from 'react-router-dom';

function MainRegister() {
  return (
    <main className="main">
      <div className="containerRegister">
        <div className="itemCadastro">
          <form action="">
            <h1>Cadastre-se</h1>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Senha" />
            <button className="buttonCadastro">Cadastro</button>
            <Link to="/login" className="contaExist">Já possuo uma conta na Search Jobs!</Link>
          </form>
        </div>
      </div>
    </main>
  );
}

export default MainRegister;
