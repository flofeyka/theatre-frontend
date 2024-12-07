import React, { useEffect } from "react";
import { sessionAPI } from "../../../api/sessionAPI";
import { Session } from "../../../types/types";
import { selectedRepertoire } from "../Tickets";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

export default function BuyTicket({
  selectedRepertoire,
}: {
  setSelectedRepertoire: (selectedRepertoire: selectedRepertoire) => void;
  selectedRepertoire: selectedRepertoire;
}) {
  const [sessions, setSessions] = React.useState<Session[]>([]);
  const [selectedSession, setSelectedSession] = React.useState<Session | null>(
    null
  );

  useEffect(() => {
    const fetchTickets = async () => {
      const data = await sessionAPI.getSessions(selectedRepertoire.id);
      setSessions(data);
    };

    fetchTickets();
  }, [selectedRepertoire.id]);

  return (
    <div className="bg-[#F2F2ED] w-[90%] py-14">
      {selectedSession ? (
        <SecondStep
          selectedRepertoire={selectedRepertoire}
          selectedSession={selectedSession!}
          setSelectedSession={setSelectedSession}
        />
      ) : (
        <FirstStep
          sessions={sessions}
          selectedRepertoire={selectedRepertoire}
          setSelectedSession={(selectedTicket: Session | null) =>
            setSelectedSession(selectedTicket)
          }
        />
      )}
    </div>
  );
}
