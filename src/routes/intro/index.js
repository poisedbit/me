import { read, parse } from "/lib/utils.js";

const intro = Object.assign(document.createElement("article"), {
    innerHTML: parse(await read("/assets/intro.md"), "md"),
});

export default intro;
