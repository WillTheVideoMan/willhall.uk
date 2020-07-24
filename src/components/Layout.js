import React from "react"
import { Helmet } from "react-helmet"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import themes from "../styles/themes"
import Normalise from "../styles/Normalise"
import Header from "./Header"

const App = styled.main`
  margin: 0 ${props => props.theme.spacing.main.major};
`
const Link = styled.p`
  text-decoration: underline;
  cursor: pointer;
  margin-left: 0.8em;
`
const Footer = styled.footer`
  display: flex;
  color: ${props => props.theme.colours.primary};
  font-family: ${props => props.theme.typography.fontFamily.heading};
  font-size: ${props => props.theme.typography.fontSize.body.small};
`

const GlobalStyle = createGlobalStyle`
 :root{
    max-width: 64rem;
    margin: auto;
    background-color: ${props => props.theme.colours.background};

    @media only screen and (min-width: 36rem) {
        font-size: 18px;
    }
   
 }
`

export default ({ route, children }) => (
  <ThemeProvider theme={themes.light}>
    <App>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=Playfair+Display:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Normalise />
      <GlobalStyle />
      <Header currentRoute={route} />
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
  </ThemeProvider>
)
