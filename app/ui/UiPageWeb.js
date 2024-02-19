
import React from "react";
import Image from "next/image";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import ui_web_01 from "../../public/ui_web_01.svg";


export default function UiPageDevice() {
    return (
        <>
            <section className="bg-ui-page-web flex justify-center items-start flex-wrap-reverse">
                <div className="container-page-web flex flex-wrap w-full justify-around items-center p-5">
                    <div className="img-web w-1/2 p-2 flex justify-center items-center p-4">
                        <Image className="ui_web" height={300} width={300} src={ui_web_01} alt="ui web" />
                    </div>
                    <div className="title-page-web w-1/2 p-2 flex justify-center flex-col h-full items-center">
                        <h1 className="text-center text-2xl text-gray-600 font-medium m-6">🌐 Potencialize Sua Presença Online: Desenvolvimento Web Feito Sob Medida!</h1>
                        <p className="w-[600px] text-center font-extralight text-1xl"> Transforme sua presença online com um site feito sob medida para você! Nossa equipe de desenvolvimento web especializada irá criar uma plataforma que representa autenticamente sua marca e atende às suas necessidades. Entre em contato hoje e dê o primeiro passo para uma presença online excepcional!</p>
                        {/* <a href="/Vitrine" className="bg-green-400 flex flex-row justify-center items-center text-white h-50 m-4 w-80 rounded-md shadow-md p-5 animate-bounce">
                            <GlobeAmericasIcon className="h-6 w-6 mr-1" />
                            <h1>Desenvolvimento Web</h1>
                        </a> */}
                    </div>
                </div>
            </section>
        </>
    )
}