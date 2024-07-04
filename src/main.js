import init_router from "./lib/router.js";

function main() {
    switch (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        case true:
            Object.assign(document.body, {
                bgColor: "#111111",
                text: "#eeeeee",
            });

            Object.assign(document, {
                linkColor: "#ffff11",
                alinkColor: "#aae574",
                vlinkColor: "#00ffff",
            });
            break;
        default:
            Object.assign(document.body, {
                bgColor: "#eeeeee",
                text: "#111111",
            });
            break;
    }

    init_router(document.getElementById("app"));
}

main();
