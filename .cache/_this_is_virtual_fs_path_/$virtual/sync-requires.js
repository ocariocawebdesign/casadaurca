
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---casa-da-urca-cache-dev-404-page-js": preferDefault(require("/home/producao/Documentos/casaDaUrca/.cache/dev-404-page.js")),
  "component---casa-da-urca-src-pages-index-js": preferDefault(require("/home/producao/Documentos/casaDaUrca/src/pages/index.js")),
  "component---casa-da-urca-src-pages-sobre-js": preferDefault(require("/home/producao/Documentos/casaDaUrca/src/pages/sobre.js"))
}

