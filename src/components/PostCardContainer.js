import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import PostCard from "../components/PostCard"
import { TYPOGRAPHY, SPACING } from "../styles/constants"

const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin-left: -${SPACING.main.major};
  margin-bottom: -${SPACING.main.major};
`

const Title = styled.div`
  font-size: ${TYPOGRAPHY.fontSize.heading.tertiary};
  margin-top: ${SPACING.accent.major};
  margin-bottom: ${SPACING.accent.minor};
  line-height: ${TYPOGRAPHY.lineHeight.heading};
  font-family: ${TYPOGRAPHY.fontFamily.heading};
  font-weight: 600;
  color: var(--colour-primary);
`

const PostCardContainer = ({ title, postcards }) => (
  <div>
    {title ? <Title>{title}</Title> : null}
    {postcards && postcards.length > 0 ? (
      <Container>
        {postcards.map(postcard => (
          <PostCard
            key={postcard.slug}
            slug={postcard.slug}
            title={postcard.frontmatter.title}
            excerpt={postcard.frontmatter.excerpt}
            published_at={new Date(postcard.frontmatter.published_at)}
            reading_time={postcard.frontmatter.reading_time}
            featured={postcard.frontmatter.featured}
            primary_tag={postcard.frontmatter.tags[0]}
          />
        ))}
      </Container>
    ) : (
      <Title>There are no posts to show.</Title>
    )}
  </div>
)

export default PostCardContainer

PostCardContainer.propTypes = {
  title: PropTypes.string,
  postcards: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string,
        published_at: PropTypes.string.isRequired,
        reading_time: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired,
      }).isRequired,
    })
  ),
}
