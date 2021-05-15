import Job from "../../assets/job.svg";
import "../login/styles.css";
import "../../styles/global.css";

const Login = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="items">
          <div className="itemsText">
            <img src={Job} alt="" />
            <h1>Search Jobs</h1>
            <p>
            O emprego que você procura está no SearchJobs!<br/>
            Acredite, é verdade! Tornar uma vaga boa para os talentos, pode fazer com que eles se inscrevam mesmo sem estarem pensando em mudar de emprego.
            </p>
          </div>
          <div className="itemsForm">
            <h1>Login</h1>
            <p>Digite seus dados para entrar e acessar<br/> o conteúdo.</p>

            <form action="">
              <input type="email" placeholder="E-mail"/>
              <input type="password" placeholder="Senha"/>
              <button className="enter">Entrar</button>
              <button className="cadastra">Ainda não tem conta? Cadastre-se!</button>   
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
