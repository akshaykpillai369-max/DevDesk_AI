import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import AuthProvider from './context/AuthContext'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Chat from './components/Chat'
import CodeExplainer from './components/Explainer'
import CodeDebugger from './components/Debugger'
import CodeImprover from './components/Improver'
import CreateProject from './components/CreateProject'
import ProjectsPage from './components/Projects'
import ProjectDetail from './components/ProjectDetail'


export default function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute>} /> 
        <Route path='/chat' element={ <ProtectedRoute> <Chat /> </ProtectedRoute>} />
        <Route path='/explainer' element={ <ProtectedRoute> <CodeExplainer /> </ProtectedRoute>} />
        <Route path='/debugger' element={ <ProtectedRoute> <CodeDebugger /> </ProtectedRoute>} />
        <Route path='/improver' element={ <ProtectedRoute> <CodeImprover /> </ProtectedRoute>} />
        <Route path="/projects" element={<ProtectedRoute> <ProjectsPage /> </ProtectedRoute> } />
        <Route path="/projects/create-project" element={<ProtectedRoute> <CreateProject /> </ProtectedRoute> } />
        <Route path="/projects/view-project/:slug" element={<ProtectedRoute> <ProjectDetail /> </ProtectedRoute> } />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}