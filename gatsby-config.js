module.exports = {
  siteMetadata: {
    title: `Gatsby Portfolio demo`,
    description: `Clément clauzel porftolio :)`,
    author: `@atchuross`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inconsolata`,
          `Roboto Mono`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: `gatsby-source-mysql`,
    //   options: {
    //     connectionDetails: {
    //       host: 'db5002369762.hosting-data.io',
    //       user: 'dbu570415',
    //       password: 'Wuba-zrop-kgdu-9002',
    //       database: 'dbs1897837'
    //     },
    //     queries: [
    //       {
    //         statement: 'SELECT * FROM compétence',
    //         idFieldName: 'pourcentage',
    //         name: 'Pourcentage'
    //       }
    //     ]
    //   }
    // },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    'gatsby-plugin-page-load-delay',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
