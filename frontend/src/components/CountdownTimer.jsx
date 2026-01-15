import useCountdown from '../hooks/useCountdown'
import { motion } from 'framer-motion'

const CountdownTimer = ({ expiresAt, isExpired: propIsExpired }) => {
  const { hours, minutes, seconds, isExpired } = useCountdown(new Date(expiresAt).getTime())
  
  const expired = propIsExpired || isExpired

  if (expired) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        <div className="text-red-500 text-center py-2 text-lg font-medium tracking-wide">
          🎈 This birthday card has expired
        </div>
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-transparent via-red-500 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden"
    >
      <div className="text-blue-400 text-center py-2 text-lg font-medium tracking-wide">
        Card Expires in: 
        <span className="ml-2 font-mono">
          <motion.span
            key={hours}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            {hours}
          </motion.span>h{" "}
          <motion.span
            key={minutes}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.05 }}
            className="inline-block"
          >
            {minutes}
          </motion.span>m{" "}
          <motion.span
            key={seconds}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-block"
          >
            {seconds}
          </motion.span>s
        </span>
      </div>
      
      {/* Subtle underline animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-transparent via-blue-400 to-transparent"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Pulsing dot animation */}
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.div>
  )
}

export default CountdownTimer