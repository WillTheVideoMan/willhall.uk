import React from "react"
import InlineCode from "../src/components/InlineCode"
import { withKnobs } from "@storybook/addon-knobs"

export default {
  component: InlineCode,
  title: "Article / Inline Code",
  decorators: [withKnobs],
}

export const defaultInlineCode = () => (
  <InlineCode>{"import { Greeting } from './Greeting';"}</InlineCode>
)
