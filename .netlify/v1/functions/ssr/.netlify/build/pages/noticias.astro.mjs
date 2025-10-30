import { c as createComponent, m as maybeRenderHead, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_YXMu3vp7.mjs';
import { N as NavbarIsland } from '../chunks/NavbarIsland_BtooJ4LE.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrT-gNUn.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { F as FeaturedSection } from '../chunks/FeaturedSection_B9AwPJq-.mjs';
export { renderers } from '../renderers.mjs';

const DashboardPage = () => {
  const [activeTag, setActiveTag] = useState(null);
  const articles = [
    {
      id: 1,
      titulo: "Unveiling ChatGPT for Government: A Prompt Pack for Republic of Singapore GovTech",
      resumen: "Descubre cómo Singapore GovTech está aprovechando ChatGPT para innovar en el sector público.",
      articulo: "El gobierno de Singapur, a través de su agencia GovTech, ha lanzado un paquete de prompts diseñado específicamente para mejorar la interacción entre ciudadanos y servicios públicos mediante ChatGPT. Este conjunto de herramientas permite a los funcionarios automatizar respuestas, generar informes y asistir en tareas administrativas con mayor eficiencia. La iniciativa busca reducir la carga operativa y mejorar la experiencia del usuario en trámites digitales.",
      imagen: "/img/govtech.jpg",
      tags: ["Privacy Policy", "Ethics and Compliance"]
    },
    {
      id: 2,
      titulo: "Unveiling ChatGPT for Government: A Prompt Pack for Locatrix",
      resumen: "Explora cómo Locatrix integra ChatGPT en sus flujos cívicos.",
      articulo: "Locatrix ha incorporado ChatGPT en sus procesos para mejorar la comunicación entre ciudadanos y autoridades locales. El paquete de prompts desarrollado permite generar respuestas automáticas a consultas frecuentes, asistir en la planificación de evacuaciones y facilitar la capacitación de personal en tiempo real.",
      imagen: "/img/locatrix.jpg",
      tags: ["Terms", "Cookie Policy"]
    },
    {
      id: 3,
      titulo: "Aligned Procurement Strategy for Government Teams using ChatGPT Integration",
      resumen: "ChatGPT apoya la alineación de compras públicas con herramientas potenciadas por IA.",
      articulo: "La estrategia de compras públicas está siendo transformada por la integración de ChatGPT en equipos gubernamentales. Mediante prompts especializados, los funcionarios pueden redactar solicitudes de propuestas, comparar proveedores y generar reportes de evaluación con mayor rapidez y precisión.",
      imagen: "/img/procurement.jpg",
      tags: ["Intellectual Property Policy", "Ethics and Compliance"]
    },
    {
      id: 4,
      titulo: "Crafting Success with ChatGPT: Listings Law Enforcement Deployment",
      resumen: "Cómo agencias de seguridad están desplegando ChatGPT para mejorar operaciones.",
      articulo: "Las fuerzas de seguridad están adoptando ChatGPT como herramienta de apoyo operativo. Desde la redacción de informes hasta la simulación de escenarios tácticos, el modelo de lenguaje permite a los agentes ahorrar tiempo y mejorar la precisión en sus tareas.",
      imagen: "/img/law-enforcement.jpg",
      tags: ["Privacy Policy", "Terms"]
    }
  ];
  const filteredArticles = activeTag ? articles.filter((a) => a.tags.includes(activeTag)) : articles;
  return /* @__PURE__ */ jsx("main", { className: "bg-white text-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx(FeaturedSection, {}),
    /* @__PURE__ */ jsxs("section", { className: "w-full bg-linear-to-r from-purple-700 via-pink-600 to-orange-500 text-white py-12 px-6 rounded-2xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Admins" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-3xl mb-6", children: "Audit who's used your GPTs and how in the explore GPTs app. By making yourself an admin, you grant users can't use your GPTs if they don't agree to your terms. Admins can also view analytics from the explore GPTs app to see usage and history." }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4 text-sm", children: [
        "Terms",
        "Privacy Policy",
        "Intellectual Property Policy",
        "Ethics and Compliance",
        "Cookie Policy"
      ].map((tag) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveTag(activeTag === tag ? null : tag),
          className: `px-3 py-1 rounded-full font-medium cursor-pointer ${activeTag === tag ? "bg-white text-orange-600" : "bg-white/20 text-blue-200 hover:bg-white/30"}`,
          children: [
            "#",
            tag
          ]
        },
        tag
      )) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "w-full py-12 px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#FE9E1B]", children: "Noticias" }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/crear-noticias",
            className: "bg-[#FE9E1B] text-white px-4 py-2 rounded hover:bg-[#FEA723] transition text-sm font-medium",
            children: "Crear Nueva Noticia"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: filteredArticles.map((article) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-col md:flex-row items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: article.imagen,
                alt: article.titulo,
                className: "w-full md:w-40 h-24 object-cover rounded-md"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("a", { href: `/noticias/${article.id}`, children: /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-blue-700 mb-1 hover:underline cursor-pointer", children: article.titulo }) }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-2", children: article.resumen })
            ] })
          ]
        },
        article.id
      )) })
    ] })
  ] }) });
};

const $$Noticias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <title>Noticias</title> </header> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavbarIsland", NavbarIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NavbarIsland", "client:component-export": "default" })} ${renderComponent($$result2, "DashboardPage", DashboardPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NoticiasView", "client:component-export": "default" })} ` })} <footer class="bg-[#323232] text-white py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto text-center"> <div class="flex items-center justify-center space-x-3 mb-6"> <div class="w-10 h-10 bg-[#FE9E1B] from-primary-orange to-primary-orange-peel rounded-xl shadow-md flex items-center justify-center"> <span class="text-white font-bold text-lg">A</span> </div> <span class="text-2xl font-bold">Academy</span> </div> <p class="text-gray-400 mb-6">Transformando el futuro del aprendizaje con inteligencia artificial</p> <div class="border-t border-gray-700 pt-6"> <p class="text-gray-500">© 2024 Academy. Todos los derechos reservados.</p> </div> </div> </footer>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/noticias.astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/noticias.astro";
const $$url = "/noticias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Noticias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
