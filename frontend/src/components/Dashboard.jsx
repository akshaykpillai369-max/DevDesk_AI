import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Dashboard() {

    const { user } = useAuth()

    return (
        <div className="min-h-screen bg-zinc-950 text-white">

            {/* Background grid */}
            <div className="pointer-events-none fixed inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative flex min-h-screen">

                {/* Sidebar */}
                <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-zinc-950/90 p-5 md:flex md:flex-col">

                    {/* Logo */}
                    <div className="mb-10 flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path d="M8 9l-4 3 4 3" />
                                <path d="M16 9l4 3-4 3" />
                                <path d="M14 5l-4 14" />
                            </svg>
                        </div>

                        <span className="text-sm font-semibold tracking-tight">
                            DevDesk <span className="text-white/40">AI</span>
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-1">

                        <Link
                            to="/dashboard"
                            className="flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2.5 text-sm text-white"
                        >
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

                            Dashboard
                        </Link>

                        <Link
                            to="/chat"
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/50 transition hover:bg-white/5 hover:text-white"
                        >
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

                            AI Chat
                        </Link>

                        <Link
                            to="/explainer"
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/50 transition hover:bg-white/5 hover:text-white"
                        >
                            <span className="font-mono text-xs">
                                {"</>"}
                            </span>

                            Code Explainer
                        </Link>

                        <Link
                            to="/debugger"
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/50 transition hover:bg-white/5 hover:text-white"
                        >
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path d="M5 12h14" />
                                <path d="M8 7h8" />
                                <path d="M8 17h8" />
                            </svg>

                            Bug Finder
                        </Link>

                        <Link
                            to="/improver"
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/50 transition hover:bg-white/5 hover:text-white"
                        >
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

                            Code Improver
                        </Link>

                    </nav>

                    {/* Bottom navigation */}
                    <div className="mt-auto">
                        <div className="mb-4 border-t border-white/10" />

                        <Link
                            to="/projects"
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/50 transition hover:bg-white/5 hover:text-white"
                        >
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path d="M3 7h7l2 2h9v10H3z" />
                            </svg>

                            Projects
                        </Link>
                    </div>
                </aside>

                {/* Main content */}
                <main className="min-w-0 flex-1">

                    {/* Header */}
                    <header className="flex h-16 items-center justify-between border-b border-white/10 px-6 lg:px-10">

                        <div>
                            <p className="text-xs text-white/35">
                                Developer Workspace
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden text-right sm:block">
                                <p className="text-sm font-medium">
                                    {user?.username}
                                </p>

                                
                            </div>

                            <div className="flex size-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5">
                                <img
                                    src={user?.avatar_url}
                                    alt={user?.username}
                                    className="size-full object-cover"
                                />
                            </div>
                        </div>

                    </header>

                    {/* Dashboard */}
                    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

                        {/* Welcome */}
                        <div className="mb-10">
                            <p className="mb-2 text-sm text-white/35">
                                Welcome back
                            </p>

                            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                                What are you building today?
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
                                Use DevDesk AI to understand code, find bugs,
                                improve implementations, and build faster.
                            </p>
                        </div>

                        {/* Feature cards */}
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                            <Link
                                to="/chat"
                                className="group rounded-2xl border border-white/10 bg-white/3 p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
                            >
                                <div className="mb-6 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
                                    </svg>
                                </div>

                                <h2 className="text-sm font-semibold">
                                    AI Chat
                                </h2>

                                <p className="mt-2 text-xs leading-5 text-white/35">
                                    Discuss code, architecture, and development problems with AI.
                                </p>

                                <div className="mt-5 text-xs text-white/30 transition-colors group-hover:text-white/60">
                                    Open workspace →
                                </div>
                            </Link>

                            <Link
                                to="/explainer"
                                className="group rounded-2xl border border-white/10 bg-white/3 p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
                            >
                                <div className="mb-6 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-xs">
                                    {"</>"}
                                </div>

                                <h2 className="text-sm font-semibold">
                                    Code Explainer
                                </h2>

                                <p className="mt-2 text-xs leading-5 text-white/35">
                                    Turn confusing code into clear, understandable explanations.
                                </p>

                                <div className="mt-5 text-xs text-white/30 transition-colors group-hover:text-white/60">
                                    Explain code →
                                </div>
                            </Link>

                            <Link
                                to="/debugger"
                                className="group rounded-2xl border border-white/10 bg-white/3 p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
                            >
                                <div className="mb-6 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="M6 8h12" />
                                        <path d="M6 12h12" />
                                        <path d="M6 16h8" />
                                    </svg>
                                </div>

                                <h2 className="text-sm font-semibold">
                                    Bug Finder
                                </h2>

                                <p className="mt-2 text-xs leading-5 text-white/35">
                                    Identify bugs and understand why your code is failing.
                                </p>

                                <div className="mt-5 text-xs text-white/30 transition-colors group-hover:text-white/60">
                                    Find bugs →
                                </div>
                            </Link>

                            <Link
                                to="/improver"
                                className="group rounded-2xl border border-white/10 bg-white/3 p-5 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
                            >
                                <div className="mb-6 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="M5 19L19 5" />
                                        <path d="M8 5h11v11" />
                                    </svg>
                                </div>

                                <h2 className="text-sm font-semibold">
                                    Code Improver
                                </h2>

                                <p className="mt-2 text-xs leading-5 text-white/35">
                                    Improve readability, structure, and implementation quality.
                                </p>

                                <div className="mt-5 text-xs text-white/30 transition-colors group-hover:text-white/60">
                                    Improve code →
                                </div>
                            </Link>

                        </div>

                        {/* Recent activity */}
                        <div className="mt-10">

                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <h2 className="text-sm font-semibold">
                                        Recent activity
                                    </h2>

                                    <p className="mt-1 text-xs text-white/30">
                                        Your latest development sessions
                                    </p>
                                </div>

                                <Link
                                    to="/projects"
                                    className="text-xs text-white/35 transition-colors hover:text-white"
                                >
                                    View all →
                                </Link>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/3">

                                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                                    <div>
                                        <p className="text-sm text-white/80">
                                            JWT authentication flow
                                        </p>

                                        <p className="mt-1 text-xs text-white/30">
                                            AI Chat · Today
                                        </p>
                                    </div>

                                    <span className="rounded-lg border border-white/10 px-2.5 py-1 text-xs text-white/35">
                                        Session
                                    </span>
                                </div>

                                <div className="flex items-center justify-between px-5 py-4">
                                    <div>
                                        <p className="text-sm text-white/80">
                                            React AuthContext
                                        </p>

                                        <p className="mt-1 text-xs text-white/30">
                                            Code Explainer · Yesterday
                                        </p>
                                    </div>

                                    <span className="rounded-lg border border-white/10 px-2.5 py-1 text-xs text-white/35">
                                        Session
                                    </span>
                                </div>

                            </div>
                        </div>

                    </section>
                </main>
            </div>
        </div>
    )
}