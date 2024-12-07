export default function ContactsMain() {
    return <main className="flex sm:flex-col border-t-2 border-r-2 border-solid border-black">
        <div className="w-[55vw] sm:w-full sm:border-r-0 p-10 sm:p-3 flex flex-col justify-between border-r-2 border-black border-solid">
            <div className="text-[38px] sm:text-[30px]">
                ЛИТЕРАТУРНО-ДРАММАТУРГИЧЕСКАЯ ЧАСТЬ
            </div>

            <div className="flex sm:flex-col justify-between items-center sm:gap-3">
                <div>
                    <span>
                        <div className="text-[20px] text-black/50">Электронная почта: </div>
                        <div className="ml-10 sm:m-0 text-[32px]  border-b-2 border-black/50 ">teltons@yandex.ru</div>
                    </span>
                </div>

                <div className="flex flex-col gap-3">
                    <span>
                        <div className="text-[20px] text-black/50">Заведующий литературной частью:</div>
                        <div className="ml-10 sm:m-0 text-[32px]  border-b-2 border-black/50 ">Лаврова татьяна</div>
                    </span>
                    <span>
                        <div className="text-[20px] text-black/50">Телефон:</div>
                        <div className="ml-10 sm:m-0 text-[36px]  border-b-2 border-black/50 ">+7 492 232 30 92</div>
                    </span>
                </div>
            </div>
        </div>

        <div className="bg-[#F0D92A] w-[45vw] sm:w-full sm:p-3 sm:h-full p-10 flex flex-col justify-between h-[50vh]">
            <div className="text-[48px]">
                КАССА
            </div>

            <div className="flex flex-col gap-5">
                <span>
                    <div className="text-[24px] text-black/50">АДРЕС:</div>
                    <div className="ml-3 text-[28px]">Улица Большая Московская, дом 33/35</div>
                </span>
                <span>
                    <div className="text-[24px] text-black/50">РЕЖИМ РАБОТЫ:</div>
                    <div className="ml-3 text-[28px] sm:text-[24px]">
                        <div>пн-вт-ср-чт-пт-сб-вс</div>
                        <div>14:00 - 18:00</div>
                    </div>
                </span>
                <span className="text-center text-[24px]  border-b-2 border-black/50 ">Касса начнёт свою работу с 1 октября </span>
            </div>
        </div>
    </main>
}