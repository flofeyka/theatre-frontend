import React from "react";
import { Session } from "../../../types/types";
import Ticket from "../../../components/Ticket";
import { sessionAPI } from "../../../api/sessionAPI";

export default function BookedSessions() {
  const [sessionsList, setSessionsList] = React.useState<
    {
      session_id: number;
      row: number;
      place: number;
      type: "hall" | "balcony";
      title: string;
      time: Date;
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
            price={100}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
}
