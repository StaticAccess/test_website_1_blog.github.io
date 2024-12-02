'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { formatDate } from '../../utils/formatDate'
import { getBlogPost } from '../../utils/blogPosts'
import CommentSection from '../../../components/CommentSection'

interface LikeButtonProps {
  initialLikes: number
  postId: string
}

function LikeButton({ initialLikes }: LikeButtonProps) {
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

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)
  
  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={post.imageUrl} alt={post.title} width={1200} height={600} className="w-full h-96 object-cover" />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
          <div className="flex items-center">
            <Image src={post.author.avatar} alt={`Avatar of ${post.author.name}`} width={32} height={32} className="rounded-full mr-2" />
            <span>{post.author.name}</span>
          </div>
          <span>{formatDate(post.date)}</span>
        </div>
        <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="space-x-4">
          <LikeButton postId={post.id} initialLikes={post.likes} />
          <span>{post.comments} comments</span>
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{post.category}</span>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-sm">{tag}</span>
            ))}
          </div>
        </div>
        <CommentSection postId={post.id} initialComments={post.comments} />
      </div>
    </article>
  )
}

