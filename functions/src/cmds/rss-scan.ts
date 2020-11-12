import { fromUrl } from "../rss";

export default async ([url]: Array<string>) => {
  console.log(await fromUrl(url));
};
