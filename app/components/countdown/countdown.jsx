import dynamic from "next/dynamic";

const Timer = dynamic(() => import("./timer/timer"), { ssr: false });

import styles from "./countdown.module.scss";

function Countdown() {
  return (
    <div className={styles.countdown}>
      <div className={styles.promo}>
        <div className={styles.textwrapper}>
          <div>
            <h3 className={styles.price}>1698 MXN</h3>
            <h3 className={styles.sale}>849 MXN</h3>
          </div>
          <h2 className={styles.title}>
            Date prisa para comprar &rdquo;Fast Slim&rdquo; con descuento y
            comienza tu viaje hacia el cuerpo de tus sueños
          </h2>
          <p className={styles.text}>
            Tiempo restante hasta el final de la promoción:
          </p>
        </div>
        <Timer />
        <div className={styles.buttonwrapper}>
          <a href="#contacts" className={styles.button}>
            Compar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
