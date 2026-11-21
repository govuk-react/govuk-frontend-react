import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs'],
  staticDirs: [{ from: '../node_modules/govuk-frontend/dist/govuk/assets', to: '/assets' }],
  viteFinal: (viteConfig) => ({
    ...viteConfig,
    css: {
      ...viteConfig.css,
      lightningcss: { ...viteConfig.css?.lightningcss, errorRecovery: true },
    },
  }),
};

export default config;
