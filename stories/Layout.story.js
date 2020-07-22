import React from "react"
import Layout from "../src/components/Layout"
import { withKnobs } from "@storybook/addon-knobs"

export default {
  component: Layout,
  title: "Layout",
  decorators: [withKnobs],
}

export const defaultLayout = () => (
  <Layout>
    <h1>Content Goes Here</h1>
  </Layout>
)
