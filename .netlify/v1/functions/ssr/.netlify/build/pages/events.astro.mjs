import { c as createComponent, m as maybeRenderHead, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_YXMu3vp7.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Wifi, CheckCircle, Brain, Users, Clock, CalendarDays } from 'lucide-react';
import { e as eventos } from '../chunks/eventos_DCMNXVGT.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrT-gNUn.mjs';
import { N as NavbarIsland } from '../chunks/NavbarIsland_BtooJ4LE.mjs';
export { renderers } from '../renderers.mjs';

function EventosView() {
  const [activeTab, setActiveTab] = useState("todos");
  const eventosFiltrados = eventos.filter(
    (evento) => activeTab === "todos" || evento.tipo === activeTab
  );
  const tabs = ["todos", "proximos", "pasados"];
  return /* @__PURE__ */ jsxs("div", { className: "bg-white min-h-screen", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-[#FEA723] text-white py-10 flex flex-col items-center justify-center rounded-xl", children: [
      /* @__PURE__ */ jsx(Wifi, { size: 32, strokeWidth: 2.5, className: "mb-2" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold", children: "Eventos" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg mt-2", children: "Conecta, colabora y construye" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "flex justify-center gap-4 mt-6 mb-10", children: tabs.map((tab) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setActiveTab(tab),
        className: `cursor-pointer px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 flex items-center gap-2 ${activeTab === tab ? "bg-[#FEA723] text-white shadow-md scale-105" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
        children: [
          activeTab === tab && /* @__PURE__ */ jsx(CheckCircle, { size: 16, className: "text-white" }),
          tab
        ]
      },
      tab
    )) }),
    /* @__PURE__ */ jsx("section", { className: "flex flex-wrap justify-center mt-10 w-full px-6", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12", children: eventosFiltrados.map((evento) => /* @__PURE__ */ jsx("a", { href: `/eventos/${evento.id}`, className: "block", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between h-[220px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer", children: [
      /* @__PURE__ */ jsxs("div", { className: `bg-linear-to-r ${evento.fondo} p-4 text-white`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsx("div", { className: `w-10 h-10 rounded-xl bg-linear-to-br ${evento.fondo} flex items-center justify-center`, children: evento.icono === "brain" ? /* @__PURE__ */ jsx(Brain, { size: 22 }) : /* @__PURE__ */ jsx(Users, { size: 22 }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: evento.titulo })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: evento.subtitulo }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex gap-4 text-xs text-white/90", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Clock, { size: 14 }),
            /* @__PURE__ */ jsx("span", { children: evento.tiempo })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(CalendarDays, { size: 14 }),
            /* @__PURE__ */ jsx("span", { className: "capitalize", children: evento.tipo })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-white p-4", children: /* @__PURE__ */ jsx("p", { className: "text-[#4E5059] leading-relaxed mb-4", children: evento.descripcion }) })
    ] }) }, evento.id)) }) })
  ] });
}

const $$Evento = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="min-h-screen bg-linear-to-br from-neutral-seasalt to-white"> <section class="py-16 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto"> ${renderComponent($$result, "EventosV", EventosView, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/EventosView", "client:component-export": "default" })} </div> </section> <footer class="bg-[#323232] text-white py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto text-center"> <div class="flex items-center justify-center space-x-3 mb-6"> <div class="w-10 h-10 bg-[#FE9E1B] from-primary-orange to-primary-orange-peel rounded-xl shadow-md flex items-center justify-center"> <span class="text-white font-bold text-lg">A</span> </div> <span class="text-2xl font-bold">Academy</span> </div> <p class="text-gray-400 mb-6">Transformando el futuro del aprendizaje con inteligencia artificial</p> <div class="border-t border-gray-700 pt-6"> <p class="text-gray-500">© 2024 Academy. Todos los derechos reservados.</p> </div> </div> </footer> </div>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/Evento.astro", void 0);

const $$Events = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <meta charset="UTF-8"> <title>Eventos</title> </header> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavbarIsland", NavbarIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NavbarIsland.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Event", $$Evento, {})} ` })}`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/events.astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
