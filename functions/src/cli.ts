#!/usr/bin/env node

const command = process.argv[2] || "";
const argv = process.argv.slice(3);

console.log(process.argv)

try {
  require("./cmds/".concat(command.split(" ").join("/")))(argv);
} catch (e) {
  console.error(e);
}
