import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { repertoireAPI } from "../../api/repertoireAPI";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import RepertoireItem from "../../components/RepertoireItem";
import { Repertoire } from "../../types/types";

export default function Landing() {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [repertoires, setRepertoires] = React.useState<Repertoire[]>([]);
  console.log(repertoires);

  useEffect(() => {
    const fetchRepertoires = async () => {
      const repertoires = await repertoireAPI.getAllRepertoires();
      setRepertoires(repertoires);
    };

    fetchRepertoires();
  }, []);

  return (
    <div>
      <Menu handleClose={handleClose} open={open} />
      <header className="flex">
        <span className="w-[20vw] py-7 flex flex-col items-center border-r-2 border-black">
          <img
            alt="theatre "
            src="/images/landing/big-logo.png"
            className="w-[15vw] h-[20vh]"
          />
          <div className="text-[24px] w-[80%]">
            ВЛАДИМИРСКИЙ ОБЛАСТНОЙ АКАДЕМИЧЕСКИЙ
          </div>
          <div className="text-[50px] font-semibold text-center">
            ТЕАТР ДРАМЫ
          </div>
        </span>
        <span className="w-full h-full">
          <div className="flex justify-between h-[7.5vh] w-full border-b-2 border-black">
            <NavLink
              to="/tickets"
              className="border-1 cursor-pointer border-black h-full w-full flex justify-center items-center"
            >
              БИЛЕТЫ
            </NavLink>
            <NavLink
              to="/repertoire"
              className="w-full cursor-pointer flex justify-center items-center"
            >
              РЕПЕРТУАР
            </NavLink>
            <NavLink
              to="/about"
              className="w-full cursor-pointer flex justify-center items-center"
            >
              О ТЕАТРЕ
            </NavLink>
            <NavLink
              to="/contacts"
              className="w-full cursor-pointer flex justify-center items-center"
            >
              КОНТАКТЫ
            </NavLink>
            <span
              onClick={handleOpen}
              className="cursor-pointer border-l-2 border-black border-solid w-[50%] flex justify-center items-center px-5"
            >
              МЕНЮ
            </span>
          </div>

          <div className="h-full">
            <div className="flex flex-col h-[375px] justify-between w-[60%] items-center p-3">
              <div className="text-[35px]">
                Открытие <span className="font-semibold">175</span>-ого
                театрального сезона уже в сентябре
              </div>
              <div className="flex flex-col items-center h-full justify-end">
                <div className="text-[35px]">Успей приобрести билеты</div>
                <div>
                  <Link to="/tickets">
                    <button className="rounded-full bg-[#F0D92A] font-serif px-12 py-3">
                      Купить билет
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-10 ">
              <img
                src="/images/landing/theatre.png"
                alt="theater building"
                className="w-[600px]"
              />
            </div>
          </div>
        </span>
      </header>

      <main>
        <div className="w-full h-[50vh] bg-black flex px-14 text-white">
          <div>
            <span className="text-white font-semibold text-3xl mt-3">14+</span>
            <span>
              <img
                src="/images/landing/451-farenheit.png"
                className="h-[45vh]"
                alt="451 farenheit"
              />
            </span>
          </div>
          {repertoires.length > 0 && (
            <div className="py-5 ml-3 w-[60vw]">
              <div className="flex justify-between w-full">
                <img
                  src="/images/pushkin_card.png"
                  alt="pushkin_card"
                  className="w-[175px] h-[75px]"
                />

                <div className="text-[35px] flex flex-col items-end justify-self-end">
                  <div>
                    {new Intl.DateTimeFormat("ru-RU", {
                      month: "long",
                      day: "numeric",
                      timeZone: "UTC", // Используем UTC для точного отображения
                    }).format(new Date(repertoires[0].sessions[0].time))}
                  </div>
                  <div>
                    {new Intl.DateTimeFormat("ru-RU", {
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZone: "UTC", // Используем UTC
                    }).format(new Date(repertoires[0].sessions[0].time))}
                  </div>
                  <div>
                    {new Intl.DateTimeFormat("ru-RU", {
                      weekday: "short",
                      timeZone: "UTC", // Используем UTC
                    }).format(new Date(repertoires[0].sessions[0].time))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="">
                  <div className="text-[48px] justify-center items-center flex">
                    {repertoires[0].title}
                  </div>
                  <div className="flex justify-end">
                    {repertoires[0].description}
                  </div>
                </div>
              </div>
              <div className="flex w-[85%] justify-end mt-10">
                <button className="px-10 py-3 text-[25px] bg-[#F0D92A] text-black font-semibold rounded-lg ">
                  Подробнее
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-stretch border-b-2 border-black">
          <div className="w-[22.5vw] py-5 bg-[#F0D92A] justify-between flex flex-col items-center relative border-black">
            <div className="text-[20px] font-serif">Люди театра</div>
            <div>
              <img
                alt="people theatre"
                src="/images/members/9.jpeg"
                className="p-3 rounded-full border-2 border-black w-[170px] h-[170px]"
              />
            </div>
            <div className="text-center">
              <div className="text-[30px]">Иванова Галина</div>
              <div className="font-serif">Народная артистка РФ</div>
            </div>
          </div>

          <div className="flex flex-col items-center w-[52.5vw] bg-[#B8AF9E] relative border-l-2 border-r-2 border-black">
            <div className="z-10">
              <img
                alt="vpn"
                src="/images/landing/chandelier.png"
                className="h-[40vh] -mt-[94px]"
              />
            </div>
            <div className="text-[35px] flex flex-col text-center items-center -mt-7">
              <div className="w-[80%]">
                При работающем vpn покупка билетов может быть затруднена
              </div>
              <div>Рекомендуем перед покупкой выключить vpn</div>
            </div>
          </div>

          <div className="w-[25vw] pt-5 pl-5 bg-[#D9D9D9] text-[34px] border-black">
            <div>Поддержи нас в голосовании</div>
            <div className="flex justify-end">
              <img
                src="/images/landing/votes.png"
                alt="votes"
                className="h-[350px] -mt-10"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="text-[30px] py-5 text-center border-b-2 border-black">
            БЛИЖАЙШИЕ СОБЫТИЯ
          </div>

          <div className="flex w-full">
            {repertoires.map((repertoire: Repertoire) => (
              <RepertoireItem
                id={repertoire.id}
                key={repertoire.id}
                name={repertoire.title}
                date={new Date(repertoire.sessions[0].time)}
                age={repertoire.category}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
