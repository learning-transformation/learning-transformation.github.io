module.exports = {
  trailingSlash: `always`,
  siteMetadata: {
    title: 'Learning Transformation',
    description: 'We are transforming the future of learning',
    keywords: 'learning,transformation,education,mentoring,technology,lx',
    lang: 'ja',
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Learning Transformation',
        icon: 'src/images/favicon.svg',
        short_name: 'Learning Transformation',
        start_url: '/',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl:
            'https://github.dev/learning-transformation/learning-transformation.github.io',
        },
        isSwitcherEnabled: false,
        titleType: 'prepend',  
      },
    },
  ],
};
