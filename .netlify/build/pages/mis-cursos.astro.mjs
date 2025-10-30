import { c as createComponent, j as renderHead, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_YXMu3vp7.mjs';
import { u as useAuth, A as AuthProvider, $ as $$Layout } from '../chunks/Layout_CrT-gNUn.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { N as Navbar } from '../chunks/Hearders_Cw05in6D.mjs';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

function MisCursos() {
  const { user } = useAuth();
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPerfil = async () => {
      if (!user?.email) return;
      try {
        const res = await fetch(`/api/get-profile?email=${user.email}`);
        if (!res.ok) throw new Error("Perfil no encontrado");
        const data = await res.json();
        setPerfil(data);
      } catch (error) {
        console.warn("No se pudo cargar el perfil:", error);
        setPerfil(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPerfil();
  }, [user]);
  if (loading) {
    return /* @__PURE__ */ jsx("p", { className: "text-center py-12 text-gray-500", children: "Cargando tus cursos..." });
  }
  if (!perfil || !perfil.progreso || Object.keys(perfil.progreso).length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "text-center py-12 text-gray-500 space-y-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Sin cursos disponibles" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Aún no has creado tu ruta de aprendizaje." }),
      /* @__PURE__ */ jsx("a", { href: "/contents", className: "text-[#FEA723] hover:underline font-medium", children: "Crear mi ruta →" })
    ] });
  }
  const temasPorArea = {
    fundamentals: {
      tema1: "Resolución de problemas matemáticos.",
      tema2: "Estructuras de control básicas.",
      tema3: "Funciones y lógica.",
      tema4: "Manipulación de arrays."
    },
    estadística: {
      tema1: "Explora conceptos fundamentales de la estadística.",
      tema2: "Probabilidad y decisiones informadas.",
      tema3: "Inferencia estadística.",
      tema4: "Interpretación de gráficos."
    }
    // Puedes agregar más áreas aquí
  };
  const temasInfo = temasPorArea[perfil.area.toLowerCase()] ?? {};
  return /* @__PURE__ */ jsxs("main", { className: "max-w-6xl mx-auto px-6 py-12 space-y-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-[#FEA723]", children: "Todos mis cursos" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md p-6 border border-gray-200", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-gray-700 text-sm", children: [
        /* @__PURE__ */ jsx("strong", { children: "Área:" }),
        " ",
        perfil.area
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-700 text-sm", children: [
        /* @__PURE__ */ jsx("strong", { children: "Lenguaje:" }),
        " ",
        perfil.lenguaje
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6", children: Object.entries(perfil.progreso).map(([temaId, estado]) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md border border-gray-200 p-6 space-y-4", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-xl font-semibold text-[#323232]", children: [
        "Tema ",
        temaId.replace("tema", "")
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: temasInfo[temaId] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#FEA723]", children: estado.completado ? "✅ Completado" : estado.porcentaje > 0 ? "🚀 En progreso" : "🐣 Sin iniciar" }),
      /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-100 rounded-full h-4 mt-2", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-[#FEA723] h-4 rounded-full transition-all duration-300",
          style: { width: `${estado.porcentaje}%` }
        }
      ) }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 text-right", children: [
        estado.porcentaje,
        "% completado"
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "mt-2 text-sm text-[#FEA723] hover:underline font-medium",
          onClick: () => window.location.href = `/tema/${temaId}`,
          children: estado.completado ? "Revisar contenido" : "Continuar tema"
        }
      )
    ] }, temaId)) })
  ] });
}

function AuthCurso() {
  return /* @__PURE__ */ jsxs(AuthProvider, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(MisCursos, {})
  ] });
}

const $$MisCursos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<head><meta charset="UTF-8"><title>Aprendizaje</title>${renderHead()}</head> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthCurso", AuthCurso, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/AuthCurso", "client:component-export": "default" })}` })}`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/mis-cursos.astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/mis-cursos.astro";
const $$url = "/mis-cursos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MisCursos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
