"use client"
import Link from "next/link";
import { use, useState } from "react";

import "./home.css";
import { CodeBracketIcon, Bars4Icon, HomeIcon, GlobeAmericasIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";

export default function Inicial() {

    const [showNav, setShowNav] = useState(false);
    const toggleNav = () => {
        setShowNav(!showNav)
    }


    return (
        <header className="bg-purple-700">
            {/* menu */}
            <div className="flex">
                <div id="title-menu" className="flex text-white font-semibold items-center justify-center w-1/5">
                    Rafael Silva<CodeBracketIcon className="w-5 h-5 m-1" />
                </div>
                <nav className="w-4/5">
                    <ul id="nav-links" className={`inline-flex float-right flex-wrap ${showNav ? 'show' : ''}`}>
                        {/* <li><link href="">fasd</link></li> */}
                        <li><Link className="flex flex-row items-center justify-center p-4 m-2 text-white" href="/"><HomeIcon className="h-4 w-4 mr-1" /> Home</Link></li>
                        {/* <li><Link className="flex flex-row items-center justify-center p-4 m-2 text-zinc-500" href="/orcamento"><Cog6ToothIcon className="h-4 w-4 mr-1" />Orçamento</Link></li> */}
                        <li><Link className="flex flex-row items-center justify-center p-4 m-2 text-white" href="/contato" ><GlobeAmericasIcon className="h-4 w-4 mr-1" />Contato</Link></li>
                        {/* <li><Link className="flex flex-row items-center justify-center p-4 m-2 text-zinc-500" href="/blog"><ChatBubbleLeftEllipsisIcon className="h-4 w-4 mr-1" />Blog</Link></li> */}
                        {/* <li><Link className="flex flex-row items-center justify-center p-4 m-2 bg-green-400 rounded-md shadow-md text-white" href=""><CurrencyDollarIcon className="h-4 w-4" />Vamos Trocar Ideias!</Link></li> */}
                    </ul>

                </nav>
                <div id="burger-menu" onClick={toggleNav} className="flex flex-row items-center align-middle justify-center p-4 m-2 text-white"><Bars4Icon className="h-4 w-4 mr-1" /></div>
            </div>
        </header>
    )
}