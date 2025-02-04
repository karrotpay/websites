import type { GatsbyConfig } from 'gatsby';

const repositoryName = 'karrot';
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

const config: GatsbyConfig = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName,
        accessToken,
        schemas: require('@karrotmarket/prismic-config/schema'),
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 100,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName,
        accessToken,
        toolbar: 'new',
      },
    },
  ],
};

export default config;
