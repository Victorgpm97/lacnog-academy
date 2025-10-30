import { c as createComponent, d as createAstro, m as maybeRenderHead, r as renderTemplate } from './astro/server_YXMu3vp7.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$BlogCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCards;
  const { title, description, date, views, category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-4 items-start bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"> <div class="w-20 h-20 bg-linear-to-br from-purple-400 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-xs"> ${category} </div> <!-- Contenido --> <div class="flex-1 cursor-pointer"> <h3 class="text-lg font-semibold text-[#323232] mb-1">${title}</h3> <p class="text-sm text-gray-600 mb-2 leading-relaxed">${description}</p> <div class="text-xs text-gray-500 flex gap-4"> <span>${date}</span> <span>Views ${views}</span> </div> </div> </div>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/BlogCards.astro", void 0);

export { $$BlogCards as $ };
