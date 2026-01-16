import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import PreviewPage from './pages/PreviewPage'
import SharedCardPage from './pages/SharedCardPage'
import ToastProvider from './components/Toast'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <Router>
      <ToastProvider>
        {/* <AnimatePresence mode="wait"> */}
          <AnimatedBackground />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/preview/:id" element={<PreviewPage />} />
              <Route path="/card/:id" element={<SharedCardPage />} />
            </Routes>
          </Layout>
        {/* </AnimatePresence> */}
      </ToastProvider>
    </Router>
  )
}

export default App