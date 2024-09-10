import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: '/#services',
    },
    {
      text: 'Projects',
      href: getPermalink('/category/projects'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{
    text: 'Get In Touch', variant: "primary",
    icon: 'tabler:rocket',
    href: getPermalink("/inquiry"),
    // target: '_blank'
  }],
};

export const footerData = {
  links: [
    {
      title: 'Support',
      links: [
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Guides', href: getPermalink('/category/guides') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Services', href: '/#services' },
        { text: 'About', href: '/#about' },
        { text: 'Past Projects', href: getPermalink('/category/projects') },

      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/gearshift' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/GearShift' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
  <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
  >© 2024 <a href="https://gearshift.es/" class="hover:underline"
    >GearShift</a
  >
</span>
  `,
};
