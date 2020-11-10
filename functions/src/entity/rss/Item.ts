interface XmlItem {
  guid?: string;
  title?: string;
  description?: string;
  link?: string;
}

export { XmlItem };

class Item {
  public guid: string;
  public title: string;
  public link: string;
  public description: string;

  constructor(item: XmlItem) {
    this.guid = item.guid || item.link || "";
    this.title = item.title || item.description || "";
    this.link = item.link || "";
    this.description = item.description || "";
  }
}

export default Item;
