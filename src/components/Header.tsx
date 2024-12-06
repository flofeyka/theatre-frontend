import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

export default function Header() {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)


    return <header className="flex h-[7.5vh] border-b bg-[#F2F2ED]">
        <Menu handleClose={handleClose} open={open}/>
        <NavLink to="/" className="px-5">
            <img src="/images/logo.png" alt="logotype" />
        </NavLink>
        <div className="flex justify-between h-full w-full">
            <NavLink to="/tickets" className="border-1 cursor-pointer border-black border-l h-full w-full flex justify-center items-center">БИЛЕТЫ</NavLink>
            <NavLink to="/repertoire" className="w-full cursor-pointer flex justify-center items-center">РЕПЕРТУАР</NavLink>
            <NavLink to="/about" className="w-full cursor-pointer flex justify-center items-center">О ТЕАТРЕ</NavLink>
            <NavLink to="/contacts" className="w-full cursor-pointer flex justify-center items-center">КОНТАКТЫ</NavLink>
            <span onClick={handleOpen} className="cursor-pointer border-1 border-l border-black border-solid w-[50%] flex justify-center items-center px-5">МЕНЮ</span>
        </div>
    </header>
}