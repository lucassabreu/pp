import fetch from "node-fetch";
import { parse } from "fast-xml-parser";
import * as he from "he";
import { RSS } from "../entity/rss";

export default async ([url]: Array<string>) => {
  const response = await fetch(url);

  const options = {
    attributeNamePrefix: "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName: "#text",
    ignoreAttributes: true,
    ignoreNameSpace: false,
    allowBooleanAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val: any, attrName: string) =>
      he.decode(val, { isAttributeValue: true }), //default is a=>a
    tagValueProcessor: (val: any, tagName: string) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"]
  };
  const xml = parse(await response.text(), options);
  console.log(JSON.stringify({ xml, rss: new RSS(xml) }));
};
