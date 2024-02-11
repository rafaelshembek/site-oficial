import React from "react";

const ShowCode = ({ text }) => {
    return (
        <pre className="bg-black text-white p-5"><code>{text}</code></pre>
    )
}

export default ShowCode;