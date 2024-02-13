import React from "react";
import Image from "next/image";
import { ExclamationCircleIcon, HeartIcon } from "@heroicons/react/24/outline";

import underconstruction from "../../public/components/backgroundUnderConstruction.svg";

const UnderConstruction = () => {
    return (
        <>
            <div id="page-under-construction" className="flex flex-col justify-center items-center h-full text-zinc-400">
                <h1 className="text-3xl m-8 text-zinc-500">Pagina em Construção</h1>
                <div className="w-1/2 flex flex-row flex-wrap justify-center items-center">
                    <Image width={400} height={400} src={underconstruction} alt="page under construction" />
                    <p className="m-6 bg-teal-100 text-teal-700 p-3 rounded-md text-center flex flex-row justify-center items-center "><ExclamationCircleIcon className="h-10 w-10" /> Estamos trabalhando nos bastidores para trazer algo excepcional. Volte em breve para descobrir todas as novidades que estamos preparando para você</p>
                </div>
                <p className="flex flex-row justify-center font-semibold text-3xl items-center">Feito com <HeartIcon className="text-red-600 h-10 w-10 ml-3" /></p>
            </div>
        </>
    )
}

export default UnderConstruction;