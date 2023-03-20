import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderCommentsPageStyles} from "../HeaderCommentsPage/HeaderCommentsStyles";
import { goToCommentsPage } from "../../routes/coordinator";
import logoSmall from "../../assets/logoSmall.svg";
import x from "../../assets/x.svg";

const HeaderCommentsPage = () => {
    const navigate = useNavigate();
  return (
    <>
      <HeaderCommentsPageStyles>
        <section className="container-logo-nome-x">          
          <img
            src={x}
            alt="close"
            className="close"
            onClick={() => {
              goToPostsPage(navigate);              
            }}
          />                
            <img
              className="container-logoSmall"
              src={logoSmall}
              onClick={() => goToCommentsPage(navigate)}
              alt="logo small"
            />                 
            <a onClick={() => goToCommentsPage(navigate)}>Logout</a>          
        </section>
      </HeaderCommentsPageStyles>
    </>
  );
};

export default HeaderCommentsPage;