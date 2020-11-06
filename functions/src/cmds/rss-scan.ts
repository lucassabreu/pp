import * as http from "http";
import * as https from "https";

export default ([url]: Array<string>) => {
  const htt = url.startsWith("https") ? https : http;
};
