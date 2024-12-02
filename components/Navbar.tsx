import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300">
            LaunchPad
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

