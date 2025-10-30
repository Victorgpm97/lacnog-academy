import { c as createComponent, d as createAstro, j as renderHead, i as renderComponent, r as renderTemplate, f as addAttribute } from '../../chunks/astro/server_YXMu3vp7.mjs';
import { N as NavbarIsland } from '../../chunks/NavbarIsland_BtooJ4LE.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CrT-gNUn.mjs';
export { renderers } from '../../renderers.mjs';

const noticias = [
  {
    id: 1,
    titulo: "Unveiling ChatGPT for Government: A Prompt Pack for Republic of Singapore GovTech",
    resumen: "Descubre cómo Singapore GovTech está aprovechando ChatGPT para innovar en el sector público.",
    articulo: `
El gobierno de Singapur, a través de su agencia GovTech, ha lanzado un paquete de prompts diseñado específicamente para mejorar la interacción entre ciudadanos y servicios públicos mediante ChatGPT. Este conjunto de herramientas permite a los funcionarios automatizar respuestas, generar informes y asistir en tareas administrativas con mayor eficiencia.

La iniciativa busca reducir la carga operativa en los departamentos gubernamentales, agilizar la atención ciudadana y fomentar una cultura de innovación digital. Los prompts están adaptados a contextos locales, incluyendo trámites de vivienda, salud, educación y transporte.

Además, el proyecto incluye sesiones de capacitación para equipos técnicos, auditorías éticas sobre el uso de IA y una plataforma de retroalimentación ciudadana. Singapur se posiciona así como un referente en la adopción responsable de inteligencia artificial en el sector público.
    `.trim(),
    imagen: "/img/govtech.jpg",
    tags: ["Privacy Policy", "Ethics and Compliance"]
  },
  {
    id: 2,
    titulo: "Unveiling ChatGPT for Government: A Prompt Pack for Locatrix",
    resumen: "Explora cómo Locatrix integra ChatGPT en sus flujos cívicos.",
    articulo: `
Locatrix ha incorporado ChatGPT en sus procesos para mejorar la comunicación entre ciudadanos y autoridades locales. El paquete de prompts desarrollado permite generar respuestas automáticas a consultas frecuentes, asistir en la planificación de evacuaciones y facilitar la capacitación de personal en tiempo real.

La integración se ha centrado en mejorar la gestión de espacios públicos, optimizar simulacros de emergencia y ofrecer asistencia conversacional en centros comunitarios. ChatGPT actúa como un asistente virtual que guía a los usuarios en procedimientos de seguridad, mapas de evacuación y protocolos de respuesta rápida.

Este enfoque demuestra cómo la IA puede ser aplicada en contextos de seguridad, logística y participación ciudadana, ofreciendo una interfaz conversacional que simplifica tareas complejas sin comprometer la precisión ni la responsabilidad institucional.
    `.trim(),
    imagen: "/img/locatrix.jpg",
    tags: ["Terms", "Cookie Policy"]
  },
  {
    id: 3,
    titulo: "Aligned Procurement Strategy for Government Teams using ChatGPT Integration",
    resumen: "ChatGPT apoya la alineación de compras públicas con herramientas potenciadas por IA.",
    articulo: `
La estrategia de compras públicas está siendo transformada por la integración de ChatGPT en equipos gubernamentales. Mediante prompts especializados, los funcionarios pueden redactar solicitudes de propuestas, comparar proveedores y generar reportes de evaluación con mayor rapidez y precisión.

El sistema permite estandarizar procesos, reducir errores humanos y mejorar la transparencia en cada etapa del ciclo de adquisición. ChatGPT también facilita la revisión de cláusulas contractuales, la generación de matrices de evaluación y la documentación de decisiones.

Este modelo de asistencia inteligente está siendo adoptado por departamentos de finanzas, infraestructura y tecnología, con resultados positivos en eficiencia operativa y cumplimiento normativo. La IA se convierte así en un aliado estratégico para optimizar recursos y garantizar decisiones más informadas.
    `.trim(),
    imagen: "/img/procurement.jpg",
    tags: ["Intellectual Property Policy", "Ethics and Compliance"]
  },
  {
    id: 4,
    titulo: "Crafting Success with ChatGPT: Listings Law Enforcement Deployment",
    resumen: "Cómo agencias de seguridad están desplegando ChatGPT para mejorar operaciones.",
    articulo: `
Las fuerzas de seguridad están adoptando ChatGPT como herramienta de apoyo operativo. Desde la redacción de informes hasta la simulación de escenarios tácticos, el modelo de lenguaje permite a los agentes ahorrar tiempo y mejorar la precisión en sus tareas.

En departamentos policiales, ChatGPT se ha integrado en sistemas de despacho, análisis de datos y entrenamiento virtual. Los prompts permiten generar reportes de incidentes, estructurar planes de patrullaje y responder consultas legales básicas.

Además, se han implementado filtros éticos y protocolos de supervisión para garantizar que el uso de IA se mantenga dentro de los estándares de privacidad y derechos humanos. Esta implementación plantea nuevas oportunidades para modernizar el trabajo policial, siempre bajo estrictos controles institucionales.
    `.trim(),
    imagen: "/img/law-enforcement.jpg",
    tags: ["Privacy Policy", "Terms"]
  }
];

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const noticia = noticias.find((n) => n.id === Number(id));
  if (!noticia) {
    throw new Error("Noticia no encontrada");
  }
  return renderTemplate`<head><meta charset="UTF-8"><title>${noticia.titulo}</title>${renderHead()}</head> <body class="bg-white text-gray-900 min-h-screen w-full"> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavbarIsland", NavbarIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NavbarIsland", "client:component-export": "default" })} <main class="w-full min-h-screen flex flex-col items-center justify-start px-6 py-10"> <div class="w-full max-w-6xl"> <img${addAttribute(noticia.imagen, "src")}${addAttribute(noticia.titulo, "alt")} class="w-full h-[300px] object-cover rounded-lg mb-6"> <h1 class="text-4xl font-bold text-blue-800 mb-4">${noticia.titulo}</h1> <p class="text-lg text-gray-600 mb-6">${noticia.resumen}</p> <p class="text-md text-gray-800 whitespace-pre-line leading-relaxed">${noticia.articulo}</p> <div class="mt-8 flex flex-wrap gap-2"> ${noticia.tags.map((tag) => renderTemplate`<span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
#${tag} </span>`)} </div> </div> </main> ` })} <footer class="bg-[#323232] text-white py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto text-center"> <div class="flex items-center justify-center space-x-3 mb-6"> <div class="w-10 h-10 bg-[#FE9E1B] from-primary-orange to-primary-orange-peel rounded-xl shadow-md flex items-center justify-center"> <span class="text-white font-bold text-lg">A</span> </div> <span class="text-2xl font-bold">Academy</span> </div> <p class="text-gray-400 mb-6">Transformando el futuro del aprendizaje con inteligencia artificial</p> <div class="border-t border-gray-700 pt-6"> <p class="text-gray-500">© 2024 Academy. Todos los derechos reservados.</p> </div> </div> </footer></body>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/noticias/[id].astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/noticias/[id].astro";
const $$url = "/noticias/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
