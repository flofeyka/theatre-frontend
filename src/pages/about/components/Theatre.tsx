export default function Theatre() {
    return <div className="flex border-b-2 border-black">
        <div className="w-[25vw] border-r-2 border-black">
            <div className="bg-[url('/public/images/about/old-1.png')] flex flex-col text-[25px] font-[serif] py-4 bg-black justify-between items-center h-[40vh]">
                <div>СОЗДАНИЕ ТЕАТРА</div>
                <div>1848-1905</div>
            </div>
            <div className="flex flex-col text-[25px] font-[serif] py-4 bg-black text-white justify-between items-center border-b-2 border-white h-[40vh]">
                <div>СОВЕТСКОЕ ВРЕМЯ</div>
                <div>1848-1905</div>
            </div>
            <div className=" flex flex-col text-[25px] font-[serif] py-4 bg-black text-white justify-between items-center h-[40vh]">
                <div>СОЗДАНИЕ ТЕАТРА</div>
                <div>1934-1971</div>
            </div>
        </div>
        <div className="w-[50vw]">
            <div className="border-b-2 border-black">
                <header className="text-[48px] border-b-2 border-black">
                    <div className="m-3">                    СОЗДАНИЕ ТЕАТРА
                    </div>
                </header>
                <main className="flex flex-col gap-5 p-3 font-[serif] text-[24px] m-3">
                    <div>
                        Профессиональный театр в городе Владимир был основан 1848 году. Инициатором создания театра выступил актёр Иван Лавров, сумевший донести до Владимирского губернатора П. М. Донаурова мысль, что театр жизненно необходим каждому городу.
                    </div>
                    <div>
                        Первый сезон в театре выступала труппа антрепренера Соловьева. Затем художественное руководство театром приняла бывшая прима Александринского театра в Петербурге Александра Матвеевна Читау. Театр впервые выехал на гастроли — в Санкт-Петербург.
                    </div>
                    <div>
                        Первое здание было спешно возведено у Золотых ворот, довольно быстро оно пришло в ветхость и было заменено новым, до начала XX века располагавшемся у Золотых ворот же, на месте здания бывшего Реального училища.
                    </div>
                    <div>
                        Третье здание театра было построено в 1905 году как Народный дом (архитектор — Я. Г. Ревякин); ныне здание Владимирского областного театра кукол.
                    </div>
                </main>
            </div>
            <div>
                <header className="text-[48px] border-b-2 border-black">
                    <div className="m-3">
                        СОВЕТСКОЕ ВРЕМЯ
                    </div>
                </header>
                <main className="flex flex-col gap-5 p-3 font-[serif] text-[24px] m-3">
                    <div>
                        В годы советской власти, с сезона 1934—1935, театр получил имя крупного советского государственного деятеля А. В. Луначарского (1875—1933).
                    </div>
                    <div>
                        В годы Великой Отечественной войны артисты театра работали во фронтовых концертных бригадах.
                    </div>
                    <div>
                        С образованием Указом Президиума Верховного Совета СССР от 14 августа 1944 года Владимирской области в составе
                    </div>
                </main>
            </div>
        </div>
        <div className="w-[25vw] border-l-2 border-black">
            <div className="text-[48px] flex justify-center h-[11.7vh] items-center border-b-2 border-black">ВИД ТЕАТРА</div>
            <div className="flex flex-col gap-5">
                <img src="/images/about/old-2.png" className="border-b-2 border-black" alt="old theatre" />
                <img src="/images/about/old-3.png" className="border-b-2 border-t-2 border-black" alt="old theatre" />
                <img src="/images/about/old-4.png" className="border-b-2 border-t-2 border-black" alt="old theatre" />
            </div>
        </div>
    </div>
}