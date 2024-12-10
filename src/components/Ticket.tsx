export default function Ticket({
  row,
  place,
  type,
  price,
  session_name,
  time
}: {
  row: number;
  place: number;
  type: "balcony" | "hall";
  price: number,
  session_name?: string,
  time?: Date
}) {
  return (
    <div className="bg-[#F2F2ED] flex ">
      <div className="border-r-2 border-black">
        <div className="p-3 font-serif">
          <div>{session_name}</div>
          <div>{time && new Date(time).toLocaleDateString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: 'long',
            timeZone: "UTC"
          })}</div>
          <span>
            <span>{row} </span> <span>ряд</span>,
          </span>
          <span>
            <span> {place} </span> <span>место</span>
          </span>
        </div>
        <div className="p-3 font-serif">
          {type === "balcony" ? "Балкон" : "Партер"}
        </div>
      </div>

      <div className="-rotate-90 flex items-center justify-center not-italic text-2xl">
        {price} ₽
      </div>
    </div>
  );
}
