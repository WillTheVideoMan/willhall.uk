import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import Header from "./Header"

const App = styled.main`
  margin: 0 var(--main-spacing-major);
`
const Link = styled.p`
  text-decoration: underline;
  cursor: pointer;
  margin-left: 0.8em;
`
const Footer = styled.footer`
  display: flex;
  font-family: var(--heading-font-family);
  font-size: var(--small-body-size);
`

export default ({ children }) => (
  <App>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=Playfair+Display:wght@400;600;900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <Header />
    {children}
    <Footer>
      <p>© Will Hall 2020</p>
      <Link
        onClick={() => window.Metomic("ConsentManager:show")}
        data-testid="cookie-manager"
      >
        Manage Cookies
      </Link>
    </Footer>
  </App>
)
