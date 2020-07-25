import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import DottedWrapper from "./DottedWrapper"
import PostInfo from "./PostInfo"
import { Link } from "gatsby"

const PaddedDottedWrapper = styled(DottedWrapper)`
  flex-grow: 1;
  flex-basis: ${props => (props.featured ? 24 : 16)}rem;
  margin-left: ${props => props.theme.spacing.main.major};
  margin-bottom: ${props => props.theme.spacing.main.major};
  padding: ${props => props.theme.spacing.main.major};
  font-family: ${props => props.theme.typography.fontFamily.heading};
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
