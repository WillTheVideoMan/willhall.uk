import React from "react"
import Post from "../src/components/Post"
import {
  withKnobs,
  text,
  object,
  date,
  number,
  boolean,
} from "@storybook/addon-knobs"

export default {
  component: Post,
  title: "Post",
  decorators: [withKnobs],
}

const htmlAst = {
  type: "root",
  children: [
    {
      type: "element",
      tagName: "p",
      properties: {},
      children: [
        {
          type: "text",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque non arcu eu efficitur. Aliquam non convallis quam. Donec a pretium velit, non congue magna. Maecenas tempor lectus id tempus lobortis. Curabitur in vestibulum nunc. Suspendisse vitae posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut gravida, odio at interdum fermentum, justo nibh varius enim, vitae pulvinar est mauris quis purus. Donec scelerisque sapien a congue luctus. Maecenas suscipit lacinia pretium. Maecenas sed suscipit augue. ",
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
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque non arcu eu efficitur. Aliquam non convallis quam. Donec a pretium velit, non congue magna. Maecenas tempor lectus id tempus lobortis. Curabitur in vestibulum nunc. Suspendisse vitae posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut gravida, odio at interdum fermentum, justo nibh varius enim, vitae pulvinar est mauris quis purus. Donec scelerisque sapien a congue luctus. Maecenas suscipit lacinia pretium. Maecenas sed suscipit augue. ",
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
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
              value: "Sed pellentesque non arcu eu efficitur.",
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
              value: "Aliquam non convallis quam.",
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
              value: "Donec a pretium velit, non congue magna.",
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
              '{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIFAQME/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABvefbXFqDEQkD/8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDEBEABBL/2gAIAQEAAQUCY+VnZaNyg3LrTZKnGgMf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAEDFRAv/aAAgBAQAGPwInkQr0OiMrFeV//8QAGRABAQEBAQEAAAAAAAAAAAAAAQARMSFB/9oACAEBAAE/IQR4Nt565s2QdQIR4vk3U++JCNBdv//aAAwDAQACAAMAAAAQAAc8/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBYVFxsf/aAAgBAQABPxCmmwr6lP1nHxMXEarZIaLSHUTqVuzifCICBOyVAH1F2Z//2Q==","aspectRatio":1,"src":"https://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg","srcSet":"https://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg 175w,\\nhttps://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg 350w,\\nhttps://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg 700w","srcSetType":"image/jpeg","sizes":"(max-width: 700px) 100vw, 700px","originalImg":"https://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg","originalName":"pamela.jpg","density":72,"presentationWidth":700,"presentationHeight":700,"srcSetWebp":"https://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg 175w,\\nhttps://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg 350w,\\nhttps://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg 700w"}',
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
              value: "Curabitur in vestibulum nunc. ",
            },
          ],
        },
      ],
    },
    {
      type: "element",
      tagName: "pre",
      properties: {},
      children: [
        {
          type: "element",
          tagName: "code",
          properties: {
            className: ["language-javascript"],
          },
          children: [
            {
              type: "text",
              value:
                "import { Greeting } from './Greeting';\n\nexport default {\n  title: 'Default Greeting',\n  // Pass the component to allow the docs addon access to the metadata!\n  component: Greeting,\n};\n",
            },
          ],
        },
      ],
    },
    {
      type: "element",
      tagName: "h3",
      properties: {
        id: "image-sizes",
      },
      children: [
        {
          type: "text",
          value: "Here is a smaller heading. It is not a sharp image.",
        },
      ],
    },
    {
      type: "element",
      tagName: "figure",
      properties: {
        className: ["kg-card", "kg-image-card"],
      },
      children: [
        {
          type: "element",
          tagName: "img",
          properties: {
            src:
              "https://upload.wikimedia.org/wikipedia/commons/9/93/Denali_National_Park_Polychrome_Mountains_Wide_17350px.jpg",
            className: ["kg-image"],
            alt: "a scenic view of a landscape.",
          },
          children: [],
        },
      ],
    },
  ],
}

export const defaultPost = () => (
  <Post
    title={text("title", "Post title")}
    published_at={new Date(0)}
    reading_time={number("reading time", 3)}
    featured={boolean("featured", false)}
    primary_tag={object("primary tag", { name: "Tag", slug: "tag" })}
    htmlAst={htmlAst}
  />
)
