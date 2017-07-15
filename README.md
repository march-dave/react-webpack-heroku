# React / Webpack / Heroku Starter Kit 

Heroku deployable app for React/Webpack web apps.


Running on development mode:
```
yarn start
```

Running to production mode:
```
yarn run build
yarn start
```

Before you deploy, make sure you generated your bundle through `yarn run build`.


## Link
[Actuall Link #1]
(https://react-webpack-heroku.herokuapp.com/)

[Actuall Link #2]
(https://safe-sea-58860.herokuapp.com/)

## Inspiration

[Detailed explanation about the setup](http://ditrospecta.com/javascript/react/es6/webpack/heroku/2015/08/08/deploying-react-webpack-heroku.html).


## Issue 
- folder /server is not working with project at this time but created and sub files
- Not working the babel package build script -- "build": "cross-env NODE_ENV=production babel server --out-dir public --presets=es2015 &&  webpack --config ./webpack.prod.config.js --progress --colors",
- webpack 3 with some WARNING in DedupePlugin


dev: cross-env NODE_ENV=dev webpack --config ./webpack.dev.config.js --progress --colors
prod: cross-env NODE_ENV=production webpack --config ./webpack.prod.config.js --progress --colors,