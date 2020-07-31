import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import DottedWrapper from "./DottedWrapper"
import PostInfo from "./PostInfo"
import { Link, graphql } from "gatsby"
import { SPACING, TYPOGRAPHY } from "../styles/constants"

const PaddedDottedWrapper = styled(DottedWrapper)`
  flex-grow: 1;
  flex-basis: ${props => (props.featured ? 24 : 16)}rem;
  margin-left: ${SPACING.main.major};
  margin-bottom: ${SPACING.main.major};
  padding: ${SPACING.main.major};
  font-family: ${TYPOGRAPHY.fontFamily.heading};
`

const Card = styled(Link)`
  text-decoration-line: none;
`

const PostCard = ({
  title,
  excerpt,
  published_at,
  reading_time,
  featured,
  primary_tag,
  slug,
}) => (
  <PaddedDottedWrapper featured={featured}>
    <Card to={"/" + slug} aria-label={excerpt}>
      <PostInfo
        title={title}
        excerpt={excerpt}
        published_at={published_at}
        reading_time={reading_time}
        featured={featured}
        primary_tag={primary_tag}
      />
    </Card>
  </PaddedDottedWrapper>
)

export default PostCard

PostCard.propTypes = {
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
}

export const postCardContentFragment = graphql`
  fragment PostCardContent on GhostPost {
    title
    slug
    excerpt
    published_at
    reading_time
    featured
    primary_tag {
      name
      slug
    }
  }
`
