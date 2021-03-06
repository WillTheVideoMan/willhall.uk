import React from "react"
import { action } from "@storybook/addon-actions"
import { addDecorator } from "@storybook/react"
import "@storybook/addon-console"
import { withA11y } from "@storybook/addon-a11y"
import Normalise from "../src/styles/Normalise"
import { createGlobalStyle } from "styled-components"
import { COLOURS } from "../src/styles/constants"
import { ThemeProvider } from "../src/styles/ThemeProvider"

const CSSVars = createGlobalStyle`
:root{
  --colour-primary: ${COLOURS.primary.light};
  --colour-accent: ${COLOURS.accent.light};
  --colour-background: ${COLOURS.background.light};
}
`

// Add A11y accessibility to all stories.
addDecorator(withA11y)

// Include global styles with each story.
addDecorator(s => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,600;0,900;1,400&display=swap"
      rel="stylesheet"
    />
    <Normalise />
    <CSSVars />
    <ThemeProvider>{s()}</ThemeProvider>
  </>
))

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash, you need to set it as well.
global.__PATH_PREFIX__ = ""

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
