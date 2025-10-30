const perfiles = /* @__PURE__ */ new Map();
function guardarPerfil(perfil) {
  perfiles.set(perfil.email, perfil);
}
function obtenerPerfil(email) {
  return perfiles.get(email) ?? null;
}

export { guardarPerfil as g, obtenerPerfil as o };
