## [0.0.4] - 2016-02-11
### Changes
- renamed `src/` to `app/`
- renamed `test/` to `tests/`
- renamed `build/` to `dist`

### Migration from 0.0.3
* Rename `src/` to `app/`
* Rename `test/` to `tests/`
* Rename `build/` to `dist/`
* In `tests/app-test.js`, change `import app from '../src/app'` to `import app from '../app/app'`
* In `package.json`
  * change `"main": "build/bundle.js"` to `"main": "dist/bundle.js"`
  * change `"jsnext:main": "src/app.js"` to `"jsnext:main": "app/app.js"`
  * change `"lint": "standard src/**/*.js test/**/*.js",` to `"lint": "standard app/**/*.js tests/**/*.js"`
  * change `"clean": "rm -rf build"` to `"clean": "rm -rf dist"`
  * in library projects, change `"test": "mocha test/**/*.js --compilers js:babel-core/register"` to `"test": "mocha tests --compilers js:babel-core/register"`
  * change `"docs": "rm -rf docs && jsdoc src -r -d docs"` to `"docs": "rm -rf docs && jsdoc app -r -d docs"`
* Rename `test/index-test.js` to `test/app-test.js`
* In `test/app-test.js` change `import index from '../src/index'` to `import app from '../src/app'`
* In webpack configurations
  * change `'./src/app'` to `'./app/app`
  * change references to `build` to `dist`

## [0.0.3] - 2016-02-11
### Changes
- renamed `src/index.js` to `src/app.js`

### Migration from 0.0.2
* Rename `src/index.js` to `src/app.js`
* Rename `test/index-test.js` to `test/app-test.js`
* In `test/app-test.js` change `import index from '../src/index'` to `import app from '../src/app'`
* In webpack configuration, change `'./src/index'` to `'./src/app`
* In package.json, change `"jsnext:main": "src/index.js"` to `"jsnext:main": "src/app.js"`


## [0.0.2] - 2016-02-07
### Added
- Base webpack configuration for web projects. This is used to avoid copying configuration between dev and prod
- dev script to library projects. Will watch for changes and run tests

## [0.0.1] - 2016-02-07
### Added
- Library project
- Web Project
