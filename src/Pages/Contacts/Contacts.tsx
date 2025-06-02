import styles from "./Contacts.module.css";

function Contacts() {
  return (
    <div className={styles.container}>
      <ul className={styles.contactsWrapper}>
        <li>
          <a
            href="mailto:mariana.athayde@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            me mande um <br></br>
            <h3>email</h3>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mariana-athayde-o/"
            target="_blank"
            rel="noreferrer"
          >
            me adicione no <br></br>
            <h3>linkedin</h3>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MarianaOzorio"
            target="_blank"
            rel="noreferrer"
          >
            veja meu <br></br>
            <h3>github</h3>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
