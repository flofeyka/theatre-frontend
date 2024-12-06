export default function RepertoireItem({
  age,
  id,
  name,
  category,
  date,
}: {
  age: number;
  id: number;
  name: string;
  category?: string;
  date?: Date;
}) {
  return (
    <div className="w-[33.333333%] h-[42vw] border-r-2 border-black border-b-2 flex flex-col justify-center gap-2 items-center">
      <div className="text-black/2 mb-10">
        {date ? (
          <div className="text-center font-serif">
            <div className="text-3xl">
              {new Intl.DateTimeFormat("ru-RU", {
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              }).format(new Date(date))}
            </div>
            <div>
              {new Intl.DateTimeFormat("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "UTC",
              }).format(new Date(date))}
            </div>
          </div>
        ) : (
          `${age}+`
        )}
      </div>
      <div>
        <img
          src={`/images/repertoire/items/${id}.jpeg`}
          alt={"repertoire"}
          className="border-2 border-black h-[250px] w-[200px] p-3 rounded-t-full"
        />
      </div>
      <div className="text-[25px]">{name}</div>
      <div>{category || `${age}+`}</div>
    </div>
  );
}
