# JavaScript Project Generator

A command line tool to create new JavaScript projects.

## Goals

The main goal is to create a standard JavaScript project structure. Creating a JavaScript project is a lot of times filled with impedances on which tools to use and how to structure a project. In this way, jspg is an attempt to remove these impedances. Moving from project to project will be easier as well. You will learning the code and not how to run the project. Customization within the contraints of the project is a goal here as well. For example, if you want to use a different linter, install it and update the `lint` npm script definition. That way the tool changes, but the use of a linter in your project does not. Using a different tool should not have to alter the way you interact with your project.

## Inspiration

The main inspiration is [ember-cli](http://ember-cli.com/). I think the Ember team has done an excellent job on defining a consistent project structure and default tooling. I think the same experience should be brought to all JavaScript projects.

## Installation
`npm install -g jspg`

## Usage
`jspg <app_name>` - Creates a new JavaScript project. This is used for either creating a node or JavaScript library project
`jspg <app_name> -w` - Creates a new JavaScript web project. This is used for defining a frontend project

## Code
Designed so that you can write your code and tests in ES2015 JavaScript. `jsx` is allowed as well.

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
* `npm run dev`: In web projects this runs development server. For library projects, this watches for changes and runs tests
* `npm run clean`: cleans build folder
* `npm run test`: runs tests
* `npm run docs`: runs documentation generator

These are the defaults. If one wanted to change the tool used, the idea would be to:
1. Add the tool to the project
2. Update the existing npm script to use new tool (or create new npm script if new functionality)

This allows for the commands to stay consistent, but the functionality to change.

## Structure
The structure of projects is defined below:

* `src/` - The src folder. This is where you would write your code
* `src/index.js` - The entry point to your application.
* `src/<app_name>` - This would be where all of your other code would go. 
* `test/` - The test folder. All of your tests would go here
* `test/index-test.js` - An example test for `src/index.js`
* `.babelrc` - The babel configuration file
* `.gitignore`
* `package.json` - The project's package.json. This is also where the above npm scripts are defined.
* `build/` - Build ends up here when `npm run build` is executed. The files here would be what should be served or used for production
* `docs/` - Documentation ends up here when `npm run docs` is executed

Library projects include the following:
* `webpack.config.js` - The webpack configuration

Web projects include the following:
* `src/index.html` - The starting html page
* `src/<app_name>/styles.css` - The styles for your application
* `webpack.config.base.js` - The base webpack configuration. This is used to share configuration between dev and prod builds
* `webpack.config.dev.js` - The development webpack configuration. This includes a development server and hot code reload functionality
* `webpack.config.prod.js` - The production webpack configuration
