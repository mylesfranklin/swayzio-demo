(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4807);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8543);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7247);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8638);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4844)), "/Users/mylesfranklin/CascadeProjects/swayzio-demo/frontend/app/page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2844)), "/Users/mylesfranklin/CascadeProjects/swayzio-demo/frontend/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6706, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/Users/mylesfranklin/CascadeProjects/swayzio-demo/frontend/app/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 8565:
/***/ (() => {



/***/ }),

/***/ 3824:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 350))

/***/ }),

/***/ 4134:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1354, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5970, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1199, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9385, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3178, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3789, 23))

/***/ }),

/***/ 350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./components/DropZone.tsx


function DropZone({ onFile, loading }) {
    const inputRef = (0,react_.useRef)(null);
    const [drag, setDrag] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `w-full max-w-xl border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center transition-colors
        ${drag ? "border-brand-accent bg-brand-bg2" : "border-brand-border bg-brand-bg2"}
        ${loading ? "opacity-60 pointer-events-none" : ""}
      `,
        onDragOver: (e)=>{
            e.preventDefault();
            setDrag(true);
        },
        onDragLeave: (e)=>{
            e.preventDefault();
            setDrag(false);
        },
        onDrop: (e)=>{
            e.preventDefault();
            setDrag(false);
            const file = e.dataTransfer.files?.[0];
            if (file) onFile(file);
        },
        onClick: ()=>!loading && inputRef.current?.click(),
        style: {
            cursor: loading ? "not-allowed" : "pointer"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ref: inputRef,
                type: "file",
                accept: ".wav,.mp3,audio/*",
                className: "hidden",
                disabled: loading,
                onChange: (e)=>{
                    const file = e.target.files?.[0];
                    if (file) onFile(file);
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-brand-text2 text-lg",
                children: loading ? "Analyzing..." : "Click or drop an audio file"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/TagChip.tsx


const typeColor = {
    genre: "bg-brand-accent hover:bg-brand-accentHv",
    mood: "bg-brand-accent hover:bg-brand-accentHv",
    key: "bg-brand-button",
    bpm: "bg-brand-button",
    energy: "bg-brand-button",
    valence: "bg-brand-button"
};
function TagChip({ label, type }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: `inline-block rounded-full px-3 py-1 text-sm font-semibold text-brand-text2 mr-2 mb-2 transition-colors cursor-default
        ${typeColor[type] || "bg-brand-bg2"}
      `,
        children: label
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-chartjs-2@5.3.0_chart.js@4.4.9_react@18.2.0/node_modules/react-chartjs-2/dist/index.js
var dist = __webpack_require__(5239);
// EXTERNAL MODULE: ./node_modules/.pnpm/chart.js@4.4.9/node_modules/chart.js/dist/chart.js + 2 modules
var chart = __webpack_require__(5770);
;// CONCATENATED MODULE: ./components/InstrumentChart.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


chart/* Chart */.kL.register(chart/* CategoryScale */.uw, chart/* LinearScale */.f$, chart/* BarElement */.ZL, chart/* Title */.Dx, chart/* Tooltip */.u, chart/* Legend */.De);
function InstrumentChart({ instruments }) {
    const maxLen = Math.max(...instruments.map((i)=>i.timeline.length), 1);
    const labels = Array.from({
        length: maxLen
    }, (_, i)=>i + 1);
    return /*#__PURE__*/ jsx_runtime_.jsx(dist/* Bar */.$Q, {
        data: {
            labels,
            datasets: instruments.map((inst, i)=>({
                    label: inst.name,
                    data: inst.timeline,
                    backgroundColor: undefined // Chart.js default palette
                }))
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: "#fff"
                    }
                },
                title: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#94A3B8"
                    },
                    grid: {
                        color: "#222"
                    }
                },
                y: {
                    ticks: {
                        color: "#94A3B8"
                    },
                    grid: {
                        color: "#222"
                    }
                }
            }
        }
    });
}

;// CONCATENATED MODULE: ./components/EnergyChart.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


