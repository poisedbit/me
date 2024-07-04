const home = Object.assign(document.createElement("article"), {
    innerHTML: `
        <section>
            <h2><a href="/intro">intro/</a></h2>
        </section>
        <section>
            <a href="/blog"><h2>blog/</a></h2>
        </section>
        <section>
            <h2><a href="/portfolio">portfolio/</a></h2>
        </section>
        <section>
            <h2><a href="/about">about/</a></h2>
        </section>
`,
});

export default home;
