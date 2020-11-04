module.exports = {
  title: '✈︎ dlopp.',
  domain: 'https://dlopp-docs.netlify.app',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      {
        text: 'More',
        items: [
          { text: 'Twitter', link: 'https://twitter.com/wucrea_dlopp'},
          { text: 'GitHub', link: 'https://github.com/dlopp'},
          { text: 'HP', link: 'https://dlopp.github.io'}
        ]
      }
    ],
  },
  plugins: {
    'seo': {
      description: ($page, $site) => $page.frontmatter.description || ($page.excerpt && $page.excerpt.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")) || $site.description || "",
      title: ($page, $site) => $page.title || $site.title,
      image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image) || 'https://i.gyazo.com/96879cdaad2e8524dce6252ec6270162.jpg',
    }
  },
}