import err from "./err.js";
import intro from "./intro/index.js";
import portfolio from "./portfolio/index.js";
import nav from "/view/nav.js";

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
            <h2><a href="/contact">contact/</a></h2>
        </section>
`,
});

export default function init_router(container) {
    const routes = {
        "/": home,
        "/intro": intro,
        "/portfolio": portfolio,
    };
    const path = location.pathname ?? "/";
    container.append(
        path !== "/" && routes[path] ? nav : "",
        routes[path] ?? err
    );
}
