import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet-async"
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, RefreshCw } from 'lucide-react'
import { cardAPI } from '../services/api'
import BirthdayCard from '../components/Card/BirthdayCard'
import CardSkeleton from '../components/Card/CardSkeleton'
import CountdownTimer from '../components/CountdownTimer'
import { useToast } from '../components/Toast'

const SharedCardPage = () => {
  const { id } = useParams()
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
      showToast('Card not found or expired', 'error')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <CardSkeleton />
  }

  if (!card) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎈</div>
          <h2 className="text-3xl font-bold text-red-400 mb-2">
            Card Not Available
          </h2>
          <p className="text-zinc-400 mb-6">
            This birthday card has expired or doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            <span>Create Your Own Card</span>
          </Link>
        </div>
      </div>
    )
  }

  const isExpired = card.remainingTimeMs <= 0

  return (
    <>
      <Helmet>
        <title>{card?.name}'s Card 🎉 | CardWishes</title>
        <meta name="description" content={card?.message || "A special card just for you"} />

        <meta property="og:title" content={`${card?.name}'s Card 🎉`} />
        <meta property="og:description" content={card?.message} />
        <meta property="og:image" content="https://create-share-card.vercel.app/social-preview.png" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-2xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-10">
            Special Card for {card.name}
          </h1>
        </div>


        {/* Card Display */}
        <div className="mb-10 flex justify-center">
          <BirthdayCard card={card} />
        </div>


        {/* Countdown Timer */}
        <div className="mb-8">
          <CountdownTimer
            expiresAt={card.expiresAt}
            isExpired={isExpired}
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center space-x-2 px-6 py-3 glass-card rounded-xl hover:bg-white/10 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Create Your Own Card</span>
          </Link>

          <button
            onClick={fetchCard}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-linear-to-r from-blue-600 to-emerald-500 rounded-xl hover:from-blue-700 hover:to-emerald-600 transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Refresh Card</span>
          </button>
        </div>

        {/* Info Message */}
        {!isExpired && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 glass-card rounded-xl p-4 text-center"
          >
            <p className="text-zinc-300">
              💝 Share the birthday joy! This card will automatically disappear in 24 hours.
            </p>
          </motion.div>
        )}
      </motion.div>
    </>
  )
}

export default SharedCardPage