"use strict";
(() => {
var exports = {};
exports.id = 652;
exports.ids = [652];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 7287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/analyze/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST),
  runtime: () => (runtime)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6536);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(3469);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(8543);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(7344);
;// CONCATENATED MODULE: ./app/api/analyze/route.ts

const runtime = "nodejs";
async function POST(req) {
    const form = await req.formData();
    const file = form.get("file");
    if (!file) {
        return next_response/* default */.Z.json({
            error: "No file"
        }, {
            status: 400
        });
    }
    if (file.size > 15 * 1024 * 1024) {
        return next_response/* default */.Z.json({
            error: "File too large"
        }, {
            status: 413
        });
    }
    // Proxy to backend
    const backend = process.env.BACKEND_URL || "http://localhost:8000";
    const formData = new FormData();
    formData.append("file", file);
    const resp = await fetch(`${backend}/analyze`, {
        method: "POST",
        body: formData
    });
    if (resp.status === 413) {
        return next_response/* default */.Z.json({
            error: "File too large"
        }, {
            status: 413
        });
    }
    if (!resp.ok) {
        return next_response/* default */.Z.json({
            error: "Backend error"
        }, {
            status: 500
        });
    }
    const data = await resp.json();
    return next_response/* default */.Z.json(data);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fanalyze%2Froute&name=app%2Fapi%2Fanalyze%2Froute&pagePath=private-next-app-dir%2Fapi%2Fanalyze%2Froute.ts&appDir=%2FUsers%2Fmylesfranklin%2FCascadeProjects%2Fswayzio-demo%2Ffrontend%2Fapp&appPaths=%2Fapi%2Fanalyze%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/analyze/route",
        pathname: "/api/analyze",
        filename: "route",
        bundlePath: "app/api/analyze/route"
    },
    resolvedPagePath: "/Users/mylesfranklin/CascadeProjects/swayzio-demo/frontend/app/api/analyze/route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/analyze/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [884,826], () => (__webpack_exec__(7287)));
module.exports = __webpack_exports__;

})();