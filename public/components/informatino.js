import React, { } from "react";
import { Roboto } from "next/font/google";
// import "../components/Home/home.css";

const roboto = Roboto({
    weight: "900",
    subsets: ['latin']
})

export default function Information() {
    return (
        <>
            {/* Quem eu sou */}
            <div className="w-[500px] p-5 m-2">
                <div className="text-5xl text-zinc-500 m-4">
                    <h1 className={roboto.className}>Ola!</h1>
                    <div>Rafael Silva</div>
                </div>
                <p className="m-2">Desenvolvedor Full Stack / Especialista em Desenvolvimento Web</p>
                <p className="m-2">
                    Minha Missão:
                    Transformar conceitos em códigos, criando experiências digitais incríveis.</p>
                <p className="m-2">
                    Especializado em:
                    Desenvolvimento Full Stack: Domínio de tecnologias front-end e back-end para criar soluções completas.
                    Design e Usabilidade: Criar interfaces intuitivas e atraentes para usuários.</p>
                <p className="m-2">
                    Entre em contato e vamos construir algo incrível juntos!
                </p>
                <a className="bg-green-500 text-white rounded-xl p-5" href="#">Nossos Planos</a>
            </div>
        </>
    )
}