import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DLPHmqyr.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/academy/estudiante.astro.mjs');
const _page2 = () => import('./pages/academy/profesor.astro.mjs');
const _page3 = () => import('./pages/api/get-profile.astro.mjs');
const _page4 = () => import('./pages/api/login.astro.mjs');
const _page5 = () => import('./pages/api/post-profile.astro.mjs');
const _page6 = () => import('./pages/api/posts.astro.mjs');
const _page7 = () => import('./pages/api/register.astro.mjs');
const _page8 = () => import('./pages/blog.astro.mjs');
const _page9 = () => import('./pages/contents.astro.mjs');
const _page10 = () => import('./pages/crear-noticias.astro.mjs');
const _page11 = () => import('./pages/eventos/_id_.astro.mjs');
const _page12 = () => import('./pages/events.astro.mjs');
const _page13 = () => import('./pages/lenguaje-profesor.astro.mjs');
const _page14 = () => import('./pages/login.astro.mjs');
const _page15 = () => import('./pages/mis-cursos.astro.mjs');
const _page16 = () => import('./pages/noticias/_id_.astro.mjs');
const _page17 = () => import('./pages/noticias.astro.mjs');
const _page18 = () => import('./pages/profesor.astro.mjs');
const _page19 = () => import('./pages/register.astro.mjs');
const _page20 = () => import('./pages/ruta/_area_/_lang_.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/academy/estudiante.astro", _page1],
    ["src/pages/academy/profesor.astro", _page2],
    ["src/pages/api/get-profile.ts", _page3],
    ["src/pages/api/login.ts", _page4],
    ["src/pages/api/post-profile.ts", _page5],
    ["src/pages/api/posts.ts", _page6],
    ["src/pages/api/register.ts", _page7],
    ["src/pages/blog.astro", _page8],
    ["src/pages/contents.astro", _page9],
    ["src/pages/crear-noticias.astro", _page10],
    ["src/pages/eventos/[id].astro", _page11],
    ["src/pages/events.astro", _page12],
    ["src/pages/lenguaje-profesor.astro", _page13],
    ["src/pages/login.astro", _page14],
    ["src/pages/mis-cursos.astro", _page15],
    ["src/pages/noticias/[id].astro", _page16],
    ["src/pages/noticias.astro", _page17],
    ["src/pages/profesor.astro", _page18],
    ["src/pages/register.astro", _page19],
    ["src/pages/ruta/[area]/[lang].astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e76388ac-aa5a-4cb9-8684-eff0547aadb5"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
