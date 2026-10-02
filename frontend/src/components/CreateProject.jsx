import { useState } from "react"
import project from "../services/project"

export default function CreateProject(){

    const [name, setName] =  useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const sendProject = async () => {

        const data = {

            'name' : name,
            'description' : description
        }
        setError('')
        setSuccess('')
        setLoading(true)

        const response = await project.createProject(data)
        
        if(response.error){

            setError(response.error)  
        }
        else{

            setSuccess(response.message)
        }

        setLoading(false)
        
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        sendProject()
}


    return (
    <div className="min-h-screen bg-zinc-950 text-white">
        <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-6 py-12">
            <div className="w-full max-w-2xl">

                {/* Header */}
                <div className="mb-8">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/30">
                        Projects
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight">
                        Create Project
                    </h1>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
                        Create a workspace for your project and keep everything
                        organised in one place.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="rounded-3xl border border-white/10 bg-white/2.5 p-6 shadow-2xl shadow-black/20 sm:p-8"
                >
                    <div className="space-y-6">

                        {/* Project name */}
                        <div>
                            <label
                                htmlFor="ProjectName"
                                className="mb-2 block text-sm font-medium text-white/80"
                            >
                                Project name
                            </label>

                            <input
                                id="ProjectName"
                                type="text"
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                                placeholder="e.g. DevDesk AI"
                                className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-white/25 focus:bg-white/5"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label
                                htmlFor="ProjectDesc"
                                className="mb-2 block text-sm font-medium text-white/80"
                            >
                                Description
                            </label>

                            <textarea
                                id="ProjectDesc"
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                                rows="6"
                                placeholder="What are you building?"
                                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-white/25 focus:bg-white/5"
                            />
                        </div>

                        {/* Status */}
                        {loading && (
                            <div className="rounded-xl border border-white/10 bg-white/2.5 px-4 py-3 text-sm text-white/50">
                                Creating project...
                            </div>
                        )}

                        {error && (
                            <div className="rounded-xl border border-red-400/15 bg-red-400/5 px-4 py-3 text-sm text-red-300">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-300">
                                {success}
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs text-white/25">
                                You can edit your project later.
                            </p>

                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                {loading ? "Creating..." : "Create project"}
                            </button>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    </div>
)}