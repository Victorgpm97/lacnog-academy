import { c as createComponent, j as renderHead, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_YXMu3vp7.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { A as AuthProvider, u as useAuth, $ as $$Layout } from '../chunks/Layout_CrT-gNUn.mjs';
import { N as Navbar } from '../chunks/Hearders_Cw05in6D.mjs';
export { renderers } from '../renderers.mjs';

function RegisterForm() {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      login({
        name,
        avatar: `https://i.pravatar.cc/150?u=${name}`,
        email
      });
      window.location.href = "/";
    } else {
      alert(data.error || "No se pudo registrar");
    }
  };
  return /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center min-h-screen px-4 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md w-full bg-white p-8 rounded-xl shadow-md space-y-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#FEA723] text-center", children: "Crear Cuenta" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleRegister, className: "space-y-4", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Nombre completo",
          value: name,
          onChange: (e) => setName(e.target.value),
          required: true,
          className: "w-full px-4 py-2 border rounded-lg"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          placeholder: "Correo electrónico",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          required: true,
          className: "w-full px-4 py-2 border rounded-lg"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          placeholder: "Contraseña",
          value: password,
          onChange: (e) => setPassword(e.target.value),
          required: true,
          className: "w-full px-4 py-2 border rounded-lg"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "w-full bg-[#FEA723] text-white py-2 rounded-lg font-semibold hover:bg-[#fda61c] cursor-pointer",
          children: "Registrarse"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-center text-sm text-gray-600", children: [
      "¿Ya tienes cuenta?",
      " ",
      /* @__PURE__ */ jsx("a", { href: "/login", className: "text-[#FEA723] font-medium hover:underline", children: "Inicia sesión" })
    ] })
  ] }) });
}
function AuthShell() {
  return /* @__PURE__ */ jsxs(AuthProvider, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(RegisterForm, {})
  ] });
}

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><title>Login</title><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <body> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "RegisterForm", AuthShell, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/RegisterForm", "client:component-export": "default" })} ` })} </body></html>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/register.astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
