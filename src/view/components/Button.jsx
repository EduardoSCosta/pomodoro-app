import styles from "../styles/components/Button.module.css";

export const Button = ({ isRunning, onClick, timerType }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`${styles.startStopButton} ${
        isRunning ? "" : styles.stopped
      } ${styles[timerType]}`}
    >
      {isRunning ? "STOP" : "START"}
    </button>
  );
};
