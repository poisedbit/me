const ROUTES = ["/", "/intro", "/portfolio", "/about"];

export default async function init_router(container) {
    const path = location.pathname;

    if (!ROUTES.includes(path)) {
        container.append(await use("/routes/err.js"));
        return;
    }

    container.append(
        path !== "/" ? await use("/view/nav.js") : "",
        await use(`/routes${path}/index.js`)
    );
}

async function use(path) {
    return (await import(path)).default();
}
