import { v as validarCredenciales } from '../../chunks/userStore_u_CEjyh-.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const { email, password } = await request.json();
  const user = validarCredenciales(email, password);
  if (!user) {
    return new Response(JSON.stringify({ error: "Credenciales inválidas" }), {
      status: 401
    });
  }
  return new Response(JSON.stringify({ name: user.name }), {
    status: 200
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
