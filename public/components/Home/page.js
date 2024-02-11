"use client"
import Link from "next/link";
import { use, useRef, useState } from "react";

import "./home.css";
import { CodeBracketIcon, Bars4Icon, HomeIcon, GlobeAmericasIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Inicial() {

    const [showNav, setShowNav] = useState(false);
    const [doneLink, setDoneLink] = useState(false)

    const toggleNav = () => {
        setShowNav(!showNav)

    }

    return (
        <>
            <header className="bg-white">
                {/* menu */}
                <div className="flex">
                    <div id="title-menu" className="flex text-zinc-600 font-semibold items-center justify-center w-1/5">
                        Rafael Silva<CodeBracketIcon className="w-5 h-5 m-1" />
                        <div id="sucess" className="bg-green-400 h-2 ml-2 w-2 rounded-full"></div>
                    </div>
                    <nav className="w-4/5">
                        <ul id="nav-links" className={`inline-flex float-right flex-wrap ${showNav ? 'show' : ''}`}>
                            <li><Link id="menu-link-home" className="flex flex-row items-center justify-center p-4 m-2 text-zinc-600" href="/"><HomeIcon id="icon-home" className="h-4 w-4 mr-1" /> Home</Link></li>
                            <li><Link id="menu-link-contact" className="flex flex-row items-center justify-center p-4 m-2 text-zinc-600" href="/contato" ><PhoneIcon id="icon-contact" className="h-4 w-4 mr-1" />Contato</Link></li>
                        </ul>
                    </nav>
                    <div id="burger-menu" onClick={toggleNav} className="flex flex-row items-center align-middle justify-center p-4 m-2 text-zinc-600"><Bars4Icon className="h-3 w-3 mr-1" /></div>
                </div>
            </header>
        </>
    )
}