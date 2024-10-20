import styles from "./Footer.module.css";
import React from "react";

function Footer() {
  return (
    <ul className={styles.list}>
      <li>
        <a href="mailto:mariana.athayde@gmail.com" target="_blank">
          email
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/mariana-athayde-o/"
          target="_blank"
        >
          linkedin
        </a>
      </li>
      <li>
        <a href="https://github.com/MarianaOzorio" target="_blank">
          github
        </a>
      </li>
    </ul>
  );
}

export default Footer;
