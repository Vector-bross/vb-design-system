import '../tokens/tokens.css'

/** @type { import('@storybook/html').Preview } */
export default {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    layout: 'centered',
  },
}
