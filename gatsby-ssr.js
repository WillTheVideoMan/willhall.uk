import React from "react"
import { COLOURS } from "./src/styles/constants"
import { ThemeProvider } from "./src/styles/ThemeProvider"

const AssertColourScheme = () => {
  const setCSSVarsOnClient = `
    
    (function(){

        function getInitialColourScheme() {

            const persistedColourSchemePreference = window.localStorage.getItem('colour-scheme');

            if(typeof persistedColourSchemePreference === 'string') {
                return persistedColourSchemePreference;
            }

            const mediaQueryColourSchemePreference = window.matchMedia('(prefers-color-scheme: dark)');

            if(typeof mediaQueryColourSchemePreference.matches === 'boolean') {
                return mediaQueryColourSchemePreference.matches ? 'dark' : 'light'; 
            }

            return 'light';
        }

        const colourScheme = getInitialColourScheme();

        const root = document.documentElement;

        Object.entries(${JSON.stringify(
          COLOURS
        )}).forEach(([colourKey, colourValue]) => {
            const cssVarName = '--colour-' + colourKey;
            root.style.setProperty(cssVarName, colourValue[colourScheme])
        })

        root.style.setProperty('--initial-colour-scheme', colourScheme);

    })()
    
    `

  return <script dangerouslySetInnerHTML={{ __html: setCSSVarsOnClient }} />
}

export const onRenderBody = ({ setPreBodyComponents }) =>
  setPreBodyComponents(
    <AssertColourScheme key={"script_assert_colour_scheme"} />
  )

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
