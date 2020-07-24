import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Article from "./Article"
import DottedWrapper from "./DottedWrapper"
import { Link } from "gatsby"

const Title = styled.h1`
  font-size: ${props => props.theme.typography.fontSize.heading.primary};
  font-family: ${props => props.theme.typography.fontFamily.heading};
  margin-top: ${props => props.theme.spacing.main.minor};
  margin-bottom: ${props => props.theme.spacing.accent.minor};
`

const Container = styled.article`
  max-width: 36rem;

  margin-left: auto;
  margin-right: auto;
`

const PaddedDottedWrapper = styled(DottedWrapper)`
  padding: ${props => props.theme.spacing.main.major};
`

const TitleWrapper = styled.div`
  * {
    color: ${props => props.theme.colours.primary};
  }
`

const InfoRow = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-top: ${props => props.theme.spacing.main.minor};
  margin-bottom: ${props => props.theme.spacing.accent.minor};
  font-family: ${props => props.theme.typography.fontFamily.heading};
  font-size: ${props => props.theme.typography.fontSize.body.small};
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
      <PaddedDottedWrapper>
        <TitleWrapper>
          <Title>{title}</Title>
          <InfoRow>
            {primary_tag ? (
              <>
                <Link to={"/tag/" + primary_tag.slug}>{primary_tag.name}</Link>
                <Slash />
              </>
            ) : null}
            {published_at.toUTCString()}
          </InfoRow>
          <InfoRow>
            <div>
              {reading_time}
              {Math.abs(reading_time) < 2 ? " min" : " mins"}
            </div>
            {featured ? <FeatureStar /> : null}
          </InfoRow>
        </TitleWrapper>
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
