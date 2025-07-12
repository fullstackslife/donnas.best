import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Journal from './pages/journal'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b p-4">
          <div className="max-w-3xl mx-auto flex gap-4">
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
              Home
            </Link>
            <Link to="/journal" className="text-blue-600 hover:text-blue-800 font-medium">
              Journal
            </Link>
          </div>
        </nav>
        
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-100 py-6 mt-16">
          <div className="max-w-3xl mx-auto text-center text-gray-600">
            <p>© 2024 Donna's Best - A caregiving story project</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App