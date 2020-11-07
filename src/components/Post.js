import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Article from "./Article"
import DottedWrapper from "./DottedWrapper"
import PostInfo from "./PostInfo"
import { graphql, Link } from "gatsby"
import { SPACING, TYPOGRAPHY } from "../styles/constants"

const Container = styled.article`
  max-width: 36rem;

  margin-left: auto;
  margin-right: auto;
`

const PaddedDottedWrapper = styled(DottedWrapper)`
  padding: ${SPACING.main.major};
`

const Tags = styled.div`
  margin-top: ${SPACING.main.major};
  display: flex;
  flex-wrap: wrap;
  font-family: ${TYPOGRAPHY.fontFamily.heading};

  * {
    color: var(--colour-primary);
  }
`

const TagLink = styled(Link)`
  font-weight: 400;
`

const TagSlash = styled.div`
  margin: 0 0.3rem;
  ::before {
    content: "/";
  }
`

const Post = ({
  title,
  published_at,
  reading_time,
  featured,
  primary_tag,
  tags,
  mdxBody,
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
        <Article mdxBody={mdxBody} />
      </PaddedDottedWrapper>
      {tags && tags.length > 0 ? (
        <Tags>
          {tags.map((tag, index) => (
            <>
              <TagLink to={"/tag/" + tag.slug + "/"}>{tag.name}</TagLink>
              {index === tags.length - 1 ? null : <TagSlash />}
            </>
          ))}
        </Tags>
      ) : null}
    </Container>
  )
}

export default Post

Post.propTypes = {
  title: PropTypes.string.isRequired,
  published_at: PropTypes.instanceOf(Date),
  reading_time: PropTypes.number,
  featured: PropTypes.bool,
  /**
   * If the post has any tags, this object should hold the primary tag object.
   */
  primary_tag: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ),

  mdxBody: PropTypes.string.isRequired,
}

/*
export const postContentFragment = graphql`
  fragment PostContent on GhostPost {
    title
    slug
    published_at
    custom_excerpt
    reading_time
    featured
    primary_tag {
      name
      slug
    }
    primary_author {
      name
    }
    tags {
      name
      slug
    }
    childHtmlRehype {
      htmlAst
    }
    meta_title
    meta_description
    featureImageSharp {
      childImageSharp {
        resize(width: 1080) {
          src
          width
          height
        }
      }
    }
    og_title
    og_description
    ogImageSharp {
      childImageSharp {
        resize(width: 1080) {
          src
          width
          height
        }
      }
    }
    twitter_title
    twitter_description
    twitterImageSharp {
      childImageSharp {
        resize(width: 1080) {
          src
          width
          height
        }
      }
    }
  }
  fragment PageContent on GhostPage {
    title
    slug
    custom_excerpt
    primary_author {
      name
    }
    childHtmlRehype {
      htmlAst
    }
    meta_title
    meta_description
    featureImageSharp {
      childImageSharp {
        resize(width: 1080) {
          src
          width
          height
        }
      }
    }
    og_title
    og_description
    ogImageSharp {
      childImageSharp {
        resize(width: 1080) {
          src
          width
          height
        }
      }
    }
    twitter_title
    twitter_description
    twitterImageSharp {
      childImageSharp {
        resize(width: 1080) {
          src
          width
          height
        }
      }
    }
  }
`
*/
