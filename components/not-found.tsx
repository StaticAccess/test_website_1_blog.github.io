import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">Page Not Found</h2>
      <p className="mb-4">Oops! The page you are looking for does not exist.</p>
      <Link href="/">
        <a className="text-blue-500 hover:underline">Go back to homepage</a>
      </Link>
    </div>
  )
}

