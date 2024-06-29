import error from "./routes/error.js";
import home from "./routes/home.js";

function main() {
    const app = document.getElementById("app");
    _init_router(
        {
            "/": home,
            "/error": error,
        },
        app
    );
}

function _init_router(routes, container) {
    const path = document.location.pathname ?? "/";

    if (!routes[path]) {
        history.replaceState("", "", "/error");
        container.appendChild(routes["/error"]);
        return;
    }

    container.appendChild(routes[path]);
}

main();
