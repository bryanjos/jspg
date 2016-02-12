var path = require('path')
var fs = require('fs')

function create (app_path, isWebProject) {
  var app_name = path.basename(app_path)
  app_path = app_path.charAt(app_path.length - 1) === "/" ? app_path.substring(0, app_path.length - 1) : app_path

  fs.mkdirSync(app_path)
  fs.mkdirSync(app_path + "/app")
  fs.mkdirSync(app_path + "/app/" + app_name)
  fs.mkdirSync(app_path + "/tests")

  var gitignore_template = fs.readFileSync(__dirname + '/templates/.gitignore.template', 'utf8')
  fs.writeFileSync(app_path + "/.gitignore", gitignore_template)

  var babelrc_template = fs.readFileSync(__dirname + '/templates/.babelrc.template', 'utf8')
  fs.writeFileSync(app_path + "/.babelrc", babelrc_template)

  var app_template = fs.readFileSync(__dirname + '/templates/app.js.template', 'utf8')

  if(isWebProject){
    app_template = app_template.replace("{{style}}", "require('./" + app_name + "/styles.css')\nif (process.env.NODE_ENV !== 'production') { require('./index.html') }")
  }else{
    app_template = app_template.replace("{{style}}", "")
  }

  fs.writeFileSync(app_path + "/app/app.js", app_template)

  var app_test_template = fs.readFileSync(__dirname + '/templates/app-test.js.template', 'utf8')
  fs.writeFileSync(app_path + "/tests/app-test.js", app_test_template)


  if(isWebProject){

    var package_json_template = fs.readFileSync(__dirname + '/templates/web/package.json.template', 'utf8')
    package_json_template = package_json_template.replace("{{app_name}}", app_name)
    fs.writeFileSync(app_path + "/package.json", package_json_template)

    var webpack_base_template = fs.readFileSync(__dirname + '/templates/web/webpack.config.base.js.template', 'utf8')
    fs.writeFileSync(app_path + "/webpack.config.base.js", webpack_base_template)

    var webpack_dev_template = fs.readFileSync(__dirname + '/templates/web/webpack.config.dev.js.template', 'utf8')
    fs.writeFileSync(app_path + "/webpack.config.dev.js", webpack_dev_template)

    var webpack_prod_template = fs.readFileSync(__dirname + '/templates/web/webpack.config.prod.js.template', 'utf8')
    fs.writeFileSync(app_path + "/webpack.config.prod.js", webpack_prod_template)

    var index_html_template = fs.readFileSync(__dirname + '/templates/web/index.html.template', 'utf8')
    index_html_template = index_html_template.replace("{{app_name}}", app_name)
    fs.writeFileSync(app_path + "/app/index.html", index_html_template)

    var styles_template = fs.readFileSync(__dirname + '/templates/web/styles.css.template', 'utf8')
    fs.writeFileSync(app_path + "/app/" + app_name + "/styles.css", styles_template)


  }else{

    var package_json_template = fs.readFileSync(__dirname + '/templates/node/package.json.template', 'utf8')
    package_json_template = package_json_template.replace("{{app_name}}", app_name)
    fs.writeFileSync(app_path + "/package.json", package_json_template)


    var webpack_template = fs.readFileSync(__dirname + '/templates/node/webpack.config.js.template', 'utf8')
    fs.writeFileSync(app_path + "/webpack.config.js", webpack_template)

  }

  console.log("Project created at " + path.resolve(app_path))
  console.log("Make sure to run 'npm install'")
}

module.exports = {
  create: create
}
