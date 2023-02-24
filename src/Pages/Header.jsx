import React from "react";
import { NavLink } from "react-router-dom";
import "./../assets/header.css";

const Header = () => {
  return (
    <div>
      <NavLink to="/" className="navlink">
        Produtos
      </NavLink>
      <NavLink to="/contato" className="navlink">
        Contato
      </NavLink>
    </div>
  );
};

export default Header;
