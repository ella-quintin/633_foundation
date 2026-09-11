import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <Rocket className="w-10 h-10 text-purple-500" />
        <h1 className="text-3xl font-semibold">React + Tailwind + Framer Motion</h1>
        <p className="text-gray-500">Edit src/App.jsx to get started</p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <FaGithub className="w-4 h-4" />
          lucide-react + react-icons both installed
        </a>
      </motion.div>
    </div>
  )
}

export default App
