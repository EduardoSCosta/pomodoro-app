import styles from "../styles/components/Timer.module.css";

export const Timer = ({ timeInSeconds }) => {
  const minutes = new Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 2,
  }).format(Math.trunc(timeInSeconds / 60));

  const seconds = new Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 2,
  }).format(Math.trunc(timeInSeconds % 60));

  const time = `${minutes}:${seconds}`;

  return <p className={`${styles.timer}`}>{time}</p>;
};
