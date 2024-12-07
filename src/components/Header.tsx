import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

export default function Header() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [menu, setMenu] = React.useState<boolean>(false);
  const handleOpenMenu = () => setMenu(!menu);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className="flex h-[7.5vh] border-b bg-[#F2F2ED]">
      <div className="flex justify-end w-full px-5">
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
              onClick={handleOpenMenu}
              to="/"
              className="border-1 cursor-pointer border-black h-full w-full flex justify-center items-center"
            >
              ГЛАВНАЯ
            </NavLink>
            <NavLink
              onClick={handleOpenMenu}
              to="/tickets"
              className="border-1 cursor-pointer border-black h-full w-full flex justify-center items-center"
            >
              БИЛЕТЫ
            </NavLink>
            <NavLink
              onClick={handleOpenMenu}
              to="/repertoire"
              className="w-full cursor-pointer flex justify-center items-center"
            >
              РЕПЕРТУАР
            </NavLink>
            <NavLink
              onClick={handleOpenMenu}
              to="/about"
              className="w-full cursor-pointer flex justify-center items-center"
            >
              О ТЕАТРЕ
            </NavLink>
            <NavLink
              onClick={handleOpenMenu}
              to="/contacts"
              className="w-full cursor-pointer flex justify-center items-center"
            >
              КОНТАКТЫ
            </NavLink>
            <span
              onClick={() => {
                handleOpen();
                handleOpenMenu();
              }}
              className="cursor-pointer border-black border-solid flex justify-center items-center px-5"
            >
              МЕНЮ
            </span>
          </div>
        </div>
      )}
      <Menu handleClose={handleClose} open={open} />
      <NavLink to="/" className="px-5 sm:hidden ">
        <img src="/images/logo.png" alt="logotype" />
      </NavLink>
      <div className="flex justify-between h-full w-full sm:hidden">
        <NavLink
          to="/tickets"
          className="border-1 cursor-pointer border-black border-l h-full w-full flex justify-center items-center"
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
          className="cursor-pointer border-1 border-l border-black border-solid w-[50%] flex justify-center items-center px-5"
        >
          МЕНЮ
        </span>
      </div>
    </header>
  );
}
