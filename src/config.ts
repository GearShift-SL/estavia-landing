type SiteConfig = {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  logo?: string;
  ogImage: string;
  locale: string;
  twitter: {
    site: string;
  };
};

type Link = {
  text: string;
  href: string;
};

type Action = {
  href: string;
  text: string;
  icon?: string;
};

type FooterLinkGroup = {
  title: string;
  links: Link[];
};

type SocialLink = {
  ariaLabel: string;
  icon: string;
  href: string;
};

type NavigationConfig = {
  header: {
    links: Link[];
    actions: Action[];
  };
  footer: {
    links: FooterLinkGroup[];
    secondaryLinks: Link[];
    socialLinks: SocialLink[];
    footNote: string;
  };
};

export const SITE: SiteConfig = {
  title: 'Estavia - Tu software de gestión inmobiliaria',
  description:
    'Estavia es el primer agente de IA inmobiliario para automatizar la gestión de clientes, propiedades y visitas para que puedas centrarte en cerrar más operaciones',
  author: 'Daniel García',
  siteUrl: 'https://estavia.ai',
  ogImage: '/src/assets/images/og-image.webp', // Needs to be an absolute path /src/...
  locale: 'es_ES',
  twitter: {
    site: '@estavia',
  },
};

export const NAVIGATION: NavigationConfig = {
  header: {
    links: [],
    actions: [
      {
        href: `bookdemo/`,
        text: 'Automatiza tu agencia',
        // icon: 'tabler:rocket',
      },
    ],
  },

  footer: {
    links: [
      {
        title: 'Soporte',
        links: [
          { text: 'Contacto', href: 'contact/' },
          { text: 'Blog', href: 'blog/' },
          { text: 'Guías', href: 'category/guias/' },
        ],
      },
      {
        title: 'Estavia',
        links: [
          { text: 'Cómo funciona estavia', href: '#features' },
          { text: 'Sobre nosotros', href: '#about' },
          { text: 'Actualizaciones', href: 'changelog/' },
        ],
      },
      {
        title: 'Universo GearShift',
        links: [
          { text: 'GearShift', href: 'https://gearshift.es/' },
          { text: 'postify AI', href: 'https://postifyai.com/' },
          { text: 'SynCal', href: 'https://syncal.app/' },
          { text: 'Estavia', href: 'https://estavia.ai/' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Términos y condiciones', href: 'terms/' },
      { text: 'Política de privacidad', href: 'privacy/' },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/estavia' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/estavia' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/estavia' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: '/rss.xml' },
    ],
    footNote: `
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2025 <a href="https://estavia.ai/" class="hover:underline"
          >Estavia</a
        >
      </span>
        `,
  },
};
