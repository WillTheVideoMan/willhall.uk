import React from "react"
import InlineSharpImage from "../src/components/InlineSharpImage"
import { withKnobs, text } from "@storybook/addon-knobs"

export default {
  component: InlineSharpImage,
  title: "Article / Inline Sharp Image",
  decorators: [withKnobs],
}

export const defaultInlineSharpImage = () => (
  <InlineSharpImage
    fluidImg={
      '{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIFAQME/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABvefbXFqDEQkD/8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDEBEABBL/2gAIAQEAAQUCY+VnZaNyg3LrTZKnGgMf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAEDFRAv/aAAgBAQAGPwInkQr0OiMrFeV//8QAGRABAQEBAQEAAAAAAAAAAAAAAQARMSFB/9oACAEBAAE/IQR4Nt565s2QdQIR4vk3U++JCNBdv//aAAwDAQACAAMAAAAQAAc8/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBYVFxsf/aAAgBAQABPxCmmwr6lP1nHxMXEarZIaLSHUTqVuzifCICBOyVAH1F2Z//2Q==","aspectRatio":1,"src":"https://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg","srcSet":"https://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg 175w,\\nhttps://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg 350w,\\nhttps://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg 700w","srcSetType":"image/jpeg","sizes":"(max-width: 700px) 100vw, 700px","originalImg":"https://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg","originalName":"pamela.jpg","density":72,"presentationWidth":700,"presentationHeight":700,"srcSetWebp":"https://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg 175w,\\nhttps://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg 350w,\\nhttps://s9.limitedrun.com/images/1417418/v600_pamela_1500.jpg 700w"}'
    }
  />
)
