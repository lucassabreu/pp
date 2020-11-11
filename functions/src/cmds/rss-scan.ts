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
    cdataTagName: "__cdata",
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val: any) =>
      he.decode(val, { isAttributeValue: true }),
    tagValueProcessor: (val: any) => he.decode(val),
    stopNodes: ["parse-me-as-string"]
  };
  const xml = parse(await response.text(), options);
  console.log(
    JSON.stringify({ item: xml.rss.channel.item.pop(), rss: new RSS(xml) })
  );
};
