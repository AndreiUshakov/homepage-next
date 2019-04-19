const { isDev, ghost } = require('./server/config');
const siteUrl = 'https://new-landing.dlg.im';

module.exports = {
  siteMetadata: {
    siteUrl,
  },
  proxy: isDev
    ? {
        prefix: '/api/v1',
        url: 'http://127.0.0.1:3010',
      }
    : undefined,
  plugins: [
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-M3KJBNM',
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1326090010797850',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'dialog — коммуникационная платформа для компаний',
        short_name: 'dlg.im',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#b9bbfa',
        display: 'standalone',
        icon: 'static/images/icon.png',
        include_favicon: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        policy: [{ userAgent: '*', disallow: ['/'] }],
      },
    },
    {
      resolve: 'gatsby-plugin-express',
      options: {
        output: 'server/gatsby-express.json',
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Layout`),
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-nested'),
          require('postcss-custom-media'),
          require('postcss-preset-env')({
            features: {
              'color-mod-function': true,
            },
          }),
        ],
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: ghost.endpoint,
        contentApiKey: ghost.apiKey,
      },
    },
  ],
};
