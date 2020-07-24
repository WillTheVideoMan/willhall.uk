import React from "react"
import CodeBlock from "../src/components/CodeBlock"
import { withKnobs, text } from "@storybook/addon-knobs"

export default {
  component: CodeBlock,
  title: "Article / Code Block",
  decorators: [withKnobs],
}

export const defaultCodeBlock = () => (
  <CodeBlock>
    <code class="language-javascript">
      {
        "import { Greeting } from './Greeting';\n\nexport default {\n  title: 'Default Greeting',\n  // Pass the component to allow the docs addon access to the metadata!\n  component: Greeting,\n};\n"
      }
    </code>
  </CodeBlock>
)
