const nav = Object.assign(document.createElement("nav"), {
    innerHTML: `
            <a href="/">/</a>
            <a href="/intro">intro</a>
            <a href="/blog">blog</a>
            <a href="/portfolio">portfolio</a>
            <a href="/about">about</a>
`,
});

export default nav;
