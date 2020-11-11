interface XmlCDATA {
  __cdata?: string;
}

interface XmlItem {
  guid?: string;
  title?: string;
  pubDate: string;
  enclosure?: string;
  description?: XmlCDATA | string | null;
  link?: string;
}

export { XmlItem };

class Item {
  public guid: string;
  public title: string;
  public link: string;
  public pubDate: Date;
  public description: string;

  constructor(item: XmlItem) {
    this.guid = item.guid || item.link || "";
    this.description =
      typeof item.description == "object"
        ? (item.description || {}).__cdata || ""
        : item.description || "";
    this.title = item.title || this.description;
    this.link = item.link || "";
    this.pubDate = new Date();
    this.pubDate.setTime(Date.parse(item.pubDate));
  }
}

export default Item;
