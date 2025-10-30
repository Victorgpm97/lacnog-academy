import { c as createComponent, d as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_YXMu3vp7.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { X, Linkedin, Github, Twitter, Globe, Brain, Users, ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import { e as eventos } from '../../chunks/eventos_DCMNXVGT.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CrT-gNUn.mjs';
import { N as NavbarIsland } from '../../chunks/NavbarIsland_BtooJ4LE.mjs';
export { renderers } from '../../renderers.mjs';

function SpeakerModal({
  speaker,
  onClose
}) {
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        className: "absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer",
        children: /* @__PURE__ */ jsx(X, { size: 20 })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: speaker.foto,
          alt: speaker.nombre,
          className: "w-24 h-24 rounded-full object-cover mb-3"
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-800", children: speaker.nombre }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-4", children: speaker.rol }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm leading-relaxed mb-4", children: speaker.bio }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        speaker.redes?.linkedin && /* @__PURE__ */ jsx("a", { href: speaker.redes.linkedin, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Linkedin, { size: 20, className: "text-blue-600 hover:text-blue-800" }) }),
        speaker.redes?.github && /* @__PURE__ */ jsx("a", { href: speaker.redes.github, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Github, { size: 20, className: "text-gray-800 hover:text-black" }) }),
        speaker.redes?.twitter && /* @__PURE__ */ jsx("a", { href: speaker.redes.twitter, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Twitter, { size: 20, className: "text-sky-500 hover:text-sky-700" }) }),
        speaker.redes?.web && /* @__PURE__ */ jsx("a", { href: speaker.redes.web, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Globe, { size: 20, className: "text-green-600 hover:text-green-800" }) })
      ] })
    ] })
  ] }) });
}

function EventoDetalle({ evento }) {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  return /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto mt-12 px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-200 p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: `w-16 h-16 rounded-xl bg-gradient-to-br ${evento.fondo} flex items-center justify-center text-white`, children: evento.icono === "brain" ? /* @__PURE__ */ jsx(Brain, { size: 30 }) : /* @__PURE__ */ jsx(Users, { size: 30 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900", children: evento.titulo }),
            /* @__PURE__ */ jsx("p", { className: "text-md text-gray-600", children: evento.subtitulo })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "¿De qué trata?" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed text-[15px]", children: evento.descripcion })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-4", children: "Speakers" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6", children: evento.speakers.map((speaker, index) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setSelectedSpeaker(speaker),
              className: "flex flex-col items-center text-center focus:outline-none",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: speaker.foto,
                    alt: speaker.nombre,
                    className: "w-24 h-24 rounded-full object-cover mb-2 cursor-pointer"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-800", children: speaker.nombre }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: speaker.rol })
              ]
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.history.back(),
            className: "inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition cursor-pointer",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { size: 18 }),
              "Volver atrás"
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `bg-gradient-to-br ${evento.fondo} text-white rounded-2xl shadow-md p-6 flex flex-col justify-between`, children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CalendarDays, { size: 18 }),
            /* @__PURE__ */ jsxs("span", { children: [
              "📅 ",
              evento.fecha
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Clock, { size: 18 }),
            /* @__PURE__ */ jsxs("span", { children: [
              "🕒 ",
              evento.hora
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Users, { size: 18 }),
            /* @__PURE__ */ jsxs("span", { children: [
              "🎓 Organizado por ",
              evento.organizador
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Brain, { size: 18 }),
            /* @__PURE__ */ jsxs("span", { children: [
              "🤝 Presentado por ",
              evento.presentador
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs("span", { children: [
            "🌐 Modalidad: ",
            evento.modalidad
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx("button", { className: "w-full bg-white text-purple-600 font-semibold py-2 rounded-full hover:bg-purple-100 transition", children: "Añadir al calendario" }) })
      ] })
    ] }),
    selectedSpeaker && /* @__PURE__ */ jsx(SpeakerModal, { speaker: selectedSpeaker, onClose: () => setSelectedSpeaker(null) })
  ] });
}

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const evento = eventos.find((e) => e.id === Number(id));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavbarIsland", NavbarIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NavbarIsland.tsx", "client:component-export": "default" })} ${evento ? renderTemplate`${renderComponent($$result2, "EventoDetalle", EventoDetalle, { "client:load": true, "evento": evento, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/EventoDetalle.tsx", "client:component-export": "default" })}` : renderTemplate`${maybeRenderHead()}<p class="text-center mt-20 text-gray-500">Evento no encontrado</p>`}` })}`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/eventos/[id].astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/eventos/[id].astro";
const $$url = "/eventos/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
