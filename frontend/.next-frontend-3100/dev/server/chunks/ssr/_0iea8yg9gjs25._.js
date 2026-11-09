module.exports = [
"[project]/app/create/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreatePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChipGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChipGroup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingLantern$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadingLantern.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ErrorBoundary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$AudioRecorder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/story/AudioRecorder.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$TranscriptReview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/story/TranscriptReview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/registry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$stt$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/stt-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/story.ts [app-ssr] (ecmascript)");
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
;
;
const LANGUAGES = [
    "hi-IN",
    "en-IN",
    "hi-en",
    "mr-IN"
];
const AGE_BANDS = [
    "3-5",
    "6-8",
    "9-10"
];
const KINDS = [
    "memory",
    "folklore",
    "generated"
];
function CreatePageContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [ageBand, setAgeBand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("6-8");
    const [interests, setInterests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("hi-IN");
    const [kind, setKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("memory");
    const [interactive, setInteractive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [transcript, setTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [transcriptConfirmed, setTranscriptConfirmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMockMode, setIsMockMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(("TURBOPACK compile-time value", "api") !== "api");
    const [recordingMode, setRecordingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const toggleInterest = (v)=>{
        setInterests((prev)=>prev.includes(v) ? prev.filter((x)=>x !== v) : [
                ...prev,
                v
            ]);
    };
    const handleRecordingComplete = async (audioBlob, _duration)=>{
        if (isMockMode) {
            const mockTranscripts = {
                "hi-IN": "दादी ने आम के पेड़ के नीचे बैठकर कहानी सुनाई। चिंटू ने आम खाए और खुश हुआ।",
                "en-IN": "Grandma told a story under the mango tree. Chintu ate mangoes and was happy.",
                "hi-en": "Dadi ne aam ke ped ke neeche baith kar kahani sunai. Chintu ne aam khaye aur khush hua.",
                "mr-IN": "आजी आमच्या झाडाखाली बसून गोष्ट सांगितली. चिंटूने आम खाल्ले आणि आनंद झाला."
            };
            setTranscript(mockTranscripts[language] || "A wonderful memory shared by grandma.");
            setTranscriptConfirmed(true);
            return;
        }
        setLoading(true);
        setError("");
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$stt$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sttService"].transcribe(audioBlob, {
                languageCode: language,
                format: "codemix"
            });
            setTranscript(result.transcript);
            setTranscriptConfirmed(true);
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : "Could not transcribe the recording.");
        } finally{
            setLoading(false);
        }
    };
    const handleTranscriptConfirm = (confirmedTranscript)=>{
        setTranscript(confirmedTranscript);
        setTranscriptConfirmed(true);
        setStep(3);
    };
    const handleTranscriptRetry = ()=>{
        setTranscript("");
        setTranscriptConfirmed(false);
    };
    const handleTranscriptEdit = (editedTranscript)=>{
        setTranscript(editedTranscript);
    };
    const handleGenerate = async ()=>{
        setError("");
        if (!nickname.trim()) {
            setError("Please enter a nickname.");
            return;
        }
        if (!transcriptConfirmed) {
            setError("Please confirm your transcript first.");
            return;
        }
        if (!transcript.trim()) {
            setError("Please provide a story idea.");
            return;
        }
        setLoading(true);
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setServiceMode"])(isMockMode ? "mock" : "api");
            const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoryService"])();
            const input = {
                transcript,
                language,
                child: {
                    nickname,
                    ageBand,
                    interests
                },
                kind,
                interactive
            };
            const story = await service.create(input);
            router.push(`/story/${story.id}`);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
            setError(message);
        } finally{
            setLoading(false);
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingLantern$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        label: "Creating your story..."
    }, void 0, false, {
        fileName: "[project]/app/create/page.tsx",
        lineNumber: 106,
        columnNumber: 23
    }, this);
    const isStep1Complete = nickname.trim().length > 0;
    const isStep2Complete = transcriptConfirmed && transcript.trim().length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-2xl px-4 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        {
                            label: "Child",
                            num: 1
                        },
                        {
                            label: "Memory",
                            num: 2
                        },
                        {
                            label: "Style",
                            num: 3
                        },
                        {
                            label: "Generate",
                            num: 4
                        }
                    ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${step > s.num ? "bg-kg-amber text-kg-night" : step === s.num ? "bg-kg-amber text-kg-night" : "border-2 border-white/20 text-kg-cream/60"}`,
                                    children: step > s.num ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-5 w-5",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 19
                                    }, this) : s.num
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `mt-1 text-xs ${step >= s.num ? "text-kg-amber" : "text-kg-cream/40"}`,
                                    children: s.label
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                i < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-full h-1 mx-2 ${step > s.num ? "bg-kg-amber" : "bg-white/10"}`
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, s.label, true, {
                            fileName: "[project]/app/create/page.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/create/page.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/create/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 p-4 rounded-xl bg-kg-danger/20 border border-kg-danger/30 text-sm text-kg-danger",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/create/page.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this),
            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-6 space-y-6",
                "aria-labelledby": "step1-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "step1-heading",
                        className: "sr-only",
                        children: "Step 1: Child details"
                    }, void 0, false, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "nickname",
                                className: "block text-sm text-kg-cream/80",
                                children: "Child's nickname"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "nickname",
                                value: nickname,
                                onChange: (e)=>setNickname(e.target.value),
                                className: "mt-1 w-full rounded-xl border border-white/20 bg-kg-night/60 px-4 py-3 text-kg-cream outline-none focus:border-kg-amber focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                                placeholder: "e.g. Chintu",
                                autoComplete: "off",
                                maxLength: 50
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-kg-cream/40",
                                children: "This name will appear in the story"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm text-kg-cream/80",
                                children: "Age group"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex gap-2",
                                role: "radiogroup",
                                "aria-label": "Age group",
                                children: AGE_BANDS.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setAgeBand(b),
                                        role: "radio",
                                        "aria-checked": ageBand === b,
                                        className: `rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night ${ageBand === b ? "border-kg-amber bg-kg-amber text-kg-night" : "border-white/20 text-kg-cream/80"}`,
                                        children: b
                                    }, b, false, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm text-kg-cream/80",
                                children: "Interests"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChipGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    options: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTEREST_OPTIONS"],
                                    selected: interests,
                                    onToggle: toggleInterest
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-kg-cream/40",
                                children: "Select up to 10 interests"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStep(2),
                        disabled: !nickname.trim(),
                        className: "w-full rounded-full bg-kg-amber px-6 py-3 font-medium text-kg-night focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night disabled:opacity-50 disabled:cursor-not-allowed",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/create/page.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this),
            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-6 space-y-6",
                "aria-labelledby": "step2-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "step2-heading",
                        className: "sr-only",
                        children: "Step 2: Tell the memory"
                    }, void 0, false, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this),
                    !transcriptConfirmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm text-kg-cream/80",
                                        children: "How would you like to share the memory?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 grid gap-3 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setRecordingMode(false),
                                                className: `p-6 rounded-2xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night ${!recordingMode ? "border-kg-amber bg-kg-amber/10" : "border-white/10 hover:border-kg-amber/50"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-12 w-12 items-center justify-center rounded-full bg-kg-teal/20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "h-6 w-6 text-kg-teal",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                "aria-hidden": "true",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/create/page.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-medium text-kg-cream",
                                                                    children: "Type the memory"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-kg-cream/60",
                                                                    children: "Write the memory in your own words"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/create/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setRecordingMode(true),
                                                className: `p-6 rounded-2xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night ${recordingMode ? "border-kg-amber bg-kg-amber/10" : "border-white/10 hover:border-kg-amber/50"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-12 w-12 items-center justify-center rounded-full bg-kg-amber/20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "h-6 w-6 text-kg-amber",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                "aria-hidden": "true",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h10m-7 4a1 1 0 11-2 0 1 1 0 012 0z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/create/page.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-medium text-kg-cream",
                                                                    children: "Record the memory"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-kg-cream/60",
                                                                    children: "Speak the memory aloud (max 30s)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/create/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this),
                            recordingMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$AudioRecorder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onRecordingComplete: handleRecordingComplete,
                                maxDurationSeconds: 30,
                                maxSizeBytes: 5 * 1024 * 1024
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 248,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "transcript",
                                        className: "block text-sm text-kg-cream/80",
                                        children: "Type your memory"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "transcript",
                                        value: transcript,
                                        onChange: (e)=>{
                                            setTranscript(e.target.value);
                                            setTranscriptConfirmed(false);
                                        },
                                        rows: 6,
                                        className: "mt-1 w-full rounded-xl border border-white/20 bg-kg-night/60 px-4 py-3 text-kg-cream outline-none focus:border-kg-amber focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                                        placeholder: "Type the memory in your own words...",
                                        maxLength: 5000
                                    }, void 0, false, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-kg-cream/40",
                                                children: [
                                                    transcript.trim().split(" ").filter(Boolean).length,
                                                    " words · ",
                                                    transcript.length,
                                                    " characters"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/create/page.tsx",
                                                lineNumber: 266,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setTranscriptConfirmed(true),
                                                disabled: !transcript.trim(),
                                                className: "px-4 py-2 rounded-lg bg-kg-amber text-kg-night font-medium focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night disabled:opacity-50 disabled:cursor-not-allowed",
                                                children: "Continue to review"
                                            }, void 0, false, {
                                                fileName: "[project]/app/create/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 265,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 254,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 204,
                        columnNumber: 13
                    }, this),
                    transcriptConfirmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$TranscriptReview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        transcript: transcript,
                        language: language,
                        isMock: isMockMode,
                        onConfirm: handleTranscriptConfirm,
                        onRetry: handleTranscriptRetry,
                        onEdit: handleTranscriptEdit
                    }, void 0, false, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 283,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/create/page.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this),
            step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-6 space-y-6",
                "aria-labelledby": "step3-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "step3-heading",
                        className: "sr-only",
                        children: "Step 3: Story settings"
                    }, void 0, false, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm text-kg-cream/80",
                                children: "Language"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex flex-wrap gap-2",
                                role: "radiogroup",
                                "aria-label": "Language",
                                children: LANGUAGES.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLanguage(l),
                                        role: "radio",
                                        "aria-checked": language === l,
                                        className: `rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night ${language === l ? "border-kg-amber bg-kg-amber text-kg-night" : "border-white/20 text-kg-cream/80"}`,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGE_LABELS"][l]
                                    }, l, false, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm text-kg-cream/80",
                                children: "Story style"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex gap-2",
                                role: "radiogroup",
                                "aria-label": "Story style",
                                children: KINDS.map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setKind(k),
                                        role: "radio",
                                        "aria-checked": kind === k,
                                        className: `rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night ${kind === k ? "border-kg-amber bg-kg-amber text-kg-night" : "border-white/20 text-kg-cream/80"}`,
                                        children: k
                                    }, k, false, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "interactive",
                                type: "checkbox",
                                checked: interactive,
                                onChange: (e)=>setInteractive(e.target.checked),
                                className: "h-4 w-4 focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "interactive",
                                className: "text-sm text-kg-cream/80",
                                children: "Interactive choices"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 338,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep(2),
                                className: "rounded-full border border-white/20 px-6 py-3 text-kg-cream focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep(4),
                                className: "rounded-full bg-kg-amber px-6 py-3 font-medium text-kg-night focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 340,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/create/page.tsx",
                lineNumber: 296,
                columnNumber: 9
            }, this),
            step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-6 space-y-6",
                "aria-labelledby": "step4-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "step4-heading",
                        className: "sr-only",
                        children: "Step 4: Generate story"
                    }, void 0, false, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-white/10 bg-kg-cream/5 p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-heading text-xl text-kg-cream",
                                children: "Review"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-3 space-y-1 text-sm text-kg-cream/70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Nickname: ",
                                            nickname
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Age: ",
                                            ageBand
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Language: ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGE_LABELS"][language]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Style: ",
                                            kind,
                                            " · ",
                                            interactive ? "interactive" : "linear"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Interests: ",
                                            interests.join(", ") || "—"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "line-clamp-3",
                                        children: [
                                            "Idea: ",
                                            transcript
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 362,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-3 mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: isMockMode,
                                        onChange: (e)=>setIsMockMode(e.target.checked),
                                        className: "h-4 w-4 focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 369,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-kg-cream/80",
                                        children: "Use mock mode (demo)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 368,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/create/page.tsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 366,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-kg-danger",
                        role: "alert",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 380,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setStep(3),
                                className: "rounded-full border border-white/20 px-6 py-3 text-kg-cream focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleGenerate,
                                className: "flex-1 rounded-full bg-kg-amber px-6 py-3 font-medium text-kg-night focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                                children: "Generate story"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 385,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 381,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-kg-cream/40 text-center",
                        children: isMockMode ? "Demo mode uses a mock response." : "Real generation uses Grok, with Gnani for speech features."
                    }, void 0, false, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 392,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/create/page.tsx",
                lineNumber: 352,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/create/page.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
function CreatePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreatePageContent, {}, void 0, false, {
            fileName: "[project]/app/create/page.tsx",
            lineNumber: 404,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/create/page.tsx",
        lineNumber: 403,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ChipGroup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChipGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function ChipGroup({ options, selected, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2",
        role: "group",
        "aria-label": "Interests",
        children: options.map((opt)=>{
            const active = selected.includes(opt);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onToggle(opt),
                role: "checkbox",
                "aria-checked": active,
                className: `rounded-full border px-3 py-1.5 text-sm transition ${active ? "border-kg-amber bg-kg-amber text-kg-night" : "border-white/20 bg-white/5 text-kg-cream/80 hover:border-kg-amber/50"}`,
                children: opt
            }, opt, false, {
                fileName: "[project]/components/ChipGroup.tsx",
                lineNumber: 17,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/ChipGroup.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ErrorBoundary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-2xl px-4 py-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-5xl",
                        role: "img",
                        "aria-label": "Error",
                        children: "😔"
                    }, void 0, false, {
                        fileName: "[project]/components/ErrorBoundary.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-4 font-heading text-2xl text-kg-cream",
                        children: "Something went wrong"
                    }, void 0, false, {
                        fileName: "[project]/components/ErrorBoundary.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-kg-cream/70",
                        children: "We couldn't load the story. Please try again or go back to your storybook."
                    }, void 0, false, {
                        fileName: "[project]/components/ErrorBoundary.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.location.reload(),
                                className: "rounded-full bg-kg-amber px-5 py-2 text-kg-night",
                                children: "Refresh page"
                            }, void 0, false, {
                                fileName: "[project]/components/ErrorBoundary.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    ("TURBOPACK compile-time value", "development") === "development" && this.state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "mt-6 text-left text-xs text-kg-cream/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                children: "Error details (development)"
                            }, void 0, false, {
                                fileName: "[project]/components/ErrorBoundary.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
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
}),
"[project]/components/LoadingLantern.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingLantern
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const lines = [
    "Lighting the lantern...",
    "Gathering the words...",
    "Shaping the story...",
    "Almost ready..."
];
function LoadingLantern({ label }) {
    const [i, setI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [reduceMotion, setReduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handler = (e)=>setReduceMotion(e.matches);
        setReduceMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", handler);
        return ()=>mediaQuery.removeEventListener("change", handler);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (reduceMotion) return;
        const t = setInterval(()=>setI((v)=>(v + 1) % lines.length), 900);
        return ()=>clearInterval(t);
    }, [
        reduceMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-4 py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-16 w-16",
                "aria-hidden": "true",
                children: [
                    !reduceMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 animate-ping rounded-full bg-kg-amber/30"
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingLantern.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-heading text-lg text-kg-amber",
                children: label ?? lines[i]
            }, void 0, false, {
                fileName: "[project]/components/LoadingLantern.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/components/story/AudioRecorder.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AudioRecorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const MAX_DURATION_SECONDS = 30;
const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
function AudioRecorder({ onRecordingComplete, onError, maxDurationSeconds = MAX_DURATION_SECONDS, maxSizeBytes = MAX_SIZE_BYTES }) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [audioBlob, setAudioBlob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [audioUrl, setAudioUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [micPermission, setMicPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("prompt");
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const pausedTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track)=>track.stop());
            streamRef.current = null;
        }
        if (audioUrl) {
            URL.revokeObjectURL(audioUrl);
            setAudioUrl(null);
        }
    }, [
        audioUrl
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        cleanup();
        setState("idle");
        setDuration(0);
        setAudioBlob(null);
        setError(null);
        startTimeRef.current = 0;
        pausedTimeRef.current = 0;
        chunksRef.current = [];
    }, [
        cleanup
    ]);
    const startRecording = async ()=>{
        setError(null);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true
                }
            });
            setMicPermission("granted");
            streamRef.current = stream;
            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: "audio/webm;codecs=opus"
            });
            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];
            mediaRecorder.ondataavailable = (e)=>{
                if (e.data.size > 0) {
                    chunksRef.current.push(e.data);
                }
            };
            mediaRecorder.onstop = ()=>{
                const blob = new Blob(chunksRef.current, {
                    type: "audio/webm;codecs=opus"
                });
                if (blob.size > 0) {
                    setAudioBlob(blob);
                    const url = URL.createObjectURL(blob);
                    setAudioUrl(url);
                    setState("preview");
                } else {
                    setError("Recording is empty. Please try again.");
                    setState("idle");
                }
                cleanup();
            };
            mediaRecorder.start(100);
            setState("recording");
            // eslint-disable-next-line react-hooks/purity
            startTimeRef.current = Date.now() - pausedTimeRef.current;
            timerRef.current = setInterval(()=>{
                // eslint-disable-next-line react-hooks/purity
                setDuration((Date.now() - startTimeRef.current) / 1000);
            }, 100);
            mediaRecorder.onerror = (e)=>{
                console.error("MediaRecorder error:", e);
                setError("Recording failed. Please try again.");
                stopRecording();
            };
        } catch (err) {
            if (err instanceof DOMException && err.name === "NotAllowedError") {
                setMicPermission("denied");
                setError("Microphone access denied. Please allow microphone access in your browser settings.");
            } else if (err instanceof DOMException && err.name === "NotFoundError") {
                setError("No microphone found. Please connect a microphone and try again.");
            } else {
                console.error("Recording error:", err);
                setError("Failed to start recording. Please try again.");
            }
            setState("idle");
        }
    };
    const pauseRecording = ()=>{
        if (mediaRecorderRef.current && state === "recording") {
            mediaRecorderRef.current.pause();
            // eslint-disable-next-line react-hooks/purity
            pausedTimeRef.current = Date.now() - startTimeRef.current;
            setState("paused");
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }
    };
    const resumeRecording = ()=>{
        if (mediaRecorderRef.current && state === "paused") {
            mediaRecorderRef.current.resume();
            // eslint-disable-next-line react-hooks/purity
            startTimeRef.current = Date.now() - pausedTimeRef.current;
            setState("recording");
            timerRef.current = setInterval(()=>{
                // eslint-disable-next-line react-hooks/purity
                setDuration((Date.now() - startTimeRef.current) / 1000);
            }, 100);
        }
    };
    const stopRecording = ()=>{
        if (mediaRecorderRef.current && (state === "recording" || state === "paused")) {
            mediaRecorderRef.current.stop();
        }
    };
    const discardRecording = ()=>{
        cleanup();
        setState("idle");
        setDuration(0);
        setAudioBlob(null);
        pausedTimeRef.current = 0;
    };
    const handleConfirm = ()=>{
        if (audioBlob && audioBlob.size > 0) {
            if (audioBlob.size > maxSizeBytes) {
                setError(`Recording is too large (${Math.round(audioBlob.size / 1024)} KB). Maximum size is ${Math.round(maxSizeBytes / 1024)} KB.`);
                return;
            }
            onRecordingComplete(audioBlob, duration);
            reset();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>cleanup();
    }, [
        cleanup
    ]);
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-white/10 bg-kg-cream/5 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-heading text-lg text-kg-cream",
                        children: "Record your memory"
                    }, void 0, false, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-sm font-mono ${state === "recording" ? "text-kg-danger" : "text-kg-cream/60"}`,
                        children: [
                            formatTime(duration),
                            " / ",
                            formatTime(maxDurationSeconds)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/story/AudioRecorder.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-3 rounded-lg bg-kg-danger/20 border border-kg-danger/30 text-sm text-kg-danger",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/story/AudioRecorder.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this),
            micPermission === "denied" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-3 rounded-lg bg-kg-danger/20 border border-kg-danger/30 text-sm text-kg-danger",
                children: "Microphone access is blocked. Please enable microphone permissions in your browser settings and refresh the page."
            }, void 0, false, {
                fileName: "[project]/components/story/AudioRecorder.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this),
            state === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-kg-teal/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-10 w-10 text-kg-teal",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h10m-7 4a1 1 0 11-2 0 1 1 0 012 0z"
                            }, void 0, false, {
                                fileName: "[project]/components/story/AudioRecorder.tsx",
                                lineNumber: 215,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/story/AudioRecorder.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-kg-cream/60 mb-4",
                        children: "Tap the button below to start recording your memory"
                    }, void 0, false, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-kg-cream/40 mb-6",
                        children: [
                            "Maximum ",
                            Math.round(maxDurationSeconds / 60),
                            " minute, max 5 MB"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: startRecording,
                        disabled: micPermission === "denied",
                        className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-kg-amber text-kg-night text-2xl focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night transition-transform hover:scale-105 active:scale-95",
                        "aria-label": "Start recording",
                        children: "🎙"
                    }, void 0, false, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/story/AudioRecorder.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, this),
            state === "recording" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mb-4 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto h-20 w-20 rounded-full bg-kg-danger/20 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/components/story/AudioRecorder.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex h-20 w-20 items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-10 w-10 text-kg-danger animate-pulse",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/story/AudioRecorder.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M9 15c0 1.66 1.34 3 3 3h6c1.66 0 3-1.34 3-3v-2H9v2zm9-6c0 1.11-.89 2-2 2s-2-.89-2-2H9c0 1.11.89 2 2 2h10zm-6 8c1.11 0 2-.89 2-2s-.89-2-2-2H9c-1.11 0-2 .89-2 2v2h10v-2z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/components/story/AudioRecorder.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/story/AudioRecorder.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/story/AudioRecorder.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: pauseRecording,
                                className: "flex h-12 w-12 items-center justify-center rounded-full bg-kg-cream/10 text-kg-cream focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                                "aria-label": "Pause recording",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-6 w-6",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/AudioRecorder.tsx",
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/story/AudioRecorder.tsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/story/AudioRecorder.tsx",
                                lineNumber: 243,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: stopRecording,
                                className: "flex h-14 w-14 items-center justify-center rounded-full bg-kg-danger text-white focus:outline-none focus:ring-2 focus:ring-kg-danger focus:ring-offset-2 focus:ring-offset-kg-night",
                                "aria-label": "Stop recording",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-7 w-7",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/AudioRecorder.tsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/story/AudioRecorder.tsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/story/AudioRecorder.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/story/AudioRecorder.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, this),
            state === "paused" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-kg-amber/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-10 w-10 text-kg-amber",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                            }, void 0, false, {
                                fileName: "[project]/components/story/AudioRecorder.tsx",
                                lineNumber: 269,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/story/AudioRecorder.tsx",
                            lineNumber: 268,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-kg-cream/60 mb-4",
                        children: "Recording paused"
                    }, void 0, false, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: resumeRecording,
                                className: "flex h-14 w-14 items-center justify-center rounded-full bg-kg-amber text-kg-night focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                                "aria-label": "Resume recording",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-7 w-7",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 4v16h4V4H6zm8 0v16h4V4h-4z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/AudioRecorder.tsx",
                                        lineNumber: 280,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/story/AudioRecorder.tsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/story/AudioRecorder.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: stopRecording,
                                className: "flex h-14 w-14 items-center justify-center rounded-full bg-kg-danger text-white focus:outline-none focus:ring-2 focus:ring-kg-danger focus:ring-offset-2 focus:ring-offset-kg-night",
                                "aria-label": "Stop and save recording",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-7 w-7",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/AudioRecorder.tsx",
                                        lineNumber: 289,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/story/AudioRecorder.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/story/AudioRecorder.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: discardRecording,
                                className: "flex h-12 w-12 items-center justify-center rounded-full bg-kg-cream/10 text-kg-cream focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                                "aria-label": "Discard recording",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-6 w-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/AudioRecorder.tsx",
                                        lineNumber: 298,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/story/AudioRecorder.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/story/AudioRecorder.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 273,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/story/AudioRecorder.tsx",
                lineNumber: 266,
                columnNumber: 9
            }, this),
            state === "preview" && audioUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-kg-teal/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-10 w-10 text-kg-teal",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                            }, void 0, false, {
                                fileName: "[project]/components/story/AudioRecorder.tsx",
                                lineNumber: 309,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/story/AudioRecorder.tsx",
                            lineNumber: 308,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-kg-cream/60 mb-4",
                        children: "Preview your recording"
                    }, void 0, false, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                        controls: true,
                        className: "w-full max-w-xs mx-auto mb-4",
                        src: audioUrl
                    }, void 0, false, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-kg-cream/50 mb-4",
                        children: [
                            "Duration: ",
                            formatTime(duration),
                            " • Size: ",
                            Math.round((audioBlob?.size || 0) / 1024),
                            " KB"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: discardRecording,
                                className: "flex h-12 w-12 items-center justify-center rounded-full bg-kg-cream/10 text-kg-cream focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                                "aria-label": "Re-record",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-6 w-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/AudioRecorder.tsx",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/story/AudioRecorder.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/story/AudioRecorder.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleConfirm,
                                className: "flex h-14 w-14 items-center justify-center rounded-full bg-kg-amber text-kg-night focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                                "aria-label": "Use this recording",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-7 w-7",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/AudioRecorder.tsx",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/story/AudioRecorder.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/story/AudioRecorder.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/AudioRecorder.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/story/AudioRecorder.tsx",
                lineNumber: 306,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-xs text-center text-kg-cream/40",
                children: [
                    "Maximum ",
                    Math.round(maxDurationSeconds / 60),
                    " minute recording • Maximum 5 MB • Audio recorded in browser"
                ]
            }, void 0, true, {
                fileName: "[project]/components/story/AudioRecorder.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/story/AudioRecorder.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/story/TranscriptReview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TranscriptReview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/story.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function TranscriptReview({ transcript, language, isMock, onConfirm, onRetry, onEdit }) {
    const [editedTranscript, setEditedTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(transcript);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasEdited, setHasEdited] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setEditedTranscript(transcript);
        setHasEdited(false);
    }, [
        transcript
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isEditing && textareaRef.current) {
            textareaRef.current.focus();
            textareaRef.current.select();
        }
    }, [
        isEditing
    ]);
    const handleEdit = ()=>{
        setIsEditing(true);
    };
    const handleSave = ()=>{
        onEdit(editedTranscript);
        setIsEditing(false);
        setHasEdited(true);
    };
    const handleCancel = ()=>{
        setEditedTranscript(transcript);
        setIsEditing(false);
        setHasEdited(false);
    };
    const handleConfirm = ()=>{
        onConfirm(editedTranscript);
    };
    const handleRetry = ()=>{
        onRetry();
    };
    const wordCount = editedTranscript.trim().split(/\s+/).filter(Boolean).length;
    const charCount = editedTranscript.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-white/10 bg-kg-cream/5 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-heading text-lg text-kg-cream",
                                children: "Review transcript"
                            }, void 0, false, {
                                fileName: "[project]/components/story/TranscriptReview.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-kg-cream/60",
                                children: [
                                    "Language: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$story$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LANGUAGE_LABELS"][language] || language
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/TranscriptReview.tsx",
                                        lineNumber: 73,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/TranscriptReview.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/TranscriptReview.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    isMock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-1 text-xs rounded-full bg-kg-amber/20 text-kg-amber",
                        children: "Demo transcript"
                    }, void 0, false, {
                        fileName: "[project]/components/story/TranscriptReview.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/story/TranscriptReview.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            isMock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-3 rounded-lg bg-kg-amber/10 border border-kg-amber/20 text-sm text-kg-amber",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Demo mode: "
                    }, void 0, false, {
                        fileName: "[project]/components/story/TranscriptReview.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    "This transcript was generated for demonstration purposes. In the full app, this would come from Gnani Prisma STT."
                ]
            }, void 0, true, {
                fileName: "[project]/components/story/TranscriptReview.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "transcript",
                        className: "block text-sm text-kg-cream/80 mb-2",
                        children: [
                            "Transcript ",
                            isEditing ? "(editing)" : "",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-kg-cream/50 ml-2",
                                children: [
                                    wordCount,
                                    " words · ",
                                    charCount,
                                    " characters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/TranscriptReview.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/TranscriptReview.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: textareaRef,
                        id: "transcript",
                        value: editedTranscript,
                        onChange: (e)=>setEditedTranscript(e.target.value),
                        rows: 6,
                        className: "w-full rounded-xl border border-kg-amber/30 bg-kg-night/60 px-4 py-3 text-kg-cream outline-none focus:border-kg-amber focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                        placeholder: "Transcript will appear here...",
                        autoFocus: true
                    }, void 0, false, {
                        fileName: "[project]/components/story/TranscriptReview.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full rounded-xl border border-white/10 bg-kg-night/60 px-4 py-3 text-kg-cream min-h-[100px]",
                        style: {
                            whiteSpace: "pre-wrap"
                        },
                        children: editedTranscript || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-kg-cream/30",
                            children: "(empty transcript)"
                        }, void 0, false, {
                            fileName: "[project]/components/story/TranscriptReview.tsx",
                            lineNumber: 113,
                            columnNumber: 34
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/story/TranscriptReview.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-kg-cream/40",
                                children: [
                                    editedTranscript.trim().split(/\s+/).filter(Boolean).length,
                                    " words · ",
                                    editedTranscript.length,
                                    " characters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/TranscriptReview.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCancel,
                                        className: "px-3 py-1.5 text-sm rounded-lg border border-white/20 text-kg-cream hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/TranscriptReview.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSave,
                                        className: "px-3 py-1.5 text-sm rounded-lg bg-kg-amber text-kg-night font-medium focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night",
                                        children: "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/TranscriptReview.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/TranscriptReview.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/TranscriptReview.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/story/TranscriptReview.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleRetry,
                        className: "flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-white/20 text-kg-cream hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "inline h-4 w-4 mr-2",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                }, void 0, false, {
                                    fileName: "[project]/components/story/TranscriptReview.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/story/TranscriptReview.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            "Retry transcription"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/TranscriptReview.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleEdit,
                        className: "flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-kg-teal/30 text-kg-teal hover:bg-kg-teal/10 focus:outline-none focus:ring-2 focus:ring-kg-teal focus:ring-offset-2 focus:ring-offset-kg-night transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "inline h-4 w-4 mr-2",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                }, void 0, false, {
                                    fileName: "[project]/components/story/TranscriptReview.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/story/TranscriptReview.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            "Edit"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/TranscriptReview.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleConfirm,
                        disabled: !editedTranscript.trim(),
                        className: "flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-kg-amber text-kg-night font-medium focus:outline-none focus:ring-2 focus:ring-kg-amber focus:ring-offset-2 focus:ring-offset-kg-night disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "inline h-4 w-4 mr-2",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                }, void 0, false, {
                                    fileName: "[project]/components/story/TranscriptReview.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/story/TranscriptReview.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            "Continue to story settings"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/TranscriptReview.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/story/TranscriptReview.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/story/TranscriptReview.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/data/mock-stories.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/services/api-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$browser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth/browser.ts [app-ssr] (ecmascript)");
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
                const { data: { session } } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2f$browser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBrowserSupabase"])().auth.getSession();
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
}),
"[project]/lib/services/api-story-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiStoryService",
    ()=>ApiStoryService,
    "apiStoryService",
    ()=>apiStoryService
]);
// Real API implementation of StoryService
// Calls backend API routes per API Contract v1.1
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/api-client.ts [app-ssr] (ecmascript)");
;
class ApiStoryService {
    basePath = "/stories";
    async list() {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`${this.basePath}`);
        return response.data.stories;
    }
    async get(id) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`${this.basePath}/${id}`);
            return response.data;
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"] && error.status === 404) {
                return null;
            }
            throw error;
        }
    }
    async create(input) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(this.basePath, input, {
            timeout: 90_000
        });
        return response.data;
    }
    async remove(id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete(`${this.basePath}/${id}`);
    }
    async search(filters) {
        const params = new URLSearchParams();
        if (filters.query?.trim()) params.set("query", filters.query.trim());
        if (filters.language && filters.language !== "all") params.set("language", filters.language);
        if (filters.kind && filters.kind !== "all") params.set("kind", filters.kind);
        if (filters.narrator && filters.narrator !== "all") params.set("narrator", filters.narrator);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`${this.basePath}?${params.toString()}`);
        return response.data.stories;
    }
    async branch(storyId, choice, storySoFar) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`${this.basePath}/${storyId}/branch`, {
            choice,
            storySoFar
        });
        return response.data.scenes;
    }
}
const apiStoryService = new ApiStoryService();
}),
"[project]/lib/services/registry.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$story$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/story-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$story$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/api-story-service.ts [app-ssr] (ecmascript)");
;
;
let currentMode = "auto";
let currentService = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$story$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockStoryService"];
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$story$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockStoryService"];
        case "api":
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$story$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiStoryService"];
        case "auto":
            // In production (no development env), default to API
            // In development, default to mock unless explicitly configured
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$story$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockStoryService"];
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
}),
"[project]/lib/services/story-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mock$2d$stories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/mock-stories.ts [app-ssr] (ecmascript)");
;
const STORAGE_KEY = "kahani-ghar:stories:v1";
function readStorage() {
    if ("TURBOPACK compile-time truthy", 1) return {
        data: null,
        error: "Not in browser environment"
    };
    //TURBOPACK unreachable
    ;
}
function writeStorage(stories) {
    if ("TURBOPACK compile-time truthy", 1) return {
        data: null,
        error: "Not in browser environment"
    };
    //TURBOPACK unreachable
    ;
}
function delay(ms) {
    return new Promise((r)=>setTimeout(r, ms));
}
// In-memory store, hydrated from localStorage on first client access.
let store = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mock$2d$stories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_STORIES"]
];
let hydrated = false;
function ensureHydrated() {
    if (hydrated) return;
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const result = undefined;
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
}),
"[project]/lib/services/stt-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SttService",
    ()=>SttService,
    "sttService",
    ()=>sttService
]);
// STT Service - Speech to Text using Gnani Prisma via backend API
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/api-client.ts [app-ssr] (ecmascript)");
;
class SttService {
    basePath = "/stt";
    async transcribe(audioBlob, options = {}) {
        const formData = new FormData();
        formData.append("audio_file", audioBlob, "recording.wav");
        if (options.languageCode) formData.append("language_code", options.languageCode);
        if (options.model) formData.append("model", options.model);
        if (options.format) formData.append("format", options.format);
        if (options.topic) formData.append("topic", options.topic);
        if (options.keyterms?.length) formData.append("keyterms", JSON.stringify(options.keyterms));
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].postForm(this.basePath, formData, {
                timeout: 60_000
            });
            return response.data;
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"]) {
                // Map specific error codes
                if (error.code === "EMPTY_AUDIO" || error.code === "MAX_AUDIO_SIZE_EXCEEDED") {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"]("VALIDATION_ERROR", 400, false, error.details);
                }
                if (error.status === 429 || error.code === "GNANI_RATE_LIMITED") {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"]("RATE_LIMITED", 429, true, error.details);
                }
                if (error.code === "GNANI_AUTH_FAILED") {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"]("SERVICE_UNAVAILABLE", 503, false, error.details);
                }
            }
            throw error;
        }
    }
}
const sttService = new SttService();
}),
"[project]/types/story.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];

//# sourceMappingURL=_0iea8yg9gjs25._.js.map