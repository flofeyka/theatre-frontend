type Contact = {
    post: string;
    fullname: string;
    phone: string;
    email?: string;
}

const contacts: Contact[] = [
    {
        "post": "ЗАМЕСТИТЕЛЬ ДИРЕКТОРА",
        "fullname": "ТУРКОВА ВИКТОРИЯ",
        "phone": "+7 492 232 41 63"
    },
    {
        "post": "ЗАМЕСТИТЕЛЬ ДИРЕКТОРА",
        "fullname": "ПАНФИЛОВА ЛЮДМИЛА",
        "phone": "+7 492 232 30 17"
    },
    {
        "post": "ДИРЕКТОР",
        "fullname": "ГУНИН БОРИС",
        "phone": "+7 492 232 42 58",
        "email": "VLADIMIRTEATR@YANDEX.RU"
    },
    {
        "post": "ЗАМЕСТИТЕЛЬ ДИРЕКТОРА",
        "fullname": "БАРАНОВ РАДИЙ",
        "phone": "+7 492 232 28 52"
    },
    {
        "post": "ЗАМЕСТИТЕЛЬ ДИРЕКТОРА",
        "fullname": "КИРИКОВ СЕРГЕЙ",
        "phone": "+7 492 232 63 24"
    }
]

export default function ContactsHeader() {
    return <header className="flex border-t-2 border-black border-solid sm:flex-col">
        <div className="flex flex-col px-8 py-10 w-[40vw] sm:w-full justify-between bg-[#B8AF9E] border-solid border-r-2 border-black">
            <div className="text-[48px] sm:text-[36px]">
                ПРЕСС-СЛУЖБА
            </div>

            <div className="flex justify-between sm:flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <span className="text-black/50">ЭЛЕКТРОННАЯ ПОЧТА:</span>
                    <span className="text-[22px] ml-3 border-b-2 border-black/50 "><a href="mailto:dramapress@mail.ru">DRAMAPRESS@MAIL.RU</a></span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <span className="text-black/50">ГЛАВНЫЙ АДМИНИСТРАТОР:</span>
                        <span className="text-[22px] border-b-2 border-black/50  pr-3 ml-3">ШАЛУХИНА ТАТЬЯНА</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-black/50">ТЕЛЕФОН:</span>
                        <span className="text-[28px] border-b-2 border-black/50  ml-3">+7 492 232 30 17</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-[60vw] sm:w-full bg-[#FFC224] p-5 border-r-2 border-black ">
            <div className="flex sm:flex-col items-center gap-10 px-10">
                <span className="text-[38px]">АДРЕС</span> <span className="text-[24px] border-bottom-2 border-black border-solid mb-2 h-full">Россия, 600000, город Владимир, улица Дворянская, дом 4</span>
            </div>
            <div className="mt-7 flex flex-wrap">
                {/* <div className="text-[38px]">КОНТАКТЫ</div> */}
                <div className="flex flex-wrap gap-3">
                    {/* {contacts.map(contact => <div className="flex flex-col">
                    <span>
                        <div>
                            {contact.post}:
                        </div>
                        <div className="text-[22px] ml-5">
                            {contact.fullname}
                        </div>
                    </span>
                    <span>
                        <div>ТЕЛЕФОН:</div>
                        <div className="text-[28px] ml-5">
                            {contact.phone}
                        </div>
                    </span>
                    {contact.email && <span>
                        <div>ОБЩАЯ ЭЛЕКТРОННАЯ ПОЧТА</div>
                        <div className="ml-5 text-[22px]">{contact.email}</div>
                    </span>}

                </div>)} */}
                </div>
            </div>
        </div>
    </header>
}