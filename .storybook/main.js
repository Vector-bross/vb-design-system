/** @type { import('@storybook/html-vite').StorybookConfig } */
export default {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-designs',            // embarque le frame Figma a cote du composant
    'storybook-addon-figma-comparator',    // superpose le Figma par-dessus -> diff pixel
  ],
  framework: { name: '@storybook/html-vite', options: {} },
}
