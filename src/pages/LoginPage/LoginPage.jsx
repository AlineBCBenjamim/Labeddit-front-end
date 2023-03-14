import React from "react";
import logo from "../../assets/logo.svg";
import { LoginPageStyled } from "./LoginPageStyled";

const LoginPage = () => {
  return (
    <>
        <LoginPageStyled>
            <section className="container-logo-texto">
                <img src={logo} alt="logo"/>
                <h1>LabEddit</h1>
                <h5>O projeto de rede social da Labenu</h5>                
            </section>
            <section className="container-input">
                <input type="email" value="" placeholder="E-mail"/>
                <input type="password" value="" placeholder="Senha"/>
            </section>
            <section className="container-button">
                <button className="button-color" onClick={""}>Continuar</button>
                <hr/>
                <button className="button" onClick={""}>Crie uma conta!</button>
            </section>
        </LoginPageStyled>
    </>
  )
};

export default LoginPage;
