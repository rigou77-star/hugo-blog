import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-48 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Simplicity is the ultimate<br className="hidden md:inline" /> sophistication.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          Sharing thoughts on technology, design, and life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blog" className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
            Read the Blog
          </Link>
          <Link href="/products" className="px-8 py-3 rounded-full bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors">
            Browse Store
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Latest Thoughts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden mb-4 group-hover:shadow-md transition-shadow">
                  {/* Placeholder for image */}
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                    Cover Image
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  The Future of Digital Interaction
                </h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                  Exploring how AI agents like Jarvis are reshaping our daily workflows and creative processes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Teaser */}
       <section className="w-full py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Curated Goods</h2>
           <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
             High-quality digital assets and physical products designed for creators.
           </p>
           <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-black text-white rounded-3xl p-12 flex flex-col items-center justify-center aspect-square text-center">
                <h3 className="text-3xl font-bold mb-4">Pro Workspace Kit</h3>
                <p className="text-gray-400 mb-8">Everything you need to organize your digital life.</p>
                <button className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
                  Coming Soon
                </button>
             </div>
             <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-12 flex flex-col items-center justify-center aspect-square text-center">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Digital Garden Template</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8">The exact code running this site.</p>
                <button className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  View Source
                </button>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
