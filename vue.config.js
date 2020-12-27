const { dir } = require("console")
const { url } = require("inspector")
const path = require("path")

let resolve = dir =>  path.join(__dirname,dir)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@",resolve("src"))
      .set("@components", resolve("src/components"))
      .set("@pages",resolve("src/pages"))
  }
} 