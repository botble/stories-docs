import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/stories/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/stories/releases' },
      { text: 'Upgrade Guide', link: '/stories/upgrade' },
    ],
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/stories/installation' },
      { text: 'SSL', link: '/stories/ssl' },
      { text: 'License', link: '/stories/license' },
    ],
  },
  {
    text: 'Available plugins',
    items: [
      { text: 'Backup', link: '/stories/plugin-backup' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Rename theme', link: '/stories/theme-rename' },
      { text: 'Custom CSS/JS', link: '/stories/usage-custom-css-js' },
      { text: 'Translation', link: '/stories/usage-translation' },
      { text: 'Multi-language', link: '/stories/usage-multi-language' },
      { text: 'Location', link: '/stories/usage-location' },
      { text: 'Google Analytics', link: '/stories/usage-analytics' },
      { text: 'Media - Setup Amazon S3', link: '/stories/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/stories/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/stories/usage-media-wasabi' },
      { text: 'Setup email', link: '/stories/usage-email' },
      { text: 'Backup', link: '/stories/plugin-backup' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[];
