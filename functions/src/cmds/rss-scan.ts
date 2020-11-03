// import { Argv } from "yargs";

export default {
  command: "scan-rss <url>",
  desc: "Scan a RSS file to a JSON structure",

  builder: (yargs: any) => yargs.positional("url"),
  handler: () => console.log("noing?")
};
