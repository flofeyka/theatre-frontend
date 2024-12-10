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



  return (
    <div className="flex-col min-h-screen min-w-full">
      <Header />
      <div className="px-[150px] sm:px-[15px] min-h-[65vh] mt-3">
        <div className="bg-white w-full text-2xl sm:flex-col flex justify-between">
          <div className="p-3 border-r-2 border-black flex justify-center w-[50%] sm:w-full sm:border-b-2 sm:border-r-0 cursor-pointer" onClick={() => setSelectedPage("lk")}>
            Личный кабинет
          </div>
          <div className="p-3 border-black flex justify-center w-[50%] sm:w-full cursor-pointer" onClick={() => setSelectedPage("booked")}>
            Забронированные билеты
          </div>
        </div>
        <LkPages selectedPage={selectedPage} userData={userData}/>
      </div>
      <Footer />
    </div>
  );
}
