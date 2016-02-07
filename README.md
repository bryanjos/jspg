# JavaScript Project Generator

A command line tool to create new JavaScript projects.

Attempts to create a standard JavaScript project structure and use existing JavaScript tools that allow flexibility beyond the default, yet allow for customizations to be made within the contraints of the default structure. This project allows for code and tests to be written in ES2015 JavaScript. 

## Installation
`npm install -g javascript-project-generator`

## Usage
`jsnew <app_name>` - Creates a new JavaScript project. This is used for either creating a node or JavaScript library project
`jsnew <app_name> -w` - Creates a new JavaScript web project. This is used for defining a frontend project

## Tools
This project by default uses standard, popular tools for:
* Linting: [standard](http://standardjs.com/)
* Building: [webpack](https://webpack.github.io/) Uses Babel-loader with `es2015` and `react` presets
* Testing: [mocha](https://mochajs.org/)
* Documentation: [jsdoc](http://usejsdoc.org)

## Scripts
Projects use npm to run scripts above:
* `npm run lint`: runs linter
* `npm run build`: runs builder
* `npm run dev`: *web projects only* runs development server
* `npm run clean`: cleans build folder
* `npm run test`: runs tests
* `npm run docs`: runs documentation generator

These are the defaults. If one wanted to change the tool used, the idea would be to:
1. Add the tool to the project
2. Update the existing npm script to use new tool (or create new npm script if new functionality)

This allows for the commands to stay the same, but the functionality to change.

## Structure
The structure of projects is defined below:

* `src/` - The src folder. This is where you would write your code
* `src/index.js` - The entry point to your application.
* `test/` - The test folder. All of your tests would go here
* `test/index-test.js` - An example test for `src/index.js`
* `.babelrc` - The babel configuration file
* `.gitignore`
* `package.json`
* `build/` - Build ends up here when `npm run build` is executed
* `docs/` - Documentation ends up here when `npm run docs` is executed

Library projects include the following:
* `webpack.config.js` - The webpack configuration

Web projects include the following:
* `src/index.html` - The starting html page
* `src/{{app_name}}/styles.css` - The styles for your application
* `webpack.config.dev.js` - The development webpack configuration
* `webpack.config.prod.js` - The production webpack configuration

Ideally, `src/index.js` is the entry point to your application. All other code would go in the root or a subdirectory of `src/{{app_name}}`.
