import { parse } from "fast-xml-parser";
import * as he from "he";
import { RSS } from "./dto";

export default (text: string): RSS => {
  const xml = parse(text, {
    attributeNamePrefix: "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName: "#text",
    ignoreAttributes: false,
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
  });
  return new RSS(xml);
};
