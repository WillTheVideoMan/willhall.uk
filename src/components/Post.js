import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Article from "./Article"
import { Link } from "gatsby"

const Title = styled.h1`
  font-size: var(--primary-heading-size);
  font-family: var(--heading-font-family);
  margin-top: var(--main-spacing-minor);
  margin-bottom: var(--accent-spacing-minor);
  text-decoration-line: underline;
`

const Container = styled.article`
  max-width: 36rem;

  margin-left: auto;
  margin-right: auto;

  background-image: linear-gradient(
      to right,
      black 10%,
      rgba(255, 255, 255, 0) 0%
    ),
    linear-gradient(black 10%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(to right, black 10%, rgba(255, 255, 255, 0) 0%),
    linear-gradient(black 10%, rgba(255, 255, 255, 0) 0%);
  background-position: top, right, bottom, left;
  background-size: 10px 1px, 1px 10px;
  background-repeat: repeat-x, repeat-y;

  padding: var(--main-spacing-major);
`

const InfoRow = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-top: var(--main-spacing-minor);
  margin-bottom: var(--accent-spacing-minor);
  font-family: var(--heading-font-family);
  font-size: var(--small-body-size);
`

const Slash = styled.div`
  margin: 0 0.3rem;
  ::before {
    content: "/";
  }
`

const FeatureStar = styled.div`
  margin-left: auto;
  ::before {
    content: "★";
  }
`

const Post = ({
  title,
  published_at,
  reading_time,
  featured,
  primary_tag,
  htmlAst,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InfoRow>
        {primary_tag ? (
          <>
            <Link to={"/tag/" + primary_tag.slug}>{primary_tag.name}</Link>
            <Slash />
          </>
        ) : null}
        {published_at.toString()}
      </InfoRow>
      <InfoRow>
        <div>
          {reading_time}
          {Math.abs(reading_time) < 2 ? " min" : " mins"}
        </div>
        {featured ? <FeatureStar /> : null}
      </InfoRow>
      <Article htmlAst={htmlAst} />
    </Container>
  )
}

export default Post

Post.propTypes = {
  title: PropTypes.string.isRequired,
  published_at: PropTypes.instanceOf(Date).isRequired,
  reading_time: PropTypes.number.isRequired,
  featured: PropTypes.bool.isRequired,
  /**
   * If the post has any tags, this object should hold the primary tag object.
   */
  primary_tag: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
  /**
   * The HTMLAst tree to traverse, containing all elements from the rehyped HTML.
   */
  htmlAst: PropTypes.object.isRequired,
}

Post.defaultProps = {
  title: "Post",
  published_at: new Date(0),
  reading_time: 1,
  featured: false,
  primary_tag: PropTypes.shape({
    name: "Tag",
    slug: "tag",
  }),
}
