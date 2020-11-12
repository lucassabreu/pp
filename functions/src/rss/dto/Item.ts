import extractText from "./extractText";
import XmlTextNode from "./XmlTextNode";

interface XmlEnclosure {
  attr: {
    ["@_url"]: string;
    ["@_type"]: string;
  };
}

interface XmlItem {
  guid?: XmlTextNode | string;
  title?: XmlTextNode | string;
  pubDate: XmlTextNode | string;
  enclosure?: XmlEnclosure;
  description?: XmlTextNode | string | null;
  ["content:encoded"]?: XmlTextNode | string | null;
  link?: XmlTextNode | string;
  ["itunes:duration"]: XmlTextNode | string | null;
}

export { XmlItem };

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
    this.link = extractText(item.link || null);
    this.title = extractText(item.title || null) || this.link;

    this.guid = extractText(item.guid || null) || this.link || this.title;
    this.description =
      extractText(item["content:encoded"] || null) ||
      extractText(item.description || null);

    this.pubDate = new Date();
    this.pubDate.setTime(Date.parse(extractText(item.pubDate)));
    this.duration = extractText(item["itunes:duration"] || null);

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
