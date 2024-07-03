export async function read(path) {
    // const ext = path.match(/[^.]+$/)[0];
    const res = await fetch(path);

    if (res.headers.get("content-type") === "application/json") {
        return res.json();
    }

    return res.text();
}

export function parse(payload, ext) {
    switch (ext) {
        case "md":
            return payload
                .replace(/^# (.*?$)/gm, "<h1>$1</h1>")
                .replace(/^## (.*?$)/gm, "<h2>$1</h2>")
                .replace(/^(?!<).+/gm, `<p>$&</p>`)
                .replace(/\[(.*?)\]\((.*?)\)/gm, '<a href="$2">$1</a>')
                .trim();
        default:
            return payload;
    }
}
