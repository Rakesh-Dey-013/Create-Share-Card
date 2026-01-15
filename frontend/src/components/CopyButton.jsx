import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { useToast } from './Toast'

const CopyButton = ({ text, label = 'Copy Link' }) => {
  const [copied, setCopied] = useState(false)
  const { showToast } = useToast()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      showToast('Link copied to clipboard!', 'success')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      showToast('Failed to copy link', 'error')
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center justify-center space-x-2 px-6 py-3 bg-linear-to-r from-blue-600 to-emerald-500 rounded-xl hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
    >
      {copied ? (
        <Check className="w-5 h-5 text-white" />
      ) : (
        <Copy className="w-5 h-5 text-white" />
      )}
      <span className="text-white font-semibold">
        {copied ? 'Copied!' : label}
      </span>
    </button>
  )
}

export default CopyButton