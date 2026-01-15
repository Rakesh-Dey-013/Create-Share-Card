import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Send, Sparkles } from 'lucide-react'
import { cardAPI } from '../services/api'
import { useToast } from '../components/Toast'

const HomePage = () => {
  const navigate = useNavigate()
  const { showToast } = useToast()
  
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      showToast('Please enter a name', 'error')
      return
    }

    setLoading(true)
    
    try {
      const response = await cardAPI.createCard(formData)
      const cardId = response.data.data._id
      
      showToast('Birthday card created successfully!', 'success')
      navigate(`/preview/${cardId}`)
    } catch (error) {
      console.error('Error creating card:', error)
      showToast('Failed to create card. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center mb-12">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          <span className="gradient-text">Create Magic</span>
          <br />
          <span className="text-white">Birthday Cards</span>
        </motion.h1>
        <p className="text-zinc-400 text-lg">
          Create beautiful birthday cards that automatically expire after 24 hours
        </p>
      </div>

      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="glass-card rounded-2xl p-8"
      >
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
          <h2 className="text-2xl font-bold text-white">New Birthday Card</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label className="flex items-center text-lg font-medium text-white">
              <span className="mr-2">🎂</span>
              Recipient's Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter the birthday person's name"
              className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
              required
              disabled={loading}
            />
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label className="flex items-center text-lg font-medium text-white">
              <span className="mr-2">💌</span>
              Birthday Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write a heartfelt birthday message..."
              rows={4}
              maxLength={200}
              className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              disabled={loading}
            />
            <div className="text-right text-sm text-zinc-500">
              {formData.message.length}/200 characters
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading || !formData.name.trim()}
            className="w-full group relative overflow-hidden bg-linear-to-r from-blue-600 to-emerald-400 text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="relative z-10 flex items-center justify-center">
              <Send className="w-5 h-5 mr-2" />
              {loading ? 'Creating...' : 'Generate Birthday Card'}
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </form>

        {/* Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-zinc-900/30 rounded-xl">
            <div className="text-2xl mb-2">⏳</div>
            <h3 className="font-semibold">24h Expiry</h3>
            <p className="text-sm text-zinc-400">Cards disappear after 24 hours</p>
          </div>
          <div className="p-4 bg-zinc-900/30 rounded-xl">
            <div className="text-2xl mb-2">🔗</div>
            <h3 className="font-semibold">Shareable</h3>
            <p className="text-sm text-zinc-400">Unique link for sharing</p>
          </div>
          <div className="p-4 bg-zinc-900/30 rounded-xl">
            <div className="text-2xl mb-2">🎨</div>
            <h3 className="font-semibold">Beautiful</h3>
            <p className="text-sm text-zinc-400">Animated & interactive</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default HomePage