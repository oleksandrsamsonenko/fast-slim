import Image from "next/image";
import styles from "./contacts.module.css";
import Logo from "@public/images/cap.png";

function Contacts() {
  return (
    <div id="contacts" className={styles.contacts}>
      <div className={styles.top}>
        <h2 className={styles.title}>
          Date prisa para pedir a un precio promocional
        </h2>
        <p className={styles.text}>
          Date prisa para comprar "Fast Slim" con descuento y comienza tu viaje
          hacia el cuerpo de tus sueños
        </p>
      </div>
      <form action="" className={styles.form}>
        <div className={styles.inputwrapper}>
          <input
            className={styles.input}
            type="text"
            id="name"
            placeholder=" "
          />
          <label className={styles.label} htmlFor="name">
            Nombre
          </label>
        </div>
        <div className={styles.inputwrapper}>
          <input
            className={styles.input}
            type="phone"
            id="phone"
            placeholder=" "
          />
          <label className={styles.label} htmlFor="phone">
            Número telefónico
          </label>
        </div>
        <button type="submit" className={styles.button}>
          Compar
        </button>
      </form>
      <Image src={Logo} className={styles.image} />
    </div>
  );
}

export default Contacts;
