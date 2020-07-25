import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import themes from "../styles/themes"
import GlobalStyle from "../styles/GlobalStyle"
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

const LayoutStyle = createGlobalStyle`
 :root{
    background-color: ${props => props.theme.colours.background};

    scrollbar-color:
      ${props => props.theme.colours.accent}
      ${props => props.theme.colours.background};
    
    *::-webkit-scrollbar {
      width: 12px;
    }
    *::-webkit-scrollbar-track {
      background-color: ${props => props.theme.colours.background};
    }
    *::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colours.accent}
    }
 }
`

/**
 * The layout components assembles and displays all the content of the site in a repeatable way.
 *
 * The layout adds global styles and themes, navigation, and footer.
 */
const Layout = ({ route, children }) => {
  /**
   * Check to see if we are rendering in the browser (not server-side).
   *
   * If so, ensures the local storage item exists.
   */
  if (typeof window !== "undefined" && !localStorage.getItem("isDark"))
    localStorage.setItem("isDark", false)

  /**
   * Ensure the window exists before getting from the local store.
   *
   * This allows for one pass of SSR, then when the window exists after the first client render, the local store takes over.
   */
  const [isDark, setIsDark] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("isDark") === "false"
        ? false
        : true
      : false
  )

  useEffect(() => localStorage.setItem("isDark", isDark), [isDark])

  return (
    <ThemeProvider theme={isDark ? themes.dark : themes.light}>
      <App>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=Playfair+Display:wght@400;600;900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyle />
        <LayoutStyle />
        <Header
          currentRoute={route}
          isDark={isDark}
          handleClick={() => setIsDark(!isDark)}
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
    </ThemeProvider>
  )
}

export default Layout

Layout.propTypes = {
  /** The current route of the current page. Needed to display correct navigation highlighting in the header. */
  route: PropTypes.string.isRequired,
  children: PropTypes.array,
}
