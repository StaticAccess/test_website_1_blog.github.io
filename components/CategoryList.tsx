import Link from 'next/link'

interface CategoryListProps {
  categories: string[]
}

export default function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/category/${category.toLowerCase()}`} className="text-blue-500 hover:underline">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

