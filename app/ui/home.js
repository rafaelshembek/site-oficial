'use client'
import React from "react";
import Image from "next/image";
import { PuzzlePieceIcon, GlobeAmericasIcon, InformationCircleIcon, BellIcon } from "@heroicons/react/24/solid";
import { Roboto } from "next/font/google";
import reactnative from "../../public/components/Home/ReactNative.svg";
import unity from "../../public/components/Home/unity.svg";
import next from "../../public/components/Home/nextjs.svg";
import dev_foco from "../../public/components/Home/dev_focus2.svg";
import Tooltip from "../../public/components/Tooltip";
import { useState, useEffect } from "react";

import TypingEffect from "../../public/components/TextApresentacao";

const roboto = Roboto({
    weight: ["900"],
    display: "fallback",
    style: 'normal',
    subsets: ['latin']
})


export default function UseHome() {

    const [showInfor, setShowInform] = useState('none');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 12) {
                setShowInform('none')
            } else {
                setShowInform('flex')
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])


    return (
        <>
            <div className="flex h-[500px] flex-col items-center justify-center">
                <div className="flex w-full flex-wrap flex-row justify-center items-center">
                    <div className="w-1/5">
                        <Image id="ImageBanner" src={dev_foco} width={300} height={300} alt="garoto dev focado" />
                    </div>
                    <div id="banner-infor" className="w-1/2 h-full flex flex-col items-center justify-center">
                        <div className="flex flex-row items-center justify-center m-2">
                            <h1 id="titleRafaelSilva" className="font-extrabold text-2xl text-slate-500 text-center"> Rafael Silva</h1>
                            {/* <div className="h-10 w-10 rounded-full shadow-md bg-indigo-300 ml-3"></div> */}
                        </div>
                        <p className="text-lg font-extralight">
                            Desenvolvimento Mobile & Web
                            {/* <TypingEffect text='Rafael Silva Gomes' typingSpeed={400} /> */}
                        </p>
                        <div className="p-9 text-2xl text-center flex flex-row items-center justify-center text-slate-500">
                            {/* <h1 id="h1_info" className={roboto.className}>Transforme sua visão em realidade digital: desenvolvimento web feito sob medida para o sucesso do seu negócio</h1> */}
                            <TypingEffect id="h1_info" text='🚀 Transforme sua visão em realidade digital: desenvolvimento web feito sob medida para o sucesso do seu negócio' typingSpeed={100} />
                        </div>
                    </div>
                </div>
                <div id="imgs_tecnolog" className="flex flex-row items-center justify-center">
                    <div className="m-5 flex flex-col items-center text-zinc-500 text-center justify-center">
                        <Image id="img_tecnolog" src={reactnative} width={30} height={30} alt="Logo React Native" />
                    </div>
                    <div className="m-5 flex flex-col items-center text-zinc-500 text-center justify-center">
                        <Image id="img_tecnolog" src={next} width={30} height={30} alt="Logo React Native" />
                    </div>
                    <div className="m-5 flex flex-col items-center text-zinc-500 text-center justify-center">
                        <Image id="img_tecnolog" src={unity} width={30} height={30} alt="Logo React Native" />
                    </div>
                </div>
            </div>
            {/* <section className="p-4 h-full flex flex-row flex-wrap items-center justify-center">

                
            </section> */}
        </>
    )
}