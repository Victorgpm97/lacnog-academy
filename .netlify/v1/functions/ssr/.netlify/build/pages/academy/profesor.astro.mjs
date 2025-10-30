import { c as createComponent, m as maybeRenderHead, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_YXMu3vp7.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CrT-gNUn.mjs';
import { N as NavbarIsland } from '../../chunks/NavbarIsland_BtooJ4LE.mjs';
import { L as LanguageSelector } from '../../chunks/LanguageSelectorProfesor_CFBrPVxm.mjs';
export { renderers } from '../../renderers.mjs';

const $$Profesor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> ${maybeRenderHead()}<body> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavbarIsland", NavbarIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NavbarIsland.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "ProfesorSelector", LanguageSelector, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/LanguageSelectorProfesor", "client:component-export": "default" })} ` })} </body></html>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/academy/profesor.astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/academy/profesor.astro";
const $$url = "/academy/profesor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profesor,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
