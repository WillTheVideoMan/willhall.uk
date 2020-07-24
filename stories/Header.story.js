import React from "react"
import Header from "../src/components/Header"
import { withKnobs, text, boolean } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

export default {
  component: Header,
  title: "Layout / Header",
  decorators: [withKnobs],
}

export const defaultHeader = () => (
  <Header
    currentRoute={text("active slug", "/")}
    isDark={boolean("is dark", false)}
    handleClick={action("Toggle Theme")}
  />
)

export const withTag = () => (
  <Header
    currentRoute={text("active slug", "/")}
    isDark={boolean("is dark", false)}
    handleClick={action("Toggle Theme")}
    tag={text("tag", "code")}
  />
)

export const darkThemeIcon = () => (
  <Header
    currentRoute={text("active slug", "/")}
    isDark={boolean("is dark", true)}
    handleClick={action("Toggle Theme")}
  />
)
