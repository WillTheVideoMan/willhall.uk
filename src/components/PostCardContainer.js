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
    <Container>
      {postcards.map(postcard => (
        <PostCard
          title={postcard.title}
          excerpt={postcard.excerpt}
          published_at={new Date(postcard.published_at)}
          reading_time={postcard.reading_time}
          featured={postcard.featured}
          primary_tag={postcard.primary_tag}
          slug={postcard.slug}
        />
      ))}
    </Container>
  </div>
)

export default PostCardContainer

PostCardContainer.propTypes = {
  title: PropTypes.string,
  postcards: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
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
  }),
}
