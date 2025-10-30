import { c as createComponent, j as renderHead, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_YXMu3vp7.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { u as useAuth, A as AuthProvider, $ as $$Layout } from '../chunks/Layout_CrT-gNUn.mjs';
import { useState, useEffect } from 'react';
import { ChevronDown, Code, BarChart3, Database, Network, Smartphone, Shield, Server, Code2, BrainCircuit, Coffee, MonitorSmartphone, Apple, ShieldCheck, Cloud } from 'lucide-react';
import { N as NavbarIsland } from '../chunks/NavbarIsland_BtooJ4LE.mjs';
export { renderers } from '../renderers.mjs';

const areas = [
  {
    id: "fundamentals",
    title: "Fundamentals of Programming",
    description: "Aprende los conceptos básicos de programación y desarrollo",
    icon: /* @__PURE__ */ jsx(Code, { size: 32 }),
    bg: "bg-blue-500"
  },
  {
    id: "algorithms",
    title: "Data Structures and Algorithms",
    description: "Domina las estructuras de datos y algoritmos esenciales",
    icon: /* @__PURE__ */ jsx(BarChart3, { size: 32 }),
    bg: "bg-purple-500"
  },
  {
    id: "databases",
    title: "Database Fundamentals",
    description: "Comprende los sistemas de gestión de bases de datos",
    icon: /* @__PURE__ */ jsx(Database, { size: 32 }),
    bg: "bg-green-500"
  },
  {
    id: "networks",
    title: "Data Communication and Networks",
    description: "Explora comunicaciones de datos y redes de computadores",
    icon: /* @__PURE__ */ jsx(Network, { size: 32 }),
    bg: "bg-indigo-500"
  },
  {
    id: "mobile",
    title: "Mobile Application Development",
    description: "Desarrolla aplicaciones móviles modernas y funcionales",
    icon: /* @__PURE__ */ jsx(Smartphone, { size: 32 }),
    bg: "bg-pink-500"
  },
  {
    id: "security",
    title: "Computer Security",
    description: "Especialízate en seguridad informática y ciberseguridad",
    icon: /* @__PURE__ */ jsx(Shield, { size: 32 }),
    bg: "bg-red-500"
  },
  {
    id: "os",
    title: "Operating System",
    description: "Entiende el funcionamiento de los sistemas operativos",
    icon: /* @__PURE__ */ jsx(Server, { size: 32 }),
    bg: "bg-yellow-500"
  }
];
function AreaSelector({ onSelect }) {
  const [selectedArea, setSelectedArea] = useState(null);
  useEffect(() => {
    const stored = localStorage.getItem("selectedArea");
    if (stored) setSelectedArea(stored);
  }, []);
  const handleSelect = (areaId) => {
    localStorage.setItem("selectedArea", areaId);
    setSelectedArea(areaId);
    onSelect(areaId);
  };
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: areas.map((area) => /* @__PURE__ */ jsx(
    "div",
    {
      onClick: () => handleSelect(area.id),
      className: `group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer border ${selectedArea === area.id ? "border-[#FEA723] ring-2 ring-[#FEA723] shadow-[0_0_0_4px_rgba(254,167,35,0.2)]" : "border-gray-100 hover:border-[#FEA723] hover:ring-2 hover:ring-[#FEA723] hover:shadow-[0_0_0_4px_rgba(254,167,35,0.2)]"} hover:-translate-y-1`,
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: `w-16 h-16 ${area.bg} rounded-2xl flex items-center justify-center text-white`, children: area.icon }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#323232] group-hover:text-[#FEA723] transition-colors", children: area.title }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: area.description }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "inline-flex items-center gap-2 text-[#4E5059] group-hover:text-[#FE9E1B] font-medium group-hover:gap-3 transition-all duration-200",
            children: [
              "Explorar ruta ",
              /* @__PURE__ */ jsx(ChevronDown, { size: 16 })
            ]
          }
        )
      ] })
    },
    area.id
  )) });
}

