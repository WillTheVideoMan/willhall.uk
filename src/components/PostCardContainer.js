import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import PostCard from "../components/PostCard"

const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  margin-left: -${props => props.theme.spacing.main.major};
  margin-bottom: -${props => props.theme.spacing.main.major};
`

const Title = styled.div`
  font-size: ${props => props.theme.typography.fontSize.heading.tertiary};
  margin-top: ${props => props.theme.spacing.accent.major};
  margin-bottom: ${props => props.theme.spacing.accent.minor};
  line-height: ${props => props.theme.typography.lineHeight.heading};
  font-family: ${props => props.theme.typography.fontFamily.heading};
  font-weight: 600;
  color: ${props => props.theme.colours.primary};
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
