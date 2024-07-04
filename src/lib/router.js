import err from "/routes/err.js";
import home from "/routes/index.js";
import intro from "/routes/intro/index.js";
import portfolio from "/routes/portfolio/index.js";
import nav from "/view/nav.js";

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
