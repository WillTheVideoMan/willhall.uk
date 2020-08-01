import React from "react"

import { ThemeProvider } from "./src/styles/ThemeProvider"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
