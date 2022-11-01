import { timerTypes } from "../../constants/timerConstants";
import { Button } from "../components/Button";
import { Timer } from "../components/Timer";
import { useTimer } from "../hooks/useTimer";
import styles from "../styles/pages/Pomodoro.module.css";

export const Pomodoro = () => {
  const { time, timerType, isRunning, startStopTimer } = useTimer();

  return (
    <div className={`${styles.pomodoroContainer} ${styles[timerType]}`}>
      <h1 className={`${styles.title}`}>Pomodoro</h1>
      <div className={`${styles.timerContainer}`}>
        <Timer timeInSeconds={time} />
        <Button
          onClick={startStopTimer}
          isRunning={isRunning}
          timerType={timerType}
        />
      </div>
      <p className={`${styles.message}`}>
        {timerType === timerTypes.pomodoro ? "Time to focus!" : "Take a break!"}
      </p>
    </div>
  );
};
