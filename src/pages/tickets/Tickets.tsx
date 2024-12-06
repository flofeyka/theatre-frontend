import React, { useEffect } from "react";
import { repertoireAPI } from "../../api/repertoireAPI";
import { Repertoire } from "../../types/types";

export default function Tickets() {
  const [repertoires, setRepertoires] = React.useState<Repertoire[]>([]);
  const [selectedMonth, setSelectedMonth] = React.useState<string>("");

  useEffect(() => {
    const fetchSessions = async () => {
      const data = await repertoireAPI.getAllRepertoires();
      setRepertoires(data);
    };

    fetchSessions();
  }, []);

  const year = 2024;
  const month = 12;
  const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  const daysInMonth = new Date(year, month, 0).getDate(); // Последний день месяца
  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const getDayOfWeek = (year: number, month: number, day: number) => {
    const date = new Date(year, month - 1, day);
    return (date.getDay() + 6) % 7;
  };

  const firstDayOfWeek = getDayOfWeek(year, month, 1);

  const sessionDates = repertoires
    .filter((item) => item.sessions.length > 0)
    .map((item) => ({
      date: new Date(item.sessions[0].time),
      title: item.title,
      description: item.description,
    }));

  return (
    <div>
      <header className="bg-[url('/public/images/tickets/background.png')] h-[50vh] text-white text-[128px] flex justify-center items-center">
        БИЛЕТЫ
      </header>
      <div className="grid grid-cols-7">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="font-semibold text-center">
            {day}
          </div>
        ))}

        {Array.from({ length: firstDayOfWeek }).map((_, index) => (
          <div
            key={`empty-${index}`}
            className="h-[20vh] border-2 border-gray-200"
          ></div>
        ))}

        {dates.map((date) => {
          const currentDate = new Date(year, month - 1, date);
          const event = sessionDates.find(
            (event) =>
              event.date.getDate() === currentDate.getDate() &&
              event.date.getMonth() === currentDate.getMonth() &&
              event.date.getFullYear() === currentDate.getFullYear()
          );

          return (
            <div
              key={date}
              className={`h-[20vh] border-2 border-black flex items-start ${
                event && "bg-yellow-100"
              }`}
            >
              <span className="text-[60px] -mt-4 font-serif">{date}</span>
              <span className="text-[25px]">
                {new Date(date).toLocaleDateString("ru-RU", {
                  weekday: "short",
                })}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
