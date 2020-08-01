import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostCard from "../components/PostCard"

export default () => (
  <Layout>
    <SEO title="Oops" />
    <PostCard
      title="404: There is nothing here."
      excerpt="It looks like there is nothing here."
      published_at={new Date(2147472000000)}
      reading_time={-1}
      slug={""}
    />
  </Layout>
)
