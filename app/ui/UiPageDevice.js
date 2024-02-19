import React from "react";
import Image from "next/image";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import ui_device from "../../public/ui_device_02.svg";
import ui_device_03 from "../../public/ui_device_03.svg";


export default function UiPageDevice() {
    return (
        <>
            <section className="bg-ui-device flex justify-center items-start flex-wrap">
                <div className="container flex flex-wrap w-full justify-around items-center p-5">
                    <div className="title-page-device w-1/2 p-2 flex justify-center flex-col h-full items-center">
                        <h1 className="text-center text-2xl text-gray-600 font-medium m-6">🚀 Transforme sua ideia em realidade com um aplicativo feito sob medida para você!</h1>
                        <p className="w-[600px] text-center font-extralight text-lg">Garantia de Qualidade: Nosso compromisso com a excelência garante que seu aplicativo seja testado minuciosamente em todas as etapas do desenvolvimento, garantindo que ele seja robusto, confiável e livre de bugs.</p>
                        {/* <a href="#" className="bg-blue-400 text-white flex justify-center flex-row items-center h-50 w-80 m-4 rounded-md shadow-md p-5 animate-bounce">
                            <DevicePhoneMobileIcon className="h-6 w-6 mr-1" />
                            <h1>Desenvolvimento de Aplicativo</h1>
                        </a> */}
                    </div>
                    <div className="ui-img-group w-1/2 p-2 flex justify-center items-center p-4">
                        <Image className="ui_device" height={200} width={200} src={ui_device} alt="ui device" />
                        <Image className="ui_device_03" height={200} width={200} src={ui_device_03} alt="ui device" />
                    </div>
                </div>
            </section>
        </>
    )
}