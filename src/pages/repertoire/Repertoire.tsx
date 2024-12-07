import React, { useEffect } from "react";
import RepertoireItem from "../../components/RepertoireItem";
import { Repertoire } from "../../types/types";
import { repertoireAPI } from "../../api/repertoireAPI";


export default function Repertoires() {
  const [repertoires, setRepertoires] = React.useState<Repertoire[]>([]);

  useEffect(() => {
    const fetchRepertoires = async () => {
        const data = await repertoireAPI.getAllRepertoires();
        setRepertoires(data);
    }

    fetchRepertoires();
  }, []);

  return (
    <div>
      <div className="bg-[url('/public/images/repertoire/background.png')] text-white bg-yellow-500 h-[80vh] bg-cover sm:min-h-[50vh] sm:bg-center">
        <div className="flex justify-center items-center text-[128px] h-[94%] pt-10 sm:text-[50px]">
          РЕПЕРТУАР
        </div>
        <div className="flex justify-center gap-7 text-[24px]">
          <span className="cursor-pointer">ТЕКУЩИЙ</span>
          <span className="cursor-pointer">АРХИВ</span>
        </div>
      </div>
      <div className="flex flex-wrap border-t-2 border-black sm:flex-col">
        {repertoires.map((repertoire: Repertoire) => (
          <RepertoireItem
            image={repertoire.image}
            id={repertoire.id}
            name={repertoire.title}
            age={repertoire.category}
            category={repertoire.description}
          />
        ))}
      </div>

      <div className="flex justify-center h-[10vh] border-b-2 border-black">
        <span className="w-[17.5vw] cursor-pointer flex justify-center items-center border-r-2 border-black">
          <img src="/icons/arrow-left.svg" alt="arrow-left" />
        </span>
        <span className="w-full flex justify-center items-center text-2xl">
          1
        </span>
        <span className="w-[17.5vw] cursor-pointer flex justify-center items-center border-l-2 border-black">
          <img src="/icons/arrow-right.svg" alt="arrow-right" />
        </span>
      </div>
    </div>
  );
}
