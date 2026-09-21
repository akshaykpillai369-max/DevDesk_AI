import { useState } from "react"
import ai from "../services/ai"

export default function Chat() {

    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [messages, setMessages] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!message.trim() || isLoading) {
            return
        }

        setError('')


        const userMessage = message.trim()

        setMessage('')

        setMessages((prev) => [
            ...prev,
            {
                role: 'user',
                content: userMessage
            }
        ])

        setIsLoading(true)

        const result = await ai.sendMessage(userMessage)

        if (typeof result === 'object' && result.error) {
            setError(result.error)
        } else {
            setMessages((prev) => [
                ...prev,
                {
                    role: 'ai',
                    content: result
                }
            ])
        }

        setIsLoading(false)
    }

    return (
        <div className="flex h-screen bg-[#09090b] text-white">

            {/* Sidebar */}
            <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-[#0d0d0f] p-4 md:flex md:flex-col">

                <div className="mb-8 flex items-center gap-3 px-2">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-white text-black font-bold">
                        D
                    </div>

                    <div>
                        <h1 className="text-sm font-semibold">
                            DevDesk AI
                        </h1>

                        <p className="text-xs text-white/40">
                            Developer workspace
                        </p>
                    </div>
                </div>

                <button
                    className="mb-6 flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium transition hover:bg-white/10"
                    onClick={() => {
                        setMessages([])
                        setMessage('')
                        setError('')
                        setIsLoading(false)
                    }}
                >
                    + New Chat
                </button>

                <div>
                    <p className="mb-3 px-2 text-[11px] font-medium uppercase tracking-wider text-white/30">
                        Recent
                    </p>

                    <div className="rounded-lg px-3 py-2 text-sm text-white/60 hover:bg-white/5">
                        Current conversation
                    </div>
                </div>

                

            </aside>

            {/* Main Chat */}
            <main className="flex min-w-0 flex-1 flex-col">

                {/* Header */}
                <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5 md:px-8">

                    <div>
                        <h2 className="text-sm font-semibold">
                            AI Chat
                        </h2>

                        <p className="text-xs text-white/35">
                            Your development assistant
                        </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                        <span className="size-1.5 rounded-full bg-emerald-400" />
                        <span className="text-xs text-white/60">
                            AI Chat
                        </span>
                    </div>

                </header>

                {/* Messages */}
                <section className="flex-1 overflow-y-auto px-4 py-8 md:px-8">

                    <div className="mx-auto flex max-w-4xl flex-col gap-6">

                        {messages.length === 0 && !error && (
                            <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">

                                <div className="mb-5 flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl font-bold">
                                    D
                                </div>

                                <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                    What are you building today?
                                </h1>

                                <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                                    Ask DevDesk AI about code, debugging,
                                    architecture, or anything related to development.
                                </p>

                            </div>
                        )}

                       {messages.length > 0 && (
                            <>
                                {messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={
                                            msg.role === 'user'
                                                ? 'flex justify-end'
                                                : 'flex justify-start'
                                        }
                                    >
                                        {msg.role === 'user' ? (
                                            <div className="max-w-2xl rounded-2xl rounded-br-md border border-white/10 bg-white/10 px-5 py-3.5">
                                                <p className="mb-1 text-[11px] font-medium text-white/35">
                                                    You
                                                </p>

                                                <p className="whitespace-pre-wrap text-sm leading-6 text-white/90">
                                                    {msg.content}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="max-w-3xl rounded-2xl rounded-bl-md border border-white/10 bg-[#111113] px-5 py-4">

                                                <div className="mb-2 flex items-center gap-2">
                                                    <div className="flex size-6 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-black">
                                                        D
                                                    </div>

                                                    <span className="text-xs font-medium text-white/50">
                                                        DevDesk AI
                                                    </span>
                                                </div>

                                                <p className="whitespace-pre-wrap text-sm leading-7 text-white/80">
                                                    {msg.content}
                                                </p>

                                            </div>
                                        )}
                                    </div>
                                ))}

                                {isLoading && (
                                    <div className="flex items-center gap-1.5 px-4 py-3">
                                        <span className="size-2 animate-bounce rounded-full bg-white/40 [animation-delay:-0.3s]" />
                                        <span className="size-2 animate-bounce rounded-full bg-white/40 [animation-delay:-0.15s]" />
                                        <span className="size-2 animate-bounce rounded-full bg-white/40" />
                                    </div>
                                )}
                            </>
                        )}

                        {error && (
                            <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
                                {error}
                            </div>
                        )}

                    </div>

                </section>

                {/* Input */}
                <div className="shrink-0 px-4 pb-5 md:px-8">

                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto max-w-4xl"
                    >

                        <div className="flex items-end gap-3 rounded-2xl border border-white/10 bg-[#111113] p-2 shadow-2xl">

                            <input
                                type="text"
                                value={message}
                                placeholder="Ask DevDesk anything..."
                                onChange={(e) => setMessage(e.target.value)}
                                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-white/25"
                            />

                            <button
                                type="submit"
                                disabled={!message.trim() || isLoading}
                                className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                ↑
                            </button>

                            

                        </div>

                        <p className="mt-2 text-center text-[11px] text-white/20">
                            DevDesk AI can make mistakes. Verify important code and information.
                        </p>

                    </form>

                </div>

            </main>

        </div>
    )
}