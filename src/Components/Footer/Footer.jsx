import React from "react";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import { FooterStyled } from "../Footer/Styles";

const Footer = () => {
  return (
    <>
      <FooterStyled>
        <h4>Aline Benjamim - 2023</h4>
        <div className="redes-sociais">
          <a href="https://github.com/AlineBCBenjamim" target={"_blank"}>
            <img src={github} alt="icone do github" rel="noopener noreferrer" />
          </a>
          <a
            href="https://www.linkedin.com/in/alinebcarvalhobenjamim/"
            target={"_blank"}
          >
            <img
              src={linkedin}
              alt="icone do linkedin"
              rel="noopener noreferrer"
            />
          </a>
        </div>
      </FooterStyled>
    </>
  );
};

export default Footer;
