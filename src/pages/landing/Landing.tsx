import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { repertoireAPI } from "../../api/repertoireAPI";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import RepertoireItem from "../../components/RepertoireItem";
import { Repertoire } from "../../types/types";

export default function Landing() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [menu, setMenu] = React.useState<boolean>(false);
  const handleOpenMenu = () => setMenu(!menu);
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
        <span className="w-[20vw] py-7 flex flex-col items-center border-r-2 border-black sm:hidden">
          <img
            alt="theatre "
            src="/images/landing/big-logo.png"
            className="w-[15vw] h-[20vh]"
          />
          <div className="text-[24px] md:text-[16px] sm:text-[14px] sm:w-full w-[80%]">
            ВЛАДИМИРСКИЙ ОБЛАСТНОЙ АКАДЕМИЧЕСКИЙ
          </div>
          <div className="text-[50px] md:text-[36px] sm:text-[36px] font-semibold text-center">
            ТЕАТР ДРАМЫ
          </div>
        </span>
        <span className="w-full h-full">
          <div className="lg:hidden md:hidden h-[7.5vh] w-screen flex justify-center flex-col items-end px-5 ">
            {!menu && (
              <button
                onClick={() => setMenu(!menu)}
                className="group flex items-center justify-center w-6 h-full rounded-small tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2"
                type="button"
                aria-pressed="false"
              >
                <span className="sr-only">open navigation menu</span>
                <span className="w-full h-full pointer-events-none flex flex-col items-center justify-center text-inherit group-data-[pressed=true]:opacity-70 transition-opacity before:content-[''] before:block before:h-px before:w-6 before:bg-current before:transition-transform before:duration-150 before:-translate-y-1 before:rotate-0 group-data-[open=true]:before:translate-y-px group-data-[open=true]:before:rotate-45 after:content-[''] after:block after:h-px after:w-6 after:bg-current after:transition-transform after:duration-150 after:translate-y-1 after:rotate-0 group-data-[open=true]:after:translate-y-0 group-data-[open=true]:after:-rotate-45"></span>
              </button>
            )}
          </div>
          <div>
            {menu && (
              <div className="menu-opened bg-[#F2F2ED] h-screen z-[9999999] fixed top-0 w-screen left-0 flex flex-col px-7 p-5 overflow-hidden text-xl gap-2 ">
                <div
                  onClick={handleOpenMenu}
                  className="absolute top-[2vh] right-[15px]"
                >
                  <img
                    src="/icons/close.svg"
                    alt="close"
                    height={27.5}
                    width={27.5}
                  />
                </div>
                <div className="text-center mt-[5vh] flex flex-col text-2xl gap-5">
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
                    onClick={() => {handleOpen(); handleOpenMenu()}}
                    className="cursor-pointer border-black border-solid flex justify-center items-center px-5"
                  >
                    МЕНЮ
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between h-[7.5vh] w-full border-b-2 border-black sm:hidden">
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
            <div className="flex flex-col min-h-[375px] justify-between w-[60%] items-center p-3 sm:text-center sm:w-full md:w-full ">
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
            <div className="absolute right-0 top-10 md:hidden sm:hidden">
              <img
                src="/images/landing/theatre.png"
                alt="theater building"
                className="w-[40vw]"
              />
            </div>
          </div>
        </span>
      </header>

      <main>
        {repertoires.length > 0 && (
          <div className="w-full h-[50vh] sm:h-full sm:flex-col bg-black flex px-14 sm:p-0 text-white">
            <div className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:w-full sm:h-full sm:gap-5">
              <span className="text-white font-semibold text-3xl mt-3">
                14+
              </span>
              <span>
                <img
                  src={repertoires[0].image}
                  className="h-[45vh] "
                  alt="451 farenheit"
                />
              </span>
            </div>
            {repertoires.length > 0 && (
              <div className="py-5 ml-3 sm:ml-0 w-[60vw] sm:w-full">
                <div className="flex sm:flex-col sm:items-center sm:text-center justify-between w-full">
                  <img
                    src="/images/pushkin_card.png"
                    alt="pushkin_card"
                    className="w-[175px] h-[75px] sm:w-[100px] sm:hidden"
                  />

                  <div className="text-[35px] sm:items-center flex flex-col items-end justify-self-end">
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
                <div className="flex w-[85%] sm:w-full sm:justify-center justify-end mt-10">
                  <button className="px-10 py-3 text-[25px] bg-[#F0D92A] text-black font-semibold rounded-lg ">
                    Подробнее
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex items-stretch border-b-2 border-black sm:flex-col sm:w-full sm:items-center">
          <div className="w-[22.5vw] sm:w-full sm:py-10  py-5 bg-[#F0D92A] justify-between flex flex-col items-center relative border-black">
            <div className="text-[20px] font-serif">Люди театра</div>
            <div>
              <img
                alt="people theatre"
                src="/images/members/9.jpeg"
                className="p-3 rounded-full border-2 border-black w-[170px] h-[170px] sm:h-[250px] sm:w-[250px] "
              />
            </div>
            <div className="text-center">
              <div className="text-[30px]">Иванова Галина</div>
              <div className="font-serif">Народная артистка РФ</div>
            </div>
          </div>

          <div className="flex flex-col items-center w-[52.5vw] sm:w-full bg-[#B8AF9E] relative border-l-2 sm:border-none border-r-2 border-black">
            <div className="z-10">
              <img
                alt="vpn"
                src="/images/landing/chandelier.png"
                className="h-[40vh] -mt-[94px]"
              />
            </div>
            <div className="text-[35px] flex flex-col sm:border-none text-center items-center -mt-7">
              <div className="w-[80%]">
                При работающем vpn покупка билетов может быть затруднена
              </div>
              <div>Рекомендуем перед покупкой выключить vpn</div>
            </div>
          </div>

          <div className="w-[25vw] sm:w-full sm:border-none pt-5 pl-5 bg-[#D9D9D9] text-[34px] border-black">
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

        {repertoires.length > 0 && (
          <div>
            <div className="text-[30px] py-5 text-center border-b-2 border-black">
              БЛИЖАЙШИЕ СОБЫТИЯ
            </div>

            <div className="flex w-full">
              {repertoires.map((repertoire: Repertoire) => (
                <RepertoireItem
                  image={repertoire.image}
                  id={repertoire.id}
                  key={repertoire.id}
                  name={repertoire.title}
                  date={new Date(repertoire.sessions[0].time)}
                  age={repertoire.category}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
