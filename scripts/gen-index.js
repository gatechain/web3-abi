const fs = require("fs");
const path = require("path");
const basePath = "../src/base";
function main() {
  console.log("开始生成index.ts");
  var srcDir = fs.readdirSync(path.join(__dirname, basePath));

  let export_string = ``;

  srcDir.forEach((file_name) => {
    const _name = path.parse(file_name).name;
    export_string += `export * from './${_name}';\n`;
  });

  console.log(export_string);
  fs.writeFileSync(path.join(__dirname, basePath, "index.ts"), export_string);
  console.log("index.ts写入完成");
}

main();
