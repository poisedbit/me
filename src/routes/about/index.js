import { read, parse } from "/lib/utils.js";

export default async function About() {
    return Object.assign(document.createElement("article"), {
        innerHTML: parse(await read("/assets/about.md"), "md"),
    });
}
