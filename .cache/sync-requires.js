
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/producao/Documentos/casadaurca/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/producao/Documentos/casadaurca/src/pages/index.js")),
  "component---src-pages-sobre-js": preferDefault(require("/home/producao/Documentos/casadaurca/src/pages/sobre.js"))
}

