import React,{useState} from 'react'
import themeContext from '../contexts/themeContext'
const ThemeProvider = ({ children }) => {
    const [isDark, setTheme] = useState(true);
    return (
        <>
            <themeContext.Provider value={{ isDark, setTheme }}>
                {children}
            </themeContext.Provider>
        </>
    )
}

export default ThemeProvider