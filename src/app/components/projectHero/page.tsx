import { nexusBold } from "@/app/fonts/fonts";

export default function ProjectHero() {

    return (
        <>
            <div className="min-h-full content-center bg-center bg-cover bg-[url('/images/background.webp')]">

                <div className="flex flex-col justify-center items-center">
                    <div className={nexusBold.className + " text-[20vw]"}>
                        PROJECT HERO2
                    </div>

                    <div>TEST</div>

                </div>

                <div className="absolute left-0 bottom-0">
                    <div className="mb-5 ml-5">
                        <span className="pr-3">
                            Services:
                        </span>
                        <span className="bg-white rounded-full p-3">web-devepment, branding</span>
                    </div>
                </div>
            </div>
        </>
    );
}