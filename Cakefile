fs = require 'fs'
path = require 'path'
{spawn, exec} = require 'child_process'


system = (command, args..., callback) ->
  proc = spawn command, args
  proc.stdout.pipe process.stdout
  proc.stderr.pipe process.stderr
  proc.on 'exit', (status) ->
    if status is 0
      callback() if callback
    else
      process.exit status

find = (dir, pattern = /.*/) ->
  fs.readdirSync dir
    .filter (file) ->
      file.match pattern
    .map (file) ->
      path.join dir, file

coffee =
  compile: (coffeescripts..., javascript, callback) ->
    stdout = fs.createWriteStream javascript
    cat_proc = spawn "cat", coffeescripts
    cat_proc.stdout.on 'data', (data) -> coffee_proc.stdin.write data
    cat_proc.stderr.on 'data', (data) -> console.err data
    cat_proc.on 'close', (status) ->
      if status is 0
        coffee_proc.stdin.end()
      else
        process.exit status
    coffee_proc = spawn "coffee", ["--compile", "--stdio"]
    coffee_proc.stdout.on 'data', (data) -> stdout.write data
    coffee_proc.stderr.on 'data', (data) -> console.err data
    coffee_proc.on 'close', (status) ->
      if status is 0
        stdout.end()
        callback() if callback
      else
        process.exit status

task 'build', 'Build everything', ->
  system "cake", "build:octicons", ->
    invoke 'build:less'
  invoke 'build:coffee'

task 'build:coffee', 'Build scripts', ->
  coffee.compile "src/config.coffee",
                 "src/data.coffee",
                 "src/elements.coffee",
                 "src/buttons.coffee",
                 "lib/buttons.js",
                 -> system "uglifyjs",
                           "--mangle",
                           "--source-map", "buttons.js.map",
                           "--output", "buttons.js",
                           "lib/buttons.js", ->
  coffee.compile "src/config.coffee",
                 "src/data.coffee",
                 "src/elements.coffee",
                 "src/main.coffee",
                 "lib/main.js",
                 -> system "uglifyjs",
                           "--mangle",
                           "--source-map", "assets/js/main.js.map",
                           "--source-map-root", "../../",
                           "--source-map-url", "main.js.map",
                           "--output", "assets/js/main.js",
                           "lib/main.js", ->
  system "coffee", "--compile", "--output", "lib/", "src/ie8.coffee", ->
    system "uglifyjs", "--mangle", "--output", "assets/js/ie8.js", "lib/ie8.js", ->

task 'build:less', 'Build stylesheets', ->
  find("assets/css/", /^(buttons|main)\.less$/i).forEach (file) ->
    system "lessc", "--compress", "--source-map", file, "#{file.replace /\.less$/i, '.css'}", ->

task 'build:octicons', 'Build octicons', ->
  system "phantomjs", "src/octicons/octicons.coffee", "assets/css/octicons.less", ->
  system "phantomjs", "src/octicons/lt-ie8.coffee", "assets/css/lt-ie8.css", ->

task 'clean', 'Cleanup everything', ->
  exec "rm assets/css/*.css{,.map} assets/css/octicons.less assets/js/*.js{,.map} lib/*.js buttons.js{,.map}"

task 'test', 'Test everything', ->
  system "cake", "clean", ->
    system "cake", "build", ->
      invoke 'test:recess'
      invoke 'test:mocha'

task 'test:recess', 'Test stylesheets', ->
  system.apply @, ["recess"].concat(find "assets/css/", /\.less$/i).concat ->

task 'test:mocha', 'Test scripts', ->
  system "mocha", "--compilers", "coffee:coffee-script/register", "test/*.coffee", ->
