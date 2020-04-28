import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const App = styled.div`
  margin-left: 1.2em;
`
const Link = styled.p`
  text-decoration: underline;
  cursor: pointer;
  margin-left: 0.8em;
`
const Footer = styled.footer`
  display: flex;
  font-family: Playfair Display;
  font-size: 0.8em;
`

export default ({ children }) => (
  <App>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:400,600,900i&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    {children}
    <Footer>
      <p>© Will Hall 2020</p>
      <Link onClick={() => window.Metomic("ConsentManager:show")}>
        Manage Cookies
      </Link>
    </Footer>
  </App>
)
