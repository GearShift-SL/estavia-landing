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
  title: 'Estavia - El agente de IA para tu agencia inmobiliaria',
  description:
    'Automatiza clientes, propiedades y visitas con Estavia, el primer agente de IA para inmobiliarias. Céntrate en cerrar más operaciones.',
  author: 'Daniel García',
  siteUrl: 'https://estavia.ai/',
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
        href: '/reservar-demostracion/',
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
          { text: 'Contacto', href: '/contacto/' },
          { text: 'Blog', href: '/blog/' },
          { text: 'Guías', href: '/categorias/guias/' },
        ],
      },
      {
        title: 'Estavia',
        links: [
          { text: 'Cómo funciona estavia', href: '/#funcionalidades' },
          { text: 'Sobre nosotros', href: '/#sobre-nosotros' },
          { text: 'Actualizaciones', href: '/actualizaciones/' },
          { text: 'Consultoría', href: '/consultoria/' },
        ],
      },
      {
        title: 'Universo GearShift',
        links: [
          { text: 'AutoIPC', href: 'https://autoipc.es/' },
          { text: 'GearShift', href: 'https://gearshift.es/' },
          { text: 'miseo AI', href: 'https://miseo.ai/' },
          { text: 'Estavia', href: 'https://estavia.ai/' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Términos y condiciones', href: '/terminos-y-condiciones/' },
      { text: 'Política de privacidad', href: '/privacidad/' },
    ],
    socialLinks: [
      { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/estavia-ai/' },
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/estavia_ai/' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/estavia_ai' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/estaviaai' },
      {
        ariaLabel: 'Crunchbase',
        icon: 'tabler:brand-crunchbase',
        href: 'https://www.crunchbase.com/organization/estavia',
      },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: '/rss.xml' },
    ],
    footNote: `
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2025 <a href="/" class="hover:underline"
          >Estavia</a
        >
      </span>
        `,
  },
};
