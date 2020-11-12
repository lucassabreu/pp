interface XmlCDATA {
  __cdata?: string;
}

interface XmlEnclosure {
  attr: {
    ["@_url"]: string;
    ["@_type"]: string;
  };
}

interface XmlItem {
  guid?: { ["#text"]: string } | string;
  title?: string;
  pubDate: string;
  enclosure?: XmlEnclosure;
  description?: XmlCDATA | string | null;
  ["content:encoded"]?: XmlCDATA | string | null;
  link?: string;
  ["itunes:duration"]: string | null;
}

export { XmlItem };

const extractCDATA = (node: XmlCDATA | string | null): string =>
  typeof node == "object" ? (node || {}).__cdata || "" : node || "";

class Item {
  public guid: string;
  public title: string;
  public link: string;
  public pubDate: Date;
  public description: string;
  public duration: string | null;
  public audioUrl: null | string;
  public audioType: null | string;

  constructor(item: XmlItem) {
    this.link = item.link || "";
    this.title = item.title || this.link;

    const guid =
      typeof item.guid == "string"
        ? item.guid
        : item.guid
        ? item.guid["#text"]
        : "";

    this.guid = guid || this.link || this.title;
    this.description =
      extractCDATA(item["content:encoded"] || null) ||
      extractCDATA(item.description || null);

    this.pubDate = new Date();
    this.pubDate.setTime(Date.parse(item.pubDate));
    this.duration = item["itunes:duration"] || null;

    if (!item.enclosure) {
      this.audioUrl = null;
      this.audioType = null;
      return;
    }

    this.audioUrl = item.enclosure.attr["@_url"];
    this.audioType = item.enclosure.attr["@_type"];
  }
}

export default Item;
