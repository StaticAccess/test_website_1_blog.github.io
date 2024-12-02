import Link from 'next/link'
import Image from 'next/image'
import {formatDate}  from '../app/utils/formatDate'
import { BlogPost as BlogPostType } from '../app/utils/blogPosts'

export default function BlogPost(post: BlogPostType) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <Link href={`/post/${post.id}`}>
        <Image src={post.imageUrl} alt={`Cover image for ${post.title}`} width={800} height={400} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-6">
        <Link href={`/post/${post.id}`} className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 mb-2 block">
          {post.title}
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Image src={post.author.avatar} alt={`Avatar of ${post.author.name}`} width={24} height={24} className="rounded-full mr-2" />
            <span>{post.author.name}</span>
          </div>
          <span>{formatDate(post.date)}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{post.category}</span>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>{post.readTime} min read</span>
            <span>{post.comments} comments</span>
            <span>{post.likes} likes</span>
          </div>
        </div>
      </div>
    </article>
  )
}

