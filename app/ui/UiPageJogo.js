
import React from "react";
import Image from "next/image";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import ui_jogo from "../../public/ui_jogos.svg";


export default function UiPageDevice() {
    return (
        <>
            <section className="bg-ui-page-jogos flex justify-center items-start flex-wrap-reverse">
                <div className="container-page-jogo flex flex-wrap w-full justify-around items-center p-5">
                    <div className="title-page-jogos w-1/2 p-2 flex justify-center flex-col h-full items-center">
                        <h1 className="text-center text-2xl text-gray-600 font-medium m-6">🎮 Em Breve: Desenvolvimento de Jogos na Unity!</h1>
                        <p className="w-[600px] text-center font-extralight text-1xl"> Estamos animados em anunciar que em breve estaremos oferecendo serviços de desenvolvimento de jogos na Unity! Prepare-se para mergulhar em emocionantes aventuras, desafios estimulantes e experiências únicas. Fique atento para mais atualizações e prepare-se para explorar novos mundos virtuais conosco!</p>
                        <a href="#" style={{ cursor: "not-allowed", backgroundColor: "#999" }} className="btn-jogo justify-center flex flex-row items-center h-50 text-white w-80 m-4 rounded-md shadow-md p-5 animate-bounce">
                            <h2>Desenvolvimento de Jogos</h2>
                        </a>
                    </div>
                    <div className="img-jogo w-1/2 p-2 flex justify-center items-center p-4">
                        <Image className="ui_jogo" height={300} width={300} src={ui_jogo} alt="ui interface de jogo" />
                    </div>
                </div>
            </section>
        </>
    )
}