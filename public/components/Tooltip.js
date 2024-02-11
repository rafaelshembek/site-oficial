import React, { Component } from "react";
import PropsTypes from "prop-types";

/**
 *
 * @component
 * @example
 *
 * @param {string} [Icon_Name='div'] - Tag Icon é necessária.
 * @param {string} styles_css - Stylo do component em css caso necessitar.
 * @param {style} tooltip_name - nome texto do component <exemplo>nome texto</exemplo>.
 * @param {string} Style_elemento_one - Stylo do component em Tawilwindcss.
 * @param {style} Style_elemento_two - Stylo do texto do component
 * @param {style} Style_elemento_icon - Stylo do icon do component
 * @returns {JSX.Element} Um elemento React.
 */



function Tooltip(props) {
    const { styles_css, tooltip_name, Icon_Name, Style_elemento_one, Style_elemento_two, Style_elemento_icon } = props;
    const Element_name = Icon_Name || console.log("Propriedade Icon_Name ")
    const Element_css = styles_css || null
    const Element_class_name_one = Style_elemento_one || null
    const Element_class_name_two = Style_elemento_two || null
    const Element_class_name_three = Style_elemento_icon || null
    return (
        <div style={Element_css} className={Element_class_name_one}>
            <p className={Element_class_name_two} ><Element_name className={Element_class_name_three} /> {tooltip_name}</p>
        </div>

    )
}

Tooltip.propsTypes = {
    Icon_Name: PropsTypes.string.isRequired,
    // tooltip_name, Icon_Name, Style_elemento_one, Style_elemento_two, Style_elemento_icon
}

export default Tooltip;