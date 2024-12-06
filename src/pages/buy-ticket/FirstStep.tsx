import { Ticket } from "../../types/types";

const tickets: Ticket[] = [
    {
        id: 1,
        name: "451 градус по фаренгейту",
        date: new Date("2024-12-03T13:00:00"),
        count: 0
    },
    {
        id: 2,
        name: "451 градус по фаренгейту",
        date: new Date("2024-12-03T15:00:00"),
        count: 12
    },
    {
        id: 3,
        name: "451 градус по фаренгейту",
        date: new Date("2024-12-03T17:00:00"),
        count: 543
    }
]


type IProps = {
    setSelectedTicket: (selectedTicket: Ticket) => void;
}

export default function FirstStep({ setSelectedTicket }: IProps) {
    return <div className="items-center min-h-[66.5vh] flex flex-col justify-center">
        <div className="w-[80%] h-[80%]">
            <div className="text-[50px] flex items-center gap-2">
                <span>
                    451 градус по фаренгейту
                </span>
                <span className="bg-yellow-400 p-1 font-serif">16+</span>
                <span><img src="/images/pushkin_card.png" className="h-[60px]" alt="pushkin card" /></span>
            </div>

            <div className="text-[40px]">
                Выбор сеанса
            </div>

            {tickets.map((ticket: Ticket) => <div className="bg-[#E9E9E5] min-h-[150px] w-full mt-5 flex items-center justify-between px-10">
                <div className="flex items-center font-serif">
                    <span className="text-[100px]">{new Date(ticket.date).getUTCDate()}</span>
                    <span className="text-center ml-3 mt-5">
                        <div className="text-[30px]">{new Date(ticket.date).toLocaleDateString('ru-RU', {
                            month: 'long'
                        })}</div>
                        <div className="text-[20px]">{new Date(ticket.date).toLocaleDateString('ru-RU', {
                            weekday: "long"
                        })}</div>
                    </span>
                </div>
                <div className="text-[40px]">
                    {new Date(ticket.date).toLocaleTimeString('ru-RU', {
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </div>

                <div className="text-center font-serif">
                    <div className="text-[20px]">
                        Владимирский театр драмы
                    </div>
                    <div className="text-[25px]">г. Владимир, ул. Дворянская, д.4</div>
                </div>

                <div>
                    {ticket.count < 1 ? <button disabled className="bg-[#B8AF9E] text-[18px] flex justify-center items-center font-serif h-[55px] w-[210px]">
                        РАСПРОДАНО
                    </button> : <button className="bg-yellow-400 p-3 px-7 text-2xl font-serif" onClick={() => {
                        setSelectedTicket(ticket)
                    }}>
                        2000₽-5000₽
                    </button>}

                </div>
            </div>)}
        </div>
    </div>
}