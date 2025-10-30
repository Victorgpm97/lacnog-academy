import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Content", href: "/contents" },
  { name: "Communities", href: "/blog" }
];

function Navbar() {
  return /* @__PURE__ */ jsx("header", { className: "bg-white border-b border-gray-200 sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center h-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-[#FEA723] rounded-xl shadow-md flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-lg", children: "A" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-[#323232]", children: "Academy" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center space-x-6", "aria-label": "Main navigation", children: /* @__PURE__ */ jsx("ul", { className: "flex space-x-4", children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: link.href,
        className: "text-[#4E5059] hover:text-[#323232] font-medium transition-colors duration-200 relative group px-4 py-2",
        children: [
          link.name,
          /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-4 w-0 h-0.5 bg-[#FEA723] transition-all duration-200 group-hover:w-8" })
        ]
      }
    ) }, link.name)) }) })
  ] }) }) });
}

export { Navbar as N };
