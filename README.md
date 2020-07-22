# gatsby-plugin-convert-com-js

A lightweight plugin to easily add [Convert.com JS snippet](https://support.convert.com/hc/en-us/articles/205151015) to your site.

## Install

- NPM: `$ npm install --save gatsby-plugin-convert-com-js`
- YARN: `$ yarn add gatsby-plugin-convert-com-js`

## How to use

### Setup

In your gatsby-config.js file:

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-convert-com-js`,
    options: {
      // The main tracking code can be found in the Project Settings in your convert.com project.
      projectId: `CONVERT_COM_PROJECT_ID`,
      // boolean (defaults to true); whether to load when the environment is not production
      requireProduction: true
    },
  },
];
```
