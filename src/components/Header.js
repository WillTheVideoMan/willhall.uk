import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  font-size: ${props => props.theme.typography.fontSize.heading.tertiary};
`

const NavLink = styled(Link)`
  font-weight: ${props => (props.active ? 600 : 400)};
  color: ${props => props.theme.colours.primary};
`

const NavSlash = styled.div`
  margin: 0 0.3rem;
  ::before {
    content: "/";
  }
`

const Tag = styled.div`
  margin-left: auto;
  font-size: ${props => props.theme.typography.fontSize.body.small};
  font-weight: 600;
`

const Container = styled.header`
  color: ${props => props.theme.colours.primary};
  font-family: ${props => props.theme.typography.fontFamily.heading}, serif;
  margin-bottom: ${props => props.theme.spacing.main.major};
`
const Title = styled.div`
  font-size: ${props => props.theme.typography.fontSize.heading.massive};
  line-height: ${props => props.theme.typography.lineHeight.heading};
  font-weight: 900;
`

const Subtitle = styled.p`
  margin-top: ${props => props.theme.spacing.main.minor};
  margin-bottom: ${props => props.theme.spacing.accent.minor};
  line-height: ${props => props.theme.typography.lineHeight.body};
`

const Headline = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: ${props => props.theme.spacing.main.major};
  margin-bottom: ${props => props.theme.spacing.main.minor};
`

const ThemeIcon = styled.div`
  margin-left: auto;
  font-size: ${props => props.theme.typography.fontSize.heading.secondary};
  cursor: pointer;
  user-select: none;
`

const Header = ({ currentRoute, tag, isDark, handleClick }) => {
  const { ghostSettings } = useStaticQuery(graphql`
    query {
      ghostSettings {
        navigation {
          label
          url
        }
      }
    }
  `)

  return (
    <Container>
      <Headline>
        <Title>Will Hall's</Title>
        <ThemeIcon onClick={() => handleClick()}>
          {isDark ? "☾" : "☼"}
        </ThemeIcon>
      </Headline>

      <Subtitle>journey through everything</Subtitle>
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
