import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Menu({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return open ? (
    <div
      className="fixed z-[9999]  overflow-y-hidden h-screen w-screen bg-black/30 flex justify-center items-center"
      onClick={handleClose}
    >
      <div
        className="w-[60vw] sm:w-full sm:flex-col bg-[#F2F2ED] flex sm:overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[70%] sm:w-full text-[50px] sm:text-[30px]">
          <div
            onClick={handleClose}
            className="cursor-pointer relative text-3xl flex justify-center items-center lg:hidden md:hidden h-[101px] w-full border-b-2 border-black"
          >
            Закрыть
          </div>

          <Link to="/" onClick={handleClose}>
            <div className="w-full border-b-2 border-black p-3 px-5">
              Главная
            </div>
          </Link>
          <Link to="/tickets" onClick={handleClose}>
            <div className=" border-b-2 border-black p-3 px-5">Билеты</div>
          </Link>
          <Link to="/repertoire" onClick={handleClose}>
            <div className=" border-b-2 border-black p-3 px-5">Репертуар</div>
          </Link>
          <Link to="/about" onClick={handleClose}>
            <div className=" border-b-2 border-black p-3 px-5">О театре</div>
          </Link>
          <Link to="/contacts" onClick={handleClose}>
            <div className=" p-3 px-5">Контакты</div>
          </Link>
        </div>
        <div className="w-[30%] sm:w-full border-l-2 sm:border-l-0 sm:border-t-2 border-black">
          <div
            onClick={handleClose}
            className="cursor-pointer relative text-3xl flex justify-center items-center sm:hidden h-[101px] w-full border-b-2 border-black"
          >
            Закрыть
          </div>
          <NavLink to="/lk" className="w-full cursor-pointer flex items-center text-center h-[200.5px] sm:h-full sm:px-5 sm:p-3 text-3xl border-b-2 border-black">
            Личный кабинет
          </NavLink>
          <div className="w-full cursor-pointer justify-center flex items-center h-[200.5px] sm:h-full sm:px-5 sm:p-3 text-center text-3xl border-b-2 border-black">
            Отмена бронирования
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
