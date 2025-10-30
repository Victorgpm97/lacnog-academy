import { c as createComponent, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_YXMu3vp7.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { A as AuthProvider, u as useAuth, $ as $$Layout } from '../chunks/Layout_CrT-gNUn.mjs';
import { useState } from 'react';
import { N as Navbar } from '../chunks/Hearders_Cw05in6D.mjs';
export { renderers } from '../renderers.mjs';

function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok && data.name) {
      login({
        name: data.name,
        avatar: `https://i.pravatar.cc/150?u=${data.name}`,
        email
      });
      window.location.href = "/";
    } else {
      alert(data.error || "Credenciales inválidas");
    }
  };
  return /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center min-h-screen px-4 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md w-full bg-white p-8 rounded-xl shadow-md space-y-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#FEA723] text-center", children: "Iniciar Sesión" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [
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
          children: "Entrar"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-center text-sm text-gray-600", children: [
      "¿No tienes cuenta?",
      " ",
      /* @__PURE__ */ jsx("a", { href: "/register", className: "text-[#FEA723] font-medium hover:underline", children: "Regístrate" })
    ] })
  ] }) });
}
function AuthShell$1() {
  return /* @__PURE__ */ jsxs(AuthProvider, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(LoginForm, {})
  ] });
}

function AuthShell() {
  return /* @__PURE__ */ jsx(AuthProvider, { children: /* @__PURE__ */ jsx(AuthShell$1, {}) });
}

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthShell", AuthShell, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/AuthShell", "client:component-export": "default" })} ` })}`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/login.astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
