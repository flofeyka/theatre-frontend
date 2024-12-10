import { User } from "../../types/types";
import BookedSessions from "./pages/BookedSessions";

export default function LkPages({
  selectedPage,
  userData,
}: {
  selectedPage: "lk" | "booked" | "history";
  userData: User;
}) {
  switch (selectedPage) {
    case "lk":
      return (
        <div>
          <div className="text-4xl">Личный кабинет</div>
          <div className="p-3 text-xl">
            <div>Электронная почта: {userData?.email}</div>
            <div>Полное имя: {userData?.fullName}</div>
            <div>
              Дата рождения:{" "}
              {new Date(userData?.birth).toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div>
              Дата создания аккаунта:{" "}
              {new Date(userData?.createdAt).toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      );
    case "booked":
      return <BookedSessions/>;
    default:
      return <div></div>;
  }
}
