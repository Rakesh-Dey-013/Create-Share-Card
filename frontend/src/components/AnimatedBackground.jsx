import { motion } from 'framer-motion'

const TexturedBackground = ({ textureType = "noise" }) => {
  const textures = {
    noise: () => (
      <>
        {/* Subtle noise overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.8'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Grain effect */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-5 mix-blend-soft-light" />
      </>
    ),
    
    grid: () => (
      <>
        {/* Fine grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
        {/* Diagonal grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.05) 2px, rgba(255, 255, 255, 0.05) 4px)`,
          }}
        />
      </>
    ),
    
    paper: () => (
      <>
        {/* Paper texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjUiIG51bU9jdGF2ZXM9IjUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9Ii4xIDAgMCAwIDAgMCAuMSAwIDAgMCAwIDAgLjEgMCAwIDAgMCAwIDEgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4xIi8+PC9zdmc+')] opacity-10 mix-blend-multiply" />
        {/* Fiber effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center, rgba(255,255,255,0.1) 0%, transparent 70%)] opacity-10" />
      </>
    ),
    
    carbon: () => (
      <>
        {/* Carbon fiber pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '10px 10px',
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 50%, rgba(255, 255, 255, 0.05) 50%)`,
            backgroundSize: '100% 2px',
          }}
        />
      </>
    ),
    
    dots: () => (
      <>
        {/* Dot matrix */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        {/* Animated dots */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </>
    ),
    
    waves: () => (
      <>
        {/* Wave pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,50 C20,30 30,70 50,50 S80,30 100,50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <path d="M0,70 C20,90 30,50 50,70 S80,90 100,70" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)"/>
          </svg>
        </div>
        {/* Animated waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 left-0 w-full h-32 opacity-5"
            style={{
              background: `linear-gradient(transparent, rgba(255,255,255,0.1))`,
              filter: 'blur(10px)',
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </>
    ),
    
    marble: () => (
      <>
        {/* Marble veins */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='marble' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence baseFrequency='0.02 0.05' numOctaves='2' result='noise'/%3E%3CfeDisplacementMap in='SourceGraphic' in2='noise' scale='30'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23marble)' opacity='0.3' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
          }}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent opacity-20" />
      </>
    ),
    
    circuit: () => (
      <>
        {/* Circuit board pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        {/* Animated nodes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/10 rounded-full"
            style={{
              left: `${Math.floor(Math.random() * 19) * 5 + 2}%`,
              top: `${Math.floor(Math.random() * 19) * 5 + 2}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 0px rgba(255,255,255,0.2)',
                '0 0 10px rgba(255,255,255,0.3)',
                '0 0 0px rgba(255,255,255,0.2)'
              ],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </>
    )
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl"
      />
      
      {/* Selected texture */}
      {textures[textureType] && textures[textureType]()}
      
      {/* Subtle moving particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-linear-to-b from-transparent via-white/10 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-10%',
            }}
            animate={{
              y: ['0%', '120%'],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 via-transparent to-zinc-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,10,0.8)_70%)]" />
    </div>
  )
}

export default TexturedBackground