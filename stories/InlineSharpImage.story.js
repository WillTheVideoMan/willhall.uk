import React from "react"
import InlineSharpImage from "../src/components/InlineSharpImage"
import { withKnobs, text } from "@storybook/addon-knobs"

export default {
  component: InlineSharpImage,
  title: "Inline Sharp Image",
  decorators: [withKnobs],
}

export const defaultInlineSharpImage = () => (
  <InlineSharpImage
    fluidImg={
      '{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIFAQME/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABvefbXFqDEQkD/8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDEBEABBL/2gAIAQEAAQUCY+VnZaNyg3LrTZKnGgMf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAEDFRAv/aAAgBAQAGPwInkQr0OiMrFeV//8QAGRABAQEBAQEAAAAAAAAAAAAAAQARMSFB/9oACAEBAAE/IQR4Nt565s2QdQIR4vk3U++JCNBdv//aAAwDAQACAAMAAAAQAAc8/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBYVFxsf/aAAgBAQABPxCmmwr6lP1nHxMXEarZIaLSHUTqVuzifCICBOyVAH1F2Z//2Q==","aspectRatio":1,"src":"/static/23dfe93a995f5f55eba116c48f5c3232/29d31/pamela.jpg","srcSet":"/static/23dfe93a995f5f55eba116c48f5c3232/e52aa/pamela.jpg 175w,\\n/static/23dfe93a995f5f55eba116c48f5c3232/70ebb/pamela.jpg 350w,\\n/static/23dfe93a995f5f55eba116c48f5c3232/29d31/pamela.jpg 700w","srcSetType":"image/jpeg","sizes":"(max-width: 700px) 100vw, 700px","originalImg":"/static/23dfe93a995f5f55eba116c48f5c3232/29d31/pamela.jpg","originalName":"pamela.jpg","density":72,"presentationWidth":700,"presentationHeight":700,"srcSetWebp":"/static/23dfe93a995f5f55eba116c48f5c3232/c54d4/pamela.webp 175w,\\n/static/23dfe93a995f5f55eba116c48f5c3232/a3432/pamela.webp 350w,\\n/static/23dfe93a995f5f55eba116c48f5c3232/426ac/pamela.webp 700w"}'
    }
    alt={text("alt", "alternative text")}
  />
)
