import Link from 'next/link';

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
    <div className="container mx-auto px-4 py-12 max-w-4xl font-mono">
      <div className="mb-8 border-b border-[var(--foreground)] pb-4">
        <h1 className="text-4xl font-bold uppercase">/var/log/hugo-blog</h1>
        <p className="opacity-70 mt-2">&gt; Listing all entries...</p>
      </div>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="group border border-[var(--foreground)] p-6 hover:bg-[rgba(0,255,0,0.1)] transition-colors relative">
            <div className="absolute top-0 right-0 border-l border-b border-[var(--foreground)] px-2 text-xs">
              TYPE: MARKDOWN
            </div>
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex items-center space-x-2 text-sm opacity-70 mb-2">
                <span>[{post.date}]</span>
                <span>root@jarvis</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 uppercase group-hover:underline decoration-2 underline-offset-4">
                {post.title}
              </h2>
              <p className="opacity-80 mb-4 font-mono line-clamp-3">
                {post.summary}
              </p>
              <div className="text-right font-bold uppercase text-sm group-hover:animate-pulse">
                [ READ_FILE ]
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
