import { useEffect, useRef, useState } from "react"
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


const starterPrompts = [
    {
        title: "Explain this concept",
        prompt: "Explain REST APIs in simple terms with a practical example.",
    },
    {
        title: "Review my approach",
        prompt: "What should I consider when designing a Django REST API for a React application?",
    },
    {
        title: "Help me debug",
        prompt: "What are the most common causes of authentication bugs in a Django REST Framework application?",
    },
]


export default function Chat() {

    const { user } = useAuth()

    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [messages, setMessages] = useState([])

    const messagesEndRef = useRef(null)
    const textareaRef = useRef(null)


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        })
    }


    useEffect(() => {
        scrollToBottom()
    }, [messages, isLoading, error])


    const handleSubmit = async (event) => {

        event.preventDefault()

        if (!message.trim() || isLoading) {
            return
        }

        setError("")

        const userMessage = message.trim()

        setMessage("")

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: userMessage,
            },
        ])

        setIsLoading(true)

        try {

            const result = await ai.sendMessage(userMessage)

            if (typeof result === "object" && result.error) {

                setError(result.error)

            } else {

                setMessages((prev) => [
                    ...prev,
                    {
                        role: "ai",
                        content: result,
                    },
                ])

            }

        } catch {
            setError("Something went wrong while contacting the AI.")
        } finally {
            setIsLoading(false)
        }
    }


    const handleNewChat = () => {

        if (isLoading) {
            return
        }

        setMessages([])
        setMessage("")
        setError("")

        setTimeout(() => {
            textareaRef.current?.focus()
        }, 0)
    }


    const handleStarterPrompt = (prompt) => {

        if (isLoading) {
            return
        }

        setMessage(prompt)

        setTimeout(() => {
            textareaRef.current?.focus()
        }, 0)
    }


    const handleKeyDown = (event) => {

        if (event.key === "Enter" && !event.shiftKey) {

            event.preventDefault()

            if (message.trim() && !isLoading) {
                handleSubmit(event)
            }
        }
    }


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


                {/* Desktop Sidebar */}
                <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-zinc-950/90 p-5 backdrop-blur-xl md:flex md:flex-col">

                    {/* Logo */}
                    <div className="mb-8 flex items-center gap-3">

                        <div className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white text-sm font-bold text-black">
                            D
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


                    {/* New Chat */}
                    <button
                        type="button"
                        onClick={handleNewChat}
                        disabled={isLoading}
                        className="mb-7 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <span className="text-base leading-none">
                            +
                        </span>

                        New Chat
                    </button>


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


                    {/* Current conversation */}
                    <div className="mt-8">

                        <p className="mb-3 px-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/25">
                            Conversation
                        </p>

                        <div className="rounded-xl border border-white/10 bg-white/3.5 px-3 py-3">

                            <div className="flex items-center gap-2">

                                <span className="size-1.5 shrink-0 rounded-full bg-emerald-400" />

                                <p className="truncate text-xs text-white/55">
                                    {messages.length > 0
                                        ? `${messages.length} messages`
                                        : "New conversation"}
                                </p>

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
                                        AI Chat
                                    </h1>

                                    <span className="hidden rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] text-white/30 sm:inline">
                                        GENERAL
                                    </span>

                                </div>

                                <p className="text-[11px] text-white/30">
                                    Your development assistant
                                </p>

                            </div>

                        </div>


                        <div className="flex items-center gap-3">

                            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:flex">

                                <span className="size-1.5 rounded-full bg-emerald-400" />

                                <span className="text-[11px] text-white/50">
                                    AI ready
                                </span>

                            </div>


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


                    {/* Messages */}
                    <section className="min-h-0 flex-1 overflow-y-auto">

                        <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">


                            {/* Empty state */}
                            {messages.length === 0 && !error && (

                                <div className="flex min-h-[calc(100dvh-14rem)] flex-col items-center justify-center text-center">

                                    <div className="mb-5 flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white text-lg font-bold text-black shadow-2xl">
                                        D
                                    </div>


                                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                                        What are you building today?
                                    </h2>


                                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/35">
                                        Ask about code, debugging, architecture,
                                        APIs, databases, or any development problem.
                                    </p>


                                    {/* Starter prompts */}
                                    <div className="mt-8 grid w-full max-w-2xl gap-2 sm:grid-cols-3">

                                        {starterPrompts.map((item) => (

                                            <button
                                                key={item.title}
                                                type="button"
                                                onClick={() => handleStarterPrompt(item.prompt)}
                                                className="group rounded-xl border border-white/10 bg-white/2.5 p-4 text-left transition hover:border-white/20 hover:bg-white/5"
                                            >

                                                <p className="text-xs font-medium text-white/65 transition group-hover:text-white">
                                                    {item.title}
                                                </p>

                                                <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-white/25">
                                                    {item.prompt}
                                                </p>

                                            </button>

                                        ))}

                                    </div>

                                </div>

                            )}


                            {/* Messages */}
                            {messages.length > 0 && (

                                <div className="space-y-6">

                                    {messages.map((msg, index) => (

                                        <div
                                            key={index}
                                            className={
                                                msg.role === "user"
                                                    ? "flex justify-end"
                                                    : "flex justify-start"
                                            }
                                        >

                                            {msg.role === "user" ? (

                                                <div className="max-w-[85%] sm:max-w-2xl">

                                                    <div className="mb-1.5 flex justify-end px-1">
                                                        <span className="text-[10px] text-white/25">
                                                            You
                                                        </span>
                                                    </div>

                                                    <div className="rounded-2xl rounded-br-md border border-white/10 bg-white/10 px-4 py-3.5 sm:px-5">

                                                        <p className="whitespace-pre-wrap text-sm leading-6 text-white/90">
                                                            {msg.content}
                                                        </p>

                                                    </div>

                                                </div>

                                            ) : (

                                                <div className="max-w-[90%] sm:max-w-3xl">

                                                    <div className="mb-2 flex items-center gap-2">

                                                        <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-white text-[9px] font-bold text-black">
                                                            D
                                                        </div>

                                                        <span className="text-xs font-medium text-white/45">
                                                            DevDesk AI
                                                        </span>

                                                    </div>


                                                    <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/3.5 px-4 py-4 sm:px-5">

                                                        <p className="whitespace-pre-wrap text-sm leading-7 text-white/75">
                                                            {msg.content}
                                                        </p>

                                                    </div>

                                                </div>

                                            )}

                                        </div>

                                    ))}


                                    {/* Loading */}
                                    {isLoading && (

                                        <div className="flex justify-start">

                                            <div className="max-w-3xl">

                                                <div className="mb-2 flex items-center gap-2">

                                                    <div className="flex size-6 items-center justify-center rounded-lg bg-white text-[9px] font-bold text-black">
                                                        D
                                                    </div>

                                                    <span className="text-xs text-white/40">
                                                        DevDesk AI
                                                    </span>

                                                </div>


                                                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/10 bg-white/3.5 px-5 py-4">

                                                    <span
                                                        className="size-2 animate-bounce rounded-full bg-white/40"
                                                        style={{ animationDelay: "-0.3s" }}
                                                    />

                                                    <span
                                                        className="size-2 animate-bounce rounded-full bg-white/40"
                                                        style={{ animationDelay: "-0.15s" }}
                                                    />

                                                    <span className="size-2 animate-bounce rounded-full bg-white/40" />

                                                </div>

                                            </div>

                                        </div>

                                    )}


                                    {/* Error */}
                                    {error && (

                                        <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">

                                            <div className="flex items-start gap-3">

                                                <svg
                                                    className="mt-0.5 shrink-0 text-red-400"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                >
                                                    <circle cx="12" cy="12" r="9" />
                                                    <path d="M12 8v4" />
                                                    <path d="M12 16h.01" />
                                                </svg>

                                                <div>

                                                    <p className="text-xs font-medium text-red-400">
                                                        Something went wrong
                                                    </p>

                                                    <p className="mt-1 text-xs leading-5 text-red-400/70">
                                                        {error}
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    )}


                                    <div ref={messagesEndRef} />

                                </div>

                            )}

                        </div>

                    </section>


                    {/* Input */}
                    <div className="shrink-0 border-t border-white/10 bg-zinc-950/80 px-4 pb-4 pt-3 backdrop-blur-xl sm:px-6 lg:px-8">

                        <form
                            onSubmit={handleSubmit}
                            className="mx-auto max-w-4xl"
                        >

                            <div className="relative rounded-2xl border border-white/10 bg-white/3.5 p-2 transition focus-within:border-white/20 focus-within:bg-white/5">

                                <textarea
                                    ref={textareaRef}
                                    value={message}
                                    rows={1}
                                    placeholder="Ask DevDesk anything..."
                                    onChange={(event) => setMessage(event.target.value)}
                                    onKeyDown={handleKeyDown}
                                    disabled={isLoading}
                                    className="max-h-40 min-h-12 w-full resize-none bg-transparent px-3 py-3 pr-14 text-sm leading-6 text-white outline-none placeholder:text-white/25 disabled:cursor-not-allowed disabled:opacity-50"
                                />


                                <button
                                    type="submit"
                                    disabled={!message.trim() || isLoading}
                                    aria-label="Send message"
                                    className="absolute bottom-2.5 right-2.5 flex size-10 items-center justify-center rounded-xl bg-white text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-25"
                                >

                                    {isLoading ? (

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

                                    ) : (

                                        <svg
                                            width="17"
                                            height="17"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 19V5" />
                                            <path d="M6 11l6-6 6 6" />
                                        </svg>

                                    )}

                                </button>

                            </div>


                            <div className="mt-2 flex items-center justify-between px-1">

                                <p className="text-[10px] text-white/20">
                                    Enter to send · Shift + Enter for new line
                                </p>

                                <p className="text-[10px] text-white/20">
                                    {message.length}/4000
                                </p>

                            </div>


                            <p className="mt-1 text-center text-[10px] text-white/15">
                                DevDesk AI can make mistakes. Verify important code and information.
                            </p>

                        </form>

                    </div>

                </main>

            </div>

        </div>
    )
}