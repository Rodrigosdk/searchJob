import "../../styles/global.css";
import '../register/styles.css'

function Register() {
  return (
    <div className="mainCadastro">
     <div className="container">
      <div className="itemCadastro">
        <form action="">  
        <h1>Cadastre-se</h1>
          <input type="text" placeholder="Nome"/>
          <input type="text" placeholder="E-mail"/>
          <input type="text" placeholder="Senha"/>
          <button className="buttonCadastro">Cadastro</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Register;