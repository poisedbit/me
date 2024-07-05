import { read } from "/lib/utils.js";

const KEY = "portfolio";

export default async function portfolio() {
    const links = (await read("/assets/repos.txt"))
        .trim()
        .split(/[\r\n]/)
        .reverse();
    let repos = JSON.parse(localStorage.getItem(KEY));

    if (
        !repos ||
        links.length !== repos.length ||
        new Date().getDate() === 30
    ) {
        repos = [];
        for (let i = 0; i < links.length; i++) {
            const data = JSON.parse(await read(links[i]));
            repos[i] = {
                name: data.name,
                desc: data.description,
                href: data.html_url,
                last_push: data.pushed_at,
            };
        }

        localStorage.setItem(KEY, JSON.stringify(repos));
    }

    return Object.assign(document.createElement("article"), {
        innerHTML: `
            <table border="5">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>description</th>
                        <th>last push</th>
                    </tr>
                </thead>
                <tbody> ${repos
                    .map(
                        val => `    
                            <tr>
                                <td>
                                    <a href="${val.href}" target="_blank">
                                        ${val.name}
                                    </a>
                                </td>
                                <td>${val.desc}</td>
                                <td>${val.last_push}</td>
                            </tr>
                        `
                    )
                    .join("")}
                </tbody>
            </table>
        `,
    });
}
