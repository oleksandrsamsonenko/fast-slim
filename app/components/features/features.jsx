import Feat1 from "@public/svg/feat1.svg?url";
import Feat2 from "@public/svg/feat2.svg?url";
import Feat3 from "@public/svg/feat3.svg?url";
import Image from "next/image";
import styles from "./features.module.css";

function Features() {
  return (
    <div className={styles.features}>
      <h2 className={styles.title}>RÁPIDO Y EFECTIVO</h2>
      <div className={styles.section}>
        <ul className={styles.list}>
          <li className={styles.listitem}>
            <div>
              <Image
                src={Feat1}
                className={styles.icon}
                alt="decorative icon"
              />
            </div>
            <p className={styles.text}>
              Las pastillas efervescentes FASTSLIM se disuelven en agua en menos
              de 60 segundos.
            </p>
          </li>
          <li className={styles.listitem}>
            <div>
              <Image
                src={Feat2}
                className={styles.icon}
                alt="decorative icon"
              />
            </div>
            <p className={styles.text}>
              Reemplazamos - CÁPSULAS FASTSLIM - una exitosa combinación de
              deliciosos ingredientes. Las cápsulas son excelentes como
              aperitivo nutritivo, te aportan energía y te dan una sensación de
              saciedad, ¡todo a favor de tu silueta!
            </p>
          </li>
          <li className={styles.listitem}>
            <div>
              <Image
                src={Feat3}
                className={styles.icon}
                alt="decorative icon"
              />
            </div>
            <p className={styles.text}>
              El complejo vitamínico líquido comienza a funcionar de forma
              inmediata y no daña el estómago.
            </p>
          </li>
        </ul>
        <div className={styles.wrapper}>
          <h3 className={styles.subtitle}>Método de uso:</h3>
          <div className={styles.textwrapper}>
            <p className={styles.description}>
              Toma 2 cápsulas al día, bebiendo 1 vaso de agua fría, previamente
              hervida. No masticar. Para lograr un efecto duradero, se
              recomienda tomar el suplemento durante 1 mes. No se debe exceder
              la dosis diaria recomendada.
            </p>
            <p className={styles.accent}>
              * El suplemento no causa somnolencia ni reduce la concentración.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
