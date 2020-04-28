import React from "react"
import Layout from "../components/Layout"
import Greeting from "../components/Greeting"
import SEO from "../components/SEO"

export default () => (
  <Layout>
    <SEO title="Oops" />
    <Greeting headline="Oops." message="Nothing to see here." />
  </Layout>
)
