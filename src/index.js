var path = require('path')
var fs = require('fs')
var handlebars = require('handlebars')

function removeUnderscore (appPath) {
  if(appPath.charAt(appPath.length -1) === '/') {
    return appPath.substring(0, appPath.length - 1)
  }

  return appPath
}

function applyTemplate (inputPath, outputPath, data) {
  var data = data || {}
  var text = fs.readFileSync(inputPath, 'utf8')
  var template = handlebars.compile(text)
  var result = template(data)
  fs.writeFileSync(outputPath, result)
}

function create (appPath, isWebProject) {
  var appName = path.basename(appPath)
  appPath = removeUnderscore(appPath)

  fs.mkdirSync(appPath)
  fs.mkdirSync(appPath + "/app")
  fs.mkdirSync(appPath + "/app/" + appName)
  fs.mkdirSync(appPath + "/tests")

  applyTemplate(__dirname + '/templates/.gitignore', appPath + "/.gitignore")
  applyTemplate(__dirname + '/templates/.babelrc', appPath + "/.babelrc")
  applyTemplate(__dirname + '/templates/app-test.js', appPath + "/tests/app-test.js")

  if(isWebProject){

    var styleRequire = "require('./" + appName + "/styles.css')\nif (process.env.NODE_ENV !== 'production') { require('./index.html') }"

    applyTemplate(__dirname + '/templates/app.js', appPath + "/app/app.js", {"style": styleRequire})

    applyTemplate(__dirname + '/templates/web/package.json', appPath + "/package.json", {"appName": appName})
    applyTemplate(__dirname + '/templates/web/index.html', appPath + "/app/index.html", {"appName": appName})
    applyTemplate(__dirname + '/templates/web/styles.css', appPath + "/app/" + appName + "/styles.css")


    applyTemplate(__dirname + '/templates/web/webpack.config.base.js', appPath + "/webpack.config.base.js")
    applyTemplate(__dirname + '/templates/web/webpack.config.dev.js', appPath + "/webpack.config.dev.js")
    applyTemplate(__dirname + '/templates/web/webpack.config.prod.js', appPath + "/webpack.config.prod.js")

  }else{

    applyTemplate(__dirname + '/templates/app.js', appPath + "/app/app.js", {"style": ""})
    applyTemplate(__dirname + '/templates/node/package.json', appPath + "/package.json", {"appName": appName})
    applyTemplate(__dirname + '/templates/node/webpack.config.js', appPath + "/webpack.config.js")

  }

  console.log("Project created at " + path.resolve(appPath))
  console.log("Make sure to run 'npm install'")
}

module.exports = {
  create: create
}
