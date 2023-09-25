"use client";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import moment from "moment";

import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import styles from "./timer.module.scss";

function Timer() {
  const time = moment()
    .add(1, "days")
    .startOf("day")
    .format("YYYY-MM-DD HH:mm:ss")
    .toString();
  return (
    <FlipClockCountdown
      className={styles.flipclock}
      to={time}
      renderMap={[false, true, true, true]}
      labels={["days", "Horas", "Minutos", "Segundos"]}
      showSeparators={false}
      labelStyle={{ fontWeight: 600 }}
    />
  );
}

export default Timer;
