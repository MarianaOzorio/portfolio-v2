import styles from "./Footer.module.css";

function Footer() {
  return (
    <ul className={styles.list}>
      <li>
        <a
          href="mailto:mariana.athayde@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/mariana-athayde-o/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
      </li>
      <li>
        <a
          href="https://github.com/MarianaOzorio"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
      </li>
    </ul>
  );
}

export default Footer;
