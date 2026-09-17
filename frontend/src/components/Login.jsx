const url = import.meta.env.VITE_API_BASE_URL


export default function Login() {

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[48px_48px]" />

      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/3 blur-3xl" />

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center px-6 py-12">

        <div className="w-full max-w-sm">

          {/* Brand */}
          <div className="mb-10 text-center">

            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 shadow-[0_0_40px_rgba(255,255,255,0.05)]">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
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

            <h1 className="text-3xl font-semibold tracking-tight">
              DevDesk AI
            </h1>

            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-zinc-500">
              Your intelligent workspace for understanding,
              building, and improving code.
            </p>

          </div>

          {/* Login */}
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 shadow-2xl backdrop-blur-xl">

            <div className="mb-6">

              <h2 className="text-base font-medium text-zinc-100">
                Sign in to your workspace
              </h2>

              <p className="mt-1.5 text-sm text-zinc-500">
                Use your GitHub account to continue.
              </p>

            </div>

            {/* GitHub Button */}
            <button
              type="button"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-zinc-200 active:scale-[0.98]"
              onClick={() => {
                window.location.href = `${url}/users/github/login/`
              }}
            >

              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.35-3.87-1.35-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 5.91c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>

              Continue with GitHub

            </button>
          
            <p className="text-center text-xs leading-5 text-zinc-600">
              Authentication is handled securely through GitHub.
            </p>

          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-xs text-zinc-600">
            Built for developers.
          </p>

        </div>

      </div>

    </main>
  )
}