var path = require('path')
var fs = require('fs')

function create (app_path, isWebProject) {
  var app_name = path.basename(app_path)
  app_path = app_path.charAt(app_path.length - 1) === "/" ? app_path.substring(0, app_path.length - 1) : app_path
  var target = isWebProject ? "web" : "node"

  fs.mkdirSync(app_path)
  fs.mkdirSync(app_path + "/src")
  fs.mkdirSync(app_path + "/test")


  var package_json_template = fs.readFileSync(__dirname + '/templates/package.json.template', 'utf8')
  package_json_template = package_json_template.replace("{{app_name}}", app_name)
  fs.writeFileSync(app_path + "/package.json", package_json_template)

  var gitignore_template = fs.readFileSync(__dirname + '/templates/.gitignore.template', 'utf8')
  fs.writeFileSync(app_path + "/.gitignore", gitignore_template)

  var webpack_template = fs.readFileSync(__dirname + '/templates/webpack.config.js.template', 'utf8')
  webpack_template = webpack_template
    .replace("{{target}}", target)
  fs.writeFileSync(app_path + "/webpack.config.js", webpack_template)

  var babelrc_template = fs.readFileSync(__dirname + '/templates/.babelrc.template', 'utf8')
  fs.writeFileSync(app_path + "/.babelrc", babelrc_template)

  var index_template = fs.readFileSync(__dirname + '/templates/index.js.template', 'utf8')
  fs.writeFileSync(app_path + "/src/index.js", index_template)

  var index_test_template = fs.readFileSync(__dirname + '/templates/index-test.js.template', 'utf8')
  fs.writeFileSync(app_path + "/test/index-test.js", index_test_template)
}

module.exports = {
  create: create
}
