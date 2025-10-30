import { c as createComponent, d as createAstro, j as renderHead, i as renderComponent, r as renderTemplate } from '../../../chunks/astro/server_YXMu3vp7.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { BookOpen, LayoutGrid, Settings } from 'lucide-react';
import { useState } from 'react';
import { $ as $$Layout } from '../../../chunks/Layout_CrT-gNUn.mjs';
import { N as NavbarIsland } from '../../../chunks/NavbarIsland_BtooJ4LE.mjs';
export { renderers } from '../../../renderers.mjs';

const menuItems = [
  { id: "my-courses", label: "Mis Cursos", icon: BookOpen, href: "/mis-cursos" },
  { id: "all-courses", label: "Todos los Cursos", icon: LayoutGrid, href: "/contents" },
  { id: "settings", label: "Ajustes", icon: Settings, href: "/ajustes" }
];
function Sidebar() {
  return /* @__PURE__ */ jsxs("aside", { className: "w-full md:w-64 bg-white border-r border-gray-200 shadow-sm", children: [
    /* @__PURE__ */ jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-[#FEA723]", children: "Mi Aprendizaje" }) }),
    /* @__PURE__ */ jsx("nav", { className: "space-y-2 px-2 py-4", children: menuItems.map(({ id, label, icon: Icon, href }) => /* @__PURE__ */ jsxs(
      "a",
      {
        href,
        className: "flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#F8FAFC] hover:text-[#FEA723] transition-colors font-medium",
        children: [
          /* @__PURE__ */ jsx(Icon, { size: 20 }),
          /* @__PURE__ */ jsx("span", { className: "whitespace-nowrap", children: label })
        ]
      },
      id
    )) })
  ] });
}

function CourseContent({ title, description, modules }) {
  const [completed, setCompleted] = useState([]);
  const handleLessonClick = (index) => {
    setCompleted((prev) => [.../* @__PURE__ */ new Set([...prev, index])]);
    alert(`Abriste el módulo: ${modules[index]}`);
  };
  const isModuleLocked = (index) => {
    if (index === 0) return false;
    return !completed.includes(index - 1);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-4xl mx-auto px-4 pt-8 pb-24 space-y-10", children: [
    /* @__PURE__ */ jsxs("header", { className: "space-y-4 border-b border-[#FEA723] pb-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-[#323232] tracking-tight", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-[#323232] text-base sm:text-lg leading-relaxed", children: description })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "space-y-6", children: modules.map((mod, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `border border-[#FEA723] rounded-2xl shadow-md bg-white px-4 py-6 ${index === modules.length - 1 ? "mb-8" : ""}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxs("h2", { className: "font-semibold text-[#FEA723] text-base sm:text-lg", children: [
              "Módulo ",
              index + 1,
              ": ",
              mod
            ] }),
            isModuleLocked(index) ? /* @__PURE__ */ jsx("span", { className: "text-red-500 text-sm", children: "🔒 Bloqueado" }) : completed.includes(index) ? /* @__PURE__ */ jsx("span", { className: "text-green-600 text-sm", children: "✅ Completado" }) : /* @__PURE__ */ jsx("span", { className: "text-blue-600 text-sm", children: "🟢 Disponible" })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleLessonClick(index),
              disabled: isModuleLocked(index),
              className: `w-full text-left px-4 py-3 rounded-lg border transition text-sm sm:text-base ${completed.includes(index) ? "bg-green-100 border-green-400" : "bg-white border-gray-300 hover:bg-gray-50"} ${isModuleLocked(index) ? "opacity-50 cursor-not-allowed" : ""}`,
              children: completed.includes(index) ? "Revisar módulo nuevamente" : "Abrir módulo"
            }
          )
        ]
      },
      index
    )) })
  ] });
}

const $$Astro = createAstro();
const $$lang = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$lang;
  const { area, lang } = Astro2.params;
  const courses = {
    fundamentals: {
      javascript: {
        title: "Fundamentals of Programming con JavaScript",
        description: "Aprende los conceptos b\xE1sicos de programaci\xF3n, desde variables hasta estructuras de control, aplicados con JavaScript.",
        modules: [
          "Introducci\xF3n a la programaci\xF3n",
          "Variables y tipos de datos",
          "Estructuras de control",
          "Funciones y m\xF3dulos",
          "Proyecto pr\xE1ctico"
        ]
      },
      python: {
        title: "Fundamentals of Programming con Python",
        description: "Descubre la programaci\xF3n con Python, ideal para principiantes y proyectos de ciencia de datos.",
        modules: [
          "Introducci\xF3n a Python",
          "Tipos de datos y colecciones",
          "Control de flujo",
          "Funciones y librer\xEDas",
          "Mini proyecto"
        ]
      }
    },
    algorithms: {},
    databases: {},
    networks: {},
    mobile: {},
    security: {},
    os: {}
  };
  const course = courses[area]?.[lang] ?? {
    title: "Curso no encontrado",
    description: "El \xE1rea o lenguaje seleccionado no tiene un curso disponible a\xFAn.",
    modules: []
  };
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><title>${course.title}</title><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <body> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavbarIsland", NavbarIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NavbarIsland", "client:component-export": "default" })} <div class="flex flex-1"> ${renderComponent($$result2, "Sidebar", Sidebar, {})} ${renderComponent($$result2, "CourseContent", CourseContent, { "title": course.title, "description": course.description, "modules": course.modules })} </div> ` })} </body></html>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/ruta/[area]/[lang].astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/ruta/[area]/[lang].astro";
const $$url = "/ruta/[area]/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$lang,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
