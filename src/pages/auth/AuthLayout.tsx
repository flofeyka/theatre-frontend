import React from "react";

export default function AuthLayout({children}: {children: React.ReactNode}) {
    return <div className="bg-[#E1E1DD] flex justify-center items-center h-[92.5vh]">
        {children}
    </div>
}