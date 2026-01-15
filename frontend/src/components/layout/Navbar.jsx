import { Link } from 'react-router-dom'
import { Gift, Sparkles } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="glass-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Gift className="w-8 h-8 text-purple-400 animate-float" />
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-ping" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">BirthdayWishes</h1>
              <p className="text-xs text-zinc-500">24h Magic Cards</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="px-4 py-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 transition-all duration-300 border border-purple-500/30 hover:border-purple-400/50"
            >
              Create Card
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar