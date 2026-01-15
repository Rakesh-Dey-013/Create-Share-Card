import { useState, useEffect } from 'react'

const useCountdown = (targetDate) => {
  const [remainingTime, setRemainingTime] = useState(targetDate - Date.now())

  useEffect(() => {
    if (remainingTime <= 0) {
      setRemainingTime(0)
      return
    }

    const interval = setInterval(() => {
      setRemainingTime(prev => {
        const newTime = prev - 1000
        return newTime >= 0 ? newTime : 0
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [remainingTime])

  const formatTime = () => {
    if (remainingTime <= 0) return { hours: 0, minutes: 0, seconds: 0, isExpired: true }

    const totalSeconds = Math.floor(remainingTime / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return { hours, minutes, seconds, isExpired: false }
  }

  return { ...formatTime(), totalMs: remainingTime }
}

export default useCountdown