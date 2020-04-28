import React from "react"
import styled from "styled-components"

const Container = styled.div`
  font-family: Playfair Display;
`
const Headline = styled.h1`
  font-weight: 900;
  font-style: italic;
`
const Message = styled.h3`
  font-weight: 600;
`
export default ({ headline, message }) => (
  <Container>
    <Headline>{headline}</Headline>
    <Message>{message}</Message>
    <p>
      Tweet <a href="https://twitter.com/WillTheVideoMan">@WillTheVideoMan</a>.
    </p>
  </Container>
)
