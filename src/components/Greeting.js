import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div`
  font-family: Playfair Display;
`
const Headline = styled.h1`
  font-weight: 900;
  font-style: italic;
`
const Message = styled.h2`
  font-weight: 600;
`
/**
 * A cool greeting for all homies.
 */
const Greeting = ({ headline, message }) => (
  <Container>
    <Headline data-testid="greeting-headline">{headline}</Headline>
    <Message data-testid="greeting-message">{message}</Message>
    <p data-testid="greeting-tweet">
      Tweet <a href="https://twitter.com/WillTheVideoMan">@WillTheVideoMan</a>.
    </p>
  </Container>
)

export default Greeting

Greeting.propTypes = {
  /**
   * The headline of the greeting. This is the major text.
   */
  headline: PropTypes.string.isRequired,
  /**
   * The main body of the greeting. This provides context.
   */
  message: PropTypes.string,
}

Greeting.defaultProps = {
  headline: "Greetings!",
}
