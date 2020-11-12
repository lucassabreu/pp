import fetch from "node-fetch";
import { RSS } from "./dto";
import fromString from "./fromString";

export default async (url: string): Promise<RSS> => {
  const response = await fetch(url);
  return fromString(await response.text());
};
