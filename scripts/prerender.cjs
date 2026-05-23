const fs = require("fs");
const path = require("path");

const distDir = path.resolve(__dirname, "../dist/client");
const serverPath = path.resolve(__dirname, "../dist/server/index.js");

async function prerender() {
  const server = require(serverPath);
  const handler = server.default;

  const routes = [
    { url: "http://localhost/Framework_Governanca_de_IA/", path: "index.html" },
    { url: "http://localhost/Framework_Governanca_de_IA/framework", path: "framework/index.html" },
    { url: "http://localhost/Framework_Governanca_de_IA/guia", path: "guia/index.html" },
    { url: "http://localhost/Framework_Governanca_de_IA/checklist", path: "checklist/index.html" },
  ];

  for (const route of routes) {
    const request = new Request(route.url);
    const response = await handler.fetch(request, {}, {});
    const html = await response.text();

    const filePath = path.join(distDir, route.path);
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, html);
    console.log(`Prerendered: ${route.path} (${html.length} bytes)`);
  }

  console.log("Prerender concluído com sucesso!");
}

prerender().catch((err) => {
  console.error("Erro no prerender:", err);
  process.exit(1);
});
