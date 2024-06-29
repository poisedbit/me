const home = Object.assign(document.createElement("article"), {
    className: "home",
    innerHTML: `
        <section class="home__intro">
            <h2><a href="/intro">intro</a></h2>
        </section>
        <section class="home__blog">
            <a href="/blog"><h2>blog</a></h2>
        </section>
        <section class="home__portfolio">
            <h2><a href="/portfolio">portfolio</a></h2>
        </section>
        <section class="home__contact">
            <h2><a href="/contact">contact</a></h2>
        </section>
`,
});

export default home;
