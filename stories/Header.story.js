import React from "react"
import Header from "../src/components/Header"
import { withKnobs, object, text } from "@storybook/addon-knobs"

export default {
  component: Header,
  title: "Layout / Header",
  decorators: [withKnobs],
}

export const defaultHeader = () => (
  <Header currentRoute={text("active slug", "/")} />
)

export const withTag = () => (
  <Header currentRoute={text("active slug", "/")} tag={text("tag", "code")} />
)
