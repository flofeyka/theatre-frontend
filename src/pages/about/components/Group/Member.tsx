export default function Member({
    post, fullName, id
}: {post?: string; fullName: string; id: number}) {
    return <div className="w-full h-[35vw] sm:h-full sm:text-center sm:border-b-2 sm:py-10 flex flex-col justify-center items-center gap-5 border-l-2 border-black">
        <div className="text-[24px]">{post}</div>
        <div>
            <img className="rounded-full w-[200px] h-[200px] p-3 border-2 border-solid border-black object-cover" alt="member" src={`/images/members/${id}.jpeg`} />
        </div>
        <div className="text-[28px]">
            {fullName}
        </div>
    </div>
}