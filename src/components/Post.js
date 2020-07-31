import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Article from "./Article"
import DottedWrapper from "./DottedWrapper"
import PostInfo from "./PostInfo"
import { graphql } from "gatsby"
import { SPACING } from "../styles/constants"

const Container = styled.article`
  max-width: 36rem;

  margin-left: auto;
  margin-right: auto;
`

const PaddedDottedWrapper = styled(DottedWrapper)`
  padding: ${SPACING.main.major};
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
      <PaddedDottedWrapper>
        <PostInfo
          title={title}
          published_at={published_at}
          reading_time={reading_time}
          featured={featured}
          primary_tag={primary_tag}
        />
        <Article htmlAst={htmlAst} />
      </PaddedDottedWrapper>
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

export const postContentFragment = graphql`
  fragment PostContent on GhostPost {
    title
    slug
    published_at
    reading_time
    featured
    primary_tag {
      name
      slug
    }
    childHtmlRehype {
      htmlAst
    }
  }
`
