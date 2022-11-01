import { useEffect, useState } from "react";
import alarm from "../../assets/sounds/alarm.mp3";
import { timerTypes } from "../../constants/timerConstants";

const defaultDuration = 25 * 60;
const defaultShortBreak = 5 * 60;
const defaultLongBreak = 15 * 60;

export const useTimer = (
  duration = defaultDuration,
  shortBreak = defaultShortBreak,
  longBreak = defaultLongBreak
) => {
  const [time, setTime] = useState(duration);
  const [myInterval, setMyInterval] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [breakNumber, setBreakNumber] = useState(0);
  const [timerType, setTimerType] = useState(timerTypes.pomodoro);

  useEffect(() => {
    if (time > 0) return;

    clearInterval(myInterval);
    setIsRunning(false);
    playAudio(alarm);

    if (timerType !== timerTypes.pomodoro) {
      setTime(duration);
      setTimerType(timerTypes.pomodoro);
    } else {
      if (breakNumber < 3) {
        setTime(shortBreak);
        setBreakNumber((current) => current + 1);
        setTimerType(timerTypes.shortBreak);
      } else {
        setTime(longBreak);
        setBreakNumber(0);
        setTimerType(timerTypes.longBreak);
      }
    }
  }, [time]);

  const playAudio = (sound) => {
    new Audio(sound).play();
  };

  const startStopTimer = () => {
    if (isRunning) {
      clearInterval(myInterval);
    } else {
      const intervalId = setInterval(() => {
        setTime((current) => current - 1);
      }, 1000);
      setMyInterval(intervalId);
    }
    setIsRunning((current) => !current);
  };

  return { time, timerType, isRunning, startStopTimer };
};
