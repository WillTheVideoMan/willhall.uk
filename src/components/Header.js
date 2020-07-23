import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  font-size: var(--tertiary-heading-size);
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: ${props => (props.active ? 600 : 400)};
`

const NavSlash = styled.div`
  margin: 0 0.3rem;
  ::before {
    content: "/";
  }
`

const Tag = styled.div`
  margin-left: auto;
  font-size: var(--small-body-size);
  font-weight: 600;
`

const Container = styled.header`
  font-family: var(--heading-font-family);
  margin-bottom: var(--main-spacing-major);
`
const Title = styled.h1`
  font-size: var(--massive-heading-size);
  font-weight: 900;

  margin-top: var(--main-spacing-major);
  margin-bottom: var(--main-spacing-minor);
`

const Subtitle = styled.p`
  font-size: 1em;
  margin-top: var(--main-spacing-minor);
  margin-bottom: var(--accent-spacing-minor);
`

const Header = ({ links, tag }) => {
  return (
    <Container>
      <Title>Will Hall's</Title>
      <Subtitle>journey through everything</Subtitle>
      <Navigation>
        {links.map((link, index) => {
          return (
            <>
              <NavLink to={`/${link.slug}`} active={link.isActive}>
                {link.title}
              </NavLink>
              {index === links.length - 1 ? null : <NavSlash />}
            </>
          )
        })}
        <Tag>{tag}</Tag>
      </Navigation>
    </Container>
  )
}

export default Header

Header.propTypes = {}

Header.defaultProps = {
  links: [
    {
      title: "writing",
      slug: "",
      isActive: true,
    },
  ],
}
