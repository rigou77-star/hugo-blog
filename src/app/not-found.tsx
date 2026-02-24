import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center font-mono">
      <h2 className="text-4xl font-bold mb-4">404 - SEGMENTATION FAULT</h2>
      <p className="mb-8">Could not find resource: /dev/null</p>
      <Link href="/" className="border border-[var(--foreground)] px-4 py-2 hover:bg-[var(--foreground)] hover:text-black transition-colors uppercase">
        [ Return to Root ]
      </Link>
    </div>
  );
}
