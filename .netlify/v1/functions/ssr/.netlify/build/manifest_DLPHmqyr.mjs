import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { l as NOOP_MIDDLEWARE_HEADER, n as decodeKey } from './chunks/astro/server_YXMu3vp7.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/","cacheDir":"file:///D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/node_modules/.astro/","outDir":"file:///D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/dist/","srcDir":"file:///D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/","publicDir":"file:///D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/public/","buildClientDir":"file:///D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/dist/","buildServerDir":"file:///D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/academy/estudiante","isIndex":false,"type":"page","pattern":"^\\/academy\\/estudiante\\/?$","segments":[[{"content":"academy","dynamic":false,"spread":false}],[{"content":"estudiante","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/academy/estudiante.astro","pathname":"/academy/estudiante","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/academy/profesor","isIndex":false,"type":"page","pattern":"^\\/academy\\/profesor\\/?$","segments":[[{"content":"academy","dynamic":false,"spread":false}],[{"content":"profesor","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/academy/profesor.astro","pathname":"/academy/profesor","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/get-profile","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/get-profile\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"get-profile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/get-profile.ts","pathname":"/api/get-profile","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/login","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/login\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/login.ts","pathname":"/api/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/post-profile","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/post-profile\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"post-profile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/post-profile.ts","pathname":"/api/post-profile","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/posts","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/posts\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/posts.ts","pathname":"/api/posts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/register.ts","pathname":"/api/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/contents","isIndex":false,"type":"page","pattern":"^\\/contents\\/?$","segments":[[{"content":"contents","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contents.astro","pathname":"/contents","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/crear-noticias","isIndex":false,"type":"page","pattern":"^\\/crear-noticias\\/?$","segments":[[{"content":"crear-noticias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/crear-noticias.astro","pathname":"/crear-noticias","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/eventos/[id]","isIndex":false,"type":"page","pattern":"^\\/eventos\\/([^/]+?)\\/?$","segments":[[{"content":"eventos","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/eventos/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/events","isIndex":false,"type":"page","pattern":"^\\/events\\/?$","segments":[[{"content":"events","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/events.astro","pathname":"/events","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/lenguaje-profesor","isIndex":false,"type":"page","pattern":"^\\/lenguaje-profesor\\/?$","segments":[[{"content":"lenguaje-profesor","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/lenguaje-profesor.astro","pathname":"/lenguaje-profesor","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/mis-cursos","isIndex":false,"type":"page","pattern":"^\\/mis-cursos\\/?$","segments":[[{"content":"mis-cursos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mis-cursos.astro","pathname":"/mis-cursos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/noticias/[id]","isIndex":false,"type":"page","pattern":"^\\/noticias\\/([^/]+?)\\/?$","segments":[[{"content":"noticias","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/noticias/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/noticias","isIndex":false,"type":"page","pattern":"^\\/noticias\\/?$","segments":[[{"content":"noticias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/noticias.astro","pathname":"/noticias","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/profesor","isIndex":false,"type":"page","pattern":"^\\/profesor\\/?$","segments":[[{"content":"profesor","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/profesor.astro","pathname":"/profesor","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/ruta/[area]/[lang]","isIndex":false,"type":"page","pattern":"^\\/ruta\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"ruta","dynamic":false,"spread":false}],[{"content":"area","dynamic":true,"spread":false}],[{"content":"lang","dynamic":true,"spread":false}]],"params":["area","lang"],"component":"src/pages/ruta/[area]/[lang].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/estudiante.UYha-LOU.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/contents.astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/lenguaje-profesor.astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/mis-cursos.astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/noticias/[id].astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/register.astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/ruta/[area]/[lang].astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/academy/estudiante.astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/academy/profesor.astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/crear-noticias.astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/eventos/[id].astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/events.astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/login.astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/noticias.astro",{"propagation":"none","containsHead":true}],["D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/pages/profesor.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/academy/estudiante@_@astro":"pages/academy/estudiante.astro.mjs","\u0000@astro-page:src/pages/academy/profesor@_@astro":"pages/academy/profesor.astro.mjs","\u0000@astro-page:src/pages/api/get-profile@_@ts":"pages/api/get-profile.astro.mjs","\u0000@astro-page:src/pages/api/login@_@ts":"pages/api/login.astro.mjs","\u0000@astro-page:src/pages/api/post-profile@_@ts":"pages/api/post-profile.astro.mjs","\u0000@astro-page:src/pages/api/posts@_@ts":"pages/api/posts.astro.mjs","\u0000@astro-page:src/pages/api/register@_@ts":"pages/api/register.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contents@_@astro":"pages/contents.astro.mjs","\u0000@astro-page:src/pages/crear-noticias@_@astro":"pages/crear-noticias.astro.mjs","\u0000@astro-page:src/pages/eventos/[id]@_@astro":"pages/eventos/_id_.astro.mjs","\u0000@astro-page:src/pages/events@_@astro":"pages/events.astro.mjs","\u0000@astro-page:src/pages/lenguaje-profesor@_@astro":"pages/lenguaje-profesor.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/mis-cursos@_@astro":"pages/mis-cursos.astro.mjs","\u0000@astro-page:src/pages/noticias/[id]@_@astro":"pages/noticias/_id_.astro.mjs","\u0000@astro-page:src/pages/noticias@_@astro":"pages/noticias.astro.mjs","\u0000@astro-page:src/pages/profesor@_@astro":"pages/profesor.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/ruta/[area]/[lang]@_@astro":"pages/ruta/_area_/_lang_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DLPHmqyr.mjs","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NoticiasView":"_astro/NoticiasView.DXne9qng.js","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/RegisterForm":"_astro/RegisterForm.D7jUtDCo.js","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/ModalButton.tsx":"_astro/ModalButton.B7M9mFGy.js","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/AuthShell":"_astro/AuthShell.DIoYKN5y.js","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/AuthCurso":"_astro/AuthCurso.Bd0Npeho.js","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/EventosProximosView":"_astro/EventosProximosView.AST7Jel3.js","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/EventosView":"_astro/EventosView.BiDTdASC.js","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/EventoDetalle.tsx":"_astro/EventoDetalle.DLh-svEF.js","@astrojs/react/client.js":"_astro/client.BfPWZUkF.js","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/LearningShell.tsx":"_astro/LearningShell.DK-bK-5u.js","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/FeaturedSection":"_astro/FeaturedSection.DHCdB9nX.js","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NavbarIsland.tsx":"_astro/NavbarIsland.BB6_Scz5.js","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/LanguageSelectorProfesor":"_astro/LanguageSelectorProfesor.it-4Sa3d.js","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/NavbarIsland":"_astro/NavbarIsland.BEEdyYka.js","D:/Proyectos/VSC/CMS/cms-frontend-astro/cms-frontend/src/components/LanguageSelectorProfesor.tsx":"_astro/LanguageSelectorProfesor.BYnCWrzF.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/estudiante.UYha-LOU.css","/favicon.svg","/icons/books-stack.png","/logos/java-logo.png","/logos/python-logo.png","/_astro/AuthContext.CZXfV5hM.js","/_astro/AuthCurso.Bd0Npeho.js","/_astro/AuthShell.DIoYKN5y.js","/_astro/chevron-down.JzAS3cxM.js","/_astro/circle-check-big.DfyBcPjJ.js","/_astro/client.BfPWZUkF.js","/_astro/createLucideIcon.VU73Mjqq.js","/_astro/EventoDetalle.DLh-svEF.js","/_astro/EventosProximosView.AST7Jel3.js","/_astro/EventosView.BiDTdASC.js","/_astro/FeaturedSection.DHCdB9nX.js","/_astro/Hearders.DjAoprwZ.js","/_astro/index.Cd_vQiNd.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/LanguageSelectorProfesor.BYnCWrzF.js","/_astro/LanguageSelectorProfesor.it-4Sa3d.js","/_astro/LearningShell.DK-bK-5u.js","/_astro/ModalButton.B7M9mFGy.js","/_astro/NavbarIsland.BB6_Scz5.js","/_astro/NavbarIsland.BEEdyYka.js","/_astro/NoticiasView.DXne9qng.js","/_astro/RegisterForm.D7jUtDCo.js","/_astro/user-round-pen.D5BcB2A9.js","/_astro/users.Cmy1OI21.js","/_astro/x.H-gOfDtk.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"NFYNYRDlB7zUO+GKaOtUEcB8rZgKJDAnxfvw/OTuDU8=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
