import { useState } from "react"
import Group from "./components/Group/Group";
import Theatre from "./components/Theatre";

export default function About() {
    const [selectedBlock, setSelectedBlock] = useState<"group" | "teathre">("group");

    return <>
        <header className="bg-[url('/public/images/about/aboutTeathre.png')] bg-black text-white h-[65vh] flex flex-col items-center opacity-0.8 py-5">
            <div className="flex justify-center items-center text-[128px] h-full flex items-center">
                О ТЕАТРЕ
            </div>
            <div className="text-[24px] flex gap-12">
                <span className={`text-[${selectedBlock === 'group' ? '#F2F2ED' : '#B8AF9E'}] cursor-pointer`} onClick={() => setSelectedBlock("group")}>КОЛЛЕКТИВ</span>
                <span className={`text-[${selectedBlock === 'teathre' ? '#F2F2ED' : '#B8AF9E'}] cursor-pointer`} onClick={() => setSelectedBlock("teathre")}>ТЕАТР</span>
            </div>
        </header>


        {selectedBlock === "group" ? <Group /> : <Theatre />}
    </>
}