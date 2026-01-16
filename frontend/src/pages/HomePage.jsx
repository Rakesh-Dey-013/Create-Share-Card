import { useState } from 'react'
import { Helmet } from "react-helmet-async"
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Send, Sparkles, Heart, Cake } from 'lucide-react'
import { cardAPI } from '../services/api'
import { useToast } from '../components/Toast'

const HomePage = () => {
  const navigate = useNavigate()
  const { showToast } = useToast()

  const [formData, setFormData] = useState({
    name: '',
    message: '',
    category: 'birthday' // 'birthday' or 'proposal'
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCategoryChange = (category) => {
    setFormData(prev => ({
      ...prev,
      category,
      message: category === 'birthday'
        ? 'Wishing you the happiest of birthdays!'
        : 'You mean the world to me!'
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

      showToast(`${formData.category === 'birthday' ? 'Birthday' : 'Proposal'} card created successfully!`, 'success')
      navigate(`/preview/${cardId}`)
    } catch (error) {
      console.error('Error creating card:', error)
      showToast('Failed to create card. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <><Helmet>
      <title>Create & Share Cards | CardWishes</title>
      <meta
        name="description"
        content="Create beautiful birthday and proposal cards that self-destruct after 24 hours. Share magical moments instantly."
      />
    </Helmet>
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
            <span className="text-white">Digital Cards</span>
          </motion.h1>
          <p className="text-zinc-400 text-lg">
            Create beautiful cards that automatically expire after 24 hours
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Create New Card</h2>
          </div>

          {/* Card Category Selection */}
          <div className="mb-8">
            <label className="block text-lg font-medium text-white mb-4">
              Select Card Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* Birthday Card Option */}
              <button
                type="button"
                onClick={() => handleCategoryChange('birthday')}
                className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${formData.category === 'birthday'
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-white/10 hover:border-blue-500/50'
                  }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <Cake className={`w-8 h-8 ${formData.category === 'birthday' ? 'text-blue-400' : 'text-zinc-400'
                    }`} />
                  <span className={`font-semibold ${formData.category === 'birthday' ? 'text-blue-300' : 'text-zinc-300'
                    }`}>
                    Birthday Card
                  </span>
                  {formData.category === 'birthday' && (
                    <motion.div
                      layoutId="activeCard"
                      className="absolute inset-0 border-2 border-blue-500 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              </button>

              {/* Proposal Card Option */}
              <button
                type="button"
                onClick={() => handleCategoryChange('proposal')}
                className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${formData.category === 'proposal'
                    ? 'border-pink-500 bg-pink-500/10'
                    : 'border-white/10 hover:border-pink-500/50'
                  }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <Heart className={`w-8 h-8 ${formData.category === 'proposal' ? 'text-pink-400' : 'text-zinc-400'
                    }`} />
                  <span className={`font-semibold ${formData.category === 'proposal' ? 'text-pink-300' : 'text-zinc-300'
                    }`}>
                    Proposal Card
                  </span>
                  {formData.category === 'proposal' && (
                    <motion.div
                      layoutId="activeCard"
                      className="absolute inset-0 border-2 border-pink-500 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="flex items-center text-lg font-medium text-white">
                {formData.category === 'birthday' ? '🎂' : '💝'}
                <span className="ml-2">
                  {formData.category === 'birthday' ? "Recipient's Name" : "Your Beloved's Name"} *
                </span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={
                  formData.category === 'birthday'
                    ? "Enter the birthday person's name"
                    : "Enter the name of your beloved"
                }
                className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                required
                disabled={loading}
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="flex items-center text-lg font-medium text-white">
                {formData.category === 'birthday' ? '💌' : '✍️'}
                <span className="ml-2">Your Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={
                  formData.category === 'birthday'
                    ? "Write a heartfelt birthday message..."
                    : "Express your love and feelings..."
                }
                rows={4}
                maxLength={200}
                className="w-full px-4 py-3 bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                disabled={loading}
              />
              <div className="text-right text-sm text-zinc-500">
                {formData.message.length}/200 characters
              </div>
            </div>

            {/* Card Preview */}
            <div className="glass-card p-4 rounded-xl border border-white/10">
              <div className="flex items-center space-x-2 mb-2">
                {formData.category === 'birthday' ? (
                  <>
                    <Cake className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-medium">Preview:</span>
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5 text-pink-400" />
                    <span className="text-pink-400 font-medium">Preview:</span>
                  </>
                )}
              </div>
              <p className="text-zinc-400 text-sm">
                A {formData.category === 'birthday' ? 'birthday' : 'proposal'} card for{' '}
                <span className="text-white font-medium">
                  {formData.name || 'Your Friend'}
                </span>
              </p>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading || !formData.name.trim()}
              className={`w-full group relative overflow-hidden text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed ${formData.category === 'birthday'
                  ? 'bg-linear-to-r from-blue-600 to-emerald-500'
                  : 'bg-linear-to-r from-pink-600 to-red-600'
                }`}
            >
              <div className="relative z-10 flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                {loading
                  ? 'Creating...'
                  : formData.category === 'birthday'
                    ? 'Generate Birthday Card'
                    : 'Create Proposal Card'}
              </div>
              <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${formData.category === 'birthday'
                  ? 'bg-linear-to-r from-blue-700 to-emerald-600'
                  : 'bg-linear-to-r from-pink-700 to-red-700'
                }`} />
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
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-semibold">2 Card Types</h3>
              <p className="text-sm text-zinc-400">Birthday & Proposal cards</p>
            </div>
            <div className="p-4 bg-zinc-900/30 rounded-xl">
              <div className="text-2xl mb-2">🔗</div>
              <h3 className="font-semibold">Shareable</h3>
              <p className="text-sm text-zinc-400">Unique link for sharing</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default HomePage