import api from './api'

async function getProjects() {
    try {
        const response = await api.get('/core/projects/')
        return response.data
    }
    catch (err) {
        return { error: 'Error getting the projects' }
    }
}

async function createProject(details) {
    try {
        const response = await api.post('/core/projects/', details)
        return response.data
    }
    catch (err) {
        return { error: 'Error creating project' }
    }
}

async function getProject(slug) {
    try {
        const response = await api.get(`/core/projects/${slug}/`)
        return response.data
    }
    catch (err) {
        return { error: 'Error getting the project details' }
    }
}

async function deleteProject(slug) {
    try {
        const response = await api.delete(`/core/projects/${slug}/`)
        return response.data
    }
    catch (err) {
        return { error: 'Error deleting the project' }
    }
}

export default {
    getProjects,
    createProject,
    getProject,
    deleteProject
}