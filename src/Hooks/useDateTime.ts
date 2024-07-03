import { useState, useEffect } from "react";

type TimeOfDayType =
  | "Early Morning"
  | "Morning"
  | "Afternoon"
  | "Night"
  | undefined;

export const useDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDayType>();

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hours = dateTime.getHours();

    if (hours >= 0 && hours < 6) {
      setTimeOfDay("Early Morning");
    } else if (hours >= 6 && hours < 12) {
      setTimeOfDay("Morning");
    } else if (hours >= 12 && hours < 17) {
      setTimeOfDay("Afternoon");
    } else {
      setTimeOfDay("Night");
    }
  }, [dateTime]);

  const day = dateTime.getDate();
  const month = dateTime.getMonth() + 1; // 0 based
  const year = dateTime.getFullYear();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  const dayOfWeek = dateTime.getDay(); // 0 (Sunday) - 6 (Saturday)

  return { day, month, year, hours, minutes, seconds, dayOfWeek, timeOfDay };
};
