(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AudioPlayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AudioPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/api-client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AudioPlayer({ sceneCount, currentScene, onSceneChange, scenes, storyId, voice, language }) {
    _s();
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [audioUrl, setAudioUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [shouldAutoPlay, setShouldAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioPlayer.useEffect": ()=>{
            audioRef.current?.pause();
            setAudioUrl(null);
            setError(null);
            setShouldAutoPlay(false);
        }
    }["AudioPlayer.useEffect"], [
        currentScene
    ]);
    const playAudio = async ()=>{
        try {
            await audioRef.current?.play();
            setError(null);
        } catch  {
            // Fetching TTS audio is asynchronous, so browsers may no longer consider
            // the original Listen click a user gesture. Keep the controls visible and
            // explain how to resume instead of swallowing the playback failure.
            setError("Narration is ready. Press play in the audio controls to start it.");
        }
    };
    const handleCanPlay = ()=>{
        if (!shouldAutoPlay) return;
        setShouldAutoPlay(false);
        void playAudio();
    };
    const playNarration = async ()=>{
        if (audioUrl) {
            await playAudio();
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post("/tts", {
                storyId,
                sceneIndex: currentScene,
                voice,
                language,
                text: scenes[currentScene].text
            }, {
                timeout: 60_000
            });
            setAudioUrl(result.data.audioUrl);
            setShouldAutoPlay(true);
        } catch (cause) {
            if (cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiError"] && cause.code === "NETWORK_ERROR") {
                setError("Narration server is unavailable. Start the backend, then try Listen again.");
            } else if (cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiError"] && cause.code === "TIMEOUT") {
                setError("Narration took too long. Please try Listen again.");
            } else {
                setError(cause instanceof Error ? cause.message : "Could not create narration.");
            }
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-white/10 bg-kg-cream/5 p-4",
        children: [
            audioUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                controls: true,
                preload: "auto",
                className: "mb-3 w-full",
                src: audioUrl,
                onCanPlay: handleCanPlay,
                onError: ()=>setError("The narration file could not be loaded. Please try Listen again."),
                onEnded: ()=>currentScene < sceneCount - 1 && onSceneChange(currentScene + 1)
            }, void 0, false, {
                fileName: "[project]/components/AudioPlayer.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSceneChange(Math.max(0, currentScene - 1)),
                        disabled: currentScene === 0,
                        className: "rounded-full border border-white/20 px-3 py-1 text-sm text-kg-cream disabled:opacity-30",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/components/AudioPlayer.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: playNarration,
                        disabled: !scenes[currentScene] || loading,
                        className: "rounded-full bg-kg-teal px-5 py-2 text-sm font-medium text-kg-night disabled:opacity-50",
                        children: loading ? "Preparing voice…" : audioUrl ? "Play narration" : "Listen"
                    }, void 0, false, {
                        fileName: "[project]/components/AudioPlayer.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSceneChange(Math.min(sceneCount - 1, currentScene + 1)),
                        disabled: currentScene === sceneCount - 1,
                        className: "rounded-full border border-white/20 px-3 py-1 text-sm text-kg-cream disabled:opacity-30",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/components/AudioPlayer.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AudioPlayer.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-center text-xs text-kg-danger",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/AudioPlayer.tsx",
                lineNumber: 98,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AudioPlayer.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(AudioPlayer, "T2E7dIyvNsi4N7FNfpND1NsWER0=");
_c = AudioPlayer;
var _c;
__turbopack_context__.k.register(_c, "AudioPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ChoiceCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChoiceCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/api-client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ChoiceCards({ choices, storyId, storySoFar: _storySoFar, language: _language, childNickname: _childNickname, ageBand: _ageBand, interests: _interests, onSelect }) {
    _s();
    const buttonRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [isBranching, setIsBranching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [branchError, setBranchError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const setButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChoiceCards.useCallback[setButtonRef]": (index)=>({
                "ChoiceCards.useCallback[setButtonRef]": (el)=>{
                    buttonRefs.current[index] = el;
                }
            })["ChoiceCards.useCallback[setButtonRef]"]
    }["ChoiceCards.useCallback[setButtonRef]"], []);
    const handleChoice = async (choice)=>{
        setIsBranching(true);
        setBranchError(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiClient"].post(`/stories/${storyId}/branch`, {
                choice
            }, {
                timeout: 90_000
            });
            const newScenes = result.data.scenes;
            onSelect(choice, newScenes);
        } catch (err) {
            const message = err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiError"] && err.code === "NETWORK_ERROR" ? "Story server is unavailable. Restart the app with npm run dev, then try again." : err instanceof Error ? err.message : "Failed to continue story";
            setBranchError(message);
            console.error("Branch error:", err);
        } finally{
            setIsBranching(false);
        }
    };
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChoiceCards.useCallback[handleKeyDown]": (e, index)=>{
            switch(e.key){
                case "ArrowRight":
                case "ArrowDown":
                    {
                        e.preventDefault();
                        const nextIndex = (index + 1) % choices.length;
                        buttonRefs.current[nextIndex]?.focus();
                        break;
                    }
                case "ArrowLeft":
                case "ArrowUp":
                    {
                        e.preventDefault();
                        const prevIndex = (index - 1 + choices.length) % choices.length;
                        buttonRefs.current[prevIndex]?.focus();
                        break;
                    }
                case "Home":
                    {
                        e.preventDefault();
                        buttonRefs.current[0]?.focus();
                        break;
                    }
                case "End":
                    {
                        e.preventDefault();
                        const lastIndex = choices.length - 1;
                        buttonRefs.current[lastIndex]?.focus();
                        break;
                    }
                case "Enter":
                case " ":
                    {
                        e.preventDefault();
                        handleChoice(choices[index]);
                        break;
                    }
            }
        }
    }["ChoiceCards.useCallback[handleKeyDown]"], [
        choices
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6 grid gap-3 sm:grid-cols-2",
        role: "radiogroup",
        "aria-label": "Story choices",
        children: [
            choices.map((c, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    ref: setButtonRef(index),
                    onClick: ()=>handleChoice(c),
                    onKeyDown: (e)=>handleKeyDown(e, index),
                    disabled: isBranching,
                    role: "radio",
                    "aria-checked": false,
                    "aria-disabled": isBranching,
                    className: "rounded-2xl border border-kg-teal/40 bg-kg-teal/10 p-4 text-left text-kg-cream transition hover:border-kg-amber hover:bg-kg-amber/10 focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night disabled:opacity-50 disabled:cursor-not-allowed",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium",
                            children: c
                        }, void 0, false, {
                            fileName: "[project]/components/ChoiceCards.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        isBranching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "ml-2 animate-spin h-4 w-4",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChoiceCards.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChoiceCards.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChoiceCards.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    ]
                }, c, true, {
                    fileName: "[project]/components/ChoiceCards.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)),
            branchError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-full p-3 rounded-lg bg-kg-danger/20 border border-kg-danger/30 text-sm text-kg-danger",
                role: "alert",
                children: branchError
            }, void 0, false, {
                fileName: "[project]/components/ChoiceCards.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChoiceCards.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(ChoiceCards, "06wobDvZ/rqxFWz2dm/6NrNMkGs=");
_c = ChoiceCards;
var _c;
__turbopack_context__.k.register(_c, "ChoiceCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ErrorBoundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-2xl px-4 py-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-5xl",
                        role: "img",
                        "aria-label": "Error",
                        children: "😔"
                    }, void 0, false, {
                        fileName: "[project]/components/ErrorBoundary.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-4 font-heading text-2xl text-kg-cream",
                        children: "Something went wrong"
                    }, void 0, false, {
                        fileName: "[project]/components/ErrorBoundary.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-kg-cream/70",
                        children: "We couldn't load the story. Please try again or go back to your storybook."
                    }, void 0, false, {
                        fileName: "[project]/components/ErrorBoundary.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.location.reload(),
                                className: "rounded-full bg-kg-amber px-5 py-2 text-kg-night",
                                children: "Refresh page"
                            }, void 0, false, {
                                fileName: "[project]/components/ErrorBoundary.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/library",
                                className: "rounded-full border border-white/20 px-5 py-2 text-kg-cream",
                                children: "Back to storybook"
                            }, void 0, false, {
                                fileName: "[project]/components/ErrorBoundary.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ErrorBoundary.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    ("TURBOPACK compile-time value", "development") === "development" && this.state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "mt-6 text-left text-xs text-kg-cream/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                children: "Error details (development)"
                            }, void 0, false, {
                                fileName: "[project]/components/ErrorBoundary.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "mt-2 p-2 rounded bg-kg-night/50 overflow-auto",
                                children: this.state.error.stack
                            }, void 0, false, {
                                fileName: "[project]/components/ErrorBoundary.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ErrorBoundary.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ErrorBoundary.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LoadingLantern.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingLantern
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const lines = [
    "Lighting the lantern...",
    "Gathering the words...",
    "Shaping the story...",
    "Almost ready..."
];
function LoadingLantern({ label }) {
    _s();
    const [i, setI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [reduceMotion, setReduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingLantern.useEffect": ()=>{
            const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            const handler = {
                "LoadingLantern.useEffect.handler": (e)=>setReduceMotion(e.matches)
            }["LoadingLantern.useEffect.handler"];
            setReduceMotion(mediaQuery.matches);
            mediaQuery.addEventListener("change", handler);
            return ({
                "LoadingLantern.useEffect": ()=>mediaQuery.removeEventListener("change", handler)
            })["LoadingLantern.useEffect"];
        }
    }["LoadingLantern.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingLantern.useEffect": ()=>{
            if (reduceMotion) return;
            const t = setInterval({
                "LoadingLantern.useEffect.t": ()=>setI({
                        "LoadingLantern.useEffect.t": (v)=>(v + 1) % lines.length
                    }["LoadingLantern.useEffect.t"])
            }["LoadingLantern.useEffect.t"], 900);
            return ({
                "LoadingLantern.useEffect": ()=>clearInterval(t)
            })["LoadingLantern.useEffect"];
        }
    }["LoadingLantern.useEffect"], [
        reduceMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-4 py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-16 w-16",
                "aria-hidden": "true",
                children: [
                    !reduceMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 animate-ping rounded-full bg-kg-amber/30"
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingLantern.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex h-16 w-16 items-center justify-center rounded-full bg-kg-amber text-3xl text-kg-night",
                        children: "🏮"
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingLantern.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LoadingLantern.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-heading text-lg text-kg-amber",
                children: label ?? lines[i]
            }, void 0, false, {
                fileName: "[project]/components/LoadingLantern.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-kg-cream/50",
                children: lines[i]
            }, void 0, false, {
                fileName: "[project]/components/LoadingLantern.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LoadingLantern.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(LoadingLantern, "PkM0byV2i30T+bRam1tsJZN8QZM=");
_c = LoadingLantern;
var _c;
__turbopack_context__.k.register(_c, "LoadingLantern");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StoryReader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoryReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AudioPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AudioPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChoiceCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChoiceCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingLantern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadingLantern.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$story$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/story.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function StoryReaderContent() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [story, setStory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sceneIdx, setSceneIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [branchCount, setBranchCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoryReaderContent.useEffect": ()=>{
            let active = true;
            setError(null);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storyService"].get(params.id).then({
                "StoryReaderContent.useEffect": (s)=>{
                    if (active) {
                        setStory(s);
                        setLoading(false);
                        if (!s) setError("Story not found");
                    }
                }
            }["StoryReaderContent.useEffect"]).catch({
                "StoryReaderContent.useEffect": ()=>{
                    if (active) {
                        setError("Failed to load story");
                        setLoading(false);
                    }
                }
            }["StoryReaderContent.useEffect"]);
            return ({
                "StoryReaderContent.useEffect": ()=>{
                    active = false;
                }
            })["StoryReaderContent.useEffect"];
        }
    }["StoryReaderContent.useEffect"], [
        params.id
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingLantern$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        label: "Opening the storybook..."
    }, void 0, false, {
        fileName: "[project]/components/StoryReader.tsx",
        lineNumber: 46,
        columnNumber: 23
    }, this);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-2xl px-4 py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-5xl",
                    role: "img",
                    "aria-label": "Error",
                    children: "😔"
                }, void 0, false, {
                    fileName: "[project]/components/StoryReader.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mt-4 font-heading text-2xl text-kg-cream",
                    children: "Couldn't load story"
                }, void 0, false, {
                    fileName: "[project]/components/StoryReader.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-kg-cream/70",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/components/StoryReader.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/library",
                    className: "mt-4 inline-block text-kg-teal hover:text-kg-amber",
                    children: "Back to storybook"
                }, void 0, false, {
                    fileName: "[project]/components/StoryReader.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/StoryReader.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    }
    if (!story) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-2xl px-4 py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-kg-cream/70",
                    children: "Story not found."
                }, void 0, false, {
                    fileName: "[project]/components/StoryReader.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/library",
                    className: "mt-4 inline-block text-kg-teal hover:text-kg-amber",
                    children: "Back to storybook"
                }, void 0, false, {
                    fileName: "[project]/components/StoryReader.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/StoryReader.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this);
    }
    const scenes = story.structure.scenes;
    const scene = scenes[sceneIdx];
    const isLast = sceneIdx === scenes.length - 1;
    const hasChoices = !!scene.choices?.length && branchCount < 3 && !isLast;
    const handleChoice = (_choice, generatedScenes)=>{
        setBranchCount((c)=>c + 1);
        // Update the story with new scenes
        setStory((prev)=>{
            if (!prev) return prev;
            const existingScenes = prev.structure.scenes;
            // Replace scenes from the branching point onward
            const updatedScenes = [
                ...existingScenes.slice(0, sceneIdx + 1),
                ...generatedScenes
            ];
            return {
                ...prev,
                structure: {
                    ...prev.structure,
                    scenes: updatedScenes
                }
            };
        });
        // Move to the first new scene
        if (sceneIdx < scenes.length - 1) {
            setSceneIdx(sceneIdx + 1);
        } else {
            setFinished(true);
        }
    };
    const next = ()=>{
        if (sceneIdx < scenes.length - 1) setSceneIdx(sceneIdx + 1);
        else setFinished(true);
    };
    const prev = ()=>{
        if (sceneIdx > 0) setSceneIdx(sceneIdx - 1);
    };
    if (finished) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-2xl px-4 py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-5xl",
                    role: "img",
                    "aria-label": "Celebration",
                    children: "🎉"
                }, void 0, false, {
                    fileName: "[project]/components/StoryReader.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mt-4 font-heading text-3xl text-kg-amber",
                    children: "The End"
                }, void 0, false, {
                    fileName: "[project]/components/StoryReader.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-kg-cream/70",
                    children: story.structure.moral
                }, void 0, false, {
                    fileName: "[project]/components/StoryReader.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex justify-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSceneIdx(0);
                                setFinished(false);
                                setBranchCount(0);
                            },
                            className: "rounded-full border border-white/20 px-5 py-2 text-kg-cream",
                            children: "Read again"
                        }, void 0, false, {
                            fileName: "[project]/components/StoryReader.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/library",
                            className: "rounded-full bg-kg-amber px-5 py-2 text-kg-night",
                            children: "Back to storybook"
                        }, void 0, false, {
                            fileName: "[project]/components/StoryReader.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/StoryReader.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/StoryReader.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-2xl px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/library",
                        className: "text-sm text-kg-teal hover:text-kg-amber",
                        children: "← Storybook"
                    }, void 0, false, {
                        fileName: "[project]/components/StoryReader.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-kg-amber/20 px-3 py-1 text-xs text-kg-amber",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$story$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGE_LABELS"][story.language]
                    }, void 0, false, {
                        fileName: "[project]/components/StoryReader.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/StoryReader.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-heading text-2xl text-kg-cream",
                children: story.title
            }, void 0, false, {
                fileName: "[project]/components/StoryReader.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-kg-cream/50",
                children: [
                    "Narrated by ",
                    story.narrator,
                    " · for ",
                    story.childNickname
                ]
            }, void 0, true, {
                fileName: "[project]/components/StoryReader.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 rounded-2xl border border-white/10 bg-kg-cream/5 p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg leading-relaxed text-kg-cream",
                    children: scene.text
                }, void 0, false, {
                    fileName: "[project]/components/StoryReader.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/StoryReader.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AudioPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sceneCount: scenes.length,
                    currentScene: sceneIdx,
                    onSceneChange: setSceneIdx,
                    scenes: scenes,
                    storyId: story.id,
                    voice: "Pranav",
                    language: story.language
                }, void 0, false, {
                    fileName: "[project]/components/StoryReader.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/StoryReader.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            hasChoices && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-kg-cream/60",
                        children: "What happens next?"
                    }, void 0, false, {
                        fileName: "[project]/components/StoryReader.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChoiceCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        choices: scene.choices,
                        storyId: story.id,
                        storySoFar: scenes.slice(0, sceneIdx + 1),
                        language: story.language,
                        childNickname: story.childNickname,
                        ageBand: story.ageBand,
                        interests: story.interests,
                        onSelect: handleChoice
                    }, void 0, false, {
                        fileName: "[project]/components/StoryReader.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/StoryReader.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this),
            !hasChoices && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prev,
                        disabled: sceneIdx === 0,
                        className: "rounded-full border border-white/20 px-5 py-2 text-kg-cream disabled:opacity-30",
                        children: "← Previous"
                    }, void 0, false, {
                        fileName: "[project]/components/StoryReader.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: next,
                        className: "rounded-full bg-kg-amber px-5 py-2 text-kg-night",
                        children: isLast ? "Finish" : "Next →"
                    }, void 0, false, {
                        fileName: "[project]/components/StoryReader.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/StoryReader.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/StoryReader.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_s(StoryReaderContent, "shC6RZFsxaaxz2gAI8cGRLhFxls=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = StoryReaderContent;
function StoryReader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoryReaderContent, {}, void 0, false, {
            fileName: "[project]/components/StoryReader.tsx",
            lineNumber: 203,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/StoryReader.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_c1 = StoryReader;
var _c, _c1;
__turbopack_context__.k.register(_c, "StoryReaderContent");
__turbopack_context__.k.register(_c1, "StoryReader");
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
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
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

//# sourceMappingURL=_16deb0h83wd5h._.js.map