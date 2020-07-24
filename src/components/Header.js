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
const Title = styled.h1`
  font-size: ${props => props.theme.typography.fontSize.heading.massive};
  font-weight: 900;
  margin-top: ${props => props.theme.spacing.main.major};
  margin-bottom: ${props => props.theme.spacing.main.minor};
`

const Subtitle = styled.p`
  font-size: 1em;
  margin-top: ${props => props.theme.spacing.main.minor};
  margin-bottom: ${props => props.theme.spacing.accent.minor};
`
const Header = ({ currentRoute, tag }) => {
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
      <Title>Will Hall's</Title>
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
}

Header.defaultProps = {
  currentRoute: "/",
}
