import { notFound } from 'next/navigation'
import BlogPost from '../../../components/BlogPost'
import Pagination from '../../../components/Pagination'
import { getPostsByCategory, getCategories } from '../../utils/blogPosts'

export async function generateStaticParams() {
  const categories = getCategories()
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }))
}

export default function CategoryPage({ params, searchParams }: { params: { category: string }, searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page || '1', 10)
  const postsPerPage = 5
  const { posts, totalPosts } = getPostsByCategory(params.category, page, postsPerPage)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{params.category} Posts</h1>
      {posts.map((post) => (
        <BlogPost key={post.id} {...post} />
      ))}
      <Pagination 
        currentPage={page} 
        totalPages={Math.ceil(totalPosts / postsPerPage)} 
        baseUrl={`/category/${params.category}`}
      />
    </div>
  )
}

