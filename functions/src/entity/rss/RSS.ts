import Item, { XmlItem } from "./Item";

interface XmlImage {
  url?: string;
}

interface XmlChannel {
  title?: string;
  description?: string;
  link?: string;
  image?: XmlImage;
  item?: Array<XmlItem>;
}

interface Xml {
  rss: {
    channel: XmlChannel;
  };
}

class RSS {
  public title: string;
  public description: string;
  public link: string;
  public image: string;
  public items: Array<Item>;

  constructor(xml: Xml) {
    const {
      rss: { channel }
    } = xml;
    this.title = channel.title || "";
    this.description = channel.description || "";
    this.link = channel.link || "";
    this.image = (channel.image || {}).url || "";
    this.items = (channel.item || [])
      .map((i: XmlItem) => new Item(i))
      .sort((a: Item, b: Item) => (a.pubDate < b.pubDate ? -1 : 1));
  }
}

export default RSS;
