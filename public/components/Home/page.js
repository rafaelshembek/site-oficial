"use client"
import Link from "next/link";

import "./home.css";
import { CodeBracketIcon, CurrencyDollarIcon, HomeIcon, GlobeAmericasIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";

export default function Inicial() {


    return (
        <header className="bg-purple-700">
            {/* menu */}
            <div className="flex">
                <div className="flex text-white font-semibold items-center justify-center w-1/5">
                    Rafael Silva<CodeBracketIcon className="w-5 h-5 m-1" />
                </div>
                <nav className="w-4/5">
                    <ul className="inline-flex float-right flex-wrap">
                        {/* <li><link href="">fasd</link></li> */}
                        <li><Link className="flex flex-row items-center justify-center p-4 m-2 text-white" href="/"><HomeIcon className="h-4 w-4 mr-1" /> Home</Link></li>
                        {/* <li><Link className="flex flex-row items-center justify-center p-4 m-2 text-zinc-500" href="/orcamento"><Cog6ToothIcon className="h-4 w-4 mr-1" />Orçamento</Link></li> */}
                        <li><Link className="flex flex-row items-center justify-center p-4 m-2 text-white" href="/contato" ><GlobeAmericasIcon className="h-4 w-4 mr-1" />Contato</Link></li>
                        {/* <li><Link className="flex flex-row items-center justify-center p-4 m-2 text-zinc-500" href="/blog"><ChatBubbleLeftEllipsisIcon className="h-4 w-4 mr-1" />Blog</Link></li> */}
                        {/* <li><Link className="flex flex-row items-center justify-center p-4 m-2 bg-green-400 rounded-md shadow-md text-white" href=""><CurrencyDollarIcon className="h-4 w-4" />Vamos Trocar Ideias!</Link></li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}