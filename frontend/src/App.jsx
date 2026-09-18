import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import AuthProvider from './context/AuthContext'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'



export default function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
  
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}