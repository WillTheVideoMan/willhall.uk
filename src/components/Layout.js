import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import styled, { createGlobalStyle } from "styled-components"
import Normalise from "../styles/Normalise"
import Header from "./Header"
import { TYPOGRAPHY, SPACING } from "../styles/constants"
import { ThemeContext } from "../styles/ThemeProvider"

const App = styled.main`
  margin: 0 ${SPACING.main.major};
`
const Link = styled.p`
  text-decoration: underline;
  cursor: pointer;
  margin-left: 0.8em;
`
const Footer = styled.footer`
  display: flex;
  color: var(--colour-primary);
  font-family: ${TYPOGRAPHY.fontFamily.heading};
  font-size: ${TYPOGRAPHY.fontSize.body.small};
`

const LayoutStyle = createGlobalStyle`
 :root{
    background-color: var(--colour-background);
    max-width: 64rem;
    margin: auto;

    @media only screen and (min-width: 36rem) {
      font-size: 18px;
    }

    scrollbar-color:
      var(--colour-accent)
      var(--colour-background);
    GlobalStyle
    *::-webkit-scrollbar {
      width: 12px;
    }
    *::-webkit-scrollbar-track {
      background-color: var(--colour-background);
    }
    *::-webkit-scrollbar-thumb {
      background-color: var(--colour-accent)
    }
 }
`

/**
 * The layout components assembles and displays all the content of the site in a repeatable way.
 *
 * The layout adds global styles and themes, navigation, and footer.
 */
const Layout = ({ route, tag, children }) => {
  const { colourScheme, setColourScheme } = useContext(ThemeContext)
  return (
    <App>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,600;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Normalise />
      <LayoutStyle />
      <Header
        currentRoute={route}
        isDark={colourScheme === "dark" ? true : false}
        handleClick={() =>
          setColourScheme(colourScheme === "dark" ? "light" : "dark")
        }
        tag={tag}
      />
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
}

export default Layout

Layout.propTypes = {
  /** The current route of the current page. Needed to display correct navigation highlighting in the header. */
  route: PropTypes.string.isRequired,
  children: PropTypes.array,
}
