import { Github, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-[90%] mx-auto py-4 text-gray-300 text-sm bg-zinc-900/70 rounded-lg flex flex-wrap items-center justify-center gap-5 mb-5">
      <span>Created by <span className="text-blue-400">Rakesh Dey</span></span>

      <a
        href="https://github.com/Rakesh-Dey-013"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>

      <a
        href="mailto:rakesh.coding.007@gmail.com"
        className="flex items-center gap-1 hover:text-white transition"
        aria-label="Email"
      >
        <Mail size={20} />
        <span>Contact</span>
      </a>
    </footer>
  )
}

export default Footer