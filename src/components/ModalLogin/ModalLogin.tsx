import "./modalLogin.style";

const ModalLogin = () => {
  return (
    <div className="container-modal">
      <div className="modal">
        <div className="login">
          <h2>entrar</h2>
          <form action="">
            <div className="email">
              <label htmlFor="">Nome de usuario ou e-mail*</label>
              <input type="text" />
            </div>
            <div className="password">
              <label htmlFor="">Senha*</label>
              <input type="password" />
            </div>

            <button type="submit">Acessar</button>
            <a>Perdeu sua senha?</a>
          </form>
        </div>
        <div className="register">
          <h2>Cadastre-se</h2>
          <div className="email">
            <label htmlFor="">Nome de usuario *</label>
            <input type="text" />
          </div>
          <div className="email">
            <label htmlFor="">Endereço de e-mail *</label>
            <input type="email" />
          </div>
          <div className="email">
            <label htmlFor="">Senha *</label>
            <input type="password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
