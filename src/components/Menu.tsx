import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Menu({ open, handleClose }: { open: boolean; handleClose: () => void }) {

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open])

    return open ? <div className="fixed z-[9999] overflow-y-hidden h-screen w-screen bg-black/30 flex justify-center items-center" onClick={handleClose}>
        <div className="w-[60vw] bg-[#F2F2ED] flex" onClick={(e) => e.stopPropagation()}>
            <div className="w-[70%] text-[50px]">
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
            <div className="w-[30%] border-l-2 border-black">
                <div onClick={handleClose} className="cursor-pointer relative text-3xl flex justify-center items-center h-[101px] w-full border-b-2 border-black">Закрыть</div>
                <div className="w-full cursor-pointer flex items-center text-center h-[200.5px] text-3xl border-b-2 border-black">
                    Личный кабинет
                </div>
                <div className="w-full cursor-pointer justify-center flex items-center h-[200.5px] text-center text-3xl border-b-2 border-black">
                    Отмена бронирования
                </div>
            </div>
        </div>
    </div> : <div></div>
}