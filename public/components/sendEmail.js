import React, { } from "react";
import emailjs from "@emailjs/browser";

export default function Email({ nome, email, tel }) {
    const serviceID = 'service_s6ui355';
    const publicKey = 'LYabxatcKlcGRbTxQ';
    const templateId = 'template_mwe5jjs';

    emailjs.init(publicKey);

    const sendEmail = () => {
        // e.preventDefault();
        emailjs.send(serviceID, templateId, {
            to_name: nome,
            from_name: nome,
            to_email: 'rafaelsilvagomesreal@gmail.com',
            message: `Meu nome é ${nome} estou entrando em contato para solicitar um projeto, meu email é: ${email} caso queira entra em contato meu telefone : ${tel}`
        })
    }
    sendEmail()
}