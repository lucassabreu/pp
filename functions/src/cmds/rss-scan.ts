import fetch from "node-fetch";
import { parse } from "fast-xml-parser";

export default async ([url]: Array<string>) => {
  const response = await fetch(url);
  const {
    rss: { channel }
  } = parse(await response.text());
  console.log(JSON.stringify(channel));
};
