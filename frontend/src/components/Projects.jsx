import { useEffect, useState } from "react"
import project from "../services/project"
import { Link, useNavigate } from "react-router-dom"
import slugify from "slugify";


export default function ProjectsPage() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [slug, setSlug] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProjects() {
            const response = await project.getProjects()

            if (response.error) {
                setError(response.error)
            } else {
                setProjects(response)
                
            }

            setLoading(false)
        }

        fetchProjects()
    }, [])

    const handleClick = (slug) => {

        setSlug(slug)
        navigate(`/projects/view-project/${slug}`)
        


    }

    if (loading) {
        return (
            <div className="min-h-dvh bg-[#09090b] text-white">
                <div className="flex min-h-dvh items-center justify-center">
                    <div className="flex items-center gap-3 text-sm text-white/40">
                        <div className="size-4 animate-spin rounded-full border-2 border-white/10 border-t-white/60" />
                        Loading projects...
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-dvh bg-[#09090b] text-white">
                <div className="flex min-h-dvh items-center justify-center">
                    <div className="rounded-xl border border-red-400/10 bg-red-400/5 px-6 py-5 text-center">
                        <p className="text-sm text-red-300/80">
                            {error}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-dvh bg-[#09090b] text-white">
            {/* Background */}
            <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[48px_48px]" />

            <main className="relative mx-auto max-w-7xl px-6 py-10 lg:px-10">
                {/* Header */}
                <div className="mb-10 flex items-start justify-between gap-6">
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-white/50" />
                            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
                                Workspace
                            </span>
                        </div>

                        <h1 className="text-3xl font-semibold tracking-tight text-white">
                            Projects
                        </h1>

                        <p className="mt-2 max-w-lg text-sm leading-6 text-white/40">
                            Manage your development projects and keep your
                            code organised in one place.
                        </p>
                    </div>

                    <Link
                        to="/projects/create-project"
                        type="button"
                        className="
                            flex shrink-0 items-center gap-2
                            rounded-xl
                            border border-white/10
                            bg-white/5
                            px-4 py-2.5
                            text-sm font-medium
                            text-white/80
                            transition
                            hover:border-white/15
                            hover:bg-white/8
                            hover:text-white
                        "
                    >
                        <svg
                            className="size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                d="M12 5v14M5 12h14"
                                strokeLinecap="round"
                            />
                        </svg>

                        New Project
                    </Link>
                </div>

                {/* Stats */}
                <div className="mb-8 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/8 bg-white/3 p-5">
                        <p className="text-xs text-white/30">
                            Total Projects
                        </p>

                        <p className="mt-2 text-2xl font-semibold text-white">
                            {projects.length}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-white/3 p-5">
                        <p className="text-xs text-white/30">
                            Workspace
                        </p>

                        <p className="mt-2 text-sm font-medium text-white/70">
                            Personal
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-white/3 p-5">
                        <p className="text-xs text-white/30">
                            Status
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-emerald-400/70" />
                            <p className="text-sm font-medium text-white/70">
                                Connected
                            </p>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                {projects.length === 0 ? (
                    <div className="flex min-h-80 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/2">
                        <div className="max-w-sm text-center">
                            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl border border-white/8 bg-white/4">
                                <svg
                                    className="size-5 text-white/30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                >
                                    <path
                                        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h3l2 2h6A2.5 2.5 0 0 1 20 9.5v7A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <h2 className="text-sm font-medium text-white/80">
                                No projects yet
                            </h2>

                            <p className="mt-1 text-xs leading-5 text-white/35">
                                Create your first project to start building
                                your workspace.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-sm font-medium text-white/70">
                                Your Projects
                            </h2>

                            <span className="text-xs text-white/25">
                                {projects.length}{" "}
                                {projects.length === 1
                                    ? "project"
                                    : "projects"}
                            </span>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {projects.map((item) => (
                                <div
                                    key={item.id}
                                    
                                    className="
                                        group
                                        rounded-2xl
                                        border border-white/8
                                        bg-white/3
                                        p-5
                                        transition
                                        hover:-translate-y-0.5
                                        hover:border-white/15
                                        hover:bg-white/5
                                    "
                                >
                                    {/* Card top */}
                                    <div className="mb-6 flex items-start justify-between gap-4">
                                        <div className="flex size-10 items-center justify-center rounded-xl border border-white/8 bg-white/5">
                                            <svg
                                                className="size-5 text-white/50"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                            >
                                                <path
                                                    d="M4 7.5A2.5 2.5 0 0 1 6.5 5h3l2 2h6A2.5 2.5 0 0 1 20 9.5v7A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>

                                        <button
                                            type="button"
                                            className="rounded-lg p-1.5 text-white/20 opacity-0 transition group-hover:opacity-100 hover:bg-white/5 hover:text-white/60"
                                        >
                                            <svg
                                                className="size-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <circle
                                                    cx="5"
                                                    cy="12"
                                                    r="1"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="1"
                                                />
                                                <circle
                                                    cx="19"
                                                    cy="12"
                                                    r="1"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Card content */}
                                    <h3 className="truncate text-base font-medium text-white/90">
                                        {item.name}
                                    </h3>

                                    <p className="mt-2 min-h-10 line-clamp-2 text-sm leading-5 text-white/40">
                                        {item.description ||
                                            "No description provided."}
                                    </p>

                                    {/* Card footer */}
                                    <div className="mt-6 flex items-center justify-between border-t border-white/6 pt-4">
                                        <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-white/30">
                                            {item.slug}
                                        </span>

                                        <button
                                            onClick={(()=> {handleClick(item.slug)})}
                                            type="button"
                                            className="flex items-center gap-1.5 text-xs font-medium text-white/40 transition hover:text-white/80"
                                        >
                                            Open
                                            <svg
                                                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    d="M5 12h14M13 6l6 6-6 6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>

        
    )
}