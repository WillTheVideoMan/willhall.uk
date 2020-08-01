import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import { TYPOGRAPHY, SPACING } from "../styles/constants"

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  font-size: ${TYPOGRAPHY.fontSize.heading.tertiary};
`

const NavLink = styled(Link)`
  font-weight: ${props => (props.active ? 600 : 400)};
  color: var(--colour-primary);
`

const NavSlash = styled.div`
  margin: 0 0.3rem;
  ::before {
    content: "/";
  }
`

const Tag = styled.div`
  margin-left: auto;
  font-size: ${TYPOGRAPHY.fontSize.body.small};
  font-weight: 600;
`

const Container = styled.header`
  color: var(--colour-primary);
  font-family: ${TYPOGRAPHY.fontFamily.heading}, serif;
  margin-bottom: ${SPACING.main.major};
`
const Title = styled.div`
  font-size: ${TYPOGRAPHY.fontSize.heading.massive};
  line-height: ${TYPOGRAPHY.lineHeight.heading};
  font-weight: 900;
`

const Subtitle = styled.p`
  margin-top: ${SPACING.main.minor};
  margin-bottom: ${SPACING.accent.minor};
  line-height: ${TYPOGRAPHY.lineHeight.body};
`

const Headline = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: ${SPACING.main.major};
  margin-bottom: ${SPACING.main.minor};
`

const ThemeIcon = styled.div`
  margin-left: auto;
  font-size: ${TYPOGRAPHY.fontSize.heading.secondary};
  cursor: pointer;
  user-select: none;
`

const Header = ({ currentRoute, tag, isDark, handleClick }) => {
  const { ghostSettings, site } = useStaticQuery(graphql`
    query {
      ghostSettings {
        navigation {
          label
          url
        }
        title
        description
      }
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const siteTitle =
    ghostSettings && ghostSettings.title
      ? ghostSettings.title
      : site.siteMetadata.title

  const description =
    ghostSettings && ghostSettings.description
      ? ghostSettings.description
      : site.siteMetadata.description

  return (
    <Container>
      <Headline>
        <Title>{siteTitle}</Title>
        <ThemeIcon onClick={() => handleClick()}>
          {isDark ? "☾" : "☼"}
        </ThemeIcon>
      </Headline>
      <Subtitle>{description}</Subtitle>
      <Navigation>
        {ghostSettings.navigation.map((link, index) => {
          return (
            <>
              <NavLink
                to={link.url}
                active={currentRoute === link.url ? true : false}
              >
                {link.label}
              </NavLink>
              {index === ghostSettings.navigation.length - 1 ? null : (
                <NavSlash />
              )}
            </>
          )
        })}
        <Tag>{tag}</Tag>
      </Navigation>
    </Container>
  )
}

export default Header

Header.propTypes = {
  currentRoute: PropTypes.string,
  tag: PropTypes.string,
  isDark: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
}

Header.defaultProps = {
  currentRoute: "/",
  isDark: false,
}
