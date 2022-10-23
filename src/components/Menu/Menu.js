import React from "react";
import logo from "../../assets/Logo.png";

const Menu = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo principal" />
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/killers">Killers</a>
          </li>
          <li>
            <a href="/survivors">Survivors</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
