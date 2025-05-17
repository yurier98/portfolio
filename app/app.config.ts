export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://avatars.githubusercontent.com/u/75491019?v=4',
      light: 'https://avatars.githubusercontent.com/u/75491019?v=4',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'yurierjesus@gamil.com',
    available: true
  },

  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },

  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },

  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      icon: 'i-simple-icons-linkedin',
      to: 'https://www.linkedin.com/in/yurier-herrera-053880218/',
      target: '_blank',
      'aria-label': 'Sígueme en Linkedin'
    }, {
      icon: 'i-simple-icons-x',
      to: 'https://x.com/yurierherrera',
      target: '_blank',
      'aria-label': 'Sígueme en X'
    }, {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/yurier98',
      target: '_blank',
      'aria-label': 'Sígueme en GitHub'
    }, {
      icon: 'i-simple-icons-telegram',
      to: 'https://t.me/yurierherrera',
      target: '_blank',
      'aria-label': 'Sígueme en Telegram'
    }]
  },

  seo: {
    siteName: 'Yurier Herrera Portfolio'
  }
})