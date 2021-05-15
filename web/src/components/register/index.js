import "../../styles/global.css";

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form action="">  
        <input type="text" placeholder="Nome"/>
        <input type="text" placeholder="E-mail"/>
        <input type="text" placeholder="Senha"/>
        <button>Cadastro</button>
      </form>
      
    </div>
  );
}

export default Register;