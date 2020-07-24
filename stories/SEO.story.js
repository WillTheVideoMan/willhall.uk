import React from "react"
import SEO from "../src/components/SEO"
import { withKnobs, text } from "@storybook/addon-knobs"

export default {
  component: SEO,
  title: "Layout / SEO",
  decorators: [withKnobs],
}

export const defaultSEO = () => <SEO title="Welcome" route="/" />
