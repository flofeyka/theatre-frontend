import { Session } from "../../../types/types";
import { selectedRepertoire } from "../Tickets";

type IProps = {
  setSelectedSession: (selectedTicket: Session) => void;
  selectedRepertoire: selectedRepertoire;
  sessions: Session[];
};

export default function FirstStep({
  selectedRepertoire,
  setSelectedSession,
  sessions,
}: IProps) {
  return (
    <div className="items-center flex flex-col justify-center">
      <div className="w-[90%] h-[90%]">
        <div className="text-[50px] flex items-center gap-2 justify-between">
          <div className="flex items-center">
            <span>{selectedRepertoire.title}</span>
            <span className="bg-yellow-400 p-1 font-serif">
              {selectedRepertoire.category}+
            </span>
            <span>
              <img
                src="/images/pushkin_card.png"
                className="h-[60px]"
                alt="pushkin card"
              />
            </span>
          </div>
          <div>
            1
          </div>
        </div>

        <div className="text-[40px]">Выбор сеанса</div>

        {sessions.map((session: Session) => (
          <div className="bg-[#E9E9E5] min-h-[150px] w-full mt-5 flex items-center justify-between px-10">
            <div className="flex items-center font-serif">
              <span className="text-[100px]">
                {new Date(session.time).getUTCDate()}
              </span>
              <span className="text-center ml-3 mt-5">
                <div className="text-[30px]">
                  {new Date(session.time).toLocaleDateString("ru-RU", {
                    month: "long",
                  })}
                </div>
                <div className="text-[20px]">
                  {new Date(session.time).toLocaleDateString("ru-RU", {
                    weekday: "long",
                  })}
                </div>
              </span>
            </div>
            <div className="text-[40px]">
              {new Date(session.time).toLocaleTimeString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>

            <div className="text-center font-serif">
              <div className="text-[20px]">Владимирский театр драмы</div>
              <div className="text-[25px]">
                г. Владимир, ул. Дворянская, д.4
              </div>
            </div>

            <div>
              {9 < 1 ? (
                <button
                  disabled
                  className="bg-[#B8AF9E] text-[18px] flex justify-center items-center font-serif h-[55px] w-[210px]"
                >
                  РАСПРОДАНО
                </button>
              ) : (
                <button
                  className="bg-yellow-400 p-3 px-7 text-2xl font-serif"
                  onClick={() => {
                    setSelectedSession(session);
                  }}
                >
                  {session.price} ₽
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
