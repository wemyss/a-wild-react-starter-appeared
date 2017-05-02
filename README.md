# ES6 React, Redux, Router, Flow

A simple react setup with a few extra tools I enjoy using. Code structure is pretty standard.

***

### Features

- React + Redux + React Router
- Babel (env preset, css modules, flow errors, optimisations and hot loading)
- Flow (sprinkle in some type checking)
- Webpack 2 (basic dev & prod config, scss support)
- Express dev-server
- Eslint (airbnb + some opinions of my own)
- Devtools (redux-freeze, logger, devtools in chrome and more..)


### Structure

```
.
├── dist                  # output folder
├── src                   # client source
│   ├── actions           # redux actions
│   ├── components        # react components & css
│   ├── constants         # global/shared constants
│   ├── containers        # global containers
│   │   ├── App.js        # Example default view
│   │   └── Root.js       # bootstrap main app with store and history
│   ├── reducers          # redux reducers
│   ├── store             # store setup (dev & prod)
│   ├── styles            # css/scss styles
│   │   └── main.scss     # main scss file
│   ├── index.js          # entry file
│   └── routes.js         # react-router routes
├── devServer.js          # express dev-server w/ webpack
└── index.html            # main HTML page
```

### Usage

##### Getting Started:

1. Clone, fork or copy repo line by line.
2. Install dependencies with `yarn` or `npm`.
3. Run dev server with `yarn run dev`
4. Modify shit and watch magic happen

***

### Credits

Initially forked from [@tsaiDavid's](https://github.com/tsaiDavid/) project [simple-redux-boilerplate](https://github.com/tsaiDavid/simple-redux-boilerplate) so yeah, make sure to check that out. I simply threw out some things, changed up some of the structuring and styling, and added packages to help with development and improved the production build configurations.
