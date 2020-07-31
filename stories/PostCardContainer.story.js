import React from "react"
import PostCardContainer from "../src/components/PostCardContainer"
import {
  withKnobs,
  text,
  number,
  boolean,
  object,
} from "@storybook/addon-knobs"

export default {
  component: PostCardContainer,
  title: "Post / PostCardContainer",
  decorators: [withKnobs],
}

const postcards = [
  {
    title: "Post Title",
    excerpt: "This post is pretty cool and also epic.",
    published_at: new Date(0),
    reading_time: 3,
    featured: true,
    primary_tag: { name: "Tag", slug: "tag" },
    slug: "post-title",
  },
  {
    title: "Post Title 2",
    excerpt: "This post is pretty cool and also epic.",
    published_at: new Date(0),
    reading_time: 3,
    featured: false,
    primary_tag: { name: "Tag", slug: "tag" },
    slug: "post-title",
  },
  {
    title: "Post Title 3",
    excerpt: "This post is pretty cool and also epic.",
    published_at: new Date(0),
    reading_time: 3,
    featured: false,
    primary_tag: { name: "Tag", slug: "tag" },
    slug: "post-title",
  },
]

export const defaultPostCardContainer = () => (
  <PostCardContainer
    title={text("Title", "Post Cards Yo!")}
    postcards={object("Post Cards", postcards)}
  />
)
