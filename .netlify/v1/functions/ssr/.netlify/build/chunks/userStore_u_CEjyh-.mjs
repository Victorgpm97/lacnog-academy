const usuarios = /* @__PURE__ */ new Map();
function registrarUsuario(user) {
  if (usuarios.has(user.email)) return false;
  usuarios.set(user.email, user);
  return true;
}
function validarCredenciales(email, password) {
  const user = usuarios.get(email);
  if (user && user.password === password) return user;
  return null;
}

export { registrarUsuario as r, validarCredenciales as v };
