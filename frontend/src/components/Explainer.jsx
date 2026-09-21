import { useState } from "react"

import ai from "../services/ai"

export default function CodeExplainer() {

    const [code, setCode] = useState('')
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)


    const handleExplain = async (event) => {

        event.preventDefault()

        if (!code.trim() || loading) {
            return
        }

        setLoading(true)

        try {
            const result = await ai.explainCode(code)

            if (typeof result === 'object' && result.error) {
                setResponse(result.error)
            } else {
                setResponse(result)
            }

        } finally {
            setLoading(false)
        }
    }


    return (

        <div className="flex h-screen bg-[#09090b] text-white">

            {/* Sidebar */}
            <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-[#0d0d0f] p-4 md:flex md:flex-col">

                <div className="mb-8 flex items-center gap-3 px-2">

                    <div className="flex size-9 items-center justify-center rounded-xl bg-white font-bold text-black">
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


                <div className="space-y-1">

                    <div className="rounded-xl px-3 py-2.5 text-sm text-white/50 hover:bg-white/5">
                        AI Chat
                    </div>

                    <div className="rounded-xl bg-white/10 px-3 py-2.5 text-sm font-medium text-white">
                        Code Explainer
                    </div>

                    <div className="rounded-xl px-3 py-2.5 text-sm text-white/50 hover:bg-white/5">
                        Bug Finder
                    </div>

                    <div className="rounded-xl px-3 py-2.5 text-sm text-white/50 hover:bg-white/5">
                        Code Improver
                    </div>

                </div>

            </aside>


            {/* Main */}
            <main className="flex min-w-0 flex-1 flex-col">

                {/* Header */}
                <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5 md:px-8">

                    <div>

                        <h2 className="text-sm font-semibold">
                            Code Explainer
                        </h2>

                        <p className="text-xs text-white/35">
                            Understand your code with AI
                        </p>

                    </div>


                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">

                        <span className="size-1.5 rounded-full bg-emerald-400" />

                        <span className="text-xs text-white/60">
                            AI Explainer
                        </span>

                    </div>

                </header>


                {/* Content */}
                <section className="flex-1 overflow-y-auto px-4 py-6 md:px-8">

                    <div className="mx-auto max-w-6xl">

                        {/* Intro */}
                        <div className="mb-6">

                            <h1 className="text-2xl font-semibold tracking-tight">
                                Explain your code
                            </h1>

                            <p className="mt-2 text-sm text-white/40">
                                Paste your code and let DevDesk AI break it down for you.
                            </p>

                        </div>


                        {/* Editor area */}
                        <div className="grid gap-5 lg:grid-cols-2">

                            {/* Code Input */}
                            <div className="flex min-h-125 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111113]">

                                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">

                                    <div className="flex items-center gap-2">

                                        <div className="flex gap-1.5">
                                            <span className="size-2 rounded-full bg-white/20" />
                                            <span className="size-2 rounded-full bg-white/20" />
                                            <span className="size-2 rounded-full bg-white/20" />
                                        </div>

                                        <span className="ml-2 text-xs text-white/40">
                                            code
                                        </span>

                                    </div>

                                    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/40">
                                        Python
                                    </span>

                                </div>


                                <textarea
                                    placeholder="Paste your code here..."
                                    className="min-h-0 flex-1 resize-none bg-transparent p-5 font-mono text-sm leading-7 text-white/80 outline-none placeholder:text-white/20"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                />


                                <div className="border-t border-white/10 p-3">

                                    <button
                                        type="button"
                                        disabled={loading}
                                        className="w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
                                        onClick={handleExplain}
                                    >
                                        {loading ? 'Explaining...' : 'Explain Code'}
                                    </button>

                                </div>

                            </div>


                            {/* Explanation */}
                            <div className="flex min-h-125 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111113]">

                                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">

                                    <div className="flex items-center gap-2">

                                        <div className="flex size-7 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-black">
                                            D
                                        </div>

                                        <span className="text-sm font-medium text-white/70">
                                            AI Explanation
                                        </span>

                                    </div>

                                </div>


                                <div className="flex-1 overflow-y-auto p-6">

                                    {response ? (

                                        <div className="whitespace-pre-wrap text-left text-sm leading-7 text-white/70">
                                            {response}
                                        </div>

                                    ) : (

                                        <div className="flex h-full items-center justify-center text-center">

                                            <div className="max-w-sm">

                                                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-bold">
                                                    D
                                                </div>

                                                <h3 className="text-sm font-medium text-white/70">
                                                    Your explanation will appear here
                                                </h3>

                                                <p className="mt-2 text-xs leading-5 text-white/30">
                                                    Paste some code on the left and click
                                                    <span className="text-white/50">
                                                        {" "}Explain Code
                                                    </span>
                                                    {" "}to get a detailed explanation.
                                                </p>

                                            </div>

                                        </div>

                                    )}

                                </div>

                            </div>

                        </div>


                        {/* Disclaimer */}
                        <p className="mt-4 text-center text-[11px] text-white/20">
                            DevDesk AI can make mistakes. Verify important code and information.
                        </p>

                    </div>

                </section>

            </main>

        </div>

    )
}