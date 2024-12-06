import { month } from "../../constants/constants";
import { Ticket } from "../../types/types";

const week = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const hall = [];

const numRows = 16;
const maxPlacesPerRow = {
  1: 26,
  2: 26,
  3: 26,
  4: 28,
  5: 28,
  6: 28,
  7: 30,
  8: 30,
  9: 34,
  10: 34,
  11: 34,
  12: 32,
  13: 32,
  14: 30,
  15: 30,
  16: 30,
};

// Цикл для создания точек
for (let row = 0; row < numRows; row++) {
  for (
    let place = 0;
    place < Object.entries(maxPlacesPerRow)[row][1];
    place++
  ) {
    hall.push({
      id: hall.length + 1,
      row: row + 1,
      placement: place + 1,
      status: ["occupied", "yellow", "orange", "white"][place % 4],
    });
  }
}

const rowsWithPlacements = hall.reduce<Record<number, number[]>>(
  (accumulator, point) => {
    if (!accumulator[point.row]) {
      accumulator[point.row] = [];
    }
    accumulator[point.row].push(point.placement);
    return accumulator;
  },
  {} as Record<number, number[]>
);

export default function SecondStep({
  selectedTicket,
  setSelectedTicket,
}: {
  setSelectedTicket: (selectedTicket: Ticket | null) => void;
  selectedTicket: Ticket;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 bg-[#E9E9E5]">
        <span className="font-serif">
          {week[selectedTicket.date.getDay()]}, {selectedTicket.date.getDate()}{" "}
          {month[selectedTicket.date.getMonth()].replace("ь", "я")},{" "}
          {new Date(selectedTicket.date).getHours()}:
          {new Date(selectedTicket.date).getMinutes() === 0
            ? "00"
            : new Date(selectedTicket.date).getMinutes()}
        </span>
        <span className="flex items-center gap-1">
          <span>
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3.5" cy="3.5" r="3.5" fill="black" />
            </svg>
          </span>
          <span>{selectedTicket.name}</span>
        </span>
      </div>
      <div
        className="text-3xl border-b-2 border-black py-2 cursor-pointer"
        onClick={() => setSelectedTicket(null)}
      >
        Назад
      </div>

      <div className="flex h-full relative">
        <div className="w-[50vw] bg-[#D9D9D9] relative flex flex-col items-center py-10 h-full">
          <div className="bg-[#F2F2ED] flex items-center justify-end gap-3 font-serif text-xl w-[80%]">
            <span className="flex items-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.5" cy="3.5" r="3.5" fill="#F0D92A" />
              </svg>{" "}
              - 2000
            </span>
            <span className="flex items-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.5" cy="3.5" r="3.5" fill="#FFC224" />
              </svg>{" "}
              - 3500
            </span>
            <span className="flex items-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.5" cy="3.5" r="3.5" fill="#B8AF9E" />
              </svg>{" "}
              - 5000
            </span>
            <span className="flex items-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3.5" cy="3.5" r="3.5" fill="black" />
              </svg>{" "}
              - занято
            </span>
            <span>{selectedTicket.count} билетов</span>
          </div>

          <div className="bg-[#F2F2ED] text-[25px] w-[50%] h-[100px] flex justify-center items-center mt-10 ">
            СЦЕНА
          </div>

          <div className="flex flex-col items-center w-full gap-5 mt-5">
            <div className="min-h-[270px] min-w-[75%] flex flex-col items-center bg-[#F2F2ED] py-5">
              <div className="text-center text-3xl">ПАРТЕР</div>
              <div className="flex flex-col gap-3 items-center px-10 gap-5">
                <div className="flex flex-col">
                  {Object.entries(rowsWithPlacements)
                    .slice(0, 9)
                    .map((item, index) => (
                      <div className="flex gap-10">
                        <div className="flex justify-between">
                          <span className="font-serif text-[12px] mr-auto rounded-full border-[1px] flex justify-center items-center w-[25px] h-[25px] border-black">
                            {index + 1}
                          </span>
                          <div className="flex">
                            {item[1].slice(0, item[1].length / 2).map((row) => (
                              <div className="w-full h-full p-0.5">
                                <svg
                                  className="w-full h-full"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 7 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="3.5"
                                    cy="3.5"
                                    r="3.5"
                                    fill="black"
                                  />
                                </svg>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex">
                            {item[1]
                              .slice(item[1].length / 2, item[1].length)
                              .map((row) => (
                                <div className="w-full h-full p-0.5">
                                  <svg
                                    className="w-full h-full"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="3.5"
                                      cy="3.5"
                                      r="3.5"
                                      fill="black"
                                    />
                                  </svg>
                                </div>
                              ))}
                          </div>
                          <span className="font-serif text-[12px] mr-auto rounded-full border-[1px] flex justify-center items-center w-[25px] h-[25px] border-black">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex flex-col items-center">
                  {Object.entries(rowsWithPlacements)
                    .slice(9, Object.entries(rowsWithPlacements).length)
                    .map((item) => (
                      <div className="flex gap-10">
                        <div className="flex p-0.5">
                          {item[1].slice(0, item[1].length / 2).map((row) => (
                            <div className="w-full h-full p-0.5">
                              <svg
                                className="w-full h-full"
                                width="12"
                                height="12"
                                viewBox="0 0 7 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="3.5"
                                  cy="3.5"
                                  r="3.5"
                                  fill="black"
                                />
                              </svg>
                            </div>
                          ))}
                        </div>
                        <div className="flex p-0.5">
                          {item[1]
                            .slice(item[1].length / 2, item[1].length)
                            .map((row) => (
                              <div className="w-full h-full p-0.5">
                                <svg
                                  className="w-full h-full"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 7 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="3.5"
                                    cy="3.5"
                                    r="3.5"
                                    fill="black"
                                  />
                                </svg>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="py-5 bg-[#F2F2ED] w-full h-[150px]">
              <div className="text-center text-3xl">БАЛКОН</div>
            </div>
          </div>
        </div>
        <div className="w-[50vw] h-full relative">
          <div className="h-[100px] text-[28px] flex justify-center items-center border-b-2 border-black">
            Корзина
          </div>
          <div className="bg-[#E1E1DD] h-full">{"43 "}</div>
          <div className="min-h-[100px] flex items-center justify-between px-5">
            <button className="font-serif h-[70px] w-[35%] bg-yellow-400 text-2xl">
              Забронировать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
