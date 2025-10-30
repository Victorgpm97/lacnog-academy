import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';

const FeaturedSection = () => {
  return /* @__PURE__ */ jsxs("section", { className: "w-full bg-white py-12 px-6 rounded-2xl", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#FEA723] mb-8 text-left", children: "Noticias Destacadas" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-linear-to-b from-cyan-600 to-cyan-400 text-white rounded-xl p-6 shadow-lg flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2", children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-6 h-6 text-cyan-600",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: 2,
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M12 4v16m8-8H4"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Managing FOIA requests with custom GPTs" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "See how your agency could reduce back-and-forth time on requests." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: [
        { title: "ChatGPT Fundamentals" },
        { title: "ChatGPT Fundamentals" },
        { title: "Prompting" },
        { title: "Prompting" }
      ].map((item, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 text-white rounded-lg p-4 shadow-md flex items-center justify-center text-center text-sm font-semibold",
          children: item.title
        },
        index
      )) })
    ] })
  ] });
};

export { FeaturedSection as F };
