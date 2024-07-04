import { read, parse } from "/lib/utils.js";

const about = Object.assign(document.createElement("article"), {
    innerHTML: parse(await read("/assets/about.md"), "md"),
});

export default about;
