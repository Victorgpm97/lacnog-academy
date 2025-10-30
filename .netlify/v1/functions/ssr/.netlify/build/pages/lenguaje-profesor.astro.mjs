import { c as createComponent, j as renderHead, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_YXMu3vp7.mjs';
import { L as LanguageSelector } from '../chunks/LanguageSelectorProfesor_CFBrPVxm.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrT-gNUn.mjs';
import { N as NavbarIsland } from '../chunks/NavbarIsland_BtooJ4LE.mjs';
export { renderers } from '../renderers.mjs';

const $$LenguajeProfesor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<head><meta charset="UTF-8"><title>Aprendizaje</title><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <body> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavbarIsland", NavbarIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NavbarIsland.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "LanguageSelector", LanguageSelector, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/LanguageSelectorProfesor.tsx", "client:component-export": "default" })} ` })} </body>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/lenguaje-profesor.astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/lenguaje-profesor.astro";
const $$url = "/lenguaje-profesor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LenguajeProfesor,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
