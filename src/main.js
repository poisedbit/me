import error from "./routes/error.js";
import intro from "./routes/intro.js";
import home from "./routes/home.js";
import nav from "./view/nav.js";

function main() {
    const app = document.getElementById("app");
    _init_router(
        {
            "/": home,
            "/intro": intro,
        },
        app
    );
}

function _init_router(routes, container) {
    const path = location.pathname ?? "/";
    container.append(
        path !== "/" && routes[path] ? nav : "",
        routes[path] ?? error
    );
}

main();
