export default function Footer() {
    return <footer className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center h-[12vh] py-10">
            <img src="/images/yellow-logo.png" alt="logo" />
        </div>

        <div className="border-t-2 border-black w-full flex flex-col items-center py-5">
            <div>
                © Владимирский областной академический  театр драмы, 2009-2023
            </div>
            <div>
                600000, Владимир, дворянская 4
            </div>
            <div>
                Пресс служба: <a href="mailto:dramapress@mail.ru">dramapress@mail.ru</a>
            </div>
        </div>
    </footer>
}