const languages = [
  {
    id: "javascript",
    name: "JavaScript",
    level: "Alta",
    description: "Lenguaje versátil para desarrollo web, móvil y backend.",
    icon: /* @__PURE__ */ jsx(Code2, { size: 24 }),
    color: "bg-yellow-400"
  },
  {
    id: "python",
    name: "Python",
    level: "Alta",
    description: "Ideal para ciencia de datos, IA y desarrollo web.",
    icon: /* @__PURE__ */ jsx(BrainCircuit, { size: 24 }),
    color: "bg-green-500"
  },
  {
    id: "java",
    name: "Java",
    level: "Alta",
    description: "Robusto para aplicaciones empresariales.",
    icon: /* @__PURE__ */ jsx(Coffee, { size: 24 }),
    color: "bg-orange-500"
  },
  {
    id: "csharp",
    name: "C#",
    level: "Alta",
    description: "Potente para aplicaciones Windows y web.",
    icon: /* @__PURE__ */ jsx(MonitorSmartphone, { size: 24 }),
    color: "bg-blue-600"
  },
  {
    id: "swift",
    name: "Swift",
    level: "Media",
    description: "Nativo para desarrollo iOS y macOS.",
    icon: /* @__PURE__ */ jsx(Apple, { size: 24 }),
    color: "bg-pink-500"
  },
  {
    id: "kotlin",
    name: "Kotlin",
    level: "Media",
    description: "Moderno para Android y multiplataforma.",
    icon: /* @__PURE__ */ jsx(Smartphone, { size: 24 }),
    color: "bg-purple-500"
  },
  {
    id: "rust",
    name: "Rust",
    level: "Emergente",
    description: "Seguro y eficiente para sistemas críticos.",
    icon: /* @__PURE__ */ jsx(ShieldCheck, { size: 24 }),
    color: "bg-red-500"
  },
  {
    id: "go",
    name: "Go",
    level: "Emergente",
    description: "Simple y eficiente para servicios web.",
    icon: /* @__PURE__ */ jsx(Cloud, { size: 24 }),
    color: "bg-cyan-500"
  }
];
function LanguageSelector() {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const stored = localStorage.getItem("selectedLanguage");
    if (stored) setSelected(stored);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: languages.map((lang) => /* @__PURE__ */ jsx(
    "div",
    {
      className: `group bg-white rounded-xl p-6 shadow-md border transition-all duration-300 cursor-pointer ${selected === lang.id ? "border-[#FEA723] ring-2 ring-[#FEA723]" : "border-gray-200 hover:border-[#FEA723] hover:ring-2 hover:ring-[#FEA723]"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: `w-12 h-12 ${lang.color} rounded-full flex items-center justify-center text-white`, children: lang.icon }),
        /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-[#323232] group-hover:text-[#FEA723] transition-colors", children: [
          lang.name,
          " ",
          /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500", children: [
            "(",
            lang.level,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: lang.description })
      ] })
    },
    lang.id
  )) });
}

function LearningFlow() {
  const { user } = useAuth();
  const [step, setStep] = useState("area");
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [perfilGuardado, setPerfilGuardado] = useState(false);
  useEffect(() => {
    const storedArea = localStorage.getItem("selectedArea");
    const storedLang = localStorage.getItem("selectedLanguage");
    if (storedArea) setSelectedArea(storedArea);
    if (storedLang) setSelectedLanguage(storedLang);
  }, []);
  const handleAreaSelect = (areaId) => {
    setSelectedArea(areaId);
    localStorage.setItem("selectedArea", areaId);
    setStep("language");
  };
  useEffect(() => {
    const guardarPerfil = async () => {
      if (!user?.email || !selectedArea || !selectedLanguage || perfilGuardado) return;
      const progresoInicial = {
        tema1: { completado: false, porcentaje: 0 },
        tema2: { completado: false, porcentaje: 0 },
        tema3: { completado: false, porcentaje: 0 },
        tema4: { completado: false, porcentaje: 0 }
      };
      try {
        const res = await fetch("/api/post-profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            area: selectedArea,
            lenguaje: selectedLanguage,
            progreso: progresoInicial
          })
        });
        const data = await res.json();
        if (data.success) {
          setPerfilGuardado(true);
        }
      } catch (error) {
        console.error("Error al guardar el perfil:", error);
      }
    };
    if (step === "topics") {
      guardarPerfil();
    }
  }, [step, selectedArea, selectedLanguage, user, perfilGuardado]);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
    step === "area" && /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight", children: [
          "Crea tu Ruta de Aprendizaje en ",
          /* @__PURE__ */ jsx("span", { className: "text-[#FEA723]", children: "Academy" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed", children: "Selecciona el área de tu interés y te mostraremos los módulos que necesitas." })
      ] }),
      /* @__PURE__ */ jsx(AreaSelector, { onSelect: handleAreaSelect })
    ] }),
    step === "language" && selectedArea && /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight", children: [
          "Crea tu Ruta de Aprendizaje en ",
          /* @__PURE__ */ jsx("span", { className: "text-[#FEA723]", children: "Academy" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed", children: "Selecciona el lenguaje que prefieres para personalizar tu experiencia." })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-center", children: "¿Qué lenguaje de programación prefieres?" }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-gray-600", children: "Personaliza tu ruta de aprendizaje según tu lenguaje favorito." }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setStep("area"),
          className: "text-sm text-[#0078D4] hover:underline cursor-pointer",
          children: "← Volver"
        }
      ) }),
      /* @__PURE__ */ jsx(LanguageSelector, {})
    ] })
  ] });
}

function LearningShell() {
  return /* @__PURE__ */ jsx(AuthProvider, { children: /* @__PURE__ */ jsx(LearningFlow, {}) });
}

const $$Learning = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><title>Explora rutas de aprendizaje</title><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <body class="bg-[#F8FAFC]"> <main class="max-w-7xl mx-auto px-6 py-12 space-y-16"> <section class="space-y-6"> ${renderComponent($$result, "LearningShell", LearningShell, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/LearningShell.tsx", "client:component-export": "default" })} </section> </main> </body></html>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/Learning.astro", void 0);

const $$Contents = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Contenido</title>${renderHead()}</head> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavbarIsland", NavbarIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NavbarIsland.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Learning", $$Learning, {})} ` })} <footer class="bg-[#323232] text-white py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto text-center"> <div class="flex items-center justify-center space-x-3 mb-6"> <div class="w-10 h-10 bg-[#FE9E1B] from-primary-orange to-primary-orange-peel rounded-xl shadow-md flex items-center justify-center"> <span class="text-white font-bold text-lg">A</span> </div> <span class="text-2xl font-bold">Academy</span> </div> <p class="text-gray-400 mb-6">Transformando el futuro del aprendizaje con inteligencia artificial</p> <div class="border-t border-gray-700 pt-6"> <p class="text-gray-500">© 2024 Academy. Todos los derechos reservados.</p> </div> </div> </footer></html>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/contents.astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/contents.astro";
const $$url = "/contents";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contents,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
