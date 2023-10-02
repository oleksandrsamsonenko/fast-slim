import Image from "next/image";
import tubes from "public/tubes.png";
import Decore from "public/decoration.svg";

import styles from "./hero.module.scss";

function Hero() {
  return (
    <div className={styles.container}>
      <Image
        src={tubes}
        className={styles.image}
        alt="product picture"
        priority
      />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          EL SIMPLE SECRETO DE LA PÉRDIDA DE PESO EFECTIVA
        </h1>
        <ul className={styles.list}>
          <li className={styles.benefit}>
            <p className={styles.info}>
              <Decore className={styles.decore} />
              Refuerzo de los procesos, que eliminan la grasa
            </p>
          </li>
          <li className={styles.benefit}>
            <p className={styles.info}>
              <Decore className={styles.decore} />
              Una poderosa carga de energía durante todo el día
            </p>
          </li>
          <li className={styles.benefit}>
            <p className={styles.info}>
              <Decore className={styles.decore} />
              Prevención del consumo de calorías en exceso
            </p>
          </li>
          <li className={styles.benefit}>
            <p className={styles.info}>
              <Decore className={styles.decore} />
              Alisamiento de la piel,eliminación de estrías
            </p>
          </li>
          <li className={styles.benefit}>
            <p className={styles.info}>
              <Decore className={styles.decore} />
              Aceleración del metabolismo
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
