import initStoryshots from "@storybook/addon-storyshots"

/** HOTFIX: Exclude SEO from testing. */
initStoryshots({
  storyNameRegex: /^((?!.*?(SEO)).)*$/,
})
