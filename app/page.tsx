import Link from 'next/link'
import BlogPost from '../components/BlogPost'
import Pagination from '../components/Pagination'
import CategoryList from '../components/CategoryList'
import FeaturedPost from '../components/FeaturedPost'
import { getBlogPosts, getCategories } from './utils/blogPosts'

export default function Home({ searchParams }: { searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page || '1', 10)
  const postsPerPage = 5
  const { posts, totalPosts } = getBlogPosts(page, postsPerPage)
  const categories = getCategories()
  const featuredPost = posts[0] // Assume the first post is featured

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">LaunchPad: The Future of Products</h1>
      <div className="mb-12">
        <FeaturedPost post={featuredPost} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
          {posts.slice(1).map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
          <Pagination 
            currentPage={page} 
            totalPages={Math.ceil(totalPosts / postsPerPage)} 
          />
        </div>
        <div className="space-y-8">
          <CategoryList categories={categories} />
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">About LaunchPad</h3>
            <p className="text-sm text-gray-600">
              Discover the latest innovations and product launches across various industries. 
              Our blog covers cutting-edge tech, sustainable solutions, and groundbreaking ideas 
              shaping the future.
            </p>
            <Link href="/about" className="text-blue-500 hover:underline mt-2 inline-block">
              Learn more about LaunchPad
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

