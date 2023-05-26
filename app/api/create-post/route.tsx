import { randomInt } from "crypto";
import * as fs from "fs";
import { NodeHtmlMarkdown } from "node-html-markdown";
export async function POST(req: Request) {
  const { value, passcode } = await req.json();
  const fd = fs.opendirSync('./content/blogs/')
  if (passcode === process.env.PASSCODE) {
    const md = NodeHtmlMarkdown.translate(value)
    fs.appendFileSync(fd.path + `${randomInt(15)}.md`, md);
    return new Response("created", {
      status: 201,
    });
  } else {
    return new Response("Forbiden", {
      status: 403,
    });
  }
}
