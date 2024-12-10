import React from "react";
import { useOutletContext } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { User } from "../../types/types";
import LkPages from "./LkPages";

export default function Lk() {
  const [userData]: [userData: User] = useOutletContext();
  const [selectedPage, setSelectedPage] = React.useState<
    "lk" | "booked" | "history"
  >("lk");
  console.log(userData);



  return (
    <div className="flex-col min-h-screen min-w-full">
      <Header />
      <div className="px-[150px] h-[65vh] mt-3">
        <div className="bg-white w-full text-2xl flex justify-between">
          <div className="p-3 border-r-2 border-black flex justify-center w-[33%] cursor-pointer" onClick={() => setSelectedPage("lk")}>
            Личный кабинет
          </div>
          <div className="p-3 border-r-2 border-black flex justify-center w-[33%] cursor-pointer" onClick={() => setSelectedPage("booked")}>
            Забронированные билеты
          </div>
          <div className="p-3 flex justify-center w-[33%] cursor-pointer"  onClick={() => setSelectedPage("history")}>
            История посещения
          </div>
        </div>
        <LkPages selectedPage={selectedPage} userData={userData}/>
      </div>
      <Footer />
    </div>
  );
}
