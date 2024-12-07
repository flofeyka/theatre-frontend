export default function ContactsFooter() {
    return <footer>
        <div className="border-1 border-black border-solid flex justify-between text-[28px] sm:flex-col">
            <span className="w-[30vw] sm:border-l-0 sm:w-full cursor-pointer border-2 border-black border-solid flex justify-center items-center h-[12.5vh]">TELEGRAM</span>
            <span className="w-[40vw] sm:w-full sm:border-r-2 sm:border-t-0 sm:border-b-0 cursor-pointer border-b-2 border-t-2 border-black border-solid flex justify-center items-center h-[12.5vh]">VKONTAKTE</span>
            <span className="w-[30vw] sm:border-l-0 sm:w-full cursor-pointer border-2 border-black border-solid flex justify-center items-center h-[12.5vh]">YOUTUBE</span>
        </div>


        <div className="bg-[#D9D9D9] p-10 sm:p-3">
            <div className="text-[43px] sm:text-[28px] text-center">УЧРЕДИТЕЛЬ: МИНИСТЕРСТВО КУЛЬТУРЫ ВЛАДИМИРСКОЙ ОБЛАСТИ</div>
            <div className="flex sm:flex-col sm:gap-3 justify-between px-[5vw] mt-5">
                <div className="flex flex-col gap-5">
                    <span>
                        <div className="text-[20px] text-black/50">Адрес:</div>
                        <div className="text-[24px] ml-7 border-b-2 border-black/50 px-2">Россия, 600000, город Владимир, улица Музейная, дом 3</div>
                    </span>
                    <span>
                        <div className="text-[20px] text-black/50">Электронная почта:</div>
                        <div className="text-[24px] ml-7 border-b-2 border-black/50 px-2"><a href="mailto:dk@avo.ru">dk@avo.ru</a></div>
                    </span>
                </div>
                <div className="flex flex-col gap-5">
                    <span>
                        <div className="text-[20px] text-black/50">Веб-сайт:</div>
                        <div className="text-[24px] ml-7 border-b-2 border-black/50 px-2"><a href="https://culture.avo.ru/">culture.avo.ru</a></div>
                    </span>
                    <span>
                        <div className="text-[20px] text-black/50">Телефон:</div>
                        <div className="text-[24px] ml-7 border-b-2 border-black/50 px-2">+7 492 232 44 16</div>
                    </span>
                </div>
            </div>
        </div>

    </footer>
}