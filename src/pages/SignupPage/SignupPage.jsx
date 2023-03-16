import React from "react";
import { useNavigate } from "react-router-dom";
import { SignupPageStyled } from "./SignupPageStyled";
import HeaderSignupPage from "../../Components/HeaderSignupPage/HeaderSignupPage";

const SignupPage = () => {  

  return (
    <>
      <HeaderSignupPage />
      <SignupPageStyled>
        <section>
          <h1>Olá, boas vindas ao LabEddit ;)</h1>
        </section>
        <section className="container-input">
          <input type="text" value="" placeholder="Apelido" />
          <input type="email" value="" placeholder="E-mail" />
          <input type="password" value="" placeholder="Senha" />
        </section>
        <section className="container-termo">
          <h6>
            Ao continuar, você concorda com o nosso <a>Contrato de usuário</a> e
            nossa <a>Politica de Privacidade</a>
          </h6>
          <div className="container-checkbox">
            <input className="checkbox"
              type="checkbox"
              id="recebimento email"
              name="interesse"
              value="recebimento email"
            />
            <label for="recebimento email">
              Eu concordo em receber emails sobre coisas legais no Labeddit
            </label>
          </div>
          <button className="button-color" onClick={""}>
            Cadastrar
          </button>
        </section>
      </SignupPageStyled>
    </>
  );
};

export default SignupPage;
