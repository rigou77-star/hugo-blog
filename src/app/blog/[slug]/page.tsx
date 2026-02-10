import Link from 'next/link';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  // In a real app, you would fetch data here based on slug
  const post = {
    title: `Post: ${slug}`,
    date: '2026-02-10',
    content: `
      <p>This is a placeholder for the actual markdown content.</p>
      <p>Imagine beautiful typography here, rendered from your markdown files.</p>
      <h2>Subheading</h2>
      <p>More text goes here. The <code>prose</code> class from Tailwind makes it look great automatically.</p>
      <ul>
        <li>Point one</li>
        <li>Point two</li>
        <li>Point three</li>
      </ul>
    `,
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back to Blog</Link>
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight not-prose">
          {post.title}
        </h1>
        <p className="text-gray-500 mb-8 text-sm uppercase tracking-wide not-prose">{post.date}</p>
        
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}
