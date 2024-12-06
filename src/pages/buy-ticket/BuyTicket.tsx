import React from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { Ticket } from "../../types/types";

export default function BuyTicket() {
    const [selectedTicket, setSelectedTicket] = React.useState<Ticket | null>(null);

    return selectedTicket ? <SecondStep selectedTicket={selectedTicket} setSelectedTicket={(selectedTicket: Ticket | null) => setSelectedTicket(selectedTicket)} /> : <FirstStep
        setSelectedTicket={(selectedTicket: Ticket) => setSelectedTicket(selectedTicket)} />
}