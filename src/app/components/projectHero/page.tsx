import { nexusBold } from "@/app/fonts/fonts";
import Popover from "../popover";
import Link from "next/link";

export default function ProjectHero(props: any) {
    const heroTitle = props.hero;

    return (
        <>
            <div className="min-h-full content-center bg-center bg-cover bg-[url('/images/background.webp')]">
                <div className="flex flex-col justify-center items-center">
                    <div className={nexusBold.className + " text-[20vw]"}>
                        {heroTitle}
                    </div>
                   
                </div>
            </div>
            <div className="fixed bottom-0 mb-5 right-0 mr-5 border-2  border-black font-bold text-black rounded-full flex items-center justify-center">
                <Link href={`/projects#`} scroll={true} className="uppercase text-black 
                hover:bg-black focus:outline-none font-medium
                rounded-full text-sm p-2.5  text-center  
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    &#10006;
                </Link>
            </div>
        </>
    );
}