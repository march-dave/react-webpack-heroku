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
[Actuall Link]
(https://react-webpack-heroku.herokuapp.com/)

## Inspiration

[Detailed explanation about the setup](http://ditrospecta.com/javascript/react/es6/webpack/heroku/2015/08/08/deploying-react-webpack-heroku.html).


## Issue 
- folder /server is not working with project at this time but created and sub files
- Not working the babel package build script -- "build": "cross-env NODE_ENV=production babel server --out-dir public --presets=es2015 &&  webpack --config ./webpack.prod.config.js --progress --colors",
- webpack 2 is not compability with webpack 1