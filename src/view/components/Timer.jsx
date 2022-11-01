import styles from "../styles/components/Timer.module.css";

export const Timer = ({ timeInSeconds }) => {
  const minutes = `0${Math.trunc(timeInSeconds / 60)}`.slice(-2);
  const seconds = `0${timeInSeconds % 60}`.slice(-2);
  const time = `${minutes}:${seconds}`;

  return <p className={`${styles.timer}`}>{time}</p>;
};
