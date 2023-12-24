import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_afIOyFkh.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
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
    })
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.Bj6rV6ik.css"}],"routeData":{"route":"/docs/[...slug]","type":"page","pattern":"^\\/docs(?:\\/(.*?))?\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/docs/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://intrafi.github.io/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/src/pages/docs/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/docs/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/docs/[...slug]@_@astro":"pages/docs/_---slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/docs/[...slug].astro":"chunks/pages/__58Ub_m0b.mjs","/src/pages/index.astro":"chunks/pages/index_pYHVNa4W.mjs","\u0000@astrojs-manifest":"manifest_SzOQgj9o.mjs","E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/src/content/docs/en/piso-wifi-vendo/configuration/esp-device.md?astroContentCollectionEntry=true":"chunks/esp-device_m2lxc-fX.mjs","E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/src/content/docs/en/piso-wifi-vendo/configuration/mikrotik-router.md?astroContentCollectionEntry=true":"chunks/mikrotik-router_qpA-VLAP.mjs","E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/src/content/docs/en/piso-wifi-vendo/connection-diagram/nodemcu-esp8266.md?astroContentCollectionEntry=true":"chunks/nodemcu-esp8266_YAdT69yA.mjs","E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/src/content/docs/en/piso-wifi-vendo/installation/esp-device.md?astroContentCollectionEntry=true":"chunks/esp-device_A8Df0sVy.mjs","E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/src/content/docs/en/piso-wifi-vendo/configuration/esp-device.md?astroPropagatedAssets":"chunks/esp-device_50aHhCl6.mjs","E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/src/content/docs/en/piso-wifi-vendo/configuration/mikrotik-router.md?astroPropagatedAssets":"chunks/mikrotik-router_BEjoM1VU.mjs","E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/src/content/docs/en/piso-wifi-vendo/connection-diagram/nodemcu-esp8266.md?astroPropagatedAssets":"chunks/nodemcu-esp8266_Mpq4r_tA.mjs","E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/src/content/docs/en/piso-wifi-vendo/installation/esp-device.md?astroPropagatedAssets":"chunks/esp-device_Ptuf5dgO.mjs","E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/src/content/docs/en/piso-wifi-vendo/configuration/esp-device.md":"chunks/esp-device_2xZzkJrV.mjs","E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/src/content/docs/en/piso-wifi-vendo/configuration/mikrotik-router.md":"chunks/mikrotik-router_EGjSjio_.mjs","E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/src/content/docs/en/piso-wifi-vendo/connection-diagram/nodemcu-esp8266.md":"chunks/nodemcu-esp8266_qUqcGy6E.mjs","E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/src/content/docs/en/piso-wifi-vendo/installation/esp-device.md":"chunks/esp-device_COg1cRpi.mjs","@astrojs/preact/client.js":"_astro/client.asXjCW7l.js","E:/Files/Projects/Current/ESP8266 12-E/IntraFi-Website/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.UqJVjSsW.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
