import React from "react"
import Article from "../src/components/Article"
import { withKnobs } from "@storybook/addon-knobs"
import { loremIpsum } from "lorem-ipsum"

export default {
  component: Article,
  title: "Article",
  decorators: [withKnobs],
}

const htmlAst = {
  type: "root",
  children: [
    {
      type: "element",
      tagName: "h2",
      properties: {},
      children: [
        {
          type: "text",
          value: loremIpsum({ count: 1 }),
        },
      ],
    },
    {
      type: "element",
      tagName: "p",
      properties: {},
      children: [
        {
          type: "text",
          value: loremIpsum({ count: 10 }),
        },
      ],
    },
    {
      type: "element",
      tagName: "p",
      properties: {},
      children: [
        {
          type: "text",
          value: loremIpsum({ count: 10 }),
        },
      ],
    },
    {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: [
        {
          type: "element",
          tagName: "em",
          properties: {},
          children: [
            {
              type: "text",
              value: loremIpsum({ count: 1 }),
            },
          ],
        },
      ],
    },
    {
      type: "element",
      tagName: "ul",
      properties: {},
      children: [
        {
          type: "text",
          value: "\n",
        },
        {
          type: "element",
          tagName: "li",
          properties: {},
          children: [
            {
              type: "text",
              value: loremIpsum({ count: 1 }),
            },
          ],
        },
        {
          type: "text",
          value: "\n",
        },
        {
          type: "element",
          tagName: "li",
          properties: {},
          children: [
            {
              type: "text",
              value: loremIpsum({ count: 1 }),
            },
          ],
        },
        {
          type: "text",
          value: "\n",
        },
        {
          type: "element",
          tagName: "li",
          properties: {},
          children: [
            {
              type: "text",
              value: loremIpsum({ count: 1 }),
            },
          ],
        },
        {
          type: "text",
          value: "\n",
        },
      ],
    },
    {
      type: "element",
      tagName: "figure",
      properties: {
        className: [
          "kg-card",
          "kg-image-card",
          "kg-card-hascaption",
          "fluid-image",
        ],
        style: "flex: 1 1 0",
      },
      children: [
        {
          type: "element",
          tagName: "img-sharp-inline",
          properties: {
            src: "http://localhost:2368/content/images/2020/07/pamela.jpg",
            className: ["kg-image"],
            alt: "alt text for pamela",
            htmlTag: "img",
            fluidImg:
              '{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIFAQME/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABvefbXFqDEQkD/8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDEBEABBL/2gAIAQEAAQUCY+VnZaNyg3LrTZKnGgMf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAEDFRAv/aAAgBAQAGPwInkQr0OiMrFeV//8QAGRABAQEBAQEAAAAAAAAAAAAAAQARMSFB/9oACAEBAAE/IQR4Nt565s2QdQIR4vk3U++JCNBdv//aAAwDAQACAAMAAAAQAAc8/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBYVFxsf/aAAgBAQABPxCmmwr6lP1nHxMXEarZIaLSHUTqVuzifCICBOyVAH1F2Z//2Q==","aspectRatio":1,"src":"/static/23dfe93a995f5f55eba116c48f5c3232/29d31/pamela.jpg","srcSet":"/static/23dfe93a995f5f55eba116c48f5c3232/e52aa/pamela.jpg 175w,\\n/static/23dfe93a995f5f55eba116c48f5c3232/70ebb/pamela.jpg 350w,\\n/static/23dfe93a995f5f55eba116c48f5c3232/29d31/pamela.jpg 700w","srcSetType":"image/jpeg","sizes":"(max-width: 700px) 100vw, 700px","originalImg":"/static/23dfe93a995f5f55eba116c48f5c3232/29d31/pamela.jpg","originalName":"pamela.jpg","density":72,"presentationWidth":700,"presentationHeight":700,"srcSetWebp":"/static/23dfe93a995f5f55eba116c48f5c3232/c54d4/pamela.webp 175w,\\n/static/23dfe93a995f5f55eba116c48f5c3232/a3432/pamela.webp 350w,\\n/static/23dfe93a995f5f55eba116c48f5c3232/426ac/pamela.webp 700w"}',
            maxWidth: "700",
            parentClassName:
              "kg-card kg-image-card kg-card-hascaption fluid-image",
            htmlClearProps: "className fluidImg parentClassName",
          },
          children: [],
        },
        {
          type: "element",
          tagName: "figcaption",
          properties: {},
          children: [
            {
              type: "text",
              value: loremIpsum({ count: 1 }),
            },
          ],
        },
      ],
    },
  ],
}

export const defaultArticle = () => (
  <div
    style={{
      marginLeft: "1em",
    }}
  >
    <Article htmlAst={htmlAst} />
  </div>
)
