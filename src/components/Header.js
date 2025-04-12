import React from "react";

// Header recieves a prop: OnDarkModeClick - a function passed from App
function Header({onDarkModeClick, isDarkMode}) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {/* {toggle the base on current mode} */}
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header