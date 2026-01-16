import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Share2, Plus } from 'lucide-react'
import { cardAPI } from '../services/api'
import BirthdayCard from '../components/Card/BirthdayCard'
import CardSkeleton from '../components/Card/CardSkeleton'
import CountdownTimer from '../components/CountdownTimer'
import CopyButton from '../components/CopyButton'
import { useToast } from '../components/Toast'

const PreviewPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { showToast } = useToast()
  
  const [card, setCard] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCard()
  }, [id])

  const fetchCard = async () => {
    try {
      const response = await cardAPI.getCardById(id)
      setCard(response.data)
    } catch (error) {
      console.error('Error fetching card:', error)
      showToast('Failed to load card', 'error')
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  const shareUrl = `${window.location.origin}/card/${id}`

  if (loading) {
    return (
      <div className="space-y-8">
        <CardSkeleton />
      </div>
    )
  }

  if (!card) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-400 mb-4">Card not found</h2>
        <Link to="/" className="text-purple-400 hover:text-purple-300">
          Create a new card
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link
          to="/"
          className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <CountdownTimer 
            expiresAt={card.expiresAt} 
            compact
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Card Preview */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Share2 className="w-6 h-6 mr-2 text-emerald-400" />
            Your Birthday Card
          </h2>
          
          <BirthdayCard card={card} isPreview />
        </div>

        {/* Right Column - Sharing Options */}
        <div className="space-y-8">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Share Your Card</h3>
            <p className="text-zinc-400 mb-6">
              Share this unique link with friends and family. 
              The card will automatically expire in 24 hours.
            </p>
            
            {/* Share URL */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-zinc-400 mb-2">
                Shareable Link
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={shareUrl}
                  readOnly
                  className="flex-1 px-4 py-2 bg-zinc-900/50 border border-white/10 rounded-lg text-white text-sm truncate"
                />
                <CopyButton text={shareUrl} label="Copy" />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">

              
              <button
                onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`Happy Birthday! 🎉 Check out your card: ${shareUrl}`)}`)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-green-900/30 hover:bg-green-800/30 border border-green-700/50 rounded-xl transition-colors"
              >
                <span className="text-green-400">WhatsApp</span>
                <span>Share on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Create Another Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-2xl p-6 border border-purple-500/30"
          >
            <h3 className="text-xl font-bold mb-4">Create Another Card</h3>
            <p className="text-zinc-400 mb-6">
              Want to create more birthday/proposal magic?
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-blue-600 to-emerald-400 rounded-xl hover:from-blue-700 hover:to-emerald-500 transition-all duration-300"
            >
              <Plus className="w-5 h-5" />
              <span>Create New Card</span>
            </Link>
          </motion.div>

          {/* Card Info */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Card Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-zinc-400">Created:</span>
                <span>{new Date(card.createdAt).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Expires:</span>
                <span>{new Date(card.expiresAt).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Status:</span>
                <span className={card.remainingTimeMs <= 0 ? 'text-red-400' : 'text-green-400'}>
                  {card.remainingTimeMs <= 0 ? 'Expired' : 'Active'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PreviewPage