import { o as obtenerPerfil } from '../../chunks/perfilStore_o2uMuClj.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({ url }) => {
  const email = url.searchParams.get("email");
  if (!email) {
    return new Response(JSON.stringify({ error: "Email requerido" }), { status: 400 });
  }
  const perfil = obtenerPerfil(email);
  if (!perfil) {
    return new Response(JSON.stringify({ error: "Perfil no encontrado" }), { status: 404 });
  }
  return new Response(JSON.stringify(perfil), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
