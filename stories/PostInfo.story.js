import React from "react"
import PostInfo from "../src/components/PostInfo"
import {
  withKnobs,
  text,
  number,
  boolean,
  object,
} from "@storybook/addon-knobs"

export default {
  component: PostInfo,
  title: "Post / PostInfo",
  decorators: [withKnobs],
}

export const defaultPostInfo = () => (
  <PostInfo
    title={text("title", "Post title")}
    excerpt={text("excerpt", "This post is pretty cool and also epic.")}
    published_at={new Date(0)}
    reading_time={number("reading time", 3)}
    featured={boolean("featured", false)}
    primary_tag={object("primary tag", { name: "Tag", slug: "tag" })}
  />
)
