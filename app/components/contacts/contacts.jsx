import Image from "next/image";
import ContactsForm from "./contactsForm/contactsForm";
import Logo from "@images/cap.png";
import styles from "./contacts.module.scss";

function Contacts() {
  return (
    <div id="contacts" className={styles.contacts}>
      <div className={styles.top}>
        <h2 className={styles.title}>
          Date prisa para pedir a un precio promocional
        </h2>
        <p className={styles.text}>
          Date prisa para comprar &rdquo;Fast Slim&rdquo; con descuento y
          comienza tu viaje hacia el cuerpo de tus sueños
        </p>
        <ContactsForm />
      </div>
      <div className={styles.imagewrapper}>
        <Image src={Logo} className={styles.image} alt="product view" />
      </div>
    </div>
  );
}

export default Contacts;
