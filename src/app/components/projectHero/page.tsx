'use client'

import { nexusBold } from "@/app/fonts/fonts";
import Popover from "../popover";
import Link from "next/link";

export default function ProjectHero() {

    const firstInfo = {
        title: "Ongoing since 2018",
        description: "London, UK",
        stack_text: {
            first: "java",
            second: "php",
            third: "js"
        }
    };

    const InfoCard = ({ info }: any) => {
        return (
            <>
                <span className="">{info.title}</span>
                <span className="px-4">{info.description}</span>
                <span className="">
                    <Popover stack_text={info.stack_text} />
                </span>
            </>
        );
    };

    return (
        <>
            <div className="min-h-full content-center bg-center bg-cover bg-[url('/images/background.webp')]">
                <div className="flex flex-col justify-center items-center">
                    <div className={nexusBold.className + " text-[20vw]"}>
                        PROJECT HERO2
                    </div>
                    <div className="flex bg-white rounded-full p-3">
                        <InfoCard info={firstInfo} />
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 mb-5 right-0 mr-5 border-2  border-black font-bold text-black rounded-full flex items-center justify-center">
                <Link href={"/#projects"} className="text-4xl uppercase text-black 
                hover:bg-black focus:outline-none font-medium
                rounded-full text-sm p-2.5  text-center  
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    &#10006;
                </Link>
            </div>
        </>
    );
}