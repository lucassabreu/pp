import XmlTextNode from "./XmlTextNode";

export default (node: XmlTextNode | string | null): string =>
  !node
    ? ""
    : typeof node == "object"
    ? node.__cdata || node["#text"] || ""
    : node || "";
