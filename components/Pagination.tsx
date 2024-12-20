import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl?: string
}

export default function Pagination({ currentPage, totalPages, baseUrl = '' }: PaginationProps) {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      {currentPage > 1 && (
        <Link href={`${baseUrl}?page=${currentPage - 1}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Previous
        </Link>
      )}
      {currentPage < totalPages && (
        <Link href={`${baseUrl}?page=${currentPage + 1}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Next
        </Link>
      )}
    </div>
  )
}

