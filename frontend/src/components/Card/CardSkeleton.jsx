const CardSkeleton = () => {
  return (
    <div className="max-w-md mx-auto glass-card rounded-2xl p-8 animate-pulse">
      <div className="space-y-6">
        {/* Icon skeleton */}
        <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto" />
        
        {/* Title skeleton */}
        <div className="space-y-2">
          <div className="h-8 bg-zinc-800 rounded w-48 mx-auto" />
          <div className="h-4 bg-zinc-800 rounded w-32 mx-auto" />
        </div>

        {/* Name skeleton */}
        <div className="py-4 px-6 bg-zinc-900/50 rounded-xl">
          <div className="h-4 bg-zinc-800 rounded w-24 mx-auto" />
          <div className="h-6 bg-zinc-800 rounded w-36 mx-auto mt-2" />
        </div>

        {/* Message skeleton */}
        <div className="bg-zinc-900/50 rounded-xl p-6 space-y-3">
          <div className="h-4 bg-zinc-800 rounded" />
          <div className="h-4 bg-zinc-800 rounded w-5/6" />
          <div className="h-4 bg-zinc-800 rounded w-4/6" />
        </div>
      </div>
    </div>
  )
}

export default CardSkeleton