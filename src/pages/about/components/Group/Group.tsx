import Member from "./Member";

type Member = {
    id: number;
    fullName: string;
    post?: string;
}

type Members = {
    admins: {
        title: string;
        members: Member[];
    };
    directors: {
        title: string;
        members: Member[];
    };
    actors: {
        title: string;
        members: Member[];
    };
}

const members: Members = {
    admins: {
        title: "АДМИНИСТРАТИВНО-ТВОРЧЕСКИЙ СОСТАВ",
        members: [
            {
                id: 1,
                fullName: "ГУНИН БОРИС",
                post: "Директор"
            },
            {
                id: 2,
                fullName: "ТУРКОВА ВИКТОРИЯ",
                post: "Заместитель директора"
            },
            {
                id: 3,
                fullName: "ШАВЛОВСКИЙ СТАНИСЛАВ",
                post: "Главный художник"
            },
            {
                id: 4,
                fullName: "ЛЕНКОВА ВАЛЕНТИНА",
                post: "Заведующая труппой"
            }
        ]
    },
    directors: {
        title: "РЕЖИССЁРСКИЙ СОСТАВ",
        members: [
            {
                id: 5,
                fullName: "АСТРАХАН ДМИТРИЙ"
            },
            {
                id: 6,
                fullName: "БЕЛИНСКИЙ ОЛЕГ"
            },
            {
                id: 7,
                fullName: "БЕЛЯЕВА ЮЛИЯ"
            },
            {
                id: 8,
                fullName: "Бланк Борис"
            },
        ]
    },
    actors: {
        title: "АКТЁРСКИЙ СОСТАВ",
        members: [
            {
                id: 9,
                fullName: "ИВАНОВА ГАЛИНА"
            },
            {
                id: 10,
                fullName: "ЛАПТАЕВ ВЛАДИМИР"
            },
            {
                id: 11,
                fullName: "АЛАДЫШЕВ АЛЕКСАНДР"
            },
            {
                id: 12,
                fullName: "ЖОХОВА ИРИНА"
            },
        ]
    }
}

export default function Group() {
    return <div>
        <div className="border-b-2 border-black border-solid text-[20px] sm:text-[15px] justify-between flex sm:flex-col">
            <span className=" w-[33vw] sm:w-full flex justify-center items-center sm:border-b-2 sm:border-black">АДМИНИСТРАТИВНО ТВОРЧЕСКИЙ СОСТАВ</span>
            <span className=" w-[33vw] sm:w-full flex justify-center items-center sm:border-b-2 sm:border-black">РЕЖИССЁРСКИЙ СОСТАВ</span>
            <span className=" w-[33vw] sm:w-full flex justify-center items-center ">АКТЁРСКИЙ СОСТАВ</span>
        </div>
        {Object.entries(members).map(val => <>
            <div>
                <header className="text-[30px] text-center my-3">{val[1].title}</header>
            </div>
            <div className="border-t-2 border-b-2 border-black flex sm:flex-col">
                {val[1].members.map((member: Member) => <Member fullName={member.fullName} id={member.id} post={member.post} key={member.id} />)}
            </div>
        </>
        )}

    </div>
}