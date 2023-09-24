import styles from "./experts.module.css";

function Experts() {
  return (
    <div className={styles.experts}>
      <h2 className={styles.title}>
        Los expertos confirman la eficacia de "Fast Slim"
      </h2>
      <p className={styles.description}>
        Como nutricionista, me gustaría abordar los efectos positivos del
        suplemento dietético "Fast Slim" en la pérdida de peso y su seguridad
        para la salud del estómago. Se han realizado extensos estudios clínicos
        que confirman la eficacia y seguridad de este suplemento para apoyar los
        esfuerzos de pérdida de peso.
      </p>
      <p className={styles.description}>
        Fast Slim se fabrica en instalaciones aprobadas por la FDA, lo que
        garantiza el cumplimiento de estrictas medidas de control de calidad. El
        proceso de producción sigue las pautas de Buenas Prácticas de
        Manufactura (GMP), que abarcan pruebas rigurosas, garantía de calidad y
        estandarización. Estas medidas garantizan que el suplemento sea seguro,
        potente y libre de contaminantes, cumpliendo con los más altos
        estándares de la industria.
      </p>

      <p className={styles.author}>
        <span className={styles.accent}>Valentina Gabriela Rodríguez </span>
        Dietista-nutricionista
      </p>
    </div>
  );
}

export default Experts;