require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Circle of Life Veterinary Clinic",
    titleTemplate: "%s · Circle of Life Veterinary Clinic",
    description:
      "Welcome to Circle of Life! This is the website of our FUTURE veterinary clinic headed by Dr. Lyra A. Ibong.",
    author: "Jejomar Dorongon",
    twitterUsername: "@jejomarss",
    image: "/imgcard.jpg",
    siteUrl: "https://circleoflife.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://circleoflife.netlify.app",
        sitemap: "https://circleoflife.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `lato\:300,400,700, 900`, // you can also specify font weights and styles
    //     ],
    //     display: "swap",
    //   },
    // },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")()],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
        tailwind: true,
        whitelistPatternsChildren: [
          /section/,
          /container/,
          /main/,
          /dark/,
          /footer/,
          /blog/,
          /each/,
          /sec/,
          /service/,
          /svg/,
          /btn/,
          /active/,
          /date/,
          /transition/,
          /link/,
          /paginate/,
          /form/,
        ],
      },
    },
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
  ],
}
