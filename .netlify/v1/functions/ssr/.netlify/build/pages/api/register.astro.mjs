import { r as registrarUsuario } from '../../chunks/userStore_u_CEjyh-.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const { name, email, password } = await request.json();
  if (!name || !email || !password) {
    return new Response(JSON.stringify({ error: "Datos incompletos" }), { status: 400 });
  }
  const success = registrarUsuario({ name, email, password });
  if (!success) {
    return new Response(JSON.stringify({ error: "El usuario ya existe" }), { status: 409 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
