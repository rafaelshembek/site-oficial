// import React, { useState, useEffect } from "react";
import Image from "next/image";
import loja_o1 from "../../public/components/loja_01.png";
import { } from "@heroicons/react/24/outline";

const useVitrine = () => {
    return (
        <section className="flex flex-row justify-center items-center flex-wrap">
            <div className="text-zinc-600 flex flex-col justify-center items-center p-4 w-full">
                <h1 className="text-3xl p-2">Alguns de nossos Projetos...</h1>
                <p className="bg-green-100 text-green-600 font-extrabold rounded-md p-4 text-center">Nossa missão é proporcionar produtos que sejam não apenas de alta qualidade, mas também altamente responsivos, garantindo a satisfação e a confiança de nossos clientes</p>
            </div>
            <div className="flex flex-row justify-center items-center flex-wrap">
                <a href="https://my-loja-rafae-da-silva-gomes-projects.vercel.app/" className="flex flex-col hover:shadow-md bg-white justify-center items-start m-2">
                    <div className="bg-zinc-100 p-4 m-2"><Image width={300} height={400} src={loja_o1} alt="loja online views" /></div>
                    <h1 className="m-2 bg-teal-50 text-teal-500 font-medium p-2 rounded-md">Projeto de demostração</h1>
                </a>
                <a href="#" className="flex flex-col hover:shadow-md bg-white justify-center items-start m-2">
                    <div className="bg-zinc-100 p-4 m-2"><Image width={300} height={400} src={loja_o1} alt="loja online views" /></div>
                    <h1 className="m-2">Loja Online</h1>
                </a>
                <a href="#" className="flex flex-col hover:shadow-md bg-white justify-center items-start m-2">
                    <div className="bg-zinc-100 p-4 m-2"><Image width={300} height={400} src={loja_o1} alt="loja online views" /></div>
                    <h1 className="m-2">Loja Online</h1>
                </a>
                <a href="#" className="flex flex-col hover:shadow-md bg-white justify-center items-start m-2">
                    <div className="bg-zinc-100 p-4 m-2"><Image width={300} height={400} src={loja_o1} alt="loja online views" /></div>
                    <h1 className="m-2">Loja Online</h1>
                </a>
                <a href="#" className="flex flex-col hover:shadow-md bg-white justify-center items-start m-2">
                    <div className="bg-zinc-100 p-4 m-2"><Image width={300} height={400} src={loja_o1} alt="loja online views" /></div>
                    <h1 className="m-2">Loja Online</h1>
                </a>
            </div>

        </section>
    )
}

export default useVitrine;