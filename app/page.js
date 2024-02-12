"use client"
import Image from "next/image";
import { PuzzlePieceIcon, GlobeAmericasIcon, DevicePhoneMobileIcon, InformationCircleIcon, BellIcon } from "@heroicons/react/24/solid";
import { Roboto } from "next/font/google";
import reactnative from "../public/components/Home/ReactNative.svg";
import unity from "../public/components/Home/unity.svg";
import next from "../public/components/Home/nextjs.svg";
import dev_foco from "../public/components/Home/dev_focus.svg";
import Tooltip from "../public/components/Tooltip";
import { useState, useEffect } from "react";

import TypingEffect from "../public/components/TextApresentacao";

const roboto = Roboto({
  weight: ["900"],
  display: "fallback",
  style: 'normal',
  subsets: ['latin']
})

export default function Home() {

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
        <Image id="ImageBanner" className="ml-[-50em]" style={{ position: "absolute" }} src={dev_foco} width={500} height={500} alt="garoto dev focado" />
        <div id="banner-infor" className="w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center m-2">
            <h1 id="titleRafaelSilva" className="font-extrabold text-2xl text-slate-600 text-center"> Rafael Silva</h1>
            {/* <div className="h-10 w-10 rounded-full shadow-md bg-indigo-300 ml-3"></div> */}
          </div>
          <p className="text-lg font-extralight">
            Desenvolvimento Mobile & Web
            {/* <TypingEffect text='Rafael Silva Gomes' typingSpeed={400} /> */}
          </p>
          <div className="p-9 text-2xl text-center flex flex-row items-center justify-center text-slate-500">
            {/* <h1 id="h1_info" className={roboto.className}>Transforme sua visão em realidade digital: desenvolvimento web feito sob medida para o sucesso do seu negócio</h1> */}
            <TypingEffect id="h1_info" text='Transforme sua visão em realidade digital: desenvolvimento web feito sob medida para o sucesso do seu negócio' typingSpeed={100} />
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
      <section className="p-4 h-full flex flex-row flex-wrap items-center justify-center">
        <a href="/Vitrine" className="bg-green-400 flex flex-row justify-center items-center text-white h-50 m-4 w-80 rounded-md shadow-md p-5 animate-bounce">
          <Tooltip Icon_Name={BellIcon} styles_css={{ display: showInfor, position: "absolute", zIndex: 1, left: "-1em", top: "-3em", transition: "ease-in 0.2s", boxShadow: "1px 1px 5em 3px #49DB9C" }} tooltip_name={"Temos novidades"} Style_elemento_icon={"h-5 w-5 mr-2"} Style_elemento_two={"flex items-center"} Style_elemento_one={"bg-green-300 text-green-600 p-4 rounded-md"} />
          <GlobeAmericasIcon className="h-6 w-6 mr-1" />
          <h1>Desenvolvimento Web</h1>
        </a>
        <a href="#" className="bg-blue-400 text-white flex justify-center flex-row items-center h-50 w-80 m-4 rounded-md shadow-md p-5 animate-bounce">
          <DevicePhoneMobileIcon className="h-6 w-6 mr-1" />
          <h1>Desenvolvimento de Aplicativo</h1>
        </a>

        <a href="#" style={{ cursor: "not-allowed", backgroundColor: "#999" }} className="justify-center flex flex-row items-center h-50 text-white w-80 m-4 rounded-md shadow-md p-5 animate-bounce">
          <Tooltip styles_css={{ position: "absolute", zIndex: 1, left: "-1em", top: "-3em", transition: "ease-in 0.2s" }} Style_elemento_one={"bg-orange-200 text-orange-600 p-4 rounded-md"} Style_elemento_two={"flex items-center"} tooltip_name={"Chegando Logo!"} Icon_Name={InformationCircleIcon} Style_elemento_icon={"h-5 w-5 mr-2"} />
          <PuzzlePieceIcon className="h-6 mr-5 w-6" />
          <h2>Desenvolvimento de Jogos</h2>
        </a>
      </section>
    </>
  )
}
