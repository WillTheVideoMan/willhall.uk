import React from "react"
import { render, screen } from "@testing-library/react"
import Greeting from "../src/components/Greeting"

test("displays the headline and message in the greeting", () => {
  const headline = "Headline Text"
  const message = "Message body goes here"

  render(<Greeting headline={headline} message={message} />)

  expect(screen.getByTestId("greeting-headline")).toHaveTextContent(headline)
  expect(screen.getByTestId("greeting-message")).toHaveTextContent(message)
  expect(screen.getByTestId("greeting-tweet")).toHaveTextContent(
    "Tweet @WillTheVideoMan"
  )
})

test("displays the headline only when no message is provided", () => {
  const headline = "Headline Text"

  render(<Greeting headline={headline} />)

  expect(screen.getByTestId("greeting-headline")).toHaveTextContent(headline)
  expect(screen.getByTestId("greeting-message")).toHaveTextContent("")
  expect(screen.getByTestId("greeting-tweet")).toHaveTextContent(
    "Tweet @WillTheVideoMan"
  )
})
