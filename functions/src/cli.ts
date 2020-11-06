#!/usr/bin/env node

const command = process.argv[2] || "";
const argv = process.argv.slice(3);

interface Command {
  default(args: Array<string>): any;
}

try {
  import("./cmds/".concat(command.split(" ").join("/")))
    .then((command: Command) => command.default(argv))
    .catch(console.error);
} catch (e) {
  console.error(e);
}
