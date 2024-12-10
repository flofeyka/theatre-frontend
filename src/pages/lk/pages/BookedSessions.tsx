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

  return (
    <div className="ml-5">
      <div className="text-3xl my-3">Забронированные билеты</div>
      <div className="flex gap-2">
        {sessionsList.map((item) => (
          <Ticket
            row={item.row}
            place={item.place}
            type={item.type}
            session_name={item.title}
            price={item.price}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
}
