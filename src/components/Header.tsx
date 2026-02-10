import Link from 'next/link';
import { Search, ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass bg-opacity-80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-semibold text-xl tracking-tight text-gray-900 dark:text-white">
              Hugo.
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Store
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              {/* <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span> */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
