import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const lacation = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderBrand = () => {
    if (lacation.pathname === "/") {
      return (
        <h1>
          Olá! Eu sou a <br></br>mariana athayde, <br></br>desenvolvedora
          front-end
        </h1>
      );
    } else {
      return (
        <h1>
          mariana <br></br>athayde
        </h1>
      );
    }
  };

  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.brandAndIcon}>
        <NavLink to="/">{renderBrand()}</NavLink>
        {!isMenuOpen ? (
          <RxHamburgerMenu
            className={styles.menuIcon}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        ) : (
          <IoCloseOutline
            className={styles.menuIcon}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </div>
      <ul className={isMenuOpen ? styles.open : ""}>
        <li>
          <NavLink to="/about">sobre mim</NavLink>
        </li>
        <li>
          <NavLink to="/projects">projetos</NavLink>
        </li>
        <li className={styles.contactLink}>
          <NavLink to="/contacts">contatos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
