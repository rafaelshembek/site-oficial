"use client"
import { EnvelopeIcon, ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import { Roboto_Flex } from "next/font/google";
import Image from "next/image";
import contactImageSvg from "../../public/components/Home/undraw_contract_re_ves9.svg";
import Email from "../../public/components/sendEmail";

const roboto = Roboto_Flex({
    weight: ["400"],
    subsets: ["latin"]
})

export default function Page() {

    const handleSubmit = (event) => {

        event.preventDefault();

        Email({
            nome: event.target.nome.value,
            email: event.target.email.value,
            tel: event.target.tel.value
        })

        event.target.nome.value = "";
        event.target.email.value = "";
        event.target.tel.value = "";

    }
    return (
        <>
            <section id="page-contact" className="flex md:flex-row m-7">
                <div className="w-full md:w-1/2 mb-4 flex justify-center items-center flex-col md:order-1">
                    <Image id="img-page-contact" src={contactImageSvg} width={300} height={300} alt="Informação de Contato" />
                </div>
                <div className="w-full md:order-2 md:w-1/2">
                    <div className="m-5 flex flex-row items-center text-zinc-600 text-3xl justify-start">
                        <ChatBubbleBottomCenterIcon className="w-6 h-6 mr-3" />
                        <h1 className={roboto.className}>Formulario de Contato</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="m-3 p-5 text-zinc-600 text-sm flex flex-col">
                            <label className={roboto.className}>Nome Completo</label>
                            <input className="p-2 rounded-md border outline-none" placeholder="Seu Nome Completo" required type="text" name="nome" />
                        </div>
                        <div className="m-3 p-5 text-zinc-600 text-sm flex flex-col">
                            <label className={roboto.className}>Email</label>
                            <input className="p-2 rounded-md border outline-none" placeholder="Seu Email" required type="email" name="email" />
                        </div>
                        <div className="m-3 p-5 text-zinc-600 text-sm flex flex-col">
                            <label className={roboto.className}>Telefone</label>
                            <input className="p-2 rounded-md border outline-none" placeholder="Seu Telefone" required type="tel" name="tel" />
                        </div>
                        <button className="bg-green-500 rounded-md ml-5 text-white p-2 flex flex-row text-xs items-center justify-center shadow-md" type="submit"><EnvelopeIcon className="h-4 w-4 mr-2" />Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}