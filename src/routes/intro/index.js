import { read, parse } from "/lib/utils.js";

export default async function Intro() {
    return Object.assign(document.createElement("article"), {
        innerHTML: parse(await read("/assets/intro.md"), "md"),
    });
}
