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
