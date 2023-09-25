"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Slider1 from "@public/images/slides/slider1.jpeg";
import Slider2 from "@public/images/slides/slider2.jpeg";
import Slider3 from "@public/images/slides/slider3.jpeg";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./slider.module.scss";

function Slider() {
  const slides = (
    <>
      {/* Because of nature of how the loop mode works (it will rearrange slides), 
        total number of slides must be >= slidesPerView * 2 */}
      <SwiperSlide className={styles.slide}>
        <div className={styles.wrap}>
          <Image
            src={Slider1}
            alt="result photo"
            priority
            fill="contain"
            sizes="30vw 90vw"
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.subtitle}>¡Adelgazó 11 kg en 3,5 semanas!</h3>
          <p className={styles.name}>
            Manuel Suárez Gomez, 34 años, Guadalajara
          </p>
          <p className={styles.feedback}>
            Como lo que quiero y no tengo panza! Ya había caído varias veces con
            distintos anuncios y recomendaciones de conocidos. En este caso
            también iba a decir que NO. Pero mis hijas no dejaban de molestarme
            y me dijeron que usara este producto si no quería alimentarme con
            puras ensaladas. Entonces empecé a usarlo para que me dejaran en
            paz. La composición es natural, así que supuse que no me iba a hacer
            daño, y ellas iban a comprobar de que no valía nada. Pues tuve que
            tragarme mis palabras y, por una vez, no tenía razón. La panza me
            desapareció literalmente en una semana. También reconozco que me
            siento mucho mejor. Hasta juego al fútbol con mis nietos sin ningún
            problema. Pero sigo comiendo lo de siempre. Muy bueno
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.wrap}>
          <Image
            src={Slider2}
            alt="result photo"
            priority
            fill="contain"
            sizes="30vw 90vw"
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.subtitle}>¡Adelgazó 22 kg en 4 semanas!</h3>
          <p className={styles.name}>Maria Hernández Torres, 26 años, México</p>
          <p className={styles.feedback}>
            ¡Rápido y sano!¡Todo este tratamiento ocurrió en un abrir y cerrar
            de ojos! Empecé a aplicar este producto el primer día de vacaciones.
            Cuando volví a la oficina 2 semanas después, todos se quedaron
            asombrados. Mi jefe incluso habló conmigo en privado, ya que estaba
            preocupado por si tenía alguna enfermedad grave, ya que había
            adelgazado tan rápido. ¡Respiró con un alivio incontenido cuando le
            hablé del tratamiento y de lo maravillosamente que me sentía! Me dio
            la enhorabuena y me preguntó cómo se llamaba el producto, ya que se
            lo quería comprar a su hija, que engordaba por culpa de los
            esteroides. El tratamiento también ayudó a la hija de mi jefe
            (adelgazó al peso adecuado), ¡y ahora me han subido el sueldo!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.wrap}>
          <Image
            src={Slider3}
            alt="result photo"
            priority
            fill="contain"
            sizes="30vw 90vw"
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.subtitle}>¡Adelgazó 23 kg en 8 semanas!</h3>
          <p className={styles.name}>
            Lara Berasategi Castro, 31 años, Monterrey
          </p>
          <p className={styles.feedback}>
            He derrotado los complejos y he vuelto a encontrar el amor. En toda
            mi vida, he intentado adelgazar exactamente 17 veces. Probé las
            dietas de hambre, sin efecto alguno. Dieta de col, dieta Dukan,
            dieta purificadora, dieta cetogénica. Lo probé todo, sin efecto
            alguno. Estaba hundida, ya que todas mis relaciones se iban al
            diablo por culpa de mis complejos. Estaba celosa de mis parejas, me
            quejaba de mi aspecto... Nunca habría pensado que después de tantos
            años de tormento iba a adelgazar aplicando este producto. ¡Ha sido
            asombroso! Comprar ropa ya no me supone una molestia, ¡¡¡ya que mi
            talla CH o M está disponible en todos lados!!! No siento vergüenza
            cuando la gente me mira estando de vacaciones. Un giro de 180
            grados, de verdad. Me siento una mujer al 100% que vale mucho y se
            merece la atención de los hombres. No tengo miedo de que me pongan
            los cuernos con una mujer más delgada. ¡Porque ahora yo soy la mujer
            delgada! Además, mi actual novio me pidió matrimonio hace poco. ¡Me
            encanta mi vida!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.wrap}>
          <Image
            src={Slider1}
            alt="result photo"
            priority
            fill="contain"
            sizes="30vw 90vw"
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.subtitle}>¡Adelgazó 11 kg en 3,5 semanas!</h3>
          <p className={styles.name}>
            Manuel Suárez Gomez, 34 años, Guadalajara
          </p>
          <p className={styles.feedback}>
            Como lo que quiero y no tengo panza! Ya había caído varias veces con
            distintos anuncios y recomendaciones de conocidos. En este caso
            también iba a decir que NO. Pero mis hijas no dejaban de molestarme
            y me dijeron que usara este producto si no quería alimentarme con
            puras ensaladas. Entonces empecé a usarlo para que me dejaran en
            paz. La composición es natural, así que supuse que no me iba a hacer
            daño, y ellas iban a comprobar de que no valía nada. Pues tuve que
            tragarme mis palabras y, por una vez, no tenía razón. La panza me
            desapareció literalmente en una semana. También reconozco que me
            siento mucho mejor. Hasta juego al fútbol con mis nietos sin ningún
            problema. Pero sigo comiendo lo de siempre. Muy bueno
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.wrap}>
          <Image
            src={Slider2}
            alt="result photo"
            priority
            fill="contain"
            sizes="30vw 90vw"
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.subtitle}>¡Adelgazó 22 kg en 4 semanas!</h3>
          <p className={styles.name}>Maria Hernández Torres, 26 años, México</p>
          <p className={styles.feedback}>
            ¡Rápido y sano!¡Todo este tratamiento ocurrió en un abrir y cerrar
            de ojos! Empecé a aplicar este producto el primer día de vacaciones.
            Cuando volví a la oficina 2 semanas después, todos se quedaron
            asombrados. Mi jefe incluso habló conmigo en privado, ya que estaba
            preocupado por si tenía alguna enfermedad grave, ya que había
            adelgazado tan rápido. ¡Respiró con un alivio incontenido cuando le
            hablé del tratamiento y de lo maravillosamente que me sentía! Me dio
            la enhorabuena y me preguntó cómo se llamaba el producto, ya que se
            lo quería comprar a su hija, que engordaba por culpa de los
            esteroides. El tratamiento también ayudó a la hija de mi jefe
            (adelgazó al peso adecuado), ¡y ahora me han subido el sueldo!
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.wrap}>
          <Image
            src={Slider3}
            alt="result photo"
            priority
            fill="contain"
            sizes="30vw 90vw"
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.subtitle}>¡Adelgazó 23 kg en 8 semanas!</h3>
          <p className={styles.name}>
            Lara Berasategi Castro, 31 años, Monterrey
          </p>
          <p className={styles.feedback}>
            He derrotado los complejos y he vuelto a encontrar el amor. En toda
            mi vida, he intentado adelgazar exactamente 17 veces. Probé las
            dietas de hambre, sin efecto alguno. Dieta de col, dieta Dukan,
            dieta purificadora, dieta cetogénica. Lo probé todo, sin efecto
            alguno. Estaba hundida, ya que todas mis relaciones se iban al
            diablo por culpa de mis complejos. Estaba celosa de mis parejas, me
            quejaba de mi aspecto... Nunca habría pensado que después de tantos
            años de tormento iba a adelgazar aplicando este producto. ¡Ha sido
            asombroso! Comprar ropa ya no me supone una molestia, ¡¡¡ya que mi
            talla CH o M está disponible en todos lados!!! No siento vergüenza
            cuando la gente me mira estando de vacaciones. Un giro de 180
            grados, de verdad. Me siento una mujer al 100% que vale mucho y se
            merece la atención de los hombres. No tengo miedo de que me pongan
            los cuernos con una mujer más delgada. ¡Porque ahora yo soy la mujer
            delgada! Además, mi actual novio me pidió matrimonio hace poco. ¡Me
            encanta mi vida!
          </p>
        </div>
      </SwiperSlide>
    </>
  );

  return (
    <div className={styles.section} id="slider">
      <h2 className={styles.title}>Comentarios de nuestros clientes</h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 27,
          },
        }}
        loop
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        className={styles.swiper}
      >
        {slides}
      </Swiper>
    </div>
  );
}

export default Slider;
