import { c as createComponent, m as maybeRenderHead, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_YXMu3vp7.mjs';
import { $ as $$BlogCards } from '../chunks/BlogCards_Dw9FqAw1.mjs';
import { F as FeaturedSection } from '../chunks/FeaturedSection_B9AwPJq-.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrT-gNUn.mjs';
import { N as NavbarIsland } from '../chunks/NavbarIsland_BtooJ4LE.mjs';
export { renderers } from '../renderers.mjs';

const $$Blogs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto"> <div class="flex flex-wrap justify-center rounded-2xl shadow-md"> ${renderComponent($$result, "FeaturedSection", FeaturedSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/FeaturedSection", "client:component-export": "default" })} </div> <div class="flex items-center justify-center h-18 px-4 py-2 md:h-24"> <button class="bg-white border-2 border-[#FEA723] rounded-3xl text-[#FEA723] shadow-md px-4 py-2 flex justify-around items-center hover:bg-[#FEA723] hover:text-white font-medium transition-all duration-300"><a href="/noticias">All News</a></button> </div> </div> </section> <section class="px-4 py-8 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto"> <h3 class="text-3xl font-bold bg-linear-to-r from-[#FEA723] via-[#FE9E1B] to-[#FEA723] bg-clip-text text-transparent mb-6">
Artículos
</h3> <!-- Separación vertical entre BlogCards --> <div class="space-y-12"> ${renderComponent($$result, "BlogCards", $$BlogCards, { "title": "15 Custom GPTs Transforming Education in 2025", "description": "This guide showcases 15 of the most impactful Custom GPTs emerging from ChatGPT Edu campuses and OpenAI-run GPT-a-thons. Each template is based on proven adoption patterns and measurable results...", "date": "Aug 10, 2023", "views": "213", "category": "Blog" })} ${renderComponent($$result, "BlogCards", $$BlogCards, { "title": "5 GPTs That Power Your Campus: Built for Staff & Administrators", "description": "Campus staff and administrators are using Custom GPTs to power through repetitive tasks, deliver consistent information, and support departments more effectively...", "date": "Aug 13, 2023", "views": "66", "category": "Blog" })} ${renderComponent($$result, "BlogCards", $$BlogCards, { "title": "15 Custom GPTs Transforming Education in 2025", "description": "This guide showcases 15 of the most impactful Custom GPTs emerging from ChatGPT Edu campuses and OpenAI-run GPT-a-thons. Each template is based on proven adoption patterns and measurable results...", "date": "Aug 10, 2023", "views": "213", "category": "Blog" })} </div> </div> </section> <footer class="bg-[#323232] text-white py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-7xl mx-auto text-center"> <div class="flex items-center justify-center space-x-3 mb-6"> <div class="w-10 h-10 bg-[#FE9E1B] from-primary-orange to-primary-orange-peel rounded-xl shadow-md flex items-center justify-center"> <span class="text-white font-bold text-lg">A</span> </div> <span class="text-2xl font-bold">Academy</span> </div> <p class="text-gray-400 mb-6">Transformando el futuro del aprendizaje con inteligencia artificial</p> <div class="border-t border-gray-700 pt-6"> <p class="text-gray-500">© 2024 Academy. Todos los derechos reservados.</p> </div> </div> </footer>`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/Blogs.astro", void 0);

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Blog</title> </header> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavbarIsland", NavbarIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NavbarIsland.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Blogs", $$Blogs, {})} ` })}`;
}, "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/blog.astro", void 0);

const $$file = "D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Blog,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
