import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const InfoWrapper = styled.div`
  font-size: ${props => props.theme.typography.fontSize.body.small};
  font-family: ${props => props.theme.typography.fontFamily.heading};
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
`

const Title = styled.h1`
  margin: 0;
  font-size: ${props => props.theme.typography.fontSize.heading.primary};
  font-weight: 900;
`

const Excerpt = styled.div`
  text-indent: -0.35rem;
  font-family: ${props => props.theme.typography.fontFamily.body};
  font-size: ${props => props.theme.typography.fontSize.body.regular};
  ::before {
    content: '"';
  }
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

const PostInfo = ({
  title,
  excerpt,
  published_at,
  reading_time,
  featured,
  primary_tag,
}) => {
  return (
    <InfoWrapper>
      <InfoRow>
        <Title>{title}</Title>
      </InfoRow>
      {excerpt ? (
        <InfoRow>
          <Excerpt>{excerpt}</Excerpt>
        </InfoRow>
      ) : null}
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
    </InfoWrapper>
  )
}

export default PostInfo

PostInfo.propTypes = {
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
  slug: PropTypes.string.isRequired,
}
