import Feat1 from "@public/svg/feat1.svg";
import Feat2 from "@public/svg/feat2.svg";
import Feat3 from "@public/svg/feat3.svg";

import styles from "./features.module.css";

function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.section}>
        <h3 className={styles.title}>RÁPIDO Y EFECTIVO</h3>
        <ul className={styles.list}>
          <li className={styles.listitem}>
            <div>
              <Feat1 />
            </div>
            <p className={styles.text}>
              Las pastillas efervescentes FASTSLIM se disuelven en agua en menos
              de 60 segundos.
            </p>
          </li>
          <li className={styles.listitem}>
            <div>
              <Feat2 />
            </div>
            <p>
              Reemplazamos - CÁPSULAS FASTSLIM - una exitosa combinación de
              deliciosos ingredientes. Las cápsulas son excelentes como
              aperitivo nutritivo, te aportan energía y te dan una sensación de
              saciedad, ¡todo a favor de tu silueta!
            </p>
          </li>
          <li className={styles.listitem}>
            <div>
              <Feat3 />
            </div>
            <p>
              El complejo vitamínico líquido comienza a funcionar de forma
              inmediata y no daña el estómago.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.title}>Método de uso:</h3>
        <div className={styles.textwrapper}>
          <p className={styles.description}>
            Toma 2 cápsulas al día, bebiendo 1 vaso de agua fría, previamente
            hervida. No masticar. Para lograr un efecto duradero, se recomienda
            tomar el suplemento durante 1 mes. No se debe exceder la dosis
            diaria recomendada.
          </p>
          <p className={styles.accent}>
            * El suplemento no causa somnolencia ni reduce la concentración.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
