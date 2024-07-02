import { read } from "/lib/utils.js";

const intro = Object.assign(document.createElement("article"), {
    innerHTML: (text => {
        return text
            .replace(/^# (.*?$)/gm, "<h1>$1</h1>")
            .replace(/^## (.*?$)/gm, "<h2>$1</h2>")
            .replace(/^(?!<).+/gm, `<p>$&</p>`)
            .replace(/\[(.*?)\]\((.*?)\)/gm, '<a href="$2">$1</a>')
            .trim();
    })(await read("/assets/intro.md")),
});

export default intro;
