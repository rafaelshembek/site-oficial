import Image from "next/image";
import { PuzzlePieceIcon, GlobeAmericasIcon, DevicePhoneMobileIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { Roboto } from "next/font/google";
import reactnative from "../public/components/Home/ReactNative.svg";
import unity from "../public/components/Home/unity.svg";
import next from "../public/components/Home/nextjs.svg";
import dev_foco from "../public/components/Home/dev_focus.svg";

const roboto = Roboto({
  weight: ["900"],
  display: "fallback",
  style: 'normal',
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <div className="flex h-[500px] flex-col items-center justify-center">
        <Image className="ml-[-50em]" style={{ position: "absolute" }} src={dev_foco} width={500} height={500} alt="garota dev focada" />
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center m-2">
            <h1 className="font-extrabold text-2xl text-slate-600 text-center">Rafael Silva</h1>
            {/* <div className="h-10 w-10 rounded-full shadow-md bg-indigo-300 ml-3"></div> */}
          </div>
          <p className="text-lg font-extralight">Desenvolvimento Mobile & Web</p>
          <div className="p-9 text-2xl text-center flex flex-row items-center justify-center text-slate-500">
            <h1 className={roboto.className}>Transforme sua visão em realidade digital: desenvolvimento web feito sob medida para o sucesso do seu negócio</h1>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="m-5 flex flex-col items-center text-zinc-500 text-center justify-center">
            <Image src={reactnative} width={30} height={30} alt="Logo React Native" />
          </div>
          <div className="m-5 flex flex-col items-center text-zinc-500 text-center justify-center">
            <Image src={next} width={30} height={30} alt="Logo React Native" />
          </div>
          <div className="m-5 flex flex-col items-center text-zinc-500 text-center justify-center">
            <Image src={unity} width={30} height={30} alt="Logo React Native" />
          </div>
        </div>
      </div>
      <section className="bg-white p-4 h-full flex flex-row flex-wrap items-center justify-center">
        <a href="#" className="bg-purple-400 flex flex-row justify-center items-center text-white h-50 m-4 w-80 rounded-md shadow-md p-5 animate-bounce">
          <GlobeAmericasIcon className="h-6 w-6 mr-1" />
          <h1>Desenvolvimento Web</h1>
        </a>
        <a href="#" className="bg-blue-400 text-white flex justify-center flex-row items-center h-50 w-80 m-4 rounded-md shadow-md p-5 animate-bounce">
          <DevicePhoneMobileIcon className="h-6 w-6 mr-1" />
          <h1>Desenvolvimento de Aplicativo</h1>
        </a>

        <a href="/" style={{ cursor: "not-allowed", backgroundColor: "#999" }} className="justify-center flex flex-row items-center h-50 text-white w-80 m-4 rounded-md shadow-md p-5 animate-bounce">
          <p className="bg-orange-500 mb-14 mr-40 rounded-md shadow-md flex flex-row items-center- justify-center" style={{ width: "200px", position: "absolute", padding: 5 }}><InformationCircleIcon className="h-5 w-5" />Chegando Logo!</p>
          <PuzzlePieceIcon className="h-6 mr-5 w-6" />
          <h2>Desenvolvimento de Jogos</h2>
        </a>
      </section>
    </>
  )
}