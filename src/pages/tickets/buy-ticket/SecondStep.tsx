import React from "react";
import { useNavigate } from "react-router-dom";
import { sessionAPI } from "../../../api/sessionAPI";
import { Session } from "../../../types/types";
import { selectedRepertoire } from "../Tickets";

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

const balcony = [];

const maxPlacesPerRowBalcony = {
  1: 26,
  2: 26,
  3: 26,
  4: 26,
  5: 28,
  6: 28,
  7: 28,
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

for (let row = 0; row < Object.values(maxPlacesPerRowBalcony).length; row++) {
  for (
    let place = 0;
    place < Object.entries(maxPlacesPerRowBalcony)[row][1];
    place++
  ) {
    balcony.push({
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

const rowsWithPlacementsBalcony = balcony.reduce<Record<number, number[]>>(
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
  selectedSession,
  setSelectedSession,
  selectedRepertoire,
}: {
  setSelectedSession: (selectedTicket: Session | null) => void;
  selectedSession: Session;
  selectedRepertoire: selectedRepertoire;
}) {
  const navigate = useNavigate();
  const [selectedPlaces, setSelectedPlaces] = React.useState<
    { row: number; place: number; type: "balcony" | "hall" }[]
  >([]);
  const [success, setSuccess] = React.useState<boolean | null>(null);
  const totalPlaces = Object.values(maxPlacesPerRow).reduce(
    (acc, val) => Number(acc) + Number(val),
    0
  );

  const onBook = async () => {
    const { status } = await sessionAPI.book(
      selectedSession.id,
      selectedPlaces
    );

    console.log(status);
    if (status === 200) {
      setSuccess(true);
      setSelectedPlaces([]);
    }

    if (status === 401) {
      navigate("/login");
    }

    if (status === 500) {
      setSuccess(false);
    }
  };

  return (
    <div className="h-full flex flex-col items-stretch">
      {success !== null && (
        <div className="w-screen h-screen bg-black/50 fixed top-0 left-0 z-[99999] flex justify-center items-center">
          {success ? (
            <div className="bg-[#F2F2ED] w-[40%] sm:w-[90%] flex flex-col gap-5 p-5 py-10 items-center">
              <div className="text-center text-[36px]">
                БИЛЕТЫ УСПЕШНО ЗАБРОНИРОВАНЫ
              </div>
              <div className="font-serif text-center flex h-full items-center justify-center text-black/60 text-xl w-[60%] my-5">
                Забронированные билеты ожидают оплаты на кассе
              </div>
              <div className="flex justify-center gap-10 font-serif">
                <button className="bg-[#F0D92A] p-3 px-5">
                  Отменить бронь
                </button>
                <button
                  className="bg-[#B8AF9E] p-3 px-5"
                  onClick={() => {
                    setSuccess(null);
                    navigate("/");
                  }}
                >
                  Закрыть
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#F2F2ED] w-[40%] sm:w-[90%] flex flex-col gap-5 p-5 py-12 items-center">
              <div className="text-[36px]">ПРОИЗОШЛА ОШИБКА</div>
              <div className="flex font-serif gap-10">
                <button
                  className="bg-[#F0D92A] p-3 px-5"
                  onClick={() => {
                    setSuccess(null);
                    onBook();
                  }}
                >
                  Повторить
                </button>
                <button
                  className="bg-[#B8AF9E] p-3 px-5"
                  onClick={() => {
                    setSuccess(null);
                  }}
                >
                  Закрыть
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-3 bg-[#E9E9E5]">
        <span className="font-serif">
          {new Date(selectedSession.time).toLocaleDateString("ru-RU", {
            weekday: "short",
          })}
          , {new Date(selectedSession.time).getDate()}{" "}
          {new Date(selectedSession.time).toLocaleDateString("ru-RU", {
            month: "long",
          })}
          ,{" "}
          {new Date(selectedSession.time).toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          })}
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
          <span>{selectedRepertoire.title}</span>
        </span>
      </div>
      <div
        className="text-3xl border-b-2 border-black py-2 cursor-pointer"
        onClick={() => setSelectedSession(null)}
      >
        Назад
      </div>

      <div className="flex relative items-stretch sm:flex-col">
        <div className="w-[50vw] sm:w-full bg-[#D9D9D9] relative flex flex-col items-center py-10 h-full">
          <div className="bg-[#F2F2ED] sm:w-[90%] flex items-center justify-end gap-3 font-serif text-xl w-[80%]">
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
              - занято
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
              - {selectedSession.price}
            </span>
            <span>
              {totalPlaces - selectedSession.occupiedPlaces.length} билетов
            </span>
          </div>

          <div className="bg-[#F2F2ED] text-[25px] w-[50%] sm:w-full h-[100px] flex justify-center items-center mt-10 ">
            СЦЕНА
          </div>

          <div className="flex flex-col items-center w-full gap-5 mt-5">
            <div className="min-h-[270px] min-w-[75%] flex flex-col items-center bg-[#F2F2ED] py-5">
              <div className="text-center text-3xl mb-5">ПАРТЕР</div>
              <div className="flex flex-col gap-3 iteFms-center px-10 sm:p-0 gap-5">
                <div className="flex flex-col items-center">
                  {Object.entries(rowsWithPlacements)
                    .slice(0, 9)
                    .map((row, rowIndex) => (
                      <div className="flex gap-10 sm:gap-5">
                        <div className="flex">
                          {row[1]
                            .slice(0, row[1].length / 2)
                            .map((_, index) => (
                              <div className="w-full h-full p-0.5">
                                <svg
                                  className="w-full h-full cursor-pointer"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 7 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  onClick={() => {
                                    if (
                                      selectedSession.occupiedPlaces.find(
                                        (place) =>
                                          place.place === index + 1 &&
                                          place.row === rowIndex + 1 &&
                                          place.type === "hall"
                                      )
                                    ) {
                                      return null;
                                    }
                                    if (
                                      selectedPlaces.find(
                                        (selectedPlace) =>
                                          selectedPlace.place === index + 1 &&
                                          selectedPlace.row === rowIndex + 1 &&
                                          selectedPlace.type === "hall"
                                      )
                                    ) {
                                      return setSelectedPlaces((prev) =>
                                        prev.filter(
                                          (item) =>
                                            !(
                                              item.place === index + 1 &&
                                              item.row === rowIndex + 1 &&
                                              item.type === "hall"
                                            )
                                        )
                                      );
                                    }
                                    return setSelectedPlaces((prev) => [
                                      ...prev,
                                      {
                                        row: rowIndex + 1,
                                        place: index + 1,
                                        type: "hall",
                                      },
                                    ]);
                                  }}
                                >
                                  <circle
                                    cx="3.5"
                                    cy="3.5"
                                    r="3.5"
                                    fill={
                                      selectedPlaces.find(
                                        (selectedPlace) =>
                                          selectedPlace.place === index + 1 &&
                                          selectedPlace.row === rowIndex + 1 &&
                                          selectedPlace.type === "hall"
                                      )
                                        ? "#F0D92A"
                                        : selectedSession.occupiedPlaces.find(
                                            (place) =>
                                              place.place === index + 1 &&
                                              place.row === rowIndex + 1 &&
                                              place.type === "hall"
                                          )
                                        ? "#B8AF9E"
                                        : "black"
                                    }
                                  />
                                </svg>
                              </div>
                            ))}
                        </div>
                        <div className="flex ">
                          {row[1]
                            .slice(row[1].length / 2, row[1].length)
                            .map((_, index) => (
                              <div className="w-full h-full p-0.5">
                                <svg
                                  className="w-full h-full cursor-pointer"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 7 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  onClick={() => {
                                    if (
                                      selectedSession.occupiedPlaces.find(
                                        (selectedPlace) =>
                                          selectedPlace.place ===
                                            index + row[1].length / 2 + 1 &&
                                          selectedPlace.row === rowIndex + 1 &&
                                          selectedPlace.type === "hall"
                                      )
                                    ) {
                                      return null;
                                    }
                                    if (
                                      selectedPlaces.find(
                                        (selectedPlace) =>
                                          selectedPlace.place ===
                                            index + row[1].length / 2 + 1 &&
                                          selectedPlace.row === rowIndex + 1 &&
                                          selectedPlace.type === "hall"
                                      )
                                    ) {
                                      return setSelectedPlaces((prev) =>
                                        prev.filter(
                                          (item) =>
                                            !(
                                              item.place ===
                                                index + row[1].length / 2 + 1 &&
                                              item.row === rowIndex + 1 &&
                                              item.type === "hall"
                                            )
                                        )
                                      );
                                    }
                                    return setSelectedPlaces((prev) => [
                                      ...prev,
                                      {
                                        row: rowIndex + 1,
                                        place: index + row[1].length / 2 + 1,
                                        type: "hall",
                                      },
                                    ]);
                                  }}
                                >
                                  <circle
                                    cx="3.5"
                                    cy="3.5"
                                    r="3.5"
                                    fill={
                                      selectedPlaces.find(
                                        (selectedPlace) =>
                                          selectedPlace.place ===
                                            index + row[1].length / 2 + 1 &&
                                          selectedPlace.row === rowIndex + 1 &&
                                          selectedPlace.type === "hall"
                                      )
                                        ? "#F0D92A"
                                        : selectedSession.occupiedPlaces.find(
                                            (place) =>
                                              place.place ===
                                                index + row[1].length / 2 + 1 &&
                                              place.row === rowIndex + 1 &&
                                              place.type === "hall"
                                          )
                                        ? "#B8AF9E"
                                        : "black"
                                    }
                                  />
                                </svg>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex flex-col items-center">
                  {Object.entries(rowsWithPlacements)
                    .slice(9, Object.entries(rowsWithPlacements).length)
                    .map((row, rowIndex) => (
                      <div className="flex gap-10 sm:gap-5">
                        <div className="flex">
                          {row[1]
                            .slice(0, row[1].length / 2)
                            .map((_, index) => (
                              <div className="w-full h-full p-0.5">
                                <svg
                                  className="w-full h-full cursor-pointer"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 7 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  onClick={() => {
                                    if (
                                      selectedSession.occupiedPlaces.find(
                                        (selectedPlace) =>
                                          selectedPlace.place === index + 1 &&
                                          selectedPlace.row === rowIndex + 11 &&
                                          selectedPlace.type === "hall"
                                      )
                                    ) {
                                      return null;
                                    }
                                    setSelectedPlaces((prev) =>
                                      selectedPlaces.find(
                                        (selectedPlace) =>
                                          selectedPlace.place === index + 1 &&
                                          selectedPlace.row === rowIndex + 11 &&
                                          selectedPlace.type === "hall"
                                      )
                                        ? prev.filter(
                                            (item) =>
                                              !(
                                                item.place === index + 1 &&
                                                item.row === rowIndex + 11 &&
                                                item.type === "hall"
                                              )
                                          )
                                        : [
                                            ...prev,
                                            {
                                              row: rowIndex + 11,
                                              place: index + 1,
                                              type: "hall",
                                            },
                                          ]
                                    );
                                  }}
                                >
                                  <circle
                                    cx="3.5"
                                    cy="3.5"
                                    r="3.5"
                                    fill={
                                      selectedPlaces.find(
                                        (selectedPlace) =>
                                          selectedPlace.place === index + 1 &&
                                          selectedPlace.row === rowIndex + 11 &&
                                          selectedPlace.type === "hall"
                                      )
                                        ? "#F0D92A"
                                        : selectedSession.occupiedPlaces.find(
                                            (place) =>
                                              place.place === index + 1 &&
                                              place.row === rowIndex + 11 &&
                                              place.type === "hall"
                                          )
                                        ? "#B8AF9E"
                                        : "black"
                                    }
                                  />
                                </svg>
                              </div>
                            ))}
                        </div>
                        <div className="flex">
                          {row[1]
                            .slice(row[1].length / 2, row[1].length)
                            .map((_, index) => (
                              <div className="w-full h-full p-0.5">
                                <svg
                                  className="w-full h-full cursor-pointer"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 7 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  onClick={() => {
                                    if (
                                      selectedSession.occupiedPlaces.find(
                                        (selectedPlace) =>
                                          selectedPlace.place ===
                                            index + row[1].length / 2 + 1 &&
                                          selectedPlace.row === rowIndex + 11 &&
                                          selectedPlace.type === "hall"
                                      )
                                    ) {
                                      return null;
                                    }
                                    if (
                                      selectedPlaces.find(
                                        (selectedPlace) =>
                                          selectedPlace.place ===
                                            index + row[1].length / 2 + 1 &&
                                          selectedPlace.row === rowIndex + 11 &&
                                          selectedPlace.type === "hall"
                                      ) &&
                                      !selectedSession.occupiedPlaces.find(
                                        (place) =>
                                          place.place ===
                                            index + row[1].length / 2 + 1 &&
                                          place.row === rowIndex + 11 &&
                                          place.type === "hall"
                                      )
                                    ) {
                                      return setSelectedPlaces((prev) =>
                                        prev.filter(
                                          (item) =>
                                            !(
                                              item.place ===
                                                index + row[1].length / 2 + 1 &&
                                              item.row === rowIndex + 11 &&
                                              item.type === "hall"
                                            )
                                        )
                                      );
                                    }
                                    return setSelectedPlaces((prev) => [
                                      ...prev,
                                      {
                                        row: rowIndex + 11,
                                        place: index + row[1].length / 2 + 1,
                                        type: "hall",
                                      },
                                    ]);
                                  }}
                                >
                                  <circle
                                    cx="3.5"
                                    cy="3.5"
                                    r="3.5"
                                    fill={
                                      selectedPlaces.find(
                                        (selectedPlace) =>
                                          selectedPlace.place ===
                                            index + row[1].length / 2 + 1 &&
                                          selectedPlace.row === rowIndex + 11 &&
                                          selectedPlace.type === "hall"
                                      )
                                        ? "#F0D92A"
                                        : selectedSession.occupiedPlaces.find(
                                            (place) =>
                                              place.place ===
                                                index + row[1].length / 2 + 1 &&
                                              place.row === rowIndex + 11 &&
                                              place.type === "hall"
                                          )
                                        ? "#B8AF9E"
                                        : "black"
                                    }
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

            <div className="py-5 bg-[#F2F2ED] w-full">
              <div className="text-center text-3xl mb-5">БАЛКОН</div>
              <div className="w-full flex flex-col items-center">
                {Object.entries(rowsWithPlacementsBalcony)
                  .slice(0, 9)
                  .map((row, rowIndex) => (
                    <div className="flex gap-10">
                      <div className="flex">
                        {row[1].slice(0, row[1].length / 2).map((_, index) => (
                          <div className="w-full h-full p-0.5">
                            <svg
                              className="w-full h-full cursor-pointer"
                              width="12"
                              height="12"
                              viewBox="0 0 7 7"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={() => {
                                if (
                                  selectedSession.occupiedPlaces.find(
                                    (place) =>
                                      place.place === index + 1 &&
                                      place.row === rowIndex + 1 &&
                                      place.type === "balcony"
                                  )
                                ) {
                                  return null;
                                }
                                if (
                                  selectedPlaces.find(
                                    (selectedPlace) =>
                                      selectedPlace.place === index + 1 &&
                                      selectedPlace.row === rowIndex + 1 &&
                                      selectedPlace.type === "balcony"
                                  )
                                ) {
                                  return setSelectedPlaces((prev) =>
                                    prev.filter(
                                      (item) =>
                                        !(
                                          item.place === index + 1 &&
                                          item.row === rowIndex + 1 &&
                                          item.type === "balcony"
                                        )
                                    )
                                  );
                                }
                                return setSelectedPlaces((prev) => [
                                  ...prev,
                                  {
                                    row: rowIndex + 1,
                                    place: index + 1,
                                    type: "balcony",
                                  },
                                ]);
                              }}
                            >
                              <circle
                                cx="3.5"
                                cy="3.5"
                                r="3.5"
                                fill={
                                  selectedPlaces.find(
                                    (selectedPlace) =>
                                      selectedPlace.place === index + 1 &&
                                      selectedPlace.row === rowIndex + 1 &&
                                      selectedPlace.type === "balcony"
                                  )
                                    ? "#F0D92A"
                                    : selectedSession.occupiedPlaces.find(
                                        (place) =>
                                          place.place === index + 1 &&
                                          place.row === rowIndex + 1 &&
                                          place.type === "balcony"
                                      )
                                    ? "#B8AF9E"
                                    : "black"
                                }
                              />
                            </svg>
                          </div>
                        ))}
                      </div>
                      <div className="flex ">
                        {row[1]
                          .slice(row[1].length / 2, row[1].length)
                          .map((_, index) => (
                            <div className="w-full h-full p-0.5">
                              <svg
                                className="w-full h-full cursor-pointer"
                                width="12"
                                height="12"
                                viewBox="0 0 7 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => {
                                  if (
                                    selectedSession.occupiedPlaces.find(
                                      (selectedPlace) =>
                                        selectedPlace.place ===
                                          index + row[1].length / 2 + 1 &&
                                        selectedPlace.row === rowIndex + 1 &&
                                        selectedPlace.type === "balcony"
                                    )
                                  ) {
                                    return null;
                                  }
                                  if (
                                    selectedPlaces.find(
                                      (selectedPlace) =>
                                        selectedPlace.place ===
                                          index + row[1].length / 2 + 1 &&
                                        selectedPlace.row === rowIndex + 1 &&
                                        selectedPlace.type === "balcony"
                                    )
                                  ) {
                                    return setSelectedPlaces((prev) =>
                                      prev.filter(
                                        (item) =>
                                          !(
                                            item.place ===
                                              index + row[1].length / 2 + 1 &&
                                            item.row === rowIndex + 1 &&
                                            item.type === "balcony"
                                          )
                                      )
                                    );
                                  }
                                  return setSelectedPlaces((prev) => [
                                    ...prev,
                                    {
                                      row: rowIndex + 1,
                                      place: index + row[1].length / 2 + 1,
                                      type: "balcony",
                                    },
                                  ]);
                                }}
                              >
                                <circle
                                  cx="3.5"
                                  cy="3.5"
                                  r="3.5"
                                  fill={
                                    selectedPlaces.find(
                                      (selectedPlace) =>
                                        selectedPlace.place ===
                                          index + row[1].length / 2 + 1 &&
                                        selectedPlace.row === rowIndex + 1 &&
                                        selectedPlace.type === "balcony"
                                    )
                                      ? "#F0D92A"
                                      : selectedSession.occupiedPlaces.find(
                                          (place) =>
                                            place.place ===
                                              index + row[1].length / 2 + 1 &&
                                            place.row === rowIndex + 1 &&
                                            place.type === "balcony"
                                        )
                                      ? "#B8AF9E"
                                      : "black"
                                  }
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
        </div>
        <div className="w-[50vw] sm:w-full">
          <div className="h-[100px] text-[28px] flex justify-center items-center border-b-2 border-black">
            Корзина
          </div>
          <div className="bg-[#E1E1DD]">
            <div className="flex gap-3 p-3 flex-wrap justify-stretch">
              {selectedPlaces.map((place) => (
                <div className="bg-[#F2F2ED] flex ">
                  <div className="border-r-2 border-black">
                    <div className="p-3 font-serif">
                      <span>
                        <span>{place.row} </span> <span>ряд</span>,
                      </span>
                      <span>
                        <span> {place.place} </span> <span>место</span>
                      </span>
                    </div>
                    <div className="p-3 font-serif">Партер</div>
                  </div>

                  <div className="-rotate-90 flex items-center justify-center not-italic text-2xl">
                    {selectedSession.price} ₽
                  </div>
                </div>
              ))}
            </div>
            <div>
              {selectedPlaces.length > 0 && (
                <div className="w-full px-5 font-serif">
                  <div className=" text-2xl flex justify-between w-full">
                    <span>
                      {selectedPlaces.length}{" "}
                      {selectedPlaces.length === 1
                        ? "билет"
                        : selectedPlaces.length > 1 && selectedPlaces.length < 5
                        ? "билета"
                        : selectedPlaces.length > 4 && "билетов"}{" "}
                    </span>
                    <span className="text-3xl">
                      {selectedPlaces.length * selectedSession.price} ₽
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Комиссия 0%</span>
                    <span>0 ₽</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="min-h-[100px] flex items-center px-5 justify-end">
            {selectedPlaces.length > 0 && (
              <button
                className="font-serif h-[70px] sm:w-full w-[35%] bg-yellow-400 text-2xl"
                onClick={() => onBook()}
              >
                Забронировать
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
