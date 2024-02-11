import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, typingSpeed, id }) => {
    const [displayText, setDisplayText] = useState('');
    // const [index, setIndex] = useState(0);

    useEffect(() => {
        let currentIndex = 0;
        let timeout;
        const type = () => {
            setDisplayText(text.substring(0, currentIndex));

            if (currentIndex < text.length) {
                timeout = setTimeout(() => {
                    currentIndex++;
                    type();
                }, typingSpeed);
            } else {
                clearTimeout(timeout);
                setTimeout(() => {
                    currentIndex = 0;
                    type();
                }, 2000);
            }
        }
        type();
        // let currentIndex = 0;
        // let timeout;
        // const interval = setTimeout(() => {
        //     if (currentIndex <= text.length) {
        //         setDisplayText(text.substring(0, currentIndex));
        //         currentIndex++;
        //     } else {
        //         clearTimeout(interval);
        //         type()
        //     }
        // }, typingSpeed);
        // type();
        return () => clearTimeout(timeout);
    }, [text, typingSpeed]);


    return (
        <div className="typing-text">
            {displayText}

            <span id={id} className="blink-cursor">|</span>
        </div>
    )

}

export default TypingEffect;