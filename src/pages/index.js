import React from "react"
import Layout from "../components/Layout"
import Greeting from "../components/Greeting"
import SEO from "../components/SEO"

export default () => (
  <Layout>
    <SEO title="Welcome" route="/" />
    <Greeting
      headline="willhall.uk"
      message="Under construction and coming soon."
    />
  </Layout>
)
