import React, { useEffect } from "react";
import { repertoireAPI } from "../../api/repertoireAPI";
import { Repertoire } from "../../types/types";
import BuyTicket from "./buy-ticket/BuyTicket";

export interface selectedRepertoire extends Repertoire {
  date: string;
}

export default function Tickets() {
  const [repertoires, setRepertoires] = React.useState<Repertoire[]>([]);
  //TO DO
  // const [selectedMonth, setSelectedMonth] = React.useState<string>("");
  const [selectedContainer, setSelectedContainer] = React.useState<number>();
  const [selectedRepertoire, setSelectedRepertoire] =
    React.useState<null | selectedRepertoire>(null);

  console.log(selectedRepertoire);
  const [opened, setOpened] = React.useState<boolean>(false);

  const handleOpen = (repertoire: selectedRepertoire) => {
    setSelectedContainer(undefined);
    setSelectedRepertoire(repertoire);
    setOpened(true);
  };
  // const handleClose = () => setOpened(false);

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
    .map((item) => {
      const eventDate = new Date(item.sessions[0].time);

      // Преобразуем дату в строку формата YYYY-MM-DD, учитывая локальное время
      const localDate = `${eventDate.getFullYear()}-${String(
        eventDate.getMonth() + 1
      ).padStart(2, "0")}-${String(eventDate.getDate()).padStart(2, "0")}`;

      return {
        date: localDate,
        ...item,
      };
    });

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [opened]);

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

        {opened && (
          <div className="fixed top-0 overflow-auto bg-black/50 w-screen h-screen flex justify-center items-center pt-10">
            <BuyTicket
              selectedRepertoire={selectedRepertoire!}
              setSelectedRepertoire={(selectedRepertoire: selectedRepertoire) =>
                setSelectedRepertoire(selectedRepertoire)
              }
            />
          </div>
        )}

        {dates.map((date) => {
          const currentDate = `${year}-${String(month).padStart(
            2,
            "0"
          )}-${String(date).padStart(2, "0")}`;

          // Находим событие с совпадающей локальной датой
          const event = sessionDates.find(
            (event) => event.date === currentDate
          );

          return (
            <div
              key={date}
              style={event && { backgroundImage: `url("${event.image}")` }}
              className={`h-[20vh] border-2 border-black flex items-start bg-cover`}
              // onMouseLeave={() => setSelectedRepertoire(null)}
              onMouseEnter={() => setSelectedContainer(event?.id)}
              onMouseLeave={() => setSelectedContainer(undefined)}
            >
              <span className="text-[60px] -mt-4 font-serif">{date}</span>
              <span className="text-[25px]">
                {new Date(date).toLocaleDateString("ru-RU", {
                  weekday: "short",
                })}
              </span>
              {event && selectedContainer === event.id && (
                <div className="flex items-center w-[50%] -ml-10 h-full">
                  <button
                    onClick={() => handleOpen(event)}
                    className="bg-black font-semibold opacity-50 border-white border-2 text-white px-10 font-serif text-[20px]"
                  >
                    Купить билет
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
