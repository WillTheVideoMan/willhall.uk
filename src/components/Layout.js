import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"

const App = styled.main`
  margin-left: 1.5em;
  margin-right: 1.5em;
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
        href="https://fonts.googleapis.com/css2?family=Lora:ital@0;1&family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=IBM+Plex+Mono&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    {children}
    <Footer>
      <p>© Will Hall 2020</p>
      <Link onClick={() => window.Metomic("ConsentManager:show")}>
        Manage Cookies
      </Link>
    </Footer>
  </App>
)
