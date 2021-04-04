module.exports = {
  title: '✈︎ dlopp.',
  domain: 'https://dlopp-docs.netlify.app',
  description: 'web開発プロジェクトdloppの資料置き場兼ブログです。',
  themeConfig: {
    sidebar: 'auto',
    lastUpdated: '最終更新日時',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blog', link: '/blog/' },
      {
        text: 'More',
        items: [
          { text: 'Twitter', link: 'https://twitter.com/wucrea_dlopp'},
          { text: 'GitHub', link: 'https://github.com/dlopp'},
        ]
      }
    ],
  },
  locales: {
    '/': {
      lang: 'ja',
    },
  },
  plugins: {
    '@vuepress/blog': {},
    '@vuepress/medium-zoom': {},
    'seo': {
      description: ($page, $site) => $page.frontmatter.description || ($page.excerpt && $page.excerpt.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")) || $site.description || "",
      title: ($page, $site) => $page.title || $site.title,
      image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image) || 'https://i.gyazo.com/2f4c109fe59f897e79885c0ac436c76e.png',
      twitterCard: _ => 'summary',
    },
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs')
        dayjs.locale(lang)
        return dayjs(timestamp).format('YYYY/MM/DD H時m分');
      },
    },
  },
}