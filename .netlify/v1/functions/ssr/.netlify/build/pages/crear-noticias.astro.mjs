import { c as createComponent, m as maybeRenderHead, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_YXMu3vp7.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { N as NavbarIsland } from '../chunks/NavbarIsland_BtooJ4LE.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrT-gNUn.mjs';
export { renderers } from '../renderers.mjs';

function CrearNoticia() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleImagen = (e) => {
    const file = e.target.files?.[0] || null;
    setImagen(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("contenido", contenido);
    if (imagen) formData.append("imagen", imagen);
    await fetch("/api/posts", {
      method: "POST",
      body: formData
    });
  };
  return /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-12 space-y-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#FE9E1B] mb-8 text-center", children: "Añadir nueva noticia" }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/noticias",
        className: "text-[#FE9E1B] px-4 py-2 rounded hover:text-[#FE9E1B] transition text-sm font-medium  space-y-8 mb-6 cursor-pointer",
        children: "← Volver Atrás"
      }
    ),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-white border border-gray-200 rounded-xl p-6 shadow-md space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Imagen destacada" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            accept: "image/*",
            onChange: handleImagen,
            className: "block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#FE9E1B] file:text-white hover:file:bg-orange-600 cursor-pointer"
          }
        ),
        preview && /* @__PURE__ */ jsx(
          "img",
          {
            src: preview,
            alt: "Vista previa",
            className: "mt-4 rounded-lg border border-gray-300 w-full object-cover max-h-64"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Título" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: titulo,
            onChange: (e) => setTitulo(e.target.value),
            className: "w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE9E1B]",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Contenido" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            value: contenido,
            onChange: (e) => setContenido(e.target.value),
            rows: 8,
            className: "w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE9E1B]",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "bg-[#FE9E1B] text-white px-6 py-2 rounded hover:bg-orange-600 transition cursor-pointer",
          children: "Publicar noticia"
        }
      ) })
    ] })
  ] });
}

const $$CrearNoticias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <meta charset="UTF-8"> <title>Nueva Noticia</title> </header> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavbarIsland", NavbarIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NavbarIsland", "client:component-export": "default" })} ${renderComponent($$result2, "CrearNoticia", CrearNoticia, {})} ` })} <footer class="bg-[#323232] text-white py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto text-center"> <div class="flex items-center justify-center space-x-3 mb-6"> <div class="w-10 h-10 bg-[#FE9E1B] from-primary-orange to-primary-orange-peel rounded-xl shadow-md flex items-center justify-center"> <span class="text-white font-bold text-lg">A</span> </div> <span class="text-2xl font-bold">Academy</span> </div> <p class="text-gray-400 mb-6">Transformando el futuro del aprendizaje con inteligencia artificial</p> <div class="border-t border-gray-700 pt-6"> <p class="text-gray-500">© 2024 Academy. Todos los derechos reservados.</p> </div> </div> </footer>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/crear-noticias.astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/crear-noticias.astro";
const $$url = "/crear-noticias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CrearNoticias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
