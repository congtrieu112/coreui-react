/* eslint-disable @typescript-eslint/no-var-requires */
const pkg = require(`./package.json`)

module.exports = {
  pathPrefix: `react/docs/${pkg.config.version_short}/`,
  siteMetadata: {
    title: `CoreUI for React.js`,
    titleTemplate: `%s · React UI Components · CoreUI `,
    description: `CoreUI for React.js is UI Component library written in TypeScript, and ready for your next React.js project.`,
    url: `https://coreui.io/react/docs/${pkg.config.version_short}/`,
    siteUrl: `https://coreui.io/react/docs/${pkg.config.version_short}/`,
    image: ``, // Path to your image you placed in the `static` folder
    twitterUsername: `@coreui_io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/src/docs/assets/images/brand/icon.png`,
        name: `CoreUI for React.js`,
        short_name: `CoreUI for React.js`,
        start_url: `https://coreui.io/react/`,
        background_color: `#fff`,
        theme_color: `#321fdb`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          docs: require.resolve(`./src/docs/templates/Docs.tsx`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: require.resolve(`./src/docs/plugins/gatsby-remark-import-markdown`),
            options: {
              directory: `${__dirname}/docs/${pkg.config.version_short}/api/`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-link`,
              icon: `<span>#</span>`,
              isIconAfterHeader: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs/${pkg.config.version_short}/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap-react.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          `UA-118965717-1`, // Google Analytics / GA
        ],
      },
    },
  ],
}
