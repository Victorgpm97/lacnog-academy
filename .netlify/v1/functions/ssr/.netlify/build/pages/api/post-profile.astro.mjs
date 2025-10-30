import { g as guardarPerfil } from '../../chunks/perfilStore_o2uMuClj.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const body = await request.json();
  if (!body.email || !body.area || !body.lenguaje || !body.progreso) {
    return new Response(JSON.stringify({ error: "Datos incompletos" }), { status: 400 });
  }
  guardarPerfil(body);
  return new Response(JSON.stringify({ success: true, perfil: body }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
