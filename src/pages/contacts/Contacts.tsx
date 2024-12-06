import ContactsFooter from "./components/Footer";
import ContactsHeader from "./components/Header";
import ContactsMain from "./components/Main";
import YandexMaps from "./components/YandexMaps";

export default function Contacts() {
    return <>
        <ContactsHeader />
        <YandexMaps />
        <ContactsMain />
        <ContactsFooter />
    </>
}