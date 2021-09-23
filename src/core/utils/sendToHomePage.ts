import { ServerResponse } from "http";

export default function sendToHomePage(res: ServerResponse) {
  res.statusCode = 302;
  res.setHeader("Location", "/?page=1");
  return { props: {} };
}
