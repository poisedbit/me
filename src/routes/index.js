export default function Root() {
    return Object.assign(document.createElement("article"), {
        innerHTML: `
            <h2><a href="/intro">intro/</a></h2>
            <h2><a href="/blog">blog/</a></h2>
            <h2><a href="/portfolio">portfolio/</a></h2>
            <h2><a href="/about">about/</a></h2>
        `,
    });
}
