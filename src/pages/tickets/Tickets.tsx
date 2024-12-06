const days = [
    {

    }
]

export default function Tickets() {
    return <div>
        <header className="bg-[url('/public/images/tickets/background.png')] h-[50vh] text-white text-[128px] flex justify-center items-center">
            БИЛЕТЫ
        </header>

        <div>
            <header className="bg-black w-full text-white flex gap-5 justify-center text-[22px] py-2">
                <span className="cursor-pointer">ЯНВАРЬ</span>
                <span className="cursor-pointer">ФЕВРАЛЬ</span>
                <span className="cursor-pointer">МАРТ</span>
                <span className="cursor-pointer">АПРЕЛЬ</span>
                <span className="cursor-pointer">МАЙ</span>
                <span className="cursor-pointer">ИЮНЬ</span>
                <span className="cursor-pointer">ИЮЛЬ</span>
                <span className="cursor-pointer">АВГУСТ</span>
                <span className="cursor-pointer text-[#FFC224]">СЕНТЯБРЬ</span>
                <span className="cursor-pointer">ОКТЯБРЬ</span>
                <span className="cursor-pointer">НОЯБРЬ</span>
                <span className="cursor-pointer">ДЕКАБРЬ</span>
            </header>

            <main>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </main>
        </div>
    </div>
}