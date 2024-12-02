import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-6">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
          New Product Launch Blog
        </Link>
      </nav>
    </header>
  )
}

