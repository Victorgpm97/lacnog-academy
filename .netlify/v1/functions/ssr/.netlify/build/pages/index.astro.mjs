import { c as createComponent, m as maybeRenderHead, i as renderComponent, r as renderTemplate, d as createAstro, j as renderHead } from '../chunks/astro/server_YXMu3vp7.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { X, UserRoundPen, GraduationCap, Brain, Users, Clock, CalendarDays } from 'lucide-react';
import { $ as $$BlogCards } from '../chunks/BlogCards_Dw9FqAw1.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrT-gNUn.mjs';
export { renderers } from '../renderers.mjs';

function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState("select");
  const [role, setRole] = useState(null);
  const [form, setForm] = useState({ nombre: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    setStep("select");
    setRole(null);
    setForm({ nombre: "", email: "", password: "" });
    setError("");
  };
  const handleSelectRole = (selectedRole) => {
    localStorage.setItem("userRole", selectedRole);
    setRole(selectedRole);
    window.location.href = `/academy/${selectedRole}`;
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setShowModal(true),
        className: "bg-white border-2 border-[#FEA723] rounded-3xl text-[#FEA723] shadow-md px-4 py-2 flex justify-around items-center hover:bg-[#FEA723] hover:text-white font-medium transition-all duration-300 cursor-pointer",
        children: "Abrir Temas"
      }
    ),
    showModal && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: handleClose
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 bg-white rounded-lg shadow-xl max-w-md w-full p-6", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleClose,
            className: "absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer",
            "aria-label": "Cerrar modal",
            children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
          }
        ),
        step === "select" && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-center", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2", children: "¡Bienvenido!" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6 text-sm", children: "Selecciona tu rol" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleSelectRole("profesor"),
                className: "flex items-center justify-center gap-2 px-3 py-2 bg-[#fde0be] text-[#323232] rounded-lg hover:bg-[#ffb764] hover:scale-110 transition-transform duration-300 text-sm cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx(UserRoundPen, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx("span", { children: "Profesor o Instructor" }),
                  /* @__PURE__ */ jsx(UserRoundPen, { className: "w-4 h-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleSelectRole("estudiante"),
                className: "flex items-center justify-center gap-2 px-3 py-2 bg-[#fdebd3] text-[#323232] rounded-lg hover:bg-[#ffb764] hover:scale-110 transition-transform duration-300 text-sm cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx(GraduationCap, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx("span", { children: "Estudiante o Profesional" }),
                  /* @__PURE__ */ jsx(GraduationCap, { className: "w-4 h-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleClose,
                className: "mt-2 text-sm text-gray-500 hover:text-gray-700 underline cursor-pointer",
                children: "Cancelar"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}

const eventos = [
  {
    id: 1,
    titulo: "Prompting with Purpose",
    subtitulo: "Best Practices and Techniques for ChatGPT",
    descripcion: "Aprende a diseñar prompts efectivos para obtener mejores resultados con modelos de lenguaje.",
    tiempo: "30 min / Live / Online",
    estado: "Live in 5 días",
    tipo: "proximos",
    fondo: "from-blue-300 to-blue-500",
    icono: "brain"
  },
  {
    id: 2,
    titulo: "Build a Multi-Agent System",
    subtitulo: "Using OpenAI Agents SDK",
    descripcion: "Descubre cómo construir sistemas multi-agente con el SDK de OpenAI.",
    tiempo: "30 min / Live / Online",
    estado: "Live in 6 días",
    tipo: "proximos",
    fondo: "from-purple-300 to-purple-500",
    icono: "users"
  },
  {
    id: 3,
    titulo: "Prompting with Purpose II",
    subtitulo: "Best Practices and Techniques for ChatGPT",
    descripcion: "Aprende a diseñar prompts efectivos para obtener mejores resultados con modelos de lenguaje.",
    tiempo: "30 min / Live / Online",
    estado: "Live in 2 meses",
    tipo: "proximos",
    fondo: "from-blue-300 to-blue-500",
    icono: "brain"
  },
  {
    id: 4,
    titulo: "Designing AI Workflows",
    subtitulo: "Integrating LLMs into Real-World Applications",
    descripcion: "Aprende a estructurar flujos de trabajo para resolver problemas concretos.",
    tiempo: "45 min / Live / Online",
    estado: "Live in 10 días",
    tipo: "proximos",
    fondo: "from-green-300 to-green-500",
    icono: "flow"
  },
  {
    id: 5,
    titulo: "Conversational UX Masterclass",
    subtitulo: "Crafting Natural Dialogues with AI",
    descripcion: "Explora técnicas para mejorar la experiencia conversacional en interfaces basadas en IA.",
    tiempo: "60 min / Live / Online",
    estado: "Live in 2 semanas",
    tipo: "proximos",
    fondo: "from-yellow-300 to-yellow-500",
    icono: "chat"
  },
  {
    id: 6,
    titulo: "AI Agents in Production",
    subtitulo: "Scaling and Monitoring Autonomous Systems",
    descripcion: "Descubre cómo desplegar y supervisar agentes autónomos en entornos reales.",
    tiempo: "40 min / Live / Online",
    estado: "Live in 3 semanas",
    tipo: "proximos",
    fondo: "from-red-300 to-red-500",
    icono: "robot"
  }
];
const eventosProximos = eventos.filter((evento) => evento.tipo === "proximos");

function EventosProximosView() {
  const visibleCount = 3;
  const [startIndex, setStartIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = eventosProximos.length;
  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev + visibleCount) % total);
      setAnimating(false);
    }, 300);
  };
  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setStartIndex((prev) => (prev - visibleCount + total) % total);
      setAnimating(false);
    }, 300);
  };
  const eventosVisibles = Array.from({ length: visibleCount }, (_, i) => {
    const index = (startIndex + i) % total;
    return eventosProximos[index];
  });
  return /* @__PURE__ */ jsxs("section", { className: "relative px-6 py-8", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handlePrev,
        className: "absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 cursor-pointer",
        children: "←"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleNext,
        className: "absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 cursor-pointer",
        children: "→"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-300 ease-in-out ${animating ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"}`,
        children: eventosVisibles.map((evento) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: `/eventos/${evento.id}`,
            className: "rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-full min-h-[250px]",
            children: [
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
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 flex flex-col justify-between h-full", children: [
                /* @__PURE__ */ jsx("p", { className: "text-[#4E5059]", children: evento.descripcion }),
                /* @__PURE__ */ jsx("div", { className: "mt-0.5", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-[#FEA723] font-medium hover:underline", children: "Ver más detalles →" }) })
              ] })
            ]
          },
          evento.id
        ))
      }
    )
  ] });
}

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="min-h-screen bg-linear-to-br from-neutral-seasalt to-white"> <header class="bg-white shadow-lg border-b border-[#F8F8F8] sticky top-0 z-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-center h-16"> <div class="flex items-center space-x-3"> <div class="w-10 h-10 bg-[#FEA723] rounded-xl shadow-md flex items-center justify-center"> <span class="text-white font-bold text-lg">A</span> </div> <span class="text-2xl font-bold text-[#323232]">Academy</span> </div> </div> </div> </header> <section class="py-16 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto text-center"> <h1 class="text-5xl md:text-6xl font-bold text-[#323232] mb-6 animate-fade-in">Bienvenido a
<span class="bg-[#FEA723] bg-clip-text text-transparent">Academy</span></h1> <p class="text-xl text-[#4E5059] max-w-3xl mx-auto mb-12 animate-slide-up">Descubre el futuro del aprendizaje con IA, conecta con expertos y mantente a la vanguardia de la tecnología</p> </div> </section> <section class="py-8 px-4 sm:px-6 lg:px-8"> <div class="max-w-4xl mx-auto"> <div class="flex justify-center"> <nav class="bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200"> <div class="flex space-x-8"> <a href="/" class="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-[#4E5059] hover:text-[#323232] font-medium transition-colors duration-200 relative group "><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9.75L12 3l9 6.75V21a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 21V9.75z"></path></svg>
Home<span class="absolute -bottom-1 left-4 w-0 h-0.5 bg-[#FEA723] transition-all duration-200 group-hover:w-8"></span></a> <a href="/events" class="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-[#4E5059] hover:text-[#323232] font-medium transition-colors duration-200 relative group"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
Events<span class="absolute -bottom-1 left-4 w-0 h-0.5 bg-[#FEA723] transition-all duration-200 group-hover:w-8"></span></a> <a href="/contents" class="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-[#4E5059] hover:text-[#323232] font-medium transition-colors duration-200 relative group "><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4h10M7 8h10M7 12h4m-4 4h10M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>Content<span class="absolute -bottom-1 left-4 w-0 h-0.5 bg-[#FEA723] transition-all duration-200 group-hover:w-8"></span></a> <a href="/blog" class="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-[#4E5059] hover:text-[#323232] font-medium transition-colors duration-200 relative group"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-5-4M9 20h6M3 20h5v-2a4 4 0 00-5-4M16 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>Communities<span class="absolute -bottom-1 left-4 w-0 h-0.5 bg-[#FEA723] transition-all duration-200 group-hover:w-8"></span></a> </div> </nav> </div> </div> </section> <section class="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-neutral-seasalt/50 to-white/50"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-16"> <div class="flex items-center justify-center space-x-3 mb-4"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles text-[#FE9E1B]"> <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path> <path d="M20 3v4"></path> <path d="M22 5h-4"></path> <path d="M4 17v2"></path> <path d="M5 18H3"></path> </svg> <h2 class="text-4xl md:text-5xl font-bold text-[#323232]">Cursos de Capacity Building - UA</h2> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles text-[#FE9E1B]"> <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path> <path d="M20 3v4"></path> <path d="M22 5h-4"></path> <path d="M4 17v2"></path> <path d="M5 18H3"></path> </svg> </div> <p class="text-xl text-[#4E5059]">No te pierdas nuestras sesiones exclusivas de aprendizaje</p> </div> </div> <div class="bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto my-12 p-1"> <div class="h-24 bg-white rounded-t-lg border-0 border-b-2 border-gray-200"> <div class="text-center py-8"> <h3 class="text-3xl font-bold text-[#4E5059] mb-8">
Explorar Temas de UA
</h3> </div> </div> <div class="bg-white"> <div class="text-center py-12"> <p class="text-[#323232] mb-8 leading-relaxed">
Dirigido a: Profesores, Instructores, Estudiantes o profesionales
								área de IT o ciencias de la computación para diseño de
								aplicaciones y
</p> </div> </div> <div class="flex justify-center -mt-12 mb-6"> ${renderComponent($$result, "ModalButton", Modal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/ModalButton.tsx", "client:component-export": "default" })} </div> </div> </section></div> <section class="py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto"> <h3 class="text-3xl font-bold bg-linear-to-r from-[#FEA723] via-[#FE9E1B] to-[#FEA723] bg-clip-text text-transparent mb-6 justify-center text-center">Eventos</h3> <div class="flex flex-wrap justify-center"> ${renderComponent($$result, "EventosProximosView", EventosProximosView, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/EventosProximosView", "client:component-export": "default" })} </div> <div class="flex items-center justify-center h-18 px-4 py-2 md:h-24"> <button class="bg-white border-2 border-[#FEA723] rounded-3xl text-[#FEA723] shadow-md px-4 py-2 flex justify-around items-center hover:bg-[#FEA723] hover:text-white font-medium transition-all duration-300"><a href="/events">See All Events</a></button> </div> </div> </section> <section class="px-4 py-24 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto"> <h3 class="text-3xl font-bold bg-linear-to-r from-[#FEA723] via-[#FE9E1B] to-[#FEA723] bg-clip-text text-transparent mb-6 justify-center text-center">
Artículos
</h3> <!-- Separación vertical entre BlogCards --> <div class="space-y-12"> ${renderComponent($$result, "BlogCards", $$BlogCards, { "title": "15 Custom GPTs Transforming Education in 2025", "description": "This guide showcases 15 of the most impactful Custom GPTs emerging from ChatGPT Edu campuses and OpenAI-run GPT-a-thons. Each template is based on proven adoption patterns and measurable results...", "date": "Aug 10, 2023", "views": "213", "category": "Blog" })} ${renderComponent($$result, "BlogCards", $$BlogCards, { "title": "5 GPTs That Power Your Campus: Built for Staff & Administrators", "description": "Campus staff and administrators are using Custom GPTs to power through repetitive tasks, deliver consistent information, and support departments more effectively...", "date": "Aug 13, 2023", "views": "66", "category": "Blog" })} </div> </div> </section> <footer class="bg-[#323232] text-white py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto text-center"> <div class="flex items-center justify-center space-x-3 mb-6"> <div class="w-10 h-10 bg-[#FE9E1B] from-primary-orange to-primary-orange-peel rounded-xl shadow-md flex items-center justify-center"> <span class="text-white font-bold text-lg">A</span> </div> <span class="text-2xl font-bold">Academy</span> </div> <p class="text-gray-400 mb-6">Transformando el futuro del aprendizaje con inteligencia artificial</p> <div class="border-t border-gray-700 pt-6"> <p class="text-gray-500">© 2024 Academy. Todos los derechos reservados.</p> </div> </div> </footer> `;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/Welcome.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<head><meta charset="UTF-8"><title>Inicio</title>${renderHead()}</head> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ` })}`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/index.astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
