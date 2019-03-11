let traverse = require("babel-traverse").default;
var fs = require("fs");
let t = require('babel-types').default
fs.readFile('./src/code.js', function (err, data) {
  if (err) {
    return console.error(err);
  }
  var babylon = require('babylon')
  let code = data.toString()
  var result = babylon.parse(code, {
    sourceType: "module",
    plugins: [
      // enable jsx and flow syntax
      "jsx",
      "flow"
    ]
  })
  console.log('result', result)
  console.log('---')
  // traverse(result, {
  //   enter(node) {
  //     console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  //     console.log(node);
  //   }
  // });
  let generate = require('babel-generator').default

  var code1 = generate(result)
  console.log(code1.code)
});



