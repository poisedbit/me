import home from "./routes/home.js";

function main() {
    const app = document.getElementById("app");
    _init_router(
        {
            "/": home,
        },
        app
    );
}

function _init_router(routes, container) {
    const path = document.location.pathname ?? "/";
    container.appendChild(routes[path]);
}

main();
