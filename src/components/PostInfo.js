import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { TYPOGRAPHY, SPACING } from "../styles/constants"

const InfoWrapper = styled.div`
  font-size: ${TYPOGRAPHY.fontSize.body.small};
  font-family: ${TYPOGRAPHY.fontFamily.heading};
  * {
    color: var(--colour-primary);
  }
`

const InfoRow = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-top: ${SPACING.main.minor};
  margin-bottom: ${SPACING.accent.minor};
`

const Title = styled.h1`
  margin: 0;
  font-size: ${TYPOGRAPHY.fontSize.heading.primary};
  font-weight: 900;
`

const Excerpt = styled.div`
  text-indent: -0.35rem;
  font-family: ${TYPOGRAPHY.fontFamily.body};
  font-size: ${TYPOGRAPHY.fontSize.body.regular};
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
      {title ? (
        <InfoRow>
          <Title>{title}</Title>
        </InfoRow>
      ) : null}
      {excerpt ? (
        <InfoRow>
          <Excerpt>{excerpt}</Excerpt>
        </InfoRow>
      ) : null}
      {primary_tag || published_at ? (
        <InfoRow>
          {primary_tag ? (
            <>
              <Link to={"/tag/" + primary_tag.slug}>{primary_tag.name}</Link>
              <Slash />
            </>
          ) : null}
          {published_at ? published_at.toUTCString() : null}
        </InfoRow>
      ) : null}
      {reading_time || featured ? (
        <InfoRow>
          {typeof reading_time === "number" ? (
            <div>
              {reading_time}
              {Math.abs(reading_time) < 2 ? " min" : " mins"}
            </div>
          ) : null}
          {featured ? <FeatureStar /> : null}
        </InfoRow>
      ) : null}
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
