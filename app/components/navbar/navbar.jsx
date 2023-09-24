import Logo from "@public/logo.svg";
import styles from "./navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.link}>
          <a href="#ingredients">Ingredientes</a>
        </li>
        <li className={styles.link}>
          <a className={styles.link} href="#funciona">
            CÓMO FUNCIONA
          </a>
        </li>
        <li>
          <Logo />
        </li>
        <li className={styles.link}>
          <a href="#experts">Eficiencia</a>
        </li>
        <li className={styles.link}>
          <a href="#slider">Comentarios</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
