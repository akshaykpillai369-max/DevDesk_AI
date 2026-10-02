import { useState } from "react"
import ReactMarkdown from "react-markdown"

export default function AIResult({ content }) {
    const [copiedCode, setCopiedCode] = useState(null)

    if (!content) return null

    const handleCopy = async (code, id) => {
        try {
            await navigator.clipboard.writeText(code)
            setCopiedCode(id)

            setTimeout(() => {
                setCopiedCode(null)
            }, 2000)
        } catch {
            setCopiedCode(null)
        }
    }

    return (
        <div className="max-w-none text-sm text-white/65">
            <ReactMarkdown
                components={{
                    h1: ({ children }) => (
                        <h1 className="mb-2 text-xl font-semibold leading-6 text-white">
                            {children}
                        </h1>
                    ),

                    h2: ({ children }) => (
                        <h2 className="mb-2 mt-4 text-lg font-semibold leading-6 text-white">
                            {children}
                        </h2>
                    ),

                    h3: ({ children }) => (
                        <h3 className="mb-1 mt-3 text-base font-semibold leading-6 text-white">
                            {children}
                        </h3>
                    ),

                    p: ({ children }) => (
                        <p className="mb-1.5 leading-6 text-white/65">
                            {children}
                        </p>
                    ),

                    /*
                     * Main ordered list
                     */
                    ol: ({ children }) => (
                        <ol
                            className="
                                ml-0
                                list-none
                                space-y-2
                                [&>li]:relative
                                [&>li]:pl-7
                                [&>li]:leading-6
                                [&>li]:before:absolute
                                [&>li]:before:left-0
                                [&>li]:before:top-0
                                [&>li]:before:text-white/40
                                [&>li]:before:content-[counter(list-item)]
                            "
                        >
                            {children}
                        </ol>
                    ),

                    /*
                     * All list items.
                     *
                     * We DON'T add the custom number here.
                     * The parent <ol> handles numbers only for
                     * its direct children.
                     */
                    li: ({ children }) => (
                        <li
                            className="
                                leading-6
                                [&>p]:mb-1
                                [&>p:last-child]:mb-0
                                [&>h1]:mt-0
                                [&>h1]:mb-1
                                [&>h2]:mt-0
                                [&>h2]:mb-1
                                [&>h3]:mt-0
                                [&>h3]:mb-1
                                [&>ul]:mt-1
                                [&>ul]:mb-1
                                [&>ol]:mt-1
                                [&>ol]:mb-1
                            "
                        >
                            {children}
                        </li>
                    ),

                    /*
                     * Nested bullet lists
                     */
                    ul: ({ children }) => (
                        <ul className="mb-1 ml-5 list-disc space-y-1">
                            {children}
                        </ul>
                    ),

                    strong: ({ children }) => (
                        <strong className="font-semibold text-white">
                            {children}
                        </strong>
                    ),

                    em: ({ children }) => (
                        <em className="text-white/70">
                            {children}
                        </em>
                    ),

                    /*
                     * Code
                     */
                    code: ({ children, className }) => {
                        const isBlock = Boolean(className)

                        if (!isBlock) {
                            return (
                                <code className="rounded-md bg-white/8 px-1.5 py-0.5 font-mono text-[12px] text-white/80">
                                    {children}
                                </code>
                            )
                        }

                        const language =
                            className.replace("language-", "") || "code"

                        const codeText = String(children).replace(/\n$/, "")

                        const codeId = `${language}-${codeText}`

                        return (
                            <div className="group relative">
                                <div className="flex items-center justify-between border-b border-white/8 bg-white/4 px-4 py-2">
                                    <span className="font-mono text-[11px] uppercase tracking-wider text-white/35">
                                        {language}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleCopy(codeText, codeId)
                                        }
                                        className="rounded-md px-2 py-1 text-[11px] text-white/40 transition hover:bg-white/8 hover:text-white/80"
                                    >
                                        {copiedCode === codeId
                                            ? "Copied"
                                            : "Copy"}
                                    </button>
                                </div>

                                <code
                                    className={`${className} block overflow-x-auto bg-black/30 p-4 font-mono text-[13px] leading-6 text-white/80`}
                                >
                                    {children}
                                </code>
                            </div>
                        )
                    },

                    pre: ({ children }) => (
                        <pre className="mb-2 overflow-hidden rounded-xl border border-white/8 bg-black/30">
                            {children}
                        </pre>
                    ),

                    blockquote: ({ children }) => (
                        <blockquote className="mb-2 border-l-2 border-white/20 pl-4 text-sm leading-6 text-white/50">
                            {children}
                        </blockquote>
                    ),

                    hr: () => (
                        <hr className="my-2 border-white/10" />
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}