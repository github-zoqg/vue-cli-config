const { defineConfig } = require("@vue/cli-service");
const fs = require("fs");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

console.log(process.argv, "process.argv");
const options = require("minimist")(process.argv.slice(2));
console.log(options.mode, "options");
console.log(defineConfig(), "defineConfig");

// fs.writeFile("config.txt", "defineConfig().toString()", (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("写入config.txt成功");
// });

module.exports = defineConfig({
  transpileDependencies: true,
  // assetsDir: "static",
  // configureWebpack: {
  //   plugins: [
  //     new CopyWebpackPlugin({
  //       patterns: [
  //         {
  //           from: path.resolve(__dirname, "./static"), //我复制的是static文件夹
  //           to: path.resolve(__dirname, "./dist/static"), //这是复制到打包后的dist文件夹下的static目录下
  //         },
  //       ],
  //     }),
  //   ],
  // },
});
