import React from "react"
import Header from "../src/components/Header"
import { withKnobs, object, text } from "@storybook/addon-knobs"

export default {
  component: Header,
  title: "Layout / Header",
  decorators: [withKnobs],
}

export const defaultHeader = () => (
  <Header
    links={object("links", [
      {
        title: "writing",
        slug: "",
        isActive: true,
      },
      {
        title: "about",
        slug: "about",
        isActive: false,
      },
    ])}
  />
)

export const withTag = () => (
  <Header
    links={object("links", [
      {
        title: "writing",
        slug: "",
        isActive: true,
      },
      {
        title: "about",
        slug: "about",
        isActive: false,
      },
    ])}
    tag={text("tag", "code")}
  />
)

export const wrappingLinks = () => (
  <Header
    links={object("links", [
      {
        title: "writing",
        slug: "",
        isActive: true,
      },
      {
        title: "about",
        slug: "about",
        isActive: false,
      },
      {
        title: "projects",
        slug: "projects",
        isActive: false,
      },
      {
        title: "news",
        slug: "news",
        isActive: false,
      },
      {
        title: "more",
        slug: "fun",
        isActive: false,
      },
    ])}
  />
)
