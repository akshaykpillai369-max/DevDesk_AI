import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import AuthProvider from './context/AuthContext'
import Fake from './components/fake'

export default function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/success' element={<Fake />} />
  
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}