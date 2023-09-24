import Image from "next/image";
import Eff1 from "@public/images/effects/effects1.png";
import Eff2 from "@public/images/effects/effects2.png";
import Eff3 from "@public/images/effects/effects3.png";
import Eff4 from "@public/images/effects/effects4.png";

import styles from "./effects.module.css";

function Effects() {
  return (
    <div className={styles.effects}>
      <h2 className={styles.title}>CÓMO FUNCIONA</h2>
      <ul className={styles.list}>
        <li className={styles.listitem}>
          <Image src={Eff1} className={styles.image} alt="photo of changes" />
          <div className={styles.wrapper}>
            <h3 className={styles.subtitle}>
              Quema la grasa y elimina la celulitis
            </h3>
            <p className={styles.description}>
              Los extractos de té verde y la fruta Garcinia Cambogia trabajan
              juntos, acelerando el metabolismo y quemando la grasa almacenada
              en el cuerpo. Eliminan rápidamente las toxinas acumuladas y el
              exceso de líquidos del cuerpo, con total seguridad, adicionalmente
              estimulan la producción de colágeno, que proporciona elasticidad a
              la piel, eliminando las estrías y la &rdquo;piel de
              naranja&rdquo;.
            </p>
          </div>
        </li>
        <li className={styles.listitem}>
          <Image src={Eff2} className={styles.image} alt="photo of changes" />
          <div className={styles.wrapper}>
            <h3 className={styles.subtitle}>
              LAS CÁPSULAS FASTSLIM reducen el apetito
            </h3>
            <p className={styles.description}>
              Reducen el nivel de glucosa en la sangre, que envía las señales de
              saciedad al cerebro. ¡Las porciones grandes y las comidas no
              saludables ya no te atraerán, ni estimularán tu apetito! Como
              resultado, consumirás la cantidad de calorías necesarias para
              mantener el tono muscular sin aumentar de peso.
            </p>
          </div>
        </li>
        <li className={styles.listitem}>
          <Image src={Eff3} className={styles.image} alt="photo of changes" />
          <div className={styles.wrapper}>
            <h3 className={styles.subtitle}>
              Purifica el organismo y acelera el metabolismo.
            </h3>
            <p className={styles.description}>
              Las sustancias biológicas activas y las vitaminas del grupo B
              expulsan las toxinas y purifica los vasos del colesterol. Mejoran
              el metabolismo y el equilibrio hormonal. Las vitaminas fortalecen
              el sistema inmune. La pérdida de peso es duradera.
            </p>
          </div>
        </li>
        <li className={styles.listitem}>
          <Image src={Eff4} className={styles.image} alt="photo of changes" />
          <div className={styles.wrapper}>
            <h3 className={styles.subtitle}>
              Las cápsulas tienen un poderoso efecto tonificante.
            </h3>
            <p className={styles.description}>
              Tomando una cápsula por la mañana, el entrenamiento será más
              efectivo y tendrás un excelente estado de ánimo durante todo el
              día. Al contribuir con el aumento en el nivel de actividad,
              quemarás más calorías, y con ellas los centímetros adicionales
              desaparecerán. ¡Además, las cápsulas Fast Slim tienen un aroma
              agradable y un sabor increíblemente delicioso!
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Effects;
