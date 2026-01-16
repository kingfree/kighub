import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'KigHub',
  description: '一份简单的娃生手册。开放编辑，欢迎Pull Request！',
  icon: '/rspress-icon.png',
  lang: 'zh',
  logo: {
    light: '/kighub-light-logo.png',
    dark: '/kighub-dark-logo.png',
  },
  route: {
    cleanUrls: true,
  },
  themeConfig: {
    lastUpdated: process.env.NODE_ENV === 'production',
    footer: {
      message: '© 2026-present KigHub.',
    },
    editLink: {
      docRepoBaseUrl:
        'https://github.com/kighub/kighub/tree/main/docs',
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/kighub/kighub',
      },
    ],
  },
});
