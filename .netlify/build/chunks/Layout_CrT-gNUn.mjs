import { c as createComponent, d as createAstro, f as addAttribute, j as renderHead, i as renderComponent, r as renderTemplate, k as renderSlot } from './astro/server_YXMu3vp7.mjs';
/* empty css                              */
import { jsx } from 'react/jsx-runtime';
import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(void 0);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);
  const login = (user2) => {
    setUser(user2);
    localStorage.setItem("user", JSON.stringify(user2));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return /* @__PURE__ */ jsx(AuthContext.Provider, { value: { user, login, logout }, children });
};
const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Academy</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "AuthProvider", AuthProvider, { "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </body></html>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/layouts/Layout.astro", void 0);

export { $$Layout as $, AuthProvider as A, useAuth as u };
