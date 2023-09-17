const { transformSync } = require("@babel/core");

let code = `
console.log('123')
if (dev) {
    let a = 0
    console.log(a)
}`;

let babelConfig = {
  filename: "",
  plugins: ["./babel-plugin-dev-cons.js"],
};

let str = transformSync(code, babelConfig);
console.log(str.code);
