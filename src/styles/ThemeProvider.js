import React, { useState, useEffect, createContext } from "react"
import { COLOURS } from "./constants"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [colourScheme, directSetColourScheme] = useState(undefined)

  useEffect(() => {
    const root = window.document.documentElement

    const initialColourScheme = root.style.getPropertyValue(
      "--initial-colour-scheme"
    )

    directSetColourScheme(initialColourScheme)
  }, [])

  const setColourScheme = newScheme => {
    directSetColourScheme(newScheme)

    localStorage.setItem("colour-scheme", newScheme)

    const root = document.documentElement

    Object.entries(COLOURS).forEach(([colourKey, colourValue]) => {
      const cssVarName = "--colour-" + colourKey
      root.style.setProperty(cssVarName, colourValue[newScheme])
    })
  }

  return (
    <ThemeContext.Provider value={{ colourScheme, setColourScheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
