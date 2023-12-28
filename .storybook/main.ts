import type { StorybookConfig } from "@storybook/sveltekit";
import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)"],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-svelte-csf',
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

// Webpack configuration for Tailwind CSS and PostCSS
(config as any).webpackFinal = async (storybookWebpackConfig) => {
  // Add PostCSS support to Storybook
  storybookWebpackConfig.module?.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  return storybookWebpackConfig;
};