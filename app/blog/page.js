"use client"
import React, { } from "react";
import emailjs from "@emailjs/browser";



export default function Page() {

    const serviceID = 'service_s6ui355';
    const publicKey = 'LYabxatcKlcGRbTxQ';
    const templateId = 'template_mwe5jjs';

    emailjs.init(publicKey);

    const sendEmail = () => {
        // e.preventDefault();
        emailjs.send(serviceID, templateId, {
            to_name: 'Rafael Silva Gomes',
            from_name: 'Rafael Silva Dev',
            to_email: 'rafaelsilvagomesreal@gmail.com',
            message: 'Ola tudo bem esse é uma mensagens de teste'
        }).then((result) => {
            console.log(`sucesso ================================= `)
            console.log(result)
            console.log(`Error ====================================`)
        }, (error) => {
            console.log(`Error ====================================`)
            console.log(error)
            console.log(`Error ====================================`)
        })
    }
    sendEmail()

    return (
        <>
            <section className="flex flex-row items-center justify-center">
                <h1 className="bg-orange-300 rounded-md text-white p-5">Email foi enviado com sucesso</h1>
            </section>
        </>
    )
}