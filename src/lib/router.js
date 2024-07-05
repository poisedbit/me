import Err from "/routes/err.js";
import Root from "/routes/index.js";
import About from "/routes/about/index.js";
import Intro from "/routes/intro/index.js";
import Portfolio from "/routes/portfolio/index.js";
import Nav from "/view/nav.js";

export default async function init_router(container) {
    const routes = {
        "/": Root,
        "/intro": Intro,
        "/portfolio": Portfolio,
        "/about": About,
    };
    const path = location.pathname ?? "/";

    container.append(
        path !== "/" && routes[path] ? Nav() : "",
        routes[path] ? await routes[path]() : Err()
    );
}
