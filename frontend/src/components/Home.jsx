import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090a] text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-size-[56px_56px]" />

        <div className="absolute left-1/2 -top-70 h-162.5 w-162.5 -translate-x-1/2 rounded-full bg-white/[0.035] blur-[120px]" />

        <div className="absolute left-1/2 top-125 h-100 w-175 -translate-x-1/2 rounded-full bg-zinc-500/2.5 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 shadow-lg">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M7 8L3.5 12L7 16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 8L20.5 12L17 16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 5L10 19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span className="text-sm font-semibold tracking-tight">
            DevDesk AI
          </span>

        </div>

        <div className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>

          <a href="#workflow" className="transition hover:text-white">
            How it works
          </a>

          <a href="#about" className="transition hover:text-white">
            About
          </a>
        </div>

      
        <Link to='/login' className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white">
          Sign in
        </Link>


      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-28 text-center lg:pt-36">

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          AI workspace for developers
        </div>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
          Your code.
          <br />

          <span className="text-zinc-600">
            Understood.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
          DevDesk AI helps you understand unfamiliar code, find bugs,
          improve implementations, and build software with deeper
          understanding.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">

        
          <Link to='/login' className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 active:scale-[0.98]">
            Start building

            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M4 10H16M11 5L16 10L11 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </Link>
      

        </div>

        <p className="mt-5 text-xs text-zinc-700">
          GitHub authentication · Developer-first · Built for learning
        </p>

      </section>

      {/* Product Preview */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">

        <div className="relative">

          {/* Glow behind product */}
          <div className="absolute -inset-10 -z-10 rounded-[40px] bg-white/2.5 blur-3xl" />

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0c0d0f] shadow-[0_30px_100px_rgba(0,0,0,0.55)]">

            {/* Window bar */}
            <div className="flex h-12 items-center border-b border-zinc-800 px-4">

              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
              </div>

              <div className="mx-auto rounded-md border border-zinc-800 bg-zinc-900 px-8 py-1 text-[10px] text-zinc-600">
                workspace / devdesk
              </div>

              <div className="w-13" />

            </div>

            {/* Application */}
            <div className="grid min-h-110 md:grid-cols-[190px_1fr]">

              {/* Sidebar */}
              <aside className="hidden border-r border-zinc-800 p-4 md:block">

                <div className="mb-7 flex items-center gap-2 px-2">

                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900">
                    <span className="text-xs">&gt;_</span>
                  </div>

                  <span className="text-xs font-medium text-zinc-300">
                    DevDesk
                  </span>

                </div>

                <div className="space-y-1">

                  <div className="rounded-lg bg-zinc-900 px-3 py-2.5 text-xs text-zinc-200">
                    AI Chat
                  </div>

                  <div className="px-3 py-2.5 text-xs text-zinc-600">
                    Code Explainer
                  </div>

                  <div className="px-3 py-2.5 text-xs text-zinc-600">
                    Bug Finder
                  </div>

                  <div className="px-3 py-2.5 text-xs text-zinc-600">
                    Code Improver
                  </div>

                </div>

                <div className="mt-8 border-t border-zinc-900 pt-5">

                  <p className="px-3 text-[9px] font-medium tracking-[0.18em] text-zinc-700">
                    PROJECTS
                  </p>

                  <p className="mt-3 px-3 text-xs text-zinc-600">
                    devdesk-api
                  </p>

                  <p className="mt-3 px-3 text-xs text-zinc-700">
                    ecommerce
                  </p>

                </div>

              </aside>

              {/* Main */}
              <div className="flex flex-col">

                <div className="border-b border-zinc-800 px-6 py-5 sm:px-8">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                        AI CHAT
                      </p>

                      <h3 className="mt-1 text-sm font-medium text-zinc-300">
                        Developer Assistant
                      </h3>
                    </div>

                    <div className="rounded-md border border-zinc-800 px-2.5 py-1 text-[10px] text-zinc-600">
                      Gemini
                    </div>

                  </div>

                </div>

                <div className="flex-1 space-y-5 p-6 sm:p-8">

                  {/* User message */}
                  <div className="ml-auto max-w-xl rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">

                    <div className="mb-2 text-[9px] tracking-[0.15em] text-zinc-700">
                      YOU
                    </div>

                    <p className="text-xs leading-6 text-zinc-400">
                      Why is my JWT authentication returning
                      a 401 after the access token expires?
                    </p>

                  </div>

                  {/* AI message */}
                  <div className="max-w-xl rounded-xl border border-zinc-800/70 bg-[#0a0b0d] p-4">

                    <div className="mb-2 flex items-center gap-2 text-[9px] tracking-[0.15em] text-zinc-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      DEVdesk AI
                    </div>

                    <p className="text-xs leading-6 text-zinc-500">
                      The access token is short-lived. Once it expires,
                      requests using it are rejected with a 401.
                      Your refresh token should be used to obtain a
                      new access token.
                    </p>

                    <div className="mt-4 rounded-lg border border-zinc-800 bg-black p-3 font-mono text-[10px] leading-5 text-zinc-600">
                      <span className="text-zinc-700">POST</span>{" "}
                      /api/users/token/refresh/
                      <br />
                      <span className="text-zinc-700">→</span>{" "}
                      new access token
                    </div>

                  </div>

                </div>

                {/* Input */}
                <div className="border-t border-zinc-800 p-4 sm:p-5">

                  <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3">

                    <span className="flex-1 text-xs text-zinc-700">
                      Ask about your code...
                    </span>

                    <div className="rounded-md border border-zinc-800 px-2 py-1 text-[9px] text-zinc-700">
                      Enter
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 mx-auto max-w-6xl px-6 pb-32"
      >

        <div className="mb-14 max-w-2xl">

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            What DevDesk does
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Think about the code.
            <br />
            <span className="text-zinc-600">
              Not just the syntax.
            </span>
          </h2>

        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-2">

          <Feature
            number="01"
            title="Understand"
            description="Turn unfamiliar code into clear explanations. Understand what each part does and how the pieces connect."
          />

          <Feature
            number="02"
            title="Debug"
            description="Find problems in your implementation and understand the reasoning behind the fix instead of blindly applying it."
          />

          <Feature
            number="03"
            title="Improve"
            description="Identify cleaner approaches, better patterns, and opportunities to make your code more maintainable."
          />

          <Feature
            number="04"
            title="Build"
            description="Keep your development context together while you work through real projects and real problems."
          />

        </div>

      </section>

      {/* Workflow */}
      <section
        id="workflow"
        className="relative z-10 border-y border-zinc-900"
      >

        <div className="mx-auto max-w-6xl px-6 py-28">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                The workflow
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                From problem
                <br />
                to understanding.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-500">
                DevDesk is designed to help you understand why something
                works, why it fails, and how to improve it.
              </p>

            </div>

            <div className="space-y-3">

              <Step
                number="01"
                title="Bring your problem"
                text="Ask about the code you're currently working on."
              />

              <Step
                number="02"
                title="Understand the issue"
                text="Get an explanation of what's happening and why."
              />

              <Step
                number="03"
                title="Implement the solution"
                text="Apply the fix and keep ownership of the code."
              />

              <Step
                number="04"
                title="Build with confidence"
                text="Learn from the process and move forward."
              />

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center"
      >

        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
          DevDesk AI
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Stop guessing.
          <br />
          <span className="text-zinc-600">
            Start understanding.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-500 mb-6">
          A developer workspace built around understanding your code,
          solving problems, and becoming better at building software.
        </p>

        
        <Link to='/login'className="mt-9 rounded-xl bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 active:scale-[0.98]">
          Get started
        </Link>
      

      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <span>
            © 2026 DevDesk AI
          </span>

          <span>
            Built for developers who want to understand.
          </span>

        </div>

      </footer>

    </main>
  )
}

function Feature({ number, title, description }) {
  return (
    <div className="group bg-[#08090a] p-8 transition-colors hover:bg-[#0c0d0f] sm:p-10">

      <div className="flex items-start justify-between">

        <span className="text-[10px] font-medium tracking-[0.15em] text-zinc-700">
          {number}
        </span>

        <svg
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-zinc-800 transition-all duration-200 group-hover:translate-x-1 group-hover:text-zinc-500"
        >
          <path
            d="M4 10H16M11 5L16 10L11 15"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </div>

      <h3 className="mt-12 text-lg font-medium text-zinc-200">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
        {description}
      </p>

    </div>
  )
}

function Step({ number, title, text }) {
  return (
    <div className="group flex gap-5 rounded-xl border border-zinc-900 bg-[#0a0b0d] p-5 transition hover:border-zinc-800">

      <span className="pt-0.5 text-[10px] font-medium tracking-[0.15em] text-zinc-700">
        {number}
      </span>

      <div>
        <h3 className="text-sm font-medium text-zinc-300">
          {title}
        </h3>

        <p className="mt-1.5 text-xs leading-5 text-zinc-600">
          {text}
        </p>
      </div>

    </div>
  )
}