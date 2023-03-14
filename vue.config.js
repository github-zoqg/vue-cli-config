const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')

console.log(process.argv,'process.argv')
const options = require('minimist')(process.argv.slice(2))
console.log(options.mode,'options')
console.log(defineConfig(),'defineConfig')

fs.writeFile('config.txt','defineConfig().toString()',(err)=>{
  if(err){
    return console.log(err)
  }
  console.log('写入config.txt成功')
})

module.exports = defineConfig({
  transpileDependencies: true
})
