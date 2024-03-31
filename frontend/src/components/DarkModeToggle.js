import React, { useState, createContext } from 'react'
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);
function DarkModeToggle() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div className="App" id={theme}>
                    <div className="switch">
                        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                    </div>
                </div>
            </ThemeContext.Provider>
        </>
    )
}

export default DarkModeToggle