chart/* Chart */.kL.register(chart/* CategoryScale */.uw, chart/* LinearScale */.f$, chart/* PointElement */.od, chart/* LineElement */.jn, chart/* Title */.Dx, chart/* Tooltip */.u, chart/* Legend */.De);
function EnergyChart({ curve }) {
    const labels = curve.map((_, i)=>i + 1);
    return /*#__PURE__*/ jsx_runtime_.jsx(dist/* Line */.x1, {
        data: {
            labels,
            datasets: [
                {
                    label: "Energy",
                    data: curve,
                    borderColor: "#F26207",
                    backgroundColor: "rgba(242,98,7,0.2)",
                    tension: 0.2
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#94A3B8"
                    },
                    grid: {
                        color: "#222"
                    }
                },
                y: {
                    ticks: {
                        color: "#94A3B8"
                    },
                    grid: {
                        color: "#222"
                    }
                }
            }
        }
    });
}

;// CONCATENATED MODULE: ./app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function Page() {
    const [result, setResult] = (0,react_.useState)(null);
    const [loading, setLoading] = (0,react_.useState)(false);
    const [error, setError] = (0,react_.useState)(null);
    const handleFile = async (file)=>{
        setLoading(true);
        setError(null);
        setResult(null);
        const form = new FormData();
        form.append("file", file);
        try {
            const res = await fetch("/api/analyze", {
                method: "POST",
                body: form
            });
            if (res.status === 413) {
                setError("File too large (max 15 MB)");
                setLoading(false);
                return;
            }
            if (!res.ok) {
                setError("Analysis failed");
                setLoading(false);
                return;
            }
            const data = await res.json();
            setResult(data);
        } catch (e) {
            setError("Network error");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "min-h-screen bg-brand-bg text-brand-text flex flex-col items-center px-4 py-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-3xl font-bold mb-2",
                children: "Swayzio AI‑Tagging Demo"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mb-6 text-brand-text2",
                children: "Drag & drop a .wav or .mp3 file (≤15MB) to analyze."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DropZone, {
                onFile: handleFile,
                loading: loading
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-4 text-red-400",
                children: error
            }),
            result && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "w-full max-w-2xl mt-8 space-y-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            result.tags.genre.map((g, i)=>/*#__PURE__*/ jsx_runtime_.jsx(TagChip, {
                                    label: g,
                                    type: "genre"
                                }, `genre-${i}`)),
                            result.tags.moods.map((m, i)=>/*#__PURE__*/ jsx_runtime_.jsx(TagChip, {
                                    label: m,
                                    type: "mood"
                                }, `mood-${i}`)),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagChip, {
                                label: result.tags.key,
                                type: "key"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagChip, {
                                label: result.tags.bpm + " BPM",
                                type: "bpm"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagChip, {
                                label: `Energy: ${result.tags.energy.toFixed(2)}`,
                                type: "energy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TagChip, {
                                label: `Valence: ${result.tags.valence.toFixed(2)}`,
                                type: "valence"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-lg font-semibold mb-2",
                                children: "Instrument Timeline"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(InstrumentChart, {
                                instruments: result.instruments
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-lg font-semibold mb-2",
                                children: "Energy Over Time"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(EnergyChart, {
                                curve: result.energy_curve
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bg-brand-bg2 rounded p-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-lg font-semibold mb-2",
                                children: "Music Theory"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-medium",
                                        children: "Chords:"
                                    }),
                                    " ",
                                    result.music_theory.chords.join(", ")
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mt-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-medium",
                                        children: "Sections:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "list-disc list-inside",
                                        children: result.music_theory.sections.map((s, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    s.label,
                                                    " (",
                                                    s.start.toFixed(1),
                                                    "s – ",
                                                    s.end.toFixed(1),
                                                    "s)"
                                                ]
                                            }, i))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("details", {
                        className: "bg-brand-bg2 rounded p-4",
                        open: true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("summary", {
                                className: "cursor-pointer text-lg font-semibold",
                                children: [
                                    "Lyrics Transcript ",
                                    result.lyrics.profanity && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ml-2 text-red-400",
                                        children: "⚠️ Profanity"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                                className: "mt-2 whitespace-pre-wrap text-brand-text2",
                                children: result.lyrics.transcript || "No lyrics detected."
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9330);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);


function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 4844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2989);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/mylesfranklin/CascadeProjects/swayzio-demo/frontend/app/page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 9330:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [884,735], () => (__webpack_exec__(8338)));
module.exports = __webpack_exports__;

})();