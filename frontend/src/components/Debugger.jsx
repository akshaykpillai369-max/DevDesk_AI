import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

import ai from "../services/ai"
import { useAuth } from "../context/AuthContext"


const navigation = [
    {
        name: "Dashboard",
        to: "/dashboard",
        icon: (
            <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
        ),
    },
    {
        name: "AI Chat",
        to: "/chat",
        icon: (
            <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            >
                <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
            </svg>
        ),
    },
    {
        name: "Code Explainer",
        to: "/explainer",
        icon: (
            <span className="font-mono text-xs">
                {"</>"}
            </span>
        ),
    },
    {
        name: "Bug Finder",
        to: "/debugger",
        icon: (
            <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            >
                <path d="M6 8h12" />
                <path d="M6 12h12" />
                <path d="M6 16h8" />
            </svg>
        ),
    },
    {
        name: "Code Improver",
        to: "/improver",
        icon: (
            <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            >
                <path d="M5 19L19 5" />
                <path d="M8 5h11v11" />
            </svg>
        ),
    },
]


export default function CodeDebugger() {

    const { user } = useAuth()

    const [code, setCode] = useState("")
    const [response, setResponse] = useState("")
    const [loading, setLoading] = useState(false)


    const handleDebug = async () => {

        if (!code.trim() || loading) {
            return
        }

        setLoading(true)
        setResponse("")

        try {

            const result = await ai.debugCode(code)

            if (typeof result === "object" && result.error) {
                setResponse(result.error)
            } else {
                setResponse(result)
            }

        } catch {

            setResponse("Something went wrong while analyzing the code.")

        } finally {

            setLoading(false)

        }
    }


    const handleClearCode = () => {

        if (loading) {
            return
        }

        setCode("")
        setResponse("")

    }


    const lineCount = code
        ? code.split("\n").length
        : 0


    return (
        <div className="flex h-dvh overflow-hidden bg-zinc-950 text-white">

            {/* Background grid */}
            <div className="pointer-events-none fixed inset-0 opacity-3.5">

                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />

            </div>


            <div className="relative flex min-h-0 w-full">


                {/* Sidebar */}
                <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-zinc-950/90 p-5 backdrop-blur-xl md:flex md:flex-col">

                    {/* Logo */}
                    <div className="mb-8 flex items-center gap-3">

                        <Link
                            to="/dashboard"
                            className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white text-sm font-bold text-black"
                        >
                            D
                        </Link>

                        <div>

                            <p className="text-sm font-semibold tracking-tight">
                                DevDesk <span className="text-white/35">AI</span>
                            </p>

                            <p className="mt-0.5 text-[10px] text-white/25">
                                Developer workspace
                            </p>

                        </div>

                    </div>


                    {/* Navigation */}
                    <nav className="space-y-1">

                        {navigation.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                                        isActive
                                            ? "bg-white/10 text-white"
                                            : "text-white/45 hover:bg-white/5 hover:text-white"
                                    }`
                                }
                            >
                                {item.icon}
                                {item.name}
                            </NavLink>
                        ))}

                    </nav>


                    {/* Tool information */}
                    <div className="mt-8">

                        <p className="mb-3 px-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/25">
                            Current tool
                        </p>

                        <div className="rounded-xl border border-white/10 bg-white/3.5 p-3">

                            <div className="flex items-center gap-2">

                                <span className="flex size-7 items-center justify-center rounded-lg bg-white/10">

                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="M6 8h12" />
                                        <path d="M6 12h12" />
                                        <path d="M6 16h8" />
                                    </svg>

                                </span>

                                <div>

                                    <p className="text-xs font-medium text-white/65">
                                        Bug Finder
                                    </p>

                                    <p className="mt-0.5 text-[10px] text-white/25">
                                        Code analysis
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* User */}
                    <div className="mt-auto">

                        <div className="mb-4 border-t border-white/10" />

                        <Link
                            to="/dashboard"
                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/2.5 p-3 transition hover:bg-white/5"
                        >

                            <div className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5">

                                {user?.avatar_url ? (
                                    <img
                                        src={user.avatar_url}
                                        alt={user.username}
                                        className="size-full object-cover"
                                    />
                                ) : (
                                    <span className="text-xs font-medium">
                                        {user?.username?.[0]?.toUpperCase()}
                                    </span>
                                )}

                            </div>

                            <div className="min-w-0">

                                <p className="truncate text-xs font-medium text-white/80">
                                    {user?.username}
                                </p>

                                <p className="mt-0.5 text-[10px] text-white/30">
                                    Developer
                                </p>

                            </div>

                        </Link>

                    </div>

                </aside>


                {/* Main */}
                <main className="flex min-w-0 min-h-0 flex-1 flex-col">


                    {/* Header */}
                    <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-zinc-950/80 px-4 backdrop-blur-xl sm:px-6 lg:px-8">

                        <div className="flex items-center gap-3">

                            {/* Mobile logo */}
                            <Link
                                to="/dashboard"
                                className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white text-sm font-bold text-black md:hidden"
                            >
                                D
                            </Link>


                            <div>

                                <div className="flex items-center gap-2">

                                    <h1 className="text-sm font-semibold">
                                        Bug Finder
                                    </h1>

                                    <span className="hidden rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] text-white/30 sm:inline">
                                        CODE ANALYSIS
                                    </span>

                                </div>

                                <p className="text-[11px] text-white/30">
                                    Find bugs and potential problems in your code
                                </p>

                            </div>

                        </div>


                        <div className="flex items-center gap-2">

                            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:flex">

                                <span
                                    className={`size-1.5 rounded-full ${
                                        loading
                                            ? "animate-pulse bg-amber-400"
                                            : response
                                                ? "bg-emerald-400"
                                                : "bg-white/30"
                                    }`}
                                />

                                <span className="text-[11px] text-white/50">

                                    {loading
                                        ? "Analyzing"
                                        : response
                                            ? "Analysis ready"
                                            : "Ready"}

                                </span>

                            </div>


                            {/* Mobile back */}
                            <Link
                                to="/dashboard"
                                className="rounded-lg p-2 text-white/35 transition hover:bg-white/5 hover:text-white md:hidden"
                                aria-label="Back to dashboard"
                            >

                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>

                            </Link>

                        </div>

                    </header>


                    {/* Content */}
                    <section className="min-h-0 flex-1 overflow-y-auto">

                        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">


                            {/* Intro */}
                            <div className="mb-7">

                                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">

                                    <span className="size-1.5 rounded-full bg-emerald-400" />

                                    <span className="text-[10px] font-medium text-white/40">
                                        AI CODE ANALYSIS
                                    </span>

                                </div>


                                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                                    Find bugs in your code
                                </h2>


                                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/35">
                                    Paste your code below and DevDesk AI will analyze it
                                    for bugs, errors, edge cases, and potential problems.
                                </p>

                            </div>


                            {/* Editor layout */}
                            <div className="grid gap-5 xl:grid-cols-2">


                                {/* Code editor */}
                                <div className="flex min-h-128 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/2.5">


                                    {/* Editor header */}
                                    <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">

                                        <div className="flex items-center gap-3">

                                            <div className="flex gap-1.5">

                                                <span className="size-2 rounded-full bg-white/20" />
                                                <span className="size-2 rounded-full bg-white/20" />
                                                <span className="size-2 rounded-full bg-white/20" />

                                            </div>

                                            <span className="text-xs text-white/35">
                                                code
                                            </span>

                                        </div>


                                        <div className="flex items-center gap-2">

                                            {code && (
                                                <button
                                                    type="button"
                                                    onClick={handleClearCode}
                                                    disabled={loading}
                                                    className="rounded-md px-2 py-1 text-[10px] text-white/30 transition hover:bg-white/5 hover:text-white/60 disabled:cursor-not-allowed disabled:opacity-30"
                                                >
                                                    Clear
                                                </button>
                                            )}

                                            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/40">
                                                Code
                                            </span>

                                        </div>

                                    </div>


                                    {/* Code area */}
                                    <div className="relative flex min-h-0 flex-1">

                                        {/* Line numbers */}
                                        <div className="hidden w-12 shrink-0 select-none border-r border-white/5 bg-white/2 px-3 py-5 text-right font-mono text-xs leading-7 text-white/15 sm:block">

                                            {Array.from(
                                                { length: Math.max(lineCount, 1) },
                                                (_, index) => (
                                                    <div key={index}>
                                                        {index + 1}
                                                    </div>
                                                )
                                            )}

                                        </div>


                                        <textarea
                                            value={code}
                                            onChange={(event) => setCode(event.target.value)}
                                            placeholder={"Paste your code here...\n\nExample:\ndef divide(a, b):\n    return a / b"}
                                            spellCheck={false}
                                            className="min-h-96 min-w-0 flex-1 resize-none bg-transparent p-5 font-mono text-sm leading-7 text-white/80 outline-none placeholder:text-white/15 sm:min-h-0"
                                        />

                                    </div>


                                    {/* Editor footer */}
                                    <div className="flex shrink-0 items-center justify-between border-t border-white/10 p-3">

                                        <div className="text-[10px] text-white/20">

                                            {lineCount > 0
                                                ? `${lineCount} ${lineCount === 1 ? "line" : "lines"} · ${code.length} characters`
                                                : "Paste code to begin"}

                                        </div>


                                        <button
                                            type="button"
                                            disabled={!code.trim() || loading}
                                            onClick={handleDebug}
                                            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-30"
                                        >

                                            {loading ? (

                                                <>
                                                    <svg
                                                        className="size-4 animate-spin"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="9"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            className="opacity-20"
                                                        />

                                                        <path
                                                            d="M21 12a9 9 0 0 1-9 9"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>

                                                    Analyzing...

                                                </>

                                            ) : (

                                                <>
                                                    Find Bugs
                                                    <span>→</span>
                                                </>

                                            )}

                                        </button>

                                    </div>

                                </div>


                                {/* Analysis */}
                                <div className="flex min-h-128 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/2.5">


                                    {/* Analysis header */}
                                    <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">

                                        <div className="flex items-center gap-3">

                                            <div className="flex size-7 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-black">
                                                D
                                            </div>

                                            <div>

                                                <p className="text-sm font-medium text-white/70">
                                                    Bug Analysis
                                                </p>

                                                <p className="text-[10px] text-white/25">
                                                    AI-powered code review
                                                </p>

                                            </div>

                                        </div>


                                        {response && !loading && (
                                            <button
                                                type="button"
                                                onClick={() => setResponse("")}
                                                className="rounded-md px-2 py-1 text-[10px] text-white/30 transition hover:bg-white/5 hover:text-white/60"
                                            >
                                                Clear
                                            </button>
                                        )}

                                    </div>


                                    {/* Analysis body */}
                                    <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">

                                        {loading ? (

                                            <div className="flex h-full min-h-96 flex-col items-center justify-center text-center">

                                                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">

                                                    <svg
                                                        className="size-5 animate-spin text-white/60"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="9"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            className="opacity-20"
                                                        />

                                                        <path
                                                            d="M21 12a9 9 0 0 1-9 9"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>

                                                </div>


                                                <h3 className="text-sm font-medium text-white/65">
                                                    Analyzing your code
                                                </h3>


                                                <p className="mt-2 max-w-xs text-xs leading-5 text-white/25">
                                                    DevDesk AI is checking for bugs,
                                                    errors, edge cases, and potential issues.
                                                </p>

                                            </div>

                                        ) : response ? (

                                            <div>

                                                <div className="mb-5 flex items-center gap-2 rounded-xl border border-emerald-500/10 bg-emerald-500/5 px-3 py-2">

                                                    <span className="size-1.5 rounded-full bg-emerald-400" />

                                                    <span className="text-[11px] text-emerald-400/70">
                                                        Analysis complete
                                                    </span>

                                                </div>


                                                <div className="whitespace-pre-wrap text-left text-sm leading-7 text-white/70">
                                                    {response}
                                                </div>

                                            </div>

                                        ) : (

                                            <div className="flex h-full min-h-96 items-center justify-center text-center">

                                                <div className="max-w-sm">

                                                    <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">

                                                        <svg
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="1.7"
                                                        >
                                                            <path d="M6 8h12" />
                                                            <path d="M6 12h12" />
                                                            <path d="M6 16h8" />
                                                        </svg>

                                                    </div>


                                                    <h3 className="text-sm font-medium text-white/65">
                                                        Your bug analysis will appear here
                                                    </h3>


                                                    <p className="mt-2 text-xs leading-5 text-white/30">
                                                        Paste your code on the left and click{" "}
                                                        <span className="text-white/50">
                                                            Find Bugs
                                                        </span>{" "}
                                                        to start the analysis.
                                                    </p>

                                                </div>

                                            </div>

                                        )}

                                    </div>

                                </div>

                            </div>


                            {/* Tips */}
                            <div className="mt-5 grid gap-3 sm:grid-cols-3">

                                <div className="rounded-xl border border-white/10 bg-white/2.5 px-4 py-3">

                                    <p className="text-[11px] font-medium text-white/50">
                                        Include context
                                    </p>

                                    <p className="mt-1 text-[10px] leading-5 text-white/25">
                                        Include relevant functions or surrounding code when possible.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-white/2.5 px-4 py-3">

                                    <p className="text-[11px] font-medium text-white/50">
                                        Mention the error
                                    </p>

                                    <p className="mt-1 text-[10px] leading-5 text-white/25">
                                        If you have an error message, include it with your code.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-white/2.5 px-4 py-3">

                                    <p className="text-[11px] font-medium text-white/50">
                                        Verify the result
                                    </p>

                                    <p className="mt-1 text-[10px] leading-5 text-white/25">
                                        AI analysis can miss issues, so test suggested fixes.
                                    </p>

                                </div>

                            </div>


                            {/* Disclaimer */}
                            <p className="mt-5 text-center text-[10px] text-white/15">
                                DevDesk AI can make mistakes. Verify important code and information.
                            </p>

                        </div>

                    </section>

                </main>

            </div>

        </div>
    )
}