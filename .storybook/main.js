module.exports = {
  stories: [
    "../src/stories/*.stories.@(js|jsx|mdx)",
    "../src/components/*.stories.@(js|jsx|mdx)",
    "../src/styles/*.stories.@(js|jsx|mdx)",
    "../src/utils/*.stories.@(js|jsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
