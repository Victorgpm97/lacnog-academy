import { c as createComponent, m as maybeRenderHead, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_YXMu3vp7.mjs';
import { N as NavbarIsland } from '../chunks/NavbarIsland_BtooJ4LE.mjs';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_CrT-gNUn.mjs';
export { renderers } from '../renderers.mjs';

const $$Profesor$1 = createComponent(($$result, $$props, $$slots) => {
  const modules = [
    "Dise\xF1o de rutas de aprendizaje",
    "Evaluaci\xF3n formativa y retroalimentaci\xF3n",
    "Creaci\xF3n de contenido interactivo",
    "Gesti\xF3n de grupos y progreso",
    "Accesibilidad y diversidad en ense\xF1anza"
  ];
  const stats = {
    estudiantesActivos: 128,
    grupos: 5,
    progresoPromedio: "72%"
  };
  return renderTemplate`${maybeRenderHead()}<div class="max-w-5xl mx-auto px-6 py-12 space-y-10"> <h1 class="text-3xl font-bold text-center text-[#FEA723]">
Panel del Profesor
</h1> <section class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"> <div class="bg-white shadow rounded-lg p-4"> <h2 class="text-xl font-semibold text-[#323232]">Estudiantes activos</h2> <p class="text-2xl font-bold text-[#FEA723]">${stats.estudiantesActivos}</p> </div> <div class="bg-white shadow rounded-lg p-4"> <h2 class="text-xl font-semibold text-[#323232]">Grupos</h2> <p class="text-2xl font-bold text-[#FEA723]">${stats.grupos}</p> </div> <div class="bg-white shadow rounded-lg p-4"> <h2 class="text-xl font-semibold text-[#323232]">Progreso promedio</h2> <p class="text-2xl font-bold text-[#FEA723]">${stats.progresoPromedio}</p> </div> </section> <section class="space-y-4"> <h2 class="text-xl font-semibold">Módulos disponibles</h2> <ul class="list-disc list-inside text-gray-700 space-y-2"> ${modules.map((modulo) => renderTemplate`<li>${modulo}</li>`)} </ul> </section> <div class="text-center pt-8"> <a href="/learning" class="text-[#0078D4] hover:underline text-sm">
← Volver al inicio
</a> </div> </div>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/profesor.astro", void 0);

const $$Profesor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <meta charset="UTF-8"> <title>Aprendizaje</title> </header> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavbarIsland", NavbarIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NavbarIsland", "client:component-export": "default" })} ${renderComponent($$result2, "Profesors", $$Profesor$1, {})} ` })}`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/profesor.astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/profesor.astro";
const $$url = "/profesor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profesor,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
