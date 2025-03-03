export const headerData = {
  links: [
    // {
    //   text: 'Descúbrelo',
    //   href: '/#transformation',
    // },
  ],
  actions: [
    {
      text: 'Pruébalo gratis',
      variant: 'primary',
      icon: 'tabler:rocket',
      href: '/waitlist/',
      // target: '_blank'
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Soporte',
      links: [
        { text: 'Contacto', href: '/contact/' },
        { text: 'Blog', href: '/blog/' },
        { text: 'Guías', href: '/category/guias/' },
      ],
    },
    {
      title: 'AutoVisita',
      links: [
        { text: 'Cómo funciona autovisita', href: '/#features' },
        { text: 'Sobre nosotros', href: '/#about' },
      ],
    },
    {
      title: 'Universo GearShift',
      links: [
        { text: 'GearShift', href: 'https://gearshift.es/' },
        { text: 'postify AI', href: 'https://postifyai.com/' },
        { text: 'SynCal', href: 'https://syncal.app/' },
        { text: 'AutoVisita', href: 'https://autovisita.es/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y condiciones', href: '/terms' },
    { text: 'Política de privacidad', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/autovisita' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/autovisita' },
    { arialabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/autovisita' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: '/rss.xml' },
  ],
  footNote: `
  <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
  >© 2025 <a href="https://autovisita.es/" class="hover:underline"
    >AutoVisita</a
  >
</span>
  `,
};
