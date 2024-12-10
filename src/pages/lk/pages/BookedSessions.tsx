import React from "react";
import { sessionAPI } from "../../../api/sessionAPI";
import Ticket from "../../../components/Ticket";

export default function BookedSessions() {
  const [sessionsList, setSessionsList] = React.useState<
    {
      session_id: number;
      row: number;
      place: number;
      type: "hall" | "balcony";
      title: string;
      time: Date;
      price: number;
    }[]
  >([]);

  React.useEffect(() => {
    const fetchSessions = async () => {
      const responseData = await sessionAPI.getBookingSessions();
      setSessionsList(responseData!.data);
    };

    fetchSessions();
  }, []);

  const onCancelSession = async (
    session_id: number,
    row: number,
    place: number,
    type: "hall" | "balcony"
  ) => {
    const responseData = await sessionAPI.cancelBook(session_id, [
      { row, place, type },
    ]);
    if (responseData.status === 200) {
      setSessionsList(prev => prev.filter(item => !(item.session_id === session_id &&
        item.place === place &&
        item.row === row &&
        item.type === type)));
    }
  };

  return (
    <div className="ml-5">
      <div className="text-3xl my-3">Забронированные билеты</div>
      <div className="flex gap-2 flex-wrap">
        {sessionsList.map((item) => (
          <div>
            <Ticket
              row={item.row}
              place={item.place}
              type={item.type}
              session_name={item.title}
              price={item.price}
              time={item.time}
            />
            <div
              className="text-center text-2xl bg-[#F2F2ED] border-t-2 p-2 cursor-pointer"
              onClick={() => onCancelSession(item.session_id, item.row, item.place, item.type)}
            >
              Отменить
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
