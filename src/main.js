import error from "./routes/error.js";
import intro from "./routes/intro.js";
import home from "./routes/home.js";

function main() {
    const app = document.getElementById("app");
    _init_router(
        {
            "/": home,
            "/intro": intro,
            "/error": error,
        },
        app
    );
}

function _init_router(routes, container) {
    const path = location.pathname ?? "/";

    if (!routes[path]) {
        location.replace("/error");
    }

    container.appendChild(routes[path]);
}

main();
