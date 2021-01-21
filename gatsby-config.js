module.exports = {
  siteMetadata: {
    title: `Gatsby Starter with Ts and MUI`,
    description: `This is gatsby starter with typescript and material ui`,
    // siteUrl: "",
    author: `@inrosk`,
  },
  plugins: [
    `gatsby-theme-material-ui-top-layout`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Poppins`,
                variants: [`300`, `400`, `500`, `600`, `700`],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
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
        icon: `src/data/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "YOUR_GOOGLE_TAGMANAGER_ID",

        includeInDevelopment: false,
      },
    },

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },

    // {
    //   resolve: "gatsby-plugin-sitemap",
    // },
    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     host: "https://intequa.ca",
    //     sitemap: "https://intequa.ca/sitemap.xml",
    //     policy: [{ userAgent: "*", allow: "/" }],
    //   },
    // },
    // gatsby-plugin-sitemap
    //gatsby-plugin-robots-txt

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
