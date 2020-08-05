import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostCard from "../components/PostCard"

export default () => (
  <Layout>
    <SEO
      meta={{
        title: "404",
        path: "/404",
        description: "404: There is nothing to see here.",
      }}
    />
    <PostCard
      title="404: There is nothing here."
      excerpt="It looks like there is nothing here."
      published_at={new Date(2147472000000)}
      reading_time={-1}
      slug={""}
    />
  </Layout>
)
