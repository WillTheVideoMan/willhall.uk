import React from "react"
import DottedWrapper from "../src/components/DottedWrapper"
import { withKnobs, number } from "@storybook/addon-knobs"
import styled from "styled-components"

const Text = styled.div`
  color: ${props => props.theme.colours.primary};
`

export default {
  component: DottedWrapper,
  title: "DottedWrapper",
  decorators: [withKnobs],
}

export const defaultDottedWrapper = () => (
  <DottedWrapper length={number("length", 10)} spacing={number("spacing", 10)}>
    <Text>Here is some text with a dotted border!</Text>
  </DottedWrapper>
)
