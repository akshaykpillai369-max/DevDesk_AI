import { NavLink, Link } from "react-router-dom"
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


const tools = [
    {
        title: "Code Explainer",
        description: "Understand unfamiliar code with clear explanations.",
        action: "Explain code",
        to: "/explainer",
        icon: (
            <span className="font-mono text-sm">
                {"</>"}
            </span>
        ),
    },
    {
        title: "Bug Finder",
        description: "Identify bugs, errors, and potential problems.",
        action: "Find bugs",
        to: "/debugger",
        icon: (
            <svg
                width="19"
                height="19"
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
        title: "Code Improver",
        description: "Improve readability, structure, and maintainability.",
        action: "Improve code",
        to: "/improver",
        icon: (
            <svg
                width="19"
                height="19"
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


export default function Dashboard() {

    const { user } = useAuth()

    return (
        <div className="min-h-screen bg-zinc-950 text-white">

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


            <div className="relative flex min-h-screen">

                {/* Sidebar */}
                <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-zinc-950/90 p-5 backdrop-blur-xl md:flex md:flex-col">

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


                    {/* Bottom section */}
                    <div className="mt-auto">

                        <div className="mb-4 border-t border-white/10" />

                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                                    isActive
                                        ? "bg-white/10 text-white"
                                        : "text-white/45 hover:bg-white/5 hover:text-white"
                                }`
                            }
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

                        </NavLink>


                        {/* User */}
                        <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/2.5 p-3">

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

                                <div className="mt-1 flex items-center gap-1.5">

                                    <span className="size-1.5 rounded-full bg-emerald-400" />

                                    <span className="text-[10px] text-white/30">
                                        GitHub connected
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </aside>


                {/* Main */}
                <main className="min-w-0 flex-1">

                    {/* Header */}
                    <header className="flex h-16 items-center justify-between border-b border-white/10 px-6 backdrop-blur-xl lg:px-10">

                        <p className="text-xs text-white/30">
                            Developer Workspace
                        </p>


                        <div className="flex items-center gap-3">

                            <div className="hidden text-right sm:block">

                                <p className="text-sm font-medium text-white/80">
                                    {user?.username}
                                </p>

                                <p className="text-[10px] text-white/30">
                                    Developer
                                </p>

                            </div>


                            <div className="flex size-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5">

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

                        </div>

                    </header>


                    {/* Dashboard content */}
                    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

                        {/* Hero */}
                        <div className="relative mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 p-7 sm:p-9">

                            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/2.5 blur-3xl" />


                            <div className="relative max-w-3xl">

                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">

                                    <span className="size-1.5 rounded-full bg-emerald-400" />

                                    <span className="text-[11px] text-white/45">
                                        AI development workspace
                                    </span>

                                </div>


                                <p className="mb-2 text-sm text-white/35">
                                    Welcome back, {user?.username}
                                </p>


                                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                                    What are you building today?
                                </h1>


                                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
                                    Understand code, find bugs, improve implementations,
                                    and solve development problems with DevDesk AI.
                                </p>


                                <div className="mt-7 flex flex-wrap gap-3">

                                    <Link
                                        to="/chat"
                                        className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
                                    >
                                        Open AI Chat
                                        <span>→</span>
                                    </Link>


                                    <Link
                                        to="/explainer"
                                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                                    >
                                        Explain code
                                    </Link>

                                </div>

                            </div>

                        </div>


                        {/* Developer tools */}
                        <div className="mb-4">

                            <h2 className="text-sm font-semibold">
                                Developer tools
                            </h2>

                            <p className="mt-1 text-xs text-white/30">
                                Choose a workspace for your current task.
                            </p>

                        </div>


                        {/* AI Chat */}
                        <Link
                            to="/chat"
                            className="group mb-4 block overflow-hidden rounded-2xl border border-white/10 bg-white/3.5 transition duration-200 hover:border-white/20 hover:bg-white/5.5"
                        >

                            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">

                                <div className="flex items-start gap-4">

                                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">

                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        >
                                            <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
                                        </svg>

                                    </div>


                                    <div>

                                        <div className="flex items-center gap-2">

                                            <h2 className="text-sm font-semibold">
                                                AI Chat
                                            </h2>

                                            <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] text-white/35">
                                                GENERAL
                                            </span>

                                        </div>


                                        <p className="mt-2 max-w-xl text-xs leading-5 text-white/35">
                                            Ask questions, discuss architecture, debug ideas,
                                            and work through development problems with AI.
                                        </p>

                                    </div>

                                </div>


                                <span className="text-xs text-white/30 transition-colors group-hover:text-white/70">
                                    Open workspace →
                                </span>

                            </div>

                        </Link>


                        {/* Secondary tools */}
                        <div className="grid gap-4 md:grid-cols-3">

                            {tools.map((tool) => (
                                <Link
                                    key={tool.to}
                                    to={tool.to}
                                    className="group rounded-2xl border border-white/10 bg-white/2.5 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/4.5"
                                >

                                    <div className="mb-6 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70">
                                        {tool.icon}
                                    </div>


                                    <h2 className="text-sm font-semibold">
                                        {tool.title}
                                    </h2>


                                    <p className="mt-2 text-xs leading-5 text-white/35">
                                        {tool.description}
                                    </p>


                                    <div className="mt-5 text-xs text-white/30 transition-colors group-hover:text-white/70">
                                        {tool.action} →
                                    </div>

                                </Link>
                            ))}

                        </div>


                        {/* Workspace status */}
                        <div className="mt-10">

                            <div className="mb-4">

                                <h2 className="text-sm font-semibold">
                                    Workspace
                                </h2>

                                <p className="mt-1 text-xs text-white/30">
                                    Current DevDesk capabilities
                                </p>

                            </div>


                            <div className="grid gap-3 sm:grid-cols-3">

                                <div className="rounded-2xl border border-white/10 bg-white/2.5 p-4">

                                    <div className="flex items-center justify-between">

                                        <span className="text-xs text-white/40">
                                            AI Chat
                                        </span>

                                        <span className="size-1.5 rounded-full bg-emerald-400" />

                                    </div>

                                    <p className="mt-3 text-sm font-medium text-white/75">
                                        Available
                                    </p>

                                </div>


                                <div className="rounded-2xl border border-white/10 bg-white/2.5 p-4">

                                    <div className="flex items-center justify-between">

                                        <span className="text-xs text-white/40">
                                            Code Tools
                                        </span>

                                        <span className="size-1.5 rounded-full bg-emerald-400" />

                                    </div>

                                    <p className="mt-3 text-sm font-medium text-white/75">
                                        3 tools ready
                                    </p>

                                </div>


                                <div className="rounded-2xl border border-white/10 bg-white/2.5 p-4">

                                    <div className="flex items-center justify-between">

                                        <span className="text-xs text-white/40">
                                            Projects
                                        </span>

                                        <span className="size-1.5 rounded-full bg-white/25" />

                                    </div>

                                    <p className="mt-3 text-sm font-medium text-white/50">
                                        Coming next
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>

                </main>

            </div>

        </div>
    )
}