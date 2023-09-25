import styles from "./experts.module.scss";

function Experts() {
  return (
    <div className={styles.experts} id="experts">
      <h2 className={styles.title}>
        Los expertos confirman la eficacia de &rdquo;Fast Slim&rdquo;
      </h2>
      <p className={styles.description}>
        Como nutricionista, me gustaría abordar los efectos positivos del
        suplemento dietético &rdquo;Fast Slim&rdquo; en la pérdida de peso y su
        seguridad para la salud del estómago. Se han realizado extensos estudios
        clínicos que confirman la eficacia y seguridad de este suplemento para
        apoyar los esfuerzos de pérdida de peso.
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

      <div>
        <p className={styles.author}>Valentina Gabriela Rodríguez</p>
        <p className={styles.position}> Dietista-nutricionista</p>
      </div>
    </div>
  );
}

export default Experts;
