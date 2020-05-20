module.exports = {
  siteMetadata: {
    title: `Michal Hromas | Web Developer & Designer`,
    description: `Welcome to Michal Hromas' portfolio site, web developer & designer`,
    author: `Michal Hromas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Michal Hromas' Portfolio`,
        short_name: `Hromas`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FECB2F`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `cs`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
  ],
}
