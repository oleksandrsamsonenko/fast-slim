import dynamic from "next/dynamic";

const Timer = dynamic(() => import("./timer/timer"), { ssr: false });

import Link from "next/link";
import styles from "./countdown.module.css";

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
            Date prisa para comprar "Fast Slim" con descuento y comienza tu
            viaje hacia el cuerpo de tus sueños
          </h2>
          <p className={styles.text}>
            Tiempo restante hasta el final de la promoción:
          </p>
        </div>
        <Timer />
        <Link href="#contacts" className={styles.button}>
          Compar
        </Link>
      </div>
    </div>
  );
}

export default Countdown;
