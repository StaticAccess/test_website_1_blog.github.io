export const metadata = {
  title: 'About - LaunchPad: The Future of Products',
  description: 'Learn about our testing site for web scraping',
}

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About LaunchPad</h1>
      <div className="prose max-w-none">
        <p>
          Welcome to LaunchPad: The Future of Products! This website is a testing ground designed specifically for web scraping exercises and experiments.
        </p>
        <p>
          Our blog features a variety of fictional product launches across different industries. The content here is generated for the purpose of providing diverse and structured data for scraping practice.
        </p>
        <h2>Key Features for Scraping:</h2>
        <ul>
          <li>Multiple blog posts with varied content and metadata</li>
          <li>Pagination for testing scraping across multiple pages</li>
          <li>Category pages to practice navigating and scraping specific sections</li>
          <li>Individual post pages with rich content and metadata</li>
          <li>Interactive elements like likes and comments (note: these are client-side only and reset on page refresh)</li>
        </ul>
        <p>
          This site is built using Next.js and uses static generation for optimal performance. All pages, including this about page, are statically generated at build time.
        </p>
        <p>
          Please note that while we encourage responsible scraping for educational and testing purposes, we ask that you be mindful of the frequency and volume of your requests to avoid unnecessary load on our servers.
        </p>
        <p>
          Happy scraping!
        </p>
      </div>
    </div>
  )
}

