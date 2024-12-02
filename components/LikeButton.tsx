'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

interface LikeButtonProps {
  initialLikes: number
}

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1)
      setLiked(true)
    } else {
      setLikes(likes - 1)
      setLiked(false)
    }
  }

  return (
    <button onClick={handleLike} aria-label="Like button">
      <Heart color={liked ? 'red' : 'grey'} />
      {likes}
    </button>
  )
}

