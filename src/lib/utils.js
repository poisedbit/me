export async function read(path) {
    // const ext = path.match(/[^.]+$/)[0];
    const res = await fetch(path);
    const payload = await res.text();
    return payload;
}
