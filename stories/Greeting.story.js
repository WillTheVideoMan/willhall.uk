import React from "react"
import Greeting from "../src/components/Greeting"
import { withKnobs, text } from "@storybook/addon-knobs"

export default {
  component: Greeting,
  title: "Greeting",
  decorators: [withKnobs],
}

export const defaultGreeting = () => (
  <Greeting
    headline={text("Headline", "willhall.uk")}
    message={text("Message", "Under construction and coming soon.")}
  />
)

export const noMessage = () => (
  <Greeting headline={text("Headline", "willhall.uk")} message={""} />
)
