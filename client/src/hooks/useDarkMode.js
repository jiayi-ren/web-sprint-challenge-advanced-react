import { useEffect, useState } from "react";

export const useDarkMode = initialValue =>{
    const [darkMode, setDarkMode] = useState(initialValue)

    useEffect(()=>{
        const body = document.querySelector("body")
        if(darkMode){
            body.classList.add("dark-mode")
        }
        if(!darkMode){
            body.classList.remove("dark-mode")
        }
    },[darkMode])

    return [darkMode, setDarkMode];
}