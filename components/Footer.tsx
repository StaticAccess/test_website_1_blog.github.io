export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} LaunchPad: The Future of Products. All rights reserved.</p>
        <p className="mt-2">Discover the latest innovations shaping our world.</p>
      </div>
    </footer>
  )
}

