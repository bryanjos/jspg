var path = require('path')
var fs = require('fs')

function create (app_path, isWebProject) {
  var app_name = path.basename(app_path)
  app_path = app_path.charAt(app_path.length - 1) === "/" ? app_path.substring(0, app_path.length - 1) : app_path

  fs.mkdirSync(app_path)
  fs.mkdirSync(app_path + "/src")
  fs.mkdirSync(app_path + "/src/" + app_name)
  fs.mkdirSync(app_path + "/test")

  var gitignore_template = fs.readFileSync(__dirname + '/templates/.gitignore.template', 'utf8')
  fs.writeFileSync(app_path + "/.gitignore", gitignore_template)

  var babelrc_template = fs.readFileSync(__dirname + '/templates/.babelrc.template', 'utf8')
  fs.writeFileSync(app_path + "/.babelrc", babelrc_template)

  var index_template = fs.readFileSync(__dirname + '/templates/index.js.template', 'utf8')

  if(isWebProject){
    index_template = index_template.replace("{{style}}", "require('./" + app_name + "/styles.css')\nif (process.env.NODE_ENV !== 'production') { require('./index.html') }")
  }else{
    index_template = index_template.replace("{{style}}", "")
  }

  fs.writeFileSync(app_path + "/src/index.js", index_template)

  var index_test_template = fs.readFileSync(__dirname + '/templates/index-test.js.template', 'utf8')
  fs.writeFileSync(app_path + "/test/index-test.js", index_test_template)


  if(isWebProject){

    var package_json_template = fs.readFileSync(__dirname + '/templates/web/package.json.template', 'utf8')
    package_json_template = package_json_template.replace("{{app_name}}", app_name)
    fs.writeFileSync(app_path + "/package.json", package_json_template)

    var webpack_dev_template = fs.readFileSync(__dirname + '/templates/web/webpack.config.dev.js.template', 'utf8')
    fs.writeFileSync(app_path + "/webpack.config.dev.js", webpack_dev_template)

    var webpack_prod_template = fs.readFileSync(__dirname + '/templates/web/webpack.config.prod.js.template', 'utf8')
    fs.writeFileSync(app_path + "/webpack.config.prod.js", webpack_prod_template)

    var index_html_template = fs.readFileSync(__dirname + '/templates/web/index.html.template', 'utf8')
    index_html_template = index_html_template.replace("{{app_name}}", app_name)
    fs.writeFileSync(app_path + "/src/index.html", index_html_template)

    var styles_template = fs.readFileSync(__dirname + '/templates/web/styles.css.template', 'utf8')
    fs.writeFileSync(app_path + "/src/" + app_name + "/styles.css", styles_template)


  }else{

    var package_json_template = fs.readFileSync(__dirname + '/templates/node/package.json.template', 'utf8')
    package_json_template = package_json_template.replace("{{app_name}}", app_name)
    fs.writeFileSync(app_path + "/package.json", package_json_template)


    var webpack_template = fs.readFileSync(__dirname + '/templates/node/webpack.config.js.template', 'utf8')
    fs.writeFileSync(app_path + "/webpack.config.js", webpack_template)

  }
}

module.exports = {
  create: create
}
