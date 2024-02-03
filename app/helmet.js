import React from "react";
import { Helmet } from "react-helmet";

export default function Head() {
    return (
        <Helmet>
            {/* <!-- Google tag (gtag.js) --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-KYFZWWZ3EC"></script>
            <script>
                {
                    `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
   
               gtag('config', 'G-KYFZWWZ3EC');
                `
                }
            </script>
        </Helmet>
    )
}