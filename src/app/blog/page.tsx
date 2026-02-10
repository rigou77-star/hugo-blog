import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    slug: 'hello-world',
    title: 'Hello, World!',
    date: '2026-02-10',
    summary: 'The journey begins here.',
  },
  {
    slug: 'nextjs-intro',
    title: 'Why I Chose Next.js',
    date: '2026-02-09',
    summary: 'A deep dive into the modern web stack.',
  },
];

export default function BlogList() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="group border-b border-gray-100 dark:border-gray-800 pb-8 last:border-0">
            <Link href={`/blog/${post.slug}`} className="block hover:opacity-80 transition-opacity">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.summary}</p>
              <div className="flex items-center text-blue-600 font-medium">
                Read more <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
