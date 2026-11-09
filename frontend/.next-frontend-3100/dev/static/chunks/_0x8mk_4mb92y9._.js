(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StoryCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/registry.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [stories, setStories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoryService"])().list().then(setStories).catch({
                "Home.useEffect": ()=>setStories([])
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], []);
    const featured = stories.slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-6xl px-4 py-16 md:py-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium uppercase tracking-widest text-kg-teal",
                                children: "Bedtime, reimagined"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-3 font-heading text-4xl leading-tight text-kg-cream md:text-6xl",
                                children: [
                                    "Stories your family ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-kg-amber",
                                        children: "already knows"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 35
                                    }, this),
                                    ", told in the voice they love."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-lg text-kg-cream/70",
                                children: "KahaniGhar turns a grandparent's memory into a personalized, interactive story — narrated in Hindi, English, Hinglish or Marathi."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/create",
                                        className: "rounded-full bg-kg-amber px-6 py-3 font-medium text-kg-night hover:bg-kg-amber/90",
                                        children: "Tell a story"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/library",
                                        className: "rounded-full border border-white/20 px-6 py-3 text-kg-cream hover:border-kg-amber",
                                        children: "Listen to a story"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-6xl px-4 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex items-end justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-heading text-2xl text-kg-cream",
                                children: "Featured stories"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/library",
                                className: "text-sm text-kg-teal hover:text-kg-amber",
                                children: "See all →"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-3",
                        children: featured.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                story: s
                            }, s.id, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-6xl px-4 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-8 text-center font-heading text-2xl text-kg-cream",
                        children: "How it works"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-4",
                        children: [
                            {
                                step: "1",
                                title: "Speak",
                                desc: "A grandparent tells a memory in their own language."
                            },
                            {
                                step: "2",
                                title: "Transcribe",
                                desc: "Gnani Prisma turns speech into text you can edit."
                            },
                            {
                                step: "3",
                                title: "Personalize",
                                desc: "Gnani Evon shapes it into a story starring your child."
                            },
                            {
                                step: "4",
                                title: "Listen",
                                desc: "Gnani Timbre narrates; the child chooses what happens next."
                            }
                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-white/10 bg-kg-cream/5 p-5 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-kg-amber text-kg-night font-heading",
                                        children: h.step
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-3 font-heading text-lg text-kg-cream",
                                        children: h.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-kg-cream/60",
                                        children: h.desc
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, h.step, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Home, "cTz//Yl5IQLyRPBEoAItnTUhr1w=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StoryCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$story$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/story.ts [app-client] (ecmascript)");
"use client";
;
;
;
function StoryCard({ story, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-kg-cream/5 p-5 transition hover:border-kg-amber/40 hover:bg-kg-cream/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-heading text-lg text-kg-cream",
                                children: story.title
                            }, void 0, false, {
                                fileName: "[project]/components/StoryCard.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-kg-cream/60",
                                children: [
                                    story.narrator,
                                    " · ",
                                    story.childNickname,
                                    " · ",
                                    story.ageBand,
                                    " yrs"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/StoryCard.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/StoryCard.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-kg-amber/20 px-2 py-1 text-xs text-kg-amber",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$story$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGE_LABELS"][story.language]
                    }, void 0, false, {
                        fileName: "[project]/components/StoryCard.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/StoryCard.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 line-clamp-2 text-sm text-kg-cream/70",
                children: story.structure.scenes[0]?.text
            }, void 0, false, {
                fileName: "[project]/components/StoryCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/story/${story.id}`,
                        className: "text-sm font-medium text-kg-teal hover:text-kg-amber",
                        children: "Continue reading →"
                    }, void 0, false, {
                        fileName: "[project]/components/StoryCard.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onDelete(story.id),
                        className: "text-xs text-kg-cream/40 hover:text-kg-danger",
                        "aria-label": "Delete story",
                        children: "Delete"
                    }, void 0, false, {
                        fileName: "[project]/components/StoryCard.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/StoryCard.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/StoryCard.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = StoryCard;
var _c;
__turbopack_context__.k.register(_c, "StoryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/mock-stories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Clearly labelled MOCK data for frontend demo. Not real AI output and not
// Supabase persistence. Replace via lib/services/story-service.ts.
__turbopack_context__.s([
    "MOCK_STORIES",
    ()=>MOCK_STORIES
]);
const MOCK_STORIES = [
    {
        id: "story-1",
        title: "दादी का आम का पेड़",
        language: "hi-IN",
        kind: "memory",
        ageBand: "6-8",
        childNickname: "चिंटू",
        interests: [
            "gardening",
            "animals"
        ],
        narrator: "दादी",
        createdAt: "2026-11-04",
        structure: {
            title: "दादी का आम का पेड़",
            characters: [
                "चिंटू",
                "दादी",
                "मिट्टू तोता"
            ],
            moral: "जो चीज़ें हम बोते हैं, वही एक दिन हमें मिलती हैं।",
            scenes: [
                {
                    idx: 0,
                    text: "एक छोटे से गाँव में चिंटू अपनी दादी के साथ रहता था। दादी के आँगन में एक बड़ा आम का पेड़ था, जिस पर हर साल मीठे आम लगते थे।"
                },
                {
                    idx: 1,
                    text: "एक दिन चिंटू ने दादी से पूछा, “दादी, यह पेड़ कैसे आया?” दादी मुस्कुराईं और बोलीं, “बेटा, तेरे नाना ने बहुत साल पहले एक बीज बोया था।”",
                    choices: [
                        "पेड़ के नीचे खेलो",
                        "दादी से और कहानी सुनो"
                    ]
                },
                {
                    idx: 2,
                    text: "चिंटू ने पेड़ के नीचे खेलना चुना। वहाँ उसे एक छोटा तोता मिला, जिसका नाम उसने मिट्टू रखा।",
                    choices: [
                        "मिट्टू को घर ले जाओ",
                        "मिट्टू को पेड़ पर छोड़ दो"
                    ]
                },
                {
                    idx: 3,
                    text: "चिंटू ने मिट्टू को पेड़ पर छोड़ दिया। मिट्टू ने चिंटू को एक चमकता हुआ आम लाकर दिया।",
                    choices: [
                        "आम खाओ",
                        "आम दादी को दो"
                    ]
                },
                {
                    idx: 4,
                    text: "चिंटू ने आम दादी को दिया। दादी बहुत खुश हुईं और बोलीं, “तू बड़ा दिलवाला है।”"
                },
                {
                    idx: 5,
                    text: "उस रात चिंटू ने सपना देखा कि मिट्टू उसे एक जादुई बगीचे में ले गया है, जहाँ हर पेड़ पर आम लगे हैं।"
                },
                {
                    idx: 6,
                    text: "सुबह चिंटू ने दादी के साथ एक बीज बोया, ताकि बड़ा होकर वह भी ऐसा ही पेड़ बने।"
                }
            ]
        }
    },
    {
        id: "story-2",
        title: "The Little Rocket and the Moon",
        language: "en-IN",
        kind: "generated",
        ageBand: "3-5",
        childNickname: "Mia",
        interests: [
            "space",
            "trains"
        ],
        narrator: "Papa",
        createdAt: "2026-11-03",
        structure: {
            title: "The Little Rocket and the Moon",
            characters: [
                "Mia",
                "Rocket Ritu",
                "Moon"
            ],
            moral: "Curiosity and kindness can take you anywhere.",
            scenes: [
                {
                    idx: 0,
                    text: "Mia loved looking at the sky every night. One evening, a tiny rocket named Ritu landed in her garden."
                },
                {
                    idx: 1,
                    text: "Ritu whispered, \"I lost my way to the Moon. Will you help me?\"",
                    choices: [
                        "Say yes and climb in",
                        "Ask Ritu to wait"
                    ]
                },
                {
                    idx: 2,
                    text: "Mia climbed in. The rocket hummed and lifted off gently, past the clouds and the stars."
                },
                {
                    idx: 3,
                    text: "They reached the Moon, who was feeling lonely. \"Nobody visits me,\" said the Moon.",
                    choices: [
                        "Offer to play",
                        "Sing a song"
                    ]
                },
                {
                    idx: 4,
                    text: "Mia sang a soft lullaby. The Moon smiled and glowed brighter than ever."
                },
                {
                    idx: 5,
                    text: "Ritu found her way home, and Mia waved goodbye from the window every night after that."
                }
            ]
        }
    },
    {
        id: "story-3",
        title: "रेलगाड़ी और छोटा हाथी",
        language: "hi-en",
        kind: "folklore",
        ageBand: "6-8",
        childNickname: "Aarav",
        interests: [
            "trains",
            "animals"
        ],
        narrator: "Nani",
        createdAt: "2026-11-02",
        structure: {
            title: "रेलगाड़ी और छोटा हाथी",
            characters: [
                "Aarav",
                "Engine Eli",
                "Baby Hathi"
            ],
            moral: "Helping others makes the journey more fun.",
            scenes: [
                {
                    idx: 0,
                    text: "Aarav was on a train ride with Nani. The train stopped near a forest, and a baby elephant was blocking the track."
                },
                {
                    idx: 1,
                    text: "Engine Eli tooted loudly, but the baby elephant was scared and wouldn't move.",
                    choices: [
                        "Offer a banana",
                        "Sing a gentle song"
                    ]
                },
                {
                    idx: 2,
                    text: "Aarav sang softly. The baby elephant calmed down and stepped aside."
                },
                {
                    idx: 3,
                    text: "The train moved on, and the baby elephant waved its trunk happily.",
                    choices: [
                        "Wave back",
                        "Throw more bananas"
                    ]
                },
                {
                    idx: 4,
                    text: "Aarav waved back. The baby elephant smiled and ran into the forest with its family."
                },
                {
                    idx: 5,
                    text: "Nani hugged Aarav and said, \"Kindness is the best ticket to anywhere.\""
                }
            ]
        }
    },
    {
        id: "story-4",
        title: "पावसाळ्यातील चिऊ",
        language: "mr-IN",
        kind: "memory",
        ageBand: "3-5",
        childNickname: "Isha",
        interests: [
            "animals",
            "rivers"
        ],
        narrator: "आजी",
        createdAt: "2026-11-01",
        structure: {
            title: "पावसाळ्यातील चिऊ",
            characters: [
                "Isha",
                "चिऊ पक्षी",
                "आजी"
            ],
            moral: "छोट्या मित्रांची काळजी घेणे ही मोठी गोष्ट आहे.",
            scenes: [
                {
                    idx: 0,
                    text: "पावसाळ्यात Isha आजीसोबत गावी गेली होती. एका दिवशी तिला एक भिजलेला चिऊ पक्षी आढळला."
                },
                {
                    idx: 1,
                    text: "चिऊ थरथरत होता. Isha ने त्याला आजीच्या घरी आणले.",
                    choices: [
                        "चिऊला दूध द्या",
                        "चिऊला थंड पाणी द्या"
                    ]
                },
                {
                    idx: 2,
                    text: "Isha ने त्याला थोडे दूध दिले. चिऊला बरे वाटले आणि तो गाणे गाऊ लागला."
                },
                {
                    idx: 3,
                    text: "दुसऱ्या दिवशी चिऊ बरा झाला आणि तो उडून गेला, पण रोज सकाळी आजीच्या घरावर येऊन गाणे गातो.",
                    choices: [
                        "चिऊला धान्य ठेवा",
                        "चिऊला नमस्कार करा"
                    ]
                },
                {
                    idx: 4,
                    text: "Isha ने त्याला धान्य ठेवले. चिऊ आनंदाने गाणे गात राहिला."
                }
            ]
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/api-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API client for backend integration
// Provides consistent response parsing, typed error handling, and request utilities
__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "apiClient",
    ()=>apiClient,
    "createApiClient",
    ()=>createApiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/browser.ts [app-client] (ecmascript)");
;
class ApiError extends Error {
    code;
    status;
    retryable;
    details;
    constructor(code, status, retryable, details){
        super(code), this.code = code, this.status = status, this.retryable = retryable, this.details = details;
        this.name = "ApiError";
    }
}
const DEFAULT_TIMEOUT = 30_000;
const DEFAULT_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api") ?? "/api";
function createApiClient(options = {}) {
    const baseUrl = options.baseUrl ?? DEFAULT_BASE_URL;
    const timeout = options.timeout ?? DEFAULT_TIMEOUT;
    async function request(path, init = {}) {
        const { timeout: requestTimeout = timeout, ...fetchInit } = init;
        const controller = new AbortController();
        const timeoutId = setTimeout(()=>controller.abort(), requestTimeout);
        try {
            // Google sign-in is optional while backend demo authentication is enabled.
            // A missing Supabase configuration must not block local API testing.
            let accessToken;
            try {
                const { data: { session } } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])().auth.getSession();
                accessToken = session?.access_token;
            } catch  {
            // The backend will use DEMO_USER_ID only when ALLOW_DEMO_AUTH=true.
            }
            const response = await fetch(`${baseUrl}${path}`, {
                ...fetchInit,
                signal: controller.signal,
                headers: {
                    "Content-Type": "application/json",
                    ...accessToken ? {
                        Authorization: `Bearer ${accessToken}`
                    } : {},
                    ...fetchInit.headers
                }
            });
            clearTimeout(timeoutId);
            // Parse JSON response
            let data;
            try {
                data = await response.json();
            } catch  {
                data = null;
            }
            if (!response.ok) {
                const errorResponse = data;
                const error = new ApiError(errorResponse?.error?.code ?? `HTTP_${response.status}`, response.status, response.status === 429 || response.status >= 500, errorResponse?.error?.details);
                error.message = errorResponse?.error?.message ?? response.statusText;
                // Handle auth errors
                if (response.status === 401) {
                    options.onUnauthorized?.();
                } else if (response.status === 403) {
                    options.onForbidden?.();
                }
                throw error;
            }
            return data;
        } catch (error) {
            clearTimeout(timeoutId);
            if (error instanceof ApiError) throw error;
            if (error instanceof DOMException && error.name === "AbortError") {
                throw new ApiError("TIMEOUT", 0, true, {
                    message: "Request timeout"
                });
            }
            throw new ApiError("NETWORK_ERROR", 0, true, {
                message: String(error)
            });
        }
    }
    return {
        get: (path, options)=>request(path, {
                method: "GET",
                ...options
            }),
        post: (path, body, options)=>request(path, {
                method: "POST",
                body: JSON.stringify(body),
                ...options
            }),
        postForm: (path, formData, options)=>request(path, {
                method: "POST",
                body: formData,
                headers: {},
                ...options
            }),
        delete: (path, options)=>request(path, {
                method: "DELETE",
                ...options
            })
    };
}
const apiClient = createApiClient();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/api-story-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiStoryService",
    ()=>ApiStoryService,
    "apiStoryService",
    ()=>apiStoryService
]);
// Real API implementation of StoryService
// Calls backend API routes per API Contract v1.1
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/api-client.ts [app-client] (ecmascript)");
;
class ApiStoryService {
    basePath = "/stories";
    async list() {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`${this.basePath}`);
        return response.data.stories;
    }
    async get(id) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`${this.basePath}/${id}`);
            return response.data;
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiError"] && error.status === 404) {
                return null;
            }
            throw error;
        }
    }
    async create(input) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(this.basePath, input, {
            timeout: 90_000
        });
        return response.data;
    }
    async remove(id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].delete(`${this.basePath}/${id}`);
    }
    async search(filters) {
        const params = new URLSearchParams();
        if (filters.query?.trim()) params.set("query", filters.query.trim());
        if (filters.language && filters.language !== "all") params.set("language", filters.language);
        if (filters.kind && filters.kind !== "all") params.set("kind", filters.kind);
        if (filters.narrator && filters.narrator !== "all") params.set("narrator", filters.narrator);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].get(`${this.basePath}?${params.toString()}`);
        return response.data.stories;
    }
    async branch(storyId, choice, storySoFar) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`${this.basePath}/${storyId}/branch`, {
            choice,
            storySoFar
        });
        return response.data.scenes;
    }
}
const apiStoryService = new ApiStoryService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/registry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Service registry for selecting between mock and real API implementations
// Mode is determined by environment variable or explicit configuration
__turbopack_context__.s([
    "getServiceMode",
    ()=>getServiceMode,
    "getStoryService",
    ()=>getStoryService,
    "setServiceMode",
    ()=>setServiceMode,
    "storyService",
    ()=>storyService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$story$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/story-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$story$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/api-story-service.ts [app-client] (ecmascript)");
;
;
let currentMode = "auto";
let currentService = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$story$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockStoryService"];
function getServiceMode() {
    return currentMode;
}
function setServiceMode(mode) {
    currentMode = mode;
    currentService = resolveService(mode);
}
function resolveService(mode) {
    switch(mode){
        case "mock":
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$story$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockStoryService"];
        case "api":
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$story$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiStoryService"];
        case "auto":
            // In production (no development env), default to API
            // In development, default to mock unless explicitly configured
            if ("TURBOPACK compile-time truthy", 1) {
                const envMode = ("TURBOPACK compile-time value", "api");
                if ("TURBOPACK compile-time truthy", 1) {
                    return ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$story$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiStoryService"] : "TURBOPACK unreachable";
                }
                //TURBOPACK unreachable
                ;
            }
            //TURBOPACK unreachable
            ;
    }
}
function getStoryService() {
    return currentService;
}
const storyService = {
    list: (...args)=>getStoryService().list(...args),
    get: (...args)=>getStoryService().get(...args),
    create: (...args)=>getStoryService().create(...args),
    remove: (...args)=>getStoryService().remove(...args),
    search: (...args)=>getStoryService().search(...args)
};
// Initialize on module load
currentService = resolveService(currentMode);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/story-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Story service interface + mock implementation. UI components depend on the
// interface only, so swapping to real API routes later is a one-file change.
//
// Demo persistence: newly created/deleted stories are persisted to localStorage
// on the client so they survive navigation and refreshes. This is a CLIENT-SIDE
// demo convenience only — it is NOT Supabase and stores only synthetic demo
// story data (no secrets, no recordings, no real child data).
__turbopack_context__.s([
    "mockStoryService",
    ()=>mockStoryService,
    "storyService",
    ()=>storyService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mock$2d$stories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/mock-stories.ts [app-client] (ecmascript)");
;
const STORAGE_KEY = "kahani-ghar:stories:v1";
function readStorage() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return {
            data: null,
            error: null
        };
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return {
            data: null,
            error: "Invalid storage format"
        };
        return {
            data: parsed,
            error: null
        };
    } catch  {
        return {
            data: null,
            error: "Failed to read from storage"
        };
    }
}
function writeStorage(stories) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
        return {
            data: undefined,
            error: null
        };
    } catch  {
        return {
            data: null,
            error: "Failed to save to storage (quota exceeded or disabled)"
        };
    }
}
function delay(ms) {
    return new Promise((r)=>setTimeout(r, ms));
}
// In-memory store, hydrated from localStorage on first client access.
let store = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mock$2d$stories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_STORIES"]
];
let hydrated = false;
function ensureHydrated() {
    if (hydrated) return;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const result = readStorage();
    if (result.error) {
        console.warn("localStorage read failed:", result.error);
        return;
    }
    if (result.data && result.data.length > 0) store = result.data;
    hydrated = true;
}
const mockStoryService = {
    async list () {
        ensureHydrated();
        await delay(200);
        return [
            ...store
        ].sort((a, b)=>a.createdAt < b.createdAt ? 1 : -1);
    },
    async get (id) {
        ensureHydrated();
        await delay(120);
        return store.find((s)=>s.id === id) ?? null;
    },
    async create (input) {
        ensureHydrated();
        await delay(1200);
        const id = `story-${Date.now()}`;
        const story = {
            id,
            title: `A story for ${input.child.nickname}`,
            language: input.language,
            kind: input.kind,
            ageBand: input.child.ageBand,
            childNickname: input.child.nickname,
            interests: input.child.interests,
            narrator: "Family",
            createdAt: new Date().toISOString().slice(0, 10),
            structure: {
                title: `A story for ${input.child.nickname}`,
                characters: [
                    input.child.nickname
                ],
                moral: "Every story begins with a single word.",
                scenes: [
                    {
                        idx: 0,
                        text: `Once upon a time, ${input.child.nickname} had a wonderful idea: ${input.transcript.slice(0, 80)}...`
                    },
                    {
                        idx: 1,
                        text: "The adventure began with a single step into the unknown."
                    },
                    {
                        idx: 2,
                        text: "Along the way, new friends appeared and helped along the journey.",
                        choices: [
                            "Follow the friend",
                            "Take the quiet path"
                        ]
                    },
                    {
                        idx: 3,
                        text: "By choosing kindly, the path opened into a beautiful garden."
                    },
                    {
                        idx: 4,
                        text: "And so, with a happy heart, the day ended in a warm hug."
                    }
                ]
            }
        };
        store.unshift(story);
        const writeResult = writeStorage(store);
        if (writeResult.error) {
            console.warn("localStorage write failed:", writeResult.error);
        }
        return story;
    },
    async remove (id) {
        ensureHydrated();
        await delay(200);
        const idx = store.findIndex((s)=>s.id === id);
        if (idx >= 0) store.splice(idx, 1);
        const writeResult = writeStorage(store);
        if (writeResult.error) {
            console.warn("localStorage write failed:", writeResult.error);
        }
    },
    async search (filters) {
        ensureHydrated();
        await delay(150);
        let result = [
            ...store
        ];
        if (filters.query?.trim()) {
            const q = filters.query.toLowerCase();
            result = result.filter((s)=>s.title.toLowerCase().includes(q) || s.childNickname.toLowerCase().includes(q) || s.narrator.toLowerCase().includes(q));
        }
        if (filters.language && filters.language !== "all") {
            result = result.filter((s)=>s.language === filters.language);
        }
        if (filters.kind && filters.kind !== "all") {
            result = result.filter((s)=>s.kind === filters.kind);
        }
        if (filters.narrator && filters.narrator !== "all") {
            result = result.filter((s)=>s.narrator === filters.narrator);
        }
        return result.sort((a, b)=>a.createdAt < b.createdAt ? 1 : -1);
    }
};
const storyService = mockStoryService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/types/story.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared frontend types for KahaniGhar. Mirror the documented data model
// (architecture.md section 4) without depending on Supabase.
__turbopack_context__.s([
    "INTEREST_OPTIONS",
    ()=>INTEREST_OPTIONS,
    "LANGUAGE_LABELS",
    ()=>LANGUAGE_LABELS
]);
const LANGUAGE_LABELS = {
    "hi-IN": "हिन्दी",
    "en-IN": "English",
    "hi-en": "Hinglish",
    "mr-IN": "मराठी",
    "ta-IN": "தமிழ்",
    "te-IN": "తెలుగు"
};
const INTEREST_OPTIONS = [
    "animals",
    "space",
    "cricket",
    "trains",
    "rivers",
    "music",
    "dancing",
    "painting",
    "stories",
    "gardening",
    "cooking",
    "flying"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0x8mk_4mb92y9._.js.map