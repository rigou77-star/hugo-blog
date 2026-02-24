import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-[var(--foreground)] p-4 mb-8 font-mono">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold uppercase">
          <Link href="/" className="hover:bg-[var(--foreground)] hover:text-black px-2 py-1 transition-colors">
            root@jarvis:~#
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline hover:text-[var(--accent)]">[ ./home ]</Link>
          <Link href="/blog" className="hover:underline hover:text-[var(--accent)]">[ ./blog ]</Link>
          <Link href="/products" className="hover:underline hover:text-[var(--accent)]">[ ./store ]</Link>
          <Link href="/about" className="hover:underline hover:text-[var(--accent)]">[ ./about ]</Link>
        </nav>
        <div className="flex space-x-4 text-sm">
           <span>[ STATUS: ONLINE ]</span>
        </div>
      </div>
    </header>
  );
}
