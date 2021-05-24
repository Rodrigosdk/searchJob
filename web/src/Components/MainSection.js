import React from "react";
import "../Styles/MainSection.css";
import IllustrationOne from "../Assets/illustration1.svg";
import IllustrationTwo from "../Assets/illustration2.svg";
import IllustrationThree from "../Assets/illustration3.svg";
import {BiSearchAlt2} from 'react-icons/bi';


function MainSection() {
  return (
    <>
      <main className="main">
        <div className="banner">
          <div className="container">
            <div className="search">
              <div className="titles">
                <h2>Encontre a vaga ideal</h2>
                <h3>Procure uma oportunidade de emprego</h3>
              </div>
              <div className="search_items">
                <form action="">
                  <input
                    type="text"
                    placeholder="Qual vaga você está procurando?"
                  />
                </form>
                <div className="button">
                  <button><span><BiSearchAlt2 size={20}/></span>Procurar vagas</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="benefits">
          <h1>Qual será as suas vantagens ultilizando a Search Jobs?</h1>
          <div className="container">
            <div className="item">
              <div className="itemsSection">
                <img src={IllustrationOne} alt="" />
                <h1>As melhores vagas</h1>
                <p>As melhores empresas para se trabalhar anunciam aqui</p>
              </div>
              <div className="itemsSection">
                <img src={IllustrationTwo} alt="" />
                <h1>Menos concorrência</h1>
                <p>Temos a menor média de concorrentes por vaga</p>
              </div>
              <div className="itemsSection">
                <img src={IllustrationThree} alt="" />
                <h1>Mais de 220.000 vagas</h1>
                <p>Somos o site com mais vagas de emprego do Brasil</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default MainSection;
