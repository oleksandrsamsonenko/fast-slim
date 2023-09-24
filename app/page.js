import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Ingredients from "./components/ingredients/ingredients";
import Effects from "./components/effects/effects";
import Experts from "./components/experts/experts";
import Features from "./components/features/features";
import Slider from "./components/slider/slider";
import Footer from "./components/footer/footer";
import Countdown from "./components/countdown/countdown";
import Contacts from "./components/contacts/contacts";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <Navbar />
        <Hero />
      </div>
      <Countdown />
      <Ingredients />
      <Effects />
      <Experts />
      <Countdown />
      <Features />
      <Slider />
      <Contacts />
      <Footer />
    </main>
  );
}
